import React from 'react'
import layFlatLeaves from '../assets/gallery/lay-flat-leaves.jpg'

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="vh-100 w-100 d-flex align-items-center justify-content-center text-white position-relative text-center"
      style={{
        backgroundImage: `url(${layFlatLeaves})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
      />

      <div className="position-relative px-4" style={{ maxWidth: '2000px' }}>
        <h1 className="display-2 fw-bold mb-4">Escape the Fog</h1>
        <p className="lead mb-5 fs-4">
          Where stillness speaks louder than noise. Explore moments of clarity, emotion, and art.
        </p>
        <a href="#shop" className="btn btn-primary btn-lg me-3 shadow-sm">
          Shop Prints
        </a>
        <a href="#gallery" className="btn btn-outline-light btn-lg shadow-sm">
          View Gallery
        </a>
      </div>
    </section>
  )
}
