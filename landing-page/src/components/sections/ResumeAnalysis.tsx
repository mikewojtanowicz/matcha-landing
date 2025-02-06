'use client'

import { motion, useAnimationControls, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import useIsMobile from '@/hooks/useIsMobile'

export default function ResumeAnalysis() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const controls = useAnimationControls()
  const isMobile = useIsMobile()

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
    <section className="w-screen min-w-screen bg-cream-50">
      <div className="w-full max-w-6xl mx-auto px-6 py-24">
        <div ref={containerRef} className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-2 gap-12'}`}>
          {/* Left side - Description */}
          <div className="flex items-center">
            <div className="space-y-6">
              <h2 className="flowing-gradient-gold text-transparent text-4xl md:text-5xl font-bold">
                Smart Resume Analysis
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed">
                Upload your resume and let our AI do the work. We analyze your experience
                and skills to find the perfect matches from thousands of opportunities.
              </p>
            </div>
          </div>

          {/* Right side - Animation */}
          <div className={`relative ${
            isMobile 
              ? 'h-[360px] -mt-8 mb-12' 
              : 'h-[460px]'
          } flex items-center justify-center`}>
            <div className={`relative ${isMobile ? 'w-full max-w-[400px]' : 'w-[500px]'} h-[400px]`}>
              {/* Resume */}
              <motion.div
                variants={{
                  hidden: { x: -100, opacity: 0 },
                  visible: {
                    x: isMobile ? 200 : 500,
                    opacity: [0, 1, 1, 0],
                    transition: { 
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 4,
                      repeatType: "loop"
                    }
                  }
                }}
                initial="hidden"
                animate={controls}
                className={`absolute left-0 top-1/2 -translate-y-1/2 ${isMobile ? 'w-56' : 'w-64'} h-80 
                           bg-white backdrop-blur-sm rounded-lg border 
                           border-matcha-500/20 p-6`}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-matcha-400/20" />
                    <div className="space-y-2">
                      <div className="h-3 w-32 bg-matcha-400/20 rounded" />
                      <div className="h-2 w-24 bg-matcha-400/20 rounded" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="h-2 bg-matcha-400/20 rounded"
                        style={{ width: `${Math.random() * 30 + 60}%` }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Job Matches */}
              <div className={`absolute right-0 top-1/2 -translate-y-1/2 space-y-4 ${isMobile ? 'w-56' : 'w-64'}`}>
                {jobs.map((job, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { x: 50, opacity: 0 },
                      visible: {
                        x: 0,
                        opacity: [0, 1, 1, 0],
                        transition: { 
                          duration: 3,
                          delay: 1.5 + (i * 0.2),
                          repeat: Infinity,
                          repeatDelay: 3,
                          repeatType: "loop"
                        }
                      }
                    }}
                    initial="hidden"
                    animate={controls}
                    className="p-4 bg-matcha-500/10 backdrop-blur-sm rounded-lg 
                             border border-matcha-500/20"
                  >
                    <div className="flex justify-between items-center">
                      <span className={`text-matcha-400 font-medium ${isMobile ? 'text-sm' : ''}`}>
                        {job.title}
                      </span>
                      <span className="text-matcha-400/60 text-sm">{job.match}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 