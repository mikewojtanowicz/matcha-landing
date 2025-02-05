'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useIsMobile from "@/hooks/useIsMobile"

export default function Navigation() {
  const [activeModal, setActiveModal] = useState<'about' | 'contact' | null>(null)
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="flex justify-between items-center px-4 md:px-8 py-4 md:py-6">
        {/* Logo */}
        <div className="relative w-24 md:w-32">
          {/* Your logo */}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <span className={`text-stone-400 ${isMobile ? 'text-[12px] mr-1' : 'text-2xl mr-4'}`}>[</span>
          <button
            onClick={() => setActiveModal('about')}
            className={`text-stone-600 hover:text-stone-800 transition-colors
              ${isMobile ? 'text-[10px] px-1.5 py-0.5' : 'text-base px-4 py-2'}`}
          >
            About
          </button>
          <span className={`text-stone-400 ${isMobile ? 'mx-1' : 'mx-4'}`}>|</span>
          <button
            onClick={() => setActiveModal('contact')}
            className={`text-stone-600 hover:text-stone-800 transition-colors
              ${isMobile ? 'text-[10px] px-1.5 py-0.5' : 'text-base px-4 py-2'}`}
          >
            Contact
          </button>
          <span className={`text-stone-400 ${isMobile ? 'text-[12px] ml-1' : 'text-2xl ml-4'}`}>]</span>
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
              className="absolute top-full left-0 right-0 bg-white shadow-lg"
            >
              <div className="p-4 space-y-4">
                {/* Mobile menu items */}
                <a href="#" className="block py-2 text-stone-800 hover:text-matcha-600">
                  About
                </a>
                <a href="#" className="block py-2 text-stone-800 hover:text-matcha-600">
                  Contact
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence mode="wait">
        {activeModal && (
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

              {activeModal === 'about' && (
                <motion.div 
                  className="space-y-10"
                  variants={modalVariants}
                >
                  <motion.h2 
                    className="text-4xl font-primary text-stone-800"
                    variants={itemVariants}
                  >
                    ABOUT MATCHA
                  </motion.h2>

                  <div className="space-y-8 text-lg text-stone-600 font-body">
                    <motion.div 
                      className="space-y-6"
                      variants={itemVariants}
                    >
                      <h3 className="text-2xl text-stone-800 font-primary">The Problem</h3>
                      <p>
                        The current recruitment landscape is fractured and inefficient. Job seekers navigate 
                        a frustrating maze of disconnected platforms, while employers waste resources 
                        managing multiple recruitment tools and sifting through countless applications.
                      </p>
                    </motion.div>

                    <motion.div 
                      className="space-y-6"
                      variants={itemVariants}
                    >
                      <h3 className="text-2xl text-stone-800 font-primary">Our Solution</h3>
                      <p>
                        Matcha is a revolutionary AI-driven recruitment platform that unifies the entire 
                        hiring process. We provide intelligent job matching for candidates and sophisticated 
                        recruitment automation for employers, creating perfect matches while reducing 
                        operational inefficiency.
                      </p>
                    </motion.div>

                    <motion.div 
                      className="flex gap-8 mt-8"
                      variants={itemVariants}
                    >
                      <div className="flex-1 p-6 bg-stone-50 rounded-lg border border-stone-100">
                        <h4 className="text-xl text-matcha-800 font-primary mb-4">For Candidates</h4>
                        <p className="text-base">
                          Maintain one comprehensive profile and receive curated job opportunities that 
                          align with both your experience and preferences.
                        </p>
                      </div>

                      <div className="flex-1 p-6 bg-stone-50 rounded-lg border border-stone-100">
                        <h4 className="text-xl text-matcha-800 font-primary mb-4">For Employers</h4>
                        <p className="text-base">
                          Access sophisticated AI-driven recruitment tools with streamlined interview 
                          pipelines and robust talent sourcing capabilities.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {activeModal === 'contact' && (
                <motion.div 
                  className="space-y-8"
                  variants={modalVariants}
                >
                  <motion.h2 
                    className="text-4xl font-primary text-stone-800"
                    variants={itemVariants}
                  >
                    CONTACT
                  </motion.h2>

                  <motion.div 
                    className="space-y-6"
                    variants={itemVariants}
                  >
                    <p className="text-lg text-stone-600 font-body">
                      Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>

                    <form className="space-y-4">
                      <motion.div 
                        className="space-y-2"
                        variants={itemVariants}
                      >
                        <input
                          type="text"
                          placeholder="Name"
                          className="w-full p-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-matcha-400"
                        />
                      </motion.div>
                      <motion.div 
                        className="space-y-2"
                        variants={itemVariants}
                      >
                        <input
                          type="email"
                          placeholder="Email"
                          className="w-full p-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-matcha-400"
                        />
                      </motion.div>
                      <motion.div 
                        className="space-y-2"
                        variants={itemVariants}
                      >
                        <textarea
                          placeholder="Message"
                          rows={4}
                          className="w-full p-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-matcha-400"
                        />
                      </motion.div>
                      <motion.button
                        variants={itemVariants}
                        type="submit"
                        className="w-full bg-stone-900 text-white py-3 rounded-lg hover:bg-stone-800 transition-colors"
                      >
                        Send Message
                      </motion.button>
                    </form>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  )
}