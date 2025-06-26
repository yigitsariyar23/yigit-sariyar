import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
                      <h1 className="text-4xl font-bold text-foreground mb-4">Interest Not Found</h1>
            <p className="text-lg text-muted-foreground mb-8">
            The interest you&apos;re looking for doesn&apos;t exist or has been moved.
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