export type ContactType = 'email' | 'phone' | 'location' | 'social' | 'other'

export interface ContactInfo {
  id: string
  type: ContactType
  label: string
  value: string
  url?: string
  icon?: string
  description?: string
  display_order: number
  is_active: boolean
  created_at: string
  updated_at: string
} 