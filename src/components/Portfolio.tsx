import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Automated Assembly Line",
      description:
        "Designed and implemented a fully automated assembly system that increased production efficiency by 40%. Integrated sensors, PLCs, and robotic arms for seamless operation with quality control systems.",
      technologies: [
        "SolidWorks",
        "PLC Programming",
        "HMI Design",
        "AutoCAD",
        "Robotics",
      ],
      image: "/api/placeholder/400/300",
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "HVAC System Optimization",
      description:
        "Redesigned commercial HVAC system resulting in 30% energy savings. Utilized CFD analysis and thermodynamic modeling for optimal performance and sustainability.",
      technologies: [
        "ANSYS Fluent",
        "MATLAB",
        "Energy Modeling",
        "BIM",
        "Thermodynamics",
      ],
      image: "/api/placeholder/400/300",
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Medical Device Prototype",
      description:
        "Developed prototype for portable medical diagnostic device with focus on ergonomics, material selection, and regulatory compliance for FDA approval.",
      technologies: [
        "Fusion 360",
        "3D Printing",
        "Material Testing",
        "FDA Standards",
      ],
      image: "/api/placeholder/400/300",
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Sustainable Packaging Design",
      description:
        "Created eco-friendly packaging solution that reduced material usage by 25% while maintaining product protection standards and cost-effectiveness.",
      technologies: [
        "SolidWorks",
        "Life Cycle Assessment",
        "Material Science",
        "Testing",
      ],
      image: "/api/placeholder/400/300",
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl bg-background/20 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent engineering projects and the technologies I
            specialize in
          </p>
        </div>

        <div className="grid gap-8 mb-12">
          {projects
            .filter((project) => project.featured)
            .map((project, index) => (
              <Card
                key={index}
                className="glass-card border-border overflow-hidden group hover:border-primary/50 transition-all duration-300"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-video bg-gradient-primary/10 flex items-center justify-center">
                    <div className="text-6xl opacity-30">🚀</div>
                  </div>
                  <CardContent className="p-8">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl mb-2">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-secondary px-3 py-1 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="group-hover:border-primary/50"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects
            .filter((project) => !project.featured)
            .map((project, index) => (
              <Card
                key={index}
                className="glass-card border-border overflow-hidden group hover:border-primary/50 transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-primary/10 flex items-center justify-center">
                  <div className="text-4xl opacity-30">💻</div>
                </div>
                <CardContent className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-xl mb-2">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-secondary px-2 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="group-hover:border-primary/50 text-xs"
                    >
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Demo
                    </Button>
                    <Button variant="ghost" size="sm" className="text-xs">
                      <Github className="mr-1 h-3 w-3" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 hover:border-primary"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
