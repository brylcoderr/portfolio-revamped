"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background/80" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-6 inline-block"
        >
          <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary">
            <img src="/logo.gif?height=200&width=200" alt="Profile" className="object-cover w-full h-full" />
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <span className="text-primary">Hello, I'm </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Shubham</span>
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl mb-6 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Full Stack Developer & UI/UX Enthusiast
        </motion.h2>

        <motion.p
          className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          I build exceptional digital experiences that are fast, accessible, and visually appealing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Button size="lg" onClick={scrollToProjects} className="rounded-full px-8">
            View My Work
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </motion.div>
    </section>
  )
}

