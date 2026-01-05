"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Placeholder images - User should replace with real ones
const IMAGES = [
    // Floating Card Left
    {
        id: 5,
        src: "https://cdn.e-adam.net/InfHouse/cal0.png",
        alt: "Card Left",
        className: "w-20 md:w-50 z-33 opacity-90",
        finalTop: "35%",
        mobileTop: "28%", // Lower on mobile
        left: "15%",
        mobileLeft: "8%",
        rotate: -4,
        delay: 1.4
    },
    // People Cluster
    {
        id: 3, // Center (Harun Bey)
        src: "https://cdn.e-adam.net/InfHouse/cal3.png",
        alt: "Creator 3",
        className: "w-40 md:w-[500px] z-50",
        finalTop: "5%",
        mobileTop: "18%", // Lower on mobile
        left: "50%",
        translateX: "-50%",
        rotate: 0,
        delay: 0.2
    },
    {
        id: 4, // Right (Woman)
        src: "https://cdn.e-adam.net/InfHouse/cal4.png",
        alt: "Creator 4",
        className: "w-36 md:w-[700px] z-40",
        finalTop: "-19%",
        mobileTop: "14%", // Lower on mobile
        left: "64%",
        translateX: "-50%",
        rotate: 5,
        delay: 0.5
    },
    {
        id: 1, // Left (Woman)
        src: "https://cdn.e-adam.net/InfHouse/cal1.png",
        alt: "Creator 1",
        className: "w-32 md:w-[400px] z-30",
        finalTop: "3%",
        mobileTop: "15%", // Lower on mobile
        left: "32%",
        translateX: "-50%",
        rotate: -2,
        delay: 0.8
    },
    {
        id: 2, // Far Left (Man)
        src: "https://cdn.e-adam.net/InfHouse/cal2.png",
        alt: "Creator 2",
        className: "w-28 md:w-[500px] z-20",
        finalTop: "-7%",
        mobileTop: "17%", // Lower on mobile
        left: "42%",
        translateX: "-50%",
        rotate: 2,
        delay: 1.1
    },
    // Floating Card Right
    {
        id: 6,
        src: "https://cdn.e-adam.net/InfHouse/cal5.png",
        alt: "Card Right",
        className: "w-24 md:w-56 z-100 opacity-90",
        finalTop: "25%",
        mobileTop: "28%", // Lower on mobile
        left: "66%",
        mobileLeft: "70%",
        rotate: 15,
        delay: 1.4
    }
];

export const WorkHero = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <section className="relative w-full min-h-[500px] md:min-h-[750px] bg-white flex flex-col items-center justify-end pb-0 overflow-hidden">

            {/* SVG Path Layer - The Green Ribbon */}
            <div className="absolute inset-0 pointer-events-none z-0 scale-y-125 origin-bottom">
                <svg
                    className="w-full h-full"
                    viewBox="0 0 1440 800"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <motion.path
                        d="M-200,600 C300,550 500,300 720,500 C1040,700 1200,300 1640,400"
                        stroke="#bbf7d0"
                        strokeWidth="200" // Even Thickness
                        strokeLinecap="round"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{
                            duration: 2.5,
                            ease: "easeInOut",
                        }}
                    />
                </svg>
            </div>

            {/* Images Layer */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                {IMAGES.map((img: any) => (
                    <motion.div
                        key={img.id}
                        className={`absolute ${img.className}`}
                        style={{
                            left: isMobile && img.mobileLeft ? img.mobileLeft : img.left,
                            transform: img.translateX ? `translateX(${img.translateX})` : 'none' // Center alignment helper
                        }}
                        // Start from bottom text area
                        initial={{ top: "100%", opacity: 0, scale: 0.8, rotate: img.rotate, x: img.translateX || 0 }}
                        animate={{
                            top: isMobile ? img.mobileTop : img.finalTop,
                            opacity: 1,
                            scale: 1,
                            rotate: img.rotate,
                            x: img.translateX || 0
                        }}
                        transition={{
                            duration: 1.0,
                            delay: img.delay, // Custom specific delay
                            type: "spring",
                            damping: 14,
                            stiffness: 70
                        }}
                    >
                        <div className="relative w-full h-full aspect-[3/4]">
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-contain"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>


            {/* Bottom Text Label */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                // Added top-[180px], responsive width calc, and mx-auto
                className="relative z-40 text-center bg-white px-6 md:px-10 py-4 md:py-5 rounded-full shadow-xl -mb-[40px] md:-mb-[60px] top-[140px] md:top-[180px] w-[95%] md:w-[calc(100%-300px)] lg:w-[calc(100%-170px)] mx-auto"
            >
                {/* Updated text size to [60px] on md screens */}
                <h1 className="text-xl md:text-[60px] font-bold text-red-500/90 tracking-tighter leading-tight">
                    Gerçek içerikler, <span className="text-red-300">ölçümlenebilir sonuçlar!</span>
                </h1>
            </motion.div>

            {/* Stats Section added below */}
            <div className="relative z-30 w-full bg-[#fbfaf7] py-16 flex flex-col items-center justify-center text-center top-[150px] pt-32">
                <div className="max-w-4xl px-4 space-y-4">
                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-2xl md:text-4xl font-bold text-gray-800">
                        <span><span className="text-red-400">+5.000</span> içerik üreticisi</span>
                        <span><span className="text-red-400">+500</span> marka</span>
                    </div>
                    <p className="text-xl md:text-3xl font-medium text-gray-700 leading-relaxed">
                        aylık ortalama <span className="text-red-400 font-bold">+10.000</span> UGC içeriği uçtan uca yönetilen süreçlerle hayata geçiyor.
                    </p>
                </div>
            </div>

        </section>
    );
};
