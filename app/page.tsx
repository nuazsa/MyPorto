"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Portfolio } from "@/components/Portfolio"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer";
import { DetailSidebar } from "@/components/DetailSidebar"
import { TooltipProvider } from "@/components/ui/tooltip"

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("home")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<any>(null)

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const openSidebar = (item: any) => {
    setSelectedItem(item)
    setSidebarOpen(true)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
    setTimeout(() => setSelectedItem(null), 300)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "portfolio", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gray-950 text-white relative overflow-x-hidden">
        {/* Grid Background */}
        <div className="fixed inset-0 opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)] bg-[size:60px_60px]" />
        </div>

        {/* Navigation */}
        <Navbar 
          activeSection={activeSection} 
          scrollToSection={scrollToSection} 
        />

        <main>
          <Hero scrollToSection={scrollToSection} />
          <Portfolio onItemClick={openSidebar} />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Sidebar Panel */}
        <DetailSidebar
          isOpen={sidebarOpen}
          onClose={closeSidebar}
          item={selectedItem}
        />

        {/* Sidebar Overlay */}
        {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={closeSidebar} />}
      </div>
    </TooltipProvider>
  )
}