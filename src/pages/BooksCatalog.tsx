import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookCard from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  SlidersHorizontal,
  Star,
  X
} from "lucide-react";

const BooksCatalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [sortBy, setSortBy] = useState("relevance");
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Mock data - in real app, this would come from API
  const books = [
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
    // Add more books...
    {
      id: "7",
      title: "Dune",
      author: "Frank Herbert",
      price: 15.99,
      rating: 4.5,
      reviewCount: 8924,
      imageUrl: "/api/placeholder/300/400",
      category: "Sci-Fi",
      inStock: true,
    },
    {
      id: "8",
      title: "The Silent Patient",
      author: "Alex Michaelides",
      price: 17.99,
      originalPrice: 22.99,
      rating: 4.3,
      reviewCount: 3567,
      imageUrl: "/api/placeholder/300/400",
      category: "Mystery",
      inStock: true,
    },
  ];

  const categories = ["Fiction", "Non-Fiction", "Romance", "Mystery", "Sci-Fi", "Biography", "Self-Help", "Fantasy"];

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);
    if (searchQuery) {
      params.set("search", searchQuery);
    } else {
      params.delete("search");
    }
    setSearchParams(params);
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 100]);
    setSearchQuery("");
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-foreground mb-2">Book Catalog</h1>
          <p className="text-muted-foreground">Discover your next great read from our extensive collection</p>
        </div>

        {/* Search & Filters Bar */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search books, authors, ISBN..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="pl-10 bg-warm-cream border-border"
              />
              <Button 
                onClick={handleSearch}
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 px-4"
              >
                Search
              </Button>
            </div>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Most Relevant</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="bestseller">Best Sellers</SelectItem>
              </SelectContent>
            </Select>

            {/* View Mode */}
            <div className="flex bg-muted rounded-lg p-1">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>

            {/* Filter Toggle */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
          </div>

          {/* Active Filters */}
          {(selectedCategories.length > 0 || searchQuery) && (
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              {searchQuery && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Search: "{searchQuery}"
                  <X className="h-3 w-3 cursor-pointer" onClick={() => setSearchQuery("")} />
                </Badge>
              )}
              {selectedCategories.map(category => (
                <Badge key={category} variant="secondary" className="flex items-center gap-1">
                  {category}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => toggleCategory(category)} />
                </Badge>
              ))}
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                Clear all
              </Button>
            </div>
          )}
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          {showFilters && (
            <aside className="w-64 flex-shrink-0">
              <Card>
                <CardContent className="p-6 space-y-6">
                  {/* Categories */}
                  <div>
                    <h3 className="font-semibold mb-3">Categories</h3>
                    <div className="space-y-2">
                      {categories.map(category => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox
                            id={category}
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() => toggleCategory(category)}
                          />
                          <label htmlFor={category} className="text-sm cursor-pointer">
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Price Range */}
                  <div>
                    <h3 className="font-semibold mb-3">Price Range</h3>
                    <div className="space-y-3">
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={100}
                        step={5}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Rating */}
                  <div>
                    <h3 className="font-semibold mb-3">Minimum Rating</h3>
                    <div className="space-y-2">
                      {[4, 3, 2, 1].map(rating => (
                        <div key={rating} className="flex items-center space-x-2">
                          <Checkbox id={`rating-${rating}`} />
                          <label htmlFor={`rating-${rating}`} className="flex items-center text-sm cursor-pointer">
                            <div className="flex mr-1">
                              {[...Array(rating)].map((_, i) => (
                                <Star key={i} className="h-3 w-3 text-amber-400 fill-current" />
                              ))}
                            </div>
                            & up
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </aside>
          )}

          {/* Books Grid/List */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                Showing {books.length} of 10,247 books
              </p>
            </div>

            {/* Books Display */}
            <div className={`gap-6 ${
              viewMode === "grid" 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
                : "space-y-4"
            }`}>
              {books.map(book => (
                <div key={book.id} className="animate-fade-in">
                  <a href={`/books/${book.id}`}>
                    <BookCard {...book} />
                  </a>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex space-x-2">
                <Button variant="outline" disabled>Previous</Button>
                <Button variant="default">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">...</Button>
                <Button variant="outline">42</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BooksCatalog;