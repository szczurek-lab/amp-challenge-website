import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CategoriesSection from "@/components/CategoriesSection";
import TimelineSection from "@/components/TimelineSection";
import SubmissionSection from "@/components/SubmissionSection";
import BacterialPanelSection from "@/components/BacterialPanelSection";
import OrganizersSection from "@/components/OrganizersSection";
import SubmitCTA from "@/components/SubmitCTA";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <HowItWorksSection />
    <CategoriesSection />
    <TimelineSection />
    <SubmissionSection />
    <BacterialPanelSection />
    <OrganizersSection />
    <SubmitCTA />
    <Footer />
  </div>
);

export default Index;
