import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";

const ContactPage = () => {
  return (
    <div className="min-h-screen relative">
      {/* Interactive Background */}
      <InteractiveBackground />

      {/* Content with blur effects */}
      <div className="relative z-10">
        <Navigation />
        <main className="pt-20">
          <div className="py-20 px-6">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Let's <span className="gradient-text">Connect</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Ready to discuss your next engineering project? I'd love to
                  hear about your ideas and explore how we can work together
                </p>
              </div>
            </div>
          </div>
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
