'use client'

import { motion } from 'framer-motion'

export default function CandidateAnalysis() {
  const factors = [
    { category: "Technical Skills", score: 92 },
    { category: "Experience", score: 88 },
    { category: "Education", score: 95 },
    { category: "Industry Knowledge", score: 85 }
  ]

  return (
    <div className="grid grid-cols-2 gap-12">
      {/* Left side - Content */}
      <div className="space-y-6">
        <h2 className="flowing-gradient-gold text-transparent bg-clip-text text-4xl md:text-5xl font-bold">
          Holistic Candidate Analysis
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          We look at your complete profile - skills, experience, education, and industry knowledge
          to match you with roles where you'll have the highest chance of success.
        </p>
      </div>

      {/* Right side - ML Analysis Animation */}
      <div className="relative h-[400px] flex items-center justify-center">
        {/* Resume Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative w-[300px] h-[400px] bg-black/60 backdrop-blur-lg rounded-lg 
                     border-2 border-emerald-500/20 p-6 overflow-hidden"
        >
          {/* Scanning Line */}
          <motion.div
            initial={{ y: -400 }}
            animate={{ y: 400 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent 
                       via-emerald-400/50 to-transparent"
          />

          {/* Resume Content */}
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-400/20" />
              <div className="space-y-2">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  className="h-3 w-32 bg-emerald-400/20 rounded"
                />
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "80%" }}
                  className="h-2 w-24 bg-emerald-400/20 rounded"
                />
              </div>
            </div>

            {/* Analysis Results */}
            <div className="space-y-4">
              {factors.map((factor, index) => (
                <motion.div
                  key={factor.category}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 + 1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">{factor.category}</span>
                    <span className="text-emerald-400">{factor.score}%</span>
                  </div>
                  <div className="h-1 bg-emerald-400/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${factor.score}%` }}
                      transition={{ delay: index * 0.2 + 1.2, duration: 0.5 }}
                      className="h-full bg-emerald-400/40 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 