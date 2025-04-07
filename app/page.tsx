import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import ThemeSwitcher from "@/components/theme-switcher"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ThemeSwitcher className="fixed bottom-6 right-6 z-50" />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  )
}

