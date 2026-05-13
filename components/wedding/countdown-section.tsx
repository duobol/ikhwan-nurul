"use client"

import { useState, useEffect } from 'react'

// Section Countdown Timer - Hitung mundur menuju hari H
export default function CountdownSection() {
  // Tanggal pernikahan
  const weddingDate = new Date('2026-02-14T08:00:00').getTime()
  
  // State untuk waktu tersisa
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  // Effect untuk menghitung waktu tersisa
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = weddingDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      }
    }

    // Hitung pertama kali
    calculateTimeLeft()
    
    // Update setiap detik
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [weddingDate])

  // Data untuk ditampilkan
  const timeUnits = [
    { value: timeLeft.days, label: 'Hari' },
    { value: timeLeft.hours, label: 'Jam' },
    { value: timeLeft.minutes, label: 'Menit' },
    { value: timeLeft.seconds, label: 'Detik' }
  ]

  return (
    <section 
      id="countdown" 
      className="relative py-16 px-6 floral-pattern"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 to-background/90" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Judul section */}
        <div className="text-center mb-10" data-aos="fade-up">
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">
            Counting Down To
          </p>
          <h2 className="font-script text-4xl md:text-5xl text-gold-dark">
            Hari Bahagia
          </h2>
          <div className="w-24 h-px bg-gold/50 mx-auto mt-4" />
        </div>

        {/* Countdown boxes */}
        <div 
          className="flex justify-center gap-3 md:gap-6"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          {timeUnits.map((unit, index) => (
            <div 
              key={unit.label}
              className="flex flex-col items-center"
            >
              {/* Kotak angka */}
              <div className="w-16 h-16 md:w-24 md:h-24 bg-card/90 backdrop-blur-sm rounded-xl border border-gold/30 shadow-lg flex items-center justify-center mb-2">
                <span className="font-serif text-2xl md:text-4xl text-gold-dark font-semibold">
                  {String(unit.value).padStart(2, '0')}
                </span>
              </div>
              {/* Label */}
              <span className="font-sans text-xs md:text-sm text-muted-foreground tracking-wider uppercase">
                {unit.label}
              </span>
              
              {/* Separator (kecuali item terakhir) */}
              {index < timeUnits.length - 1 && (
                <span className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 font-serif text-2xl text-gold hidden md:block">
                  :
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Tanggal pernikahan */}
        <div className="text-center mt-10" data-aos="fade-up" data-aos-delay="200">
          <p className="font-serif text-lg text-foreground">
            Sabtu, 14 Februari 2026
          </p>
          <p className="font-sans text-sm text-muted-foreground mt-1">
            Pukul 08.00 WIB
          </p>
        </div>
      </div>
    </section>
  )
}
