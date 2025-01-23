'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  iPhoneVariants,
  outlineVariants,
  phoneContentVariants,
} from '@/components/animations/iPhoneOutline'

export default function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="w-screen min-w-screen bg-stone-100">
      <div className="w-full max-w-6xl mx-auto px-6 py-24">
        {/* Container ensures minimum hero height and vertical centering */}
        <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center relative">
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6">
            
            {/* ----------------- Left Side (Text + CTAs) ----------------- */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Find Your
                <br />
                <span className="flowing-gradient text-transparent bg-clip-text">
                  Perfect Match
                </span>
              </h1>
              
              <p className="text-xl text-stone-600 leading-relaxed max-w-xl">
                Our AI-powered platform revolutionizes job matching by understanding 
                candidates and employers at a deeper level—creating perfect fits that last.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn btn-primary px-8 py-4 text-lg">
                  Find Jobs
                </button>
                <button className="btn btn-secondary px-8 py-4 text-lg">
                  For Employers
                </button>
              </div>

              <div className="flex items-center gap-8 text-stone-500">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-matcha-500">98%</span>
                  <span className="text-sm">Match Rate</span>
                </div>
                <div className="w-px h-8 bg-stone-200" />
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-matcha-500">24hr</span>
                  <span className="text-sm">Response Time</span>
                </div>
                <div className="w-px h-8 bg-stone-200" />
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-matcha-500">10k+</span>
                  <span className="text-sm">Companies</span>
                </div>
              </div>
            </motion.div>

            {/* ----------------- Right Side (Animated iPhone) ----------------- */}
            <motion.div
              ref={ref}
              className="relative h-[520px] hidden lg:block" 
              /* Note: changed h-[600px] → h-[520px] */
              variants={iPhoneVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
            >
              {/* 1) The Outline-Tracing SVG */}
              <motion.svg
                className="absolute inset-0 m-auto"
                width="280"     /* changed from 300 → 280 to match path bounding box */
                height="520"    /* changed from 600 → 520 to match path bounding box */
                viewBox="10 40 280 520"
                fill="none"
                stroke="#22c55e"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={outlineVariants}
              >
                {/* Main outline */}
                <motion.path
                  d="
                    M50,40
                    h200
                    a40,40 0 0 1 40,40
                    v440
                    a40,40 0 0 1 -40,40
                    h-200
                    a40,40 0 0 1 -40,-40
                    v-440
                    a40,40 0 0 1 40,-40
                    z
                  "
                  variants={outlineVariants}
                />
                {/* Screen outline */}
                <motion.path
                  d="
                    M54,44
                    h192
                    a36,36 0 0 1 36,36
                    v440
                    a36,36 0 0 1 -36,36
                    h-192
                    a36,36 0 0 1 -36,-36
                    v-440
                    a36,36 0 0 1 36,-36
                    z
                  "
                  variants={outlineVariants}
                />
                {/* Notch */}
                <motion.path
                  d="
                    M120,40
                    h60
                    a10,10 0 0 1 10,10
                    v15
                    h-80
                    v-15
                    a10,10 0 0 1 10,-10
                  "
                  variants={outlineVariants}
                />
              </motion.svg>

              {/* 2) The Actual Phone Frame & Screen */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                variants={phoneContentVariants}
              >
                {/* 
                  Phone is now 280×520 instead of 300×600 so the outline 
                  and phone corners match perfectly when scaled.
                */}
                <div className="relative w-[280px] h-[520px]">
                  {/* Notch */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[110px] h-[25px]
                               bg-black rounded-b-2xl z-20"
                  />

                  {/* Outer Frame (rounded 40px corners) */}
                  <div className="absolute inset-0 bg-black rounded-[40px] shadow-2xl" />

                  {/* Screen Content (inset 4px, corners 36px) */}
                  <div className="absolute inset-[4px] bg-stone-100 rounded-[36px] overflow-hidden">
                    <div className="relative w-full h-full bg-gradient-to-b from-matcha-400/5 to-cream-200/20">
                      {/* Status Bar */}
                      <div className="h-12 flex items-center justify-between px-6">
                        <span className="text-sm font-medium">9:41</span>
                        <div className="flex items-center gap-2">
                          {/* Example icons */}
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" />
                          </svg>
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                          </svg>
                        </div>
                      </div>

                      {/* Example "App" Content */}
                      <div className="p-4 space-y-4">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="bg-white rounded-xl p-4 shadow-sm"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-matcha-400/20 rounded-full" />
                            <div className="space-y-1">
                              <div className="h-2 w-24 bg-stone-200 rounded" />
                              <div className="h-2 w-16 bg-stone-200 rounded" />
                            </div>
                          </div>
                        </motion.div>
                        {/* ...additional mock items... */}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
