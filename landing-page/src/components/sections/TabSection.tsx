'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import CandidateAnalysis from './CandidateAnalysis'
import JobMatching from './JobMatching'
import ScreeningAutomation from './ScreeningAutomation'
import HeroSection from './HeroSection'
import ResumeAnalysis from './ResumeAnalysis'
import CompetitorComparison from './CompetitorComparison'

export default function TabSection() {
  const [activeTab, setActiveTab] = useState<'applicants' | 'employers'>('applicants')

  return (
    <div>
      {/* Hero Section */}
      <section className="w-full bg-stone-100">
        <HeroSection />
      </section>

      {/* Resume Analysis */}
      <section className="w-full bg-cream-50">
        <ResumeAnalysis />
      </section>

      {/* Candidate Analysis */}
      <section className="w-full bg-stone-100">
        <CandidateAnalysis />
      </section>

      {/* Screening Automation */}
      <section className="w-full bg-cream-50">
        <ScreeningAutomation />
      </section>

      {/* Competitor Comparison */}
      <section className="w-full bg-stone-100">
        <CompetitorComparison />
      </section>
    </div>
  )
} 