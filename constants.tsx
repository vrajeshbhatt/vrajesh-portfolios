
import { ExperienceItem, ProjectItem, SkillCategory, EducationItem, SocialLink, NavItem, ChartDataPoint } from './types';

export const PERSONAL_INFO = {
  name: "Vrajesh Bhatt",
  title: "Data Analyst & ML Enthusiast",
  summary: "Detail-oriented Data Analyst leveraging advanced Python, SQL, and Power BI skills to transform complex datasets into actionable business insights. Proven record of improving data quality, developing interactive dashboards, and recommending process improvements that optimize operations.",
  email: "vrajesh.bhatt@outlook.com",
  phone: "+1 437 971 2456",
  location: "Toronto, ON",
  openToRelocate: true,
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'LinkedIn', url: '#', icon: 'Linkedin' },
  { platform: 'GitHub', url: '#', icon: 'Github' }, 
  { platform: 'Email', url: `mailto:${PERSONAL_INFO.email}`, icon: 'Mail' },
  { platform: 'Resume', url: '#', icon: 'FileText' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Data Analytics & BI",
    skills: ["Power BI", "Tableau", "Excel", "Power Query", "DAX", "Google Cloud Platform"],
    icon: 'BarChart3'
  },
  {
    title: "Programming & Database",
    skills: ["Python", "R", "SQL", "MySQL", "SQL Server", "Flask"],
    icon: 'Terminal'
  },
  {
    title: "Data Science & ML",
    skills: ["Scikit-learn", "Pandas", "NumPy", "NLP", "Predictive Modeling", "Regression"],
    icon: 'BrainCircuit'
  },
  {
    title: "Core Competencies",
    skills: ["Data Cleaning", "Schema Design", "KPI Development", "Trend Analysis", "Forecasting"],
    icon: 'Database'
  }
];

// Data for Recharts visualization
export const SKILL_CHART_DATA: ChartDataPoint[] = [
  { subject: 'Visualization', A: 90, fullMark: 100 },
  { subject: 'Python/R', A: 85, fullMark: 100 },
  { subject: 'SQL/DB', A: 95, fullMark: 100 },
  { subject: 'Machine Learning', A: 75, fullMark: 100 },
  { subject: 'Communication', A: 80, fullMark: 100 },
  { subject: 'Statistics', A: 85, fullMark: 100 },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 1,
    role: "Financial Data Analyst",
    company: "Moah Appliance and Services Inc.",
    location: "Toronto, ON",
    period: "April 2023 – June 2024",
    details: [
      "Automated financial reporting, cutting manual work by 65% via Power BI dashboards with real-time KPIs.",
      "Designed financial reports using Excel, creating dashboards that reduced decision-making time by 30%.",
      "Led helpdesk operations for billing inquiries, resolving 20+ weekly customer issues via email with a 98% satisfaction rate."
    ]
  },
  {
    id: 2,
    role: "Data Analyst Co-Op",
    company: "Toronto Business College",
    location: "Toronto, ON",
    period: "Sept 2023 – Dec 2023",
    details: [
      "Built interactive Power BI dashboards integrating data from multiple sources for real-time visibility.",
      "Conducted data cleaning, transformation, and validation processes to ensure accuracy of analytical insights.",
      "Generated KPI and trend reports supporting institutional decision-making and process improvement.",
      "Collaborated with stakeholders to translate analytical findings into actionable recommendations."
    ]
  },
  {
    id: 3,
    role: "Python Backend Engineer",
    company: "Getactyv Physio",
    location: "Bengaluru, India",
    period: "May 2021 – March 2023",
    details: [
      "Implemented RESTful services and application components using Python and Flask to seamlessly integrate machine learning models, resulting in improved user engagement.",
      "Collaborated with Data Scientists to build, deploy, and refine machine learning models, focusing on scalability and performance.",
      "Conducted detailed code reviews and provided thoughtful feedback to ensure high-quality software design."
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "Interactive Grade Appeal Dashboard",
    description: [
      "Delivered real-time insights through Power BI dashboard that helped reduce appeal resolution time by 30%.",
      "Improved data accuracy and reliability, enabling leadership to make faster, evidence-based decisions.",
      "Facilitated clearer communication between academic teams and stakeholders."
    ],
    techStack: ["Power BI", "Data Modeling", "DAX"]
  },
  {
    id: 2,
    title: "Fraud Email Detection using NLP",
    description: [
      "Developed an email fraud detection system utilizing machine learning and NLP techniques.",
      "Preprocessed email data, engineered features, and trained supervised models using Python and scikit-learn.",
      "Evaluated model performance using precision, recall, and F1-score metrics, achieving high accuracy."
    ],
    techStack: ["Python", "NLP", "Scikit-learn", "ML"]
  },
  {
    id: 3,
    title: "Automated Ticket Management System",
    description: [
      "Implemented machine learning models using NLP and neural networks to predict ticket categories and priorities.",
      "Deployed models on a cloud platform with Flask and HuggingFace for user interaction.",
      "Collaborated with IT and business stakeholders to leverage data-driven insights."
    ],
    techStack: ["NLP", "Neural Networks", "Flask", "HuggingFace"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    school: "Loyalist College",
    degree: "Ontario College Graduate Certificate, AI and Data Science",
    period: "May 2022 - Dec 2023"
  },
  {
    school: "PP Savani University",
    degree: "Bachelor’s, Computer Engineering",
    period: "Sept 2017 - May 2021"
  }
];

export const AWARDS = [
  "Employee of the Quarter – Moah Appliance and Services Inc.",
  "Finalist, Gujarat Industrial Hackathon 2019 (Government of Gujarat)",
  "Graduated with Honors and Dean’s List recognition."
];
