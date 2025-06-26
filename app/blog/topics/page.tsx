import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Code, Gamepad2, Cpu, BookOpen, Film } from "lucide-react"

const topics = [
  {
    id: 1,
    title: "Game Development",
    slug: "game-development",
    description:
      "Unity development, game design principles, prototyping strategies, and insights from leading 8+ game projects.",
    icon: Gamepad2,
    postCount: 12,
    color: "bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400",
    tags: ["Unity", "C#", "Game Design", "Prototyping"],
  },
  {
    id: 2,
    title: "Computer Graphics",
    slug: "computer-graphics",
    description: "OpenGL programming, GLSL shaders, rendering techniques, and visual effects implementation.",
    icon: Cpu,
    postCount: 8,
    color: "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
    tags: ["OpenGL", "GLSL", "Rendering", "Shaders"],
  },
  {
    id: 3,
    title: "Technical Narrative Design",
    slug: "technical-narrative-design",
    description:
      "Merging storytelling with technology, interactive narratives, and creating meaningful user experiences.",
    icon: BookOpen,
    postCount: 6,
    color: "bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400",
    tags: ["Storytelling", "UX", "Interactive Design", "Narrative"],
  },
  {
    id: 4,
    title: "AI & Tools",
    slug: "ai-tools",
    description:
      "AI integration in applications, tool development, automation, and leveraging AI for creative processes.",
    icon: Code,
    postCount: 10,
    color: "bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400",
    tags: ["AI Integration", "Automation", "Tools", "Machine Learning"],
  },
  {
    id: 5,
    title: "Books & Literature",
    slug: "books-literature",
    description:
      "Book reviews, literary analysis, and how literature influences my approach to technology and creativity.",
    icon: BookOpen,
    postCount: 15,
    color: "bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400",
    tags: ["Book Reviews", "Literature", "Analysis", "Creativity"],
  },
  {
    id: 6,
    title: "Cinema & Storytelling",
    slug: "cinema-storytelling",
    description: "Film analysis, cinematography techniques, and how visual storytelling informs my technical work.",
    icon: Film,
    postCount: 9,
    color: "bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400",
    tags: ["Film Analysis", "Cinematography", "Visual Storytelling", "Media"],
  },
]

export default function TopicsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">Topics & Interests</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Explore my areas of expertise and passion. Each topic represents a collection of articles, insights, and
              deep dives into subjects that drive my work and creativity.
            </p>
          </div>

          {/* Topics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => {
              const IconComponent = topic.icon
              return (
                <Card
                  key={topic.id}
                  className="group hover:shadow-lg transition-all duration-300 bg-white dark:bg-slate-900"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg ${topic.color}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {topic.postCount} articles
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                      {topic.title}
                    </CardTitle>
                    <CardDescription className="text-base">{topic.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {topic.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link
                      href={`/blog/topics/${topic.slug}`}
                      className="inline-flex items-center text-slate-900 dark:text-white hover:text-slate-600 dark:hover:text-slate-300 transition-colors font-medium"
                    >
                      Explore Topic
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Featured Topics */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">Currently Exploring</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Gamepad2 className="h-6 w-6 text-purple-600 dark:text-purple-400 mr-3" />
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      Game Development Deep Dives
                    </h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Currently writing a comprehensive series on Unity development, covering everything from basic
                    prototyping to advanced optimization techniques.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/blog/topics/game-development">
                      Read Series
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Code className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">AI Integration Tutorials</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Exploring practical AI implementations in web applications, from simple integrations to complex
                    AI-powered features.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/blog/topics/ai-tools">
                      Explore AI Content
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
