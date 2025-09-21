import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Home = () => {
  const handleDownloadCV = () => {
    // You can replace this with an actual CV file path
    const link = document.createElement("a");
    link.href = "/cv-subash.pdf"; // Add your CV file to the public folder
    link.download = "cv-subash.pdf";
    link.click();
  };

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

          {/* CV Download Section */}
          <section className="py-20 px-6">
            <div className="container mx-auto max-w-4xl bg-background/20 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to <span className="gradient-text">Work Together</span>?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Download my detailed CV to learn more about my experience,
                  skills, and achievements in mechanical engineering.
                </p>
                <Button
                  onClick={handleDownloadCV}
                  size="lg"
                  className="gradient-button border-0 text-background font-medium text-lg px-8 py-6"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
