// Analytics API for chat interactions (Optional)
export async function POST(req: Request) {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    const { message, type, timestamp } = await req.json();
    
    // Log analytics data (you can integrate with your preferred analytics service)
    console.log(`Chat Analytics - ${type}: ${message}`, {
      type,
      message: message.substring(0, 100), // Truncate for privacy
      timestamp,
      userAgent: req.headers.get("user-agent"),
    });

    // You could store this in a database, send to Google Analytics, etc.
    // For now, just logging to console

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Analytics error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

export const config = {
  runtime: "edge",
};
