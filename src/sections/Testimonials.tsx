import React from 'react'

const testimonials = [
  {
    name: 'Moshe Morad',
    title: 'NOC Operations · Direct Report',
    date: 'August 2024',
    quote: 'Amir is, without a doubt, the best manager I have had the privilege to work with. His leadership style combines a deep understanding of the business with a genuine care for his team\'s growth and well-being. His trust in my abilities gave me the confidence to develop and excel in my role. Amir\'s ability to inspire, mentor, and lead by example sets him apart as a remarkable leader.',
    initials: 'MM',
  },
  {
    name: 'Sandra Ellis Simon',
    title: 'Senior Operations & Finance Leader · Colleague',
    date: 'June 2021',
    quote: 'Amir proved himself to be dependable and a hard worker with solid problem solving and exceptional technical skills. His quick thinking and joyful personality helped diffuse client-facing tensions. To say he\'s a team leader would be an understatement — he\'s gone out of his way to welcome newcomers and resolve any problems they might have. It was a real privilege working with him and learning from him.',
    initials: 'SE',
  },
  {
    name: 'Yaniv Karta',
    title: 'AI/Cybersecurity Leader · Colleague at Varonis',
    date: 'August 2008',
    quote: 'Amir is one of the best professionals I\'ve ever worked with. He has an eye for details and can most certainly detect all the technicalities. He almost single-handedly created and trained the QA team at Varonis. Amir was dedicated to the tasks, even if it meant working late hours. His contribution to the company was immense.',
    initials: 'YK',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-14">
          <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">Recommendations</p>
          <h2 className="font-display text-4xl font-semibold text-ink leading-tight max-w-lg">
            What People Say<br />About Working With Me
          </h2>
          <div className="w-10 h-0.5 bg-gold mt-6" />
          <p className="font-body text-sm text-ink-muted mt-4">
            Via <a href="https://www.linkedin.com/in/amirpaluch/" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">LinkedIn</a>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-stone-200 rounded-2xl p-7 flex flex-col hover:border-accent/30 hover:shadow-md transition-all duration-200"
            >
              {/* Quote mark */}
              <div className="font-display text-5xl text-accent/15 leading-none mb-4 select-none">"</div>

              {/* Quote text */}
              <p className="font-body text-sm text-ink-muted leading-relaxed flex-1 mb-6">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <span className="font-body font-semibold text-white text-xs">{t.initials}</span>
                </div>
                <div>
                  <p className="font-body font-semibold text-ink text-sm">{t.name}</p>
                  <p className="font-mono text-xs text-ink-muted">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
