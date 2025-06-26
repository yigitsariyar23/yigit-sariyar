import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Gamepad2, Phone, Globe, MessageCircle } from "lucide-react"
import { getDirectContactInfo, getSocialContactInfo } from "@/lib/contact"
import PageTransition from "@/components/page-transition"

// Icon mapping for dynamic icon rendering
const iconMap = {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Gamepad2,
  Phone,
  Globe,
  MessageCircle,
} as const

export default async function ContactPage() {
  const [directContacts, socialContacts] = await Promise.all([
    getDirectContactInfo(),
    getSocialContactInfo(),
  ])

  return (
    <PageTransition className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Let&apos;s Connect</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I&apos;m always interested in new opportunities, collaborations, and interesting conversations about
              technology, creativity, and innovation. Feel free to reach out!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Contact Information */}
              {/* Direct Contact */}
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle>Get In Touch Directly</CardTitle>
                  <CardDescription>Prefer direct communication? Here are the best ways to reach me.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {directContacts.map((contact) => {
                    const IconComponent = iconMap[contact.icon as keyof typeof iconMap] || Mail
                    const isClickable = contact.url && contact.type !== 'location'
                    
                    const ContactContent = (
                      <>
                        <IconComponent className="h-6 w-6 text-slate-600 dark:text-slate-400 mr-4 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
                        <div>
                          <div className="font-medium text-slate-900 dark:text-white">{contact.label}</div>
                          <div className="text-slate-600 dark:text-slate-400">{contact.description || contact.value}</div>
                        </div>
                      </>
                    )

                    return isClickable && contact.url ? (
                      <Link
                        key={contact.id}
                        href={contact.url}
                        className="flex items-center p-4 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
                      >
                        {ContactContent}
                      </Link>
                    ) : (
                      <div
                        key={contact.id}
                        className="flex items-center p-4 rounded-lg bg-slate-50 dark:bg-slate-800"
                      >
                        {ContactContent}
                      </div>
                    )
                  })}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle>Connect on Social</CardTitle>
                  <CardDescription>Follow my work and connect with me on these platforms.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialContacts.map((contact) => {
                    const IconComponent = iconMap[contact.icon as keyof typeof iconMap] || Globe
                    const hoverColor = contact.icon === 'Linkedin' 
                      ? 'group-hover:text-blue-600' 
                      : contact.icon === 'Gamepad2' 
                      ? 'group-hover:text-red-600'
                      : 'group-hover:text-slate-900 dark:group-hover:text-white'

                    return contact.url ? (
                      <Link
                        key={contact.id}
                        href={contact.url}
                        target="_blank"
                        className="flex items-center p-4 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
                      >
                        <IconComponent className={`h-6 w-6 text-slate-600 dark:text-slate-400 mr-4 ${hoverColor} transition-colors`} />
                        <div>
                          <div className="font-medium text-slate-900 dark:text-white">{contact.label}</div>
                          <div className="text-slate-600 dark:text-slate-400">{contact.description}</div>
                        </div>
                      </Link>
                    ) : (
                      <div
                        key={contact.id}
                        className="flex items-center p-4 rounded-lg bg-slate-50 dark:bg-slate-800"
                      >
                        <IconComponent className="h-6 w-6 text-slate-600 dark:text-slate-400 mr-4" />
                        <div>
                          <div className="font-medium text-slate-900 dark:text-white">{contact.label}</div>
                          <div className="text-slate-600 dark:text-slate-400">{contact.description}</div>
                        </div>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>
            </div>
        </div>
      </div>
    </PageTransition>
  )
}
