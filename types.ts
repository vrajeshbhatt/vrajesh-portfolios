
export interface NavItem {
  label: string;
  href: string;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  details: string[];
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string[];
  techStack: string[];
  link?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string; // Changed from LucideIcon to string name
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Changed from LucideIcon to string name
}

export interface ChartDataPoint {
  subject: string;
  A: number;
  fullMark: number;
}

export interface PortfolioData {
  personalInfo: typeof import('./constants').PERSONAL_INFO;
  navItems: NavItem[];
  socialLinks: SocialLink[];
  skillCategories: SkillCategory[];
  skillChartData: ChartDataPoint[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  awards: string[];
}
