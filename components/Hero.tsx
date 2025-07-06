"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Code, FolderOpen, Calendar, Trophy } from "lucide-react";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export function Hero({ scrollToSection }: HeroProps) {
  return (
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
                className="w-full sm:w-auto"
              >
                <Button className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 text-lg rounded-full cursor-pointer transition-all duration-300 transform hover:scale-105">
                  <Download className="mr-2 w-7 h-5" />
                  Download CV
                </Button>
              </a>

              <Button
                onClick={() => scrollToSection("portfolio")}
                variant="outline"
                className="w-full sm:w-auto border-purple-500 text-purple-400 hover:text-white hover:bg-purple-500/10 px-8 py-3 text-lg rounded-full cursor-pointer transition-all duration-300"
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
  );
}