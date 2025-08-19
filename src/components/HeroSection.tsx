import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/coffee-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Coffee shop interior with artisanal coffee"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-coffee-dark/70 via-coffee-medium/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
            Welcome to
            <span className="block text-gold">Aroma Palette</span>
          </h1>
        </div>
        
        <div className="animate-fade-in-delay">
          <p className="text-lg md:text-xl font-light mb-4 text-gold">
            Brewing Happiness Since 2010
          </p>
          <p className="text-xl md:text-2xl font-light mb-8 text-cream max-w-2xl mx-auto leading-relaxed">
            Experience the finest coffee blends and artisanal beverages, 
            crafted with passion in the heart of the city.
          </p>
        </div>

        <div className="animate-fade-in-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/menu">
            <Button size="lg" className="bg-gold text-coffee-dark hover:bg-gold/90 font-semibold px-8 py-4 text-lg hover-lift">
              Explore Menu
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cream rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;