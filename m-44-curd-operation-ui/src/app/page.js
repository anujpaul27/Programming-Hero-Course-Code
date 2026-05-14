import HealthierSection from "@/Component/HealthierSection";
import Hero from "@/Component/Hero";
import Navbar from "@/Component/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] font-sans">
      <Navbar />
      <Hero />
      <HealthierSection/>
    </main>
  );
}
