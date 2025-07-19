import React, { useState } from 'react'

interface GalleryImageProps {
  src: string
  alt: string
  onClick: () => void
}

export const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt, onClick }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <img
      src={src}
      alt={alt}
      onLoad={() => setLoaded(true)}
      onClick={onClick}
      className="img-fluid rounded shadow-sm"
      style={{
        cursor: 'pointer',
        opacity: loaded ? 1 : 0,
      }}
    />
  )
}
