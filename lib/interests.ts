import { supabase } from './database'
import { Interest, CreateInterest, UpdateInterest } from '@/types'

export async function getAllInterests(): Promise<Interest[]> {
  try {
    const { data, error } = await supabase
      .from('interests')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Error fetching interests:', error)
      throw new Error('Failed to fetch interests')
    }
    
    return data || []
  } catch (error) {
    console.error('Error fetching interests:', error)
    throw new Error('Failed to fetch interests')
  }
}

export async function getFeaturedInterests(): Promise<Interest[]> {
  try {
    const { data, error } = await supabase
      .from('interests')
      .select('*')
      .eq('featured', true)
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Error fetching featured interests:', error)
      throw new Error('Failed to fetch featured interests')
    }
    
    return data || []
  } catch (error) {
    console.error('Error fetching featured interests:', error)
    throw new Error('Failed to fetch featured interests')
  }
}

export async function getInterestBySlug(slug: string): Promise<Interest | null> {
  try {
    const { data, error } = await supabase
      .from('interests')
      .select('*')
      .eq('slug', slug)
      .single()
    
    if (error) {
      if (error.code === 'PGRST116') {
        // No rows found
        return null
      }
      console.error('Error fetching interest by slug:', error)
      throw new Error('Failed to fetch interest')
    }
    
    return data
  } catch (error) {
    console.error('Error fetching interest by slug:', error)
    throw new Error('Failed to fetch interest')
  }
}

export async function getInterestsByCategory(category: string): Promise<Interest[]> {
  try {
    const { data, error } = await supabase
      .from('interests')
      .select('*')
      .eq('category', category)
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Error fetching interests by category:', error)
      throw new Error('Failed to fetch interests by category')
    }
    
    return data || []
  } catch (error) {
    console.error('Error fetching interests by category:', error)
    throw new Error('Failed to fetch interests by category')
  }
}

export async function createInterest(interest: CreateInterest): Promise<Interest> {
  try {
    const { data, error } = await supabase
      .from('interests')
      .insert([interest])
      .select()
      .single()
    
    if (error) {
      console.error('Error creating interest:', error)
      throw new Error('Failed to create interest')
    }
    
    return data
  } catch (error) {
    console.error('Error creating interest:', error)
    throw new Error('Failed to create interest')
  }
}

export async function updateInterest(id: string, interest: Partial<Interest>): Promise<Interest | null> {
  try {
    const updateData = { ...interest }
    delete updateData.id
    delete updateData.created_at
    delete updateData.updated_at
    
    const { data, error } = await supabase
      .from('interests')
      .update(updateData)
      .eq('id', id)
      .select()
      .single()
    
    if (error) {
      console.error('Error updating interest:', error)
      throw new Error('Failed to update interest')
    }
    
    return data
  } catch (error) {
    console.error('Error updating interest:', error)
    throw new Error('Failed to update interest')
  }
}

export async function deleteInterest(id: string): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('interests')
      .delete()
      .eq('id', id)
    
    if (error) {
      console.error('Error deleting interest:', error)
      throw new Error('Failed to delete interest')
    }
    
    return true
  } catch (error) {
    console.error('Error deleting interest:', error)
    throw new Error('Failed to delete interest')
  }
} 