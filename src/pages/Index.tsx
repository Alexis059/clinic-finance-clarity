import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PainsSection from "@/components/PainsSection";
import ResultsSection from "@/components/ResultsSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ExpertSection from "@/components/ExpertSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PainsSection />
        <ResultsSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <ExpertSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
