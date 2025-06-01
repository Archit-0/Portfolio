import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import projects from "@/Data/projects";

const Project = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  return (
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
  );
};

export default Project;
