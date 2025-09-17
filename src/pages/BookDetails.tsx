import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Star, 
  Heart, 
  Share2, 
  ShoppingCart, 
  Truck, 
  Shield, 
  RotateCcw,
  BookOpen,
  Users,
  Calendar,
  Globe,
  Award
} from "lucide-react";

const BookDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState("hardcover");

  // Mock data - in real app, this would come from API based on id
  const book = {
    id: "1",
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 24.99,
    originalPrice: 29.99,
    rating: 4.8,
    reviewCount: 2834,
    imageUrl: "/api/placeholder/400/600",
    category: "Fiction",
    inStock: true,
    isbn: "978-0525559474",
    publisher: "Viking",
    publishDate: "August 13, 2020",
    pages: 288,
    language: "English",
    dimensions: "6.4 x 1.1 x 9.5 inches",
    weight: "1.2 pounds",
    description: `Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices... Would you have done anything different, if you had the chance to undo your regrets?

A dazzling novel about all the choices that go into a life well lived, from the internationally bestselling author of Reasons to Stay Alive and How To Stop Time.`,
    features: [
      "New York Times Bestseller",
      "Over 1 million copies sold worldwide",
      "Translated into 35 languages",
      "Goodreads Choice Award Winner"
    ],
    formats: [
      { type: "hardcover", price: 24.99, originalPrice: 29.99 },
      { type: "paperback", price: 16.99, originalPrice: 19.99 },
      { type: "ebook", price: 12.99, originalPrice: 15.99 },
      { type: "audiobook", price: 19.99, originalPrice: 24.99 }
    ]
  };

  const reviews = [
    {
      id: "1",
      userName: "Sarah Johnson",
      rating: 5,
      date: "2 weeks ago",
      title: "Absolutely mesmerizing!",
      content: "This book changed my perspective on life choices. Haig's writing is both profound and accessible. I couldn't put it down!",
      helpful: 23,
      avatar: "/api/placeholder/40/40"
    },
    {
      id: "2", 
      userName: "Michael Chen",
      rating: 4,
      date: "1 month ago",
      title: "Thought-provoking and beautiful",
      content: "A philosophical journey that makes you question every path not taken. The concept is brilliant and execution is nearly flawless.",
      helpful: 18,
      avatar: "/api/placeholder/40/40"
    },
    {
      id: "3",
      userName: "Emma Thompson",
      rating: 5,
      date: "3 weeks ago", 
      title: "Life-changing read",
      content: "Rarely does a novel affect me so deeply. The Midnight Library is a masterpiece about regret, possibility, and the beauty of existence.",
      helpful: 31,
      avatar: "/api/placeholder/40/40"
    }
  ];

  const relatedBooks = [
    { id: "2", title: "Reasons to Stay Alive", author: "Matt Haig", price: 16.99, imageUrl: "/api/placeholder/200/300" },
    { id: "3", title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid", price: 18.99, imageUrl: "/api/placeholder/200/300" },
    { id: "4", title: "Klara and the Sun", author: "Kazuo Ishiguro", price: 22.99, imageUrl: "/api/placeholder/200/300" },
    { id: "5", title: "The Invisible Life of Addie LaRue", author: "V.E. Schwab", price: 19.99, imageUrl: "/api/placeholder/200/300" }
  ];

  const currentFormat = book.formats.find(f => f.type === selectedFormat) || book.formats[0];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <a href="/" className="hover:text-primary">Home</a> / 
          <a href="/books" className="hover:text-primary ml-1">Books</a> / 
          <a href={`/categories/${book.category.toLowerCase()}`} className="hover:text-primary ml-1">{book.category}</a> / 
          <span className="ml-1 text-foreground">{book.title}</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Book Image */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="relative group">
                <img
                  src={book.imageUrl}
                  alt={book.title}
                  className="w-full max-w-md mx-auto rounded-lg shadow-book transition-transform duration-300 group-hover:scale-105"
                />
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-destructive text-destructive' : ''}`} />
                </Button>
              </div>

              {/* Quick Actions */}
              <div className="mt-6 space-y-3">
                <Button variant="outline" className="w-full">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Book
                </Button>
                <Button variant="outline" className="w-full">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Preview Pages
                </Button>
              </div>
            </div>
          </div>

          {/* Book Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header Info */}
            <div>
              <Badge className="mb-3">{book.category}</Badge>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">{book.title}</h1>
              <p className="text-xl text-muted-foreground mb-4">by <span className="text-primary font-semibold">{book.author}</span></p>
              
              {/* Rating */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(book.rating)
                            ? 'text-amber-400 fill-current'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-semibold">{book.rating}</span>
                  <span className="text-muted-foreground ml-2">({book.reviewCount.toLocaleString()} reviews)</span>
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {book.features.map((feature, index) => (
                  <Badge key={index} variant="secondary" className="bg-primary/10 text-primary">
                    <Award className="h-3 w-3 mr-1" />
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Purchase Section */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Format Selection */}
                  <div>
                    <h3 className="font-semibold mb-3">Choose Format:</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {book.formats.map(format => (
                        <Button
                          key={format.type}
                          variant={selectedFormat === format.type ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedFormat(format.type)}
                          className="capitalize"
                        >
                          {format.type}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl font-bold text-primary">${currentFormat.price}</span>
                    {currentFormat.originalPrice && currentFormat.originalPrice > currentFormat.price && (
                      <span className="text-lg text-muted-foreground line-through">${currentFormat.originalPrice}</span>
                    )}
                    {currentFormat.originalPrice && currentFormat.originalPrice > currentFormat.price && (
                      <Badge variant="destructive">
                        Save ${(currentFormat.originalPrice - currentFormat.price).toFixed(2)}
                      </Badge>
                    )}
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center space-x-4">
                    <label className="font-semibold">Quantity:</label>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        -
                      </Button>
                      <span className="w-12 text-center">{quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  {/* Add to Cart */}
                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-gradient-primary hover:bg-primary-glow text-primary-foreground shadow-glow py-6 text-lg"
                      disabled={!book.inStock}
                    >
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      {book.inStock ? `Add to Cart - $${(currentFormat.price * quantity).toFixed(2)}` : 'Out of Stock'}
                    </Button>
                    
                    <Button variant="outline" className="w-full py-6 text-lg">
                      <Heart className="h-5 w-5 mr-2" />
                      Add to Wishlist
                    </Button>
                  </div>

                  {/* Shipping Info */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
                    <div className="flex items-center space-x-2 text-sm">
                      <Truck className="h-4 w-4 text-primary" />
                      <span>Free shipping over $25</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <RotateCcw className="h-4 w-4 text-primary" />
                      <span>30-day returns</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Shield className="h-4 w-4 text-primary" />
                      <span>Secure checkout</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Book Details Tabs */}
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="author">Author</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">About this book</h3>
                    <div className="prose max-w-none text-foreground">
                      {book.description.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="details">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">Book Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">ISBN:</span>
                          <span>{book.isbn}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Publisher:</span>
                          <span>{book.publisher}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Publication Date:</span>
                          <span>{book.publishDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Pages:</span>
                          <span>{book.pages}</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Language:</span>
                          <span>{book.language}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Dimensions:</span>
                          <span>{book.dimensions}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Weight:</span>
                          <span>{book.weight}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Category:</span>
                          <span>{book.category}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews">
                <div className="space-y-6">
                  {/* Rating Overview */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-primary mb-2">{book.rating}</div>
                          <div className="flex justify-center mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-5 w-5 ${
                                  i < Math.floor(book.rating)
                                    ? 'text-amber-400 fill-current'
                                    : 'text-muted-foreground'
                                }`}
                              />
                            ))}
                          </div>
                          <div className="text-muted-foreground">{book.reviewCount.toLocaleString()} reviews</div>
                        </div>
                        <div className="space-y-2">
                          {[5, 4, 3, 2, 1].map(rating => (
                            <div key={rating} className="flex items-center space-x-2">
                              <span className="w-8 text-sm">{rating}★</span>
                              <Progress value={rating === 5 ? 75 : rating === 4 ? 15 : rating === 3 ? 8 : 2} className="flex-1" />
                              <span className="w-8 text-sm text-muted-foreground">
                                {rating === 5 ? '75%' : rating === 4 ? '15%' : rating === 3 ? '8%' : '2%'}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Individual Reviews */}
                  <div className="space-y-4">
                    {reviews.map(review => (
                      <Card key={review.id}>
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <Avatar>
                              <AvatarImage src={review.avatar} alt={review.userName} />
                              <AvatarFallback>{review.userName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <div>
                                  <h4 className="font-semibold">{review.userName}</h4>
                                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                    <div className="flex">
                                      {[...Array(5)].map((_, i) => (
                                        <Star
                                          key={i}
                                          className={`h-3 w-3 ${
                                            i < review.rating
                                              ? 'text-amber-400 fill-current'
                                              : 'text-muted-foreground'
                                          }`}
                                        />
                                      ))}
                                    </div>
                                    <span>•</span>
                                    <span>{review.date}</span>
                                  </div>
                                </div>
                              </div>
                              <h5 className="font-medium mb-2">{review.title}</h5>
                              <p className="text-muted-foreground mb-3">{review.content}</p>
                              <div className="flex items-center space-x-4 text-sm">
                                <Button variant="ghost" size="sm">
                                  👍 Helpful ({review.helpful})
                                </Button>
                                <Button variant="ghost" size="sm">
                                  Reply
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="author">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-6">
                      <img 
                        src="/api/placeholder/120/120"
                        alt={book.author}
                        className="w-24 h-24 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{book.author}</h3>
                        <p className="text-muted-foreground mb-4">
                          Matt Haig is the author of several bestselling novels and non-fiction books. 
                          His work has been translated into more than thirty languages around the world. 
                          He has written for publications including The New York Times, The Guardian, The Times, and many others.
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                          <span className="flex items-center">
                            <BookOpen className="h-4 w-4 mr-1" />
                            12 Books Published
                          </span>
                          <span className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            2.5M Followers
                          </span>
                          <span className="flex items-center">
                            <Globe className="h-4 w-4 mr-1" />
                            matthaig.com
                          </span>
                        </div>
                        <Button variant="outline">View All Books by {book.author}</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Related Books */}
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6">You Might Also Like</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {relatedBooks.map(relatedBook => (
                  <a key={relatedBook.id} href={`/books/${relatedBook.id}`}>
                    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-book">
                      <CardContent className="p-4">
                        <img
                          src={relatedBook.imageUrl}
                          alt={relatedBook.title}
                          className="w-full h-48 object-cover rounded-lg mb-3 transition-transform duration-300 group-hover:scale-105"
                        />
                        <h4 className="font-medium text-sm mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                          {relatedBook.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mb-2">{relatedBook.author}</p>
                        <p className="text-sm font-bold text-primary">${relatedBook.price}</p>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookDetails;