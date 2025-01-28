'use client'

import { useState, useEffect } from 'react'
import TerminalIntro from "@/components/sections/TerminalIntro"
import TabSection from "@/components/sections/TabSection"

export default function Home() {
  const [showTabs, setShowTabs] = useState(false)
  const [hasAnimationPlayed, setHasAnimationPlayed] = useState(false)

  useEffect(() => {
    if (!showTabs) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showTabs])

  const handleAnimationComplete = () => {
    if (!hasAnimationPlayed) {
      setShowTabs(true)
      setHasAnimationPlayed(true)
    }
  }

  return (
    <main>
      <div className="h-screen">
        <TerminalIntro onComplete={handleAnimationComplete} />
      </div>
      {showTabs && (
        <div>
          <TabSection />
        </div>
      )}
    </main>
  )
}
