import Buyin from "@/components/buyin";
import CaraPakai from "@/components/cara-pakai";
import Color from "@/components/color";
import Features from "@/components/features";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";

const IchibanPaintLP = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      <Navbar />

      <HeroSection />

      <Features />

      <CaraPakai />

      <Color />

      <Buyin />

      <Footer />
    </div>
  );
};

export default IchibanPaintLP;
