"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Sample experience data
const experienceData = [
  {
    id: 1,
    role: "Software Developer",
    company: "National Informatics Centre",
    period: "2023 - Present",
    description:
      "Lead the frontend development team in building modern web applications using React and Next.js. Implemented CI/CD pipelines and improved performance by 40%.",
    skills: ["React", "Next.js", "TypeScript", "CI/CD"],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Ensaar Global Private Ltd.",
    period: "2021 - 2023",
    description:
      "Developed and maintained multiple web applications. Worked on both frontend and backend technologies. Collaborated with design and product teams to deliver high-quality software.",
    skills: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    id: 3,
    role: "Web Developer",
    company: "Round Pay",
    period: "2019 - 2020",
    description:
      "Started as a junior developer working on client websites. Gained experience in responsive design and frontend development.",
    skills: ["HTML/CSS", "JavaScript", "WordPress", "Responsive Design"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 md:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the companies I've had the pleasure to work with.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -ml-0.5 md:-ml-0.5 hidden md:block" />

          {experienceData.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 md:mb-24 ${
                index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0 md:mr-auto" : "md:pl-12 md:ml-auto md:mr-0"
              } md:w-1/2`}
            >
              {/* Timeline dot */}
              <div
                className="hidden md:block absolute w-4 h-4 rounded-full bg-primary border-4 border-background top-6 
                              left-0 md:left-auto md:right-0 md:-ml-2 md:-mr-2 
                              md:translate-x-0 md:translate-y-0
                              md:top-6
                              md:left-auto md:right-auto
                              md:left-[calc(100%+0.125rem)] md:right-[calc(100%+0.125rem)]
                              ${index % 2 === 0 ? 'md:left-auto md:right-0 md:-mr-2' : 'md:left-0 md:right-auto md:-ml-2'}"
              />

              <Card className={`relative ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <CardHeader>
                  <CardTitle>{experience.role}</CardTitle>
                  <CardDescription>
                    {experience.company} | {experience.period}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{experience.description}</p>
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                    {experience.skills.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

