import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import RecognitionSection from "@/components/RecognitionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SubmissionSection from "@/components/SubmissionSection";
import CategoriesSection from "@/components/CategoriesSection";
import BacterialPanelSection from "@/components/BacterialPanelSection";
import OrganizersSection from "@/components/OrganizersSection";
import FAQSection from "@/components/FAQSection";
import SubmitCTA from "@/components/SubmitCTA";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <TimelineSection />
    <RecognitionSection />
    <HowItWorksSection />
    <SubmissionSection />
    <CategoriesSection />
    <BacterialPanelSection />
    <OrganizersSection />
    <FAQSection />
    <SubmitCTA />
    <Footer />
  </div>
);

export default Index;
