import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Senior Mechanical Engineer",
      company: "Advanced Manufacturing Corp",
      location: "Detroit, MI",
      period: "2022 - Present",
      description:
        "Led product design initiatives and process optimization for automotive components, mentored junior engineers, and implemented lean manufacturing practices.",
      achievements: [
        "Designed automation systems serving 5+ production lines",
        "Reduced manufacturing costs by 25% through design improvements",
        "Led a team of 8 engineers on major product launches",
        "Implemented lean manufacturing principles increasing efficiency by 35%",
      ],
      technologies: [
        "SolidWorks",
        "ANSYS",
        "Six Sigma",
        "Lean Manufacturing",
        "GD&T",
      ],
    },
    {
      type: "work",
      title: "Mechanical Design Engineer",
      company: "Innovation Dynamics",
      location: "Chicago, IL",
      period: "2020 - 2022",
      description:
        "Designed mechanical systems for industrial automation and developed prototypes for next-generation manufacturing equipment.",
      achievements: [
        "Developed 5+ major automation systems increasing production efficiency",
        "Improved prototype development cycle by 40% through process optimization",
        "Collaborated with cross-functional teams of 12+ members",
        "Successfully obtained 3 patents for innovative mechanical designs",
      ],
      technologies: ["AutoCAD", "Fusion 360", "MATLAB", "PLCs", "3D Printing"],
    },
    {
      type: "work",
      title: "Junior Mechanical Engineer",
      company: "Precision Engineering Inc",
      location: "Milwaukee, WI",
      period: "2019 - 2020",
      description:
        "Supported senior engineers in design projects and manufacturing process improvements across diverse industrial applications.",
      achievements: [
        "Contributed to 15+ successful product launches",
        "Improved quality control processes reducing defects by 20%",
        "Specialized in precision machining and assembly processes",
        "Managed project documentation and compliance requirements",
      ],
      technologies: [
        "CAD Design",
        "GD&T",
        "Quality Control",
        "Manufacturing",
        "Testing",
      ],
    },
  ];

  const education = [
    {
      type: "education",
      title: "Bachelor of Science in Mechanical Engineering",
      company: "Michigan Institute of Technology",
      location: "Michigan, USA",
      period: "2015 - 2019",
      description:
        "Focused on design, manufacturing, and automation systems. Graduated Summa Cum Laude with specialization in product development.",
      achievements: [
        "GPA: 3.9/4.0 - Summa Cum Laude",
        "President of ASME Student Chapter",
        "Outstanding Senior Design Project Award",
        "Published research on sustainable manufacturing processes",
      ],
      technologies: [
        "Thermodynamics",
        "Fluid Mechanics",
        "Materials Science",
        "Manufacturing",
        "Controls",
      ],
    },
  ];

  const ExperienceCard = ({ item, index }: { item: any; index: number }) => (
    <Card
      key={index}
      className="glass-card border-border hover:border-primary/50 transition-all duration-300"
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-lg text-background">
              {item.type === "work" ? (
                <Briefcase size={20} />
              ) : (
                <GraduationCap size={20} />
              )}
            </div>
            <div>
              <CardTitle className="text-xl">{item.title}</CardTitle>
              <div className="flex items-center gap-4 text-muted-foreground mt-1">
                <span className="font-medium">{item.company}</span>
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span className="text-sm">{item.location}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Calendar size={14} />
            <span>{item.period}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {item.description}
        </p>

        <div className="mb-4">
          <h4 className="font-semibold mb-3">Key Achievements:</h4>
          <ul className="space-y-2">
            {item.achievements.map((achievement: string, achIndex: number) => (
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

        <div>
          <h4 className="font-semibold mb-3">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech: string, techIndex: number) => (
              <Badge key={techIndex} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl bg-background/20 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and academic background in mechanical
            engineering
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Professional <span className="gradient-text">Experience</span>
          </h3>
          <div className="space-y-8">
            {experiences.map((item, index) => (
              <ExperienceCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">
            <span className="gradient-text">Education</span>
          </h3>
          <div className="space-y-8">
            {education.map((item, index) => (
              <ExperienceCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
