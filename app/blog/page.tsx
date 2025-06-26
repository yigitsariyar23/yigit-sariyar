"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, Search, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Building a CHIP-8 Emulator: Understanding Computer Architecture Through Code",
    slug: "chip8-emulator-guide",
    excerpt:
      "Deep dive into creating a CHIP-8 emulator from scratch using C++ and SDL2, exploring opcodes, memory management, and graphics rendering.",
    content: "Full article content here...",
    category: "System Programming",
    tags: ["C++", "Emulation", "Computer Architecture", "SDL2"],
    publishDate: "2024-12-15",
    readTime: "8 min read",
    image: "/placeholder.svg?height=200&width=400",
    featured: true,
  },
  {
    id: 2,
    title: "From Unity Prototypes to Production: Lessons from 8+ Game Projects",
    slug: "unity-production-insights",
    excerpt:
      "Insights gained from leading game development at Neutron Games, covering project management, technical challenges, and creative processes.",
    content: "Full article content here...",
    category: "Game Development",
    tags: ["Unity", "C#", "Project Management", "Game Design"],
    publishDate: "2024-12-10",
    readTime: "12 min read",
    image: "/placeholder.svg?height=200&width=400",
    featured: false,
  },
  {
    id: 3,
    title: "Building Scalable Web Crawlers with Node.js and Puppeteer",
    slug: "web-crawlers-nodejs",
    excerpt:
      "Technical guide on creating efficient web crawlers for procurement data, handling rate limiting, and processing large datasets.",
    content: "Full article content here...",
    category: "Web Development",
    tags: ["Node.js", "Puppeteer", "Web Scraping", "Data Processing"],
    publishDate: "2024-12-05",
    readTime: "10 min read",
    image: "/placeholder.svg?height=200&width=400",
    featured: false,
  },
  {
    id: 4,
    title: "Leading a University Software Society: Growing from 20 to 200+ Members",
    slug: "leading-software-society",
    excerpt:
      "Strategies for community building, event management, and fostering collaboration in technical communities.",
    content: "Full article content here...",
    category: "Leadership",
    tags: ["Community Building", "Leadership", "Event Management", "Mentorship"],
    publishDate: "2024-11-28",
    readTime: "6 min read",
    image: "/placeholder.svg?height=200&width=400",
    featured: false,
  },
  {
    id: 5,
    title: "AI-Powered Travel Discovery: Integrating Gemini API with Next.js",
    slug: "ai-travel-discovery",
    excerpt:
      "Technical breakdown of building CAKS, covering API integration, caching strategies, and user experience optimization.",
    content: "Full article content here...",
    category: "Web Development",
    tags: ["Next.js", "AI Integration", "Gemini API", "Supabase"],
    publishDate: "2024-11-20",
    readTime: "9 min read",
    image: "/placeholder.svg?height=200&width=400",
    featured: false,
  },
  {
    id: 6,
    title: "Socket Programming in C: Building a P2P File Transfer System",
    slug: "socket-programming-p2p",
    excerpt:
      "Low-level networking concepts, socket programming fundamentals, and implementing peer-to-peer communication protocols.",
    content: "Full article content here...",
    category: "System Programming",
    tags: ["C", "Socket Programming", "Networking", "P2P"],
    publishDate: "2024-11-15",
    readTime: "11 min read",
    image: "/placeholder.svg?height=200&width=400",
    featured: false,
  },
]

const categories = [
  { key: "All", label: "All Posts" },
  { key: "Game Development", label: "Game Development" },
  { key: "Web Development", label: "Web Development" },
  { key: "System Programming", label: "System Programming" },
  { key: "Leadership", label: "Leadership" },
]

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeFilter === "All" || post.category === activeFilter
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">Technical Blog</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
              Insights, tutorials, and deep dives into software development, game creation, and technical leadership.
            </p>

            {/* Search */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline" size="sm">
                <Link href="/blog/topics">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Browse Topics
                </Link>
              </Button>
            </div>
          </div>

          {/* Featured Post */}
          {featuredPost && activeFilter === "All" && !searchQuery && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Featured Article</h2>
              <Card className="overflow-hidden bg-white dark:bg-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      width={500}
                      height={300}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <Badge variant="secondary" className="w-fit mb-4">
                      {featuredPost.category}
                    </Badge>
                    <CardTitle className="text-2xl mb-4">{featuredPost.title}</CardTitle>
                    <CardDescription className="mb-6 text-base">{featuredPost.excerpt}</CardDescription>
                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-6">
                      <Calendar className="h-4 w-4 mr-1" />
                      <time>
                        {new Date(featuredPost.publishDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <Button asChild>
                      <Link href={`/blog/${featuredPost.slug}`}>
                        Read Full Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>
          )}

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveFilter(category.key)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeFilter === category.key
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                    : "bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Card
                key={post.id}
                className="group hover:shadow-lg transition-all duration-300 bg-white dark:bg-slate-900"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-slate-900">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <time>
                      {new Date(post.publishDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl mb-3 line-clamp-2 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="mb-4 line-clamp-3">{post.excerpt}</CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{post.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-slate-900 dark:text-white hover:text-slate-600 dark:hover:text-slate-300 transition-colors font-medium"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">No articles found</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Try adjusting your search or filter criteria.</p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setActiveFilter("All")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
