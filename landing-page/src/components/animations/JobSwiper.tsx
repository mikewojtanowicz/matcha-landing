'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import CompanyLogo from '@/components/common/CompanyLogo'

const mockJobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Google",
    location: "Mountain View, CA",
    salary: "$200k - $350k",
    tags: ["Cloud", "AI/ML", "Distributed Systems"]
  },
  {
    id: 2,
    title: "Senior iOS Developer",
    company: "Apple",
    location: "Cupertino, CA",
    salary: "$180k - $320k",
    tags: ["Swift", "SwiftUI", "iOS"]
  },
  {
    id: 3,
    title: "Principal SDE",
    company: "Amazon",
    location: "Seattle, WA",
    salary: "$185k - $340k",
    tags: ["AWS", "Distributed Systems", "Java"]
  },
  {
    id: 4,
    title: "Platform Engineer",
    company: "Netflix",
    location: "Los Gatos, CA",
    salary: "$220k - $380k",
    tags: ["Cloud Infrastructure", "Microservices", "Java"]
  },
  {
    id: 5,
    title: "AI Engineer",
    company: "Microsoft",
    location: "Redmond, WA",
    salary: "$180k - $320k",
    tags: ["Azure", "ML", "Python"]
  },
  {
    id: 6,
    title: "GPU Architecture Engineer",
    company: "Nvidia",
    location: "Santa Clara, CA",
    salary: "$200k - $350k",
    tags: ["CUDA", "Hardware", "C++"]
  },
  {
    id: 7,
    title: "Autopilot Software Engineer",
    company: "Tesla",
    location: "Palo Alto, CA",
    salary: "$190k - $340k",
    tags: ["Computer Vision", "C++", "Python"]
  }
] as const

export default function JobSwiper() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState(1)
  const [direction, setDirection] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const startSwipeSequence = () => {
      const newDirection = currentIndex % 2 === 0 ? 1 : -1
      setIsAnimating(true)
      setDirection(newDirection)

      setTimeout(() => {
        setCurrentIndex(nextIndex)
        setNextIndex((nextIndex + 1) % mockJobs.length)
        setDirection(0)
        setIsAnimating(false)
      }, 500)
    }

    const interval = setInterval(startSwipeSequence, 4000)
    return () => clearInterval(interval)
  }, [currentIndex, nextIndex])

  const cardVariants = {
    enter: {
      x: 0,
      y: 20,
      opacity: 0,
      scale: 0.95,
      rotateZ: 0
    },
    center: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      rotateZ: 0,
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1]
      }
    },
    exit: (direction: number) => ({
      x: direction * 400,
      opacity: 0,
      scale: 0.9,
      rotateZ: direction * 20,
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1]
      }
    })
  }

  const cursorVariants = {
    initial: (direction: number) => ({
      y: 60,
      opacity: 0,
      scale: 1.2,
      rotate: 0
    }),
    animate: (direction: number) => ({
      y: [-20, -100],
      x: direction * 100,
      opacity: [0, 1, 1, 0],
      scale: 1.2,
      rotate: direction * 25,
      transition: {
        duration: 1,
        times: [0, 0.3, 0.7, 1],
        ease: "easeOut"
      }
    })
  }

  return (
    <div className="relative w-[340px] mx-auto" style={{ height: 480 }}>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          variants={cardVariants}
          initial="enter"
          animate="center"
          exit="exit"
          custom={direction}
          className="relative"
        >
          <motion.div
            className="w-[340px] h-[480px] bg-black/40 backdrop-blur-lg rounded-3xl p-6 border border-emerald-500/10
                       shadow-[0_0_50px_-12px] shadow-emerald-500/10"
            animate={{
              boxShadow: direction === 0 
                ? '0 0 50px -12px rgba(52, 211, 153, 0.1)'
                : direction > 0
                  ? '0 0 50px 0px rgba(52, 211, 153, 0.3)'
                  : '0 0 50px 0px rgba(239, 68, 68, 0.3)',
              borderColor: direction === 0
                ? 'rgba(52, 211, 153, 0.1)'
                : direction > 0
                  ? 'rgba(52, 211, 153, 0.3)'
                  : 'rgba(239, 68, 68, 0.3)',
              transition: { duration: 0.3 }
            }}
          >
            <div className="h-full flex flex-col">
              <CompanyLogo company={mockJobs[currentIndex].company} />
              
              <h3 className="text-2xl font-bold text-white mb-2">
                {mockJobs[currentIndex].title}
              </h3>
              <p className="text-emerald-400 text-lg mb-4">
                {mockJobs[currentIndex].company}
              </p>
              <p className="text-gray-400 mb-2">
                📍 {mockJobs[currentIndex].location}
              </p>
              <p className="text-gray-400 mb-6">
                💰 {mockJobs[currentIndex].salary}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {mockJobs[currentIndex].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <motion.div
              className="absolute inset-x-0 top-0 h-1 rounded-t-3xl"
              animate={{
                background: direction === 0
                  ? 'transparent'
                  : direction > 0
                    ? 'linear-gradient(to right, transparent, #34d399)'
                    : 'linear-gradient(to right, transparent, #ef4444)',
                opacity: Math.abs(direction)
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {isAnimating && (
            <motion.div
              key={`cursor-${currentIndex}`}
              variants={cursorVariants}
              initial="initial"
              animate="animate"
              custom={currentIndex % 2 === 0 ? 1 : -1}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
            >
              <div className="w-20 h-20 flex items-center justify-center">
                <span className="text-4xl filter drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]">
                  👆
                </span>
              </div>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="absolute top-4 left-1/2 -translate-x-1/2 -z-10 opacity-30 scale-95">
        <div className="w-[340px] h-[480px] bg-black/40 backdrop-blur-lg rounded-3xl p-6 border border-emerald-500/10">
          <div className="h-full flex flex-col">
            <CompanyLogo company={mockJobs[nextIndex].company} />
            
            <h3 className="text-2xl font-bold text-white mb-2">
              {mockJobs[nextIndex].title}
            </h3>
            <p className="text-emerald-400 text-lg mb-4">
              {mockJobs[nextIndex].company}
            </p>
            <p className="text-gray-400 mb-2">
              📍 {mockJobs[nextIndex].location}
            </p>
            <p className="text-gray-400 mb-6">
              💰 {mockJobs[nextIndex].salary}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {mockJobs[nextIndex].tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-sm bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 