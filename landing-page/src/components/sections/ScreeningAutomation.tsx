'use client'

import { motion } from 'framer-motion'
import useIsMobile from '@/hooks/useIsMobile'

export default function ScreeningAutomation() {
  const isMobile = useIsMobile()

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
    <section className="w-full min-w-full bg-cream-50 min-w-[100vw]">
      <div className="py-12 md:py-24 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left side - Content */}
          <div className="flex items-center">
            <div className="space-y-6">
              <h2 className="flowing-gradient-gold text-transparent bg-clip-text text-4xl md:text-5xl font-bold">
                Automated Screening
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed">
                Skip the repetitive HR calls. Our AI generates relevant screening questions 
                based on your experience and the role requirements. Choose between typing 
                your responses or recording them directly in the app.
              </p>
            </div>
          </div>

          {/* Right side - Adjust height for mobile */}
          <div className={`relative ${isMobile ? 'h-[500px]' : 'h-[400px]'} flex items-center justify-end mt-8 md:mt-0`}>
            <div className={`${isMobile ? 'w-full' : 'w-[500px]'} space-y-4`}>
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
                  className="relative overflow-hidden rounded-xl border border-matcha-500/20 
                           bg-cream-100/80 backdrop-blur-sm p-6"
                >
                  <div className="space-y-4">
                    <span className="text-matcha-600 text-sm">
                      {item.context}
                    </span>
                    <p className="text-stone-700 font-medium">
                      {item.question}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="h-2 bg-matcha-500/10 rounded-full w-16">
                        <motion.div
                          className="h-full w-full bg-matcha-500/40 rounded-full origin-left"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{
                            delay: index * 0.5 + 0.2,
                            duration: 0.5,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-stone-500 text-sm">
                          {item.type === 'voice' ? 'Voice Response' : 'Text Response'}
                        </span>
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
                                className="w-0.5 h-4 bg-matcha-400/60 rounded-full"
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
                            className="w-2 h-4 bg-matcha-400/60"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Background Glow */}
              <motion.div
                className="absolute inset-0 bg-matcha-500/5 rounded-3xl filter blur-3xl -z-10"
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
      </div>
    </section>
  )
} 