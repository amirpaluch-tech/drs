import React, { useState } from 'react'

const locationData = [
  { name: 'Israel',        flag: '🇮🇱', xPct: 57.8, yPct: 40.0,
    companies: ['MoovingOn','Radware','SecurityDAM','XSites'],
    roles: ['NOC Operations','Network Experts','Escalation','Support Tier 2'] },
  { name: 'United States', flag: '🇺🇸', xPct: 22.5, yPct: 36.0,
    companies: ['Radware','SecurityDAM'],
    roles: ['NOC Operations','Network Experts','Escalation','Global Support'] },
  { name: 'India',         flag: '🇮🇳', xPct: 71.9, yPct: 46.5,
    companies: ['Radware'],
    roles: ['NOC Operations'] },
  { name: 'Canada',        flag: '🇨🇦', xPct: 22.0, yPct: 22.0,
    companies: ['Radware'],
    roles: ['Network Experts'] },
  { name: 'Colombia',      flag: '🇨🇴', xPct: 27.2, yPct: 56.0,
    companies: ['Radware'],
    roles: ['Network Experts'] },
  { name: 'Cyprus',        flag: '🇨🇾', xPct: 57.0, yPct: 37.5,
    companies: ['XSites'],
    roles: ['Support Tier 1','Support Tier 2','Customer Success','Onboarding'] },
  { name: 'Serbia',        flag: '🇷🇸', xPct: 54.2, yPct: 33.0,
    companies: ['XSites'],
    roles: ['Support Tier 1'] },
]

const companies = [
  {
    company: 'MoovingOn', period: '2023 – 2026', totalHeadcount: '24–28',
    teams: [
      { name: 'NOC', structure: '1 TL + 20–25 Engineers', locations: ['Israel'], type: 'Operations' },
      { name: 'Customer Success', structure: '3 CSMs (Direct Reports)', locations: ['Israel'], type: 'Customer' },
    ],
  },
  {
    company: 'Radware', period: '2022 – 2023', totalHeadcount: '38–46',
    teams: [
      { name: 'NOC', structure: '1 TL + 1 Prof. Lead + 25–30 Engineers', locations: ['Israel','United States','India'], type: 'Operations' },
      { name: 'Network Experts', structure: '1 TL + 7 Engineers', locations: ['Israel','United States','Canada','Colombia'], type: 'Technical' },
      { name: 'Escalation Team', structure: '1 TL + 3 Engineers', locations: ['Israel','United States'], type: 'Escalation' },
    ],
  },
  {
    company: 'SecurityDAM', period: '2020 – 2022', totalHeadcount: '22',
    teams: [
      { name: 'NOC / Global Support', structure: '22 Direct Reports', locations: ['Israel','United States'], type: 'Operations' },
    ],
  },
  {
    company: 'XSites', period: '2016 – 2019', totalHeadcount: '18',
    teams: [
      { name: 'Support Tier 1', structure: '1 TL + 7 Agents', locations: ['Cyprus','Serbia'], type: 'Support' },
      { name: 'Support Tier 2', structure: '1 TL + 3 Engineers', locations: ['Israel','Cyprus'], type: 'Support' },
      { name: 'Customer Success', structure: '1 TL + 3 CSMs', locations: ['Cyprus'], type: 'Customer' },
      { name: 'Onboarding', structure: '2 Specialists', locations: ['Cyprus'], type: 'Onboarding' },
    ],
  },
]

const typeColors: Record<string, string> = {
  Operations: 'bg-blue-50 text-blue-700 border-blue-100',
  Customer:   'bg-emerald-50 text-emerald-700 border-emerald-100',
  Technical:  'bg-violet-50 text-violet-700 border-violet-100',
  Escalation: 'bg-amber-50 text-amber-700 border-amber-100',
  Support:    'bg-slate-100 text-slate-600 border-slate-200',
  Onboarding: 'bg-rose-50 text-rose-700 border-rose-100',
}

