import React from 'react'
export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-stone-50 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: `linear-gradient(to right, #1A3A5C 1px, transparent 1px), linear-gradient(to bottom, #1A3A5C 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-mono text-xs tracking-widest text-accent uppercase mb-6">Available for Senior Leadership Roles</p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-ink leading-tight mb-4">Amir Paluch</h1>
            <p className="font-body text-xl text-ink-muted font-medium mb-6 leading-snug">
              VP Operations &amp; Customer Experience<br />
              <span className="text-base text-stone-300 font-normal">SaaS · Cybersecurity · Fintech</span>
            </p>
            <div className="w-12 h-0.5 bg-gold mb-8" />
            <p className="font-body text-lg text-ink-soft leading-relaxed mb-4 font-medium">Scaling global operations, customer organizations, and AI-enabled operational systems.</p>
            <p className="font-body text-base text-ink-muted leading-relaxed mb-10 max-w-lg">I help technology-driven organizations create operational clarity, scale customer-facing teams, improve service reliability, and turn complex execution environments into measurable business outcomes.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#summary" className="px-7 py-3 bg-accent text-white font-body font-medium text-sm rounded hover:bg-accent-light transition-colors duration-200 shadow-sm">View Leadership Profile</a>
              <a href="https://www.linkedin.com/in/amirpaluch/" target="_blank" rel="noopener noreferrer" className="px-7 py-3 border border-accent text-accent font-body font-medium text-sm rounded hover:bg-accent-pale transition-colors duration-200">Connect on LinkedIn</a>
            </div>
            <div className="mt-14 pt-8 border-t border-stone-200 grid grid-cols-3 gap-6">
              {[{ num: '20+', label: 'Years in Operations' }, { num: '4+', label: 'Companies Scaled' }, { num: '24/7', label: 'Mission-Critical Ops' }].map(s => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-semibold text-accent">{s.num}</p>
                  <p className="font-body text-xs text-ink-muted mt-1 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-3 border border-accent/20 rounded-2xl" />
              <div className="absolute -inset-6 border border-accent/10 rounded-3xl" />
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
                <img src="/amir-paluch.jpg" alt="Amir Paluch" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white border border-stone-200 rounded-lg px-4 py-3 shadow-lg">
                <p className="font-mono text-xs text-accent font-medium">Israel · Global</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
