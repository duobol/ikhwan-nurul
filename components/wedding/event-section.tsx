"use client"

import { MapPin, Calendar, Clock } from 'lucide-react'

// Section Detail Acara - Akad & Resepsi
export default function EventSection() {
  // Data acara
  const events = [
    {
      title: "Akad Nikah",
      date: "Sabtu, 14 Februari 2026",
      time: "08.00 - 10.00 WIB",
      venue: "Masjid Agung Al-Falah",
      address: "Jl. Raya Verona No. 123, Kelurahan Montague, Kecamatan Capulet, Kota Verona 12345",
      mapsUrl: "https://maps.google.com/?q=Masjid+Agung"
    },
    {
      title: "Resepsi",
      date: "Sabtu, 14 Februari 2026",
      time: "11.00 - 14.00 WIB",
      venue: "Ballroom Grand Verona Hotel",
      address: "Jl. Raya Verona No. 456, Kelurahan Montague, Kecamatan Capulet, Kota Verona 12345",
      mapsUrl: "https://maps.google.com/?q=Grand+Verona+Hotel"
    }
  ]

  return (
    <section 
      id="event" 
      className="relative py-16 px-6 batik-pattern"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 to-secondary/95" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Judul section */}
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">
            Save The Date
          </p>
          <h2 className="font-script text-4xl md:text-5xl text-gold-dark">
            Jadwal Acara
          </h2>
          <div className="w-24 h-px bg-gold/50 mx-auto mt-4" />
        </div>

        {/* Grid acara */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {events.map((event, index) => (
            <div 
              key={event.title}
              className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gold/20 shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Judul acara */}
              <h3 className="font-serif text-2xl text-gold-dark text-center mb-6">
                {event.title}
              </h3>

              {/* Detail waktu */}
              <div className="space-y-4">
                {/* Tanggal */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-sans text-xs text-muted-foreground uppercase tracking-wide mb-1">
                      Tanggal
                    </p>
                    <p className="font-serif text-foreground">
                      {event.date}
                    </p>
                  </div>
                </div>

                {/* Jam */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-sans text-xs text-muted-foreground uppercase tracking-wide mb-1">
                      Waktu
                    </p>
                    <p className="font-serif text-foreground">
                      {event.time}
                    </p>
                  </div>
                </div>

                {/* Lokasi */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-sans text-xs text-muted-foreground uppercase tracking-wide mb-1">
                      Tempat
                    </p>
                    <p className="font-serif text-foreground mb-1">
                      {event.venue}
                    </p>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      {event.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tombol Google Maps */}
              <a
                href={event.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 bg-gold hover:bg-gold-dark text-cream font-sans text-sm tracking-wider uppercase rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <MapPin className="w-4 h-4" />
                Lihat Lokasi
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
