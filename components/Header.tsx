"use client";

import { motion } from "framer-motion";

const LOGO_URL = "https://cdn.e-adam.net/infhouse/logo.png";
const ANALIZ_PILL_URL = "https://cdn.e-adam.net/infhouse/sosyalmedya-analiz.png";

const navItems = [
  { label: "İçerik Üreticileri", href: "/icerik-ureticileri" },
  { label: "Markalar", href: "/#markalar" },
  { label: "Çalışmalarımız", href: "/#calismalarimiz" },
  { label: "Paketler", href: "/#paketler" },
  { label: "İletişim", href: "/#iletisim" },
];

export default function Header() {
  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1180px] px-4"
      >
        <div className="relative flex items-center justify-between rounded-full bg-white/90 backdrop-blur-md px-4 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
          {/* inner highlight */}
          <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]" />

          {/* Logo */}
          <a href="/" className="relative z-10 shrink-0 block pl-2">
            <img
              src={LOGO_URL}
              alt="Infhouse"
              className="h-10 md:h-12 w-auto"
              draggable={false}
              loading="eager"
            />
          </a>

          {/* Center menu - Flexbox instead of absolute */}
          <nav className="hidden md:flex items-center justify-center flex-1 px-8 relative z-10">
            <ul className="m-0 p-0 list-none flex items-center gap-8 text-[15px] font-medium text-gray-500">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-black transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA = tek görsel (hazır pill) */}
          <a href="#analiz" className="relative z-10 shrink-0">
            <img
              src={ANALIZ_PILL_URL}
              alt="Sosyal Medya Analiz"
              className="h-8 md:h-10 w-auto"
              draggable={false}
              loading="eager"
            />
          </a>
        </div>
      </motion.header>
    </>
  );
}
