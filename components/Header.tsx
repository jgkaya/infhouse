"use client";

import { motion } from "framer-motion";

const LOGO_URL = "https://cdn.e-adam.net/infhouse/logo.png";
const ANALIZ_PILL_URL = "https://cdn.e-adam.net/infhouse/sosyalmedya-analiz.png";

const navItems = [
  { label: "İçerik Üreticileri", href: "#icerik-ureticileri" },
  { label: "Markalar", href: "/markalar" },
  { label: "Çalışmalarımız", href: "/calismalarimiz" },
  { label: "Paketler", href: "#paketler" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Header() {
  return (
    <div className="sticky top-0 z-50 bg-[#fbfaf7]">
      <div className="h-2" />

      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="mx-auto max-w-[1180px] px-4"
      >
        <div className="relative flex items-center justify-between rounded-full bg-white/85 backdrop-blur-md px-5 md:px-6 py-2 md:py-2.5 shadow-[0_16px_46px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
          {/* inner highlight */}
          <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]" />

          {/* Logo */}
          <a href="/" className="relative z-10 shrink-0">
            <img
              src={LOGO_URL}
              alt="Infhouse"
              className="h-9 md:h-10 w-auto"
              draggable={false}
              loading="eager"
              decoding="async"
            />
          </a>

          {/* Center menu */}
          <nav className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:block">
            <ul className="m-0 p-0 list-none flex items-center gap-10 text-[14px] font-medium text-black/45">
              {navItems.map((item) => (
                <li key={item.href} className="m-0 p-0">
                  <a
                    href={item.href}
                    className="no-underline hover:no-underline text-black/45 hover:text-black transition-colors whitespace-nowrap"
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
              className="h-10 md:h-11 w-auto"
              draggable={false}
              loading="eager"
              decoding="async"
            />
          </a>
        </div>
      </motion.header>

      <div className="h-2" />
    </div>
  );
}
