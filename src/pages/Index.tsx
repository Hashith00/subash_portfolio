import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Interactive Background */}
      <InteractiveBackground />

      {/* Content with blur effects */}
      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Portfolio />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
