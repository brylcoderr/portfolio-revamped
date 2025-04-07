"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample skills data
const skillsData = {
  frontend: [
    { name: "React", level: 90, icon: "⚛️" },
    { name: "Next.js", level: 85, icon: "▲" },
    { name: "TypeScript", level: 80, icon: "TS" },
    { name: "Tailwind CSS", level: 95, icon: "🌊" },
    { name: "Framer Motion", level: 75, icon: "🔄" },
  ],
  backend: [
    { name: "Node.js", level: 85, icon: "🟢" },
    { name: "Express", level: 80, icon: "🚂" },
    { name: "MongoDB", level: 75, icon: "🍃" },
    { name: "GraphQL", level: 65, icon: "◼️" },
  ],
  other: [
    { name: "Git", level: 90, icon: "🔄" },
    { name: "Docker", level: 70, icon: "🐳" },
    { name: "AWS", level: 65, icon: "☁️" },
    { name: "UI/UX Design", level: 80, icon: "🎨" },
    { name: "Agile/Scrum", level: 85, icon: "🔄" },
  ],
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend")

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  }

  return (
    <section id="skills" className="py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've worked with a variety of technologies and tools. Here's a breakdown of my technical skills.
          </p>
        </motion.div>

        <Tabs defaultValue="frontend" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(skillsData).map(([category, skills]) => (
            <TabsContent key={category} value={category}>
              <motion.div
                variants={container}
                initial="hidden"
                animate={activeTab === category ? "show" : "hidden"}
                className="grid gap-6"
              >
                {skills.map((skill) => (
                  <motion.div key={skill.name} variants={item} className="group">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-muted mr-3 text-xl">
                        {skill.icon}
                      </div>
                      <h3 className="font-medium">{skill.name}</h3>
                      <span className="ml-auto text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

