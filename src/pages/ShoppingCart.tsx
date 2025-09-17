import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingCart, 
  Truck, 
  Shield, 
  Tag,
  ArrowRight,
  Heart,
  RotateCcw,
  X
} from "lucide-react";

const ShoppingCartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      title: "The Midnight Library",
      author: "Matt Haig",
      price: 24.99,
      originalPrice: 29.99,
      quantity: 1,
      format: "Hardcover",
      imageUrl: "/api/placeholder/150/200",
      inStock: true,
      estimatedDelivery: "2-3 business days"
    },
    {
      id: "2",
      title: "Atomic Habits",
      author: "James Clear",
      price: 18.99,
      originalPrice: 24.99,
      quantity: 2,
      format: "Paperback",
      imageUrl: "/api/placeholder/150/200",
      inStock: true,
      estimatedDelivery: "2-3 business days"
    },
    {
      id: "3",
      title: "Project Hail Mary",
      author: "Andy Weir",
      price: 22.99,
      originalPrice: 27.99,
      quantity: 1,
      format: "Hardcover",
      imageUrl: "/api/placeholder/150/200",
      inStock: false,
      estimatedDelivery: "7-10 business days"
    }
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState(null);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const moveToWishlist = (id: string) => {
    // Mock function - would implement wishlist functionality
    console.log(`Moving item ${id} to wishlist`);
    removeItem(id);
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "save10") {
      setAppliedPromo({ code: "SAVE10", discount: 10, type: "percentage" });
    } else if (promoCode.toLowerCase() === "free5") {
      setAppliedPromo({ code: "FREE5", discount: 5, type: "fixed" });
    }
    setPromoCode("");
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const savings = cartItems.reduce((sum, item) => {
    const itemSavings = item.originalPrice ? (item.originalPrice - item.price) * item.quantity : 0;
    return sum + itemSavings;
  }, 0);
  const promoDiscount = appliedPromo 
    ? appliedPromo.type === "percentage" 
      ? subtotal * (appliedPromo.discount / 100)
      : appliedPromo.discount
    : 0;
  const shipping = subtotal >= 25 ? 0 : 5.99;
  const tax = (subtotal - promoDiscount) * 0.08; // 8% tax
  const total = subtotal - promoDiscount + shipping + tax;

  const recommendedBooks = [
    { id: "4", title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid", price: 16.99, imageUrl: "/api/placeholder/120/160" },
    { id: "5", title: "Educated", author: "Tara Westover", price: 21.99, imageUrl: "/api/placeholder/120/160" },
    { id: "6", title: "The Silent Patient", author: "Alex Michaelides", price: 17.99, imageUrl: "/api/placeholder/120/160" }
  ];

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <ShoppingCart className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any books to your cart yet. 
              Discover amazing books in our catalog!
            </p>
            <div className="space-y-3">
              <a href="/books">
                <Button className="w-full bg-gradient-primary hover:bg-primary-glow text-primary-foreground">
                  Browse Books
                </Button>
              </a>
              <a href="/">
                <Button variant="outline" className="w-full">
                  Continue Shopping
                </Button>
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-foreground mb-2">Shopping Cart</h1>
          <p className="text-muted-foreground">{cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    {/* Book Image */}
                    <div className="flex-shrink-0">
                      <a href={`/books/${item.id}`}>
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-24 h-32 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                        />
                      </a>
                    </div>

                    {/* Book Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <a href={`/books/${item.id}`}>
                            <h3 className="font-semibold text-foreground hover:text-primary transition-colors line-clamp-1">
                              {item.title}
                            </h3>
                          </a>
                          <p className="text-sm text-muted-foreground">by {item.author}</p>
                          <p className="text-sm text-muted-foreground">{item.format}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Stock Status */}
                      <div className="mb-3">
                        {item.inStock ? (
                          <div className="flex items-center text-sm text-green-600">
                            <Shield className="h-4 w-4 mr-1" />
                            In Stock - {item.estimatedDelivery}
                          </div>
                        ) : (
                          <div className="flex items-center text-sm text-amber-600">
                            <RotateCcw className="h-4 w-4 mr-1" />
                            Temporarily out of stock - {item.estimatedDelivery}
                          </div>
                        )}
                      </div>

                      {/* Price and Quantity */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg font-bold text-primary">${item.price}</span>
                            {item.originalPrice && item.originalPrice > item.price && (
                              <span className="text-sm text-muted-foreground line-through">
                                ${item.originalPrice}
                              </span>
                            )}
                          </div>
                          {item.originalPrice && item.originalPrice > item.price && (
                            <Badge variant="destructive" className="text-xs">
                              Save ${((item.originalPrice - item.price) * item.quantity).toFixed(2)}
                            </Badge>
                          )}
                        </div>

                        <div className="flex items-center space-x-4">
                          {/* Quantity Controls */}
                          <div className="flex items-center border rounded-lg">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                              className="h-8 w-8 p-0"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="px-3 py-1 min-w-[3rem] text-center">{item.quantity}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="h-8 w-8 p-0"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>

                          <span className="font-semibold min-w-[4rem] text-right">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>

                      {/* Item Actions */}
                      <div className="flex space-x-4 mt-3 pt-3 border-t">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => moveToWishlist(item.id)}
                          className="text-muted-foreground hover:text-primary"
                        >
                          <Heart className="h-4 w-4 mr-1" />
                          Save for Later
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Recommended Books */}
            <Card className="mt-8">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Customers also bought</h3>
                <div className="grid grid-cols-3 gap-4">
                  {recommendedBooks.map(book => (
                    <a key={book.id} href={`/books/${book.id}`} className="group">
                      <div className="text-center">
                        <img
                          src={book.imageUrl}
                          alt={book.title}
                          className="w-full h-32 object-cover rounded-lg mb-2 group-hover:scale-105 transition-transform duration-300"
                        />
                        <h4 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
                          {book.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">{book.author}</p>
                        <p className="text-sm font-bold text-primary">${book.price}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Promo Code */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Have a promo code?</h3>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Enter code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1"
                    />
                    <Button variant="outline" onClick={applyPromoCode}>
                      Apply
                    </Button>
                  </div>
                  {appliedPromo && (
                    <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-green-700">
                          <Tag className="h-4 w-4 mr-2" />
                          <span className="font-medium">{appliedPromo.code} applied!</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setAppliedPromo(null)}
                          className="text-green-700 hover:text-green-800"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Order Summary */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    
                    {savings > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Your savings</span>
                        <span>-${savings.toFixed(2)}</span>
                      </div>
                    )}
                    
                    {appliedPromo && (
                      <div className="flex justify-between text-green-600">
                        <span>Promo code ({appliedPromo.code})</span>
                        <span>-${promoDiscount.toFixed(2)}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  {shipping > 0 && (
                    <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center text-blue-700 text-sm">
                        <Truck className="h-4 w-4 mr-2" />
                        <span>Add ${(25 - subtotal).toFixed(2)} more for FREE shipping!</span>
                      </div>
                    </div>
                  )}

                  <div className="mt-6 space-y-3">
                    <a href="/checkout">
                      <Button className="w-full bg-gradient-primary hover:bg-primary-glow text-primary-foreground shadow-glow py-6 text-lg">
                        Proceed to Checkout
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </a>
                    
                    <a href="/books">
                      <Button variant="outline" className="w-full py-6 text-lg">
                        Continue Shopping
                      </Button>
                    </a>
                  </div>

                  {/* Security Features */}
                  <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Shield className="h-4 w-4 mr-2 text-green-600" />
                      <span>Secure checkout with 256-bit SSL encryption</span>
                    </div>
                    <div className="flex items-center">
                      <RotateCcw className="h-4 w-4 mr-2 text-green-600" />
                      <span>30-day return policy</span>
                    </div>
                    <div className="flex items-center">
                      <Truck className="h-4 w-4 mr-2 text-green-600" />
                      <span>Free shipping on orders over $25</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ShoppingCartPage;