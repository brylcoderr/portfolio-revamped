"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

// Sample project data
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.",
    image: "/project-3.png?height=400&width=600",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://e-commerce-platform-nfcyhkol1-brylcoderrs-projects.vercel.app/",
    githubUrl: "https://github.com/brylcoderr/e-commerce-platform",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team workspaces.",
    image: "/project-1.png?height=400&width=600",
    tags: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://ai-task-manager-xi.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Inside Dash",
    description: "Insight Dash is a modern web application. It leverages a variety of powerful libraries to enhance UI/UX, state management, form handling, and data visualization.",
    image: "/project-4.png?height=400&width=600",
    tags: ["React", "Sonner", "Express", "Recharts"],
    liveUrl: "https://insight-dash-jade.vercel.app/",
    githubUrl: "https://github.com/brylcoderr/Insight-Dash",
  },
  {
    id: 4,
    title: "Real Time Dash Board",
    description: "A modern, high-performance real-time analytics dashboard. This project provides real-time insights with beautiful data visualizations and a responsive UI.",
    image: "/project-2.png?height=400&width=600",
    tags: ["React", "Vite", "TailwindCSS", "CoinGeko API"],
    liveUrl: "https://real-time-dash-board.vercel.app/",
    githubUrl: "https://github.com/brylcoderr/Real-Time-Dash-Board",
  },
]

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each one is built with care and attention to detail.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projectsData.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Card
                className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="relative overflow-hidden h-48">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    animate={{
                      scale: activeProject === project.id ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

