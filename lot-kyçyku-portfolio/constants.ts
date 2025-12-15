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
    title: "Scalable SaaS Architecture",
    description: "A multi-tenant SaaS boilerplate built with Laravel 11, designed for high availability and rapid feature deployment.",
    tech: ["Laravel 11", "Tenancy", "Redis", "Docker"],
    github: "https://github.com/lotkycyku"
  },
  {
    id: 2,
    title: "E-Commerce API Core",
    description: "Headless e-commerce backend engine featuring complex inventory management, JWT authentication, and optimized search.",
    tech: ["PHP 8.3", "Laravel Sanctum", "ElasticSearch", "MySQL"],
    github: "https://github.com/lotkycyku"
  },
  {
    id: 3,
    title: "DevOps Automation Bot",
    description: "Automated deployment and monitoring tool integrating Slack webhooks with GitHub Actions pipelines.",
    tech: ["Node.js", "GitHub Actions", "Websockets"],
    github: "https://github.com/lotkycyku"
  }
];