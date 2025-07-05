"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { projects, certificates, techStack } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  Menu,
  X,
  Download,
  Code,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  FolderOpen,
  Award,
  Layers,
  User,
  MessageSquare,
  Calendar,
  Trophy,
  Send,
  Youtube,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [showMoreProjects, setShowMoreProjects] = useState(false)
  const [showMoreCertificates, setShowMoreCertificates] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
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
        <nav className="fixed top-0 w-full bg-gray-950/90 backdrop-blur-md border-b border-gray-800 z-40">
          <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Nur Azis
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {[
                  { id: "home", label: "Home", icon: User },
                  { id: "portfolio", label: "Portfolio", icon: FolderOpen },
                  { id: "contact", label: "Contact", icon: MessageSquare },
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${activeSection === id
                        ? "text-purple-400 bg-purple-400/10"
                        : "text-gray-300 hover:text-white hover:bg-gray-800 cursor-pointer"
                      }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{label}</span>
                  </button>
                ))}
              </div>

              {/* Mobile menu button */}
              <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-gray-900 border-t border-gray-800">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {[
                  { id: "home", label: "Home" },
                  { id: "portfolio", label: "Portfolio" },
                  { id: "contact", label: "Contact" },
                ].map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${activeSection === id
                        ? "text-purple-400 bg-purple-400/10"
                        : "text-gray-300 hover:text-white hover:bg-gray-800"
                      }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 relative py-20">
          <div className="max-w-7xl mx-auto w-full">
            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-purple-400 text-lg font-medium">Hello, I'm</p>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 bg-clip-text text-transparent">
                    Nur Azis Saputra
                  </h1>
                  <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                    A Software Engineer with a passion for building robust and scalable web applications. I focus on
                    creating clean, efficient solutions that solve real-world problems.
                  </p>
                </div>

                {/* Important Quote */}
                <blockquote className="border-l-4 border-purple-500 pl-6 py-4 bg-gray-900/50 rounded-r-lg">
                  <p className="text-gray-300 italic text-lg leading-relaxed">
                    "I enjoy the challenge of deep-dive debugging and am passionate about learning new technologies to
                    deliver clean, maintainable code."
                  </p>
                </blockquote>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href="https://drive.google.com/file/d/1fme78wNe-1N1IgolE10eD5vgI9rq0Q27/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 text-lg rounded-full cursor-pointer transition-all duration-300 transform hover:scale-105">
                      <Download className="mr-2 w-7 h-5" />
                      Download CV
                    </Button>
                  </a>
                  <Button
                    onClick={() => scrollToSection("portfolio")}
                    variant="outline"
                    className="border-purple-500 text-purple-400 hover:text-white hover:bg-purple-500/10 px-8 py-3 text-lg rounded-full cursor-pointer transition-all duration-300"
                  >
                    <Code className="mr-2 w-7 h-5" />
                    View Projects
                  </Button>
                </div>
              </div>

              {/* Right Column - Profile Picture */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-80 h-80 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-2">
                    <Image
                      src="/image.jpg"
                      width={400}
                      height={400}
                      alt="Nur Azis Saputra"
                      className="w-full h-full rounded-full object-cover bg-gray-800"
                    />
                  </div>
                  {/* Floating elements for visual interest */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-pulse" />
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-pulse delay-1000" />
                </div>
              </div>
            </div>

            {/* Statistics Bar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <FolderOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">45+</div>
                  <div className="text-lg font-semibold text-purple-400 mb-1">Projects Completed</div>
                  <div className="text-sm text-gray-400">Delivered successful solutions</div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">1</div>
                  <div className="text-lg font-semibold text-blue-400 mb-1">Years of Experience</div>
                  <div className="text-sm text-gray-400">Professional development</div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-lg font-semibold text-purple-400 mb-1">Technologies Mastered</div>
                  <div className="text-sm text-gray-400">Modern tech stack expertise</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Portofolio Showcase
            </h2>

            <Tabs defaultValue="projects" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-800 border border-gray-700">
                <TabsTrigger
                  value="projects"
                  className="text-white flex items-center cursor-pointer space-x-2 data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400"
                >
                  <Code className="w-4 h-4" />
                  <span>Projects</span>
                </TabsTrigger>
                <TabsTrigger
                  value="certificates"
                  className="text-white flex items-center cursor-pointer space-x-2 data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400"
                >
                  <Award className="w-4 h-4" />
                  <span>Certificates</span>
                </TabsTrigger>
                <TabsTrigger
                  value="tech-stack"
                  className="text-white flex items-center cursor-pointer space-x-2 data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400"
                >
                  <Layers className="w-4 h-4" />
                  <span>Tech Stack</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="projects" className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.slice(0, showMoreProjects ? projects.length : 3).map((project) => (
                    <Card
                      key={project.id}
                      className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10"
                      onClick={() => openSidebar(project)}
                    >
                      <CardHeader className="p-0">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          width={400}
                          height={400}
                          alt={project.title}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                      </CardHeader>
                      <CardContent className="p-6">
                        <CardTitle className="text-white mb-2 text-lg">{project.title}</CardTitle>
                        <CardDescription className="text-gray-400 mb-4 text-sm leading-relaxed">
                          {project.description}
                        </CardDescription>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="secondary" className="bg-purple-500/20 text-purple-300 text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.tech.length > 3 && (
                            <Badge variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
                              +{project.tech.length - 3}
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {projects.length > 3 && (
                  <div className="text-center">
                    <Button
                      onClick={() => setShowMoreProjects(!showMoreProjects)}
                      variant="outline"
                      className="border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:text-white"
                    >
                      {showMoreProjects ? "Show Less" : "See More Projects"}
                    </Button>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="certificates" className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {certificates.slice(0, showMoreCertificates ? certificates.length : 3).map((cert) => (
                    <Card
                      key={cert.id}
                      className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
                      onClick={() => openSidebar(cert)}
                    >
                      <CardHeader className="p-0">
                        <Image
                          src={cert.image || "/placeholder.svg"}
                          width={444}
                          height={400}
                          alt={cert.title}
                          className="w-full h-64 object-cover rounded-t-lg"
                        />
                      </CardHeader>
                      <CardContent className="p-6">
                        <CardTitle className="text-white mb-2 text-lg">{cert.title}</CardTitle>
                        <CardDescription className="text-gray-400 mb-4 text-sm leading-relaxed">
                          {cert.description}
                        </CardDescription>
                        <div className="flex justify-between items-center">
                          <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 text-xs">
                            {cert.issuer}
                          </Badge>
                          <span className="text-sm text-gray-400">{cert.date}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {certificates.length > 3 && (
                  <div className="text-center">
                    <Button
                      onClick={() => setShowMoreCertificates(!showMoreCertificates)}
                      variant="outline"
                      className="border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:text-white"
                    >
                      {showMoreCertificates ? "Show Less" : "See More Certificates"}
                    </Button>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="tech-stack">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {techStack.map((tech) => (
                    <Tooltip key={tech.name}>
                      <TooltipTrigger asChild>
                        <Card
                          className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 p-6 text-center"
                          onClick={() => openSidebar(tech)}
                        >
                          <div className="text-4xl mb-3">{tech.icon}</div>
                          <h3 className="text-white font-semibold text-sm">{tech.name}</h3>
                        </Card>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="font-medium">{tech.name}</p>
                        <p className="text-xs text-gray-400">{tech.category}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Let's Connect</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    I'm always interested in new opportunities and collaborations. Whether you have a project in mind or
                    just want to discuss technology, feel free to reach out!
                  </p>
                </div>

                {/* Social Links */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">Find me on</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/nuazsa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-gray-800 rounded-full hover:bg-purple-500/20 hover:border-purple-500 border border-gray-700 transition-all duration-300 transform hover:scale-110"
                    >
                      <Github className="w-6 h-6 text-purple-400" />
                    </a>
                    <a
                      href="https://linkedin.com/in/nurazissaputra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-gray-800 rounded-full hover:bg-blue-500/20 hover:border-blue-500 border border-gray-700 transition-all duration-300 transform hover:scale-110"
                    >
                      <Linkedin className="w-6 h-6 text-blue-400" />
                    </a>
                    <a
                      href="mailto:nurazissaputra@gmail.com"
                      className="p-4 bg-gray-800 rounded-full hover:bg-purple-500/20 hover:border-purple-500 border border-gray-700 transition-all duration-300 transform hover:scale-110"
                    >
                      <Mail className="w-6 h-6 text-purple-400" />
                    </a>
                    <a
                      href="https://youtube.com/@nurazissaputra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-gray-800 rounded-full hover:bg-blue-500/20 hover:border-blue-500 border border-gray-700 transition-all duration-300 transform hover:scale-110"
                    >
                      <Youtube className="w-6 h-6 text-blue-400" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="pt-6 bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Send a Message</CardTitle>
                  <CardDescription className="text-gray-400">I'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-300">
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      className="bg-gray-900 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-gray-900 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or just say hello!"
                      rows={4}
                      className="bg-gray-900 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-3 transition-all duration-300 transform hover:scale-105">
                    <Send className="mr-2 w-4 h-4" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-400">© 2025 Nur Azis Saputra. Built with Next.js and Tailwind CSS.</p>
          </div>
        </footer>

        {/* Sidebar Panel */}
        <div
          className={`fixed inset-y-0 right-0 w-full sm:w-96 bg-gray-900/95 backdrop-blur-md border-l border-gray-700 transform transition-transform duration-300 ease-in-out z-50 ${sidebarOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {selectedItem && (
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between p-6 border-b border-gray-700">
                <h3 className="text-xl font-semibold text-white">{selectedItem.title || selectedItem.name}</h3>
                <Button variant="ghost" size="sm" onClick={closeSidebar} className="text-gray-400 border-gray-500 hover:border-purple-500 hover:bg-purple-500/10 hover:text-white bg-transparent">
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <Image
                  src={selectedItem.image || "/placeholder.svg"}
                  width={400}
                  height={400}
                  alt={selectedItem.title || selectedItem.name}
                  className="w-full object-cover rounded-lg"
                />

                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">{selectedItem.details}</p>

                  {selectedItem.tech && (
                    <div>
                      <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedItem.tech.map((tech: string) => (
                          <Badge key={tech} variant="secondary" className="bg-purple-500/20 text-purple-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedItem.experience && (
                    <div>
                      <h4 className="text-white font-semibold mb-2">Experience</h4>
                      <p className="text-gray-300">{selectedItem.experience}</p>
                    </div>
                  )}

                  {selectedItem.projects && (
                    <div>
                      <h4 className="text-white font-semibold mb-2">Used in Projects</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedItem.projects.map((project: string) => (
                          <Badge key={project} variant="secondary" className="bg-blue-500/20 text-blue-300">
                            {project}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedItem.issuer && (
                    <div>
                      <h4 className="text-white font-semibold mb-2">Issued By</h4>
                      <p className="text-gray-300">{selectedItem.issuer}</p>
                    </div>
                  )}

                  {selectedItem.date && (
                    <div>
                      <h4 className="text-white font-semibold mb-2">Date</h4>
                      <p className="text-gray-300">{selectedItem.date}</p>
                    </div>
                  )}

                  {selectedItem.category && !selectedItem.issuer && (
                    <div>
                      <h4 className="text-white font-semibold mb-2">Category</h4>
                      <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                        {selectedItem.category}
                      </Badge>
                    </div>
                  )}
                </div>

                <div className="flex flex-col space-y-3">
                  {selectedItem.github && (
                    <Button asChild className="bg-purple-500 hover:bg-purple-600 w-full">
                      <a href={selectedItem.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Source Code
                      </a>
                    </Button>
                  )}
                  {selectedItem.demo && (
                    <Button
                      asChild
                      variant="outline"
                      className="border-blue-500 text-blue-400 hover:bg-blue-500/10 bg-transparent hover:text-white w-full"
                    >
                      <a href={selectedItem.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {selectedItem.link && !selectedItem.github && (
                    <Button
                      asChild
                      variant="outline"
                      className="border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:text-white bg-transparent w-full"
                    >
                      <a href={selectedItem.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Certificate
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Overlay */}
        {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={closeSidebar} />}
      </div>
    </TooltipProvider>
  )
}