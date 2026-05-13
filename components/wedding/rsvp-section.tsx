"use client"

import { useState } from 'react'
import { Send, User, Check } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'

// Interface untuk data ucapan
interface Wish {
  id: number
  name: string
  attendance: 'hadir' | 'tidak_hadir' | 'ragu'
  message: string
  timestamp: string
}

// Section RSVP & Buku Tamu
export default function RSVPSection() {
  // State untuk form
  const [name, setName] = useState('')
  const [attendance, setAttendance] = useState<'hadir' | 'tidak_hadir' | 'ragu'>('hadir')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Data ucapan contoh (dalam produksi, ini akan dari database)
  const [wishes, setWishes] = useState<Wish[]>([
    {
      id: 1,
      name: "Benvolio",
      attendance: "hadir",
      message: "Selamat menempuh hidup baru Romeo & Juliet! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Bahagia selalu!",
      timestamp: "2 jam yang lalu"
    },
    {
      id: 2,
      name: "Mercutio",
      attendance: "hadir",
      message: "Wah akhirnya kalian menikah juga! Bahagia selalu ya bro dan sister! Nanti jangan lupa undang main ke rumah baru~",
      timestamp: "5 jam yang lalu"
    },
    {
      id: 3,
      name: "Friar Lawrence",
      attendance: "hadir",
      message: "Anak-anakku tersayang, semoga pernikahan kalian membawa kebahagiaan dan kedamaian. Tuhan memberkati kalian berdua.",
      timestamp: "1 hari yang lalu"
    },
    {
      id: 4,
      name: "Nurse",
      attendance: "hadir",
      message: "Juliet sayangku, aku sangat bahagia melihatmu menikah. Romeo, jaga Juliet baik-baik ya!",
      timestamp: "2 hari yang lalu"
    }
  ])

  // Handler submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!name.trim() || !message.trim()) return

    setIsSubmitting(true)

    // Simulasi pengiriman (dalam produksi, ini akan ke API)
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Tambah ucapan baru
    const newWish: Wish = {
      id: Date.now(),
      name: name.trim(),
      attendance,
      message: message.trim(),
      timestamp: "Baru saja"
    }

    setWishes(prev => [newWish, ...prev])
    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form setelah delay
    setTimeout(() => {
      setName('')
      setMessage('')
      setIsSubmitted(false)
    }, 2000)
  }

  // Mapping label kehadiran
  const attendanceLabel = {
    hadir: { text: 'Akan Hadir', color: 'bg-sage/20 text-sage' },
    tidak_hadir: { text: 'Tidak Hadir', color: 'bg-destructive/20 text-destructive' },
    ragu: { text: 'Masih Ragu', color: 'bg-gold/20 text-gold-dark' }
  }

  return (
    <section 
      id="rsvp" 
      className="relative py-16 px-6 floral-pattern"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 to-background/90" />
      
      <div className="relative z-10 max-w-xl mx-auto">
        {/* Judul section */}
        <div className="text-center mb-10" data-aos="fade-up">
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">
            RSVP & Wishes
          </p>
          <h2 className="font-script text-4xl md:text-5xl text-gold-dark">
            Kirim Ucapan
          </h2>
          <div className="w-24 h-px bg-gold/50 mx-auto mt-4" />
        </div>

        {/* Form RSVP */}
        <form 
          onSubmit={handleSubmit}
          className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 border border-gold/20 shadow-lg mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Input Nama */}
          <div className="mb-4">
            <label className="block font-sans text-sm text-muted-foreground mb-2">
              Nama Anda
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama Anda"
              className="w-full px-4 py-3 bg-muted/50 border border-gold/20 rounded-lg font-sans text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 transition-colors"
              required
            />
          </div>

          {/* Radio Kehadiran */}
          <div className="mb-4">
            <label className="block font-sans text-sm text-muted-foreground mb-2">
              Konfirmasi Kehadiran
            </label>
            <div className="flex flex-wrap gap-2">
              {(['hadir', 'tidak_hadir', 'ragu'] as const).map((option) => (
                <label
                  key={option}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer transition-all ${
                    attendance === option 
                      ? 'bg-gold text-cream' 
                      : 'bg-muted/50 text-muted-foreground hover:bg-muted'
                  }`}
                >
                  <input
                    type="radio"
                    name="attendance"
                    value={option}
                    checked={attendance === option}
                    onChange={() => setAttendance(option)}
                    className="sr-only"
                  />
                  <span className="font-sans text-sm">
                    {option === 'hadir' && 'Hadir'}
                    {option === 'tidak_hadir' && 'Tidak Hadir'}
                    {option === 'ragu' && 'Masih Ragu'}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Textarea Ucapan */}
          <div className="mb-6">
            <label className="block font-sans text-sm text-muted-foreground mb-2">
              Ucapan & Doa
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tuliskan ucapan dan doa terbaik Anda..."
              rows={4}
              className="w-full px-4 py-3 bg-muted/50 border border-gold/20 rounded-lg font-sans text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 transition-colors resize-none"
              required
            />
          </div>

          {/* Tombol Submit */}
          <button
            type="submit"
            disabled={isSubmitting || isSubmitted}
            className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-sans text-sm tracking-wider uppercase transition-all duration-300 ${
              isSubmitted 
                ? 'bg-sage text-cream' 
                : 'bg-gold hover:bg-gold-dark text-cream'
            } disabled:opacity-70`}
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-cream/30 border-t-cream rounded-full animate-spin" />
                Mengirim...
              </>
            ) : isSubmitted ? (
              <>
                <Check className="w-4 h-4" />
                Terkirim!
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Kirim Ucapan
              </>
            )}
          </button>
        </form>

        {/* Daftar Ucapan */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="font-serif text-xl text-gold-dark text-center mb-4">
            Ucapan dari Tamu
          </h3>
          
          <ScrollArea className="h-80 rounded-xl border border-gold/20 bg-card/50 backdrop-blur-sm">
            <div className="p-4 space-y-4">
              {wishes.map((wish) => (
                <div 
                  key={wish.id}
                  className="bg-card/90 rounded-xl p-4 border border-gold/10"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                        <User className="w-4 h-4 text-gold" />
                      </div>
                      <div>
                        <p className="font-serif text-foreground">{wish.name}</p>
                        <p className="font-sans text-xs text-muted-foreground">{wish.timestamp}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-sans ${attendanceLabel[wish.attendance].color}`}>
                      {attendanceLabel[wish.attendance].text}
                    </span>
                  </div>
                  
                  {/* Message */}
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {wish.message}
                  </p>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </section>
  )
}
