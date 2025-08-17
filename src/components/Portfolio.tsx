import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import ProjectModal from "./ProjectModal";
import { projectsData } from "@/data";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { projects } = projectsData;

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto max-w-7xl bg-background/20 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my recent engineering projects and the technologies
              I specialize in. Click on any project to view detailed
              information.
            </p>
          </div>

          <div className="grid gap-8 mb-12">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <Card
                  key={index}
                  className="glass-card border-border overflow-hidden group hover:border-primary/50 transition-all duration-300 cursor-pointer"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="aspect-video bg-gradient-primary/10 flex items-center justify-center relative overflow-hidden">
                      <img
                        src={project.images[0]?.url}
                        alt={project.images[0]?.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-primary/20 group-hover:bg-gradient-primary/30 transition-colors duration-300"></div>
                    </div>
                    <CardContent className="p-8">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                      </CardHeader>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies
                          .slice(0, 4)
                          .map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-secondary px-3 py-1 rounded-full text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        {project.technologies.length > 4 && (
                          <span className="bg-secondary/50 px-3 py-1 rounded-full text-xs">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                      <div className="flex gap-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="group-hover:border-primary/50"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.demoUrl, "_blank");
                          }}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.githubUrl, "_blank");
                          }}
                        >
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
                  className="glass-card border-border overflow-hidden group hover:border-primary/50 transition-all duration-300 cursor-pointer"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="aspect-video bg-gradient-primary/10 flex items-center justify-center relative overflow-hidden">
                    <img
                      src={project.images[0]?.url}
                      alt={project.images[0]?.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-primary/20 group-hover:bg-gradient-primary/30 transition-colors duration-300"></div>
                  </div>
                  <CardContent className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-secondary px-2 py-1 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      {project.technologies.length > 3 && (
                        <span className="bg-secondary/50 px-2 py-1 rounded-full text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="group-hover:border-primary/50 text-xs"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.demoUrl, "_blank");
                        }}
                      >
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Demo
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubUrl, "_blank");
                        }}
                      >
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

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Portfolio;
