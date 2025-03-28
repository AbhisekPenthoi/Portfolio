"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { projects } from "@/data/projects"
import { ProjectCard } from "./project-card"

export function ProjectsSection() {
  return (
    <section className="py-20 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container max-w-6xl mx-auto px-4"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="text-[#F9FAFB]">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-border mx-auto mb-6" />
          <p className="text-text-secondary max-w-2xl mx-auto">
            A collection of projects that showcase my skills and experience in building digital products.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              featured={project.featured}
            />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="/projects"
            className="inline-block px-6 py-3 rounded-full bg-secondary/80 
            hover:bg-secondary transition-colors duration-300 text-text-primary font-medium"
          >
            View All Projects
          </a>
        </div>
      </motion.div>
    </section>
  )
}

