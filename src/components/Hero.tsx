import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto text-center max-w-4xl bg-background/20 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
        {/* Floating Badge */}
        <div className="inline-flex items-center gap-2 bg-secondary/50 border border-border rounded-full px-4 py-2 mb-8 animate-float">
          <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
          <span className="text-sm text-muted-foreground">
            Available for work
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Innovative engineering for{" "}
          <span className="gradient-text">tomorrow's solutions</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Mechanical engineer specializing in product design, automation, and
          manufacturing optimization. Creating efficient, practical solutions
          for complex engineering challenges.
        </p>

        {/* Feature Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 bg-secondary/30 rounded-full px-4 py-2 border border-border">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-sm">Product Design</span>
          </div>
          <div className="flex items-center gap-2 bg-secondary/30 rounded-full px-4 py-2 border border-border">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-sm">CAD Modeling</span>
          </div>
          <div className="flex items-center gap-2 bg-secondary/30 rounded-full px-4 py-2 border border-border">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-sm">Process Optimization</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link to="/projects">
            <Button
              size="lg"
              className="gradient-button border-0 text-background font-medium text-lg px-8 py-6"
            >
              View My Work
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown className="text-muted-foreground" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
