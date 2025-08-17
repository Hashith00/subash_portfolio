import Navigation from "@/components/Navigation";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";

const ExperiencePage = () => {
  return (
    <div className="min-h-screen relative">
      {/* Interactive Background */}
      <InteractiveBackground />

      {/* Content with blur effects */}
      <div className="relative z-10">
        <Navigation />
        <main className="pt-20">
          <div className="py-20 px-6">
            <div className="container mx-auto max-w-4xl">
              <div className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  My <span className="gradient-text">Professional Journey</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Explore my career progression, key achievements, and
                  educational background in mechanical engineering
                </p>
              </div>
            </div>
          </div>
          <Experience />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ExperiencePage;
