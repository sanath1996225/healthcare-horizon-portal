
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AiChatbot from "./components/AiChatbot";

// Service Pages
import ClaimsProcessing from "./pages/services/ClaimsProcessing";
import DenialManagement from "./pages/services/DenialManagement";
import PatientBilling from "./pages/services/PatientBilling";
import FinancialReporting from "./pages/services/FinancialReporting";

// Resource Pages
import CaseStudies from "./pages/resources/CaseStudies";
import Faq from "./pages/resources/Faq";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Service Routes */}
          <Route path="/services/claims-processing" element={<ClaimsProcessing />} />
          <Route path="/services/denial-management" element={<DenialManagement />} />
          <Route path="/services/patient-billing" element={<PatientBilling />} />
          <Route path="/services/financial-reporting" element={<FinancialReporting />} />
          
          {/* Resource Routes */}
          <Route path="/resources/case-studies" element={<CaseStudies />} />
          <Route path="/resources/faq" element={<Faq />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <AiChatbot />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
