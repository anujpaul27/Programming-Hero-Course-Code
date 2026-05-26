import ForCompaniesSection from "@/Components/Employees";
import HeroSection from "@/Components/HeroSection";
import FeaturesSection from "@/Components/HowItWork";
import JobListingsSection from "@/Components/JobListings";
import TestimonialsSection from "@/Components/TestimonialsCard";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <JobListingsSection/>
      <TestimonialsSection/>
      <ForCompaniesSection/>
    </>
  );
}
