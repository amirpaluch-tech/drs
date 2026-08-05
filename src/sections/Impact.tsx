import React from 'react'
const impacts = [
  { tag: 'Resolution Time', label: 'TTR 48h → 6h', statement: 'Reduced average time-to-resolution from ~48 hours to ~6 hours through operational restructuring, escalation governance, and knowledge enablement.', metric: '~8× faster resolution' },
  { tag: 'First Contact Resolution', label: 'FCR ~75%', statement: 'Increased First Contact Resolution to ~75%, transforming the NOC from a reactive team into a high-capability operational response organization.', metric: 'FCR ~75%' },
  { tag: 'Industry Ranking', label: '#7 → #1', statement: 'Contributed to improving global service ranking from 7th to 1st, with positive positioning in Forrester Research evaluations.', metric: 'Industry #7 → #1' },
  { tag: 'Organizational Scale', label: '6 → 20+ Engineers', statement: 'Scaled 24/7 NOC organizations from 6 to 20+ engineers across multiple companies and regions while improving service quality and operational maturity.', metric: '6 → 20+ engineers' },
  { tag: 'Budget Ownership', label: 'Multi-Million Budget', statement: 'Owned multi-million-dollar operational budgets in partnership with CFOs on forecasting, planning, and cost optimization.', metric: 'Multi-million $ owned' },
  { tag: 'Global Footprint', label: '7 Countries · 100+ People', statement: 'Led distributed teams across Israel, US, India, Canada, Colombia, Cyprus, and Serbia — managing 24/7 operations, customer success, support, and escalation functions.', metric: '7 countries · 100+ led' },
  { tag: 'Enterprise Trust', label: 'Fortune 100 Customers', statement: 'Supported Fortune 100 enterprise customers in mission-critical, security-sensitive environments — banking, healthcare, government, and enterprise infrastructure.', metric: 'Fortune 100 served' },
  { tag: 'Compliance', label: 'ISO 27001 Governance', statement: 'Led ISO 27001 governance initiatives and audit readiness in compliance-sensitive, enterprise-grade operational environments.', metric: 'ISO 27001 certified ops' },
]
export default function Impact() {
  return (
    <section id="impact" className="py-24 bg-accent text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="font-mono text-xs tracking-widest text-white/50 uppercase mb-4">Strategic Impact</p>
          <h2 className="font-display text-4xl font-semibold text-white leading-tight">What I've Built &amp; Delivered</h2>
          <div className="w-10 h-0.5 bg-gold mt-6" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[{ num: 'TTR 48h→6h', label: 'Resolution Time' }, { num: 'FCR ~75%', label: 'First Contact Resolution' }, { num: '#7 → #1', label: 'Industry Ranking' }, { num: '6→20+', label: 'Engineers Scaled' }].map(s => (
            <div key={s.label} className="border border-white/10 rounded-xl p-5 text-center">
              <p className="font-display text-2xl font-semibold text-gold leading-tight">{s.num}</p>
              <p className="font-body text-xs text-white/50 mt-2">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {impacts.map((item, i) => (
            <div key={i} className="border border-white/10 rounded-xl p-7 hover:border-white/25 hover:bg-white/5 transition-all duration-200">
              <div className="flex items-start justify-between mb-4">
                <span className="font-mono text-xs text-gold/80 uppercase tracking-widest">{item.tag}</span>
                <span className="font-body text-xs font-semibold text-white/40">{item.metric}</span>
              </div>
              <h3 className="font-body font-semibold text-white text-base mb-2">{item.label}</h3>
              <p className="font-body text-sm text-white/60 leading-relaxed">{item.statement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
