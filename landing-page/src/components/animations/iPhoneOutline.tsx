'use client'

import { motion, Variants } from 'framer-motion'

// iPhone animation containers
const iPhoneVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0,
      when: "beforeChildren",
    },
  },
}

const outlineVariants: Variants = {
  initial: { pathLength: 0 },
  animate: {
    pathLength: 1,
    transition: {
      duration: 2.5,
      ease: 'easeInOut',
    },
  },
}

const phoneContentVariants: Variants = {
  initial: { opacity: 0, scale: 0.98 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
      delay: 2.5,
    },
  },
}

export { iPhoneVariants, outlineVariants, phoneContentVariants }
