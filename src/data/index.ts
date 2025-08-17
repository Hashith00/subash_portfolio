// Centralized data exports
export { default as projectsData } from "./projects.json";
export { default as personalData } from "./personal.json";
export { default as experienceData } from "./experience.json";
export { default as contactData } from "./contact.json";

// Type definitions for data structures
export interface ProjectImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: string;
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

export interface ExperienceItem {
  id: string;
  type: "work" | "education";
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href: string;
}

export interface SocialLink {
  icon: string;
  label: string;
  href: string;
  color: string;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  availability: string;
  cvFile: string;
}
