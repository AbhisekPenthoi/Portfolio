"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Github, Linkedin, ChevronRight } from "lucide-react"
import { SOCIAL_LINKS, AUTHOR } from "@/lib/constants"

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const [imageLoading, setImageLoading] = useState(true)

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-accent/5 via-background to-background" />
        
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 rounded-full bg-gradient-to-r from-accent/5 to-secondary/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-gradient-to-l from-secondary/5 to-accent/5 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center justify-between gap-12"
      >
        {/* Enhanced Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 max-w-2xl"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm mb-6">
            <span>Available for new projects</span>
            <ChevronRight size={16} className="ml-1" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">{AUTHOR.name}</span>
            <span className="block mt-2 text-white">
              {AUTHOR.role}
            </span>
          </h1>

          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            {AUTHOR.bio}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link 
              href="/contact"
              className="btn-primary text-center flex items-center justify-center gap-2"
            >
              Let's work together
              <ChevronRight size={16} />
            </Link>
            <Link 
              href="/projects"
              className="btn-secondary text-center"
            >
              View my work
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex gap-6"
          >
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition-colors group"
            >
              <Github size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition-colors group"
            >
              <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        {/* Enhanced Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 flex justify-center items-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-highlight opacity-20 blur-2xl animate-pulse" />
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-accent/20 to-highlight/20 backdrop-blur-sm border border-accent/10" />
            <div className="absolute inset-4 rounded-full bg-primary/80 backdrop-blur overflow-hidden">
              <Image
                src="/profile.jpg"
                alt={AUTHOR.name}
                width={400}
                height={400}
                className={`
                  object-cover w-full h-full rounded-full transition-all duration-300
                  ${imageLoading ? 'scale-110 blur-sm' : 'scale-100 blur-0'}
                `}
                onLoadingComplete={() => setImageLoading(false)}
                priority
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

