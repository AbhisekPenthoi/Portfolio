"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, MapPin, Phone, Send, Github, Linkedin, CheckCircle } from "lucide-react"
import { SOCIAL_LINKS } from "@/lib/constants"

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formError, setFormError] = useState("")
  const [formSuccess, setFormSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormError("")
    setFormSuccess(false)
    
    try {
      // Form validation
      if (!formData.email || !formData.name || !formData.message) {
        setFormError("Please fill in all required fields")
        return
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        setFormError("Please enter a valid email address")
        return
      }

      // Form submission logic here
      console.log(formData)
      
      // Success
      setFormSuccess(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      setFormError("Something went wrong. Please try again later.")
    }
  }

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

  return (
    <section ref={ref} className="min-h-screen flex items-center section-padding">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out to me. I'm always open to discussing
            new projects and opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 gradient-text-blue">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Mail className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-gray-300">{SOCIAL_LINKS.email}</p>
                  <p className="text-sm text-gray-400 mt-1">Available for project inquiries</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Phone className="text-secondary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p className="text-gray-300">+91 6370183903</p>
                  <p className="text-sm text-gray-400 mt-1">Mon-Fri, 9am-6pm IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-highlight/10 rounded-lg">
                  <MapPin className="text-highlight" size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-gray-300">Bhubaneswar, Odisha, India</p>
                  <p className="text-sm text-gray-400 mt-1">Available for remote work</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4">
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
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <div className="mt-12 p-6 bg-primary/20 rounded-xl backdrop-blur-sm">
              <h4 className="font-bold mb-4">Let's connect</h4>
              <p className="text-gray-300 mb-4">
                I'm currently available for freelance work and full-time positions. If you have a project that needs
                some creative touch, I'd love to hear about it!
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-primary rounded-full hover:bg-accent/20 transition-colors">
                  <Mail size={20} className="text-accent" />
                </a>
                <a href="#" className="p-3 bg-primary rounded-full hover:bg-accent/20 transition-colors">
                  <Phone size={20} className="text-accent" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 gradient-text-blue">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {formError && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm">
                  {formError}
                </div>
              )}
              
              {formSuccess && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-500 text-sm">
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-darker-gray border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-darker-gray border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-darker-gray border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-darker-gray border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={formSuccess}
                className={`
                  w-full py-3 bg-gradient-to-r from-accent to-secondary 
                  text-background font-medium rounded-lg 
                  hover:opacity-90 transition-colors 
                  flex items-center justify-center gap-2
                  disabled:opacity-50 disabled:cursor-not-allowed
                `}
              >
                {formSuccess ? (
                  <>
                    <CheckCircle size={18} />
                    Sent Successfully
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

