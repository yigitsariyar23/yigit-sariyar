import { supabase } from './database'
import { Project, CreateProject, UpdateProject } from '@/types'

export async function getAllProjects(): Promise<Project[]> {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Error fetching projects:', error)
      throw new Error('Failed to fetch projects')
    }
    
    return data || []
  } catch (error) {
    console.error('Error fetching projects:', error)
    throw new Error('Failed to fetch projects')
  }
}

export async function getRecentProjects(limit: number = 3): Promise<Project[]> {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit)
    
    if (error) {
      console.error('Error fetching recent projects:', error)
      throw new Error('Failed to fetch recent projects')
    }
    
    return data || []
  } catch (error) {
    console.error('Error fetching recent projects:', error)
    throw new Error('Failed to fetch recent projects')
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('slug', slug)
      .single()
    
    if (error) {
      if (error.code === 'PGRST116') {
        // No rows found
        return null
      }
      console.error('Error fetching project by slug:', error)
      throw new Error('Failed to fetch project')
    }
    
    return data
  } catch (error) {
    console.error('Error fetching project by slug:', error)
    throw new Error('Failed to fetch project')
  }
}

export async function createProject(project: CreateProject): Promise<Project> {
  try {
    const { data, error } = await supabase
      .from('projects')
      .insert([project])
      .select()
      .single()
    
    if (error) {
      console.error('Error creating project:', error)
      throw new Error('Failed to create project')
    }
    
    return data
  } catch (error) {
    console.error('Error creating project:', error)
    throw new Error('Failed to create project')
  }
}

export async function updateProject(id: string, project: Partial<Project>): Promise<Project | null> {
  try {
    const updateData = { ...project }
    delete updateData.id
    delete updateData.created_at
    delete updateData.updated_at
    
    const { data, error } = await supabase
      .from('projects')
      .update(updateData)
      .eq('id', id)
      .select()
      .single()
    
    if (error) {
      console.error('Error updating project:', error)
      throw new Error('Failed to update project')
    }
    
    return data
  } catch (error) {
    console.error('Error updating project:', error)
    throw new Error('Failed to update project')
  }
}

export async function deleteProject(id: string): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', id)
    
    if (error) {
      console.error('Error deleting project:', error)
      throw new Error('Failed to delete project')
    }
    
    return true
  } catch (error) {
    console.error('Error deleting project:', error)
    throw new Error('Failed to delete project')
  }
} 