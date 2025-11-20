
import React from 'react';
import { 
  BarChart3, 
  Code2, 
  Database, 
  BrainCircuit, 
  LineChart, 
  Terminal,
  Linkedin,
  Mail,
  Github,
  FileText,
  User,
  Briefcase,
  GraduationCap,
  FolderGit2,
  Globe,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Cpu,
  Server,
  Smartphone,
  Cloud,
  Lock,
  Search
} from 'lucide-react';

// Map of icon names to components
const ICON_MAP: Record<string, React.ElementType> = {
  BarChart3, 
  Code2, 
  Database, 
  BrainCircuit, 
  LineChart, 
  Terminal,
  Linkedin,
  Mail,
  Github,
  FileText,
  User,
  Briefcase,
  GraduationCap,
  FolderGit2,
  Globe,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Cpu,
  Server,
  Smartphone,
  Cloud,
  Lock,
  Search
};

export const getIcon = (name: string) => {
  return ICON_MAP[name] || User; // Default to User icon if not found
};

export const IconPickerOptions = Object.keys(ICON_MAP);

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

export const DynamicIcon: React.FC<IconProps> = ({ name, size = 24, className }) => {
  const IconComponent = getIcon(name);
  return <IconComponent size={size} className={className} />;
};
