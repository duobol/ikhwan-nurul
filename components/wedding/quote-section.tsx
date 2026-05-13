"use client"

// Section Kutipan/Quote - Ayat suci atau kutipan romantis
export default function QuoteSection() {
  return (
    <section 
      id="quote" 
      className="relative min-h-[70vh] flex flex-col items-center justify-center px-6 py-16 batik-pattern"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 to-background/90" />
      
      {/* Konten */}
      <div 
        className="relative z-10 max-w-lg mx-auto text-center"
        data-aos="fade-up"
      >
        {/* Ornamen pembuka */}
        <div className="flex justify-center mb-8">
          <svg className="w-16 h-16 text-gold opacity-60" viewBox="0 0 64 64">
            <path 
              d="M32 4 L36 24 L56 24 L40 36 L46 56 L32 44 L18 56 L24 36 L8 24 L28 24 Z" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Kutipan ayat */}
        <blockquote className="font-serif text-lg md:text-xl text-foreground leading-relaxed italic mb-6">
          {'"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang."'}
        </blockquote>

        {/* Sumber kutipan */}
        <p className="font-sans text-sm text-gold tracking-widest uppercase">
          — QS. Ar-Rum: 21 —
        </p>

        {/* Ornamen penutup */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-3">
            <span className="w-12 h-px bg-gold/40" />
            <svg className="w-6 h-6 text-gold" viewBox="0 0 24 24">
              <path 
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
                fill="currentColor" 
                opacity="0.7"
              />
            </svg>
            <span className="w-12 h-px bg-gold/40" />
          </div>
        </div>
      </div>
    </section>
  )
}
