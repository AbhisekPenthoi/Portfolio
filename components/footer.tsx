"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import { SOCIAL_LINKS, AUTHOR } from "@/lib/constants"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-gradient-to-b from-primary to-darker-gray py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/" className="text-2xl font-bold">
              <span className="gradient-text">{AUTHOR.name}</span>
              <span className="text-white">.dev</span>
            </Link>
            <p className="text-gray-400 mt-2 max-w-md">
              Building modern web experiences with cutting-edge technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-6 mt-6 md:mt-0"
          >
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="text-gray-400 hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </div>

        <div className="text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} {AUTHOR.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

