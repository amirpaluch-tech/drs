import React from 'react'
const areas = [
  'Global Operations Leadership',
  'Customer Experience Transformation',
  'AI-Enabled Operational Scaling',
  'Service Delivery & Operational Excellence',
  'High-Growth or Complex Operational Environments',
  'Cross-Border & Distributed Team Leadership',
]
export default function Focus() {
  return (
    <section id="focus" className="py-24 bg-white border-t border-stone-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">Current Focus</p>
            <h2 className="font-display text-4xl font-semibold text-ink leading-tight mb-6">Available for the<br />Right Opportunity</h2>
            <div className="w-10 h-0.5 bg-gold mb-8" />
            <p className="font-body text-base text-ink-muted leading-relaxed max-w-md">I'm actively exploring senior VP and executive leadership roles where I can apply deep operational expertise to drive meaningful business outcomes. My strongest contributions come in complex, high-growth environments that require both strategic clarity and hands-on execution.</p>
          </div>
          <div className="space-y-3">
            {areas.map((area, i) => (
              <div key={i} className="flex items-center gap-4 p-4 border border-stone-200 rounded-lg hover:border-accent/30 hover:bg-accent-pale transition-all duration-200 group">
                <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 group-hover:scale-125 transition-transform duration-200" />
                <span className="font-body text-sm text-ink-muted font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
