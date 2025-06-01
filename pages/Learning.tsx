import React from "react";
import { motion } from "framer-motion";
import learningGoals from "@/Data/learningGoals";
import testimonials from "@/Data/testimonials";
const Learning = () => {
  return (
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
  );
};

export default Learning;
