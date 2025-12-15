export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export enum MascotState {
  IDLE = 'idle',
  WAVING = 'waving',
  READING = 'reading',
  BUILDING = 'building',
  THINKING = 'thinking',
  CELEBRATING = 'celebrating'
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}