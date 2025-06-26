import { supabase } from './database'
import { Skill, SkillInput } from '@/types'

export async function getSkills(): Promise<Skill[]> {
  const { data, error } = await supabase
    .from('skills')
    .select('*')
    .order('order_index', { ascending: true })

  if (error) {
    console.error('Error fetching skills:', error)
    return []
  }

  return data || []
}

export async function createSkill(skill: SkillInput): Promise<Skill | null> {
  const { data, error } = await supabase
    .from('skills')
    .insert([skill])
    .select()
    .single()

  if (error) {
    console.error('Error creating skill:', error)
    return null
  }

  return data
}

export async function updateSkill(id: string, skill: Partial<SkillInput>): Promise<Skill | null> {
  const { data, error } = await supabase
    .from('skills')
    .update(skill)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error('Error updating skill:', error)
    return null
  }

  return data
}

export async function deleteSkill(id: string): Promise<boolean> {
  const { error } = await supabase
    .from('skills')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting skill:', error)
    return false
  }

  return true
} 