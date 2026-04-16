import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AuthoritySection from "@/components/AuthoritySection";
import ProceduresSection from "@/components/ProceduresSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import AboutSection from "@/components/AboutSection";
import ResultsSection from "@/components/ResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AuthoritySection />
      <div id="procedimentos">
        <ProceduresSection />
      </div>
      <div id="diferenciais">
        <DifferentialsSection />
      </div>
      <div id="sobre">
        <AboutSection />
      </div>
      <div id="resultados">
        <ResultsSection />
      </div>
      <TestimonialsSection />
      <HowItWorksSection />
      <div id="contato">
        <FinalCTA />
      </div>
      <Footer />
    </main>
  );
};

export default Index;
