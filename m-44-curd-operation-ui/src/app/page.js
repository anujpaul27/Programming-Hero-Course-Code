import BestFoodSection from "@/Component/BestFoodSection";
import Footer from "@/Component/Footer";
import HealthierSection from "@/Component/HealthierSection";
import Hero from "@/Component/Hero";
import HowItWorksSection from "@/Component/HowItWorksSection";
import MealTimesSection from "@/Component/MealTimesSection";
import MenuVarietyBanner from "@/Component/MenuVarietyBanner";
import Navbar from "@/Component/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] font-sans">
      <Navbar />
      <Hero />
      <HealthierSection/>
      <MealTimesSection/>
      <MenuVarietyBanner/>
      <BestFoodSection/>
      <HowItWorksSection/>
      <Footer/>
    </main>
  );
}
