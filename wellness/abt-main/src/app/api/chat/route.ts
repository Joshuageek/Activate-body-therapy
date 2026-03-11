import { GoogleGenerativeAI } from "@google/generative-ai";
import { SITE_CONTENT } from "../../../siteContent";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  // Check if API key is configured
  if (!process.env.GEMINI_API_KEY) {
    console.error("GEMINI_API_KEY not configured");
    return new Response("Service temporarily unavailable", { status: 503 });
  }

  const { messages } = await req.json();

  if (!messages || !Array.isArray(messages)) {
    return new Response("Invalid request body", { status: 400 });
  }

  // Enhanced system instructions
  const systemInstruction = `You are a friendly, professional, and knowledgeable assistant for Activate Body Therapy, a premier wellness and rehabilitation center located in Kampala, Uganda.

IMPORTANT GUIDELINES:
- ONLY answer questions based on the website content provided below
- Always be warm, empathetic, and professional in your tone
- Keep responses concise but informative
- Always mention prices in UGX when discussing service costs
- Recommend specific services based on user symptoms or goals
- Mention consultation requirements for clinical services
- Include booking contact information when relevant
- Use emojis occasionally to add warmth to responses

PRICING GUIDELINES:
- Always quote prices in UGX (Ugandan Shillings)
- Mention consultation-based pricing for clinical services
- Provide price ranges when applicable

SERVICE RECOMMENDATIONS:
- For pain: Recommend Neuromuscular Therapy, Physiotherapy, or Deep Tissue Massage
- For stress: Recommend Aromatherapy Massage, Therapeutic Massage, or Hot Stone Therapy
- For athletes: Recommend Sports Therapy, IV Therapy, or Rehabilitation
- For pregnancy: Recommend Prenatal Therapy or Postnatal Therapy
- For skincare: Recommend relevant facial treatments

BOOKING INFORMATION:
- Phone: +256 708-661-166
- Email: activatebodytherapy@gmail.com
- Location: Plot 78 prince Charles drive, Kampala Uganda
- Hours: Mon-Sat: 8AM-8PM | Sun: 10AM-6PM

If someone asks something not covered in the content below, respond warmly with:
"That's a great question! I'm only able to help with information about Activate Body Therapy. For anything else, feel free to reach out to us directly at activatebodytherapy@gmail.com or call +256 708-661-166."

---
${SITE_CONTENT}
---`;

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: systemInstruction,
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
    });

    const chat = model.startChat({
      history: messages.slice(0, -1).map((m: { role: string; content: string }) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      })),
    });

    const lastMessage = messages[messages.length - 1].content;

    if (!lastMessage || lastMessage.trim() === "") {
      return new Response("Please provide a message", { status: 400 });
    }

    const result = await chat.sendMessageStream(lastMessage);

    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of result.stream) {
            const text = chunk.text();
            if (text) {
              controller.enqueue(new TextEncoder().encode(text));
            }
          }
          controller.close();
        } catch (error) {
          console.error("Stream error:", error);
          controller.error(error);
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error) {
    console.error("Gemini API error:", error);
    
    // Return a helpful error message
    return new Response(
      JSON.stringify({
        error: "I'm having trouble connecting right now. Please try again or contact us directly at activatebodytherapy@gmail.com or +256 708-661-166."
      }),
      { 
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}

export const config = {
  runtime: "edge",
};
