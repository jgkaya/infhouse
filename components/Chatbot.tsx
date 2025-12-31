'use client'

import { useState, useEffect } from 'react'

export default function Chatbot() {
  const [showSpeechBubble, setShowSpeechBubble] = useState(false)
  const [isPulsing, setIsPulsing] = useState(false)

  // Pulsing effect - ara ara büyüyüp küçülme
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setIsPulsing(true)
      setTimeout(() => setIsPulsing(false), 600) // Pulse duration
    }, 5000 + Math.random() * 3000) // Random interval between 5-8 seconds

    return () => clearInterval(pulseInterval)
  }, [])

  const handleClick = () => {
    setShowSpeechBubble(!showSpeechBubble)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Speech Bubble */}
      {showSpeechBubble && (
        <div className="mb-3 bg-green-500 text-white px-4 py-3 rounded-2xl shadow-lg max-w-xs animate-fade-in">
          <div className="relative">
            <p className="text-sm font-medium">Bir görüşme ayarlamak istiyorum.</p>
            {/* Triangle pointing down */}
            <div className="absolute -bottom-2 right-4 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-green-500"></div>
          </div>
        </div>
      )}

      {/* Chatbot Button with Pulsing SVG */}
      <button
        onClick={handleClick}
        className="relative transition-all duration-200 shadow-lg bg-white rounded-full p-2 hover:scale-105"
      >
        <img
          src="https://cdn.e-adam.net/infhouse/chatbot.svg"
          alt="Chatbot"
          className={`w-12 h-12 transition-all duration-300 ${isPulsing ? 'scale-125' : 'scale-100'}`}
          draggable={false}
        />
      </button>
    </div>
  )
}
