import Header from "@/components/Header";
import Hero from "@/components/Hero"; 
import FeaturedBooks from "@/components/FeaturedBooks";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedBooks />
        <Categories />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
