"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import useIsMobile from "@/hooks/useIsMobile";

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
  const isMobile = useIsMobile();

  const handleViewChange = (view: 'candidate' | 'employer') => {
    setActiveView(view);
  };

  return (
    <section className="w-screen min-w-screen bg-stone-100">
      <div className="w-full max-w-6xl mx-auto px-6 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* ----------------- Content Column ----------------- */}
          <div className="flex-1 max-w-2xl xl:max-w-3xl space-y-6 md:space-y-8">
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="min-h-[80px] md:min-h-[120px]"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
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

            <motion.div 
              key={activeView}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col gap-6 md:gap-8"
            >
              <p className="text-lg md:text-xl text-stone-700 leading-relaxed">
                {activeView === 'candidate' 
                  ? "Experience a revolutionary approach to job searching where your complete profile speaks for itself:"
                  : "Join the future of recruitment with our self-optimizing ecosystem:"}
              </p>

              <ul className="space-y-3 md:space-y-4 pl-6 min-h-[120px] md:min-h-[160px]">
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
                      className="relative text-stone-800 before:absolute before:-left-6 before:top-2 before:w-2 before:h-2 before:bg-matcha-500 before:rounded-full"
                    >
                      <strong className="text-matcha-700">Self-Optimizing AI:</strong><br/>
                      Our system learns from both successful and unsuccessful placements
                    </motion.li>
                    <motion.li 
                      initial={{ x: -10 }}
                      animate={{ x: 0 }}
                      className="relative text-stone-800 before:absolute before:-left-6 before:top-2 before:w-2 before:h-2 before:bg-matcha-500 before:rounded-full"
                    >
                      <strong className="text-matcha-700">Unified Environment:</strong><br/>
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
          {!isMobile && (
            <div className="flex-1 max-w-xl xl:max-w-2xl">
              <motion.div
                ref={ref}
                className="relative h-[520px]"
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
                  {/* Gradient Definition */}
                  <defs>
                    <linearGradient
                      id="animatedGradient"
                      gradientUnits="userSpaceOnUse"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
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

                  {/* Updated Outer Frame: Matches the iPhone container (280×520 with 30px radius) */}
                  <motion.path
                    d="M30 0 H250 A30 30 0 0 1 280 30 V490 A30 30 0 0 1 250 520 H30 A30 30 0 0 1 0 490 V30 A30 30 0 0 1 30 0z"
                    variants={outlineVariants}
                  />

                  {/* Updated Inner Frame: Matches the inset display (inset by 4px, 272×512 with 26px radius) */}
                  <motion.path
                    d="M30 4 H250 A26 26 0 0 1 276 30 V490 A26 26 0 0 1 250 516 H30 A26 26 0 0 1 4 490 V30 A26 26 0 0 1 30 4z"
                    variants={outlineVariants}
                  />
                </motion.svg>

                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  variants={phoneContentVariants}
                >
                  <div className="relative w-[280px] h-[520px]">
                    {/* --- Outer Frame: Titanium-Inspired Finish --- */}
                    <div className="absolute inset-0 bg-gray-800 rounded-[30px] shadow-2xl" />

                  {/* --- Inner Display (Screen) --- */}
                  <div className="absolute inset-[4px] bg-stone-100 rounded-[26px] overflow-hidden flex items-center justify-center">
                  <motion.video
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 4.5, duration: 0.5 }}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: '50% 80%' }} // Adjust vertical position (80% down from the top)
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/videos/matcha_demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </motion.video>
                  </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
