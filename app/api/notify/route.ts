import { NextResponse } from "next/server";

const ASKEVA_API_ENDPOINT = "https://api.askeva.io/v1/whatsapp/send";
const ASKEVA_AUTH_TOKEN = process.env.ASKEVA_API_TOKEN;
const DESTINATION_NUMBER = process.env.OPERATIONS_WHATSAPP_NUMBER; // Your desk

// Helper to strip formatting artifacts out of phone number parameters
function cleanPhoneNumber(rawPhone: string): string {
  let cleaned = rawPhone.replace(/\D/g, "");
  if (cleaned.length === 10) {
    cleaned = "91" + cleaned; // Default to India country code if 10 digits
  }
  return cleaned;
}

// 1. Helper to send your INTERNAL team desk alerts (Plain Text)
async function sendInternalDeskAlert(targetNumber: string, messageText: string) {
  if (!ASKEVA_AUTH_TOKEN || !targetNumber) return false;
  
  try {
    await fetch(ASKEVA_API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${ASKEVA_AUTH_TOKEN}`,
      },
      body: JSON.stringify({
        to: cleanPhoneNumber(targetNumber),
        type: "text",
        text: { body: messageText },
      }),
    });
    return true;
  } catch (error) {
    console.error("Askeva Internal Desk Notification Error:", error);
    return false;
  }
}

// 2. Helper to trigger the approved Meta MARKETING Template directly to the Parent
async function sendParentTemplateWelcome(parentPhone: string, parentName: string) {
  if (!ASKEVA_AUTH_TOKEN) return false;

  try {
    // Official structure required by Askeva for Meta Approved MARKETING templates
    const payload = {
      to: cleanPhoneNumber(parentPhone),
      type: "template",
      template: {
        name: "uped_parent_welcome", // Matches your exact approved template name row 1
        language: { code: "en" },
        components: [
          {
            type: "body",
            parameters: [
              {
                type: "text",
                text: parentName // Securely injects the parent's name string into your {{1}} variable
              }
            ]
          }
        ]
      }
    };

    const response = await fetch(ASKEVA_API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${ASKEVA_AUTH_TOKEN}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    console.log("[Askeva Template API Server Response Log]:", data);
    
    return response.ok;
  } catch (error) {
    console.error("Askeva Parent Template Dispatch Error:", error);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      console.error("❌ GOOGLE_SCRIPT_URL variable is missing in .env.local configuration.");
      return NextResponse.json({ success: false, error: "Missing Environment Endpoint URL" }, { status: 500 });
    }

    const { formType, name, parentName, phone, whatsapp, role, experience, sourcePage } = data;
    const clientName = name || parentName || "Parent";
    const customerPhone = phone || whatsapp;
    const currentUrl = sourcePage || "Website Form";

    // --- ASKEVA WHATSAPP PIPELINE DESK ROUTER ---
    if (customerPhone) {
      let teamWhatsappMessage = "";
      const isCareer = formType === "career" || currentUrl.includes("careers");

      if (isCareer) {
        teamWhatsappMessage = `*🚨 NEW TUTOR APPLICATION*\n• *Name:* ${clientName}\n• *Phone:* ${customerPhone}\n• *Role:* ${role || "Tutor"}\n• *Exp:* ${experience || "0"} Yrs`;
      } else {
        teamWhatsappMessage = `*🔥 NEW STUDENT LEAD CAPTURED*\n• *Parent:* ${clientName}\n• *WhatsApp:* ${customerPhone}\n• *Source URL:* ${currentUrl}`;
      }

      // 1. Alert your team dashboard number instantly
      if (DESTINATION_NUMBER) {
        sendInternalDeskAlert(DESTINATION_NUMBER, teamWhatsappMessage);
      }

      // 2. Trigger the approved dynamic Meta Template to the parent
      if (!isCareer) {
        sendParentTemplateWelcome(customerPhone, clientName);
      }
    }
    // ─────────────────────────────────────────────

    // Maintain your Google App Sheets synchronization stream smoothly
    const queryParameters = new URLSearchParams();
    Object.entries(data).forEach(([key, val]) => {
      queryParameters.append(key, String(val));
    });

    const targetRedirectUrl = `${scriptUrl}?${queryParameters.toString()}`;

    console.log("✈️ Dispatching data packet to Google App Sheets Engine...");

    const googleResponse = await fetch(targetRedirectUrl, {
      method: "GET",
      redirect: "follow",
    });

    const textData = await googleResponse.text();
    return NextResponse.json({ success: true, response: textData });
  } catch (error: any) {
    console.error("❌ Critical Pipeline Crash Context:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal Bridge Connection Failure" },
      { status: 500 }
    );
  }
}