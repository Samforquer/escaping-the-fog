// App.tsx
import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Gallery } from './components/Gallery'
import { Shop } from './components/Shop'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

// Import your gallery images here or from a centralized file
import oldMansCave from './assets/gallery/old-mans-cave.jpg'
import woodDucks from './assets/gallery/wood-ducks.jpg'
import layFlatLeaves from './assets/gallery/lay-flat-leaves.jpg'
import frog from './assets/gallery/frog.jpg'
import hummingbird from './assets/gallery/hummingbird.jpg'
import mushroom from './assets/gallery/mushroom.jpg'
import standingAlone from './assets/gallery/standing-alone.jpg'
import deer from './assets/gallery/deer.jpg'

// Helper to preload images and return a promise that resolves when all are loaded
const preloadImages = (urls: string[]) =>
  Promise.all(
    urls.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image()
          img.src = src
          img.onload = () => resolve()
          img.onerror = () => resolve() // resolve even if image fails to avoid blocking
        }),
    ),
  )

const galleryImageUrls = [
  woodDucks,
  hummingbird,
  mushroom,
  frog,
  standingAlone,
  layFlatLeaves,
  deer,
  oldMansCave,
]

export function App() {
  const [galleryPreloaded, setGalleryPreloaded] = useState(false)

  useEffect(() => {
    // Preload gallery images as soon as App mounts
    preloadImages(galleryImageUrls).then(() => {
      setGalleryPreloaded(true)
      // You could console.log('Gallery images preloaded') here if you want
    })
  }, [])

  return (
    <>
      <Navbar />
      <main style={{ marginTop: '56px' }}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route
            path="/gallery"
            element={
              // Optionally show a loading indicator if gallery images aren't ready yet
              galleryPreloaded ? (
                <Gallery />
              ) : (
                <div className="text-center py-5">Loading gallery images…</div>
              )
            }
          />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
