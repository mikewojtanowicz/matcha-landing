"use client"

import React, { useEffect, useState } from "react"
import { motion, Variants } from "framer-motion"
import EmailSignup from "@/components/common/EmailSignup"
import ScrollIndicator from "@/components/common/ScrollIndicator"
import { AnimatePresence } from "framer-motion"

console.log("TerminalIntro component file is being parsed...")

// -- Variants for Framer Motion animations --
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1.2,
      staggerChildren: 0.4,
      ease: "easeOut"
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
}

// Subtle radial background movement
const radialVariants: Variants = {
  initial: { rotate: 0, scale: 1 },
  animate: {
    rotate: [0, 20, 0],
    scale: [1, 1.05, 1],
    transition: {
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
}

export default function TerminalIntro({ onComplete }: { onComplete?: () => void }) {
  console.log("TerminalIntro component function is running...")

  const [showScroll, setShowScroll] = useState(true)

  useEffect(() => {
    console.log("TerminalIntro mounted on the client!")
    return () => console.log("TerminalIntro unmounting from the client!")
  }, [])

  useEffect(() => {
    onComplete?.()
  }, [onComplete])

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      setShowScroll(position < 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      key="final-screen"
      className="relative flex flex-col items-center justify-center 
                 h-screen overflow-hidden p-6 text-center
                 bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200 
                 border border-matcha-500/20"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* -- Optional subtle texture overlay -- */}
      <div
        className="pointer-events-none absolute inset-0 
                   bg-[url('/images/noise-texture.png')] 
                   bg-center bg-cover opacity-10"
      />

      {/* -- Gold radial accent with animation -- */}
      <motion.div 
        className="absolute -top-1/4 -left-1/4 w-3/4 h-3/4
                   bg-gradient-radial from-[#d4af37]/15 via-[#f4cd6c]/10 to-transparent
                   blur-[100px]"
        variants={radialVariants}
        initial="initial"
        animate="animate"
      />

      {/* -- Matcha radial accent with animation -- */}
      <motion.div 
        className="absolute -bottom-1/4 -right-1/4 w-3/4 h-3/4
                   bg-gradient-radial from-matcha-400/20 via-matcha-300/15 to-transparent
                   rotate-180 blur-[100px]"
        variants={radialVariants}
        initial="initial"
        animate="animate"
      />

      {/* -- Main content container, also staggerChildren -- */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        variants={containerVariants}
      >
        {/* -- Heading with responsive sizing & hover scale -- */}
        <motion.h1
          className="font-bold mb-6 bg-clip-text text-transparent
                     bg-gradient-to-r from-matcha-600 via-matcha-400 to-matcha-600
                     drop-shadow-sm cursor-pointer
                     text-6xl md:text-8xl lg:text-[120px]
                     transition-colors duration-300
                     hover:from-matcha-500 hover:via-matcha-300 hover:to-matcha-500"
          variants={itemVariants}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
        >
          Matcha
        </motion.h1>

        {/* -- Tagline -- */}
        <motion.p
          className="text-2xl md:text-3xl font-semibold tracking-tight mb-8"
          variants={itemVariants}
        >
          <span className="text-stone-600">
            Stop Searching,{" "}
          </span>
          <span className="flowing-gradient-gold text-transparent">
            Start Matching
          </span>
        </motion.p>

        {/* -- Description & CTA -- */}
        <motion.div
          className="max-w-2xl mx-auto space-y-8"
          variants={itemVariants}
        >
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed">
            Our AI-powered platform revolutionizes recruitment by creating perfect
            matches between exceptional talent and outstanding opportunities.
          </p>

          <p className="text-matcha-500 text-sm tracking-[0.2em] font-medium">
            LAUNCHING SPRING 2025
          </p>

          {/* -- Enhanced EmailSignup styling -- */}
          <EmailSignup
            className="max-w-sm mx-auto shadow-md shadow-matcha-400/20 
                       rounded-lg transition-all 
                       hover:shadow-lg hover:shadow-matcha-400/30"
            // You can pass custom buttonLabel, placeholderText, etc. if supported
            // buttonLabel="Request Early Access"
          />
        </motion.div>

        {/* -- Scroll Indicator with conditional rendering -- */}
        <AnimatePresence>
          {showScroll && (
            <motion.div 
              className="fixed bottom-8 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <ScrollIndicator
                onClick={() => {
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth",
                  })
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
