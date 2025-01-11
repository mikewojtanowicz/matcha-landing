'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import CompanyLogo from '@/components/common/CompanyLogo'

const mockJobs = [
  {
    company: 'Google',
    role: 'Senior Frontend Engineer',
    location: 'Mountain View, CA',
    salary: '$200k - $350k',
    match: 98,
    tags: ['React', 'TypeScript', 'Cloud']
  },
  {
    company: 'Apple',
    role: 'iOS Developer',
    location: 'Cupertino, CA',
    salary: '$180k - $320k',
    match: 95,
    tags: ['Swift', 'iOS', 'Mobile']
  },
  {
    company: 'Microsoft',
    role: 'Full Stack Developer',
    location: 'Redmond, WA',
    salary: '$190k - $340k',
    match: 93,
    tags: ['Azure', 'Node.js', 'React']
  },
] as const

export default function JobMatching() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setTimeout(() => {
        setCurrentIndex((current) => (current + 1) % mockJobs.length)
        setDirection(0)
      }, 400)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-2 gap-12">
      {/* Left side - Content */}
      <div className="space-y-6">
        <h2 className="flowing-gradient-gold text-transparent bg-clip-text text-4xl md:text-5xl font-bold">
          Jobs Find You
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Stop searching endlessly. Our AI brings highly relevant opportunities directly 
          to you, perfectly matched with your profile and career goals.
        </p>
      </div>

      {/* Right side - Card Swiper */}
      <div className="flex items-center justify-center">
        <div className="relative w-[340px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 25
              }}
              className="w-[340px] bg-black/60 backdrop-blur-lg rounded-xl p-6
                         border-2 border-emerald-500/20 shadow-[0_0_15px_rgba(52,211,153,0.1)]"
            >
              <div className="space-y-4">
                <CompanyLogo company={mockJobs[currentIndex].company} />
                
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {mockJobs[currentIndex].role}
                  </h3>
                  <p className="text-emerald-400">
                    {mockJobs[currentIndex].company}
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-gray-400">
                    📍 {mockJobs[currentIndex].location}
                  </p>
                  <p className="text-gray-400">
                    💰 {mockJobs[currentIndex].salary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {mockJobs[currentIndex].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-sm bg-emerald-500/10 
                               text-emerald-400 border border-emerald-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute top-4 right-4">
                  <span className="text-emerald-400 font-bold">
                    {mockJobs[currentIndex].match}% Match
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}