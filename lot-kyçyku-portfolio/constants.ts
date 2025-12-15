import { Experience, Project, SkillCategory } from './types';

export const SOCIALS = {
  email: "contact@lotkycyku.dev",
  github: "https://github.com/L0t1",
  linkedin: "https://www.linkedin.com/in/lotuuu/",
  twitter: "https://twitter.com/lotkycyku"
};

export const SKILLS: SkillCategory[] = [
  {
    title: "Backend Engineering (Heavy)",
    icon: "server",
    skills: [
      "Laravel 11", "PHP 8.3", "Node.js",
      "RESTful APIs", "GraphQL", "System Architecture",
      "API Gateway", "Authentication (JWT, Sanctum)"
    ]
  },
  {
    title: "Database & Storage",
    icon: "database",
    skills: [
      "MySQL", "MariaDB", "MongoDB", "Redis", "ElasticSearch"
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: "container",
    skills: [
      "Docker", "CI/CD", "GitHub Actions",
      "Nginx", "Cloud Deployments"
    ]
  },
  {
    title: "Frontend & Integration",
    icon: "test",
    skills: [
      "React", "Vue.js", "TypeScript", "Tailwind CSS",
      "Frontend Integration", "Swagger/OpenAPI"
    ]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Backend Developer",
    company: "Albismart",
    period: "2022 - Present",
    description: [
      "Designing and architecting large-scale Laravel systems.",
      "Building and maintaining scalable, secure APIs for production use.",
      "Managing complex database schemas and optimizing query performance.",
      "Implementing Dockerized environments and automation workflows.",
      "Collaborating closely with frontend teams to integrate reliable endpoints."
    ]
  },
  {
    id: 2,
    role: "Full Stack Engineer",
    company: "Freelance",
    period: "2021 - ∞",
    description: [
      "Architecting and shipping complete web products using Laravel and modern JavaScript frameworks.",
      "Bridging the gap between complex backend logic and interactive, responsive frontends.",
      "Managing end-to-end development lifecycles: from database design to production deployment.",
      "Delivering scalable, high-performance solutions tailored to diverse client needs."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "AI Customer Support",
    description: "Intelligent customer support system with AI-powered responses.",
    tech: ["Laravel", "OpenAI API", "Redis"],
    github: "https://github.com/L0t1"
  },
  {
    id: 2,
    title: "Predictive Analytics",
    description: "Machine learning-based predictive analytics engine.",
    tech: ["Python", "Pandas", "Laravel API"],
    github: "https://github.com/L0t1"
  },
  {
    id: 3,
    title: "Image Recognition",
    description: "Image processing and recognition using Google Vision API.",
    tech: ["Google Vision API", "Laravel", "AWS S3"],
    github: "https://github.com/L0t1"
  },
  {
    id: 4,
    title: "E-commerce Platform",
    description: "Full-featured e-commerce platform with payment integration.",
    tech: ["Laravel", "MySQL", "Redis", "Stripe"],
    github: "https://github.com/L0t1"
  },
  {
    id: 5,
    title: "Finances SaaS",
    description: "Cloud-based financial management and accounting platform.",
    tech: ["Laravel", "Vue.js", "MySQL", "Docker"],
    github: "https://github.com/L0t1"
  },
  {
    id: 6,
    title: "Fleet Management",
    description: "Vehicle fleet management and GPS tracking system.",
    tech: ["Laravel", "Google Maps API", "Socket.io"],
    github: "https://github.com/L0t1"
  },
  {
    id: 7,
    title: "Corporate Dashboard",
    description: "Real-time business analytics and reporting dashboard.",
    tech: ["React", "Laravel API", "Chart.js"],
    github: "https://github.com/L0t1"
  },
  {
    id: 8,
    title: "HR Management",
    description: "Employee management, payroll, and attendance tracking.",
    tech: ["Laravel", "PostgreSQL", "Vue.js"],
    github: "https://github.com/L0t1"
  },
  {
    id: 9,
    title: "Project Tracker",
    description: "Task tracking, team collaboration, and project timelines.",
    tech: ["Laravel", "Inertia.js", "React"],
    github: "https://github.com/L0t1"
  },
  {
    id: 10,
    title: "Inventory System",
    description: "Stock management with real-time inventory tracking.",
    tech: ["Laravel", "Livewire", "MySQL"],
    github: "https://github.com/L0t1"
  },
  {
    id: 11,
    title: "POS System",
    description: "Retail POS system with transaction processing and reporting.",
    tech: ["Electron", "Laravel API", "SQLite"],
    github: "https://github.com/L0t1"
  },
  {
    id: 12,
    title: "Travel Agency Portal",
    description: "Travel booking portal with package and itinerary management.",
    tech: ["Laravel", "Amadeus API", "React"],
    github: "https://github.com/L0t1"
  },
  {
    id: 13,
    title: "Restaurant Landing",
    description: "Restaurant booking and menu management system.",
    tech: ["React", "Tailwind CSS", "Laravel"],
    github: "https://github.com/L0t1"
  }
];