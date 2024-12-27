'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function EmailSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    
    // TODO: Implement actual email signup
    await new Promise(resolve => setTimeout(resolve, 1000))
    setStatus('success')
    setEmail('')

    // Reset success message after 3 seconds
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <div className="mt-8">
      <form onSubmit={handleSubmit} className="relative max-w-xl">
        <div className="relative flex items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            disabled={status === 'submitting' || status === 'success'}
            className="flex-1 px-0 py-2 bg-transparent text-white placeholder:text-gray-400
                     focus:outline-none
                     disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <motion.button
            type="submit"
            disabled={!email || status !== 'idle'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-emerald-400 font-medium text-sm tracking-wider pl-4
                     disabled:opacity-50 disabled:cursor-not-allowed
                     hover:text-emerald-300 transition-colors whitespace-nowrap"
          >
            {status === 'submitting' ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 border-2 border-emerald-400 border-t-transparent rounded-full"
              />
            ) : status === 'success' ? (
              "THANK YOU"
            ) : (
              "NOTIFY ME"
            )}
          </motion.button>
        </div>

        {/* Single Line Under Both Input and Button */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500/20" />

        {/* Status Messages */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: status === 'error' ? 1 : 0,
            y: status === 'error' ? 0 : 10
          }}
          className="absolute left-0 right-0 top-full mt-4 text-sm"
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