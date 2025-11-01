import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";
import { Award } from "lucide-react";
import { useState } from "react";

const CertificatesPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certificates = [
    "certificates/1.png",
    "certificates/2.png",
    "certificates/3.png",
    "certificates/4.png",
    "certificates/5.png",
    "certificates/Chess Certificate_page-0001.jpg",
    "certificates/Dip in English.jpg",
    "certificates/ETAP.png",
    "certificates/HackXtream_page-0001.jpg",
    "certificates/XbotiX 2023_page-0001.jpg",
  ];

  return (
    <div className="min-h-screen relative">
      {/* Interactive Background */}
      <InteractiveBackground />

      {/* Content with blur effects */}
      <div className="relative z-10">
        <Navigation />
        <main className="pt-20">
          {/* Hero Section */}
          <div className="py-20 px-6">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 bg-gradient-primary rounded-2xl text-background">
                    <Award size={48} />
                  </div>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  My <span className="gradient-text">Certificates</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  A collection of certificates, achievements, and recognitions
                  earned through dedication and hard work
                </p>
              </div>
            </div>
          </div>

          {/* Certificates Grid */}
          <div className="py-20 px-6">
            <div className="container mx-auto max-w-7xl">
              <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
                {certificates.map((cert, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer bg-background/20 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 mb-6 break-inside-avoid"
                    onClick={() => setSelectedImage(`/${cert}`)}
                  >
                    <div className="overflow-hidden bg-gradient-to-br from-background/40 to-background/20">
                      <img
                        src={`/${cert}`}
                        alt={`Certificate ${index + 1}`}
                        className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 text-4xl font-bold"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <div className="max-w-6xl max-h-[90vh] overflow-auto">
            <img
              src={selectedImage}
              alt="Certificate"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificatesPage;
