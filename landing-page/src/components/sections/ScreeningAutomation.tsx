'use client'

import { motion } from 'framer-motion'

export default function ScreeningAutomation() {
  const screeningExample = [
    {
      context: "Based on your React experience:",
      question: "Describe how you've implemented state management in large-scale applications",
      type: "text"
    },
    {
      context: "Regarding your AWS background:",
      question: "Explain your experience with serverless architectures",
      type: "voice"
    },
    {
      context: "From your leadership experience:",
      question: "How do you handle technical debt in your team?",
      type: "text"
    }
  ]

  return (
    <div className="grid grid-cols-2 gap-12">
      {/* Left side - Content */}
      <div className="space-y-6">
        <h2 className="flowing-gradient-gold text-transparent bg-clip-text text-4xl md:text-5xl font-bold">
          Automated Screening
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Skip the repetitive HR calls. Our AI generates relevant screening questions 
          based on your experience and the role requirements. Choose between typing 
          your responses or recording them directly in the app.
        </p>
      </div>

      {/* Right side - Question Generation Animation */}
      <div className="relative h-[400px] flex items-center justify-center">
        <div className="w-[400px] space-y-4">
          {screeningExample.map((item, index) => (
            <motion.div
              key={index}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                delay: index * 0.5,
                duration: 0.5,
                ease: "easeOut"
              }}
              className="relative"
            >
              {/* AI Processing Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  delay: index * 0.5,
                  duration: 0.3,
                  times: [0, 0.5, 1]
                }}
                className="absolute -left-8 top-3"
              >
                <div className="w-3 h-3 rounded-full bg-emerald-400/60" />
              </motion.div>

              {/* Question Card */}
              <div className="bg-black/60 backdrop-blur-lg rounded-lg 
                            border-2 border-emerald-500/20 p-4
                            shadow-[0_0_15px_rgba(52,211,153,0.1)]"
              >
                <div className="text-emerald-400/60 text-sm mb-2 flex justify-between items-center">
                  <span>{item.context}</span>
                  <span className="flex items-center gap-2 text-xs">
                    {item.type === 'voice' ? (
                      <>
                        <motion.div
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.6, 1, 0.6]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="w-4 h-4 rounded-full bg-emerald-400/40 flex items-center justify-center"
                        >
                          🎤
                        </motion.div>
                        <span className="text-emerald-400/60">Voice Response</span>
                      </>
                    ) : (
                      <>
                        ⌨️
                        <span className="text-emerald-400/60">Text Response</span>
                      </>
                    )}
                  </span>
                </div>
                <div className="text-white">
                  {item.question}
                </div>

                {/* Response Area */}
                <div className="mt-4 flex items-center gap-3">
                  {item.type === 'voice' ? (
                    <motion.div
                      animate={{
                        opacity: [0.4, 1, 0.4],
                        scaleY: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="flex gap-1"
                    >
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-0.5 h-4 bg-emerald-400/60 rounded-full"
                          style={{
                            animationDelay: `${i * 0.1}s`
                          }}
                        />
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      animate={{ opacity: [1, 0] }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: index * 0.5 + 0.3
                      }}
                      className="w-2 h-4 bg-emerald-400/60"
                    />
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Background Glow */}
          <motion.div
            className="absolute inset-0 bg-emerald-500/5 rounded-3xl filter blur-3xl -z-10"
            animate={{
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
    </div>
  )
} 