import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Impact from "@/components/site/Impact";
import Industries from "@/components/site/Industries";
import Products from "@/components/site/Products";
import Value from "@/components/site/Value";
import Technology from "@/components/site/Technology";
import Vision from "@/components/site/Vision";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        <Hero />
        <Impact />
        <Industries />
        <Products />
        <Value />
        <Technology />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
