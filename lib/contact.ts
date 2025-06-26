import { supabase } from './database'
import { ContactInfo, ContactType } from '@/types/contact'

export async function getContactInfo(): Promise<ContactInfo[]> {
  const { data, error } = await supabase
    .from('contact_info')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true })

  if (error) {
    console.error('Error fetching contact info:', error)
    return []
  }

  return data || []
}

export async function getContactInfoByType(type: ContactType): Promise<ContactInfo[]> {
  const { data, error } = await supabase
    .from('contact_info')
    .select('*')
    .eq('type', type)
    .eq('is_active', true)
    .order('display_order', { ascending: true })

  if (error) {
    console.error(`Error fetching contact info for type ${type}:`, error)
    return []
  }

  return data || []
}

export async function getDirectContactInfo(): Promise<ContactInfo[]> {
  return getContactInfoByType('email').then(async (emails) => {
    const locations = await getContactInfoByType('location')
    return [...emails, ...locations]
  })
}

export async function getSocialContactInfo(): Promise<ContactInfo[]> {
  return getContactInfoByType('social')
} 