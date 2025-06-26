import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github, ExternalLink, Calendar, Clock } from "lucide-react"

// Sample data - in a real app, this would come from a CMS or API
const recentProjects = [
  {
    id: 1,
    title: "AGMS - Graduation Management System",
    description: "Role-based web application for graduation workflows using Next.js, Spring Boot, and PostgreSQL.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Next.js", "Spring Boot", "PostgreSQL"],
    href: "/projects/agms",
  },
  {
    id: 2,
    title: "CAKS - AI Travel Discovery",
    description: "AI-powered travel discovery app with city-based content using Gemini AI and Supabase.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Next.js", "AI", "Supabase"],
    href: "/projects/caks",
  },
  {
    id: 3,
    title: "CHIP-8 Emulator",
    description: "Complete emulator built in C++ with SDL2, supporting 35+ opcodes and graphics rendering.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["C++", "SDL2", "Emulation"],
    href: "/projects/chip8-emulator",
  },
]

const recentPosts = [
  {
    id: 1,
    title: "Building a CHIP-8 Emulator: Understanding Computer Architecture",
    excerpt: "Deep dive into creating a CHIP-8 emulator from scratch using C++ and SDL2.",
    publishDate: "2024-12-15",
    readTime: "8 min read",
    category: "System Programming",
    href: "/blog/chip8-emulator-guide",
  },
  {
    id: 2,
    title: "From Unity Prototypes to Production: Game Development Insights",
    excerpt: "Lessons learned from leading 8+ game projects at Neutron Games.",
    publishDate: "2024-12-10",
    readTime: "12 min read",
    category: "Game Development",
    href: "/blog/unity-production-insights",
  },
  {
    id: 3,
    title: "AI-Powered Travel Discovery: Technical Deep Dive",
    excerpt: "How we built CAKS using Next.js, Gemini AI, and modern web technologies.",
    publishDate: "2024-12-05",
    readTime: "10 min read",
    category: "Web Development",
    href: "/blog/ai-travel-discovery",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Yiğit Sarıyar"
                width={150}
                height={150}
                className="mx-auto rounded-full mb-6 border-4 border-white dark:border-slate-700 shadow-lg"
              />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4">
                Yiğit Sarıyar
              </h1>
              <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-6">
                Software Engineer & Creative Technologist
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
                I create meaningful digital experiences by merging technical expertise with creative storytelling. From
                game development to AI-powered applications, I'm passionate about building solutions that inspire and
                solve real-world problems.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 text-white">
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/blog">
                  Read Blog
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">
                  About Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Recent Projects</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  Latest work spanning games, web applications, and system programming
                </p>
              </div>
              <Button asChild variant="outline">
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentProjects.map((project) => (
                <Card key={project.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <CardDescription className="mb-4">{project.description}</CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link
                      href={project.href}
                      className="inline-flex items-center text-slate-900 dark:text-white hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                    >
                      Learn More
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Latest Insights</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  Technical articles, tutorials, and thoughts on software development
                </p>
              </div>
              <Button asChild variant="outline">
                <Link href="/blog">
                  View All Posts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-all duration-300">
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
                    <Badge variant="secondary" className="mb-3">
                      {post.category}
                    </Badge>
                    <CardTitle className="text-xl mb-3 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="mb-4">{post.excerpt}</CardDescription>
                    <Link
                      href={post.href}
                      className="inline-flex items-center text-slate-900 dark:text-white hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              I'm always interested in new opportunities, collaborations, and interesting conversations about technology
              and creativity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="https://github.com/yigitsariyar" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  View GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
