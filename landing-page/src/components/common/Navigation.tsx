'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CountdownTimer from './CountdownTimer'

export default function Navigation() {
  const [activeModal, setActiveModal] = useState<'about' | 'contact' | null>(null)

  const closeModal = () => setActiveModal(null)

  return (
    <div className="relative z-50">
      {/* Navigation buttons */}
      <div className="fixed top-8 left-8 flex items-center text-base tracking-wider">
        <span className="text-stone-400 text-lg">[</span>
        <button
          onClick={() => setActiveModal('about')}
          className="px-4 py-2 text-stone-600 hover:text-stone-900 transition-colors duration-300 text-lg"
        >
          ABOUT
        </button>
        <span className="mx-2 text-stone-400 select-none text-lg">|</span>
        <button
          onClick={() => setActiveModal('contact')}
          className="px-4 py-2 text-stone-600 hover:text-stone-900 transition-colors duration-300 text-lg"
        >
          CONTACT
        </button>
        <span className="text-stone-400 text-lg">]</span>
      </div>

      {/* Countdown Timer */}
      <div className="fixed top-8 right-8 flex items-center text-base tracking-wider">
        <span className="text-stone-400 text-lg">[</span>
        <div className="px-4 py-2">
          <CountdownTimer />
        </div>
        <span className="text-stone-400 text-lg">]</span>
      </div>

      {/* Modal */}
      {activeModal && (
        <div className="fixed inset-0 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Modal Content */}
          <div className="relative bg-white rounded-lg p-12 w-[800px] max-w-[90vw] shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 w-8 h-8 rounded-full 
                       bg-black/5 text-stone-400 hover:bg-black/10 
                       transition-colors flex items-center justify-center"
            >
              ×
            </button>

            {activeModal === 'about' && (
              <div className="space-y-8">
                <h2 className="text-4xl font-light text-stone-800">
                  ABOUT
                </h2>

                <div className="space-y-6 text-lg text-stone-600">
                  <p>
                    We're currently working on creating something fantastic.
                  </p>
                  
                  <p>
                    Our platform revolutionizes the job search and recruitment process through 
                    advanced AI technology. We seamlessly connect talented individuals 
                    with their ideal employment opportunities while helping employers find their 
                    perfect candidates.
                  </p>

                  <p>
                    Founded by a team of AI experts and HR professionals, we're committed to 
                    making job matching more efficient, accurate, and enjoyable for everyone 
                    involved in the hiring process.
                  </p>
                </div>
              </div>
            )}

            {activeModal === 'contact' && (
              <div className="space-y-8">
                <h2 className="text-4xl font-light text-stone-800">
                  CONTACT
                </h2>

                <div className="space-y-6">
                  <p className="text-lg text-stone-600">
                    Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                  </p>

                  <form className="space-y-4">
                    <div className="space-y-2">
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-matcha-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-matcha-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <textarea
                        placeholder="Message"
                        rows={4}
                        className="w-full p-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-matcha-400"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-stone-900 text-white py-3 rounded-lg hover:bg-stone-800 transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}