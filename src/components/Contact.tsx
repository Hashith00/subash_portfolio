import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { contactData } from "@/data";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  // Icon mapping for string to component conversion
  const iconMap: { [key: string]: any } = {
    Mail,
    Phone,
    MapPin,
    Github,
    Linkedin,
    Twitter,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    toast({
      title: contactData.messages.success.title,
      description: contactData.messages.success.description,
    });

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Map contact info with icons
  const contactInfo = contactData.contactInfo.map((item) => ({
    ...item,
    icon: iconMap[item.icon] || Mail,
  }));

  // Map social links with icons
  const socialLinks = contactData.socialLinks.map((link) => ({
    ...link,
    icon: iconMap[link.icon] || Linkedin,
  }));

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl bg-background/20 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {contactData.messages.callToAction.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor={contactData.formFields.name.id}
                      className="block text-sm font-medium mb-2"
                    >
                      {contactData.formFields.name.label}
                    </label>
                    <Input
                      id={contactData.formFields.name.id}
                      name={contactData.formFields.name.id}
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={contactData.formFields.name.placeholder}
                      required={contactData.formFields.name.required}
                      className="bg-secondary/50 border-border"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor={contactData.formFields.email.id}
                      className="block text-sm font-medium mb-2"
                    >
                      {contactData.formFields.email.label}
                    </label>
                    <Input
                      id={contactData.formFields.email.id}
                      name={contactData.formFields.email.id}
                      type={contactData.formFields.email.type}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={contactData.formFields.email.placeholder}
                      required={contactData.formFields.email.required}
                      className="bg-secondary/50 border-border"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor={contactData.formFields.subject.id}
                    className="block text-sm font-medium mb-2"
                  >
                    {contactData.formFields.subject.label}
                  </label>
                  <Input
                    id={contactData.formFields.subject.id}
                    name={contactData.formFields.subject.id}
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={contactData.formFields.subject.placeholder}
                    required={contactData.formFields.subject.required}
                    className="bg-secondary/50 border-border"
                  />
                </div>

                <div>
                  <label
                    htmlFor={contactData.formFields.message.id}
                    className="block text-sm font-medium mb-2"
                  >
                    {contactData.formFields.message.label}
                  </label>
                  <Textarea
                    id={contactData.formFields.message.id}
                    name={contactData.formFields.message.id}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={contactData.formFields.message.placeholder}
                    rows={contactData.formFields.message.rows}
                    required={contactData.formFields.message.required}
                    className="bg-secondary/50 border-border resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="gradient-button border-0 text-background font-medium w-full"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="glass-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors group"
                  >
                    <div className="p-3 bg-gradient-primary rounded-lg text-background group-hover:scale-110 transition-transform">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <p className="text-muted-foreground text-sm">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Follow Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 bg-secondary/30 hover:bg-secondary/50 rounded-lg transition-all duration-300 ${link.color} group`}
                    >
                      <link.icon
                        size={24}
                        className="group-hover:scale-110 transition-transform"
                      />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">
                  {contactData.messages.callToAction.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {contactData.messages.callToAction.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span>{contactData.messages.callToAction.availability}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
