'use client'

import { motion, useAnimationControls, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function ResumeAnalysis() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const controls = useAnimationControls()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const jobs = [
    { title: "Senior Frontend Engineer", match: "98%" },
    { title: "Full Stack Developer", match: "95%" },
    { title: "Tech Lead", match: "92%" }
  ]

  return (
    <div ref={containerRef} className="flex items-center justify-between w-full">
      {/* Left side - Description */}
      <div className="w-1/2 pr-12 space-y-6">
        <h2 className="flowing-gradient-gold text-transparent text-4xl md:text-5xl font-bold">
          Smart Resume Analysis
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Upload your resume and let our AI do the work. We analyze your experience
          and skills to find the perfect matches from thousands of opportunities.
        </p>
      </div>

      {/* Right side - Animation */}
      <div className="w-1/2 flex justify-center">
        <div className="relative w-[500px] h-[400px]">
          {/* Resume */}
          <motion.div
            variants={{
              hidden: { x: -100, opacity: 0 },
              visible: {
                x: 200,
                opacity: [0, 1, 1, 0],
                transition: { duration: 2 }
              }
            }}
            initial="hidden"
            animate={controls}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-80 
                       bg-white/5 backdrop-blur-sm rounded-lg border 
                       border-emerald-500/20 p-6"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-400/20" />
                <div className="space-y-2">
                  <div className="h-3 w-32 bg-emerald-400/20 rounded" />
                  <div className="h-2 w-24 bg-emerald-400/20 rounded" />
                </div>
              </div>
              <div className="space-y-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="h-2 bg-emerald-400/20 rounded"
                    style={{ width: `${Math.random() * 30 + 60}%` }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Job Matches */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-4 w-64">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { x: 50, opacity: 0 },
                  visible: {
                    x: 0,
                    opacity: 1,
                    transition: { duration: 0.5, delay: 1.5 + (i * 0.2) }
                  }
                }}
                initial="hidden"
                animate={controls}
                className="p-4 bg-emerald-500/10 backdrop-blur-sm rounded-lg 
                           border border-emerald-500/20"
              >
                <div className="flex justify-between items-center">
                  <span className="text-emerald-400 font-medium">{job.title}</span>
                  <span className="text-emerald-400/60 text-sm">{job.match}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 