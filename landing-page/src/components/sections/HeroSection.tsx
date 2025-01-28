"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const iPhoneVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0,
      when: "beforeChildren",
    },
  },
};

const outlineVariants = {
  initial: { pathLength: 0 },
  animate: {
    pathLength: 1,
    transition: {
      duration: 4,
      ease: "easeInOut",
    },
  },
};

const phoneContentVariants = {
  initial: { opacity: 0, scale: 0.98 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 4.1,
    },
  },
};

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeView, setActiveView] = useState<'candidate' | 'employer'>('candidate');

  const handleViewChange = (view: 'candidate' | 'employer') => {
    setActiveView(view);
  };

  return (
    <section className="w-screen min-w-screen bg-stone-100">
      <div className="w-full max-w-6xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* ----------------- Content Column ----------------- */}
          <div className="flex-1 max-w-2xl xl:max-w-3xl space-y-8">
            {/* View Toggle */}
            <motion.div 
              className="p-1 rounded-xl bg-matcha-50 w-fit shadow-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="relative flex">
                <button
                  onClick={() => handleViewChange('candidate')}
                  className={`relative px-6 py-2.5 rounded-lg text-sm font-medium z-10 transition-colors duration-200 ${
                    activeView === 'candidate' 
                      ? 'text-matcha-900'
                      : 'text-stone-600 hover:text-stone-800'
                  }`}
                >
                  Job Seekers
                </button>
                <button
                  onClick={() => handleViewChange('employer')}
                  className={`relative px-6 py-2.5 rounded-lg text-sm font-medium z-10 transition-colors duration-200 ${
                    activeView === 'employer' 
                      ? 'text-matcha-900'
                      : 'text-stone-600 hover:text-stone-800'
                  }`}
                >
                  Hiring Managers
                </button>
                <motion.div
                  className="absolute inset-y-0 rounded-lg bg-matcha-300/20"
                  initial={false}
                  animate={{
                    x: activeView === 'candidate' ? 0 : '100%',
                    width: '50%'
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30
                  }}
                />
              </div>
            </motion.div>

            {/* Value Proposition Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                {activeView === 'candidate' ? (
                  <span className="bg-[linear-gradient(120deg,_#598F53_30%,_#C5A47E_80%)] bg-clip-text text-transparent">
                    One Profile, Endless Opportunities
                  </span>
                ) : (
                  <span className="bg-[linear-gradient(120deg,_#C5A47E_30%,_#598F53_80%)] bg-clip-text text-transparent">
                    Transform Your Hiring Process
                  </span>
                )}
              </h1>
            </motion.div>

            {/* Marketing-focused Content */}
            <motion.div 
              key={activeView}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <p className="text-xl text-stone-700 leading-relaxed">
                {activeView === 'candidate' 
                  ? "Experience a revolutionary approach to job searching where your complete profile speaks for itself:"
                  : "Join the future of recruitment with our self-optimizing ecosystem:"}
              </p>

              <ul className="space-y-4 pl-6">
                {activeView === 'candidate' ? (
                  <>
                    <motion.li 
                      initial={{ x: -10 }}
                      animate={{ x: 0 }}
                      className="relative text-stone-800 before:absolute before:-left-6 before:top-2 before:w-2 before:h-2 before:bg-matcha-500 before:rounded-full"
                    >
                      <strong className="text-matcha-700">Unified Profile System:</strong><br/>
                      Maintain one comprehensive profile that evolves with your career
                    </motion.li>
                    <motion.li 
                      initial={{ x: -10 }}
                      animate={{ x: 0 }}
                      className="relative text-stone-800 before:absolute before:-left-6 before:top-2 before:w-2 before:h-2 before:bg-matcha-500 before:rounded-full"
                    >
                      <strong className="text-matcha-700">AI-Powered Matching:</strong><br/>
                      Our technology learns from successful placements to improve match accuracy
                    </motion.li>
                  </>
                ) : (
                  <>
                    <motion.li 
                      initial={{ x: -10 }}
                      animate={{ x: 0 }}
                      className="relative text-stone-800 before:absolute before:-left-6 before:top-2 before:w-2 before:h-2 before:bg-cream-500 before:rounded-full"
                    >
                      <strong className="text-cream-700">Self-Optimizing AI:</strong><br/>
                      Our system learns from both successful and unsuccessful placements
                    </motion.li>
                    <motion.li 
                      initial={{ x: -10 }}
                      animate={{ x: 0 }}
                      className="relative text-stone-800 before:absolute before:-left-6 before:top-2 before:w-2 before:h-2 before:bg-cream-500 before:rounded-full"
                    >
                      <strong className="text-cream-700">Unified Environment:</strong><br/>
                      Both parties benefit from shared data and seamless interaction
                    </motion.li>
                  </>
                )}
              </ul>

              <motion.p 
                className="text-lg text-stone-600 italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {activeView === 'candidate' 
                  ? "Part of the revolutionary platform changing how people find their next role"
                  : "Join the HR technology revolution expected to reach $30B by 2025"}
              </motion.p>
            </motion.div>
          </div>

          {/* ----------------- iPhone Animation Column ----------------- */}
          <div className="flex-1 max-w-xl xl:max-w-2xl">
            <motion.div
              ref={ref}
              className="relative h-[520px] hidden lg:block"
              variants={iPhoneVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
            >
              {/* 1) The Outline-Tracing SVG */}
              <motion.svg
                className="absolute inset-0 m-auto"
                width="280"
                height="520"
                viewBox="0 0 280 520"
                fill="none"
                stroke="url(#animatedGradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={outlineVariants}
              >
                {/* Gradient definition */}
                <defs>
                  <linearGradient
                    id="animatedGradient"
                    gradientUnits="userSpaceOnUse"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    {/* Green wave */}
                    <stop offset="0%" stopColor="#598F53">
                      <animate
                        attributeName="offset"
                        values="-0.75;1.25"
                        dur="2s"
                        repeatCount="indefinite"
                        keyTimes="0;1"
                        calcMode="spline"
                        keySplines="0.4 0 0.2 1"
                      />
                    </stop>
                    <stop offset="50%" stopColor="#598F53">
                      <animate
                        attributeName="offset"
                        values="-0.25;1.75"
                        dur="2s"
                        repeatCount="indefinite"
                        keyTimes="0;1"
                        calcMode="spline"
                        keySplines="0.4 0 0.2 1"
                      />
                    </stop>
                    
                    {/* Gold wave */}
                    <stop offset="50%" stopColor="#C5A47E">
                      <animate
                        attributeName="offset"
                        values="0.25;2.25"
                        dur="2s"
                        repeatCount="indefinite"
                        keyTimes="0;1"
                        calcMode="spline"
                        keySplines="0.4 0 0.2 1"
                      />
                    </stop>
                    <stop offset="100%" stopColor="#C5A47E">
                      <animate
                        attributeName="offset"
                        values="0.75;2.75"
                        dur="2s"
                        repeatCount="indefinite"
                        keyTimes="0;1"
                        calcMode="spline"
                        keySplines="0.4 0 0.2 1"
                      />
                    </stop>
                  </linearGradient>
                </defs>

                {/* Main phone outline */}
                <motion.path
                  d="M40 0h200a40 40 0 0 1 40 40v440a40 40 0 0 1-40 40H40a40 40 0 0 1-40-40V40a40 40 0 0 1 40-40z"
                  variants={outlineVariants}
                />

                {/* Screen outline */}
                <motion.path
                  d="M44 4h192a36 36 0 0 1 36 36v440a36 36 0 0 1-36 36H44a36 36 0 0 1-36-36V40a36 36 0 0 1 36-36z"
                  variants={outlineVariants}
                />

                {/* Notch - matches the actual rendered div */}
                <motion.path
                  d="
                    M85 0
                    h110
                    v15
                    a10 10 0 0 1-10 10
                    H95
                    a10 10 0 0 1-10-10
                    V0
                    Z
                  "
                  variants={outlineVariants}
                />
              </motion.svg>

              {/* 2) The Actual Phone Frame */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                variants={phoneContentVariants}
              >
                {/* 
                  Phone is exactly 280×520 so the outline 
                  and phone corners match perfectly when scaled.
                */}
                <div className="relative w-[280px] h-[520px]">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[110px] h-[25px] bg-black rounded-b-[10px] z-20">
                    <div className="w-full h-full bg-black rounded-b-[10px] overflow-hidden">
                      {/* Optional: Add camera/sensor dot if needed */}
                      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-stone-600 rounded-full" />
                    </div>
                  </div>

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
  );
}
