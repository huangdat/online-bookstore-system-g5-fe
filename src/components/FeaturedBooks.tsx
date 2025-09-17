import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BookCard from "./BookCard";
import { ArrowRight, TrendingUp, Star, Clock } from "lucide-react";

const FeaturedBooks = () => {
  const [activeTab, setActiveTab] = useState("bestsellers");

  // Mock data - in real app, this would come from API
  const featuredBooks = [
    {
      id: "1",
      title: "The Midnight Library",
      author: "Matt Haig",
      price: 24.99,
      originalPrice: 29.99,
      rating: 4.8,
      reviewCount: 2834,
      imageUrl: "/api/placeholder/300/400",
      category: "Fiction",
      inStock: true,
    },
    {
      id: "2",
      title: "Atomic Habits",
      author: "James Clear",
      price: 18.99,
      originalPrice: 24.99,
      rating: 4.9,
      reviewCount: 5672,
      imageUrl: "/api/placeholder/300/400",
      category: "Self-Help",
      inStock: true,
    },
    {
      id: "3",
      title: "The Seven Husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      price: 16.99,
      rating: 4.7,
      reviewCount: 3456,
      imageUrl: "/api/placeholder/300/400",
      category: "Romance",
      inStock: true,
    },
    {
      id: "4",
      title: "Project Hail Mary",
      author: "Andy Weir",
      price: 22.99,
      originalPrice: 27.99,
      rating: 4.6,
      reviewCount: 1892,
      imageUrl: "/api/placeholder/300/400",
      category: "Sci-Fi",
      inStock: true,
    },
    {
      id: "5",
      title: "The Thursday Murder Club",
      author: "Richard Osman",
      price: 19.99,
      rating: 4.5,
      reviewCount: 2145,
      imageUrl: "/api/placeholder/300/400",
      category: "Mystery",
      inStock: false,
    },
    {
      id: "6",
      title: "Educated",
      author: "Tara Westover",
      price: 21.99,
      originalPrice: 26.99,
      rating: 4.8,
      reviewCount: 4123,
      imageUrl: "/api/placeholder/300/400",
      category: "Biography",
      inStock: true,
    },
  ];

  const tabs = [
    { id: "bestsellers", label: "Best Sellers", icon: TrendingUp },
    { id: "featured", label: "Featured", icon: Star },
    { id: "recent", label: "New Releases", icon: Clock },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            Curated Collection
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Discover Amazing Books
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hand-picked selections from our literary experts. Find your next favorite read 
            among our most popular and critically acclaimed books.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-muted rounded-lg p-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "ghost"}
                  className={`px-6 py-2 rounded-md transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {tab.label}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
          >
            View All Books
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;