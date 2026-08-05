import React, { useState, useEffect } from 'react'
const links = [
  { label: 'Summary', href: '#summary' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Impact', href: '#impact' },
  { label: 'Teams', href: '#teams' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Case Studies', href: '#cases' },
  { label: 'Contact', href: '#contact' },
]
export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-stone-200' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="font-display text-lg font-semibold text-ink tracking-tight">Amir Paluch</a>
        <nav className="hidden md:flex items-center gap-5">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-xs font-body text-ink-muted hover:text-accent transition-colors duration-200 whitespace-nowrap">{l.label}</a>
          ))}
          <a href="#contact" className="ml-2 px-4 py-2 bg-accent text-white text-xs font-body font-medium rounded hover:bg-accent-light transition-colors duration-200">Get in Touch</a>
        </nav>
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`block w-6 h-0.5 bg-ink transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-ink transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-ink transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-stone-200 px-6 pb-6 pt-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-base font-body text-ink-muted hover:text-accent">{l.label}</a>
          ))}
        </div>
      )}
    </header>
  )
}
