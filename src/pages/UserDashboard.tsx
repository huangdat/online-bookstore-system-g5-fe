import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Package, 
  Heart, 
  Settings, 
  BookOpen, 
  Star, 
  Calendar,
  MapPin,
  Phone,
  Mail,
  CreditCard,
  Truck,
  CheckCircle,
  Clock,
  X,
  Eye,
  RotateCcw,
  Award,
  TrendingUp
} from "lucide-react";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock user data
  const user = {
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    address: "123 Literary Lane, Booktown, BT 12345",
    memberSince: "January 2023",
    totalOrders: 24,
    totalSpent: 847.32,
    favoriteGenre: "Fiction",
    readingLevel: "Avid Reader",
    avatar: "/api/placeholder/80/80"
  };

  const recentOrders = [
    {
      id: "ORD-2024-001",
      date: "2024-01-15",
      status: "delivered",
      total: 89.97,
      items: 3,
      books: [
        { title: "The Midnight Library", author: "Matt Haig", image: "/api/placeholder/60/80" },
        { title: "Atomic Habits", author: "James Clear", image: "/api/placeholder/60/80" },
        { title: "Project Hail Mary", author: "Andy Weir", image: "/api/placeholder/60/80" }
      ]
    },
    {
      id: "ORD-2024-002",
      date: "2024-01-10",
      status: "shipped",
      total: 45.98,
      items: 2,
      books: [
        { title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid", image: "/api/placeholder/60/80" },
        { title: "Educated", author: "Tara Westover", image: "/api/placeholder/60/80" }
      ]
    },
    {
      id: "ORD-2024-003",
      date: "2024-01-05",
      status: "processing",
      total: 32.99,
      items: 1,
      books: [
        { title: "The Silent Patient", author: "Alex Michaelides", image: "/api/placeholder/60/80" }
      ]
    }
  ];

  const wishlistBooks = [
    { id: "1", title: "Dune", author: "Frank Herbert", price: 15.99, image: "/api/placeholder/120/160", inStock: true },
    { id: "2", title: "The Handmaid's Tale", author: "Margaret Atwood", price: 18.99, image: "/api/placeholder/120/160", inStock: true },
    { id: "3", title: "1984", author: "George Orwell", price: 14.99, image: "/api/placeholder/120/160", inStock: false },
    { id: "4", title: "Pride and Prejudice", author: "Jane Austen", price: 12.99, image: "/api/placeholder/120/160", inStock: true }
  ];

  const readingStats = [
    { label: "Books Read This Year", value: 18, target: 24, icon: BookOpen },
    { label: "Pages Read", value: 6420, target: 8000, icon: TrendingUp },
    { label: "Reviews Written", value: 12, target: 20, icon: Star },
    { label: "Reading Streak", value: 23, target: 30, icon: Award, unit: "days" }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "shipped":
        return <Truck className="h-4 w-4 text-blue-600" />;
      case "processing":
        return <Clock className="h-4 w-4 text-amber-600" />;
      case "cancelled":
        return <X className="h-4 w-4 text-red-600" />;
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800 border-green-200";
      case "shipped":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "processing":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "cancelled":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-serif font-bold text-foreground">My Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, {user.name}!</p>
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Account Settings
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Welcome Card */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold">{user.name}</h2>
                    <p className="text-muted-foreground">{user.readingLevel} • Member since {user.memberSince}</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm">
                      <span className="flex items-center">
                        <Package className="h-4 w-4 mr-1 text-primary" />
                        {user.totalOrders} orders
                      </span>
                      <span className="flex items-center">
                        <Star className="h-4 w-4 mr-1 text-primary" />
                        ${user.totalSpent} spent
                      </span>
                      <span className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-1 text-primary" />
                        Loves {user.favoriteGenre}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reading Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {readingStats.map((stat, index) => {
                const Icon = stat.icon;
                const progress = (stat.value / stat.target) * 100;
                return (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                        <Badge variant="secondary">{Math.round(progress)}%</Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-baseline space-x-2">
                          <span className="text-2xl font-bold text-primary">{stat.value}</span>
                          <span className="text-sm text-muted-foreground">
                            {stat.unit ? stat.unit : `/ ${stat.target}`}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <Progress value={progress} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Orders */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Recent Orders
                    <Button variant="ghost" size="sm" onClick={() => setActiveTab("orders")}>
                      View All
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentOrders.slice(0, 3).map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="flex -space-x-2">
                          {order.books.slice(0, 3).map((book, idx) => (
                            <img
                              key={idx}
                              src={book.image}
                              alt={book.title}
                              className="w-8 h-10 object-cover rounded border-2 border-background"
                            />
                          ))}
                        </div>
                        <div>
                          <p className="font-medium">{order.id}</p>
                          <p className="text-sm text-muted-foreground">
                            {order.items} items • ${order.total}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(order.status)}
                        <Badge className={getStatusColor(order.status)}>
                          {order.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Top Wishlist Items */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Wishlist Highlights
                    <Button variant="ghost" size="sm" onClick={() => setActiveTab("wishlist")}>
                      View All
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {wishlistBooks.slice(0, 4).map((book) => (
                      <div key={book.id} className="text-center">
                        <img
                          src={book.image}
                          alt={book.title}
                          className="w-full h-24 object-cover rounded-lg mb-2"
                        />
                        <h4 className="text-sm font-medium line-clamp-1">{book.title}</h4>
                        <p className="text-xs text-muted-foreground">{book.author}</p>
                        <p className="text-sm font-bold text-primary">${book.price}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order History</CardTitle>
                <CardDescription>Track your past and current orders</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {recentOrders.map((order) => (
                  <div key={order.id} className="border rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-semibold">{order.id}</h3>
                        <p className="text-sm text-muted-foreground">
                          Ordered on {new Date(order.date).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2 mb-2">
                          {getStatusIcon(order.status)}
                          <Badge className={getStatusColor(order.status)}>
                            {order.status}
                          </Badge>
                        </div>
                        <p className="font-bold">${order.total}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {order.books.map((book, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <img
                            src={book.image}
                            alt={book.title}
                            className="w-12 h-16 object-cover rounded"
                          />
                          <div>
                            <h4 className="font-medium text-sm line-clamp-1">{book.title}</h4>
                            <p className="text-xs text-muted-foreground">{book.author}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between items-center mt-4 pt-4 border-t">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
                        {order.status === "delivered" && (
                          <Button variant="outline" size="sm">
                            <RotateCcw className="h-4 w-4 mr-1" />
                            Return Item
                          </Button>
                        )}
                      </div>
                      <Button variant="ghost" size="sm">
                        Download Invoice
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Wishlist Tab */}
          <TabsContent value="wishlist" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Wishlist</CardTitle>
                <CardDescription>Books you're interested in reading</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {wishlistBooks.map((book) => (
                    <div key={book.id} className="group relative">
                      <div className="aspect-[3/4] overflow-hidden rounded-lg mb-4">
                        <img
                          src={book.image}
                          alt={book.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <Button
                          variant="secondary"
                          size="icon"
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-medium text-sm line-clamp-2">{book.title}</h3>
                        <p className="text-xs text-muted-foreground">{book.author}</p>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-primary">${book.price}</span>
                          <Badge variant={book.inStock ? "default" : "secondary"}>
                            {book.inStock ? "In Stock" : "Out of Stock"}
                          </Badge>
                        </div>
                        <Button
                          size="sm"
                          className="w-full"
                          disabled={!book.inStock}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Personal Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Manage your account details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <Button variant="outline" size="sm">Change Photo</Button>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-muted-foreground">Full Name</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{user.email}</p>
                        <p className="text-sm text-muted-foreground">Email Address</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{user.phone}</p>
                        <p className="text-sm text-muted-foreground">Phone Number</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{user.address}</p>
                        <p className="text-sm text-muted-foreground">Address</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full">Edit Profile</Button>
                </CardContent>
              </Card>

              {/* Account Settings */}
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your preferences and security</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Email Notifications</p>
                        <p className="text-sm text-muted-foreground">Receive updates about orders and books</p>
                      </div>
                      <Button variant="outline" size="sm">Manage</Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Privacy Settings</p>
                        <p className="text-sm text-muted-foreground">Control your data and visibility</p>
                      </div>
                      <Button variant="outline" size="sm">Configure</Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Payment Methods</p>
                        <p className="text-sm text-muted-foreground">Manage saved cards</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <CreditCard className="h-4 w-4 mr-1" />
                        Manage
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Password</p>
                        <p className="text-sm text-muted-foreground">Last changed 3 months ago</p>
                      </div>
                      <Button variant="outline" size="sm">Change</Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
                      Deactivate Account
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Download My Data
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default UserDashboard;