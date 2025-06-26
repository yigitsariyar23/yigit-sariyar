"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Globe } from "lucide-react"
import { Project, ProjectCategory } from "@/types"

const categories = [
  { key: "All", label: "All Projects" },
  { key: ProjectCategory.WEB_APPLICATION, label: "Web Applications" },
  { key: ProjectCategory.GAME_DEVELOPMENT, label: "Game Development" },
  { key: ProjectCategory.SYSTEM_PROGRAMMING, label: "System Programming" },
  { key: ProjectCategory.COLLABORATION, label: "Collaborations" },
]

interface ProjectsClientProps {
  projects: Project[]
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const [activeFilter, setActiveFilter] = useState("All")
  const [isTransitioning, setIsTransitioning] = useState(false)

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  // Handle filter change with transition
  const handleFilterChange = (newFilter: string) => {
    if (newFilter === activeFilter) return
    
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveFilter(newFilter)
      setTimeout(() => {
        setIsTransitioning(false)
      }, 50)
    }, 150)
  }

  // Format project date to show year and month
  const formatProjectDate = (date: string | Date) => {
    const projectDate = new Date(date)
    return projectDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
  }

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <button
            key={category.key}
            onClick={() => handleFilterChange(category.key)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
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
      <div 
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
        key={activeFilter}
      >
        {filteredProjects.map((project, index) => (
          <Link
            key={project.id}
            href={`/projects/${project.slug}`}
            className="group block"
          >
            <Card
              className="group-hover:shadow-lg transition-all duration-300 bg-white dark:bg-slate-900 cursor-pointer h-full"
              style={{
                animationDelay: `${index * 50}ms`,
                animation: isTransitioning ? 'none' : 'fadeInUp 0.4s ease-out forwards'
              }}
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
                      {formatProjectDate(project.project_date)}
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
                  {project.tags.slice(0, 3).map((tag: string) => (
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
                <div className="flex items-center justify-end">
                  <div className="flex items-center space-x-2">
                    {project.github_url && (
                      <Link
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-10 relative"
                      >
                        <Github className="h-4 w-4" />
                      </Link>
                    )}
                    {project.live_url && (
                      <Link
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-10 relative"
                      >
                        <Globe className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
} 