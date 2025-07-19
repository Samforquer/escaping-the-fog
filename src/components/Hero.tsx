import React from 'react'
import layFlatLeaves from '../assets/gallery/lay-flat-leaves.jpg'

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="d-flex align-items-center justify-content-center text-white text-center position-relative"
      style={{
        height: '100vh',
        width: '100vw',
        backgroundImage: `url(${layFlatLeaves})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1 }}
      />

      {/* Hero Content */}
      <div className="position-relative z-2 px-4">
        <h1 className="display-2 fw-bold mb-4">Samuel Forquer Photography</h1>
        <p className="lead mb-5 fs-4">Come check out my photos!</p>
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
