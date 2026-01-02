"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Placeholder images - User should replace with real ones
const IMAGES = [
    // Floating Card Left (Last to appear)
    {
        id: 5,
        src: "https://cdn.e-adam.net/InfHouse/cal0.png",
        alt: "Card Left",
        className: "w-32 md:w-56 z-0 opacity-90", // Larger
        finalTop: "50%",
        left: "25%", // Closer in? Maybe keep out for framing
        rotate: -20,
        delay: 1.4 // 5th step (together with 6)
    },
    // People Cluster - TIGHTLY PACKED & CENTERED
    // Order of appearance: 3 -> 4 -> 1 -> 2
    {
        id: 3, // 1st to appear (Center, Front)
        src: "https://cdn.e-adam.net/InfHouse/cal3.png",
        alt: "Creator 3",
        className: "w-56 md:w-[500px] z-50", // Huge, Center
        finalTop: "10%", // Higher up
        left: "50%", // Absolute Center (will translate -50%)
        translateX: "-50%",
        rotate: 0,
        delay: 0.2 // 1st
    },
    {
        id: 4, // 2nd to appear (Right of center)
        src: "https://cdn.e-adam.net/InfHouse/cal4.png",
        alt: "Creator 4",
        className: "w-48 md:w-[400px] z-40",
        finalTop: "20%",
        left: "58%", // Very close to 50% visually due to size
        translateX: "-50%",
        rotate: 5,
        delay: 0.5 // 2nd
    },
    {
        id: 1, // 3rd to appear (Left of center)
        src: "https://cdn.e-adam.net/InfHouse/cal1.png",
        alt: "Creator 1",
        className: "w-48 md:w-[380px] z-30",
        finalTop: "25%",
        left: "42%", // Tucked behind
        translateX: "-50%",
        rotate: -5,
        delay: 0.8 // 3rd
    },
    {
        id: 2, // 4th to appear (Farther Left)
        src: "https://cdn.e-adam.net/InfHouse/cal2.png",
        alt: "Creator 2",
        className: "w-40 md:w-[340px] z-20",
        finalTop: "30%",
        left: "36%",
        translateX: "-50%",
        rotate: -10,
        delay: 1.1 // 4th
    },
    // Floating Card Right (Last to appear)
    {
        id: 6,
        src: "https://cdn.e-adam.net/InfHouse/cal5.png",
        alt: "Card Right",
        className: "w-32 md:w-56 z-0 opacity-90", // Larger
        finalTop: "40%",
        left: "72%",
        rotate: 20,
        delay: 1.4 // 5th step
    }
];

export const WorkHero = () => {
    return (
        <section className="relative w-full h-[600px] md:h-[800px] bg-white overflow-hidden flex flex-col items-center justify-end pb-10">

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
                {IMAGES.map((img) => (
                    <motion.div
                        key={img.id}
                        className={`absolute ${img.className}`}
                        style={{
                            left: img.left,
                            transform: img.translateX ? `translateX(${img.translateX})` : 'none' // Center alignment helper
                        }}
                        // Start from bottom text area
                        initial={{ top: "100%", opacity: 0, scale: 0.8, rotate: img.rotate, x: img.translateX || 0 }}
                        animate={{ top: img.finalTop, opacity: 1, scale: 1, rotate: img.rotate, x: img.translateX || 0 }}
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


            {/* Bottom Text */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="relative z-30 text-center bg-white/40 backdrop-blur-sm px-8 py-4 rounded-3xl border border-white/40 mb-12"
            >
                <h1 className="text-3xl md:text-6xl font-bold text-red-500/90 tracking-tighter">
                    Gerçek içerikler, <span className="text-red-300">ölçümlenebilir sonuçlar!</span>
                </h1>
            </motion.div>

        </section>
    );
};
