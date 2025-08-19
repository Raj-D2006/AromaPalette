import React, { useState } from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const MapSection = () => {
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      setShowTokenInput(false);
    }
  };

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Visit Our Café
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Located in the heart of the city, our cozy café welcomes you with warmth and the aroma of freshly brewed coffee.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map Container */}
          <div className="relative">
            <div className="bg-card rounded-lg p-8 border shadow-lg">
              {showTokenInput ? (
                <div className="text-center space-y-4">
                  <MapPin className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold text-foreground">Interactive Map</h3>
                  <p className="text-muted-foreground">
                    To display the interactive map, please enter your Mapbox public token.
                  </p>
                  <div className="flex gap-2 max-w-md mx-auto">
                    <Input
                      type="text"
                      placeholder="Mapbox public token..."
                      value={mapboxToken}
                      onChange={(e) => setMapboxToken(e.target.value)}
                      className="flex-1"
                    />
                    <Button onClick={handleTokenSubmit} disabled={!mapboxToken.trim()}>
                      Load Map
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Get your token at{' '}
                    <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      mapbox.com
                    </a>
                  </p>
                </div>
              ) : (
                <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Map would load here with token: {mapboxToken.substring(0, 20)}...
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Location Info */}
          <div className="space-y-8">
            <div className="bg-card rounded-lg p-8 border shadow-lg">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    123 Coffee Street<br />
                    Downtown District<br />
                    City, State 12345
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 border shadow-lg">
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Opening Hours</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
                    <p>Saturday: 8:00 AM - 9:00 PM</p>
                    <p>Sunday: 8:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 border shadow-lg">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Contact</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Phone: (555) 123-4567</p>
                    <p>Email: hello@aromapalette.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;