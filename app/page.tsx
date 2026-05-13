"use client"

import { useState, useEffect, useRef } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Import all sections
import CoverSection from '@/components/wedding/cover-section'
import QuoteSection from '@/components/wedding/quote-section'
import CoupleSection from '@/components/wedding/couple-section'
import EventSection from '@/components/wedding/event-section'
import CountdownSection from '@/components/wedding/countdown-section'
import LoveStorySection from '@/components/wedding/love-story-section'
import GallerySection from '@/components/wedding/gallery-section'
import GiftSection from '@/components/wedding/gift-section'
import RSVPSection from '@/components/wedding/rsvp-section'
import FooterSection from '@/components/wedding/footer-section'
import MusicPlayer from '@/components/wedding/music-player'
import BottomNavigation from '@/components/wedding/bottom-navigation'

export default function WeddingPage() {
  // State untuk menampilkan undangan setelah tombol diklik
  const [isOpen, setIsOpen] = useState(false)
  // State untuk musik
  const [isPlaying, setIsPlaying] = useState(false)
  // Ref untuk audio
  const audioRef = useRef<HTMLAudioElement>(null)
  
  // Inisialisasi AOS (Animate On Scroll)
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
      offset: 50,
    })
  }, [])

  // Fungsi untuk membuka undangan dan memutar musik
  const handleOpenInvitation = () => {
    setIsOpen(true)
    setIsPlaying(true)
    // Scroll ke section pembukaan
    setTimeout(() => {
      const quoteSection = document.getElementById('quote')
      if (quoteSection) {
        quoteSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  // Toggle musik play/pause
  const toggleMusic = () => {
    setIsPlaying(!isPlaying)
  }

  // Efek untuk kontrol audio
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => {
          // Browser mungkin memblokir autoplay
          setIsPlaying(false)
        })
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying])

  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Audio Element - Using a royalty-free wedding music */}
      <audio 
        ref={audioRef} 
        loop 
        preload="auto"
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      />

      {/* Cover Section - Selalu tampil */}
      <CoverSection 
        onOpen={handleOpenInvitation} 
        guestName="Bapak/Ibu/Saudara/i"
      />

      {/* Konten undangan - Tampil setelah dibuka */}
      {isOpen && (
        <>
          <QuoteSection />
          <CoupleSection />
          <EventSection />
          <CountdownSection />
          <LoveStorySection />
          <GallerySection />
          <GiftSection />
          <RSVPSection />
          <FooterSection />
          
          {/* Floating Music Player */}
          <MusicPlayer isPlaying={isPlaying} onToggle={toggleMusic} />
          
          {/* Bottom Navigation */}
          <BottomNavigation />
        </>
      )}
    </main>
  )
}
