import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-coffee-dark text-cream py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-playfair font-bold text-gold mb-4">
              Aroma Palette
            </h3>
            <p className="text-cream/80 leading-relaxed mb-6 max-w-md">
              Creating memorable coffee experiences since 2010. We're passionate 
              about bringing you the finest coffee and warmest hospitality in a 
              space that feels like home.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" className="bg-transparent border-cream text-cream hover:bg-cream hover:text-coffee-dark">
                Facebook
              </Button>
              <Button variant="outline" size="sm" className="bg-transparent border-cream text-cream hover:bg-cream hover:text-coffee-dark">
                Instagram
              </Button>
              <Button variant="outline" size="sm" className="bg-transparent border-cream text-cream hover:bg-cream hover:text-coffee-dark">
                Twitter
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-playfair font-semibold text-gold mb-4">
              Visit Us
            </h4>
            <div className="space-y-3 text-cream/80">
              <p>
                <span className="block font-medium text-cream">Address</span>
                123 Coffee Street<br />
                Downtown District<br />
                City, State 12345
              </p>
              <p>
                <span className="block font-medium text-cream">Phone</span>
                (555) 123-BREW
              </p>
              <p>
                <span className="block font-medium text-cream">Email</span>
                hello@aromapalette.com
              </p>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-xl font-playfair font-semibold text-gold mb-4">
              Opening Hours
            </h4>
            <div className="space-y-2 text-cream/80">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-cream">6:30 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="text-cream">7:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-cream">7:30 AM - 7:00 PM</span>
              </div>
              <div className="mt-4 p-3 bg-gold/20 rounded-lg">
                <p className="text-sm text-cream">
                  <span className="font-medium">Happy Hour:</span><br />
                  Mon-Fri 3-5 PM<br />
                  20% off all specialty drinks
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/60 text-sm">
              © 2024 Aroma Palette. All rights reserved. Brewing happiness since 2010.
            </p>
            <div className="flex gap-6 text-sm text-cream/60">
              <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-cream transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-cream transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;