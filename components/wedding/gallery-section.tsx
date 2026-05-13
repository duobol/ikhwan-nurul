"use client"

import { useState } from 'react'
import Image from 'next/image'
import { X, Play } from 'lucide-react'

// Section Galeri Foto & Video
export default function GallerySection() {
  // State untuk lightbox
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Data foto galeri (menggunakan Unsplash)
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop",
      alt: "Foto Prewedding 1"
    },
    {
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=400&fit=crop",
      alt: "Foto Prewedding 2"
    },
    {
      src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&h=600&fit=crop",
      alt: "Foto Prewedding 3"
    },
    {
      src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=800&fit=crop",
      alt: "Foto Prewedding 4"
    },
    {
      src: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=600&h=400&fit=crop",
      alt: "Foto Prewedding 5"
    },
    {
      src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=600&fit=crop",
      alt: "Foto Prewedding 6"
    }
  ]

  return (
    <section 
      id="gallery" 
      className="relative py-16 px-6 floral-pattern"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 to-background/90" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Judul section */}
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">
            Captured Moments
          </p>
          <h2 className="font-script text-4xl md:text-5xl text-gold-dark">
            Galeri Foto
          </h2>
          <div className="w-24 h-px bg-gold/50 mx-auto mt-4" />
        </div>

        {/* Grid galeri (masonry-like) */}
        <div 
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {photos.map((photo, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden rounded-xl shadow-lg cursor-pointer group ${
                index === 0 || index === 3 ? 'row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(photo.src)}
            >
              <div className={`relative ${
                index === 0 || index === 3 ? 'h-64 md:h-96' : 'h-32 md:h-44'
              }`}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay hover */}
                <div className="absolute inset-0 bg-gold-dark/0 group-hover:bg-gold-dark/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-cream/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Placeholder */}
        <div 
          className="mt-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg bg-brown/10">
            {/* YouTube embed placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-card/90">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                <Play className="w-8 h-8 text-gold" />
              </div>
              <p className="font-serif text-foreground">Video Prewedding</p>
              <p className="font-sans text-sm text-muted-foreground mt-1">Coming Soon</p>
            </div>
            {/* Uncomment untuk embed YouTube asli */}
            {/* <iframe 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            /> */}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 lightbox-overlay bg-brown/80"
          onClick={() => setSelectedImage(null)}
        >
          {/* Tombol close */}
          <button 
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-cream/90 flex items-center justify-center shadow-lg hover:bg-cream transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-5 h-5 text-brown" />
          </button>

          {/* Gambar */}
          <div 
            className="relative max-w-4xl max-h-[85vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Foto yang diperbesar"
              fill
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  )
}