export default function Teams() {
  const [activeLocation, setActiveLocation] = useState<string | null>(null)
  const [activeCompany, setActiveCompany]   = useState<string | null>(null)
  const selectedLocation = locationData.find(l => l.name === activeLocation)

  return (
    <section id="teams" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-14">
          <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">Global Team Leadership</p>
          <h2 className="font-display text-4xl font-semibold text-ink leading-tight max-w-lg">
            Teams Built &amp; Led<br />Across 7 Countries
          </h2>
          <div className="w-10 h-0.5 bg-gold mt-6" />
          <p className="font-body text-sm text-ink-muted mt-4 max-w-xl">
            Over 20 years, I've built and led distributed operational teams across Israel, the US, India, Canada, Colombia, Cyprus, and Serbia — managing 24/7 operations, customer success, support, and escalation functions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { num: '7',    label: 'Countries' },
            { num: '4',    label: 'Companies' },
            { num: '12+',  label: 'Teams Built' },
            { num: '100+', label: 'People Led' },
          ].map(s => (
            <div key={s.label} className="border border-stone-200 rounded-xl p-5 text-center">
              <p className="font-display text-3xl font-semibold text-accent">{s.num}</p>
              <p className="font-body text-xs text-ink-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* MAP — no background, no border, no container box */}
        <div className="relative mb-4" style={{ lineHeight: 0 }}>
          {/* Transparent map image — lines only, no background */}
          <img
            src="/world-map-clean.png"
            alt="World map"
            className="w-full block"
            style={{ opacity: 0.5 }}
          />

          {/* SVG connection lines */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {locationData.map((loc, i) =>
              locationData.slice(i + 1).map(loc2 => (
                <line
                  key={`${loc.name}-${loc2.name}`}
                  x1={loc.xPct} y1={loc.yPct}
                  x2={loc2.xPct} y2={loc2.yPct}
                  stroke="#1A3A5C"
                  strokeWidth="0.18"
                  strokeOpacity="0.3"
                  strokeDasharray="0.8 0.8"
                  vectorEffect="non-scaling-stroke"
                />
              ))
            )}
          </svg>

          {/* Markers */}
          {locationData.map(loc => {
            const isActive = activeLocation === loc.name
            return (
              <button
                key={loc.name}
                onClick={() => setActiveLocation(isActive ? null : loc.name)}
                className="absolute group"
                style={{
                  left: `${loc.xPct}%`,
                  top: `${loc.yPct}%`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: isActive ? 20 : 10,
                }}
              >
                <span className="absolute rounded-full transition-all duration-200" style={{
                  inset: isActive ? '-10px' : '-6px',
                  background: `rgba(26,58,92,${isActive ? 0.18 : 0.08})`,
                  border: `1px solid rgba(26,58,92,${isActive ? 0.5 : 0.2})`,
                }} />
                <span className="relative flex rounded-full border-2 border-white shadow-md transition-all duration-200" style={{
                  width:  isActive ? '14px' : '10px',
                  height: isActive ? '14px' : '10px',
                  background: isActive ? '#1A3A5C' : '#2D5F8A',
                }} />
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap font-mono pointer-events-none" style={{
                  fontSize: '10px',
                  color: '#1A3A5C',
                  fontWeight: 700,
                  textShadow: '0 0 6px white, 0 0 12px white',
                }}>
                  {loc.flag} {loc.name}
                </span>
              </button>
            )
          })}
        </div>

        {/* Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {locationData.map(loc => (
            <button
              key={loc.name}
              onClick={() => setActiveLocation(activeLocation === loc.name ? null : loc.name)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono border transition-all duration-150 ${
                activeLocation === loc.name
                  ? 'bg-accent text-white border-accent'
                  : 'bg-white text-accent border-accent/30 hover:border-accent'
              }`}
            >
              {loc.flag} {loc.name}
            </button>
          ))}
        </div>

        {/* Location detail */}
        {selectedLocation && (
          <div className="mb-10 border border-accent/20 bg-accent-pale rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-body font-semibold text-ink text-lg">{selectedLocation.flag} {selectedLocation.name}</h3>
                <p className="font-mono text-xs text-accent/70 mt-1">Active in: {selectedLocation.companies.join(' · ')}</p>
              </div>
              <button onClick={() => setActiveLocation(null)} className="text-ink-muted hover:text-ink font-mono text-sm px-2">✕</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedLocation.roles.map(role => (
                <span key={role} className="px-3 py-1 bg-white border border-accent/20 text-accent text-xs font-mono rounded">{role}</span>
              ))}
            </div>
          </div>
        )}

        {/* Company breakdown */}
        <div className="mt-12">
          <p className="font-mono text-xs tracking-widest text-accent uppercase mb-6">Team Breakdown by Company</p>
          <div className="space-y-4">
            {companies.map(co => {
              const isOpen = activeCompany === co.company
              return (
                <div key={co.company} className={`border rounded-xl overflow-hidden transition-all duration-200 ${isOpen ? 'border-accent shadow-sm' : 'border-stone-200 hover:border-accent/30'}`}>
                  <button className="w-full px-8 py-5 flex items-center justify-between text-left" onClick={() => setActiveCompany(isOpen ? null : co.company)}>
                    <div className="flex items-center gap-6">
                      <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                      <div>
                        <span className="font-body font-semibold text-ink text-base">{co.company}</span>
                        <span className="font-mono text-xs text-ink-muted ml-4">{co.period}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="hidden sm:flex items-center gap-2">
                        <span className="font-mono text-xs text-ink-muted">Size:</span>
                        <span className="font-body font-semibold text-accent text-sm">{co.totalHeadcount}</span>
                      </div>
                      <div className="hidden sm:flex items-center gap-2">
                        <span className="font-mono text-xs text-ink-muted">Teams:</span>
                        <span className="font-body font-semibold text-accent text-sm">{co.teams.length}</span>
                      </div>
                      <span className={`text-accent font-mono text-lg transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>+</span>
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-8 pb-7 border-t border-stone-100 pt-6">
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {co.teams.map(team => (
                          <div key={team.name} className="bg-stone-50 border border-stone-200 rounded-lg p-5">
                            <div className="flex items-start justify-between mb-3">
                              <h4 className="font-body font-semibold text-ink text-sm">{team.name}</h4>
                              <span className={`px-2 py-0.5 text-xs font-mono rounded border ${typeColors[team.type]}`}>{team.type}</span>
                            </div>
                            <p className="font-body text-xs text-ink-muted mb-3 leading-relaxed">{team.structure}</p>
                            <div className="flex flex-wrap gap-1.5">
                              {team.locations.map(loc => {
                                const locData = locationData.find(l => l.name === loc)
                                return (
                                  <span key={loc} className="text-xs font-mono text-accent/70 bg-accent-pale border border-accent/10 px-2 py-0.5 rounded">
                                    {locData?.flag} {loc}
                                  </span>
                                )
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
