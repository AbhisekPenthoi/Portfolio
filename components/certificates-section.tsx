"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { certificates } from "@/data/certificates"
import { ExternalLink } from "lucide-react"

export function CertificatesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-20 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="container max-w-6xl mx-auto px-4"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Certifications & <span className="text-[#F9FAFB]">Achievements</span>
          </h2>
          <div className="w-24 h-0.5 bg-border mx-auto mb-6" />
          <p className="text-text-secondary max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise and continuous learning.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-primary rounded-lg overflow-hidden border border-border"
            >
              {/* Certificate Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />
              </div>

              {/* Certificate Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-text-primary">{certificate.title}</h3>
                  {certificate.verificationUrl && (
                    <a
                      href={certificate.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-text-secondary hover:text-accent transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                <p className="text-sm text-text-secondary mb-4">{certificate.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-text-primary">{certificate.issuedBy}</span>
                  <span className="text-sm text-text-secondary">
                    {new Date(certificate.issuedDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long'
                    })}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {certificate.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-secondary text-text-primary rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 