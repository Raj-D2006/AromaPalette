import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 rounded-lg bg-primary group-hover:bg-coffee-medium transition-all duration-300">
              <Coffee className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-playfair font-bold text-foreground">
              Aroma Palette
            </span>
          </Link>

          <div className="flex-1"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;