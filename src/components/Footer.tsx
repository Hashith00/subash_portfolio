import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="container mx-auto max-w-6xl bg-background/20 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">Portfolio</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building the future of web development, one project at a time.
              Let's create something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a
                href="#about"
                className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                About
              </a>
              <a
                href="#portfolio"
                className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Portfolio
              </a>
              <a
                href="#skills"
                className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Skills
              </a>
              <a
                href="#experience"
                className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>hello@example.com</p>
              <p>+1 (555) 123-4567</p>
              <p>San Francisco, CA</p>
            </div>

            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart size={16} className="text-red-500" /> and modern
            tech
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
