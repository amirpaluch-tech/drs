import React from 'react'
const principles = [
  { num: '01', title: 'Operations enable growth.', body: 'Operations should create the conditions for business growth — not just support it after the fact. The best operational teams move ahead of demand.' },
  { num: '02', title: 'CX is an operational responsibility.', body: "Customer experience is not a department. It's an outcome of operational decisions made every day — from process design to escalation handling." },
  { num: '03', title: 'Process creates clarity, not bureaucracy.', body: "Good process removes ambiguity. It empowers people to make decisions faster, not slower. When process slows things down, it's the process that needs fixing." },
  { num: '04', title: 'Metrics must drive behavior.', body: "A KPI that isn't tied to decisions is noise. The right metrics make the right behavior obvious — and make underperformance visible before it becomes a crisis." },
  { num: '05', title: 'Culture is built under pressure.', body: 'How a team performs during an outage, a critical escalation, or a missed SLA defines the operational culture more than any values document.' },
  { num: '06', title: 'AI augments human operations.', body: 'Automation and AI should take repetitive, low-judgment work off human plates — freeing operators to focus on complexity, judgment, and customer relationships.' },
]
export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">Leadership Philosophy</p>
          <h2 className="font-display text-4xl font-semibold text-ink leading-tight max-w-lg">How I Think About<br />Operations &amp; Leadership</h2>
          <div className="w-10 h-0.5 bg-gold mt-6" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((p) => (
            <div key={p.num} className="group">
              <p className="font-mono text-xs text-stone-300 mb-4 group-hover:text-accent transition-colors duration-200">{p.num}</p>
              <h3 className="font-display text-lg font-semibold text-ink mb-3 leading-snug italic">"{p.title}"</h3>
              <p className="font-body text-sm text-ink-muted leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
