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
    title: "Tech Landing Page",
    description: "A modern, responsive landing page built with Next.js, React 19, Tailwind CSS, and Radix UI components. Designed for speed, accessibility, and developer-friendly structure.",
    image: "/project-5.png?height=400&width=600",
    tags: ["React", "Next", "TailwindCSS", "Shadcn"],
    liveUrl: "https://tech-landing-page-ruby.vercel.app/",
    githubUrl: "https://github.com/brylcoderr/tech-landing-page",
  },
  {
    id: 3,
    title: "Portfolio Builder",
    description: "A modern, full-stack portfolio builder web application built with React, Vite, Firebase, TailwindCSS, and Stripe integration. Perfect for developers or creatives who want to build, manage, and host personal portfolios with ease.",
    image: "/project-8.png?height=400&width=600",
    tags: ["React", "Vite", "Firebase", "TailwindCSS"],
    liveUrl: "https://portfolio-builder-git-main-brylcoderrs-projects.vercel.app/",
    githubUrl: "https://github.com/brylcoderr/portfolio-builder",
  },
  {
    id: 4,
    title: "E-commerce Dashboard",
    description: "A modern, responsive eCommerce admin dashboard built using Next.js 15, Tailwind CSS, Radix UI, and Recharts. This dashboard provides store performance insights such as sales, active users, orders, and conversion rates.",
    image: "/project-7.png?height=400&width=600",
    tags: ["Nextjs", "TailwindCSS", "Recharts","NextAuth.js"],
    liveUrl: "https://bryl-ecommerce-dashboard.vercel.app//",
    githubUrl: "https://github.com/brylcoderr/ecommerce-dashboard",
  },
  {
    id: 5,
    title: "Inside Dash",
    description: "Insight Dash is a modern web application. It leverages a variety of powerful libraries to enhance UI/UX, state management, form handling, and data visualization.",
    image: "/project-4.png?height=400&width=600",
    tags: ["React", "Sonner", "Express", "Recharts"],
    liveUrl: "https://insight-dash-jade.vercel.app/",
    githubUrl: "https://github.com/brylcoderr/Insight-Dash",
  },
  {
    id: 6,
    title: "Real Time Dash Board",
    description: "A modern, high-performance real-time analytics dashboard. This project provides real-time insights with beautiful data visualizations and a responsive UI.",
    image: "/project-2.png?height=400&width=600",
    tags: ["React", "Vite", "TailwindCSS", "CoinGeko API"],
    liveUrl: "https://real-time-dash-board.vercel.app/",
    githubUrl: "https://github.com/brylcoderr/Real-Time-Dash-Board",
  },
  {
    id: 7,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team workspaces.",
    image: "/project-1.png?height=400&width=600",
    tags: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://ai-task-manager-xi.vercel.app/",
    githubUrl: "#",
  },{
    id: 8,
    title: "Coin Collector",
    description: "Coin Collector is a fun and interactive 2D game built using Next.js, React, and styled with Tailwind CSS. Navigate your character, avoid obstacles, and collect coins to boost your score and level up!",
    image: "/project-6.png?height=400&width=600",
    tags: ["React", "Next.js", "TailwindCSS", "Typescript"],
    liveUrl: "https://2d-game-nextjs.vercel.app/",
    githubUrl: "https://github.com/brylcoderr/2d-game-nextjs",
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
    <section id="projects" className="py-20 px-4 md:px-8 bg-muted/30 w-full">
      <div className="w-full max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each one is built with care and attention to detail.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projectsData.map((project) => (
            <motion.div key={project.id} variants={item}>
              <motion.div
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 },
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
                }}
                className="h-full"
              >
                <Card
                  className="overflow-hidden h-full flex flex-col border-2 hover:border-primary/50 transition-colors duration-300"
                  onMouseEnter={() => setActiveProject(project.id)}
                  onMouseLeave={() => setActiveProject(null)}
                >
                  <div className="relative overflow-hidden h-40">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>

                  <CardHeader className="py-3">
                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                    </motion.div>
                    <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="py-2 flex-grow">
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag, index) => (
                        <motion.div
                          key={tag}
                          initial={{ opacity: 1 }}
                          whileHover={{ 
                            scale: 1.05,
                            backgroundColor: "var(--primary)",
                            color: "var(--primary-foreground)"
                          }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                        >
                          <Badge variant="secondary" className="text-xs transition-colors">
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="flex justify-between pt-2 pb-3">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-1 h-3 w-3" />
                          Code
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-1 h-3 w-3" />
                          Live Demo
                        </a>
                      </Button>
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

