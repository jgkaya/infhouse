'use client'

import { useState, useEffect } from 'react'

export default function Chatbot() {
  const [showSpeechBubble, setShowSpeechBubble] = useState(false)
  const [isPulsing, setIsPulsing] = useState(false)

  // -------------------------------------------------------------------------
  // GÖRSEL AYARLARI
  // -------------------------------------------------------------------------
  // Normal duran hali (Static). Mevcut görseli korudum.
  const STATIC_IMG = "https://cdn.e-adam.net/infhouse/message-notif.png"

  // Göz kırpan hali (GIF). Lütfen buraya .gif uzantılı linki koyunuz!
  // Şimdilik aynısını koydum, değiştiğinde animasyon çalışacaktır.
  const GIF_IMG = "https://cdn.e-adam.net/infhouse/Sohbet_butonu_idle.gif"
  // -------------------------------------------------------------------------

  const [currentImg, setCurrentImg] = useState(STATIC_IMG)

  // Pulsing effect - ara ara büyüyüp küçülme (Css Scale)
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setIsPulsing(true)
      setTimeout(() => setIsPulsing(false), 600) // Pulse duration
    }, 5000 + Math.random() * 3000) // Random interval between 5-8 seconds

    return () => clearInterval(pulseInterval)
  }, [])

  // Göz kırpma animasyonu döngüsü (3-5 saniyede bir)
  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const runAnimationCycle = () => {
      // 1. Göz kırp (GIF)
      setCurrentImg(GIF_IMG)

      // 2. GIF süresi (2.5s) kadar bekle, sonra Statik yap
      setTimeout(() => {
        setCurrentImg(STATIC_IMG)

        // 3. Statik olduktan sonra 3-5 saniye bekle ve tekrar başlat
        const randomDelay = 3000 + Math.random() * 2000 // 3000ms - 5000ms
        timeoutId = setTimeout(runAnimationCycle, randomDelay)
      }, 2500)
    }

    // İlk başlatma
    runAnimationCycle()

    return () => clearTimeout(timeoutId)
  }, [])

  // Manuel tetikleme (Hover vb.)
  const triggerWink = () => {
    setCurrentImg(GIF_IMG)
    setTimeout(() => {
      setCurrentImg(STATIC_IMG)
    }, 2500)
  }

  const handleClick = () => {
    setShowSpeechBubble(!showSpeechBubble)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Speech Bubble */}
      {showSpeechBubble && (
        <div className="mb-3 bg-white text-[#51C46F] px-4 py-3 rounded-2xl shadow-lg max-w-xs animate-fade-in">
          <div className="relative">
            <p className="text-sm font-medium">Bir görüşme ayarlamak istiyorum.</p>
            {/* Triangle pointing down */}
            <div className="absolute -bottom-2 right-4 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white"></div>
          </div>
        </div>
      )}

      {/* Chatbot Button with Pulsing SVG */}
      <button
        onClick={handleClick}
        onMouseEnter={triggerWink}
        className="relative transition-all duration-200 hover:scale-105"
      >
        <img
          src={currentImg}
          alt="Chatbot"
          className={`w-12 h-12 transition-all duration-300 ${isPulsing ? 'scale-125' : 'scale-100'}`}
          draggable={false}
        />
      </button>
    </div>
  )
}
