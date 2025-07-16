import React, { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import oldMansCave from '../assets/gallery/old-mans-cave.jpg'
import woodDucks from '../assets/gallery/wood-ducks.jpg'
import layFlatLeaves from '../assets/gallery/lay-flat-leaves.jpg'
import frog from '../assets/gallery/frog.jpg'
import hummingbird from '../assets/gallery/hummingbird.jpg'
import mushroom from '../assets/gallery/mushroom.jpg'
import standingAlone from '../assets/gallery/standing-alone.jpg'
import deer from '../assets/gallery/deer.jpg'

const images = [
  { src: woodDucks },
  { src: hummingbird },
  { src: mushroom },
  { src: frog },
  { src: standingAlone },
  { src: layFlatLeaves },
  { src: deer },
  { src: oldMansCave },
]

export const Gallery = () => {
  const [index, setIndex] = useState(-1)

  return (
    <section id="gallery" className="container py-5">
      <h2 className="mb-4">Gallery</h2>
      <div className="row g-3">
        {images.map((image, i) => (
          <div key={i} className="col-6 col-md-4 col-lg-3">
            <img
              src={image.src}
              alt={`Image ${i + 1}`}
              className="img-fluid rounded shadow-sm"
              style={{ cursor: 'pointer' }}
              onClick={() => setIndex(i)}
            />
          </div>
        ))}
      </div>

      {index >= 0 && (
        <Lightbox
          slides={images}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          // You can add more props like plugins, animation, etc.
        />
      )}
    </section>
  )
}
