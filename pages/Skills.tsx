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
import skills from "../Data/skills";

const getSkillLevel = (level: number) => {
  if (level >= 80) return "Advanced";
  if (level >= 65) return "Intermediate";
  return "Beginner";
};

const Skills = () => {
  return (
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
  );
};

export default Skills;
