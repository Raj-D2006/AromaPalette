import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const featuredItems = [
  {
    id: 1,
    name: "Signature Espresso",
    description: "Rich, bold espresso crafted from our premium coffee blend",
    price: "$4.50",
    category: "Coffee",
    image: "/src/assets/espresso-machine.jpg"
  },
  {
    id: 2,
    name: "Vanilla Macchiato",
    description: "Creamy vanilla-infused macchiato with artisanal foam art",
    price: "$5.75",
    category: "Specialty",
    image: "/src/assets/cappuccino.jpg"
  },
  {
    id: 3,
    name: "Artisan Croissant",
    description: "Freshly baked croissant with butter and seasonal jam",
    price: "$3.25",
    category: "Pastry",
    image: "/src/assets/pastries.jpg"
  },
  {
    id: 4,
    name: "Cold Brew Float",
    description: "Smooth cold brew with vanilla ice cream and caramel drizzle",
    price: "$6.50",
    category: "Cold Drinks",
    image: "/src/assets/iced-coffee.jpg"
  }
];

const FeaturedMenu = () => {
  return (
    <section className="py-20 px-6 warm-gradient">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Featured Favorites
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most beloved creations, carefully crafted to deliver 
            an exceptional coffee experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="menu-item hover-lift bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-sm font-medium text-white bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-semibold text-foreground mb-3">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {item.price}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/menu">
            <Button size="lg" variant="default" className="hover-lift">
              View Full Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;