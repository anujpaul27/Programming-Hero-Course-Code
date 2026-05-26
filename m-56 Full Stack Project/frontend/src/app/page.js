import CTASection from "@/Components/CTASection";
import ForCompaniesSection from "@/Components/Employees";
import Footer from "@/Components/Footer";
import HeroSection from "@/Components/HeroSection";
import FeaturesSection from "@/Components/HowItWork";
import JobListingsSection from "@/Components/JobListings";
import PricingSection from "@/Components/PricingSection";
import TestimonialsSection from "@/Components/TestimonialsCard";

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <FeaturesSection />
      <JobListingsSection/>
      <TestimonialsSection/>
      <ForCompaniesSection/>
      <PricingSection/>
      <CTASection/>
      <Footer/>
    </div>
  );
}
