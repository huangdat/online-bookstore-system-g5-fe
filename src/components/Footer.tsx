import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  BookOpen, 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Send
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-primary-glow/20">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Stay Updated with New Releases
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Subscribe to our newsletter and be the first to know about new books, 
              exclusive offers, and literary events.
            </p>
            
            <div className="flex max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-primary-foreground/10 border-primary-glow/30 text-primary-foreground placeholder:text-primary-foreground/60 rounded-r-none"
              />
              <Button 
                className="bg-primary-glow hover:bg-primary text-primary-foreground rounded-l-none px-6"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-8 w-8 text-primary-glow" />
                <h2 className="text-2xl font-serif font-bold">BookHaven</h2>
              </div>
              
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Your premier destination for books across all genres. We've been connecting 
                readers with their perfect books since 2020, building a community of 
                passionate readers worldwide.
              </p>

              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-primary-foreground/60 hover:text-primary-glow hover:bg-primary-glow/10">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground/60 hover:text-primary-glow hover:bg-primary-glow/10">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground/60 hover:text-primary-glow hover:bg-primary-glow/10">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground/60 hover:text-primary-glow hover:bg-primary-glow/10">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4 text-primary-glow">Quick Links</h4>
              <ul className="space-y-3">
                {['All Books', 'New Releases', 'Best Sellers', 'Categories', 'Authors', 'Reviews', 'Book Clubs', 'Gift Cards'].map((link) => (
                  <li key={link}>
                    <Button variant="link" className="text-primary-foreground/80 hover:text-primary-glow p-0 h-auto text-sm">
                      {link}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="font-semibold text-lg mb-4 text-primary-glow">Customer Service</h4>
              <ul className="space-y-3">
                {['Help Center', 'Shipping Info', 'Returns & Exchanges', 'Order Status', 'Payment Methods', 'Contact Us', 'FAQs', 'Live Chat'].map((link) => (
                  <li key={link}>
                    <Button variant="link" className="text-primary-foreground/80 hover:text-primary-glow p-0 h-auto text-sm">
                      {link}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-lg mb-4 text-primary-glow">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary-glow mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-primary-foreground/80">
                    <p>123 Literary Lane</p>
                    <p>Booktown, BT 12345</p>
                    <p>United States</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary-glow" />
                  <span className="text-sm text-primary-foreground/80">+1 (555) 123-4567</span>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary-glow" />
                  <span className="text-sm text-primary-foreground/80">hello@bookhaven.com</span>
                </div>

                <Badge className="bg-primary-glow/20 text-primary-glow border-primary-glow/30">
                  📞 24/7 Customer Support
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <Separator className="border-primary-glow/20" />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/60">
              © 2024 BookHaven. All rights reserved. | Privacy Policy | Terms of Service | Cookie Policy
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-primary-foreground/80">
              <span>Powered by</span>
              <Badge className="bg-primary-glow/20 text-primary-glow border-primary-glow/30">
                React & TypeScript
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;