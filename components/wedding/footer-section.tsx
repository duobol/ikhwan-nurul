"use client"

import { Heart } from 'lucide-react'

// Section Penutup & Footer
export default function FooterSection() {
  return (
    <section 
      id="footer" 
      className="relative py-16 px-6 batik-pattern"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 to-secondary/95" />
      
      <div className="relative z-10 max-w-xl mx-auto text-center">
        {/* Ornamen atas */}
        <div className="flex justify-center mb-8" data-aos="fade-up">
          <svg className="w-24 h-12 text-gold opacity-50" viewBox="0 0 100 50">
            <path 
              d="M0 25 Q25 0 50 25 Q75 50 100 25" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1"
            />
            <circle cx="50" cy="25" r="3" fill="currentColor" />
          </svg>
        </div>

        {/* Ucapan terima kasih */}
        <div data-aos="fade-up" data-aos-delay="100">
          <p className="font-serif text-lg text-foreground leading-relaxed mb-6">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami,<br />
            apabila Bapak/Ibu/Saudara/i berkenan hadir<br />
            untuk memberikan doa restu.
          </p>
          
          <p className="font-sans text-sm text-muted-foreground mb-8">
            Atas kehadiran dan doa restunya,<br />
            kami mengucapkan terima kasih.
          </p>
        </div>

        {/* Nama mempelai */}
        <div data-aos="zoom-in" data-aos-delay="200">
          <p className="font-sans text-sm text-muted-foreground tracking-widest uppercase mb-2">
            Wassalamualaikum Wr. Wb.
          </p>
          <h2 className="font-script text-5xl md:text-6xl text-gold-dark">
            Romeo & Juliet
          </h2>
        </div>

        {/* Divider */}
        <div className="w-40 h-px bg-gold/30 mx-auto my-8" />

        {/* Footer text */}
        <div className="flex items-center justify-center gap-2 text-muted-foreground" data-aos="fade-up" data-aos-delay="300">
          <span className="font-sans text-xs tracking-wider">Created with</span>
          <Heart className="w-3 h-3 text-gold fill-gold" />
          <span className="font-sans text-xs tracking-wider">by Mulyo Premium</span>
        </div>

        {/* Copyright */}
        <p className="font-sans text-xs text-muted-foreground/60 mt-4">
          © 2026 Romeo & Juliet Wedding
        </p>
      </div>
    </section>
  )
}
