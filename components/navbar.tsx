"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X, Github, Linkedin } from "lucide-react"
import { SOCIAL_LINKS } from "@/lib/constants"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Certificates", href: "/certificates" },
  ]

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div variants={itemVariants} className="flex items-center">
          <Link href="/" className="text-2xl font-bold">
            <span className="gradient-text">Abhisek</span>
            <span className="text-white">.dev</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div variants={itemVariants} className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-white hover:text-accent transition-colors duration-300 ${
                pathname === link.href ? "text-accent" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary">
            Let's Talk
          </Link>
        </motion.div>

        {/* Mobile Navigation Toggle */}
        <motion.div variants={itemVariants} className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-primary/95 backdrop-blur-lg"
        >
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-white hover:text-accent py-2 transition-colors duration-300 ${
                  pathname === link.href ? "text-accent" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="btn-primary inline-block text-center" 
              onClick={() => setIsOpen(false)}
            >
              Let's Talk
            </Link>
            <div className="flex justify-center gap-6 mt-6">
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
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

