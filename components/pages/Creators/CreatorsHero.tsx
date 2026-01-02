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
    hasIcon?: boolean;
    isBlue?: boolean;
    zIndex?: number;
}

const bubbles: BubbleProps[] = [
    // Top Left
    { src: "https://cdn.e-adam.net/infhouse/1.jpg", size: 90, x: "10%", y: "15%", delay: 0.4 },
    // Middle Left
    { src: "https://cdn.e-adam.net/infhouse/2.png", size: 100, x: "22%", y: "25%", delay: 0.5 },
    // Bottom Left
    { src: "https://cdn.e-adam.net/infhouse/3.jpg", size: 130, x: "5%", y: "65%", delay: 0.6 },
    // Bottom Center-Left
    { src: "https://cdn.e-adam.net/infhouse/4.jpg", size: 110, x: "25%", y: "82%", delay: 0.7 },

    // Center Overlay (Double bubble)
    { src: "https://cdn.e-adam.net/infhouse/1.jpg", size: 60, x: "50%", y: "65%", delay: 0.8, hasIcon: true, zIndex: 40 },

    // Middle Right
    { src: "https://cdn.e-adam.net/infhouse/2.png", size: 100, x: "75%", y: "45%", delay: 0.55 },
    // Top Right
    { src: "https://cdn.e-adam.net/infhouse/3.jpg", size: 110, x: "88%", y: "20%", delay: 0.45 },
    // Bottom Right
    { src: "https://cdn.e-adam.net/infhouse/4.jpg", size: 120, x: "88%", y: "70%", delay: 0.75 },
    // Bottom Center-Right
    { src: "https://cdn.e-adam.net/infhouse/2.png", size: 110, x: "73%", y: "85%", delay: 0.65 },

    // Blue Icon Bubble
    { size: 55, x: "78%", y: "58%", delay: 0.9, isBlue: true, zIndex: 30 },
];

function Bubble({ src, size, x, y, delay, hasIcon, isBlue, zIndex = 20 }: BubbleProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0, x: "50%", y: "50%", left: 0, top: 0 }}
            whileInView={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                left: x,
                top: y,
            }}
            viewport={{ once: true }}
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
            className="absolute -translate-x-1/2 -translate-y-1/2"
        >
            <div className="relative w-full h-full group">
                {isBlue ? (
                    <div className="w-full h-full rounded-full bg-[#007AFF] shadow-[0_12px_30px_rgba(0,122,255,0.3)] flex items-center justify-center ring-4 ring-white">
                        <span className="text-white font-bold text-xl">B</span>
                        <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-[#007AFF] rotate-45" />
                    </div>
                ) : (
                    <>
                        <div className="w-full h-full rounded-full overflow-hidden ring-4 ring-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-white">
                            <img
                                src={src}
                                alt=""
                                className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        {hasIcon && (
                            <div className="absolute -right-2 -bottom-1 w-12 h-12 rounded-full bg-[#007AFF] ring-4 ring-white flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-sm">B</span>
                            </div>
                        )}
                    </>
                )}
            </div>
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
                        className="text-[42px] md:text-[56px] font-medium leading-[1.1] text-black tracking-tight px-4"
                    >
                        Infhouse&apos;ta <span className="text-[#34C759]">UGC üreticisi olmak için</span> başvurun ve doğru markalarla güçlü iş birlikleri kurun.
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease }}
                        className="space-y-4 max-w-[600px] px-6"
                    >
                        <p className="text-[15px] md:text-[16px] text-black/50 leading-relaxed font-normal">
                            Infhouse, yetenekli içerik üreticilerini markalarla buluşturan, güvenilir ve performans odaklı bir UGC platformudur.
                            Kayıt olun, stilinize ve yeteneğinize uygun projelerde yer alın; süreç yönetimini bize bırakın, siz sadece sevdiğiniz şeye yani özgün ve etkili içerikler üretmeye odaklanın!
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3, ease }}
                    >
                        <button className="group relative inline-flex items-center gap-2 h-12 px-8 bg-[#232323] text-white rounded-full text-[15px] font-semibold hover:bg-black transition-all">
                            Şimdi Başvurun
                            <svg
                                width="16" height="16" viewBox="0 0 24 24" fill="none"
                                className="group-hover:translate-x-1 transition-transform"
                            >
                                <path d="M10 17l5-5-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </motion.div>
                </div>

                {/* Floating Chat Pills (Bottom Right) */}
                <div className="absolute bottom-10 right-10 flex flex-col items-end gap-3 z-50">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 }}
                        className="bg-white px-4 py-2 rounded-2xl rounded-br-sm shadow-lg text-[13px] text-green-600 font-medium border border-black/5"
                    >
                        Bir görüşme ayarlamak istiyorum.
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.4 }}
                        className="bg-white px-4 py-2 rounded-2xl rounded-br-sm shadow-lg text-[13px] text-green-600 font-medium border border-black/5"
                    >
                        Bir görüşme ayarlamak istiyorum.
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.6 }}
                        className="w-10 h-10 rounded-full bg-pink-500 shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}
