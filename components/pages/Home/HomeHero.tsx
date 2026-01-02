"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const VIDEO_1 =
  "https://video.e-adam.net/download/web-videos/236e80f3-1946-4801-9ea3-1873fdbf4218-1080.mp4";
const VIDEO_2 =
  "https://video.e-adam.net/download/web-videos/8103b25f-ab40-4149-bfa3-ac5371611f79-1080.mp4";

const cats = [
  { label: "Güzellik", iconSrc: "https://cdn.e-adam.net/infhouse/g%C3%BCzellik.png" },
  { label: "Moda", iconSrc: "https://cdn.e-adam.net/infhouse/moda.png" },
  { label: "Teknoloji", iconSrc: "https://cdn.e-adam.net/infhouse/teknoloji.png" },
  { label: "Dekorasyon", iconSrc: "https://cdn.e-adam.net/infhouse/deco.png" },
  { label: "Daha Fazlası", iconSrc: "https://cdn.e-adam.net/infhouse/more.png" },
];

const brandAvatars = [
  "https://cdn.e-adam.net/infhouse/1.jpg",
  "https://cdn.e-adam.net/infhouse/2.png",
  "https://cdn.e-adam.net/infhouse/3.jpg",
  "https://cdn.e-adam.net/infhouse/4.jpg",
];

// Görseldeki gridin “hissi” için lideri Güzellik yaptım (ilk o settle ediyor)
const leaderLabel = "Güzellik";
const CARD_W = 90;
const CARD_H = 76;
const GAP = 8;

// Görseldeki dizilime göre:
// [Güzellik]   [ ]
// [Moda]       [Teknoloji]
// [Dekorasyon] [Daha Fazlası]
function getGridPos(label: string) {
  switch (label) {
    case "Güzellik":
      return { col: 0, row: 0 };
    case "Moda":
      return { col: 0, row: 1 };
    case "Teknoloji":
      return { col: 1, row: 1 };
    case "Dekorasyon":
      return { col: 0, row: 2 };
    case "Daha Fazlası":
    default:
      return { col: 1, row: 2 };
  }
}

const catVariants = (label: string, idx: number) => {
  const { col, row } = getGridPos(label);
  const isLeader = label === leaderLabel;

  const targetX = col * (CARD_W + GAP);
  const targetY = row * (CARD_H + GAP);

  return {
    hidden: {
      opacity: isLeader ? 1 : 0.85,
      x: 0,
      y: 0,
      scale: isLeader ? 1 : 0.95,
      zIndex: isLeader ? 50 : 40 - idx,
    },
    show: {
      opacity: 1,
      x: targetX,
      y: targetY,
      scale: 1,
      zIndex: 1,
      transition: { duration: 0.65, ease, delay: 0.15 + idx * 0.08 },
    },
  };
};

