"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Interests", href: "/interests" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
          <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
                      <Link href="/" className="text-xl font-bold text-foreground">
            Yiğit Sarıyar
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors ${
                  isActive(item.href)
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {mounted && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="relative overflow-hidden hover:bg-accent/10 transition-all duration-300"
              >
                <Sun className={`h-4 w-4 absolute transition-all duration-500 ${
                  theme === "dark" 
                    ? "rotate-0 scale-100 opacity-100" 
                    : "rotate-90 scale-0 opacity-0"
                }`} />
                <Moon className={`h-4 w-4 absolute transition-all duration-500 ${
                  theme === "dark" 
                    ? "-rotate-90 scale-0 opacity-0" 
                    : "rotate-0 scale-100 opacity-100"
                }`} />
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {mounted && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="relative overflow-hidden hover:bg-accent/10 transition-all duration-300"
              >
                <Sun className={`h-4 w-4 absolute transition-all duration-500 ${
                  theme === "dark" 
                    ? "rotate-0 scale-100 opacity-100" 
                    : "rotate-90 scale-0 opacity-0"
                }`} />
                <Moon className={`h-4 w-4 absolute transition-all duration-500 ${
                  theme === "dark" 
                    ? "-rotate-90 scale-0 opacity-0" 
                    : "rotate-0 scale-100 opacity-100"
                }`} />
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors ${
                    isActive(item.href)
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
