import { Card, CardContent } from "@/components/ui/card";
import {
  Settings,
  Lightbulb,
  Zap,
  Heart,
  Printer,
  Car,
  Footprints,
  BookOpen,
  Users,
  Music,
  Puzzle,
  Star,
} from "lucide-react";
import { personalData } from "@/data";

const About = () => {
  // Icon mapping for string to component conversion
  const iconMap: { [key: string]: any } = {
    Settings,
    Lightbulb,
    Zap,
    Heart,
    Users,
    Music,
    Footprints,
    Puzzle,
    Star,
  };

  const { about, skills } = personalData;
  const highlights = about.highlights.map((highlight) => ({
    ...highlight,
    icon: iconMap[highlight.icon] || Settings,
  }));
  const hobbies = about.hobbies.map((hobby) => ({
    ...hobby,
    icon: iconMap[hobby.icon] || Music,
  }));

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl bg-background/20 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {personalData.personalInfo.tagline}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              {about.journey.title}
            </h3>
            {about.journey.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-muted-foreground mb-6 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
            <div className="flex flex-wrap gap-3">
              {skills.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-secondary px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="glass-card border-border hover:border-primary/50 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-primary rounded-lg text-background">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-4">
            When I'm not engineering, you'll find me
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {hobbies.map((hobby, index) => {
              const IconComponent = hobby.icon;
              return (
                <span
                  key={index}
                  className="bg-secondary/50 px-4 py-2 rounded-full text-sm flex items-center gap-2"
                >
                  <IconComponent className="w-4 h-4" />
                  {hobby.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
