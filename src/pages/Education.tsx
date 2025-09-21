import Navigation from "@/components/Navigation";
import EducationRoadmap from "@/components/EducationRoadmap";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";
import { GraduationCap, Award, TrendingUp } from "lucide-react";
import { educationData } from "@/data";

const EducationPage = () => {
  // Calculate stats from actual data
  const degreeCount = educationData.filter(
    (item) => item.type === "degree"
  ).length;
  const diplomaCount = educationData.filter(
    (item) => item.type === "diploma"
  ).length;
  const certificationCount = educationData.filter(
    (item) => item.type === "certification"
  ).length;

  const stats = [
    {
      icon: GraduationCap,
      label: "Degrees & Diplomas",
      value: `${degreeCount + diplomaCount}`,
      description: "Academic qualifications earned",
    },
    {
      icon: Award,
      label: "Certifications",
      value: `${certificationCount}`,
      description: "Professional certifications achieved",
    },
    {
      icon: TrendingUp,
      label: "Current Status",
      value: "Final Year",
      description: "Undergraduate student",
    },
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
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Educational <span className="gradient-text">Journey</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
                  A comprehensive roadmap of my academic achievements,
                  professional certifications, and continuous learning journey
                  in mechanical engineering and beyond.
                </p>

                {/* Stats Section */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-background/20 backdrop-blur-md rounded-xl p-6 border border-white/10"
                    >
                      <div className="flex items-center justify-center mb-4">
                        <div className="p-3 bg-gradient-primary rounded-lg text-background">
                          <stat.icon size={24} />
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-primary mb-2">
                        {stat.value}
                      </div>
                      <div className="font-semibold mb-1">{stat.label}</div>
                      <div className="text-sm text-muted-foreground">
                        {stat.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education Roadmap */}
          <div className="py-20 px-6">
            <div className="container mx-auto max-w-7xl bg-background/20 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Academic <span className="gradient-text">Roadmap</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Follow my educational journey from undergraduate studies to
                  current PhD research, including professional certifications
                  and specialized training.
                </p>
              </div>

              <EducationRoadmap educationData={educationData as any} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default EducationPage;
