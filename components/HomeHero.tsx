"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const VIDEO_1 =
  "https://video.e-adam.net/download/web-videos/236e80f3-1946-4801-9ea3-1873fdbf4218-1080.mp4";
const VIDEO_2 =
  "https://video.e-adam.net/download/web-videos/8103b25f-ab40-4149-bfa3-ac5371611f79-1080.mp4";

/** Sağ alttaki kategori kartları: iconSrc’leri sen CDN’den dolduracaksın */
const cats = [
  { label: "Güzellik", iconSrc: "https://cdn.e-adam.net/infhouse/beauty.png" },
  { label: "Moda", iconSrc: "https://cdn.e-adam.net/infhouse/fashion.png" },
  { label: "Teknoloji", iconSrc: "https://cdn.e-adam.net/infhouse/laptop.png" },
  { label: "Dekorasyon", iconSrc: "https://cdn.e-adam.net/infhouse/sofa.png" },
  { label: "Daha Fazlası", iconSrc: "https://cdn.e-adam.net/infhouse/category.png" },
];

// TODO: CDN avatarlarınızla değiştirin (3 tane yeter)
const brandAvatars = [
  "https://cdn.e-adam.net/infhouse/1.jpg",
  "https://cdn.e-adam.net/infhouse/2.png",
  "https://cdn.e-adam.net/infhouse/3.jpg",
  "https://cdn.e-adam.net/infhouse/4.jpg",

];

const chipsWrap = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.22 },
  },
};

const chipItem = {
  hidden: { opacity: 0, x: 20, y: 8, scale: 0.98 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease },
  },
};

function BrandsStatCard() {
  return (
    <div className="rounded-[18px] bg-white/95 backdrop-blur-md px-5 py-4 shadow-[0_18px_55px_rgba(0,0,0,0.14)] ring-1 ring-black/5">
      <div className="flex items-center gap-4">
        <div className="flex -space-x-2">
          {brandAvatars.map((src, i) => (
            <div
              key={i}
              className="h-9 w-9 overflow-hidden rounded-full ring-2 ring-white shadow-sm"
            >
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>

        <div className="leading-[1.12]">
          <div className="text-[12px] text-black/55">Markalarımız</div>
          <div className="mt-0.5 text-[28px] font-extrabold tracking-tight text-black">
            10000+
          </div>
          <div className="text-[12px] text-black/55">UGC anlaşması yaptı.</div>
        </div>
      </div>
    </div>
  );
}

function PlatformsCard() {
  return (
    <div className="rounded-[18px] bg-white/95 backdrop-blur-md px-5 py-4 shadow-[0_18px_55px_rgba(0,0,0,0.14)] ring-1 ring-black/5">
      <div className="text-[13px] font-medium text-black/75">
        Tüm platformlarınız için özgün içerik
      </div>

      <div className="mt-3 flex items-center gap-2.5">
        {/* İstersen bunları da CDN ikonlarına çeviririz */}
        <img
          src="https://cdn.simpleicons.org/instagram"
          alt="Instagram"
          className="h-[22px] w-[22px]"
          draggable={false}
        />
        <img
          src="https://cdn.simpleicons.org/meta"
          alt="Meta"
          className="h-[22px] w-[22px]"
          draggable={false}
        />
        <img
          src="https://cdn.e-adam.net/infhouse/amazon.png"
          alt="Amazon"
          className="h-[22px] w-[22px]"
          draggable={false}
        />
        <img
          src="https://cdn.simpleicons.org/tiktok"
          alt="TikTok"
          className="h-[22px] w-[22px]"
          draggable={false}
        />
        <img
          src="https://cdn.simpleicons.org/shopify"
          alt="Shopify"
          className="h-[22px] w-[22px]"
          draggable={false}
        />
      </div>
    </div>
  );
}

function CategoryCard({
  label,
  iconSrc,
}: {
  label: string;
  iconSrc?: string;
}) {
  return (
    <div
      className="
        rounded-[18px]
        bg-white/95 backdrop-blur-md
        px-4 py-3
        shadow-[0_16px_44px_rgba(0,0,0,0.16)]
        ring-1 ring-black/5
        w-[110px]
      "
    >
      <div className="grid place-items-center">
        <div className="grid h-10 w-10 place-items-center rounded-[14px] bg-white ring-1 ring-black/5">
          {iconSrc ? (
            <img
              src={iconSrc}
              alt=""
              className="h-6 w-6 object-contain"
              draggable={false}
            />
          ) : (
            // placeholder: CDN gelince otomatik kalkacak
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 14.5l2.2-2.2 2 2L16.5 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2Z"
                stroke="currentColor"
                strokeWidth="2"
                opacity="0.35"
              />
            </svg>
          )}
        </div>

        <div className="mt-2 text-center text-[12px] font-medium text-black/70">
          {label}
        </div>
      </div>
    </div>
  );
}

function PhoneVideo({
  src,
  className,
  delay = 0,
  start = false,
}: {
  src: string;
  className: string;
  delay?: number;
  start?: boolean;
}) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    let alive = true;

    const attemptPlay = async () => {
      if (!alive || !start) return;
      try {
        v.muted = true;
        v.playsInline = true as any;
        v.loop = true;
        // iOS bazen currentTime atamasını sevmiyor
        try {
          v.currentTime = 0;
        } catch {}
        const p = v.play();
        if (p) await p;
      } catch {
        // küçük retry: bazı tarayıcılar 1. denemeyi reddediyor
        setTimeout(() => {
          if (!alive) return;
          try {
            v.play().catch(() => {});
          } catch {}
        }, 250);
      }
    };

    const onCanPlay = () => attemptPlay();
    const onLoaded = () => attemptPlay();

    if (start) {
      attemptPlay();
      v.addEventListener("canplay", onCanPlay);
      v.addEventListener("loadeddata", onLoaded);
    } else {
      v.pause();
    }

    return () => {
      alive = false;
      v.removeEventListener("canplay", onCanPlay);
      v.removeEventListener("loadeddata", onLoaded);
    };
  }, [start]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 34, y: 10, scale: 0.985 }}
      animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      transition={{ duration: 0.75, ease, delay }}
      className={className}
    >
      <div className="relative overflow-hidden rounded-[34px] bg-white shadow-[0_34px_96px_rgba(0,0,0,0.22)] ring-1 ring-black/5">
        <div className="relative aspect-[9/16] w-full bg-black/10">
          <video
            ref={ref}
            className="h-full w-full object-cover"
            src={src}
            muted
            playsInline
            loop
            autoPlay
            preload="auto"
          />
          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]" />
        </div>
      </div>
    </motion.div>
  );
}

