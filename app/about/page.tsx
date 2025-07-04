import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, GraduationCap, Briefcase, Users, Award } from "lucide-react"
import { getSkills } from "@/lib/skills"
import { getTimelineEntries } from "@/lib/timeline"
import PageTransition from "@/components/page-transition"

export default async function AboutPage() {
  const [skills, timeline] = await Promise.all([
    getSkills(),
    getTimelineEntries(),
  ])
  return (
    <PageTransition className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Image
              src="/ben.png"
              alt="Yiğit Sarıyar"
              width={200}
              height={200}
              className="mx-auto rounded-full mb-8 border-4 border-white dark:border-slate-700 shadow-lg"
            />
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">About Me</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A journey through code, creativity, and community building
            </p>
          </div>

          {/* Personal Philosophy */}
          <section className="mb-16">
            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">My Philosophy</h2>
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <p className="text-lg leading-relaxed mb-4">
                    I believe that the most impactful technology emerges when technical expertise meets creative
                    storytelling. My journey as a software engineer has been driven by a simple yet powerful conviction:
                    code is not just about solving problems—it&apos;s about creating experiences that resonate with people on
                    a deeper level.
                  </p>
                  <p className="text-lg leading-relaxed mb-4">
                    Whether I&apos;m developing a game that teaches complex concepts through play, building AI-powered
                    applications that simplify daily tasks, or leading community initiatives that bring developers
                    together, I approach each project with the same question: "How can this create meaningful value for
                    the people who will use it?"
                  </p>
                  <p className="text-lg leading-relaxed">
                    This philosophy has shaped my work across diverse domains—from the technical challenges of system
                    programming to the creative demands of game development, and from the collaborative nature of
                    community leadership to the innovative potential of AI integration.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Timeline */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">My Journey</h2>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  {/* Timeline line */}
                  {index !== timeline.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-16 bg-slate-200 dark:bg-slate-700" />
                  )}

                  <div className="flex items-start space-x-4">
                    {/* Timeline dot */}
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                        item.type === "work"
                          ? "bg-blue-100 dark:bg-blue-900/20"
                          : item.type === "education"
                            ? "bg-green-100 dark:bg-green-900/20"
                            : "bg-purple-100 dark:bg-purple-900/20"
                      }`}
                    >
                      {item.type === "work" && <Briefcase className="h-5 w-5 text-blue-600 dark:text-blue-400" />}
                      {item.type === "education" && (
                        <GraduationCap className="h-5 w-5 text-green-600 dark:text-green-400" />
                      )}
                      {item.type === "leadership" && <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />}
                    </div>

                    {/* Content */}
                    <Card className="flex-1 bg-white dark:bg-slate-900">
                      <CardContent className="p-6">
                        <div className="flex flex-wrap items-center gap-4 mb-3">
                          <Badge variant="outline" className="text-sm font-medium">
                            {item.year}
                          </Badge>
                          <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                            <MapPin className="h-4 w-4 mr-1" />
                            {item.location}
                          </div>
                        </div>

                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>

                        <p className="text-slate-600 dark:text-slate-400 mb-4">{item.description}</p>

                        {item.technologies && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {item.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        )}

                        {item.achievements && (
                          <div className="space-y-2">
                            <h4 className="font-medium text-slate-900 dark:text-white">Key Achievements:</h4>
                            <ul className="space-y-1">
                              {item.achievements.map((achievement, i) => (
                                <li key={i} className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                                  <Award className="h-4 w-4 mr-2 mt-0.5 text-yellow-500 flex-shrink-0" />
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {item.status && (
                          <div className="mt-4">
                            <Badge variant="outline" className="text-xs">
                              {item.status}
                            </Badge>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills & Expertise */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill) => (
                <Card key={skill.id} className="bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-card-foreground">{skill.name}</h3>
                      <Badge className={skill.color}>{skill.level}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>



          {/* Languages */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Languages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white dark:bg-slate-900">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Turkish</h3>
                  <Badge className="bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400">
                    Native Language
                  </Badge>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-slate-900">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">English</h3>
                  <Badge className="bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                    Professional Working Proficiency
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Fun Facts */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Fun Facts</h2>
            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border-slate-200 dark:border-slate-700">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Quick Stats</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="font-medium text-slate-900 dark:text-white mr-2">8+</span>
                        <span className="text-slate-600 dark:text-slate-400">Game prototypes developed</span>
                      </li>
                      <li className="flex items-center">
                        <span className="font-medium text-slate-900 dark:text-white mr-2">15+</span>
                        <span className="text-slate-600 dark:text-slate-400">Events organized as VP</span>
                      </li>
                      <li className="flex items-center">
                        <span className="font-medium text-slate-900 dark:text-white mr-2">200+</span>
                        <span className="text-slate-600 dark:text-slate-400">Community members managed</span>
                      </li>
                      <li className="flex items-center">
                        <span className="font-medium text-slate-900 dark:text-white mr-2">3+</span>
                        <span className="text-slate-600 dark:text-slate-400">Years of leadership experience</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Current Goals</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-slate-900 dark:bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-400">
                          Master advanced computer graphics techniques
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-slate-900 dark:bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-400">Publish a complete indie game</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-slate-900 dark:bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-400">Contribute to open-source AI tools</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-slate-900 dark:bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-400">
                          Expand the software society to 300+ members
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </PageTransition>
  )
}
