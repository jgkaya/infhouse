"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

interface BubbleProps {
    src?: string;
    size: number;
    x: string;
    y: string;
    delay: number;
    zIndex?: number;
}

const bubbles: BubbleProps[] = [
    // Top Left
    { src: "https://cdn.e-adam.net/infhouse/i%C3%A7erik1.png", size: 140, x: "7%", y: "18%", delay: 0.4 },
    // Inner Top Left
    { src: "https://cdn.e-adam.net/infhouse/i%C3%A7erik2.png", size: 150, x: "24%", y: "26%", delay: 0.5 },
    // Bottom Left (Sunglasses)
    { src: "https://cdn.e-adam.net/infhouse/i%C3%A7erik4.png", size: 210, x: "2%", y: "63%", delay: 0.6 },
    // Inner Bottom Left
    { src: "https://cdn.e-adam.net/infhouse/i%C3%A7erik3.png", size: 160, x: "22%", y: "86%", delay: 0.7 },

    // Top Right
    { src: "https://cdn.e-adam.net/infhouse/i%C3%A7erik8.png", size: 160, x: "92%", y: "24%", delay: 0.45 },
    // Inner Mid Right
    { src: "https://cdn.e-adam.net/infhouse/i%C3%A7erik5.png", size: 150, x: "76%", y: "40%", delay: 0.55 },
    // Bottom Right
    { src: "https://cdn.e-adam.net/infhouse/i%C3%A7erik7.png", size: 180, x: "92%", y: "67%", delay: 0.75 },
    // Inner Bottom Right
    { src: "https://cdn.e-adam.net/infhouse/i%C3%A7erik6.png", size: 140, x: "71%", y: "87%", delay: 0.65 },
];

function Bubble({ src, size, x, y, delay, zIndex = 20 }: BubbleProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5, left: "50%", top: "50%" }}
            whileInView={{
                opacity: 1,
                scale: 1,
                left: x,
                top: y,
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, zIndex: 100 }}
            transition={{
                duration: 1.2,
                delay,
                ease,
            }}
            style={{
                width: size,
                height: size,
                zIndex,
            }}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none"
        >
            <img
                src={src}
                alt=""
                className="w-full h-full object-contain pointer-events-auto transition-all duration-500 hover:scale-110 drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
            />
        </motion.div>
    );
}

export default function CreatorsHero() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section id="icerik-ureticileri" className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#fbfaf7] py-20">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.08),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.06),transparent_50%)]" />

            <div ref={containerRef} className="relative w-full max-w-[1400px] h-[800px] mx-auto px-4">
                {/* Bubbles */}
                {bubbles.map((bubble, i) => (
                    <Bubble key={i} {...bubble} />
                ))}

                {/* Center Content */}
                <div className="relative z-50 flex flex-col items-center justify-center text-center max-w-[850px] mx-auto h-full space-y-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1, ease }}
                        className="text-[40px] font-medium leading-[57px] text-black tracking-[-0.05em] font-instrument px-4"
                    >
                        Infhouse&apos;ta <span className="text-[#34C759]">UGC üreticisi olmak için</span> <br />başvurun ve doğru markalarla güçlü <br />iş birlikleri kurun.
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease }}
                        className="space-y-4 max-w-[600px] px-6"
                    >
                        <p className="text-[16px] text-black/50 leading-none text-center font-normal tracking-[-0.02em] font-inter-tight">
                            Infhouse, yetenekli içerik üreticilerini markalarla buluşturan,<br /> güvenilir ve performans odaklı bir UGC platformudur.<br />
                            Kayıt olun, stilinize ve yeteneğinize uygun projelerde yer alın;<br /> süreç yönetimini bize bırakın, siz sadece sevdiğiniz şeye yani<br /> özgün ve etkili içerikler üretmeye odaklanın!
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3, ease }}
                    >
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSeEgkytxEfxtMVQmP95CUSCBCe7HrrETN2gfoRCUbfjkdfCnw/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center gap-2 h-12 px-8 bg-[#232323] text-white rounded-full text-[15px] font-semibold hover:bg-black transition-all"
                        >
                            Şimdi Başvurun
                            <svg
                                width="16" height="16" viewBox="0 0 24 24" fill="none"
                                className="group-hover:translate-x-1 transition-transform"
                            >
                                <path d="M10 17l5-5-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