function BrandsStatCard() {
  return (
    <div className="rounded-[18px] bg-white/95 backdrop-blur-md px-4 py-3 shadow-[0_18px_55px_rgba(0,0,0,0.14)] ring-1 ring-black/5">
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2">
          {brandAvatars.map((src, i) => (
            <div
              key={i}
              className="h-8 w-8 overflow-hidden rounded-full ring-2 ring-white shadow-sm"
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
          <div className="text-[11px] text-black/55">Markalarımız</div>
          <div className="mt-0.5 text-[24px] font-extrabold tracking-tight text-black">
            10000+
          </div>
          <div className="text-[11px] text-black/55">UGC anlaşması yaptı.</div>
        </div>
      </div>
    </div>
  );
}

function PlatformsCard() {
  return (
    <div className="rounded-[18px] bg-white/95 backdrop-blur-md px-4 py-3 shadow-[0_18px_55px_rgba(0,0,0,0.14)] ring-1 ring-black/5">
      <div className="text-[12px] font-medium text-black/75">
        Tüm platformlarınız için özgün içerik
      </div>

      <div className="mt-2.5 flex items-center gap-2">
        <img
          src="https://cdn.simpleicons.org/instagram"
          alt="Instagram"
          className="h-[18px] w-[18px]"
          draggable={false}
        />
        <img
          src="https://cdn.simpleicons.org/meta"
          alt="Meta"
          className="h-[18px] w-[18px]"
          draggable={false}
        />
        <img
          src="https://cdn.e-adam.net/infhouse/amazon.png"
          alt="Amazon"
          className="h-[18px] w-[18px]"
          draggable={false}
        />
        <img
          src="https://cdn.simpleicons.org/tiktok"
          alt="TikTok"
          className="h-[18px] w-[18px]"
          draggable={false}
        />
        <img
          src="https://cdn.simpleicons.org/shopify"
          alt="Shopify"
          className="h-[18px] w-[18px]"
          draggable={false}
        />
      </div>
    </div>
  );
}

function CategoryCard({ label, iconSrc }: { label: string; iconSrc?: string }) {
  return (
    <div className="group relative w-[90px] h-[76px] rounded-[14px] bg-white ring-1 ring-black/5 shadow-[0_6px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.14)] transition-all duration-300 overflow-hidden">
      <img
        src={iconSrc || ""}
        alt={label}
        className="w-full h-full object-contain p-3 grayscale-[0.05] group-hover:grayscale-0 transition-all duration-300"
        draggable={false}
        loading="lazy"
      />
    </div>
  );
}

function PhoneVideo({
  src,
  className,
  delay = 0,
  start = false,
  radius = 46,
}: {
  src: string;
  className: string;
  delay?: number;
  start?: boolean;
  radius?: number;
}) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    let alive = true;

    const harden = () => {
      v.muted = true;
      v.defaultMuted = true;
      v.volume = 0;
      v.setAttribute("muted", "");
      v.setAttribute("playsinline", "true");
      v.setAttribute("webkit-playsinline", "true");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      v.playsInline = true as any;
      v.loop = true;
      v.preload = "auto";
    };

    const playSafe = async () => {
      if (!alive) return;
      harden();
      try {
        const p = v.play();
        if (p) await p;
      } catch {
        setTimeout(() => {
          if (!alive) return;
          try {
            v.play().catch(() => { });
          } catch { }
        }, 200);
      }
    };

    const pauseSafe = () => {
      if (!alive) return;
      try {
        v.pause();
      } catch { }
    };

    const onLoadedData = () => {
      if (!alive) return;
      setReady(true);
      if (start) playSafe();
    };

    v.addEventListener("loadeddata", onLoadedData);

    harden();
    if (start) {
      playSafe();
    } else {
      pauseSafe();
      try {
        v.currentTime = 0;
      } catch { }
    }

    return () => {
      alive = false;
      v.removeEventListener("loadeddata", onLoadedData);
    };
  }, [start, src]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 34, y: 10, scale: 0.985 }}
      animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      transition={{ duration: 0.75, ease, delay }}
      className={className}
    >
      <div
        className="relative overflow-hidden bg-white shadow-[0_34px_96px_rgba(0,0,0,0.22)] ring-1 ring-black/5"
        style={{ borderRadius: radius }}
      >
        <div className="relative aspect-[9/16] w-full">
          {!ready && <div className="absolute inset-0 bg-black/10" />}

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

