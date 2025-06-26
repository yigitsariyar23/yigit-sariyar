"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ArrowRight, Gamepad2, Film, Code, BookOpen, Palette, Music, Coffee, Globe } from "lucide-react"
import { Interest } from "@/types"

const categories = [
  { key: "All", label: "All Interests" },
  { key: "Technical", label: "Technical" },
  { key: "Social", label: "Social & Cultural" },
]

// Helper function to get icon component from icon name
function getIconComponent(iconName: string) {
  const iconMap = {
    Gamepad2,
    Film,
    Code,
    BookOpen,
    Palette,
    Music,
    Coffee,
    Globe,
  }
  return iconMap[iconName as keyof typeof iconMap] || Code
}

interface InterestsClientProps {
  interests: Interest[]
}

export default function InterestsClient({ interests }: InterestsClientProps) {
  const [activeFilter, setActiveFilter] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredInterests = interests.filter((interest) => {
    const matchesCategory = activeFilter === "All" || interest.category === activeFilter
    const matchesSearch =
      interest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      interest.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      interest.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredInterest = interests.find((interest) => interest.featured)
  const regularInterests = filteredInterests.filter((interest) => !interest.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">My Interests</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
              Technical passions and social interests that shape my perspective, inform my work, and drive my curiosity about the world.
            </p>

            {/* Search */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                <Input
                  placeholder="Search interests..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category.key}
                variant={activeFilter === category.key ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category.key)}
                className="transition-all duration-200"
              >
                {category.label}
                <span className="ml-2 text-xs opacity-70">
                  ({activeFilter === category.key 
                    ? filteredInterests.length 
                    : interests.filter(i => category.key === "All" || i.category === category.key).length})
                </span>
              </Button>
            ))}
          </div>

          {/* Interests Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularInterests.map((interest) => {
              const IconComponent = getIconComponent(interest.icon)
              return (
                <Card
                  key={interest.id}
                  className="group hover:shadow-lg transition-all duration-300 bg-white dark:bg-slate-900"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg ${interest.color}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div className="flex gap-2">
                        <Badge variant={interest.category === "Technical" ? "default" : "secondary"} className="text-xs">
                          {interest.category}
                        </Badge>
                      </div>
                    </div>
                    <Badge variant="outline" className="w-fit mb-2 text-xs">
                      {interest.type}
                    </Badge>
                    <CardTitle className="text-xl group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                      {interest.title}
                    </CardTitle>
                    <CardDescription className="text-base">{interest.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {interest.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link
                      href={`/interests/${interest.slug}`}
                      className="inline-flex items-center text-slate-900 dark:text-white hover:text-slate-600 dark:hover:text-slate-300 transition-colors font-medium"
                    >
                      Explore Interest
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {filteredInterests.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-slate-600 dark:text-slate-400">
                No interests found matching your search criteria.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("")
                  setActiveFilter("All")
                }}
                className="mt-4"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 