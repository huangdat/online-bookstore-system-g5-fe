import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-books.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-warm">
      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
                📚 Over 100,000 Books Available
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight">
                Discover Your Next
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Great Read
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Explore thousands of books across all genres. From bestsellers to hidden gems, 
                find your perfect book with our curated collection and personalized recommendations.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:bg-primary-glow text-primary-foreground shadow-glow px-8 py-6 text-lg font-semibold"
              >
                Browse Books
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
              >
                View Categories
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <BookOpen className="h-6 w-6 text-primary mr-2" />
                  <span className="text-2xl font-bold text-primary">100K+</span>
                </div>
                <p className="text-sm text-muted-foreground">Books Available</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-primary mr-2" />
                  <span className="text-2xl font-bold text-primary">50K+</span>
                </div>
                <p className="text-sm text-muted-foreground">Happy Readers</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-6 w-6 text-primary mr-2" />
                  <span className="text-2xl font-bold text-primary">4.9</span>
                </div>
                <p className="text-sm text-muted-foreground">Average Rating</p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={heroImage}
                alt="Beautiful library with floating books"
                className="w-full h-[600px] object-cover"
              />
              
              {/* Floating Elements */}
              <div className="absolute top-8 right-8 bg-background/90 backdrop-blur-sm rounded-lg p-4 shadow-book">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-16 bg-gradient-primary rounded"></div>
                  <div>
                    <p className="font-semibold text-sm">Featured Today</p>
                    <p className="text-xs text-muted-foreground">The Silent Ocean</p>
                    <div className="flex items-center mt-1">
                      <span className="text-xs text-amber-500">★★★★★</span>
                      <span className="text-xs text-muted-foreground ml-1">(2.4k)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 bg-background/90 backdrop-blur-sm rounded-lg p-4 shadow-book">
                <div className="flex items-center space-x-2">
                  <Badge className="bg-primary text-primary-foreground">New Release</Badge>
                  <span className="text-sm text-muted-foreground">Just arrived</span>
                </div>
                <p className="font-semibold text-sm mt-2">Digital Horizons</p>
                <p className="text-primary font-bold">$24.99</p>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-56 h-56 bg-accent/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;