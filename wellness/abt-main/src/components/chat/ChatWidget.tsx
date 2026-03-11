import { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { SITE_CONTENT } from "../../siteContent";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp?: number;
}

const WELCOME_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hello! 👋 Welcome to Activate Body Therapy. I'm here to help you with information about our services, pricing, team, and more. How can I assist you today?",
};

const SYSTEM_INSTRUCTION = `You are a friendly, professional, and knowledgeable assistant for Activate Body Therapy, a premier wellness and rehabilitation center located in Kampala, Uganda.

IMPORTANT GUIDELINES:
- ONLY answer questions based on the website content provided below
- Always be warm, empathetic, and professional in your tone
- Keep responses concise but informative
- Always mention prices in UGX when discussing service costs
- Recommend specific services based on user symptoms or goals
- Mention consultation requirements for clinical services
- Include booking contact information when relevant
- Use emojis occasionally to add warmth to responses
- If someone asks something not covered in the content, respond with: "That's a great question! I'm only able to help with information about Activate Body Therapy. For anything else, feel free to reach out to us directly at activatebodytherapy@gmail.com or call +256 708-661-166."
- Never make up prices, services, or information not in the content below

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

WEBSITE CONTENT:
${SITE_CONTENT}`;

const QUICK_ACTIONS = [
  "What services do you offer?",
  "How much does a massage cost?",
  "How do I book an appointment?",
  "Tell me about IV therapy",
  "What are your opening hours?",
  "Where are you located?"
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Client-side AI chatbot - v2.1 (debug version)
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 100);
  }, [isOpen]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    // Simple rate limiting - prevent rapid requests
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      const timeSinceLastMessage = Date.now() - (lastMessage.timestamp || 0);
      if (timeSinceLastMessage < 500) { // 0.5 second cooldown
        console.log('Please wait a moment before sending another message...');
        setMessages((prev) => [...prev, { 
          role: "assistant", 
          content: "⏳ Please wait a moment before sending another message..." 
        }]);
        setTimeout(() => {
          setMessages((prev) => prev.slice(0, -1));
        }, 2000);
        return;
      }
    }

    // Debug: Check if API key is available
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    console.log('API Key available:', !!apiKey);
    console.log('API Key length:', apiKey?.length || 0);

    const userMessage: Message = { 
      role: "user", 
      content: trimmed,
      timestamp: Date.now()
    };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    try {
      const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash", // Try the newer 2.0 model
      });

      const history = newMessages.slice(1, -1).map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      }));

      const chat = model.startChat({ history });
      console.log('Sending message to Gemini:', trimmed);
      const result = await chat.sendMessageStream(SYSTEM_INSTRUCTION + "\n\n" + trimmed);

      let fullResponse = "";
      for await (const chunk of result.stream) {
        const text = chunk.text();
        if (text) {
          fullResponse += text;
          setMessages((prev) => {
            const updated = [...prev];
            updated[updated.length - 1] = {
              role: "assistant",
              content: fullResponse,
            };
            return updated;
          });
        }
      }
    } catch (error) {
      console.error("Gemini error:", error);
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content:
            "Sorry, I'm having trouble connecting right now. Please contact us directly at:\n\n📧 activatebodytherapy@gmail.com\n📞 +256 708-661-166\n\nWe're here to help!",
        };
        return updated;
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleQuickAction = (action: string) => {
    setInput(action);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        .abt-widget * { box-sizing: border-box; font-family: 'DM Sans', sans-serif; }
        .abt-bubble {
          position: fixed; bottom: 28px; right: 28px; width: 58px; height: 58px;
          border-radius: 50%; background: linear-gradient(135deg, #2d6a4f 0%, #1b4332 100%);
          border: none; cursor: pointer; display: flex; align-items: center;
          justify-content: center; box-shadow: 0 4px 24px rgba(27,67,50,0.35);
          transition: transform 0.2s ease, box-shadow 0.2s ease; z-index: 9999;
        }
        .abt-bubble:hover { transform: scale(1.08); box-shadow: 0 6px 30px rgba(27,67,50,0.45); }
        .abt-bubble svg { width: 26px; height: 26px; color: #fff; }
        .abt-window {
          position: fixed; bottom: 100px; right: 28px; width: 370px; height: 560px;
          background: #faf9f6; border-radius: 20px; box-shadow: 0 8px 48px rgba(0,0,0,0.14);
          display: flex; flex-direction: column; overflow: hidden; z-index: 9998;
          transform-origin: bottom right; animation: abt-pop 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        @keyframes abt-pop { from { opacity: 0; transform: scale(0.85); } to { opacity: 1; transform: scale(1); } }
        .abt-header {
          background: linear-gradient(135deg, #2d6a4f 0%, #1b4332 100%);
          padding: 18px 20px; display: flex; align-items: center; gap: 12px;
        }
        .abt-header-avatar {
          width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,0.15);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .abt-header-avatar svg { width: 22px; height: 22px; color: #fff; }
        .abt-header-text { flex: 1; }
        .abt-header-name {
          font-family: 'Cormorant Garamond', serif; font-size: 17px; font-weight: 500;
          color: #fff; letter-spacing: 0.02em; line-height: 1.2;
        }
        .abt-header-status { font-size: 11.5px; color: rgba(255,255,255,0.7); font-weight: 300; margin-top: 1px; }
        .abt-status-dot {
          display: inline-block; width: 7px; height: 7px; border-radius: 50%;
          background: #74c69d; margin-right: 5px; animation: abt-pulse 2s infinite;
        }
        @keyframes abt-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        .abt-close {
          background: none; border: none; cursor: pointer; color: rgba(255,255,255,0.7);
          padding: 4px; display: flex; align-items: center; border-radius: 6px;
          transition: color 0.15s, background 0.15s;
        }
        .abt-close:hover { color: #fff; background: rgba(255,255,255,0.1); }
        .abt-close svg { width: 18px; height: 18px; }
        .abt-messages {
          flex: 1; overflow-y: auto; padding: 18px 16px;
          display: flex; flex-direction: column; gap: 12px; scroll-behavior: smooth;
        }
        .abt-messages::-webkit-scrollbar { width: 4px; }
        .abt-messages::-webkit-scrollbar-thumb { background: #d0e8da; border-radius: 4px; }
        .abt-msg { display: flex; gap: 8px; max-width: 88%; animation: abt-fadein 0.18s ease; }
        @keyframes abt-fadein { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        .abt-msg.user { align-self: flex-end; flex-direction: row-reverse; }
        .abt-msg.assistant { align-self: flex-start; }
        .abt-msg-bubble { padding: 11px 14px; border-radius: 16px; font-size: 13.5px; line-height: 1.55; font-weight: 400; white-space: pre-wrap; }
        .abt-msg.user .abt-msg-bubble {
          background: linear-gradient(135deg, #2d6a4f, #1b4332); color: #fff; border-bottom-right-radius: 4px;
        }
        .abt-msg.assistant .abt-msg-bubble {
          background: #fff; color: #2c2c2c; border: 1px solid #e8ede9;
          border-bottom-left-radius: 4px; box-shadow: 0 1px 4px rgba(0,0,0,0.05);
        }
        .abt-typing { display: flex; align-items: center; gap: 4px; padding: 12px 14px; }
        .abt-typing span { width: 7px; height: 7px; border-radius: 50%; background: #b0c4b8; animation: abt-bounce 1.2s infinite; }
        .abt-typing span:nth-child(2) { animation-delay: 0.18s; }
        .abt-typing span:nth-child(3) { animation-delay: 0.36s; }
        @keyframes abt-bounce { 0%, 60%, 100% { transform: translateY(0); } 30% { transform: translateY(-5px); } }
        .abt-quick-actions {
          padding: 8px 16px; display: flex; flex-wrap: wrap; gap: 6px;
          background: #f8faf8; border-bottom: 1px solid #e8ede9;
        }
        .abt-quick-action {
          padding: 6px 10px; background: #fff; border: 1px solid #d0e8da; border-radius: 12px;
          font-size: 11px; color: #2d6a4f; cursor: pointer; transition: all 0.15s ease; font-weight: 400;
        }
        .abt-quick-action:hover { background: #2d6a4f; color: #fff; border-color: #2d6a4f; }
        .abt-footer { padding: 12px 14px 16px; background: #fff; border-top: 1px solid #eef1ee; }
        .abt-input-row {
          display: flex; align-items: center; gap: 8px; background: #f4f7f4;
          border: 1.5px solid #e0ebe2; border-radius: 14px; padding: 9px 12px; transition: border-color 0.15s;
        }
        .abt-input-row:focus-within { border-color: #2d6a4f; }
        .abt-input {
          flex: 1; border: none; background: transparent; font-size: 13.5px;
          color: #2c2c2c; outline: none; font-family: 'DM Sans', sans-serif; font-weight: 400;
        }
        .abt-input::placeholder { color: #a0b4a5; }
        .abt-send {
          background: none; border: none; cursor: pointer; color: #2d6a4f;
          display: flex; align-items: center; padding: 2px; border-radius: 6px;
          transition: color 0.15s, transform 0.1s;
        }
        .abt-send:hover:not(:disabled) { color: #1b4332; transform: scale(1.1); }
        .abt-send:disabled { color: #b0c4b8; cursor: not-allowed; }
        .abt-send svg { width: 20px; height: 20px; }
        .abt-footer-note { text-align: center; font-size: 10.5px; color: #a0b4a5; margin-top: 7px; font-weight: 300; }
        @media (max-width: 480px) {
          .abt-window { width: calc(100vw - 20px); right: 10px; bottom: 86px; height: 70vh; }
          .abt-bubble { bottom: 20px; right: 16px; }
          .abt-quick-actions { padding: 6px 12px; }
          .abt-quick-action { font-size: 10px; padding: 5px 8px; }
        }
      `}</style>

      <div className="abt-widget">
        {isOpen && (
          <div className="abt-window">
            <div className="abt-header">
              <div className="abt-header-avatar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <div className="abt-header-text">
                <div className="abt-header-name">Activate Body Therapy</div>
                <div className="abt-header-status">
                  <span className="abt-status-dot" />
                  Here to help
                </div>
              </div>
              <button className="abt-close" onClick={() => setIsOpen(false)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Quick Actions */}
            {messages.length === 1 && (
              <div className="abt-quick-actions">
                {QUICK_ACTIONS.map((action, index) => (
                  <button
                    key={index}
                    className="abt-quick-action"
                    onClick={() => handleQuickAction(action)}
                  >
                    {action}
                  </button>
                ))}
              </div>
            )}

            <div className="abt-messages">
              {messages.map((msg, i) => (
                <div key={i} className={`abt-msg ${msg.role}`}>
                  <div className="abt-msg-bubble">
                    {msg.content === "" && msg.role === "assistant" ? (
                      <div className="abt-typing"><span /><span /><span /></div>
                    ) : (
                      msg.content
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="abt-footer">
              <div className="abt-input-row">
                <input
                  ref={inputRef}
                  className="abt-input"
                  placeholder="Ask about services, pricing, booking..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={isLoading}
                />
                <button className="abt-send" onClick={sendMessage} disabled={isLoading || !input.trim()}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </div>
              <div className="abt-footer-note">Activate Body Therapy · Kampala, Uganda</div>
            </div>
          </div>
        )}

        <button className="abt-bubble" onClick={() => setIsOpen((v) => !v)}>
          {isOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}
