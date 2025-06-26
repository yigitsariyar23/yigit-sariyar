import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Lightbulb, BookOpen, FileText, Video } from "lucide-react"
import { getInterestBySlug } from "@/lib/interests"
import { notFound } from "next/navigation"

export default async function InterestPage({ params }: { params: { slug: string } }) {
  const interest = await getInterestBySlug(params.slug)
  
  if (!interest) {
    notFound()
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress": return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
      case "Draft": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
      case "Planned": return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
      case "Research Phase": return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400"
      case "Outline Complete": return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
      case "Collecting Examples": return "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400"
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Tutorial Series":
      case "Technical Tutorial":
      case "Technical Guide": return <BookOpen className="h-4 w-4" />
      case "Video series": return <Video className="h-4 w-4" />
      case "Interactive tutorial":
      case "Interactive article": return <Lightbulb className="h-4 w-4" />
      default: return <FileText className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-6">
              <Link href="/interests">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Interests
              </Link>
            </Button>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant={interest.category === "Technical" ? "default" : "secondary"}>
                {interest.category}
              </Badge>
              <Badge variant="outline">{interest.type}</Badge>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              {interest.title}
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
              {interest.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {interest.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none">
            {interest.content ? (
              <div className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                {interest.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : (
              <div className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                <p className="mb-6">
                  This is an area of deep personal and professional interest that continues to shape my approach to technology and problem-solving.
                </p>
                <p className="mb-6">
                  I&apos;m constantly exploring new developments in this field and how they can be applied to create better digital experiences and solutions.
                </p>
                <p className="mb-6">
                  Stay tuned for more detailed content about this interest as I continue to develop and share my insights.
                </p>
              </div>
            )}
          </div>

          {/* Call to Action */}
          <div className="mt-12 p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Interested in this topic?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              I&apos;d love to hear your thoughts or discuss this interest further.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/interests">Explore More Interests</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 