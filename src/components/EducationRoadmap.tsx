import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  BookOpen,
  Trophy,
} from "lucide-react";

interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  honors?: string;
  description: string;
  achievements: string[];
  coursework: string[];
  projects?: string[];
  type: "degree" | "certification" | "course";
}

interface EducationRoadmapProps {
  educationData: EducationItem[];
}

const EducationRoadmap: React.FC<EducationRoadmapProps> = ({
  educationData,
}) => {
  const getIcon = (type: string) => {
    switch (type) {
      case "degree":
        return <GraduationCap className="w-6 h-6" />;
      case "certification":
        return <Award className="w-6 h-6" />;
      case "course":
        return <BookOpen className="w-6 h-6" />;
      default:
        return <GraduationCap className="w-6 h-6" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "degree":
        return "bg-primary";
      case "certification":
        return "bg-accent";
      case "course":
        return "bg-secondary";
      default:
        return "bg-primary";
    }
  };

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>

      <div className="space-y-12">
        {educationData.map((item, index) => (
          <div key={item.id} className="relative">
            {/* Timeline Node */}
            <div
              className={`absolute left-6 w-4 h-4 rounded-full ${getTypeColor(
                item.type
              )} border-4 border-background shadow-lg z-10`}
            ></div>

            {/* Timeline Connector */}
            <div className="absolute left-4 w-8 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent top-6"></div>

            {/* Content Card */}
            <div className="ml-20">
              <Card className="glass-card border-border hover:border-primary/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 ${getTypeColor(
                          item.type
                        )} rounded-lg text-background group-hover:scale-110 transition-transform`}
                      >
                        {getIcon(item.type)}
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {item.degree}
                        </CardTitle>
                        <div className="flex items-center gap-4 text-muted-foreground mt-1">
                          <span className="font-medium">
                            {item.institution}
                          </span>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span className="text-sm">{item.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* GPA and Honors */}
                  {(item.gpa || item.honors) && (
                    <div className="flex gap-3 mt-4">
                      {item.gpa && (
                        <Badge variant="secondary" className="text-xs">
                          <Trophy className="w-3 h-3 mr-1" />
                          GPA: {item.gpa}
                        </Badge>
                      )}
                      {item.honors && (
                        <Badge
                          variant="outline"
                          className="text-xs border-accent text-accent"
                        >
                          <Award className="w-3 h-3 mr-1" />
                          {item.honors}
                        </Badge>
                      )}
                    </div>
                  )}
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Achievements */}
                  {item.achievements.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-accent" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Relevant Coursework */}
                  {item.coursework.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-primary" />
                        Relevant Coursework
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.coursework.map((course, courseIndex) => (
                          <Badge
                            key={courseIndex}
                            variant="secondary"
                            className="text-xs"
                          >
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Projects */}
                  {item.projects && item.projects.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-accent" />
                        Notable Projects
                      </h4>
                      <ul className="space-y-1">
                        {item.projects.map((project, projIndex) => (
                          <li
                            key={projIndex}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span>{project}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>

      {/* Timeline End */}
      <div className="relative mt-12">
        <div className="absolute left-6 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent border-4 border-background shadow-lg animate-pulse"></div>
        <div className="ml-20">
          <div className="text-center py-6">
            <p className="text-muted-foreground italic">
              Continuing the journey of lifelong learning...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationRoadmap;
