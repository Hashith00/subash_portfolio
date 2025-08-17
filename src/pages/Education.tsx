import Navigation from "@/components/Navigation";
import EducationRoadmap from "@/components/EducationRoadmap";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";
import { GraduationCap, Award, TrendingUp } from "lucide-react";

const EducationPage = () => {
  // Enhanced education data with roadmap structure
  const educationData = [
    {
      id: "phd-mechanical-engineering",
      degree: "Ph.D. in Mechanical Engineering",
      institution: "Stanford University",
      location: "Stanford, CA",
      period: "2023 - Present",
      gpa: "4.0/4.0",
      honors: "Research Fellow",
      description:
        "Currently pursuing advanced research in sustainable manufacturing processes and automation systems. Focus on developing innovative solutions for next-generation manufacturing technologies.",
      achievements: [
        "NSF Graduate Research Fellowship recipient",
        "Published 3 peer-reviewed papers in top-tier journals",
        "Teaching Assistant for Advanced Manufacturing Processes",
        "Led research team of 6 graduate students on DARPA-funded project",
      ],
      coursework: [
        "Advanced Robotics and Control Systems",
        "Computational Fluid Dynamics",
        "Machine Learning for Engineering Applications",
        "Sustainable Manufacturing Processes",
        "Advanced Materials Science",
      ],
      projects: [
        "AI-driven predictive maintenance system for industrial equipment",
        "Bio-inspired manufacturing process optimization",
        "Smart material applications in aerospace engineering",
      ],
      type: "degree" as const,
    },
    {
      id: "ms-mechanical-engineering",
      degree: "Master of Science in Mechanical Engineering",
      institution: "Michigan Institute of Technology",
      location: "Michigan, USA",
      period: "2019 - 2021",
      gpa: "3.95/4.0",
      honors: "Summa Cum Laude",
      description:
        "Specialized in advanced manufacturing systems and automation. Thesis focused on optimization of robotic assembly lines for automotive industry applications.",
      achievements: [
        "Outstanding Graduate Student Award 2021",
        "Graduate Research Assistant for 2 years",
        "Presented research at 5 international conferences",
        "Co-authored 4 published research papers",
        "Founded Engineering Innovation Club",
      ],
      coursework: [
        "Advanced Manufacturing Systems",
        "Robotics and Automation",
        "Finite Element Analysis",
        "Control Systems Design",
        "Production Planning and Control",
        "Quality Engineering",
      ],
      projects: [
        "Thesis: 'Optimization of Multi-Robot Assembly Lines Using Machine Learning'",
        "Industry partnership project with Ford Motor Company",
        "Development of smart quality control system using computer vision",
      ],
      type: "degree" as const,
    },
    {
      id: "bs-mechanical-engineering",
      degree: "Bachelor of Science in Mechanical Engineering",
      institution: "Michigan Institute of Technology",
      location: "Michigan, USA",
      period: "2015 - 2019",
      gpa: "3.9/4.0",
      honors: "Summa Cum Laude",
      description:
        "Comprehensive undergraduate program covering fundamentals of mechanical engineering with focus on design, manufacturing, and automation systems. Strong foundation in engineering principles and practical applications.",
      achievements: [
        "Dean's List for 8 consecutive semesters",
        "President of ASME Student Chapter",
        "Outstanding Senior Design Project Award",
        "Tau Beta Pi Engineering Honor Society member",
        "Published undergraduate research on sustainable manufacturing",
      ],
      coursework: [
        "Thermodynamics",
        "Fluid Mechanics",
        "Materials Science",
        "Machine Design",
        "Manufacturing Processes",
        "Heat Transfer",
        "Dynamics and Vibrations",
        "Engineering Economics",
      ],
      projects: [
        "Senior Capstone: Autonomous drone delivery system design",
        "Solar-powered water purification system for developing countries",
        "Biomechanical analysis of prosthetic limb design",
      ],
      type: "degree" as const,
    },
    {
      id: "six-sigma-certification",
      degree: "Six Sigma Black Belt Certification",
      institution: "ASQ (American Society for Quality)",
      location: "Online",
      period: "2022",
      description:
        "Advanced certification in quality management and process improvement methodologies. Comprehensive training in statistical analysis, project management, and lean manufacturing principles.",
      achievements: [
        "Completed 160+ hours of intensive training",
        "Led 3 successful Six Sigma projects saving $500K+ annually",
        "Certified trainer for Green Belt programs",
        "Expert in DMAIC methodology implementation",
      ],
      coursework: [
        "Statistical Process Control",
        "Design of Experiments",
        "Lean Manufacturing Principles",
        "Project Management",
        "Quality Management Systems",
      ],
      type: "certification" as const,
    },
    {
      id: "pmp-certification",
      degree: "Project Management Professional (PMP)",
      institution: "Project Management Institute",
      location: "Online",
      period: "2021",
      description:
        "Professional certification in project management methodologies and best practices. Covers project lifecycle management, risk assessment, and team leadership.",
      achievements: [
        "Passed PMP exam on first attempt",
        "35+ hours of formal project management education",
        "4,500+ hours of project management experience",
        "Active PMI member and volunteer",
      ],
      coursework: [
        "Project Integration Management",
        "Scope and Time Management",
        "Cost and Quality Management",
        "Risk and Communications Management",
        "Stakeholder Management",
      ],
      type: "certification" as const,
    },
    {
      id: "solidworks-certification",
      degree: "SolidWorks Professional Certification",
      institution: "Dassault Systèmes",
      location: "Online",
      period: "2020",
      description:
        "Advanced proficiency certification in SolidWorks CAD software. Demonstrates expertise in 3D modeling, assembly design, and engineering drawing creation.",
      achievements: [
        "Certified SolidWorks Professional (CSWP)",
        "Advanced surfacing and sheet metal specialist",
        "Simulation and flow analysis certified",
        "Mentor for junior engineers in CAD best practices",
      ],
      coursework: [
        "Advanced Part Modeling",
        "Assembly Design and Management",
        "Engineering Drawing Standards",
        "Simulation and Analysis",
        "Sheet Metal Design",
      ],
      type: "certification" as const,
    },
  ];

  const stats = [
    {
      icon: GraduationCap,
      label: "Degrees Earned",
      value: "3",
      description: "Bachelor's, Master's, and PhD (in progress)",
    },
    {
      icon: Award,
      label: "Certifications",
      value: "6+",
      description: "Professional certifications and specializations",
    },
    {
      icon: TrendingUp,
      label: "GPA Average",
      value: "3.95",
      description: "Consistent academic excellence",
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
            <div className="container mx-auto max-w-5xl bg-background/20 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
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

              <EducationRoadmap educationData={educationData} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default EducationPage;
