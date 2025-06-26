import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Interest Not Found</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            The interest you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild>
            <Link href="/interests">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Interests
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 