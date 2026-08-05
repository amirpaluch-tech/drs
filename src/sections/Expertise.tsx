import React from 'react'
const expertise = [
  { title: 'Global Operations Leadership', desc: 'Leading distributed teams across Israel and US in 24/7 mission-critical SaaS environments, ensuring continuity, reliability, and cross-border alignment.' },
  { title: 'Customer Experience & Support', desc: 'Building and scaling customer-facing organizations — from support and onboarding to account management and escalation — that drive retention and satisfaction.' },
  { title: 'AI & Automation', desc: 'Replacing manual workflows with scalable, automated systems. Identifying operational friction points and engineering data-driven, AI-augmented solutions.' },
  { title: 'Operational Excellence', desc: 'Designing KPI governance frameworks, SLA structures, and process standards that create predictability and measurable performance across the organization.' },
  { title: 'Crisis & Escalation Leadership', desc: 'Managing high-stakes incidents, enterprise escalations, and cross-functional response in complex, security-sensitive, and mission-critical environments.' },
  { title: 'Organizational Scaling', desc: 'Building organizational structure, hiring strategy, and talent infrastructure from the ground up to support rapid company growth.' },
  { title: 'KPI & Data Governance', desc: 'Designing and implementing performance analytics systems that enable data-driven management, forecasting, and operational decision-making.' },
  { title: 'Cross-functional Execution', desc: 'Aligning Product, Engineering, Sales, Finance, and Customer Success around shared operational goals and execution standards.' },
]
export default function Expertise() {
  return (
    <section id="expertise" className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">Core Expertise</p>
          <h2 className="font-display text-4xl font-semibold text-ink leading-tight max-w-lg">Where I Create<br />the Most Value</h2>
          <div className="w-10 h-0.5 bg-gold mt-6" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 rounded-xl overflow-hidden shadow-sm">
          {expertise.map((item, i) => (
            <div key={i} className="bg-white p-7 hover:bg-accent-pale transition-colors duration-200 group">
              <h3 className="font-body font-semibold text-ink text-sm mb-3 leading-snug">{item.title}</h3>
              <p className="font-body text-xs text-ink-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
