import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import PageDots from "@/components/PageDots";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Index from "./pages/Index";
import ComoFunciona from "./pages/ComoFunciona";
import Ejemplos from "./pages/Ejemplos";
import Precios from "./pages/Precios";
import SobreNosotros from "./pages/SobreNosotros";
import FAQPage from "./pages/FAQPage";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";
import Review from "./pages/Review";
import ResetReview from "./pages/ResetReview";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/como-funciona" element={<ComoFunciona />} />
            <Route path="/ejemplos" element={<Ejemplos />} />
            <Route path="/precios" element={<Precios />} />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/review" element={<Review />} />
            <Route path="/reset-review" element={<ResetReview />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <PageDots />
          <WhatsAppFloat />
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
