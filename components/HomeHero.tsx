"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const VIDEO_1 =
  "https://video.e-adam.net/download/web-videos/236e80f3-1946-4801-9ea3-1873fdbf4218-1080.mp4";
const VIDEO_2 =
  "https://video.e-adam.net/download/web-videos/8103b25f-ab40-4149-bfa3-ac5371611f79-1080.mp4";

/** Sağ alttaki kategori kartları */
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

/** =========================================================
 *  ✅ KATEGORİ ANİMASYONU (Teknoloji önde, arkadan dağılım)
 *  ========================================================= */
const leaderLabel = "Teknoloji";
const CARD_W = 112;
const CARD_H = 92;
const GAP = 12;

function getGridPos(label: string) {
  switch (label) {
    case "Teknoloji":
      return { col: 0, row: 0, span2: false };
    case "Moda":
      return { col: 1, row: 0, span2: false };
    case "Güzellik":
      return { col: 0, row: 1, span2: false };
    case "Dekorasyon":
      return { col: 1, row: 1, span2: false };
    case "Daha Fazlası":
    default:
      return { col: 0, row: 2, span2: true };
  }
}

const catVariants = (label: string, idx: number) => {
  const { col, row, span2 } = getGridPos(label);
  const isLeader = label === leaderLabel;

  const targetX = col * (CARD_W + GAP);
  const targetY = row * (CARD_H + GAP);
  const centeredX = span2 ? (CARD_W + GAP) / 2 : targetX;

  return {
    hidden: {
      opacity: isLeader ? 1 : 0.92,
      x: 0,
      y: 0,
      scale: isLeader ? 1 : 0.985,
      zIndex: isLeader ? 50 : 40 - idx,
    },
    show: {
      opacity: 1,
      x: centeredX,
      y: targetY,
      scale: 1,
      zIndex: 1,
      transition: { duration: 0.55, ease, delay: 0.10 + idx * 0.06 },
    },
  };
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

function CategoryCard({ label, iconSrc }: { label: string; iconSrc?: string }) {
  return (
    <img
      src={iconSrc || ""}
      alt={label}
  className="
    w-[112px] h-[92px]
    rounded-[18px] bg-white
    px-4 py-3
    ring-1 ring-black/10
    shadow-[0_12px_28px_rgba(0,0,0,0.10)]
    flex flex-col items-center justify-center
    [image-rendering:auto]
    [text-rendering:geometricPrecision]
    [font-smoothing:antialiased]
    [-webkit-font-smoothing:antialiased]
    [-moz-osx-font-smoothing:grayscale]
    [transform:translateZ(0)]
    [backface-visibility:hidden]
    [will-change:transform]
  "
      draggable={false}
      loading="lazy"
    />
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
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    let alive = true;

    const harden = () => {
      // autoplay policy için şart
      v.muted = true;
      v.defaultMuted = true;
      v.volume = 0;

      v.setAttribute("muted", "");
      v.setAttribute("playsinline", "true");
      v.setAttribute("webkit-playsinline", "true");

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
        // bazı tarayıcılar ilk denemeyi reddedebiliyor
        setTimeout(() => {
          if (!alive) return;
          try {
            v.play().catch(() => {});
          } catch {}
        }, 200);
      }
    };

    const pauseSafe = () => {
      if (!alive) return;
      try {
        v.pause();
      } catch {}
    };

    const onLoadedData = () => {
      if (!alive) return;
      setReady(true);
      // start true ise hemen başlat
      if (start) playSafe();
    };

    v.addEventListener("loadeddata", onLoadedData);

    // ilk mount
    harden();
    if (start) {
      playSafe();
    } else {
      pauseSafe();
      try {
        v.currentTime = 0;
      } catch {}
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
      <div className="relative overflow-hidden rounded-[34px] bg-white shadow-[0_34px_96px_rgba(0,0,0,0.22)] ring-1 ring-black/5">
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
    <span
      className="
        font-medium tracking-[-0.05em]
        bg-[linear-gradient(90deg,#FFDADE_0%,#FF6C7C_100%)]
        bg-clip-text text-transparent
      "
    >
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

      <div className="relative mx-auto max-w-[1180px] px-4 pt-10 pb-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* LEFT */}
          <div className="md:pt-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <a
                className="
                  inline-block
                  rounded-full
                  overflow-hidden
                  shadow-[0_10px_26px_rgba(0,0,0,0.06)]
                  ring-1 ring-black/5
                  hover:opacity-95 transition
                "
                aria-label="Ücretsiz Sosyal Medya Analizi"
              >
                <img
                  src="https://cdn.e-adam.net/infhouse/buton.png"
                  alt="Ücretsiz Sosyal Medya Analizi"
                  className="h-[56px] w-auto block"
                  draggable={false}
                />
              </a>
            </motion.div>

            {/* ✅ BAŞLIK: md’de 40px / 500 / Instrument Sans */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease, delay: 0.05 }}
              className="
                mt-7
                text-[42px] leading-[1.03]
                md:text-[40px] md:leading-[49px]
                font-[500]
                font-['Instrument_Sans',sans-serif]
                text-black
              "
            >
              <GradientStat>+500</GradientStat> markanın tercihi,
              <br />
              <GradientStat>+5000</GradientStat> içerik üreticisinin gücü.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.12 }}
              className="mt-5 text-[26px] font-normal font-['Inter_Tight',sans-serif] text-black/40"

            >
              Gerçek videolar, güçlü sonuçlar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease, delay: 0.18 }}
              className="
                mt-9
                grid
                grid-cols-[auto_auto]
                items-center
                gap-x-4 gap-y-4
              "
            >
              <button
                className="
                  group inline-flex items-center gap-3
                  h-[56px]
                  rounded-full
                  bg-[#232323] text-white
                  pl-8 pr-4
                  text-[15px] font-semibold
                  shadow-[0_18px_44px_rgba(0,0,0,0.16)]
                  hover:bg-[#1f1f1f] transition
                "
              >
                Sizi arayalım
                <span className="inline-grid h-10 w-10 place-items-center rounded-full bg-white/10 group-hover:bg-white/15 transition">
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
                  inline-flex items-center justify-center
                  h-[56px]
                  rounded-full
                  bg-white
                  px-8
                  text-[15px] font-semibold text-black
                  ring-1 ring-black/10
                  shadow-[0_10px_26px_rgba(0,0,0,0.06)]
                  hover:bg-white/95 transition
                "
              >
                Formu Doldurun
              </button>

              <button
                className="
                  col-span-2 justify-self-start
                  inline-flex items-center justify-center
                  h-[56px]
                  rounded-full
                  bg-emerald-200/70
                  px-8
                  text-[15px] font-semibold text-black
                  ring-1 ring-black/5
                  shadow-[0_10px_26px_rgba(0,0,0,0.06)]
                  hover:bg-emerald-200 transition
                "
              >
                Ücretsiz Sosyal Medya Analizi
              </button>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-[620px] overflow-visible">
  {/* Back phone */}
<PhoneVideo
  src={VIDEO_2}
  start={startVideos}
  delay={0.14}
  className="
    absolute
    right-[-78px] md:right-[-110px]
    top-[86px] md:top-[96px]
    w-[270px] md:w-[300px]
    z-0
    opacity-95
  "
/>



  {/* Front phone + overlays */}
  <div className="relative pl-6 md:pl-10 z-10">
    <PhoneVideo
      src={VIDEO_1}
      start={startVideos}
      delay={0.06}
      className="relative w-[360px] md:w-[420px]"
    />

                <motion.div
                  initial={{ opacity: 0, x: -26, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, ease, delay: 0.18 }}
                  className="absolute left-10 md:left-14 top-4 z-20"
                >
                  <BrandsStatCard />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, ease }}
                  className="absolute left-2 md:left-4 bottom-16 z-20"
                >
                  <PlatformsCard />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, ease }}
                  className="absolute right-[-18px] md:right-[-22px] bottom-10 z-20"
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

            <div className="md:hidden h-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
