'use client'

import { motion, HTMLMotionProps, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Feature {
  name: string
  description: string
  competitors: {
    linkedin: boolean
    ziprecruiter: boolean
    indeed: boolean
    matcha: boolean
  }
}

export default function CompetitorComparison() {
  const [showComparison, setShowComparison] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isSlidingOut, setIsSlidingOut] = useState(false)
  const [direction, setDirection] = useState<"left" | "right">("left")
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)
  const [shouldAnimate, setShouldAnimate] = useState(false)

  const features: Feature[] = [
    {
      name: "AI-Powered Matching",
      description: "Deep learning algorithms that understand both technical skills and soft factors",
      competitors: {
        linkedin: false,
        ziprecruiter: true,
        indeed: false,
        matcha: true
      }
    },
    {
      name: "Direct Communication",
      description: "Secure, real-time chat between qualified candidates and hiring managers",
      competitors: {
        linkedin: true,
        ziprecruiter: false,
        indeed: false,
        matcha: true
      }
    },
    {
      name: "Automated Screening",
      description: "Smart pre-screening with customized questions based on the role",
      competitors: {
        linkedin: false,
        ziprecruiter: false,
        indeed: false,
        matcha: true
      }
    },
    {
      name: "Voice Responses",
      description: "Record verbal responses to showcase communication skills",
      competitors: {
        linkedin: false,
        ziprecruiter: false,
        indeed: false,
        matcha: true
      }
    },
    {
      name: "Real-time Analytics",
      description: "Detailed insights into application performance and market trends",
      competitors: {
        linkedin: true,
        ziprecruiter: false,
        indeed: false,
        matcha: true
      }
    },
    {
      name: "Smart Scheduling",
      description: "Automated interview scheduling with calendar integration",
      competitors: {
        linkedin: false,
        ziprecruiter: false,
        indeed: false,
        matcha: true
      }
    }
  ]

  const platforms = [
    {
      name: "LinkedIn",
      location: "Sunnyvale, CA",
      users: "900M+",
      description: "Endless scrolling through irrelevant job posts, lost in a sea of cold connections. Your profile is just another drop in an ocean of digital noise.",
      gradient: "from-[#0A66C2] via-[#0077b5] to-[#0A66C2]",
      textGradient: "from-[#0077b5] via-[#00a0dc] to-[#0077b5]",
    },
    {
      name: "ZipRecruiter",
      location: "Santa Monica, CA",
      users: "110M+",
      description: "One-click applications flooding employer inboxes. Your resume competes with thousands of unqualified candidates in a race to the bottom.",
      gradient: "from-[#00E474] via-[#00FF84] to-[#00E474]",
      textGradient: "from-[#004B27] via-[#006435] to-[#004B27]",
    },
    {
      name: "Indeed",
      location: "Austin, TX",
      users: "350M+",
      description: "A sea of resumes and job postings with no meaningful connections. Quantity over quality leaves both sides frustrated.",
      gradient: "from-[#2164f3] via-[#4b84ff] to-[#2164f3]",
      textGradient: "from-[#4b84ff] via-[#6b9fff] to-[#4b84ff]",
    },
    {
      name: "Matcha",
      location: "New York, NY",
      users: "Coming Soon",
      description: "One unified platform that works for both sides of the hiring equation. We don't just connect employers with talent, we Matcha candidates with the opportunity that is right for them.",
      gradient: "from-[#a6cc65] via-[#76ab70] to-[#366802]",
      textGradient: "from-[#366802] via-[#366802] to-[#366802]",
    }
  ]

  const companyLogos = {
    linkedin: '/logos/linkedin-logo.png',
    ziprecruiter: '/logos/ziprecruiter-logo.png',
    indeed: '/logos/indeed-logo.svg',
    matcha: '/logos/matcha-logo.png'
  }

  // Swipe handler
  const handleSwipe = (swipeDirection: "left" | "right") => {
    if (isSlidingOut) return
    setDirection(swipeDirection)
    setIsSlidingOut(true)
  }

  const finalizeCardExit = () => {
    setIsSlidingOut(false)
    if (currentIndex < platforms.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setShowComparison(true)
    }
  }

  // Replace the existing useEffect with this new one
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldAnimate(true)
        }
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById('competitor-cards')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  // Modify the auto-swipe logic to only run when shouldAnimate is true
  useEffect(() => {
    if (!isSlidingOut && shouldAnimate) {
      const isLast = currentIndex === platforms.length - 1
      const timer = setTimeout(() => {
        if (!isSlidingOut) {
          handleSwipe(isLast ? "right" : "left")
        }
      }, 2750)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, isSlidingOut, shouldAnimate])

  if (showComparison) {
    return (
      <section className="w-full bg-stone-100">
        <div className="w-full max-w-6xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2 
              as="h2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-16"
            >
              <span className="text-stone-900">Why Choose</span>{' '}
              <span className="flowing-gradient text-transparent bg-clip-text">
                Matcha
              </span>
            </motion.h2>

            <div className="relative overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-stone-200">
                    <th className="py-8 px-6 text-left w-1/3">Feature</th>
                    {/* Updated Company Headers */}
                    {['linkedin', 'ziprecruiter', 'indeed', 'matcha'].map((company) => (
                      <th key={company} className="py-8 px-6 text-center">
                        <motion.div
                          as="div"
                          whileHover={{ scale: 1.05 }}
                          className="inline-flex flex-col items-center space-y-4"
                        >
                          {company === 'matcha' ? (
                            <div className="flex flex-col items-center">
                              <div className="h-6 w-6 relative mb-6">
                                <Image 
                                  src="/logos/matcha-icon.png"
                                  alt="Matcha icon"
                                  width={24}
                                  height={24}
                                />
                              </div>
                              <div className="h-7 relative mb-1">
                                <Image
                                  src="/logos/matcha-title-standard.png"
                                  alt="Matcha"
                                  width={100}
                                  height={28}
                                  className="object-contain"
                                />
                              </div>
                              <span className="text-sm text-matcha-800">That's us!</span>
                            </div>
                          ) : (
                            <div className="flex flex-col items-center">
                              <div className="h-6 w-6 relative mb-6">
                                <Image 
                                  src={companyLogos[company as keyof typeof companyLogos]}
                                  alt={`${company} logo`}
                                  width={24}
                                  height={24}
                                  className={`opacity-70 ${
                                    company === 'ziprecruiter' 
                                      ? 'scale-[3.5]'
                                      : company === 'linkedin' || company === 'indeed'
                                        ? 'scale-[1.5]'
                                        : ''
                                  }`}
                                />
                              </div>
                              <span className="text-base font-medium text-stone-600 mb-[21px]">
                                {company.charAt(0).toUpperCase() + company.slice(1)}
                              </span>
                            </div>
                          )}
                        </motion.div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <motion.tr
                      key={feature.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      onMouseEnter={() => setHoveredFeature(feature.name)}
                      onMouseLeave={() => setHoveredFeature(null)}
                      className={`
                        border-b border-stone-200 transition-colors duration-200
                        ${hoveredFeature === feature.name ? 'bg-stone-50' : ''}
                      `}
                    >
                      <td className="py-4 px-6">
                        <div className="space-y-1">
                          <div className="font-medium">{feature.name}</div>
                          <div className="text-sm text-stone-500">{feature.description}</div>
                        </div>
                      </td>
                      {Object.entries(feature.competitors).map(([competitor, hasFeature]) => (
                        <td key={competitor} className="py-4 px-6 text-center">
                          <motion.div
                            as="div"
                            initial={false}
                            animate={hoveredFeature === feature.name ? { scale: 1.1 } : { scale: 1 }}
                          >
                            {hasFeature ? (
                              <motion.div
                                as="div"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className={`
                                  w-6 h-6 mx-auto rounded-full flex items-center justify-center
                                  ${competitor === 'matcha' ? 'bg-matcha-500' : 'bg-stone-200'}
                                `}
                              >
                                <CheckIcon 
                                  className={`w-4 h-4 ${competitor === 'matcha' ? 'text-white' : 'text-stone-600'}`}
                                />
                              </motion.div>
                            ) : (
                              <motion.div
                                as="div"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-6 h-6 mx-auto rounded-full bg-red-100 flex items-center justify-center"
                              >
                                <XIcon className="w-4 h-4 text-red-500" />
                              </motion.div>
                            )}
                          </motion.div>
                        </td>
                      ))}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  const slideOutX = direction === "left" ? -300 : 300
  const slideOutRotate = direction === "left" ? -20 : 20

  return (
    <motion.div 
      id="competitor-cards"
      className="h-screen flex flex-col items-center justify-center relative overflow-hidden bg-stone-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: shouldAnimate ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-[90vw] max-w-[340px] h-[480px] rounded-2xl shadow-xl overflow-hidden">
        <motion.div
          key={currentIndex}
          initial={{ x: 0, rotate: 0, opacity: 0 }}
          animate={{
            x: isSlidingOut ? slideOutX : 0,
            rotate: isSlidingOut ? slideOutRotate : 0,
            opacity: isSlidingOut ? 0 : 1,
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          onUpdate={(latest) => {
            if (isSlidingOut && latest.x === slideOutX) {
              finalizeCardExit()
            }
          }}
          className="absolute inset-0"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(_, info) => {
            if (Math.abs(info.offset.x) > 100) {
              handleSwipe(info.offset.x > 0 ? "right" : "left")
            }
          }}
        >
          {/* Card Content */}
          <div className={`
            w-full h-full rounded-xl p-6 relative
            bg-gradient-to-br ${platforms[currentIndex].gradient}
            border-2 border-white/20 shadow-xl
          `}>
            {/* Header Section with Logo and Title */}
            <div className="flex justify-between items-start mb-8">
              {/* Title Section */}
              <div>
                <h3 className={`
                  text-xl font-bold bg-gradient-to-r ${platforms[currentIndex].textGradient}
                  bg-clip-text text-transparent
                `}>
                  {platforms[currentIndex].name}
                </h3>
                <p className="text-white/70">
                  {platforms[currentIndex].location}
                </p>
              </div>

              {/* Logo Section */}
              <div className="w-24 h-16 relative flex items-center justify-end pr-4">
                {platforms[currentIndex].name.toLowerCase() === 'matcha' ? (
                  <Image
                    src="/logos/matcha-icon.png"
                    alt="Matcha"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                ) : (
                  <Image
                    src={companyLogos[platforms[currentIndex].name.toLowerCase() as keyof typeof companyLogos]}
                    alt={platforms[currentIndex].name}
                    width={48}
                    height={48}
                    className={`object-contain ${
                      platforms[currentIndex].name.toLowerCase() === 'linkedin' 
                        ? 'opacity-90'
                        : platforms[currentIndex].name.toLowerCase() === 'ziprecruiter'
                          ? 'brightness-0 invert opacity-100 scale-[2.5] -translate-x-2'
                          : 'brightness-0 invert opacity-100'
                    }`}
                  />
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-white/70">
                  👥 Users: {platforms[currentIndex].users}
                </p>
              </div>

              <p className="text-white/80 leading-relaxed">
                {platforms[currentIndex].description}
              </p>
            </div>

            {/* Swipe Indicator at bottom center of card */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: isSlidingOut ? 1 : 0,
                  scale: isSlidingOut ? 1.1 : 0.9,
                }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center gap-2"
              >
                <div className={`
                  px-6 py-3 rounded-xl font-bold text-2xl
                  ${currentIndex === platforms.length - 1 
                    ? "text-matcha-500 border-4 border-matcha-500"
                    : "text-red-500 border-4 border-red-500"
                  }
                `}>
                  {currentIndex === platforms.length - 1 ? "APPLY" : "SKIP"}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Dots to indicate progress */}
      <div className="flex gap-2 mt-8">
        {platforms.map((_, index) => (
          <div
            key={index}
            className={`
              w-2 h-2 rounded-full transition-colors duration-300
              ${index === currentIndex ? "bg-matcha-500" : "bg-stone-300"}
            `}
          />
        ))}
      </div>
    </motion.div>
  )
}

// Helper Icon Components
const CheckIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className}
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M5 13l4 4L19 7" 
    />
  </svg>
)

const XIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className}
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M6 18L18 6M6 6l12 12" 
    />
  </svg>
) 