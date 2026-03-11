import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Become from "@/components/ui/BecomeAMember";
import ChatWidget from "@/components/chat/ChatWidget";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        {children}
      </main>

      <Footer />

      {/* GLOBAL FLOATING BUTTON */}
      <Become />
      
      {/* AI Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default Layout;
