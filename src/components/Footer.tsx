import { Linkedin, Mail, Heart, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { personalData, contactData } from "@/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { navigation, personalInfo } = personalData;
  const { contactInfo, socialLinks } = contactData;

  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="container mx-auto max-w-6xl bg-background/20 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">{personalInfo.name}</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {navigation.items.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/certificates"
                className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Certificates
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              {contactInfo.slice(0, 3).map((info, index) => {
                const getIcon = () => {
                  switch (info.icon) {
                    case "Mail":
                      return <Mail size={16} className="inline mr-2" />;
                    case "Phone":
                      return <Phone size={16} className="inline mr-2" />;
                    case "MapPin":
                      return <MapPin size={16} className="inline mr-2" />;
                    default:
                      return null;
                  }
                };
                return (
                  <p key={index}>
                    {getIcon()}
                    {info.href !== "#" ? (
                      <a
                        href={info.href}
                        className="hover:text-foreground transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      info.value
                    )}
                  </p>
                );
              })}
            </div>

            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => {
                const getIcon = () => {
                  switch (social.icon) {
                    case "Linkedin":
                      return <Linkedin size={20} />;
                    case "Mail":
                      return <Mail size={20} />;
                    default:
                      return null;
                  }
                };
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-muted-foreground ${social.color} transition-colors`}
                  >
                    {getIcon()}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {personalInfo.name}. All rights reserved.
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
