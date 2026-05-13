"use client"

import { useState } from 'react'
import { Copy, Check, CreditCard, QrCode } from 'lucide-react'

// Section Hadiah Pernikahan / Amplop Digital
export default function GiftSection() {
  // State untuk notifikasi copy
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null)
  // State untuk modal QRIS
  const [showQris, setShowQris] = useState(false)

  // Data rekening bank
  const bankAccounts = [
    {
      id: 'bca',
      bank: 'Bank BCA',
      accountNumber: '1234567890',
      accountName: 'Romeo Montague',
      logo: '🏦'
    },
    {
      id: 'mandiri',
      bank: 'Bank Mandiri',
      accountNumber: '0987654321',
      accountName: 'Juliet Capulet',
      logo: '🏦'
    }
  ]

  // Fungsi untuk copy nomor rekening
  const copyToClipboard = async (accountNumber: string, accountId: string) => {
    try {
      await navigator.clipboard.writeText(accountNumber)
      setCopiedAccount(accountId)
      // Reset notifikasi setelah 2 detik
      setTimeout(() => setCopiedAccount(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <section 
      id="gift" 
      className="relative py-16 px-6 batik-pattern"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 to-secondary/95" />
      
      <div className="relative z-10 max-w-xl mx-auto">
        {/* Judul section */}
        <div className="text-center mb-10" data-aos="fade-up">
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">
            Wedding Gift
          </p>
          <h2 className="font-script text-4xl md:text-5xl text-gold-dark">
            Amplop Digital
          </h2>
          <div className="w-24 h-px bg-gold/50 mx-auto mt-4" />
        </div>

        {/* Deskripsi */}
        <p 
          className="text-center font-sans text-sm text-muted-foreground mb-8 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          Tanpa mengurangi rasa hormat, bagi Anda yang ingin memberikan tanda kasih 
          untuk kami, dapat melalui:
        </p>

        {/* Kartu rekening */}
        <div className="space-y-4">
          {bankAccounts.map((account, index) => (
            <div 
              key={account.id}
              className="bg-card/90 backdrop-blur-sm rounded-xl p-5 border border-gold/20 shadow-lg"
              data-aos="fade-up"
              data-aos-delay={100 + index * 50}
            >
              {/* Header bank */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-serif text-lg text-gold-dark">{account.bank}</p>
                  <p className="font-sans text-sm text-muted-foreground">a.n. {account.accountName}</p>
                </div>
              </div>

              {/* Nomor rekening */}
              <div className="flex items-center justify-between bg-muted/50 rounded-lg px-4 py-3">
                <span className="font-mono text-lg text-foreground tracking-wider">
                  {account.accountNumber}
                </span>
                
                {/* Tombol copy */}
                <button
                  onClick={() => copyToClipboard(account.accountNumber, account.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-sans transition-all duration-300 ${
                    copiedAccount === account.id 
                      ? 'bg-sage text-cream' 
                      : 'bg-gold/10 text-gold hover:bg-gold/20'
                  }`}
                >
                  {copiedAccount === account.id ? (
                    <>
                      <Check className="w-4 h-4" />
                      Tersalin!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Salin
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol QRIS */}
        <div className="mt-6" data-aos="fade-up" data-aos-delay="200">
          <button
            onClick={() => setShowQris(true)}
            className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-card/90 backdrop-blur-sm rounded-xl border border-gold/20 shadow-lg hover:bg-card transition-colors"
          >
            <QrCode className="w-6 h-6 text-gold" />
            <span className="font-sans text-foreground">Tampilkan QRIS</span>
          </button>
        </div>
      </div>

      {/* Modal QRIS */}
      {showQris && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brown/80 backdrop-blur-sm"
          onClick={() => setShowQris(false)}
        >
          <div 
            className="bg-card rounded-2xl p-6 max-w-sm w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-serif text-xl text-gold-dark text-center mb-4">
              Scan QRIS
            </h3>
            
            {/* Placeholder QRIS */}
            <div className="aspect-square bg-cream rounded-xl flex items-center justify-center mb-4 border-4 border-gold/30">
              <div className="text-center">
                <QrCode className="w-32 h-32 text-brown/30 mx-auto mb-2" />
                <p className="font-sans text-sm text-muted-foreground">
                  QRIS Code Placeholder
                </p>
              </div>
            </div>

            <p className="font-sans text-sm text-muted-foreground text-center mb-4">
              Romeo & Juliet Wedding
            </p>

            <button
              onClick={() => setShowQris(false)}
              className="w-full px-6 py-3 bg-gold hover:bg-gold-dark text-cream font-sans text-sm tracking-wider uppercase rounded-full transition-colors"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