function GradientStat({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-medium tracking-[-0.05em] bg-[linear-gradient(90deg,#FFDADE_0%,#FF6C7C_100%)] bg-clip-text text-transparent">
      {children}
    </span>
  );
}

export default function HomeHero() {
  const [startVideos, setStartVideos] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStartVideos(true), 650);
    return () => clearTimeout(t);
  }, []);

  const leader = cats.find((c) => c.label === leaderLabel);
  const rest = cats.filter((c) => c.label !== leaderLabel);
  const orderedCats = leader ? [leader, ...rest] : cats;

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[#fbfaf7]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.12),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.10),transparent_60%)]" />

      <div className="relative mx-auto max-w-[1180px] px-4 pt-28 pb-24 md:pt-32 md:pb-28">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-32">
          {/* LEFT */}
          <div className="md:pt-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(91.38deg, rgba(175, 243, 173, 0.3) 2.28%, rgba(255, 235, 6, 0.3) 51.6%, rgba(255, 98, 123, 0.3) 99.98%)",
                  boxShadow: "0px 1.5px 0px 0px #000000",
                }}
                className="inline-flex items-center justify-center gap-2 w-fit h-[40px] px-6 rounded-full border border-black whitespace-nowrap"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path
                    d="M12 2L14.39 9.61L22 12L14.39 14.39L12 22L9.61 14.39L2 12L9.61 9.61L12 2Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="font-['Inter_Tight',sans-serif] font-normal text-[16px] leading-[1] tracking-[-0.02em] text-center capitalize text-black">
                  Hızlı Büyümek İsteyen Markalar İçin
                </span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path
                    d="M12 2L14.39 9.61L22 12L14.39 14.39L12 22L9.61 14.39L2 12L9.61 9.61L12 2Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease, delay: 0.05 }}
              className="mt-7 text-[44px] leading-[1.03] md:text-[44px] md:leading-[52px] font-[500] font-['Instrument_Sans',sans-serif] text-black"
            >
              <GradientStat>+500</GradientStat> markanın tercihi,
              <br />
              <GradientStat>+5000</GradientStat> içerik üreticisinin gücü.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.12 }}
              className="mt-5 text-[26px] font-normal font-['Inter_Tight',sans-serif] text-black/50"
            >
              Gerçek videolar, güçlü sonuçlar.
            </motion.p>

            <div className="mt-8 flex flex-wrap md:flex-nowrap items-center gap-3">
              <button className="group inline-flex items-center gap-2.5 h-[50px] rounded-full bg-[#232323] text-white pl-6 pr-5 text-[15px] font-semibold whitespace-nowrap shadow-[0_18px_44px_rgba(0,0,0,0.16)] hover:bg-[#1f1f1f] transition">
                Sizi arayalım
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="translate-y-[0.5px]">
                  <path
                    d="M10 17l5-5-5-5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button className="inline-flex items-center justify-center h-[50px] rounded-full bg-white px-6 text-[15px] font-semibold text-black whitespace-nowrap ring-1 ring-black/10 shadow-[0_10px_26px_rgba(0,0,0,0.06)] hover:bg-white/95 transition">
                Formu Doldurun
              </button>

              <button className="inline-flex items-center justify-center h-[50px] rounded-full bg-emerald-200/70 px-6 text-[15px] font-semibold text-black whitespace-nowrap ring-1 ring-black/5 shadow-[0_10px_26px_rgba(0,0,0,0.06)] hover:bg-emerald-200 transition">
                Ücretsiz Sosyal Medya Analizi
              </button>
            </div>
          </div>

          {/* RIGHT SHORE (Visibility Restored - Ultra Minimalist) */}
          <div className="relative mx-auto mt-10 h-[560px] w-[500px] md:mt-24 md:h-[650px] md:w-[580px]">
            {/* Back Phone (Natural Staircase) */}
            <PhoneVideo
              src={VIDEO_2}
              start={startVideos}
              delay={0.14}
              radius={52}
              className="absolute right-0 top-[120px] w-[210px] md:right-0 md:top-[120px] md:w-[280px] z-0 opacity-95"
            />

            {/* Front Phone (Centered Overlap) */}
            <div className="absolute left-0 top-0 z-10 w-[240px] md:left-0 md:w-[300px]">
              <PhoneVideo
                src={VIDEO_1}
                start={startVideos}
                delay={0.06}
                radius={52}
                className="relative w-full"
              />

              {/* Brands card (Fine-tuned inside-left overlap) */}
              <motion.div
                initial={{ opacity: 0, x: 60, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.75, delay: 0.4, ease }}
                className="absolute left-[-35px] top-[60px] z-30 w-max"
              >
                <BrandsStatCard />
              </motion.div>

              {/* Platforms card (Fine-tuned alignment) */}
              <motion.div
                initial={{ opacity: 0, x: 60, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.5, ease }}
                className="absolute left-[-30px] bottom-[85px] z-30"
              >
                <PlatformsCard />
              </motion.div>
            </div>

            {/* Categories (Ultra Minimal Grid) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease }}
              className="absolute right-[-10px] bottom-[-10px] z-30"
            >
              <div
                className="relative"
                style={{
                  width: CARD_W * 2 + GAP,
                  height: CARD_H * 3 + GAP * 2,
                }}
              >
                {orderedCats.map((c, idx) => (
                  <motion.div
                    key={c.label}
                    variants={catVariants(c.label, idx)}
                    initial="hidden"
                    animate="show"
                    className="absolute left-0 top-0"
                  >
                    <CategoryCard label={c.label} iconSrc={c.iconSrc} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
