import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-accent text-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="max-w-2xl mx-auto text-center">
          <p className="font-mono text-xs tracking-widest text-white/40 uppercase mb-6">Get in Touch</p>

          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white leading-tight mb-6">
            Let's Talk Operations
          </h2>

          <div className="w-10 h-0.5 bg-gold mx-auto mb-8" />

          <p className="font-body text-base text-white/60 leading-relaxed mb-12 max-w-lg mx-auto">
            I'm available immediately for senior VP and executive leadership conversations.
            Whether you're a recruiter, founder, or executive team — I welcome a direct conversation.
          </p>

          {/* Primary contact buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="https://www.linkedin.com/in/amirpaluch/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-accent font-body font-semibold text-sm rounded hover:bg-stone-100 transition-colors duration-200 shadow-lg"
            >
              Connect on LinkedIn
            </a>
            <a
              href="mailto:amir.paluch@gmail.com"
              className="px-8 py-4 border border-white/30 text-white font-body font-medium text-sm rounded hover:border-white/60 hover:bg-white/10 transition-colors duration-200"
            >
              amir.paluch@gmail.com
            </a>
            <a
              href="tel:+972504444006"
              className="px-8 py-4 border border-white/30 text-white font-body font-medium text-sm rounded hover:border-white/60 hover:bg-white/10 transition-colors duration-200"
            >
              +972-50-444-4006
            </a>
          </div>

          {/* WhatsApp */}
          <div className="mb-8">
            <a
              href="https://wa.link/lnkfjn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-body font-semibold text-sm rounded hover:bg-[#1ebe5d] transition-colors duration-200 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Message on WhatsApp
            </a>
          </div>

          {/* Downloads */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/Amir_Paluch_Executive_Profile.pdf"
              download="Amir_Paluch_Executive_Profile.pdf"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gold/60 text-gold font-body font-medium text-sm rounded hover:bg-gold/10 hover:border-gold transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Portfolio
            </a>
            <a
              href="/Amir_Paluch_CV.pdf"
              download="Amir_Paluch_CV.pdf"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white/70 font-body font-medium text-sm rounded hover:bg-white/10 hover:border-white/40 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download CV
            </a>
          </div>

          <p className="font-mono text-xs text-white/30 mt-16">
            Based in Israel · Available Globally
          </p>
        </div>

      </div>
    </section>
  )
}
