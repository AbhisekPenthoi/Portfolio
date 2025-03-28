"use client"

import { useEffect, useState } from "react"
import { motion, Variants } from "framer-motion"

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  useEffect(() => {
    const handleMouseDown = () => setCursorVariant("click")
    const handleMouseUp = () => setCursorVariant("default")
    const handleMouseEnter = () => setCursorVariant("hover")
    const handleMouseLeave = () => setCursorVariant("default")

    // Add hover effect to clickable elements
    const clickableElements = document.querySelectorAll('a, button, input, select, textarea, [role="button"]')
    
    clickableElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter)
      element.addEventListener("mouseleave", handleMouseLeave)
    })

    // Add click animation
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      clickableElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter)
        element.removeEventListener("mouseleave", handleMouseLeave)
      })

      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  const variants: Variants = {
    default: {
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
      height: 10,
      width: 10,
      backgroundColor: "rgb(255, 255, 255)",
      border: "2px solid rgb(255, 255, 255)",
    },
    hover: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      height: 30,
      width: 30,
      backgroundColor: "transparent",
      border: "2px solid rgb(255, 255, 255)",
      opacity: 0.8
    },
    click: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      height: 10,
      width: 10,
      backgroundColor: "rgb(255, 255, 255)",
      border: "2px solid rgb(255, 255, 255)",
    },
  }

  return (
    <>
      <motion.div
        className="cursor-dot fixed top-0 left-0 rounded-full pointer-events-none z-50"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="cursor-ring fixed top-0 left-0 rounded-full pointer-events-none z-50 bg-transparent"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          height: 8,
          width: 8,
          backgroundColor: "rgba(0, 255, 157, 0.8)",
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 35 }}
      />
    </>
  )
}

