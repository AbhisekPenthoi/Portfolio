"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Code, Globe, Server, Database, Github, Linkedin } from "lucide-react"
import { SOCIAL_LINKS } from "@/lib/constants"

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const skills = {
    frontend: {
      title: "Frontend Development",
      icon: <Code className="text-accent" size={24} />,
      skills: ["React.js", "Next.js", "TypeScript", "TailwindCSS"]
    },
    backend: {
      title: "Backend Development",
      icon: <Server className="text-secondary" size={24} />,
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"]
    },
    tools: {
      title: "Development Tools",
      icon: <Database className="text-highlight" size={24} />,
      skills: ["Git", "VS Code", "Postman", "Docker"]
    },
    other: {
      title: "Additional Skills",
      icon: <Globe className="text-accent" size={24} />,
      skills: ["CI/CD", "AWS Basics", "System Design", "Agile"]
    }
  }

  return (
    <section ref={ref} className="min-h-screen flex items-center section-padding gradient-bg">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            I'm a dedicated MERN stack developer specializing in building scalable web applications. 
            With a strong foundation in modern web technologies and a passion for clean code, 
            I create efficient solutions that deliver exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image and background */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative bg-primary rounded-lg overflow-hidden">
              <Image
                src="/pic.jpg"
                alt="Abhisek at Trithon Hackathon"
                width={800}
                height={600}
                className="w-full h-auto hover:scale-105 transition-transform duration-300"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-4">
                <p className="text-sm text-gray-300">
                  At Trithon - 24 Hours Non-Stop Hackathon, March 2025
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6">
              Turning <span className="gradient-text">ideas</span> into reality
            </h3>

            <p className="text-gray-300 mb-6">
              I specialize in building full-stack web applications using the MERN (MongoDB, Express.js, React, Node.js)
              stack. My passion lies in creating intuitive user experiences combined with robust backend systems.
            </p>

            <p className="text-gray-300 mb-8">
              With a strong foundation in both frontend and backend development, I enjoy tackling complex problems and
              finding elegant solutions that deliver exceptional user experiences.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {Object.entries(skills).map(([key, { title, icon, skills }]) => (
                <div key={key} className="p-4 bg-primary/10 rounded-lg backdrop-blur-sm hover:bg-primary/20 transition-colors">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      {icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{title}</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs px-2 py-1 rounded-full bg-secondary/80 text-text-primary"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-6 mt-8">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

