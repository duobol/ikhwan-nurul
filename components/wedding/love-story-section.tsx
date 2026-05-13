"use client"

import { Heart } from 'lucide-react'

// Section Love Story / Timeline - Kisah cinta mempelai
export default function LoveStorySection() {
  // Data timeline kisah cinta
  const stories = [
    {
      year: "2020",
      title: "Pertemuan Pertama",
      description: "Kami bertemu pertama kali di sebuah pesta dansa di Verona. Pandangan mata kami bertemu dan seketika dunia terasa berhenti."
    },
    {
      year: "2021",
      title: "Menjadi Kekasih",
      description: "Setelah setahun mengenal satu sama lain, kami memutuskan untuk menjalin hubungan yang lebih serius. Cinta kami tumbuh semakin kuat."
    },
    {
      year: "2023",
      title: "Melamar",
      description: "Di bawah balkon yang indah, Romeo berlutut dan melamar Juliet. Air mata kebahagiaan mengalir saat Juliet mengatakan 'Ya'."
    },
    {
      year: "2026",
      title: "Menikah",
      description: "Akhirnya impian kami menjadi kenyataan. Kami akan menyatukan dua keluarga dan memulai kehidupan baru bersama."
    }
  ]

  return (
    <section 
      id="story" 
      className="relative py-16 px-6 batik-pattern"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 to-secondary/95" />
      
      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Judul section */}
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">
            Our Journey
          </p>
          <h2 className="font-script text-4xl md:text-5xl text-gold-dark">
            Kisah Cinta
          </h2>
          <div className="w-24 h-px bg-gold/50 mx-auto mt-4" />
        </div>

        {/* Timeline vertikal */}
        <div className="relative">
          {/* Garis vertikal */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gold/30 md:-translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-8">
            {stories.map((story, index) => (
              <div 
                key={story.year}
                className={`relative flex items-start gap-4 md:gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Titik timeline */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-gold rounded-full border-4 border-card -translate-x-1/2 z-10 shadow-md" />

                {/* Konten - Mobile selalu di kanan, Desktop bergantian */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                }`}>
                  {/* Tahun */}
                  <div className={`flex items-center gap-2 mb-2 ${
                    index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                  }`}>
                    <Heart className="w-4 h-4 text-gold" />
                    <span className="font-serif text-lg text-gold font-semibold">
                      {story.year}
                    </span>
                  </div>

                  {/* Card */}
                  <div className="bg-card/90 backdrop-blur-sm rounded-xl p-5 border border-gold/20 shadow-lg">
                    <h3 className="font-serif text-xl text-gold-dark mb-2">
                      {story.title}
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      {story.description}
                    </p>
                  </div>
                </div>

                {/* Spacer untuk desktop */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
