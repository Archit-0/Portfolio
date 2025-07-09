"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "next-themes";

import About from "@/pages/About";
import Education from "@/pages/Education";
import Skills from "@/pages/Skills";
import Project from "@/pages/Project";
import Service from "@/pages/Service";
import Learning from "@/pages/Learning";
import Contact from "@/pages/Contact";

export default function FreshGraduatePortfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);

  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const { theme, setTheme } = useTheme();

  const textToType = [
    "Full-Stack Developer",
    "Problem Solver",
    "Tech Enthusiast",
    "Quick Learner",
  ];

  useEffect(() => {
    setIsVisible(true);
    setTheme("dark");

    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "education",
        "skills",
        "projects",
        "services",
        "learning",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setTheme]);

  // Typing animation effect
  useEffect(() => {
    const currentText = textToType[currentTextIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex <= currentText.length) {
        setTypedText(currentText.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % textToType.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentTextIndex]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full z-50 bg-[#0f0f0f]/95 backdrop-blur-md border-b border-[#2d2d2d]"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-[#00ffff] to-[#00ff9f] bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            {"<ArchitDev />"}
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {[
              "home",
              "about",
              "education",
              "skills",
              "projects",
              "services",
              "learning",
              "contact",
            ].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all duration-300 hover:text-[#00ffff] ${
                  activeSection === section
                    ? "text-[#00ffff] border-b-2 border-[#00ffff]"
                    : "text-gray-300"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
          <Badge className="bg-gradient-to-r from-[#00ffff] to-[#00ff9f] text-black font-semibold">
            Open to Opportunities
          </Badge>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/50 via-[#0f0f0f] to-[#2d2d2d]/30" />

        {/* Animated background particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#00ffff] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="m-20 container mx-auto px-4 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Professional headshot */}
            <motion.div
              className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-[#00ffff] shadow-lg shadow-[#00ffff]/30"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <img
                src="/archit.jpg?height=128&width=128"
                alt="Archit jain"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Archit{" "}
              <span className="bg-gradient-to-r from-[#00ffff] to-[#00ff9f] bg-clip-text text-transparent">
                jain
              </span>
            </motion.h1>

            <motion.div
              className="text-xl md:text-2xl text-gray-300 mb-2 h-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <span className="text-[#00ffff]">{typedText}</span>
              <span className="animate-pulse">|</span>
            </motion.div>

            <motion.p
              className="text-lg max-w-2xl mx-auto mb-8 text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              Computer Science student seeking internship opportunities to apply
              modern web development skills and gain industry experience.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="group bg-gradient-to-r from-[#00ffff] to-[#00ff9f] hover:from-[#00e6e6] hover:to-[#00e68c] text-black font-semibold"
              >
                View Projects
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  →
                </motion.div>
              </Button>
              <a href="/Archit-jain_resume.pdf" download>
                <Button
                  size="lg"
                  variant="outline"
                  className="group border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff] hover:text-black"
                >
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Download Resume
                </Button>
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <div className="text-center p-4 rounded-lg bg-[#1a1a1a] border border-[#2d2d2d]">
                <div className="text-2xl font-bold text-[#00ffff]">2026</div>
                <div className="text-sm text-gray-400">Graduate</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-[#1a1a1a] border border-[#2d2d2d]">
                <div className="text-2xl font-bold text-[#00ff9f]">5+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-[#1a1a1a] border border-[#2d2d2d]">
                <div className="text-2xl font-bold text-[#007acc]">8.3</div>
                <div className="text-sm text-gray-400">CGPA</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-[#1a1a1a] border border-[#2d2d2d]">
                <div className="text-2xl font-bold text-[#00ffff]">100%</div>
                <div className="text-sm text-gray-400">Motivated</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <About />
      {/* Education Section */}
      <Education />
      {/* Skills Section */}
      <Skills />
      {/* Projects Section */}
      <Project />
      {/* Services Section */}
      <Service />
      {/* Learning Journey Section */}
      <Learning />
      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="py-8 border-t border-[#2d2d2d] bg-[#0f0f0f]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Archit jain. Built with passion using Next.js, TypeScript &
            Framer Motion.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Ready to start my journey in tech! 🚀
          </p>
        </div>
      </footer>
    </div>
  );
}
