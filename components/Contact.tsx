"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Youtube, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Let's Connect
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm always interested in new opportunities and collaborations.
                Whether you have a project in mind or just want to discuss
                technology, feel free to reach out!
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
              <CardTitle className="text-white text-xl">
                Send a Message
              </CardTitle>
              <CardDescription className="text-gray-400">
                I'll get back to you as soon as possible.
              </CardDescription>
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
  );
}