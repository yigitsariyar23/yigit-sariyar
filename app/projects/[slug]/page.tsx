import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Github, Globe, Calendar, Users, Zap } from "lucide-react"
import { getProjectBySlug } from "@/lib/projects"

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug)

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
                      <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
          <Button asChild>
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  // Format project date to show year
  const formatProjectYear = (date: string | Date) => {
    const projectDate = new Date(date)
    return projectDate.getFullYear().toString()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>

          {/* Project Header */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge variant="secondary">{project.category}</Badge>
              <Badge variant="outline">{project.status}</Badge>
              <Badge variant="outline">{formatProjectYear(project.project_date)}</Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">{project.title}</h1>

            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">{project.description}</p>

            {/* Project Meta */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-slate-500 mr-2" />
                <div>
                  <div className="font-medium text-slate-900 dark:text-white">Duration</div>
                  <div className="text-slate-600 dark:text-slate-400">{project.duration}</div>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-slate-500 mr-2" />
                <div>
                  <div className="font-medium text-slate-900 dark:text-white">Team</div>
                  <div className="text-slate-600 dark:text-slate-400">{project.team}</div>
                </div>
              </div>
              <div className="flex items-center">
                <Zap className="h-5 w-5 text-slate-500 mr-2" />
                <div>
                  <div className="font-medium text-slate-900 dark:text-white">Role</div>
                  <div className="text-slate-600 dark:text-slate-400">{project.role}</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.github_url && (
                <Button asChild>
                  <Link href={project.github_url} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Link>
                </Button>
              )}
              {project.live_url && (
                <Button variant="outline" asChild>
                  <Link href={project.live_url} target="_blank" rel="noopener noreferrer">
                    <Globe className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
              )}
            </div>
          </div>

          {/* Project Image */}
          <div className="mb-12">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={800}
              height={400}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Project Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Overview</h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{project.long_description}</p>
              </section>

              {/* Key Features */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Key Features</h2>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-slate-900 dark:bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Challenges & Solutions */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Challenges & Solutions</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Challenges Faced</h3>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-slate-600 dark:text-slate-400">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Solutions Implemented</h3>
                    <ul className="space-y-2">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-slate-600 dark:text-slate-400">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Screenshots */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Screenshots</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.screenshots.map((screenshot, index) => (
                    <Image
                      key={index}
                      src={screenshot || "/placeholder.svg"}
                      alt={`${project.title} screenshot ${index + 1}`}
                      width={500}
                      height={300}
                      className="rounded-lg shadow-md"
                    />
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Tech Stack */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Tech Stack</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">Frontend</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech_stack.frontend.map((tech: string) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">Backend</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech_stack.backend.map((tech: string) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">Database</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech_stack.database.map((tech: string) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">Deployment</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech_stack.deployment.map((tech: string) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tags */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
