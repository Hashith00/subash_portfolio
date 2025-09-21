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
import { EducationItem } from "@/data";

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
      case "diploma":
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
      case "diploma":
        return "bg-secondary";
      default:
        return "bg-primary";
    }
  };

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Central Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>

      <div className="space-y-16">
        {educationData.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div key={item.id} className="relative">
              {/* Timeline Node */}
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full ${getTypeColor(
                  item.type
                )} border-4 border-background shadow-lg z-20`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-background rounded-full"></div>
                </div>
              </div>

              {/* Timeline Connector */}
              <div
                className={`absolute top-3 w-8 h-0.5 bg-gradient-to-r ${
                  isLeft
                    ? "right-1/2 mr-3 from-primary/50 to-transparent"
                    : "left-1/2 ml-3 from-transparent to-primary/50"
                }`}
              ></div>

              {/* Content Card */}
              <div
                className={`flex ${isLeft ? "justify-start" : "justify-end"}`}
              >
                <div className={`w-5/12 ${isLeft ? "pr-8" : "pl-8"}`}>
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
                          <div className="flex-1">
                            <CardTitle className="text-lg group-hover:text-primary transition-colors">
                              {item.degree}
                            </CardTitle>
                            <div className="flex flex-col gap-1 text-muted-foreground mt-1">
                              <span className="font-medium text-sm">
                                {item.institution}
                              </span>
                              <div className="flex items-center gap-1">
                                <MapPin size={12} />
                                <span className="text-xs">{item.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Period */}
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                        <Calendar size={14} />
                        <span>{item.period}</span>
                      </div>

                      {/* GPA and Honors */}
                      {(item.gpa || item.honors) && (
                        <div className="flex flex-wrap gap-2 mt-3">
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
                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                        {item.description}
                      </p>

                      {/* Achievements */}
                      {item.achievements.length > 0 && (
                        <div className="mb-4">
                          <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm">
                            <Trophy className="w-4 h-4 text-accent" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-1">
                            {item.achievements
                              .slice(0, 3)
                              .map((achievement, achIndex) => (
                                <li
                                  key={achIndex}
                                  className="flex items-start gap-2 text-xs text-muted-foreground"
                                >
                                  <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            {item.achievements.length > 3 && (
                              <li className="text-xs text-muted-foreground/70 italic">
                                +{item.achievements.length - 3} more
                                achievements
                              </li>
                            )}
                          </ul>
                        </div>
                      )}

                      {/* Relevant Coursework */}
                      {item.coursework.length > 0 && (
                        <div className="mb-4">
                          <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm">
                            <BookOpen className="w-4 h-4 text-primary" />
                            Coursework
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {item.coursework
                              .slice(0, 4)
                              .map((course, courseIndex) => (
                                <Badge
                                  key={courseIndex}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {course}
                                </Badge>
                              ))}
                            {item.coursework.length > 4 && (
                              <Badge variant="outline" className="text-xs">
                                +{item.coursework.length - 4} more
                              </Badge>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Projects */}
                      {item.projects && item.projects.length > 0 && (
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm">
                            <GraduationCap className="w-4 h-4 text-accent" />
                            Notable Projects
                          </h4>
                          <ul className="space-y-1">
                            {item.projects
                              .slice(0, 2)
                              .map((project, projIndex) => (
                                <li
                                  key={projIndex}
                                  className="flex items-start gap-2 text-xs text-muted-foreground"
                                >
                                  <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                                  <span>{project}</span>
                                </li>
                              ))}
                            {item.projects.length > 2 && (
                              <li className="text-xs text-muted-foreground/70 italic">
                                +{item.projects.length - 2} more projects
                              </li>
                            )}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Timeline End */}
      <div className="relative mt-16">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent border-4 border-background shadow-lg animate-pulse">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-background rounded-full"></div>
          </div>
        </div>
        <div className="text-center pt-12">
          <p className="text-muted-foreground italic text-sm">
            Continuing the journey of lifelong learning...
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationRoadmap;
