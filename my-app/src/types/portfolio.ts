export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  image?: string;
  imageAlt?: string;
  liveUrl?: string;
  githubUrl?: string;
  isMini?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon?: string;
}

export interface EducationItem {
  title: string;
  institution: string;
  period: string;
  location: string;
  description?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  technologies: string[];
  icon: string;
}

export interface PortfolioMetric {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
  accent: 'cyan' | 'blue' | 'violet';
}

export interface SocialLink {
  name: string;
  url: string;
  handle: string;
  icon: 'github' | 'linkedin' | 'leetcode' | 'mail' | 'phone';
}

export interface PersonalInfo {
  name: string;
  role: string;
  phone: string;
  phoneRaw: string;
  email: string;
  linkedinUrl: string;
  githubUrl: string;
  leetcodeUrl: string;
  location: string;
  bioShort?: string;
  bioDetailed?: string[];
  resumeUrl?: string;
}
