"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X, Download, Github, Linkedin, Instagram, Youtube } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  
  useEffect(() => {
    setMounted(true)
    
    // Update default color theme to purple if not already set
    if (!localStorage.getItem("colorTheme")) {
      localStorage.setItem("colorTheme", "purple")
    }
    
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ]

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, url: "https://github.com/brylcoderr", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, url: "https://linkedin.com/in/brylcoder", label: "LinkedIn" },
    // { icon: <Instagram className="h-5 w-5" />, url: "https://instagram.com/brylcoder", label: "Instagram" },
    // { icon: <Youtube className="h-5 w-5" />, url: "https://youtube.com/brylcoder", label: "YouTube" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full overflow-hidden">
                <img src="/logo.gif?height=100&width=100" alt="Logo" className="h-full w-full object-cover" />
              </div>
              <span className="font-bold text-lg">Shubham</span>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <div className="flex space-x-2">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(mounted && theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
              >
                {mounted ? (
                  theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />
                ) : (
                  <span className="h-4 w-4" />
                )}
              </Button>

              <Button asChild size="sm" className="gap-1">
                <a href="/resume.pdf" download>
                  <Download className="h-4 w-4" />
                  <span>Resume</span>
                </a>
              </Button>
            </div>

            <button
              className="md:hidden flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background md:hidden pt-16"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col p-6 h-full">
              <nav className="flex flex-col gap-4 mb-8">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-lg font-medium py-2 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>

              <div className="mt-auto">
                <div className="flex justify-center space-x-4 mb-6">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={link.label}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>

                <div className="flex justify-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setTheme(mounted && theme === "dark" ? "light" : "dark")}
                    aria-label="Toggle theme"
                  >
                    {mounted ? (
                      theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />
                    ) : (
                      <span className="h-4 w-4" />
                    )}
                  </Button>

                  <Button asChild size="sm" className="gap-1">
                    <a href="/resume.pdf" download>
                      <Download className="h-4 w-4" />
                      <span>Resume</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 