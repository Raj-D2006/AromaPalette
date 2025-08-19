import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedMenu from "@/components/FeaturedMenu";
import MapSection from "@/components/MapSection";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturedMenu />
      <Gallery />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
