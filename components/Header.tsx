"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const LOGO_URL = "https://cdn.e-adam.net/infhouse/logo.png";
const ANALIZ_PILL_URL = "https://cdn.e-adam.net/infhouse/sosyalmedya-analiz.png";

const navItems = [
  { label: "İçerik Üreticileri", href: "/icerik-ureticileri" },
  { label: "Markalar", href: "/markalar" },
  { label: "Çalışmalarımız", href: "/calismalarimiz" },
  { label: "Paketler", href: "/paketler" },
  { label: "İletişim", href: "/iletisim" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1180px] px-4"
      >
        <div className="relative flex items-center justify-between rounded-full bg-white/90 backdrop-blur-md px-2 md:px-4 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
          {/* inner highlight */}
          <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]" />

          {/* Logo Container for Mobile / Direct Link for Desktop */}
          <Link href="/" className="relative z-10 shrink-0 block">
            <div className="ml-1">
              <img
                src={LOGO_URL}
                alt="Infhouse"
                className="h-8 md:h-12 w-auto"
                draggable={false}
                loading="eager"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center justify-center flex-1 px-8 relative z-10">
            <ul className="m-0 p-0 list-none flex items-center gap-8 text-[15px] font-medium text-gray-500">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-black transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Section: CTA & Hamburger */}
          <div className="flex items-center gap-2 md:gap-4 relative z-10 pr-1 md:pr-0">
            {/* Desktop CTA */}
            <Link href="/sosyal-medya-analizi" className="hidden md:block shrink-0">
              <img
                src={ANALIZ_PILL_URL}
                alt="Sosyal Medya Analiz"
                className="h-10 w-auto"
                draggable={false}
                loading="eager"
              />
            </Link>

            {/* Mobile CTA (Small Pill-like icon) */}
            <Link href="/sosyal-medya-analizi" className="md:hidden flex items-center justify-center mr-1">
              <img
                src="https://cdn.e-adam.net/infhouse/analiz.png"
                alt="Sosyal Medya Analiz"
                className="h-8 w-auto"
                draggable={false}
                loading="eager"
              />
            </Link>

            {/* Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[90%] max-w-[400px] bg-white z-50 md:hidden overflow-y-auto rounded-l-[40px] shadow-2xl"
            >
              <div className="flex flex-col p-8 pt-10 h-full">
                {/* Close Button Inside (Optional, but good for UX) */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-8 right-8 p-2 text-gray-400 hover:text-black transition-colors"
                >
                  <X size={28} />
                </button>

                {/* Analyz Pill */}
                <div className="mb-10">
                  <Link href="/sosyal-medya-analizi" onClick={() => setIsOpen(false)}>
                    <img
                      src={ANALIZ_PILL_URL}
                      alt="Sosyal Medya Analiz"
                      className="h-12 w-auto"
                      draggable={false}
                    />
                  </Link>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-6 mb-12">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-medium text-gray-400 hover:text-black transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                {/* Action Buttons */}
                <div className="flex flex-col gap-4 mb-12">
                  <button className="flex items-center justify-between w-full bg-[#1A1A1A] text-white rounded-full px-6 py-4 font-medium transition-transform hover:scale-[1.02]">
                    <span className="text-lg">Sizi arayalım</span>
                    <ArrowRight size={20} className="text-white/70" />
                  </button>
                  <button className="w-full bg-white border border-gray-200 text-black rounded-full px-6 py-4 font-medium text-lg transition-transform hover:scale-[1.02]">
                    Formu Doldurun
                  </button>
                </div>

                {/* Contact Section */}
                <div className="mt-auto">
                  <h3 className="text-[40px] font-bold mb-6 text-black">İletişim</h3>
                  <div className="flex flex-col gap-3">
                    {/* Phone */}
                    <div className="flex items-center gap-4 bg-[#B4E3FF] rounded-2xl p-4">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <Phone size={20} fill="currentColor" className="text-black" />
                      </div>
                      <span className="font-semibold text-black">+90 (262) 606 18 65</span>
                    </div>
                    {/* Email */}
                    <div className="flex items-center gap-4 bg-[#FFB4C0] rounded-2xl p-4">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <Mail size={20} fill="currentColor" className="text-black" />
                      </div>
                      <span className="font-semibold text-black">hello@infhouse.co</span>
                    </div>
                    {/* Location */}
                    <div className="flex items-center gap-4 bg-[#FFECB4] rounded-2xl p-4">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <MapPin size={20} fill="currentColor" className="text-black" />
                      </div>
                      <span className="font-semibold text-black">İstanbul, Türkiye</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
