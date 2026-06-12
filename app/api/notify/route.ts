import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      console.error("❌ GOOGLE_SCRIPT_URL variable is missing in .env.local configuration.");
      return NextResponse.json({ success: false, error: "Missing Environment Endpoint URL" }, { status: 500 });
    }

    // Convert the data payload into stable URL-encoded strings to preserve properties across redirects
    const queryParameters = new URLSearchParams();
    Object.entries(data).forEach(([key, val]) => {
      queryParameters.append(key, String(val));
    });

    // Append parameters directly onto our script URL execution path
    const targetRedirectUrl = `${scriptUrl}?${queryParameters.toString()}`;

    console.log("✈️ Dispatching stable URL data packet to Google Engine...");

    const googleResponse = await fetch(targetRedirectUrl, {
      method: "GET", // Switch to GET for streamlined, lightweight parameters tracking
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