export default function HomeHero() {
  const [startVideos, setStartVideos] = useState(false);

  // Önce layout/kartlar gelsin -> sonra videolar
  useEffect(() => {
    const t = setTimeout(() => setStartVideos(true), 650);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[#fbfaf7]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.12),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.10),transparent_60%)]" />

      <div className="relative mx-auto max-w-[1180px] px-4 pt-10 pb-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* LEFT (referans soldaki gibi) */}
          <div className="md:pt-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <span
                className="
                  inline-flex items-center
                  rounded-full px-5 py-2
                  text-[13px] font-medium
                  text-black/70
                  bg-[linear-gradient(90deg,rgba(167,243,208,0.70),rgba(253,164,175,0.42))]
                  ring-1 ring-black/5
                  shadow-[0_14px_26px_rgba(0,0,0,0.06)]
                  backdrop-blur
                "
              >
                Hızlı Büyümek İsteyen Markalar İçin
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease, delay: 0.05 }}
              className="
                mt-7
                text-[42px] leading-[1.03]
                md:text-[46px] md:leading-[1.02]
                font-extrabold tracking-tight
                text-black
              "
            >
              <span className="text-pink-400/90">+500</span> markanın tercihi,
              <br />
              <span className="text-pink-400/90">+5000</span> içerik üreticisinin
              gücü.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.12 }}
              className="mt-5 text-[16px] text-black/40"
            >
              Gerçek videolar, güçlü sonuçlar.
            </motion.p>

            {/* CTA: 3’ü aynı satır (md ve üstü), mobilde alt alta düşebilir */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease, delay: 0.18 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <button
                className="
                  group inline-flex items-center gap-3
                  rounded-full bg-black text-white
                  px-8 py-4 text-[15px] font-semibold
                  shadow-[0_18px_44px_rgba(0,0,0,0.18)]
                  hover:bg-black/90 transition
                "
              >
                Sizi arayalım
                <span className="inline-grid h-9 w-9 place-items-center rounded-full bg-white/10 group-hover:bg-white/15 transition">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M10 17l5-5-5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>

              <button
                className="
                  inline-flex items-center
                  rounded-full bg-white/85
                  px-8 py-4 text-[15px] font-semibold text-black
                  ring-1 ring-black/10
                  shadow-[0_12px_30px_rgba(0,0,0,0.06)]
                  hover:bg-white transition
                "
              >
                Formu Doldurun
              </button>

              <button
                className="
                  inline-flex items-center
                  rounded-full bg-emerald-200/70
                  px-8 py-4 text-[15px] font-semibold text-black
                  ring-1 ring-black/5
                  shadow-[0_12px_30px_rgba(0,0,0,0.06)]
                  hover:bg-emerald-200 transition
                "
              >
                Ücretsiz Sosyal Medya Analizi
              </button>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-[620px]">
              {/* Arka telefon */}
              <PhoneVideo
                src={VIDEO_2}
                start={startVideos}
                delay={0.14}
                className="absolute right-0 top-12 w-[270px] md:w-[300px] opacity-95"
              />

              {/* Ön telefon */}
              <div className="relative pl-6 md:pl-10">
                <PhoneVideo
                  src={VIDEO_1}
                  start={startVideos}
                  delay={0.06}
                  className="relative w-[360px] md:w-[420px]"
                />

                {/* 10000+ kart */}
                <motion.div
                  initial={{ opacity: 0, x: -26, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, ease, delay: 0.18 }}
                  className="absolute left-10 md:left-14 top-4"
                >
                  <BrandsStatCard />
                </motion.div>

                {/* platform kartı */}
                <motion.div
                  initial={{ opacity: 0, x: -26, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, ease, delay: 0.28 }}
                  className="absolute left-2 md:left-4 bottom-16"
                >
                  <PlatformsCard />
                </motion.div>

                {/* kategori kartları: kare + ikon üstte + yazı altta (referans gibi) */}
                <motion.div
                  variants={chipsWrap}
                  initial="hidden"
                  animate="show"
                  className="absolute right-[-18px] md:right-[-22px] bottom-10 grid grid-cols-2 gap-3"
                >
                  {cats.map((c) => (
                    <motion.div key={c.label} variants={chipItem}>
                      <CategoryCard label={c.label} iconSrc={c.iconSrc} />
                    </motion.div>
                  ))}
                </motion.div>

                {/* alt yazı */}
                <div className="pointer-events-none absolute left-6 md:left-10 -bottom-6 w-[360px] md:w-[420px] text-center text-xs text-black/35">
                  Tüm platformlarımız için içerik üretin!
                </div>
              </div>
            </div>

            <div className="md:hidden h-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
