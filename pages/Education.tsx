import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import education from "../Data/education";

const Education = () => {
  return (
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
            Building a strong foundation through formal education and continuous
            learning.
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
                        GPA: {edu.cgpa}
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
  );
};

export default Education;
