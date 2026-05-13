"use client"

import { Music, Pause } from 'lucide-react'

interface MusicPlayerProps {
  isPlaying: boolean
  onToggle: () => void
}

// Floating Music Player - Ikon piringan hitam di pojok kanan bawah
export default function MusicPlayer({ isPlaying, onToggle }: MusicPlayerProps) {
  return (
    <button
      onClick={onToggle}
      className="fixed bottom-24 right-4 z-40 w-14 h-14 rounded-full bg-gold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      aria-label={isPlaying ? 'Pause musik' : 'Play musik'}
    >
      {/* Vinyl disc visual */}
      <div className={`absolute inset-1 rounded-full bg-brown ${isPlaying ? 'animate-spin-slow' : ''}`}>
        {/* Vinyl grooves */}
        <div className="absolute inset-2 rounded-full border border-gold/30" />
        <div className="absolute inset-3 rounded-full border border-gold/20" />
        <div className="absolute inset-4 rounded-full border border-gold/10" />
        {/* Center label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-gold/80" />
        </div>
      </div>

      {/* Play/Pause icon overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-brown/60 rounded-full">
        {isPlaying ? (
          <Pause className="w-6 h-6 text-cream" />
        ) : (
          <Music className="w-6 h-6 text-cream" />
        )}
      </div>

      {/* Pulse animation when playing */}
      {isPlaying && (
        <div className="absolute inset-0 rounded-full border-2 border-gold animate-ping opacity-30" />
      )}
    </button>
  )
}
