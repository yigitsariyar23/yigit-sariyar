// Enums matching the database schema
export enum InterestCategory {
  TECHNICAL = 'Technical',
  SOCIAL = 'Social'
}

export enum InterestType {
  CREATIVE_TECHNOLOGY = 'Creative Technology',
  ARTS_CULTURE = 'Arts & Culture',
  EMERGING_TECH = 'Emerging Tech',
  DESIGN_PSYCHOLOGY = 'Design & Psychology',
  CREATIVE_ARTS = 'Creative Arts',
  PHILOSOPHY_ETHICS = 'Philosophy & Ethics',
  CULTURAL_STUDIES = 'Cultural Studies'
}

// Main Interest interface
export interface Interest {
  id: string
  title: string
  slug: string
  excerpt: string
  category: InterestCategory
  type: InterestType
  tags: string[]
  icon: string
  color: string
  featured: boolean
  content?: string // Long-form content for individual interest pages
  created_at: Date
  updated_at: Date
}

// Type for creating a new interest (without auto-generated fields)
export type CreateInterest = Omit<Interest, 'id' | 'created_at' | 'updated_at'>

// Type for updating an interest (all fields optional except id)
export type UpdateInterest = Partial<Interest> & { id: string } 