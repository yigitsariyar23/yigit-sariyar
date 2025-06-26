import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ArrowRight, Gamepad2, Film, Code, BookOpen, Palette, Music, Coffee, Globe } from "lucide-react"
import { getAllInterests } from "@/lib/interests"
import { Interest } from "@/types"
import InterestsClient from "./interests-client"

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
  return <InterestsClient interests={interests} />
} 