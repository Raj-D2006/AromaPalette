import { useState } from "react";
import cappuccino from "@/assets/cappuccino.jpg";
import pastries from "@/assets/pastries.jpg";
import icedCoffee from "@/assets/iced-coffee.jpg";
import espressoMachine from "@/assets/espresso-machine.jpg";
import coffeeHero from "@/assets/coffee-hero.jpg";
import coffeeBeans from "@/assets/coffee-beans.jpg";

const galleryImages = [
  {
    id: 1,
    src: cappuccino,
    alt: "Beautiful cappuccino with latte art",
    title: "Perfect Cappuccino"
  },
  {
    id: 2,
    src: pastries,
    alt: "Fresh croissants and pastries",
    title: "Artisan Pastries"
  },
  {
    id: 3,
    src: icedCoffee,
    alt: "Refreshing iced coffee",
    title: "Cold Brew Perfection"
  },
  {
    id: 4,
    src: espressoMachine,
    alt: "Professional espresso extraction",
    title: "Expert Brewing"
  },
  {
    id: 5,
    src: coffeeHero,
    alt: "Cozy café interior with warm lighting",
    title: "Warm Atmosphere"
  },
  {
    id: 6,
    src: coffeeBeans,
    alt: "Premium coffee beans",
    title: "Quality Beans"
  }
];

const Gallery = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Our Café Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Step into our warm, inviting space where every corner tells a story 
            of passion for coffee and community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="relative group overflow-hidden rounded-lg shadow-warm hover:shadow-elegant transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredImage(image.id)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredImage === image.id ? 'scale-110' : 'scale-100'
                  }`}
                />
              </div>
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-coffee-dark/80 via-transparent to-transparent transition-opacity duration-500 ${
                hoveredImage === image.id ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-playfair text-xl font-semibold transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;