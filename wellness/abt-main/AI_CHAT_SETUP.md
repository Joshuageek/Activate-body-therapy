# AI Chatbot Setup Instructions

## 🚀 Quick Setup Guide

### 1. Install Dependencies
```bash
npm install @google/generative-ai
```

### 2. Environment Variables
Create or update your `.env.local` file:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### 3. Get Gemini API Key
1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Create a new API key
3. Add it to your `.env.local` file

### 4. Integration Steps

#### Step 1: Add Chat Widget to Layout
Update your `src/components/layout/Layout.tsx`:

```tsx
import ChatWidget from "@/components/chat/ChatWidget";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
      
      {/* AI Chat Widget */}
      <ChatWidget />
    </div>
  );
};
```

#### Step 2: Fix Import Path
Update `src/app/api/chat/route.ts` import:
```tsx
import { SITE_CONTENT } from "../../siteContent"; // Fixed path
```

### 5. Development Server
```bash
npm run dev
```

### 6. Test the Chatbot
- You'll see a green chat bubble in the bottom-right corner
- Click it to open the chat
- Try questions like:
  - "What services do you offer?"
  - "How much does a massage cost?"
  - "Tell me about IV therapy"

## 🎨 Features Included

### ✅ Core Features
- **Beautiful UI** matching your brand colors
- **Streaming responses** for real-time chat
- **Quick action buttons** for common questions
- **Mobile responsive** design
- **Typing indicators** and animations
- **Error handling** with retry logic

### 🤖 AI Features
- **Content-based responses** using your site content
- **Service recommendations** based on user needs
- **Pricing information** in UGX
- **Booking guidance** and contact info
- **Professional and warm** tone

### 📊 Analytics (Optional)
- **Chat interaction tracking**
- **User behavior insights**
- **Question analysis**
- **Performance metrics**

## 🔧 Configuration Options

### Customization
You can customize the chat widget by modifying:

#### Quick Actions
```tsx
const QUICK_ACTIONS = [
  "What services do you offer?",
  "How much does a massage cost?",
  // Add your own...
];
```

#### Welcome Message
```tsx
const WELCOME_MESSAGE: Message = {
  role: "assistant",
  content: "Your custom welcome message...",
};
```

#### Colors and Styling
Update the CSS in `ChatWidget.tsx` to match your preferences.

### AI Behavior
Modify the system instructions in `route.ts` to change:
- Response tone
- Service recommendations
- Pricing format
- Booking information

## 🚨 Troubleshooting

### Common Issues

#### 1. "Cannot find module '@google/generative-ai'"
**Solution:** Install the dependency
```bash
npm install @google/generative-ai
```

#### 2. "GEMINI_API_KEY not configured"
**Solution:** Add the API key to `.env.local`
```env
GEMINI_API_KEY=your_actual_api_key
```

#### 3. Chat not appearing
**Solution:** Ensure the widget is imported in Layout.tsx

#### 4. AI responses are generic
**Solution:** Check that SITE_CONTENT is properly imported and accessible

### Debug Mode
Add console logging to debug:
```tsx
// In ChatWidget.tsx
console.log("Sending message:", trimmed);
console.log("AI Response:", fullResponse);
```

## 📱 Mobile Optimization

The chat widget is fully responsive:
- **Desktop:** 370px width, 560px height
- **Mobile:** Full width with 70vh height
- **Touch-friendly** buttons and inputs

## 🔒 Security Considerations

- API key is stored in environment variables
- Content filtering is enabled by Gemini
- No user data is stored permanently
- Analytics are optional and anonymized

## 💡 Pro Tips

### 1. Custom Prompts
Add industry-specific prompts:
```tsx
const systemInstruction = `You are a wellness expert specializing in...
// Add your expertise areas
`;
```

### 2. Multi-language Support
```tsx
// Detect user language and adjust responses
const userLanguage = detectLanguage(message);
```

### 3. Appointment Booking
```tsx
// Add booking integration
if (message.includes("book") || message.includes("appointment")) {
  return bookingFlow();
}
```

## 🎯 Success Metrics

Monitor these metrics:
- **Question types** users ask
- **Response satisfaction**
- **Booking conversions**
- **Peak usage times**

## 📞 Support

If you need help:
1. Check the console for errors
2. Verify API key configuration
3. Test with simple questions first
4. Contact support at activatebodytherapy@gmail.com

---

**Your AI chatbot is now ready to assist customers 24/7! 🎉**
