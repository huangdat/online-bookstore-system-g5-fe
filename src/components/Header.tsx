import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu, 
  BookOpen,
  Heart,
  Bell
} from "lucide-react";

const Header = () => {
  const [cartCount, setCartCount] = useState(3);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-serif font-bold bg-gradient-primary bg-clip-text text-transparent">
              BookHaven
            </h1>
          </a>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search books, authors, categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full bg-warm-cream border-border focus:ring-primary"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Bell className="h-5 w-5" />
            </Button>

            <a href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </a>

            <a href="/dashboard">
              <Button variant="outline" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </a>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 py-3 border-t border-border">
          <a href="/books" className="text-foreground hover:text-primary transition-colors">
            All Books
          </a>
          <a href="/categories/fiction" className="text-foreground hover:text-primary transition-colors">
            Fiction
          </a>
          <a href="/categories/non-fiction" className="text-foreground hover:text-primary transition-colors">
            Non-Fiction
          </a>
          <a href="/categories/science-tech" className="text-foreground hover:text-primary transition-colors">
            Science & Tech
          </a>
          <a href="/categories/mystery" className="text-foreground hover:text-primary transition-colors">
            Mystery
          </a>
          <a href="/categories/romance" className="text-foreground hover:text-primary transition-colors">
            Romance
          </a>
          <a href="/books?filter=new" className="text-foreground hover:text-primary transition-colors">
            New Releases
          </a>
          <a href="/books?filter=bestsellers" className="text-foreground hover:text-primary transition-colors">
            Best Sellers
          </a>
        </nav>

        {/* Mobile search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search books..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 bg-warm-cream border-border"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;