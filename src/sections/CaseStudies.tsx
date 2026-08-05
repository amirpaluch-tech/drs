import React, { useState } from 'react'
const cases = [
  { id: '01', tag: 'Operations Scaling', title: 'Scaling 24/7 Global Operations', challenge: 'A high-growth SaaS company needed to scale its mission-critical operations from a small, reactive team to a globally distributed 24/7 function without service disruption.', approach: 'Designed the organizational model, hired and structured regional teams, established shift handoff protocols, defined SLA frameworks, and implemented tooling for real-time operational visibility.', outcome: 'Delivered a mature, continuously operational organization capable of supporting Fortune 100 enterprise customers with measurable SLA performance benchmarks.' },
  { id: '02', tag: 'Governance', title: 'Building Operational Governance', challenge: 'Operations were running on informal processes, with no consistent KPI tracking, no escalation paths, and no visibility into performance trends.', approach: 'Designed a KPI governance framework covering SLA adherence, escalation rates, response times, and customer health. Implemented regular operational reviews and dashboards for leadership visibility.', outcome: 'Leadership gained real-time insight into operational performance. Teams became self-correcting, with data surfacing issues before they escalated.' },
  { id: '03', tag: 'Customer Operations', title: 'Customer Escalation Transformation', challenge: 'Enterprise customer escalations were handled inconsistently, causing customer frustration, internal friction, and missed SLA commitments.', approach: 'Redesigned the end-to-end escalation framework — from initial trigger criteria to executive communication protocols. Defined ownership across Support, Product, and Engineering.', outcome: 'Escalation resolution time improved significantly. Customer satisfaction scores increased, and cross-functional friction around escalations dropped.' },
  { id: '04', tag: 'AI & Automation', title: 'AI-Enabled Operational Workflow Redesign', challenge: 'Key operational workflows — ticket routing, reporting, status updates, and handoffs — were manual, inconsistent, and time-consuming.', approach: 'Introduced AI-assisted triage and routing, automated reporting pipelines, and structured handoff workflows. Changed the operating model to separate human judgment tasks from routine execution.', outcome: 'Reduced manual operational load significantly, enabling the team to handle higher volume without proportional headcount growth.' },
]
export default function CaseStudies() {
  const [active, setActive] = useState<string | null>(null)
  return (
    <section id="cases" className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">Selected Case Studies</p>
          <h2 className="font-display text-4xl font-semibold text-ink leading-tight max-w-lg">Operational Problems<br />Solved at Scale</h2>
          <div className="w-10 h-0.5 bg-gold mt-6" />
          <p className="font-body text-sm text-ink-muted mt-4">Details anonymized. Click any card to expand.</p>
        </div>
        <div className="space-y-4">
          {cases.map((c) => {
            const isOpen = active === c.id
            return (
              <div key={c.id} className={`border rounded-xl overflow-hidden transition-all duration-200 cursor-pointer ${isOpen ? 'border-accent bg-white shadow-md' : 'border-stone-200 bg-white hover:border-accent/30 hover:shadow-sm'}`} onClick={() => setActive(isOpen ? null : c.id)}>
                <div className="px-8 py-6 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-xs text-stone-300">{c.id}</span>
                    <span className="px-2.5 py-1 bg-accent-pale text-accent text-xs font-mono rounded border border-accent/20">{c.tag}</span>
                    <h3 className="font-body font-semibold text-ink text-base">{c.title}</h3>
                  </div>
                  <div className={`text-accent transition-transform duration-200 font-mono text-lg ${isOpen ? 'rotate-45' : ''}`}>+</div>
                </div>
                {isOpen && (
                  <div className="px-8 pb-8 grid md:grid-cols-3 gap-8 border-t border-stone-100 pt-6">
                    {[{ label: 'Challenge', text: c.challenge }, { label: 'Approach', text: c.approach }, { label: 'Outcome', text: c.outcome }].map((block) => (
                      <div key={block.label}>
                        <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">{block.label}</p>
                        <p className="font-body text-sm text-ink-muted leading-relaxed">{block.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
