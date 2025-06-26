import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Github, Globe, Calendar, Users, Zap } from "lucide-react"

// This would typically come from a CMS or database
const getProject = (slug: string) => {
  const projects = {
    agms: {
      title: "AGMS - Automated Graduation Management System",
      category: "Web Application",
      description:
        "A comprehensive role-based web application designed to streamline graduation workflows for educational institutions.",
      longDescription:
        "AGMS is a full-stack web application that automates and manages the complex graduation process for universities. The system handles multiple user roles including students, advisors, department heads, and administrators, each with specific permissions and workflows. Built with modern technologies and deployed on cloud infrastructure for scalability and reliability.",
      image: "/placeholder.svg?height=400&width=800",
      tags: ["Next.js", "Spring Boot", "PostgreSQL", "JWT", "Azure", "Vercel", "TypeScript", "Java"],
      status: "Completed",
      year: "2024",
      duration: "4 months",
      team: "3 developers",
      role: "Full-Stack Developer & Project Lead",
      challenges: [
        "Complex role-based permission system with multiple user types",
        "Real-time notifications and status updates across the system",
        "Integration with existing university database systems",
        "Scalable architecture to handle thousands of concurrent users",
      ],
      solutions: [
        "Implemented JWT-based authentication with role-based access control",
        "Used WebSocket connections for real-time updates and notifications",
        "Created API adapters for seamless integration with legacy systems",
        "Deployed on Azure with auto-scaling capabilities and Vercel for frontend",
      ],
      techStack: {
        frontend: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI"],
        backend: ["Spring Boot", "Java", "JWT Authentication", "RESTful APIs"],
        database: ["PostgreSQL", "Redis for caching"],
        deployment: ["Azure App Service", "Vercel", "Docker"],
      },
      features: [
        "Multi-role user management system",
        "Automated workflow processing",
        "Real-time notifications",
        "Document management and approval",
        "Analytics and reporting dashboard",
        "Mobile-responsive design",
      ],
      screenshots: [
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
      ],
    },
  }

  return projects[slug as keyof typeof projects] || null
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Project Not Found</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">The project you're looking for doesn't exist.</p>
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
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
              <Badge variant="outline">{project.year}</Badge>
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
              <Button>
                <Github className="mr-2 h-4 w-4" />
                View Code
              </Button>
              <Button variant="outline">
                <Globe className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
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
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{project.longDescription}</p>
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
                        {project.techStack.frontend.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">Backend</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.backend.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">Database</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.database.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">Deployment</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.deployment.map((tech) => (
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
