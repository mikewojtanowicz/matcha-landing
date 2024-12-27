'use client'

import Image from 'next/image'

const logos = {
  Google: '/logos/google.svg',
  Apple: '/logos/apple.svg',
  Amazon: '/logos/amazon.svg',
  Netflix: '/logos/netflix.svg',
  Microsoft: '/logos/microsoft.svg',
  Nvidia: '/logos/nvidia.svg',
  Tesla: '/logos/tesla.svg'
} as const

type CompanyName = keyof typeof logos

export default function CompanyLogo({ company }: { company: CompanyName }) {
  return (
    <div className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-sm p-3 flex items-center justify-center">
      <Image
        src={logos[company]}
        alt={`${company} logo`}
        width={48}
        height={48}
        className="object-contain"
      />
    </div>
  )
} 