'use client'

import { useState } from 'react'

export default function InfoSection() {
  const [hoveredSide, setHoveredSide] = useState<'applicants' | 'employers' | null>(null)

  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row mt-20">
      {/* Applicants Side */}
      <div 
        className={`flex-1 p-8 md:p-16 transition-all duration-500 ease-in-out ${
          hoveredSide === 'employers' ? 'md:opacity-50' : ''
        }`}
        onMouseEnter={() => setHoveredSide('applicants')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <div className="max-w-xl mx-auto">
          <h2 className="flowing-gradient-gold text-transparent text-4xl md:text-5xl font-bold mb-8">
            For Applicants
          </h2>
          <ul className="space-y-6 text-gray-300">
            <li className="flex items-start">
              <span className="mr-4 text-emerald-400">→</span>
              <span>AI-powered job matching based on your skills, experience, and preferences</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-emerald-400">→</span>
              <span>Automated interview scheduling with potential employers</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-emerald-400">→</span>
              <span>Practice with AI-generated screening questions specific to your field</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-emerald-400">→</span>
              <span>Real-time application status tracking and feedback</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="w-px bg-gradient-to-b from-transparent via-emerald-500/50 to-transparent mx-auto"></div>

      {/* Employers Side */}
      <div 
        className={`flex-1 p-8 md:p-16 transition-all duration-500 ease-in-out ${
          hoveredSide === 'applicants' ? 'md:opacity-50' : ''
        }`}
        onMouseEnter={() => setHoveredSide('employers')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <div className="max-w-xl mx-auto">
          <h2 className="flowing-gradient-gold text-transparent text-4xl md:text-5xl font-bold mb-8">
            For Employers
          </h2>
          <ul className="space-y-6 text-gray-300">
            <li className="flex items-start">
              <span className="mr-4 text-emerald-400">→</span>
              <span>Smart candidate matching using AI to find the perfect fit</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-emerald-400">→</span>
              <span>Automated screening question generation based on job requirements</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-emerald-400">→</span>
              <span>Intelligent scheduling system for interviews and follow-ups</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-emerald-400">→</span>
              <span>Data-driven insights on candidate pool and hiring process</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
} 