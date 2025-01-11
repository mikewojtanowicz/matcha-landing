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
          The Complete Candidate Profile
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          We look at your complete background - skills, experience, education, and industry knowledge
          to match you with roles where you'll have the highest chance of success. 
        </p>
      </div>

      {/* Right side - ML Analysis Animation */}
      <div className="relative h-[460px] flex items-center justify-center">
        {/* Resume Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative w-[345px] h-[460px] bg-black/60 backdrop-blur-lg rounded-lg 
                     border-2 border-emerald-500/20 p-8 overflow-hidden"
        >
          {/* Scanning Line */}
          <motion.div
            initial={{ y: -460 }}
            animate={{ y: 460 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent 
                       via-emerald-400/50 to-transparent"
          />

          {/* Resume Content */}
          <div className="space-y-8">
            {/* Header with Profile Icon */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 relative flex items-center justify-center">
                {/* Profile outline icon */}
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="w-full h-full text-emerald-400/40"
                >
                  <path 
                    d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-6.008 0-11 4.492-11 10h22c0-5.508-4.992-10-11-10z" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                  />
                </svg>
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-emerald-400/5 rounded-full filter blur-md" />
              </div>
              <div className="space-y-2 w-full">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8 }}
                  className="h-3 bg-emerald-400/20 rounded mx-auto"
                  style={{ maxWidth: "200px" }}
                />
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "80%" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-2 bg-emerald-400/20 rounded mx-auto"
                  style={{ maxWidth: "160px" }}
                />
              </div>
            </div>

            {/* Analysis Results */}
            <div className="space-y-6">
              {factors.map((factor, index) => (
                <motion.div
                  key={factor.category}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">{factor.category}</span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 + 1.2 }}
                      className="text-emerald-400"
                    >
                      {factor.score}%
                    </motion.span>
                  </div>
                  <div className="h-1.5 bg-emerald-400/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${factor.score}%` }}
                      transition={{ 
                        delay: index * 0.2 + 0.8,
                        duration: 1,
                        ease: "easeOut"
                      }}
                      className="h-full bg-gradient-to-r from-emerald-400/40 to-emerald-400/60 rounded-full"
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