'use client'

import { useState, useEffect, useRef } from 'react'
import '@/styles/animations.css'
import EmailSignup from '@/components/common/EmailSignup'
import { motion } from 'framer-motion'

export default function TerminalIntro({ onComplete }: { onComplete: () => void }) {
  const [showCursor, setShowCursor] = useState(true)
  const [text, setText] = useState('')
  const [showIntro, setShowIntro] = useState(false)
  const [showDescription, setShowDescription] = useState(false)
  const [showLaunchDate, setShowLaunchDate] = useState(false)
  const hasAnimationStarted = useRef(false)
  const currentIndexRef = useRef(0)
  
  const fullText = "Matcha"
  const fullDescription = "The revolutionary AI-powered job matching and screening platform for applicants and employers."

  useEffect(() => {
    if (hasAnimationStarted.current) return
    hasAnimationStarted.current = true

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)

    const introTimer = setTimeout(() => {
      setShowIntro(true)
      
      setTimeout(() => {
        const typeText = async () => {
          if (currentIndexRef.current < fullText.length) {
            setText(fullText.slice(0, currentIndexRef.current + 1))
            currentIndexRef.current++
            await new Promise(resolve => setTimeout(resolve, 180))
            requestAnimationFrame(typeText)
          } else {
            clearInterval(cursorInterval)
            setShowCursor(false)
            
            setTimeout(() => {
              setShowDescription(true)
              setTimeout(() => {
                setShowLaunchDate(true)
                setTimeout(onComplete, 500)
              }, 500)
            }, 1000)
          }
        }
        
        setTimeout(typeText, 150)
      }, 1000)
    }, 500)

    return () => {
      clearInterval(cursorInterval)
      clearTimeout(introTimer)
    }
  }, [])

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <div className="mb-16">
          <p 
            className={`flowing-gradient-gold text-transparent text-xl mb-4 transition-opacity duration-500 ${
              showIntro ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Introducing
          </p>
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold">
            <span className="flowing-gradient text-transparent">
              {text}
            </span>
            <span 
              className={`inline-block w-[4px] h-[1em] bg-emerald-400 -mb-[0.1em] ml-1 transition-opacity duration-100 ${
                showCursor ? 'opacity-100' : 'opacity-0'
              }`}
            >
            </span>
          </h1>
        </div>
        
        <div className="space-y-6">
          <p 
            className={`flowing-gradient-gold text-transparent text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium transition-opacity duration-500 ${
              showDescription ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {fullDescription}
          </p>

          <p 
            className={`text-emerald-400 text-sm tracking-[0.2em] font-bold transition-opacity duration-500 ${
              showLaunchDate ? 'opacity-100' : 'opacity-0'
            }`}
          >
            LAUNCHING SPRING 2025
          </p>

          {showLaunchDate && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center"
            >
              <EmailSignup />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
} 