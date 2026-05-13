"use client"

import Image from 'next/image'

interface CoverSectionProps {
  onOpen: () => void
  guestName: string
}

// Section Cover/Hero - Tampilan awal undangan
export default function CoverSection({ onOpen, guestName }: CoverSectionProps) {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8 floral-pattern"
    >
      {/* Background overlay dengan gradien halus */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      
      {/* Ornamen sudut atas kiri */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 opacity-30">
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold">
          <path 
            d="M0 0 Q50 20 100 0 Q80 50 100 100 Q50 80 0 100 Q20 50 0 0" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.5"
          />
          <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
      
      {/* Ornamen sudut bawah kanan */}
      <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-30 rotate-180">
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold">
          <path 
            d="M0 0 Q50 20 100 0 Q80 50 100 100 Q50 80 0 100 Q20 50 0 0" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.5"
          />
          <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Konten utama */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-md mx-auto">
        {/* Teks pembuka */}
        <p className="text-muted-foreground text-sm md:text-base tracking-[0.3em] uppercase mb-2 font-sans">
          The Wedding Of
        </p>

        {/* Foto prewedding dalam bingkai arch */}
        <div className="relative my-6">
          {/* Frame arch */}
          <div className="relative w-56 h-72 md:w-64 md:h-80 overflow-hidden rounded-t-full border-4 border-gold/40 shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=500&fit=crop"
              alt="Foto Prewedding Romeo dan Juliet"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-brown/20 to-transparent" />
          </div>
          {/* Dekorasi frame */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8">
            <svg viewBox="0 0 32 32" className="text-gold">
              <circle cx="16" cy="16" r="6" fill="currentColor" opacity="0.6" />
              <circle cx="16" cy="16" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        </div>

        {/* Nama mempelai */}
        <h1 className="font-script text-5xl md:text-6xl lg:text-7xl text-gold-dark leading-tight">
          Romeo
        </h1>
        <div className="flex items-center gap-4 my-2">
          <span className="w-16 h-px bg-gold/50" />
          <span className="font-serif text-gold text-xl">&</span>
          <span className="w-16 h-px bg-gold/50" />
        </div>
        <h1 className="font-script text-5xl md:text-6xl lg:text-7xl text-gold-dark leading-tight">
          Juliet
        </h1>

        {/* Divider ornamen */}
        <div className="w-40 h-4 ornament-divider my-6" />

        {/* Kotak nama tamu */}
        <div className="bg-card/80 backdrop-blur-sm border border-gold/30 rounded-lg px-6 py-4 mb-6 shadow-md">
          <p className="text-muted-foreground text-xs tracking-wide uppercase mb-1 font-sans">
            Kepada Yth.
          </p>
          <p className="font-serif text-foreground text-lg">
            {guestName}
          </p>
        </div>

        {/* Tombol buka undangan */}
        <button
          onClick={onOpen}
          className="group relative px-8 py-3 bg-gold hover:bg-gold-dark text-cream font-sans text-sm tracking-widest uppercase rounded-full transition-all duration-300 pulse-gold shadow-lg hover:shadow-xl"
        >
          <span className="flex items-center gap-2">
            <svg 
              className="w-4 h-4 transition-transform group-hover:scale-110" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
              />
            </svg>
            Buka Undangan
          </span>
        </button>
      </div>
    </section>
  )
}
