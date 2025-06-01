import React from "react";
import { motion } from "framer-motion";
import { MapPin, GraduationCap } from "lucide-react";
import hobbies from "../Data/hobbies";
const About = () => {
  return (
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
            A passionate developer ready to make an impact with fresh ideas and
            modern technologies.
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
                I'm Archit, a 3rd-year IT student passionate about full-stack
                development and modern web technologies like React and Next.js.
                I enjoy building smart, user-friendly solutions and have worked
                on various personal and academic projects. I'm a quick learner,
                team player, and always eager to explore and grow in tech.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                I'm particularly excited about modern web technologies and love
                the challenge of turning complex problems into simple, elegant
                solutions. As a quick learner and team player, I'm eager to
                contribute to meaningful projects while continuing to grow my
                skills.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 rounded-lg bg-[#2d2d2d]/50 border border-[#2d2d2d]">
                  <MapPin className="h-6 w-6 text-[#00ffff] mb-2" />
                  <div className="text-sm text-gray-400">Location</div>
                  <div className="text-white">New delhi , Delhi</div>
                </div>
                <div className="p-4 rounded-lg bg-[#2d2d2d]/50 border border-[#2d2d2d]">
                  <GraduationCap className="h-6 w-6 text-[#00ff9f] mb-2" />
                  <div className="text-sm text-gray-400">Education</div>
                  <div className="text-white">
                    B.Tech in Information Technology (3rd Year)
                  </div>
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
                    Passion for building modern, real-time web applications
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
                    Collaborative approach and clear communication skills
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
  );
};

export default About;
