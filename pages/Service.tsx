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

import services from "@/Data/services";
const Service = () => {
  return (
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
  );
};

export default Service;
