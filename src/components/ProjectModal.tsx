import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar, Users, Zap } from "lucide-react";

interface ProjectImage {
  url: string;
  alt: string;
  caption?: string;
}

interface ProjectData {
  title: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  images: ProjectImage[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
  duration: string;
  teamSize: string;
  impact: string;
  challenges: string[];
  solutions: string[];
}

interface ProjectModalProps {
  project: ProjectData | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-md border border-white/20">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold gradient-text">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-8">
          {/* Project Images Carousel */}
          <div className="grid md:grid-cols-2 gap-4">
            {project.images.map((image, index) => (
              <div key={index} className="relative group">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-64 object-cover rounded-lg border border-white/10"
                />
                {image.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 rounded-b-lg">
                    <p className="text-sm">{image.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Project Stats */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-secondary/30 rounded-lg p-4 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="font-semibold">Duration</span>
              </div>
              <p className="text-muted-foreground">{project.duration}</p>
            </div>
            <div className="bg-secondary/30 rounded-lg p-4 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-primary" />
                <span className="font-semibold">Team Size</span>
              </div>
              <p className="text-muted-foreground">{project.teamSize}</p>
            </div>
            <div className="bg-secondary/30 rounded-lg p-4 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-primary" />
                <span className="font-semibold">Impact</span>
              </div>
              <p className="text-muted-foreground">{project.impact}</p>
            </div>
          </div>

          {/* Detailed Description */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.detailedDescription}
            </p>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Challenges & Solutions */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Key Challenges</h3>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm">
                      {challenge}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Solutions Implemented
              </h3>
              <ul className="space-y-2">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm">
                      {solution}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4 border-t border-white/10">
            <Button
              onClick={() => window.open(project.demoUrl, "_blank")}
              className="gradient-button border-0 text-background font-medium"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View Live Demo
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open(project.githubUrl, "_blank")}
              className="border-primary/50 hover:border-primary"
            >
              <Github className="mr-2 h-4 w-4" />
              View Code
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
