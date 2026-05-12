import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Fonts from "./pages/Fonts.tsx";
import Components from "./pages/Components.tsx";
import ServiceAreas from "./pages/ServiceAreas.tsx";
import FAQ from "./pages/FAQ.tsx";
import CTA from "./pages/CTA.tsx";
import Hero from "./pages/Hero.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fonts" element={<Fonts />} />
          <Route path="/components" element={<Components />} />
          <Route path="/components/service-areas" element={<ServiceAreas />} />
          <Route path="/components/faq" element={<FAQ />} />
          <Route path="/components/cta" element={<CTA />} />
          <Route path="/components/hero" element={<Hero />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
