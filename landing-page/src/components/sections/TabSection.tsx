'use client'

import { useState } from 'react'
import CandidateAnalysis from './CandidateAnalysis'
import JobMatching from './JobMatching'
import ScreeningAutomation from './ScreeningAutomation'

export default function TabSection() {
  const [activeTab, setActiveTab] = useState<'applicants' | 'employers'>('applicants')

  return (
    <div className="bg-black">
      {/* Tab Navigation */}
      <div className="sticky top-0 py-8 bg-black z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-center">
          <div className="bg-black/30 backdrop-blur-sm rounded-full p-1">
            <button
              onClick={() => setActiveTab('applicants')}
              className={`px-8 py-3 rounded-full transition-all duration-300 ${
                activeTab === 'applicants'
                  ? 'bg-emerald-500/20 text-emerald-400'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              For Applicants
            </button>
            <button
              onClick={() => setActiveTab('employers')}
              className={`px-8 py-3 rounded-full transition-all duration-300 ${
                activeTab === 'employers'
                  ? 'bg-emerald-500/20 text-emerald-400'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              For Employers
            </button>
          </div>
        </div>
      </div>

      {/* Content - Just basic padding, no height constraints */}
      <div className="max-w-7xl mx-auto px-4">
        {activeTab === 'applicants' ? (
          <div>
            <div className="py-32">
              <CandidateAnalysis />
            </div>
            <div className="py-32">
              <JobMatching />
            </div>
            <div className="py-32">
              <ScreeningAutomation />
            </div>
          </div>
        ) : (
          <div className="py-20">
            <div className="text-gray-400 text-center">
              Employers content coming soon
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 