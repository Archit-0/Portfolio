"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import {
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  Download,
  Star,
  GraduationCap,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTheme } from "next-themes";
import projects from "@/Data/projects";
import skills from "@/Data/skills";
import education from "@/Data/education";
import services from "@/Data/services";
import learningGoals from "@/Data/learningGoals";
import testimonials from "@/Data/testimonials";
import hobbies from "@/Data/hobbies";

export default function FreshGraduatePortfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const { theme, setTheme } = useTheme();
  const { scrollYProgress } = useScroll();

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

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  const getSkillLevel = (level: number) => {
    if (level >= 80) return "Advanced";
    if (level >= 65) return "Intermediate";
    return "Beginner";
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
            {"<AlexDev />"}
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
                src="/placeholder.svg?height=128&width=128"
                alt="Alex Johnson"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Alex{" "}
              <span className="bg-gradient-to-r from-[#00ffff] to-[#00ff9f] bg-clip-text text-transparent">
                Johnson
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
              Fresh Computer Science graduate with a passion for creating
              innovative web solutions. Ready to bring fresh perspectives and
              modern development practices to your team.
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
              <Button
                size="lg"
                variant="outline"
                className="group border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff] hover:text-black"
              >
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <div className="text-center p-4 rounded-lg bg-[#1a1a1a] border border-[#2d2d2d]">
                <div className="text-2xl font-bold text-[#00ffff]">2024</div>
                <div className="text-sm text-gray-400">Graduate</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-[#1a1a1a] border border-[#2d2d2d]">
                <div className="text-2xl font-bold text-[#00ff9f]">15+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-[#1a1a1a] border border-[#2d2d2d]">
                <div className="text-2xl font-bold text-[#007acc]">3.8</div>
                <div className="text-sm text-gray-400">GPA</div>
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
      <section id="about" className="py-20 bg-[#1a1a1a]/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00ffff] to-[#00ff9f] bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A passionate developer ready to make an impact with fresh ideas
              and modern technologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Hi! I'm Alex, a recent Computer Science graduate with a
                  passion for creating innovative web solutions. During my
                  studies, I've developed a strong foundation in full-stack
                  development and gained hands-on experience through various
                  projects and internships.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm particularly excited about modern web technologies and
                  love the challenge of turning complex problems into simple,
                  elegant solutions. As a quick learner and team player, I'm
                  eager to contribute to meaningful projects while continuing to
                  grow my skills.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="p-4 rounded-lg bg-[#2d2d2d]/50 border border-[#2d2d2d]">
                    <MapPin className="h-6 w-6 text-[#00ffff] mb-2" />
                    <div className="text-sm text-gray-400">Location</div>
                    <div className="text-white">San Francisco, CA</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#2d2d2d]/50 border border-[#2d2d2d]">
                    <GraduationCap className="h-6 w-6 text-[#00ff9f] mb-2" />
                    <div className="text-sm text-gray-400">Education</div>
                    <div className="text-white">CS Graduate</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="p-6 rounded-lg bg-[#2d2d2d]/50 border border-[#2d2d2d]">
                <h3 className="text-2xl font-semibold mb-6 text-[#00ffff]">
                  What I Bring
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#00ffff] rounded-full"></div>
                    <span className="text-gray-300">
                      Fresh perspective on modern development practices
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#00ff9f] rounded-full"></div>
                    <span className="text-gray-300">
                      Strong foundation in computer science fundamentals
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#007acc] rounded-full"></div>
                    <span className="text-gray-300">
                      Eagerness to learn and adapt to new technologies
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#00ffff] rounded-full"></div>
                    <span className="text-gray-300">
                      Collaborative mindset and excellent communication
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-[#2d2d2d]/50 border border-[#2d2d2d]">
                <h3 className="text-xl font-semibold mb-4 text-[#00ff9f]">
                  Interests & Hobbies
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {hobbies.map((hobby, index) => (
                    <motion.div
                      key={hobby.name}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-[#1a1a1a] hover:bg-[#2d2d2d] transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <hobby.icon className="h-5 w-5 text-[#00ffff]" />
                      <div>
                        <div className="text-sm font-medium text-white">
                          {hobby.name}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00ffff] to-[#00ff9f] bg-clip-text text-transparent">
              Education & Learning
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building a strong foundation through formal education and
              continuous learning.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#1a1a1a] border-[#2d2d2d] hover:border-[#00ffff] transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl text-white mb-2">
                          {edu.degree}
                        </CardTitle>
                        <CardDescription className="text-[#00ffff] font-semibold text-lg">
                          {edu.institution}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant="outline"
                          className="border-[#00ff9f] text-[#00ff9f] mb-2"
                        >
                          {edu.year}
                        </Badge>
                        <div className="text-sm text-gray-400">
                          GPA: {edu.gpa}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-[#00ffff] mb-3">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-center space-x-2 text-gray-300"
                            >
                              <Star className="h-4 w-4 text-[#00ff9f]" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#00ffff] mb-3">
                          Relevant Coursework
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, i) => (
                            <Badge
                              key={i}
                              className="bg-[#2d2d2d] text-gray-300 hover:bg-[#00ffff] hover:text-black transition-colors"
                            >
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-[#1a1a1a]/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00ffff] to-[#00ff9f] bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proficient in modern web technologies with a strong foundation in
              computer science fundamentals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(
              ([category, skillList], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-[#2d2d2d]/50 border-[#2d2d2d] hover:border-[#00ffff] transition-all duration-300 h-full">
                    <CardHeader>
                      <CardTitle className="text-xl text-[#00ffff] capitalize">
                        {category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {skillList.map((skill, index) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-white flex items-center gap-2">
                              <span>{skill.icon}</span>
                              {skill.name}
                            </span>
                            <Badge
                              variant="outline"
                              className={`text-xs ${
                                skill.level >= 80
                                  ? "border-[#00ff9f] text-[#00ff9f]"
                                  : skill.level >= 65
                                  ? "border-[#00ffff] text-[#00ffff]"
                                  : "border-[#007acc] text-[#007acc]"
                              }`}
                            >
                              {getSkillLevel(skill.level)}
                            </Badge>
                          </div>
                          <div className="w-full bg-[#1a1a1a] rounded-full h-2">
                            <motion.div
                              className="bg-gradient-to-r from-[#00ffff] to-[#00ff9f] h-2 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              viewport={{ once: true }}
                            />
                          </div>
                          <div className="text-xs text-gray-400 text-right">
                            {skill.level}%
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00ffff] to-[#00ff9f] bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing my learning journey through hands-on projects and
              practical applications.
            </p>
          </motion.div>

          {/* Filter buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mb-12"
          >
            <div className="flex space-x-4 p-2 bg-[#1a1a1a] rounded-lg border border-[#2d2d2d]">
              {["All", "Frontend", "Full-Stack"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-md transition-all duration-300 ${
                    selectedFilter === filter
                      ? "bg-gradient-to-r from-[#00ffff] to-[#00ff9f] text-black font-semibold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group bg-[#1a1a1a] border-[#2d2d2d] hover:border-[#00ffff] transition-all duration-300 overflow-hidden h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    {project.featured && (
                      <Badge className="absolute top-4 left-4 bg-gradient-to-r from-[#00ffff] to-[#00ff9f] text-black">
                        Featured
                      </Badge>
                    )}
                    <Badge className="absolute top-4 right-4 bg-[#1a1a1a]/80 text-[#00ffff] border border-[#00ffff]">
                      {project.category}
                    </Badge>
                  </div>

                  <CardHeader>
                    <CardTitle className="group-hover:text-[#00ffff] transition-colors text-white">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-[#00ff9f] mb-2">
                        Key Features
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {project.highlights.map((highlight) => (
                          <Badge
                            key={highlight}
                            variant="outline"
                            className="text-xs border-[#2d2d2d] text-gray-400"
                          >
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-[#00ffff] mb-2">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            className="text-xs bg-[#2d2d2d] text-gray-300 hover:bg-[#00ffff] hover:text-black transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4 pt-4">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-[#2d2d2d] text-gray-300 hover:border-[#00ffff] hover:text-[#00ffff]"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-[#00ffff] to-[#00ff9f] hover:from-[#00e6e6] hover:to-[#00e68c] text-black"
                        asChild
                      >
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#1a1a1a]/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00ffff] to-[#00ff9f] bg-clip-text text-transparent">
              What I Can Offer
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to contribute with fresh perspectives and modern development
              practices.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#2d2d2d]/50 border-[#2d2d2d] hover:border-[#00ffff] transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-[#00ffff] to-[#00ff9f] rounded-lg">
                        <service.icon className="h-6 w-6 text-black" />
                      </div>
                      <CardTitle className="text-xl text-white">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 mb-4">
                      {service.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff] hover:text-black transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Journey Section */}
      <section id="learning" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00ffff] to-[#00ff9f] bg-clip-text text-transparent">
              Continuous Learning
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Always expanding my skillset and staying current with emerging
              technologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-8 text-[#00ffff]">
                Current Learning Goals
              </h3>
              <div className="space-y-6">
                {learningGoals.map((goal, index) => (
                  <div key={goal.title} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-white">{goal.title}</h4>
                      <span className="text-sm text-gray-400">
                        {goal.progress}%
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">{goal.description}</p>
                    <div className="w-full bg-[#1a1a1a] rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-[#00ffff] to-[#00ff9f] h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${goal.progress}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-8 text-[#00ff9f]">
                Testimonials
              </h3>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-lg bg-[#1a1a1a] border border-[#2d2d2d]"
                  >
                    <p className="text-gray-300 mb-4 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center space-x-3">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div className="font-semibold text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-400">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#1a1a1a]/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00ffff] to-[#00ff9f] bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to bring fresh perspectives and enthusiasm to your team.
              Let's discuss opportunities!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-white">
                  Get In Touch
                </h3>
                <p className="text-gray-400 mb-8">
                  I'm excited to start my career and contribute to meaningful
                  projects. Whether you have an entry-level position or
                  internship opportunity, I'd love to hear from you!
                </p>
              </div>

              <div className="space-y-4">
                <motion.a
                  href="mailto:alex.johnson@example.com"
                  className="flex items-center space-x-4 p-4 rounded-lg bg-[#2d2d2d]/50 border border-[#2d2d2d] hover:border-[#00ffff] transition-all duration-300"
                  whileHover={{ x: 10 }}
                >
                  <Mail className="h-6 w-6 text-[#00ffff]" />
                  <span className="text-white">alex.johnson@example.com</span>
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/alexjohnson"
                  className="flex items-center space-x-4 p-4 rounded-lg bg-[#2d2d2d]/50 border border-[#2d2d2d] hover:border-[#00ff9f] transition-all duration-300"
                  whileHover={{ x: 10 }}
                >
                  <Linkedin className="h-6 w-6 text-[#00ff9f]" />
                  <span className="text-white">
                    linkedin.com/in/alexjohnson
                  </span>
                </motion.a>

                <motion.a
                  href="https://github.com/alexjohnson"
                  className="flex items-center space-x-4 p-4 rounded-lg bg-[#2d2d2d]/50 border border-[#2d2d2d] hover:border-[#007acc] transition-all duration-300"
                  whileHover={{ x: 10 }}
                >
                  <Github className="h-6 w-6 text-[#007acc]" />
                  <span className="text-white">github.com/alexjohnson</span>
                </motion.a>
              </div>

              <div className="p-6 rounded-lg bg-gradient-to-r from-[#00ffff]/10 to-[#00ff9f]/10 border border-[#00ffff]/30">
                <h4 className="font-semibold text-[#00ffff] mb-2">
                  Fresh Perspective, Eager to Learn
                </h4>
                <p className="text-gray-300 text-sm">
                  As a recent graduate, I bring up-to-date knowledge of modern
                  technologies and a strong desire to grow with your team.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#2d2d2d]/50 border-[#2d2d2d]">
                <CardHeader>
                  <CardTitle className="text-white">Send a Message</CardTitle>
                  <CardDescription className="text-gray-400">
                    Let's discuss how I can contribute to your team's success.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="First Name"
                      className="bg-[#1a1a1a] border-[#2d2d2d] text-white placeholder:text-gray-500"
                    />
                    <Input
                      placeholder="Last Name"
                      className="bg-[#1a1a1a] border-[#2d2d2d] text-white placeholder:text-gray-500"
                    />
                  </div>
                  <Input
                    placeholder="Email"
                    type="email"
                    className="bg-[#1a1a1a] border-[#2d2d2d] text-white placeholder:text-gray-500"
                  />
                  <Input
                    placeholder="Company"
                    className="bg-[#1a1a1a] border-[#2d2d2d] text-white placeholder:text-gray-500"
                  />
                  <Textarea
                    placeholder="Tell me about the opportunity..."
                    rows={5}
                    className="bg-[#1a1a1a] border-[#2d2d2d] text-white placeholder:text-gray-500"
                  />
                  <Button className="w-full bg-gradient-to-r from-[#00ffff] to-[#00ff9f] hover:from-[#00e6e6] hover:to-[#00e68c] text-black font-semibold">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[#2d2d2d] bg-[#0f0f0f]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Alex Johnson. Built with passion using Next.js, TypeScript &
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
