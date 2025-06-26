export interface TimelineEntry {
  id: string
  year: string
  title: string
  type: 'work' | 'education' | 'leadership'
  description: string
  location: string
  technologies?: string[]
  achievements?: string[]
  status?: string
  order_index?: number
  created_at?: string
  updated_at?: string
}

export interface TimelineEntryInput {
  year: string
  title: string
  type: 'work' | 'education' | 'leadership'
  description: string
  location: string
  technologies?: string[]
  achievements?: string[]
  status?: string
  order_index?: number
} 