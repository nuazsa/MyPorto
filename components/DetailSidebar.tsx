"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Github, ExternalLink } from "lucide-react";
import { Project, Certificate, TechStackItem } from "@/lib/types";

interface DetailSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  item: Project | Certificate | TechStackItem | null;
}

export function DetailSidebar({ isOpen, onClose, item }: DetailSidebarProps) {
  // Type Guards
  const isProject = item && 'tech' in item;
  const isCertificate = item && 'issuer' in item;
  const isTechStack = item && 'category' in item && 'experience' in item;

  return (
    <>
      {/* Overlay tetap sama */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed inset-y-0 right-0 w-full sm:w-96 bg-gray-900/95 backdrop-blur-md border-l border-gray-700 transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {item && (
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <h3 className="text-xl font-semibold text-white">
                {'title' in item ? item.title : item.name}
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="text-gray-400 hover:bg-purple-500/10 hover:text-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {'image' in item && item.image ? (
                <Image
                  src={item.image}
                  width={400}
                  height={400}
                  alt={'title' in item ? item.title : (item as TechStackItem).name ?? ''}
                  className="w-full object-cover rounded-lg"
                />
              ) : 'icon' in item ? (
                <div className="flex justify-center items-center h-48 w-full bg-gray-800 rounded-lg">
                  <div className="text-8xl">{item.icon}</div>
                </div>
              ) : null}

              <div className="space-y-4">
                {'details' in item && (
                   <p className="text-gray-300 leading-relaxed">{item.details}</p>
                )}
  
                {isProject && (
                  <div>
                    <h4 className="text-white font-semibold mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-purple-500/20 text-purple-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
  
                {isTechStack && item.experience && (
                   <div>
                    <h4 className="text-white font-semibold mb-2">Experience</h4>
                    <p className="text-gray-300">{item.experience}</p>
                  </div>
                )}
  
                {isTechStack && item.projects && (
                  <div>
                    <h4 className="text-white font-semibold mb-2">Used in Projects</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.projects.map((project: string) => (
                        <Badge key={project} variant="secondary" className="bg-blue-500/20 text-blue-300">
                          {project}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
  
                {isCertificate && (
                  <>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Issued By</h4>
                      <p className="text-gray-300">{item.issuer}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Date</h4>
                      <p className="text-gray-300">{item.date}</p>
                    </div>
                  </>
                )}
  
                {isTechStack && (
                  <div>
                    <h4 className="text-white font-semibold mb-2">Category</h4>
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                      {item.category}
                    </Badge>
                  </div>
                )}
              </div>
  
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-700">
                {isProject && item.github && (
                  <Button asChild className="bg-purple-500 hover:bg-purple-600 w-full">
                    <a href={item.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Source Code
                    </a>
                  </Button>
                )}
                {isProject && item.demo && (
                  <Button
                    asChild
                    variant="outline"
                    className="border-blue-500 text-blue-400 hover:bg-blue-500/10 bg-transparent hover:text-white w-full"
                  >
                    <a href={item.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {isCertificate && item.link && (
                   <Button
                        asChild
                        variant="outline"
                        className="border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:text-white bg-transparent w-full"
                      >
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
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
    </>
  );
}