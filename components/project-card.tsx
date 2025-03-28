"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"
import type { Project } from "@/types"
import { useState } from "react"
import { getProjectImage } from "@/utils/image-utils"

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  featured
}: ProjectCardProps) {
  const [imageError, setImageError] = useState(false)
  const imageSrc = getProjectImage(image)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative bg-primary/80 rounded-xl overflow-hidden backdrop-blur-sm border border-secondary/20"
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-gray-900">
        <Image
          src={imageError ? "/projects/placeholder.svg" : imageSrc}
          alt={title}
          width={1200}
          height={630}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          onError={() => {
            console.log('Image failed to load:', image);
            setImageError(true);
          }}
        />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500" />
        
        {/* Project Links */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-secondary/80 rounded-full hover:bg-accent/90 transition-colors duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary/80 rounded-full hover:bg-accent/90 transition-colors duration-300"
            >
              <ExternalLink className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        {featured && (
          <span className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full mb-4 inline-block">
            Featured Project
          </span>
        )}
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-text-secondary mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-secondary/40 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
} 