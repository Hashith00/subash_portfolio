import Navigation from "@/components/Navigation";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen relative">
      {/* Interactive Background */}
      <InteractiveBackground />

      {/* Content with blur effects */}
      <div className="relative z-10">
        <Navigation />
        <main className="pt-20">
          <div className="py-20 px-6">
            <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  My <span className="gradient-text">Engineering Projects</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Discover the innovative engineering solutions I've designed
                  and implemented across various industries
                </p>
              </div>
            </div>
          </div>
          <Portfolio />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ProjectsPage;
