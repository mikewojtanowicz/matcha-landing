import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface CompetitorCard {
  name: string
  location: string
  users: string
  description: string
  gradient: string
  textGradient: string
  icon: string
}

const competitors: CompetitorCard[] = [
  {
    name: "LinkedIn",
    location: "Sunnyvale, CA",
    users: "900M+",
    description: "Endless scrolling through irrelevant job posts, lost in a sea of cold connections. Your profile is just another drop in an ocean of digital noise.",
    gradient: "from-[#0A66C2] via-[#0077b5] to-[#0A66C2]",
    textGradient: "from-[#0077b5] via-[#00a0dc] to-[#0077b5]",
    icon: "linkedin"
  },
  {
    name: "ZipRecruiter",
    location: "Santa Monica, CA",
    users: "110M+",
    description: "One-click applications flooding employer inboxes. Your resume competes with thousands of unqualified candidates in a race to the bottom.",
    gradient: "from-[#00E474] via-[#00FF84] to-[#00E474]",
    textGradient: "from-[#004B27] via-[#006435] to-[#004B27]",
    icon: "zip"
  },
  {
    name: "Matcha",
    location: "San Francisco, CA",
    users: "Coming Soon",
    description: "One unified platform that works for both sides of the hiring equation. We don't just connect employers with talent, we Matcha candidates with the opportunity that is right for them.",
    gradient: "from-[#467242] via-[#598f53] to-[#76ab70]",
    textGradient: "from-[#598f53] via-[#76ab70] to-[#598f53]",
    icon: "matcha"
  }
]

export default function CompetitorSwiper({ onComplete }: { onComplete: () => void }) {
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
        if (currentIndex === competitors.length - 1) {
          onComplete()
          return
        }
        
        setCurrentIndex(nextIndex)
        setNextIndex((nextIndex + 1) % competitors.length)
        setDirection(0)
        setIsAnimating(false)
      }, 500)
    }

    const interval = setInterval(startSwipeSequence, 4000)
    return () => clearInterval(interval)
  }, [currentIndex, nextIndex, onComplete])

  const cardVariants = {
    enter: {
      x: 0,
      opacity: 0,
      scale: 0.95,
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1]
      }
    },
    exit: (direction: number) => ({
      x: direction * 400,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1]
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
          <div className={`
            w-[340px] h-[480px] rounded-2xl shadow-xl overflow-hidden
            bg-gradient-to-br ${competitors[currentIndex].gradient}
            flex flex-col
          `}>
            <div className="p-8 space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className={`
                    text-4xl font-bold bg-gradient-to-r ${competitors[currentIndex].textGradient}
                    bg-clip-text text-transparent
                  `}>
                    {competitors[currentIndex].name}
                  </h1>
                  <div className="flex items-center gap-2 mt-2 text-white/80">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    </svg>
                    <span className="text-sm">{competitors[currentIndex].location}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-white/80">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                    </svg>
                    <span className="text-sm">{competitors[currentIndex].users} Users</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-white/90 text-lg font-medium">Description</h2>
                <p className="text-white/80 leading-relaxed">
                  {competitors[currentIndex].description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
} 