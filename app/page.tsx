import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github, ExternalLink, Calendar, Clock } from "lucide-react"
import { getRecentProjects } from "@/lib/projects"

const recentInterests = [
  {
    id: 1,
    title: "Game Development & Interactive Media",
    excerpt: "Exploring Unity development, game design principles, and the intersection of technology with storytelling.",
    category: "Technical",
    type: "Creative Technology",
    href: "/interests/game-development",
  },
  {
    id: 2,
    title: "Cinema & Visual Storytelling",
    excerpt: "How film techniques and narrative structures influence my approach to software design and user experience.",
    category: "Social",
    type: "Arts & Culture",
    href: "/interests/cinema-storytelling",
  },
  {
    id: 3,
    title: "AI & Future Technologies",
    excerpt: "Investigating the practical applications of AI in creative processes and everyday problem-solving.",
    category: "Technical",
    type: "Emerging Tech",
    href: "/interests/ai-future-tech",
  },
]

export default async function HomePage() {
  const recentProjects = await getRecentProjects(3)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Image
                src="/ben.png"
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
                <Link href="/interests">
                  Explore Interests
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
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link
                      href={`/projects/${project.slug}`}
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

      {/* Featured Interests */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">My Interests</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  Technical passions and social interests that shape my perspective and work
                </p>
              </div>
              <Button asChild variant="outline">
                <Link href="/interests">
                  View All Interests
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentInterests.map((interest) => (
                <Card key={interest.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant={interest.category === "Technical" ? "default" : "secondary"} className="mb-3">
                        {interest.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {interest.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-3 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                      {interest.title}
                    </CardTitle>
                    <CardDescription className="mb-4">{interest.excerpt}</CardDescription>
                    <Link
                      href={interest.href}
                      className="inline-flex items-center text-slate-900 dark:text-white hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                    >
                      Explore Interest
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
