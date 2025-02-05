'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function EmailSignup({ className = "" }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    
    try {
      const form = e.target as HTMLFormElement
      const data = new FormData(form)
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as any).toString()
      })

      if (response.ok) {
        setStatus('success')
        setEmail('')
        setTimeout(() => setStatus('idle'), 3000)
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <div className={`mt-6 ${className}`}>
      <form 
        name="email-signup"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit} 
        className="relative max-w-full md:max-w-md mx-auto"
      >
        {/* Netlify form requirements */}
        <input type="hidden" name="form-name" value="email-signup" />
        <div hidden>
          <input name="bot-field" />
        </div>

        {/* Rest of your form JSX */}
        <div className="relative flex flex-col md:flex-row items-center gap-4 md:gap-0 px-4">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            disabled={status === 'submitting' || status === 'success'}
            className="w-full md:flex-1 px-0 py-2.5 bg-transparent text-matcha-800 text-base
                     placeholder:text-matcha-800/60 placeholder:text-base
                     focus:outline-none
                     disabled:opacity-50 disabled:cursor-not-allowed"
            required
          />
          <motion.button
            type="submit"
            disabled={!email || status !== 'idle'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto text-matcha-800 font-medium text-sm tracking-wider md:pl-4
                     disabled:opacity-50 disabled:cursor-not-allowed
                     hover:text-matcha-600 transition-colors whitespace-nowrap"
          >
            {status === 'submitting' ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-3 h-3 border-2 border-matcha-800 border-t-transparent rounded-full"
              />
            ) : status === 'success' ? (
              "THANK YOU"
            ) : (
              "NOTIFY ME"
            )}
          </motion.button>
        </div>

        {/* Single Line Under Both Input and Button */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-matcha-500/20" />

        {/* Status Messages */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: status === 'error' ? 1 : 0,
            y: status === 'error' ? 0 : 10
          }}
          className="absolute left-0 right-0 top-full mt-2 text-xs"
        >
          {status === 'error' && (
            <span className="text-red-400">
              Oops! Something went wrong. Please try again.
            </span>
          )}
        </motion.div>
      </form>
    </div>
  )
} 