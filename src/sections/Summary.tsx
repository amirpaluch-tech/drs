import React from 'react'
const timeline = [
  { period: '2023 – 2026', role: 'VP Operations', company: 'MoovingOn' },
  { period: '2022 – 2023', role: 'Cloud Network Group Leader', company: 'Radware' },
  { period: '2020 – 2022', role: 'Head of Support', company: 'SecurityDAM' },
  { period: '2016 – 2019', role: 'COO', company: 'XSites' },
]
export default function Summary() {
  return (
    <section id="summary" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">Executive Summary</p>
            <h2 className="font-display text-4xl font-semibold text-ink mb-6 leading-tight">20 Years Building<br />Operations That Scale</h2>
            <div className="w-10 h-0.5 bg-gold mb-8" />
            <div className="space-y-5 font-body text-base text-ink-muted leading-relaxed">
              <p>Operations executive with 20+ years of experience scaling high-growth SaaS, cybersecurity, and fintech companies. Trusted partner to CEOs and founders, translating strategic vision into execution across global, cross-border organizations.</p>
              <p>Proven track record building operational infrastructure from the ground up — managing multi-million budgets, driving execution across Product, Sales, and Operations, and leading teams across Israel and US entities in high-growth environments.</p>
              <p>Strong process engineering mindset with a focus on automation, efficiency, and replacing manual workflows with scalable systems. Experienced in compliance-oriented operational design including ISO 27001 governance and enterprise audit readiness.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {['SaaS', 'Cybersecurity', 'Fintech', 'Israel & US Operations', 'ISO 27001'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-accent-pale text-accent text-xs font-mono rounded border border-accent/20">{tag}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-xs tracking-widest text-accent uppercase mb-8">Career Timeline</p>
            <div className="relative">
              <div className="absolute left-3 top-2 bottom-2 w-px bg-stone-200" />
              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <div key={i} className="relative pl-10">
                    <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center ${i === 0 ? 'bg-accent border-accent' : 'bg-white border-stone-300'}`}>
                      <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-white' : 'bg-stone-300'}`} />
                    </div>
                    <p className="font-mono text-xs text-accent/70 mb-1">{item.period}</p>
                    <p className="font-body font-semibold text-ink text-base">{item.role}</p>
                    <p className="font-body text-sm text-ink-muted">{item.company}</p>
                  </div>
                ))}
                <div className="relative pl-10">
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-dashed border-stone-300 bg-stone-50 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-stone-300" />
                  </div>
                  <p className="font-mono text-xs text-stone-300 mb-1">2000 – 2016</p>
                  <p className="font-body font-medium text-ink-muted text-sm">QA & Operations Leadership</p>
                  <p className="font-body text-xs text-stone-300">Varonis · Personetics · TechFinancials · Monosphere</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
