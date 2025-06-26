// Enums matching the database schema
export enum ProjectCategory {
  WEB_APPLICATION = 'Web Application',
  GAME_DEVELOPMENT = 'Game Development',
  SYSTEM_PROGRAMMING = 'System Programming',
  COLLABORATION = 'Collaboration'
}

export enum ProjectStatus {
  IN_PROGRESS = 'In Progress',
  COMPLETED = 'Completed',
  PLANNING = 'Planning',
  ON_HOLD = 'On Hold',
  CANCELLED = 'Cancelled'
}

// Tech stack interface
export interface TechStack {
  frontend: string[]
  backend: string[]
  database: string[]
  deployment: string[]
}

// Main Project interface
export interface Project {
  id: string
  title: string
  category: ProjectCategory
  description: string
  long_description: string
  image: string
  tags: string[]
  status: ProjectStatus
  project_date: Date
  duration: string
  team: string
  role: string
  challenges: string[]
  solutions: string[]
  tech_stack: TechStack
  features: string[]
  screenshots: string[]
  github_url?: string
  live_url?: string
  slug: string
  created_at: Date
  updated_at: Date
}

// Type for creating a new project (without auto-generated fields)
export type CreateProject = Omit<Project, 'id' | 'created_at' | 'updated_at'>

// Type for updating a project (all fields optional except id)
export type UpdateProject = Partial<Project> & { id: string } 