import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import beansImage from "@/assets/coffee-beans.jpg";

const menuCategories = [
  {
    name: "Coffee",
    items: [
      { name: "Signature Espresso", description: "Rich, bold espresso crafted from our premium coffee blend", price: "$4.50", image: "/src/assets/espresso-machine.jpg" },
      { name: "Americano", description: "Classic espresso with hot water for a smooth, bold flavor", price: "$4.25", image: "/src/assets/espresso-machine.jpg" },
      { name: "Cappuccino", description: "Equal parts espresso, steamed milk, and velvety foam", price: "$5.25", image: "/src/assets/cappuccino.jpg" },
      { name: "Latte", description: "Smooth espresso with steamed milk and light foam", price: "$5.50", image: "/src/assets/cappuccino.jpg" },
      { name: "Mocha", description: "Rich espresso with chocolate and steamed milk", price: "$5.75", image: "/src/assets/cappuccino.jpg" },
    ]
  },
  {
    name: "Specialty Drinks",
    items: [
      { name: "Vanilla Macchiato", description: "Creamy vanilla-infused macchiato with artisanal foam art", price: "$5.75", image: "/src/assets/cappuccino.jpg" },
      { name: "Caramel Cortado", description: "Spanish-style coffee with warm milk and caramel", price: "$5.50", image: "/src/assets/cappuccino.jpg" },
      { name: "Honey Cinnamon Latte", description: "Organic honey and Ceylon cinnamon in steamed milk", price: "$6.00", image: "/src/assets/cappuccino.jpg" },
      { name: "Maple Pecan Latte", description: "Seasonal favorite with maple syrup and toasted pecans", price: "$6.25", image: "/src/assets/cappuccino.jpg" },
    ]
  },
  {
    name: "Cold Drinks",
    items: [
      { name: "Cold Brew", description: "Smooth, low-acid coffee brewed cold for 12 hours", price: "$4.75", image: "/src/assets/iced-coffee.jpg" },
      { name: "Iced Latte", description: "Espresso with cold milk over ice", price: "$5.25", image: "/src/assets/iced-coffee.jpg" },
      { name: "Cold Brew Float", description: "Cold brew with vanilla ice cream and caramel drizzle", price: "$6.50", image: "/src/assets/iced-coffee.jpg" },
      { name: "Nitro Coffee", description: "Cold brew infused with nitrogen for a creamy texture", price: "$5.50", image: "/src/assets/iced-coffee.jpg" },
    ]
  },
  {
    name: "Pastries & Food",
    items: [
      { name: "Artisan Croissant", description: "Freshly baked croissant with butter and seasonal jam", price: "$3.25", image: "/src/assets/pastries.jpg" },
      { name: "Avocado Toast", description: "Multigrain bread with smashed avocado and microgreens", price: "$8.50", image: "/src/assets/pastries.jpg" },
      { name: "Breakfast Sandwich", description: "Farm eggs, cheese, and choice of meat on brioche", price: "$9.25", image: "/src/assets/pastries.jpg" },
      { name: "Chocolate Muffin", description: "Rich chocolate muffin with dark chocolate chips", price: "$3.75", image: "/src/assets/pastries.jpg" },
      { name: "Quinoa Bowl", description: "Protein-packed quinoa with fresh vegetables and dressing", price: "$11.50", image: "/src/assets/pastries.jpg" },
    ]
  }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("Coffee");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6">
        <div className="absolute inset-0 z-0">
          <img
            src={beansImage}
            alt="Coffee beans"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-foreground mb-6">
            Our Complete Menu
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every cup tells a story. Explore our carefully curated selection 
            of premium coffee and artisanal food offerings.
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {menuCategories.map((category) => (
              <Button
                key={category.name}
                variant={activeCategory === category.name ? "default" : "outline"}
                size="lg"
                onClick={() => setActiveCategory(category.name)}
                className="hover-lift"
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuCategories
              .find(cat => cat.name === activeCategory)
              ?.items.map((item, index) => (
                <Card 
                  key={item.name} 
                  className="menu-item hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="aspect-video relative overflow-hidden rounded-t-lg">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-playfair font-semibold text-foreground">
                          {item.name}
                        </h3>
                        <span className="text-xl font-bold text-primary ml-4">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Menu;