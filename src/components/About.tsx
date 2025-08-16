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
} from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Settings,
      title: "Precision Engineering",
      description:
        "Designing accurate, reliable mechanical systems with attention to detail",
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description:
        "Creating innovative solutions that push the boundaries of engineering",
    },
    {
      icon: Zap,
      title: "Efficiency",
      description:
        "Optimizing processes and designs for maximum performance and cost-effectiveness",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "Loving what I do and bringing enthusiasm to every engineering challenge",
    },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl bg-background/20 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate mechanical engineer with a love for creating
            innovative engineering solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              With over 5 years of experience in mechanical engineering, I've
              had the privilege of working with manufacturing companies and
              startups to bring their innovative products to life. My journey
              started with a mechanical engineering degree and has evolved
              through continuous learning and hands-on experience.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I specialize in CAD design, automation systems, and manufacturing
              optimization, always staying up-to-date with the latest
              technologies and industry best practices. My approach combines
              technical expertise with creative problem-solving to deliver
              engineering solutions that truly make a difference.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-secondary px-3 py-1 rounded-full text-sm">
                SolidWorks
              </span>
              <span className="bg-secondary px-3 py-1 rounded-full text-sm">
                AutoCAD
              </span>
              <span className="bg-secondary px-3 py-1 rounded-full text-sm">
                ANSYS
              </span>
              <span className="bg-secondary px-3 py-1 rounded-full text-sm">
                MATLAB
              </span>
              <span className="bg-secondary px-3 py-1 rounded-full text-sm">
                3D Printing
              </span>
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
            <span className="bg-secondary/50 px-4 py-2 rounded-full text-sm flex items-center gap-2">
              <Printer className="w-4 h-4" />
              3D Printing Projects
            </span>
            <span className="bg-secondary/50 px-4 py-2 rounded-full text-sm flex items-center gap-2">
              <Car className="w-4 h-4" />
              Automotive Tinkering
            </span>
            <span className="bg-secondary/50 px-4 py-2 rounded-full text-sm flex items-center gap-2">
              <Footprints className="w-4 h-4" />
              Running
            </span>
            <span className="bg-secondary/50 px-4 py-2 rounded-full text-sm flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Reading Engineering Journals
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
