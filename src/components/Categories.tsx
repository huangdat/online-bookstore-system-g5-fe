import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Heart, 
  Zap, 
  Search, 
  Compass, 
  Brain,
  Users,
  Sparkles
} from "lucide-react";

const Categories = () => {
  const categories = [
    {
      id: "fiction",
      name: "Fiction",
      description: "Immerse yourself in captivating stories and imaginative worlds",
      icon: BookOpen,
      bookCount: 25430,
      color: "bg-gradient-to-br from-blue-500 to-purple-600",
      featured: true,
    },
    {
      id: "romance",
      name: "Romance",
      description: "Love stories that will make your heart flutter",
      icon: Heart,
      bookCount: 18920,
      color: "bg-gradient-to-br from-pink-500 to-rose-600",
      featured: false,
    },
    {
      id: "scifi",
      name: "Science Fiction",
      description: "Explore the future and beyond with cutting-edge stories",
      icon: Zap,
      bookCount: 12750,
      color: "bg-gradient-to-br from-cyan-500 to-blue-600",
      featured: true,
    },
    {
      id: "mystery",
      name: "Mystery & Thriller",
      description: "Suspenseful tales that will keep you on the edge",
      icon: Search,
      bookCount: 15680,
      color: "bg-gradient-to-br from-gray-700 to-gray-900",
      featured: false,
    },
    {
      id: "adventure",
      name: "Adventure",
      description: "Epic journeys and thrilling expeditions await",
      icon: Compass,
      bookCount: 9340,
      color: "bg-gradient-to-br from-green-500 to-emerald-600",
      featured: false,
    },
    {
      id: "selfhelp",
      name: "Self Help",
      description: "Transform your life with wisdom and practical advice",
      icon: Brain,
      bookCount: 7890,
      color: "bg-gradient-to-br from-amber-500 to-orange-600",
      featured: true,
    },
    {
      id: "biography",
      name: "Biography",
      description: "Inspiring life stories of remarkable people",
      icon: Users,
      bookCount: 5420,
      color: "bg-gradient-to-br from-indigo-500 to-purple-600",
      featured: false,
    },
    {
      id: "fantasy",
      name: "Fantasy",
      description: "Magical realms and extraordinary adventures",
      icon: Sparkles,
      bookCount: 21340,
      color: "bg-gradient-to-br from-violet-500 to-purple-700",
      featured: true,
    },
  ];

  const featuredCategories = categories.filter(cat => cat.featured);
  const otherCategories = categories.filter(cat => !cat.featured);

  return (
    <section className="py-16 bg-warm-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            Explore Genres
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Find Your Perfect Genre
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From heart-pounding thrillers to heartwarming romances, discover books 
            that match your mood and interests.
          </p>
        </div>

        {/* Featured Categories - Large Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.id}
                className="group cursor-pointer transition-all duration-300 hover:shadow-elegant border-border overflow-hidden bg-card"
              >
                <CardContent className="p-0">
                  <div className={`${category.color} p-6 text-white relative overflow-hidden`}>
                    <div className="relative z-10">
                      <Icon className="h-8 w-8 mb-4 opacity-90" />
                      <h3 className="font-serif font-bold text-xl mb-2">{category.name}</h3>
                      <p className="text-sm opacity-90 mb-4">{category.description}</p>
                      <Badge className="bg-white/20 text-white border-white/30">
                        {category.bookCount.toLocaleString()} books
                      </Badge>
                    </div>
                    
                    {/* Background Pattern */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/5 rounded-full"></div>
                  </div>
                  
                  <div className="p-4">
                    <Button 
                      variant="ghost" 
                      className="w-full text-primary hover:text-primary-foreground hover:bg-primary transition-all duration-300"
                    >
                      Browse {category.name}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Other Categories - Compact Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {otherCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.id}
                className="group cursor-pointer transition-all duration-300 hover:shadow-book border-border bg-card"
              >
                <CardContent className="p-4 text-center">
                  <div className={`${category.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                    {category.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {category.bookCount.toLocaleString()} books
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View All Categories Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:bg-primary-glow text-primary-foreground shadow-glow px-8 py-3"
          >
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
