export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  details: string;
  demo?: string;
  github?: string;
}

export interface Certificate {
  id: number;
  title: string;
  description: string;
  image: string;
  issuer: string;
  date: string;
  details: string;
  link?: string;
}

export interface TechStackItem {
  name: string;
  category: string;
  icon: string;
  details: string;
  experience?: string;
  projects?: string[];
}