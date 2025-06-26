"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, MapPin, Phone, Send, MessageCircle, Calendar } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)

    // In a real app, you'd handle the form submission here
    alert("Message sent successfully! I'll get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">Let's Connect</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              I'm always interested in new opportunities, collaborations, and interesting conversations about
              technology, creativity, and innovation. Feel free to reach out!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="bg-white dark:bg-slate-900">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Send a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                        >
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                        >
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project, idea, or just say hello..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <Card className="bg-white dark:bg-slate-900">
                <CardHeader>
                  <CardTitle>Get In Touch Directly</CardTitle>
                  <CardDescription>Prefer direct communication? Here are the best ways to reach me.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link
                    href="mailto:yigitsariyar23@gmail.com"
                    className="flex items-center p-4 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
                  >
                    <Mail className="h-6 w-6 text-slate-600 dark:text-slate-400 mr-4 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
                    <div>
                      <div className="font-medium text-slate-900 dark:text-white">Email</div>
                      <div className="text-slate-600 dark:text-slate-400">yigitsariyar23@gmail.com</div>
                    </div>
                  </Link>

                  <div className="flex items-center p-4 rounded-lg bg-slate-50 dark:bg-slate-800">
                    <Phone className="h-6 w-6 text-slate-600 dark:text-slate-400 mr-4" />
                    <div>
                      <div className="font-medium text-slate-900 dark:text-white">Phone</div>
                      <div className="text-slate-600 dark:text-slate-400">+90 (551) 712 4844</div>
                    </div>
                  </div>

                  <div className="flex items-center p-4 rounded-lg bg-slate-50 dark:bg-slate-800">
                    <MapPin className="h-6 w-6 text-slate-600 dark:text-slate-400 mr-4" />
                    <div>
                      <div className="font-medium text-slate-900 dark:text-white">Location</div>
                      <div className="text-slate-600 dark:text-slate-400">İzmir, Türkiye</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-white dark:bg-slate-900">
                <CardHeader>
                  <CardTitle>Connect on Social</CardTitle>
                  <CardDescription>Follow my work and connect with me on these platforms.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link
                    href="https://linkedin.com/in/yigitsariyar"
                    target="_blank"
                    className="flex items-center p-4 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
                  >
                    <Linkedin className="h-6 w-6 text-slate-600 dark:text-slate-400 mr-4 group-hover:text-blue-600 transition-colors" />
                    <div>
                      <div className="font-medium text-slate-900 dark:text-white">LinkedIn</div>
                      <div className="text-slate-600 dark:text-slate-400">Professional networking</div>
                    </div>
                  </Link>

                  <Link
                    href="https://github.com/yigitsariyar"
                    target="_blank"
                    className="flex items-center p-4 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
                  >
                    <Github className="h-6 w-6 text-slate-600 dark:text-slate-400 mr-4 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
                    <div>
                      <div className="font-medium text-slate-900 dark:text-white">GitHub</div>
                      <div className="text-slate-600 dark:text-slate-400">Code repositories and projects</div>
                    </div>
                  </Link>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-700">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-800 dark:text-green-200">
                    <Calendar className="mr-2 h-5 w-5" />
                    Current Availability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-green-700 dark:text-green-300">Status</span>
                      <Badge className="bg-green-600 hover:bg-green-700 text-white">Open to Opportunities</Badge>
                    </div>
                    <div className="text-sm text-green-600 dark:text-green-400">
                      <p className="mb-2">I'm currently available for:</p>
                      <ul className="space-y-1">
                        <li>• Full-time software development roles</li>
                        <li>• Freelance web development projects</li>
                        <li>• Game development collaborations</li>
                        <li>• Technical consulting and mentoring</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="bg-white dark:bg-slate-900">
                <CardHeader>
                  <CardTitle>Response Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Email</span>
                      <Badge variant="outline">Within 24 hours</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600 dark:text-slate-400">LinkedIn</span>
                      <Badge variant="outline">Within 48 hours</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Contact Form</span>
                      <Badge variant="outline">Within 24 hours</Badge>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
                    I typically respond faster during weekdays (Monday-Friday, 9 AM - 6 PM Turkey Time).
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
