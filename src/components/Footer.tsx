import React from 'react'
export default function Footer() {
  return (
    <footer className="bg-ink py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-body text-xs text-white/30">© {new Date().getFullYear()} Amir Paluch. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/amirpaluch/" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-white/30 hover:text-white/60 transition-colors">LinkedIn</a>
          <a href="mailto:amir.paluch@gmail.com" className="font-mono text-xs text-white/30 hover:text-white/60 transition-colors">Email</a>
        </div>
      </div>
    </footer>
  )
}
