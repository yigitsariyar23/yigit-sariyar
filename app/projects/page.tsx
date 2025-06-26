import { getAllProjects } from "@/lib/projects"
import ProjectsClient from "./projects-client"
import PageTransition from "@/components/page-transition"

export default async function ProjectsPage() {
  const projects = await getAllProjects()

  return (
    <PageTransition className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Projects</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of my work spanning games, web applications, system programming, and collaborative projects.
            </p>
          </div>

          {/* Client Component with filtering and grid */}
          <ProjectsClient projects={projects} />
        </div>
      </div>
    </PageTransition>
  )
}
