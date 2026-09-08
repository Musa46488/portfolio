export interface Service {
  number: string;
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  visualPlaceholder: string;
}

export interface Project {
  number: string;
  slug: string;
  title: string;
  type: string;
  description: string;
  technologies: string[];
  features: string[];
  visualPlaceholder: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  summary: string[];
  current?: boolean;
}

export interface TechGroup {
  label: string;
  items: TechItem[];
}

export interface TechItem {
  name: string;
  context: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface JourneyStep {
  label: string;
}
