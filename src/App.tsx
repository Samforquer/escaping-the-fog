import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Gallery } from './components/Gallery'
import { Shop } from './components/Shop'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  return (
    <>
      <Navbar />
      <main style={{ marginTop: '56px' }}>
        <Hero />
        <Gallery />
        <Shop />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
