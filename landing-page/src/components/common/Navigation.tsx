'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [showAbout, setShowAbout] = useState(false)

  return (
    <div className="relative z-50">
      <button
        onClick={() => setShowAbout(true)}
        className="fixed top-8 right-8 px-6 py-2 rounded-full bg-black/30 backdrop-blur-sm 
                   text-emerald-400 border border-emerald-400/20 hover:bg-emerald-400/10 
                   transition-all duration-300"
      >
        About Us
      </button>

      {showAbout && (
        <div className="fixed inset-0 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowAbout(false)}
          />

          {/* Modal */}
          <div className="relative bg-black/90 border border-emerald-400/20 rounded-2xl 
                         p-12 w-[800px] shadow-[0_0_50px_-12px] shadow-emerald-500/10">
            <button
              onClick={() => setShowAbout(false)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full 
                         bg-black/50 text-emerald-400 hover:bg-emerald-400/10 
                         transition-colors flex items-center justify-center"
            >
              ×
            </button>

            <div className="space-y-8">
              <h2 className="flowing-gradient-gold text-transparent text-4xl font-bold">
                About Matcha
              </h2>

              <div className="space-y-6 text-lg text-gray-300">
                <p>
                  Matcha is revolutionizing the job search and recruitment process through 
                  advanced AI technology. Our platform seamlessly connects talented individuals 
                  with their ideal employment opportunities while helping employers find their 
                  perfect candidates.
                </p>
                
                <p>
                  Founded by a team of AI experts and HR professionals, we're committed to 
                  making job matching more efficient, accurate, and enjoyable for everyone 
                  involved in the hiring process.
                </p>

                <div className="space-y-4 pt-4">
                  <h3 className="text-2xl text-emerald-400 font-semibold">Our Mission</h3>
                  <p>
                    To transform the traditional hiring process by leveraging AI to create 
                    perfect matches between candidates and opportunities, saving time and 
                    reducing friction for both applicants and employers.
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="text-2xl text-emerald-400 font-semibold">Key Features</h3>
                  <ul className="space-y-3 list-disc pl-6">
                    <li>AI-powered profile analysis and job matching</li>
                    <li>Automated screening process with voice or text responses</li>
                    <li>Smart scheduling and interview management</li>
                    <li>Real-time application tracking and feedback</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 