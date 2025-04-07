"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

interface CalendlyEmbedProps {
  onClose: () => void
}

export default function CalendlyEmbed({ onClose }: CalendlyEmbedProps) {
  const [loaded, setLoaded] = useState(false)

  // Replace this with your actual Calendly URL
  const calendlyUrl = "https://calendly.com/brylcoder"

  useEffect(() => {
    // Add Calendly script if it doesn't exist
    if (!document.getElementById("calendly-script")) {
      const script = document.createElement("script")
      script.id = "calendly-script"
      script.src = "https://assets.calendly.com/assets/external/widget.js"
      script.async = true
      document.body.appendChild(script)

      script.onload = () => setLoaded(true)
    } else {
      setLoaded(true)
    }

    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-card rounded-lg shadow-lg w-full max-w-4xl h-[80vh] relative flex flex-col"
        >
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="text-xl font-semibold">Schedule a Meeting</h3>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex-1 overflow-hidden">
            {loaded ? (
              <div
                className="calendly-inline-widget w-full h-full"
                data-url={`${calendlyUrl}?hide_event_type_details=1&hide_gdpr_banner=1&background_color=ffffff&text_color=333333&primary_color=0000ff`}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

