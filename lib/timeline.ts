import { supabase } from './database'
import { TimelineEntry, TimelineEntryInput } from '@/types'

export async function getTimelineEntries(): Promise<TimelineEntry[]> {
  const { data, error } = await supabase
    .from('timeline')
    .select('*')
    .order('order_index', { ascending: true })

  if (error) {
    console.error('Error fetching timeline entries:', error)
    return []
  }

  return data || []
}

export async function createTimelineEntry(entry: TimelineEntryInput): Promise<TimelineEntry | null> {
  const { data, error } = await supabase
    .from('timeline')
    .insert([entry])
    .select()
    .single()

  if (error) {
    console.error('Error creating timeline entry:', error)
    return null
  }

  return data
}

export async function updateTimelineEntry(id: string, entry: Partial<TimelineEntryInput>): Promise<TimelineEntry | null> {
  const { data, error } = await supabase
    .from('timeline')
    .update(entry)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error('Error updating timeline entry:', error)
    return null
  }

  return data
}

export async function deleteTimelineEntry(id: string): Promise<boolean> {
  const { error } = await supabase
    .from('timeline')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting timeline entry:', error)
    return false
  }

  return true
} 