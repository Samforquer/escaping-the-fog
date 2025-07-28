import { useState, useEffect } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { GalleryImage } from './GalleryImage'

// S3 URLs
const baseUrl = 'https://samuel-forquer-photography.s3.us-east-1.amazonaws.com'

const images = [
  { src: `${baseUrl}/woodducks.jpg` },
  { src: `${baseUrl}/hummingbird.jpg` },
  { src: `${baseUrl}/mushroom.jpg` },
  { src: `${baseUrl}/frog.jpg` },
  { src: `${baseUrl}/foggytree.jpg` },
  { src: `${baseUrl}/layflatleaves.jpg` },
  { src: `${baseUrl}/deer.jpg` },
  { src: `${baseUrl}/oldmanscave.jpg` },
]

export const Gallery = () => {
  const [index, setIndex] = useState(-1)

  // Optional preload
  useEffect(() => {
    images.forEach(({ src }) => {
      const img = new Image()
      img.src = src
    })
  }, [])

  return (
    <section id="gallery" className="container-fluid py-5">
      <h2 className="mb-4">Gallery</h2>
      <div className="row g-3">
        {images.map((image, i) => (
          <div key={i} className="col-6 col-md-4 col-lg-3">
            <GalleryImage
              src={image.src}
              alt={`Image ${i + 1}`}
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
        />
      )}
    </section>
  )
}
