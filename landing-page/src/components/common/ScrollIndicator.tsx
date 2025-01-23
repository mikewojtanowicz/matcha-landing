'use client'

import { motion } from 'framer-motion'

interface ScrollIndicatorProps {
  onClick?: () => void;
}

export default function ScrollIndicator({ onClick }: ScrollIndicatorProps) {
  return (
    <motion.div 
      className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
      initial={{ opacity: 0, y: -10 }}
      animate={{ 
        opacity: [0.4, 1, 0.4],
        y: [0, 10, 0]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      onClick={onClick}
    >
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        className="text-matcha-500"
      >
        <path 
          d="M12 4L12 20M12 20L18 14M12 20L6 14" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  )
} 