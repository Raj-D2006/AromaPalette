import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Sarah Miller",
    role: "Regular Customer",
    content: "Aroma Palette has become my daily sanctuary. The coffee is exceptional, and the atmosphere makes every visit feel like coming home.",
    rating: 5
  },
  {
    id: 2,
    name: "David Chen",
    role: "Coffee Enthusiast",
    content: "The attention to detail in every cup is remarkable. From bean selection to brewing technique, they've mastered the art of coffee.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Local Artist",
    content: "This place inspires creativity. I've spent countless hours here working on my art, fueled by their amazing lattes and peaceful ambiance.",
    rating: 5
  },
  {
    id: 4,
    name: "Michael Thompson",
    role: "Business Owner",
    content: "Perfect spot for meetings and quiet work. The staff is incredibly friendly, and the pastries are absolutely divine.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-6 warm-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it – hear from the wonderful people 
            who make our café community so special.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-12">
          <Card className="max-w-4xl mx-auto bg-card/80 backdrop-blur-sm border-0 shadow-elegant">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <span key={i} className="text-gold text-2xl">★</span>
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl font-light text-foreground mb-6 leading-relaxed italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              
              <div className="border-t border-border pt-6">
                <p className="font-playfair text-lg font-semibold text-foreground">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-muted-foreground">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center gap-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentTestimonial === index 
                  ? 'bg-primary scale-125' 
                  : 'bg-border hover:bg-muted-foreground'
              }`}
            />
          ))}
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(1, 4).map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="bg-card/60 backdrop-blur-sm hover-lift border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-gold">★</span>
                  ))}
                </div>
                
                <p className="text-foreground mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;