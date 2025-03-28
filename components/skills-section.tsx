"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { skills } from "@/data/skills"

export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <section ref={ref} className="py-20 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container max-w-6xl mx-auto px-4"
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Technical <span className="text-[#F9FAFB]">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-border mx-auto mb-6" />
          <p className="text-text-secondary max-w-2xl mx-auto text-center">
            A comprehensive overview of my technical skills and proficiency levels across different domains.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(skills).map(([key, category]) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 overflow-hidden"
            >
              {/* Category Header */}
              <div className="bg-accent/10 p-6 border-b border-accent/10">
                <h3 className="text-2xl font-bold text-accent/90">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-accent/5 
                        transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
                    >
                      {/* Icon Container */}
                      <div className="relative w-12 h-12 flex-shrink-0">
                        <div className="absolute inset-0 bg-white/10 rounded-lg transform 
                          group-hover:scale-105 transition-transform duration-300" />
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          fill
                          loading="eager"
                          sizes="(max-width: 768px) 24px, 48px"
                          className="object-contain p-2.5 transform group-hover:scale-110 
                            transition-transform duration-300"
                          onError={(e) => {
                            // Fallback for missing icons
                            const target = e.target as HTMLImageElement;
                            target.src = '/logos/default-skill.svg';
                          }}
                        />
                      </div>

                      {/* Skill Details */}
                      <div className="flex-grow min-w-0">
                        <h4 className="font-semibold text-sm mb-2 text-white/90 truncate">
                          {skill.name}
                        </h4>
                        <div className="space-y-1">
                          <div className="relative h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ 
                                width: skill.level === 'Beginner' ? '33.33%' : 
                                       skill.level === 'Intermediate' ? '66.66%' : 
                                       '100%' 
                              }}
                              transition={{ duration: 1, delay: 0.5 }}
                              className="absolute top-0 left-0 h-full rounded-full 
                                bg-gradient-to-r from-accent to-accent/70"
                            />
                          </div>
                          <span className="text-xs text-text-secondary inline-block">
                            {skill.level}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-sm text-text-secondary/80 italic">
            * Continuously expanding knowledge and staying updated with the latest technologies
          </p>
        </div>
      </motion.div>
    </section>
  )
}

