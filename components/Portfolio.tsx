"use client";

import { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Code, Award, Layers } from "lucide-react";
import { projects, certificates, techStack } from "@/lib/data";
import { Project, Certificate, TechStackItem } from "@/lib/types";

interface PortfolioProps {
  onItemClick: (item: Project | Certificate | TechStackItem) => void;
}

export function Portfolio({ onItemClick }: PortfolioProps) {
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [showMoreCertificates, setShowMoreCertificates] = useState(false);

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Portfolio Showcase
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

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .slice(0, showMoreProjects ? projects.length : 3)
                .map((project) => (
                  <Card
                    key={project.id}
                    className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10"
                    onClick={() => onItemClick(project)}
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
                      <CardTitle className="text-white mb-2 text-lg">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-400 mb-4 text-sm leading-relaxed">
                        {project.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-purple-500/20 text-purple-300 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 3 && (
                          <Badge
                            variant="secondary"
                            className="bg-gray-700 text-gray-300 text-xs"
                          >
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

          {/* Certificates Tab */}
          <TabsContent value="certificates" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {certificates.slice(0, showMoreCertificates ? certificates.length : 3).map((cert) => (
                    <Card
                      key={cert.id}
                      className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
                      onClick={() => onItemClick(cert)}
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

          {/* Tech Stack Tab */}
           <TabsContent value="tech-stack">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {techStack.map((tech) => (
                    <Tooltip key={tech.name}>
                      <TooltipTrigger asChild>
                        <Card
                          className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 p-6 text-center"
                          onClick={() => onItemClick(tech)}
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
  );
}