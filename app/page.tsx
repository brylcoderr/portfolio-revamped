import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  )
}

