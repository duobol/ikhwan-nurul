"use client"

import { Home, Users, Calendar, Image, MessageSquare } from 'lucide-react'

// Bottom Navigation Bar - Fixed di bagian bawah layar
export default function BottomNavigation() {
  // Data navigasi
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'couple', icon: Users, label: 'Mempelai' },
    { id: 'event', icon: Calendar, label: 'Acara' },
    { id: 'gallery', icon: Image, label: 'Galeri' },
    { id: 'rsvp', icon: MessageSquare, label: 'Ucapan' }
  ]

  // Fungsi scroll ke section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40">
      <div className="flex items-center gap-1 px-3 py-2 bg-card/95 backdrop-blur-md rounded-full border border-gold/20 shadow-xl">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="flex flex-col items-center px-3 py-2 rounded-full text-muted-foreground hover:text-gold hover:bg-gold/10 transition-all duration-200 group"
              aria-label={`Navigasi ke ${item.label}`}
            >
              <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-sans text-[10px] mt-1 opacity-80">
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
