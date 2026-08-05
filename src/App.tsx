import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import LogoStrip from './components/LogoStrip'
import Hero from './sections/Hero'
import Summary from './sections/Summary'
import Expertise from './sections/Expertise'
import Impact from './sections/Impact'
import Teams from './sections/Teams'
import Testimonials from './sections/Testimonials'
import Philosophy from './sections/Philosophy'
import CaseStudies from './sections/CaseStudies'
import Focus from './sections/Focus'
import Contact from './sections/Contact'
import DrSchein from './pages/DrSchein'

function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Summary />
        <LogoStrip />
        <Expertise />
        <Impact />
        <Teams />
        <Testimonials />
        <Philosophy />
        <CaseStudies />
        <Focus />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drschein" element={<DrSchein />} />
      </Routes>
    </BrowserRouter>
  )
}
