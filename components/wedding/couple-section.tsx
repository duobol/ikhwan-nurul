"use client"

import Image from 'next/image'
import { Instagram } from 'lucide-react'

// Section Profil Mempelai
export default function CoupleSection() {
  return (
    <section 
      id="couple" 
      className="relative py-16 px-6 floral-pattern"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background/95" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Judul section */}
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">
            Bride & Groom
          </p>
          <h2 className="font-script text-4xl md:text-5xl text-gold-dark">
            Mempelai
          </h2>
          <div className="w-24 h-px bg-gold/50 mx-auto mt-4" />
        </div>

        {/* Container mempelai */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          
          {/* Mempelai Pria */}
          <div 
            className="flex flex-col items-center text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Foto dengan frame aesthetic */}
            <div className="relative mb-6">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gold/40 shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                  alt="Foto Romeo - Mempelai Pria"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Dekorasi frame */}
              <div className="absolute -bottom-2 -right-2 w-12 h-12">
                <svg viewBox="0 0 48 48" className="text-gold">
                  <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                </svg>
              </div>
            </div>

            {/* Nama lengkap */}
            <h3 className="font-script text-3xl md:text-4xl text-gold-dark mb-1">
              Romeo Montague
            </h3>
            
            {/* Nama panggilan */}
            <p className="font-serif text-lg text-foreground mb-3">
              Romeo
            </p>
            
            {/* Nama orang tua */}
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              Putra dari<br />
              <span className="text-foreground">Bapak Antonio Montague</span><br />
              <span className="text-muted-foreground">&</span><br />
              <span className="text-foreground">Ibu Maria Montague</span>
            </p>

            {/* Link Instagram */}
            <a 
              href="https://instagram.com/romeo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 text-gold hover:text-gold-dark transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span className="font-sans text-sm">@romeo</span>
            </a>
          </div>

          {/* Konektor/Ampersand */}
          <div 
            className="flex flex-col items-center"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center">
              <span className="font-script text-4xl md:text-5xl text-gold">&</span>
            </div>
          </div>

          {/* Mempelai Wanita */}
          <div 
            className="flex flex-col items-center text-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {/* Foto dengan frame aesthetic */}
            <div className="relative mb-6">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gold/40 shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face"
                  alt="Foto Juliet - Mempelai Wanita"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Dekorasi frame */}
              <div className="absolute -bottom-2 -left-2 w-12 h-12">
                <svg viewBox="0 0 48 48" className="text-gold">
                  <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                </svg>
              </div>
            </div>

            {/* Nama lengkap */}
            <h3 className="font-script text-3xl md:text-4xl text-gold-dark mb-1">
              Juliet Capulet
            </h3>
            
            {/* Nama panggilan */}
            <p className="font-serif text-lg text-foreground mb-3">
              Juliet
            </p>
            
            {/* Nama orang tua */}
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              Putri dari<br />
              <span className="text-foreground">Bapak Lorenzo Capulet</span><br />
              <span className="text-muted-foreground">&</span><br />
              <span className="text-foreground">Ibu Isabella Capulet</span>
            </p>

            {/* Link Instagram */}
            <a 
              href="https://instagram.com/juliet" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 text-gold hover:text-gold-dark transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span className="font-sans text-sm">@juliet</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
