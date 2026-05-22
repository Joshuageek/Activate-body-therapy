import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import SEO from "@/components/seo/SEO";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Usawa from "./pages/Usawa";
import Clinic from "./pages/Clinic";
import HealthClub from "./pages/Health-club";
import Membership from "./pages/Membership";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const routeMeta: Record<string, {
  title: string;
  description: string;
  url: string;
  image: string;
  index?: boolean;
  type?: string;
}> = {
  "/": {
    title: "Activate Body Therapy",
    description: "Professional physiotherapy, pain relief, and holistic wellness treatments designed for recovery and performance.",
    url: "https://activatebodytherapy.com/",
    image: "https://activatebodytherapy.com/logo.png",
  },
  "/services": {
    title: "Services | Activate Body Therapy",
    description: "Discover our comprehensive clinical and wellness services including physiotherapy, sports therapy, dry needling, massage, and IV treatments.",
    url: "https://activatebodytherapy.com/services",
    image: "https://activatebodytherapy.com/logo.png",
  },
  "/clinic": {
    title: "Clinic | Activate Body Therapy",
    description: "Explore our clinic services for pain relief, rehabilitation, injury recovery, and long-term wellness support.",
    url: "https://activatebodytherapy.com/clinic",
    image: "https://activatebodytherapy.com/logo.png",
  },
  "/health-club": {
    title: "Health Club | Activate Body Therapy",
    description: "Join our health club for fitness classes, recovery treatments, IV therapy, nutrition support, and wellness membership benefits.",
    url: "https://activatebodytherapy.com/health-club",
    image: "https://activatebodytherapy.com/logo.png",
  },
  "/membership": {
    title: "Membership | Activate Body Therapy",
    description: "Choose a membership plan that unlocks wellness benefits, fitness support, recovery therapies, and exclusive clinic offers.",
    url: "https://activatebodytherapy.com/membership",
    image: "https://activatebodytherapy.com/logo.png",
  },
  "/about": {
    title: "About Us | Activate Body Therapy",
    description: "Learn about Activate Body Therapy’s expert team, patient-first care, and evidence-based approach to recovery and wellness.",
    url: "https://activatebodytherapy.com/about",
    image: "https://activatebodytherapy.com/logo.png",
  },
  "/contact": {
    title: "Contact | Activate Body Therapy",
    description: "Get in touch with Activate Body Therapy to book appointments, ask questions, or learn more about our wellness and rehab services.",
    url: "https://activatebodytherapy.com/contact",
    image: "https://activatebodytherapy.com/logo.png",
  },
  "/blog": {
    title: "Blog | Activate Body Therapy",
    description: "Read wellness tips, therapy insights, and recovery advice from Activate Body Therapy’s wellness blog.",
    url: "https://activatebodytherapy.com/blog",
    image: "https://activatebodytherapy.com/logo.png",
  },
  "/products": {
    title: "Products | Activate Body Therapy",
    description: "Browse our wellness products designed to support recovery, relaxation, and healthy living.",
    url: "https://activatebodytherapy.com/products",
    image: "https://activatebodytherapy.com/logo.png",
  },
  "/usawa": {
    title: "Usawa | Activate Body Therapy",
    description: "Explore Usawa Café and wellness cuisine offerings that support balance, nutrition, and recovery.",
    url: "https://activatebodytherapy.com/usawa",
    image: "https://activatebodytherapy.com/logo.png",
  },
  "/admin/login": {
    title: "Admin Login | Activate Body Therapy",
    description: "Secure admin login for Activate Body Therapy website administration.",
    url: "https://activatebodytherapy.com/admin/login",
    image: "https://activatebodytherapy.com/logo.png",
    index: false,
  },
  "/admin": {
    title: "Admin | Activate Body Therapy",
    description: "Activate Body Therapy admin dashboard.",
    url: "https://activatebodytherapy.com/admin",
    image: "https://activatebodytherapy.com/logo.png",
    index: false,
  },
};

const RouteSeo = () => {
  const location = useLocation();
  const path = location.pathname.endsWith("/") && location.pathname !== "/"
    ? location.pathname.slice(0, -1)
    : location.pathname;
  const meta = routeMeta[path] ?? routeMeta["/"];

  return <SEO {...meta} />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <RouteSeo />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/products" element={<Products />} />
          <Route path="/usawa" element={<Usawa />} />
          <Route path="/clinic" element={<Clinic />} />  
          <Route path="/health-club" element={<HealthClub />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
