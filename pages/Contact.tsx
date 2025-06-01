import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Github, Mail, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
const Contact = () => {
  return (
    <div>
      {" "}
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
                  href="mailto:archit0422chatan@gmail.com"
                  className="flex items-center space-x-4 p-4 rounded-lg bg-[#2d2d2d]/50 border border-[#2d2d2d] hover:border-[#00ffff] transition-all duration-300"
                  whileHover={{ x: 10 }}
                >
                  <Mail className="h-6 w-6 text-[#00ffff]" />
                  <span className="text-white">archit0422chatan@gmail.com</span>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/archit-jain-380ba4289/"
                  className="flex items-center space-x-4 p-4 rounded-lg bg-[#2d2d2d]/50 border border-[#2d2d2d] hover:border-[#00ff9f] transition-all duration-300"
                  whileHover={{ x: 10 }}
                >
                  <Linkedin className="h-6 w-6 text-[#00ff9f]" />
                  <span className="text-white">linkedin.com/in/architjain</span>
                </motion.a>

                <motion.a
                  href="https://github.com/Archit-0"
                  className="flex items-center space-x-4 p-4 rounded-lg bg-[#2d2d2d]/50 border border-[#2d2d2d] hover:border-[#007acc] transition-all duration-300"
                  whileHover={{ x: 10 }}
                >
                  <Github className="h-6 w-6 text-[#007acc]" />
                  <span className="text-white">github.com/Archit-0</span>
                </motion.a>
              </div>

              <div className="p-6 rounded-lg bg-gradient-to-r from-[#00ffff]/10 to-[#00ff9f]/10 border border-[#00ffff]/30">
                <h4 className="font-semibold text-[#00ffff] mb-2">
                  Fresh Perspective, Eager to Learn
                </h4>
                <p className="text-gray-300 text-sm">
                  As a dedicated student with current knowledge of modern
                  technologies, I am actively seeking internship opportunities
                  to apply my skills, contribute to innovative projects, and
                  gain valuable industry experience.
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
    </div>
  );
};
export default Contact;
