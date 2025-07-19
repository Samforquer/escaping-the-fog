// App.tsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
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
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
