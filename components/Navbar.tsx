"use client";

import { useState } from "react";
import { Menu, X, User, FolderOpen, MessageSquare } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const NAV_SECTIONS = [
  { id: "home", label: "Home", icon: User },
  { id: "portfolio", label: "Portfolio", icon: FolderOpen },
  { id: "contact", label: "Contact", icon: MessageSquare },
] as const;

export function Navbar({ activeSection, scrollToSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-950/90 backdrop-blur-md border-b px-4 sm:px-6 lg:px-8 border-gray-800 z-40">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Nur Azis
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {NAV_SECTIONS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                  activeSection === id
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
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {NAV_SECTIONS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleMobileNavClick(id)}
                className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                  activeSection === id
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
  );
}