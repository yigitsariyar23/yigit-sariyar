export interface Skill {
  id: string
  name: string
  level: 'Rudimentary' | 'Intermediate' | 'Proficient' | 'Expert'
  technologies: string[]
  color: string
  order_index?: number
  created_at?: string
  updated_at?: string
}

export interface SkillInput {
  name: string
  level: 'Rudimentary' | 'Intermediate' | 'Proficient' | 'Expert'
  technologies: string[]
  color: string
  order_index?: number
} 