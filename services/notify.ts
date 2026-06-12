export async function sendEmailNotification(payload: {
  formType: string;
  parentName?: string;
  phone: string;
  sourcePage: string;
  [key: string]: any; // Allows dynamic extra parameters
}) {
  try {
    const targetUrl = "https://script.google.com/macros/s/AKfycbwaoZPBmsBk6FRWMEg8OxE7MuDippbvSw3OGWpLr-R7kHlSnN0k5R5JKiLcxOJFagiByw/exec";

    // Loop through ALL parameters in the payload dynamically
    const searchParams = new URLSearchParams();
    Object.entries(payload).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        searchParams.append(key, String(value));
      }
    });

    // Direct fire to the cloud engine node with full attributes preserved
    await fetch(`${targetUrl}?${searchParams.toString()}`, {
      method: "GET",
      mode: "no-cors"
    });

    return { success: true };
  } catch (err) {
    console.error("Direct transmission bridge failure context:", err);
    return { success: false };
  }
}