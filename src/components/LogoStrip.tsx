import React from 'react'
const companies = [
  { name: 'MoovingOn', years: '2023–2026' },
  { name: 'Radware', years: '2022–2023' },
  { name: 'SecurityDAM', years: '2020–2022' },
  { name: 'XSites', years: '2016–2019' },
  { name: 'Varonis', years: 'Earlier' },
  { name: 'Personetics', years: 'Earlier' },
  { name: 'TechFinancials', years: 'Earlier' },
]
export default function LogoStrip() {
  return (
    <div className="border-t border-b border-stone-200 py-8 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs tracking-widest text-stone-300 uppercase text-center mb-6">Companies &amp; Organizations</p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {companies.map((co) => (
            <div key={co.name} className="flex flex-col items-center gap-1 group">
              <span className="font-display text-lg font-semibold text-stone-300 group-hover:text-stone-400 transition-colors duration-200 tracking-tight">{co.name}</span>
              <span className="font-mono text-xs text-stone-200 group-hover:text-stone-300 transition-colors duration-200">{co.years}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
