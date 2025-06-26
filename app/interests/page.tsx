import { getAllInterests } from "@/lib/interests"
import { Interest } from "@/types"
import InterestsClient from "./interests-client"
import PageTransition from "@/components/page-transition"

export default async function InterestsPage() {
  // Fetch interests from Supabase
  let interests: Interest[] = []
  
  try {
    interests = await getAllInterests()
  } catch (error) {
    console.error('Failed to fetch interests:', error)
    // Fallback to empty array if fetch fails
    interests = []
  }

  // Pass data to client component
  return <PageTransition>
    <InterestsClient interests={interests} />
    </PageTransition>
} 