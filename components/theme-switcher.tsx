"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Palette } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type Theme = "light" | "dark" | "system" | "purple" | "blue" | "green"

interface ThemeSwitcherProps {
  className?: string
}

export default function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const [theme, setTheme] = useState<Theme>("system")
  const [colorTheme, setColorTheme] = useState<"default" | "purple" | "blue" | "green">("default")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme") as Theme
    const savedColorTheme = localStorage.getItem("colorTheme") as "default" | "purple" | "blue" | "green"

    if (savedTheme) {
      setTheme(savedTheme)
    }

    if (savedColorTheme) {
      setColorTheme(savedColorTheme)
    }

    applyTheme(savedTheme || "system", savedColorTheme || "default")
  }, [])

  const applyTheme = (newTheme: Theme, newColorTheme: "default" | "purple" | "blue" | "green") => {
    const root = document.documentElement
    const isDark =
      newTheme === "dark" || (newTheme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)

    // Remove all theme classes
    root.classList.remove("dark", "theme-purple", "theme-blue", "theme-green")

    // Apply dark mode if needed
    if (isDark) {
      root.classList.add("dark")
    }

    // Apply color theme
    if (newColorTheme !== "default") {
      root.classList.add(`theme-${newColorTheme}`)
    }

    localStorage.setItem("theme", newTheme)
    localStorage.setItem("colorTheme", newColorTheme)
  }

  const setNewTheme = (newTheme: Theme) => {
    setTheme(newTheme)
    applyTheme(newTheme, colorTheme)
  }

  const setNewColorTheme = (newColorTheme: "default" | "purple" | "blue" | "green") => {
    setColorTheme(newColorTheme)
    applyTheme(theme, newColorTheme)
  }

  if (!mounted) return null

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-12 w-12 bg-background/80 backdrop-blur-sm border-2"
          >
            {theme === "light" && colorTheme === "default" && <Sun className="h-5 w-5" />}
            {theme === "dark" && colorTheme === "default" && <Moon className="h-5 w-5" />}
            {colorTheme !== "default" && <Palette className="h-5 w-5" />}
            {theme === "system" && colorTheme === "default" && <Palette className="h-5 w-5" />}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setNewTheme("light")}>
            <Sun className="mr-2 h-4 w-4" />
            <span>Light</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setNewTheme("dark")}>
            <Moon className="mr-2 h-4 w-4" />
            <span>Dark</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setNewTheme("system")}>
            <Palette className="mr-2 h-4 w-4" />
            <span>System</span>
          </DropdownMenuItem>

          <div className="h-px bg-border my-2" />

          <DropdownMenuItem onClick={() => setNewColorTheme("default")}>
            <div className="mr-2 h-4 w-4 rounded-full bg-primary border border-input" />
            <span>Default</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setNewColorTheme("purple")}>
            <div className="mr-2 h-4 w-4 rounded-full bg-purple-500" />
            <span>Purple</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setNewColorTheme("blue")}>
            <div className="mr-2 h-4 w-4 rounded-full bg-blue-500" />
            <span>Blue</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setNewColorTheme("green")}>
            <div className="mr-2 h-4 w-4 rounded-full bg-green-500" />
            <span>Green</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.div>
  )
}

