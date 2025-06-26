"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Globe } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "AGMS - Automated Graduation Management System",
    slug: "agms",
    category: "Web Application",
    description:
      "Role-based web application for graduation workflows using Next.js, Spring Boot, PostgreSQL, and JWT authentication. Deployed on Azure & Vercel for scalable performance.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Next.js", "Spring Boot", "PostgreSQL", "JWT", "Azure", "Vercel"],
    status: "Completed",
    year: "2024",
  },
  {
    id: 2,
    title: "CAKS - City Attraction Kitchen Stay",
    slug: "caks",
    category: "Web Application",
    description:
      "AI-powered travel discovery application with city-based content recommendations using Next.js, Geoapify API, Gemini AI, and Supabase for efficient data caching.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Next.js", "Geoapify", "Gemini AI", "Supabase", "Travel Tech"],
    status: "Completed",
    year: "2024",
  },
  {
    id: 3,
    title: "P2P File Transfer Application",
    slug: "p2p-file-transfer",
    category: "System Programming",
    description:
      "Linux-based C application implementing custom peer-to-peer file sharing over sockets with metadata coordination via central server architecture.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["C", "Linux", "Socket Programming", "P2P", "Networking"],
    status: "Completed",
    year: "2024",
  },
  {
    id: 4,
    title: "CHIP-8 Emulator",
    slug: "chip8-emulator",
    category: "System Programming",
    description:
      "Complete emulator built in C++ with SDL2, supporting 35+ opcodes, graphics rendering, input handling, and accurate memory emulation.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["C++", "SDL2", "Emulation", "Computer Architecture"],
    status: "Completed",
    year: "2024",
  },
  {
    id: 5,
    title: "Unity Game Prototypes Collection",
    slug: "unity-prototypes",
    category: "Game Development",
    description:
      "Collection of 8+ game prototypes across multiple genres including tycoon, horror, casual, and metaverse games developed during my time at Neutron Games.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Unity", "C#", "Game Design", "Prototyping", "Multiple Genres"],
    status: "Portfolio",
    year: "2021-2023",
  },
  {
    id: 6,
    title: "İYTE Software Society Platform",
    slug: "iyte-society-platform",
    category: "Collaboration",
    description:
      "Digital membership system and event management tools developed for the university software society, streamlining operations and improving member engagement.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Project Management", "Event Management", "Community Tools", "Web Development"],
    status: "Active",
    year: "2023-Present",
  },
]

const categories = [
  { key: "All", label: "All Projects" },
  { key: "Web Application", label: "Web Applications" },
  { key: "Game Development", label: "Game Development" },
  { key: "System Programming", label: "System Programming" },
  { key: "Collaboration", label: "Collaborations" },
]

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">Projects</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A collection of my work spanning games, web applications, system programming, and collaborative projects.
            </p>
          </div>

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

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-lg transition-all duration-300 bg-white dark:bg-slate-900"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-slate-900">
                        {project.status}
                      </Badge>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge variant="outline" className="bg-white/90 text-slate-900 border-slate-300">
                        {project.year}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <CardDescription className="mb-4 line-clamp-3">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center text-slate-900 dark:text-white hover:text-slate-600 dark:hover:text-slate-300 transition-colors font-medium"
                    >
                      View Details
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </Link>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        <Github className="h-4 w-4" />
                      </button>
                      <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        <Globe className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
