'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useIsMobile from "@/hooks/useIsMobile"

export default function Navigation() {
  const [activeModal, setActiveModal] = useState<'about' | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useIsMobile()

  const closeModal = () => setActiveModal(null)

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center px-4 md:px-8 pt-6 md:pt-8">
        {/* Logo */}
        <div className="relative w-24 md:w-32">
          {/* Your logo */}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <span className="text-stone-400 text-2xl mr-4">[</span>
          <button
            onClick={() => setActiveModal('about')}
            className="text-stone-600 hover:text-stone-800 transition-colors text-base px-4 py-2"
          >
            About
          </button>
          <span className="text-stone-400 text-2xl ml-4">]</span>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
        >
          <motion.div
            animate={isMenuOpen ? "open" : "closed"}
            className="space-y-2"
          >
            <motion.span className="block w-6 h-0.5 bg-stone-800" />
            <motion.span className="block w-6 h-0.5 bg-stone-800" />
            <motion.span className="block w-6 h-0.5 bg-stone-800" />
          </motion.div>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white/80 backdrop-blur-sm shadow-lg"
            >
              <div className="p-4">
                <button
                  onClick={() => {
                    setActiveModal('about')
                    setIsMenuOpen(false)
                  }}
                  className="block w-full py-2 text-stone-800 hover:text-matcha-600 text-left"
                >
                  About
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence mode="wait">
        {activeModal === 'about' && (
          <div className="fixed inset-0 flex items-center justify-center">
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />

            {/* Modal Content */}
            <motion.div 
              className="relative bg-white rounded-lg p-12 w-[800px] max-w-[90vw] shadow-lg"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 w-8 h-8 rounded-full 
                         bg-black/5 text-stone-400 hover:bg-black/10 
                         transition-colors flex items-center justify-center"
              >
                ×
              </button>

              <motion.div 
                className={`space-y-${isMobile ? '4' : '6'}`}
                variants={modalVariants}
              >
                <motion.h2 
                  className={`${isMobile ? 'text-xl' : 'text-4xl'} font-primary text-stone-800`}
                  variants={itemVariants}
                >
                  ABOUT MATCHA
                </motion.h2>

                <div className={`space-y-${isMobile ? '4' : '6'} ${isMobile ? 'text-sm' : 'text-lg'} text-stone-600 font-body`}>
                  <motion.div 
                    className={`space-y-${isMobile ? '2' : '4'}`}
                    variants={itemVariants}
                  >
                    <h3 className={`${isMobile ? 'text-lg' : 'text-2xl'} text-stone-800 font-primary`}>The Problem</h3>
                    <p>
                      The current recruitment landscape is fractured and inefficient. Job seekers navigate 
                      a frustrating maze of disconnected platforms, while employers waste resources 
                      managing multiple recruitment tools and sifting through countless applications.
                    </p>
                  </motion.div>

                  <motion.div 
                    className={`space-y-${isMobile ? '2' : '4'}`}
                    variants={itemVariants}
                  >
                    <h3 className={`${isMobile ? 'text-lg' : 'text-2xl'} text-stone-800 font-primary`}>Our Solution</h3>
                    <p>
                      Matcha is a revolutionary AI-driven recruitment platform that unifies the entire 
                      hiring process. We provide intelligent job matching for candidates and sophisticated 
                      recruitment automation for employers, creating perfect matches while reducing 
                      operational inefficiency.
                    </p>
                  </motion.div>

                  <motion.div 
                    className={`${isMobile ? 'flex-col space-y-3' : 'flex gap-4'} mt-${isMobile ? '4' : '6'}`}
                    variants={itemVariants}
                  >
                    <div className="flex-1 p-3 bg-stone-50 rounded-lg border border-stone-100">
                      <h4 className={`${isMobile ? 'text-base' : 'text-xl'} text-matcha-800 font-primary mb-2`}>For Candidates</h4>
                      <p className={`${isMobile ? 'text-xs' : 'text-sm'}`}>
                        Maintain one comprehensive profile and receive curated job opportunities that 
                        align with both your experience and preferences.
                      </p>
                    </div>

                    <div className="flex-1 p-3 bg-stone-50 rounded-lg border border-stone-100">
                      <h4 className={`${isMobile ? 'text-base' : 'text-xl'} text-matcha-800 font-primary mb-2`}>For Employers</h4>
                      <p className={`${isMobile ? 'text-xs' : 'text-sm'}`}>
                        Access sophisticated AI-driven recruitment tools with streamlined interview 
                        pipelines and robust talent sourcing capabilities.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  )
}