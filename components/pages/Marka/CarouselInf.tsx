"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Placeholder images - User will replace these with CDN links
const CARDS = [
    {
        id: 1,
        src: "https://cdn.e-adam.net/InfHouse/inf1.jpg", // Fashion/UGC style
        alt: "UGC Video 1",
    },
    {
        id: 2,
        src: "https://cdn.e-adam.net/InfHouse/inf2.jpg", // Portrait
        alt: "UGC Video 2",
    },
    {
        id: 3,
        src: "https://cdn.e-adam.net/InfHouse/inf3.jpg", // Central focus
        alt: "UGC Video 3",
    },
    {
        id: 4,
        src: "https://cdn.e-adam.net/InfHouse/inf4.jpg", // Fashion
        alt: "UGC Video 4",
    },
    {
        id: 5,
        src: "https://cdn.e-adam.net/InfHouse/inf5.jpg", // Lifestyle
        alt: "UGC Video 5",
    },
];

export const CarouselInf = () => {
    // We want the cards to animate in when the component mounts/is viewed.
    // The center card is index 2 (Card 3).
    // Visual order from left to right: Card 1, Card 2, Card 3, Card 4, Card 5.
    // In DOM order, to handle z-index easily without manual z-index, we might want:
    // 1, 5, 2, 4, 3... wait, z-index is crucial here. 
    // Center (3) should be highest. 2 and 4 lower. 1 and 5 lowest.

    // Let's define the target transform states for the "fanned" layout.
    // Using a fixed height container for the demo.

    const cardVariants = {
        hidden: (index: number) => ({
            x: 0,
            y: 0,
            rotate: 0,
            opacity: 1, // All cards visible from start
            scale: 0.8,
            zIndex: 5 - Math.abs(2 - index), // 0->3, 1->4, 2->5, 3->4, 4->3
        }),
        visible: (index: number) => {
            // 0: Far Left
            // 1: Left
            // 2: Center
            // 3: Right
            // 4: Far Right

            // Desktop variants
            const desktopVariants = [
                { x: -300, y: 30, rotate: -15, scale: 0.9, zIndex: 1 },  // Far Left
                { x: -160, y: 10, rotate: -7, scale: 0.95, zIndex: 2 }, // Left
                { x: 0, y: 0, rotate: 0, scale: 1.1, zIndex: 10 },      // Center
                { x: 160, y: 10, rotate: 7, scale: 0.95, zIndex: 2 },   // Right
                { x: 300, y: 30, rotate: 15, scale: 0.9, zIndex: 1 },   // Far Right
            ];

            // Mobile variants - more compact and centered
            const mobileVariants = [
                { x: -145, y: 30, rotate: -16, scale: 0.65, zIndex: 1 },  // Far Left
                { x: -80, y: 15, rotate: -8, scale: 0.75, zIndex: 2 },    // Left
                { x: 0, y: 0, rotate: 0, scale: 0.85, zIndex: 10 },       // Center
                { x: 80, y: 15, rotate: 8, scale: 0.75, zIndex: 2 },      // Right
                { x: 145, y: 30, rotate: 16, scale: 0.65, zIndex: 1 },    // Far Right
            ];

            // Use window width to determine which variant set to use
            const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
            const variants = isMobile ? mobileVariants : desktopVariants;

            // Calculate delay based on distance from center (index 2)
            const distanceFromCenter = Math.abs(2 - index);
            const delay = distanceFromCenter * 0.2; // 0s, 0.2s, 0.4s

            return {
                ...variants[index],
                opacity: 1,
                transition: {
                    type: "spring" as const,
                    damping: 20,
                    stiffness: 100,
                    delay: 0.2 + delay, // Initial wait then bloom
                    duration: 0.8,
                }
            };
        },
        hover: (index: number) => {
            return {};
        }
    };

    return (
        <section id="markalar" className="w-full min-h-[800px] flex flex-col items-center justify-center bg-white overflow-hidden py-8 md:py-20">

            {/* Header Text Section */}
            <div className="relative mb-4 md:mb-8 px-4 text-center">
                {/* Green Glow Effect - Persistent */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-green-200/50 blur-[80px] rounded-full pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 space-y-2"
                >
                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900">
                        +500 markanın gizli silahı!
                    </h2>
                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900">
                        +5000 sözleşmeli içerik üreticisi ile Türkiye&apos;nin en kaliteli UGC videoları!
                    </h2>
                    <p className="max-w-3xl mx-auto text-sm md:text-base text-gray-500 mt-1 md:mt-4 leading-relaxed">
                        Markanızı güçlendirmek için, her içeriği ekip çalışması, strateji ve titiz operasyonun birleşimiyle hayata geçiriyoruz.
                    </p>


                </motion.div>
            </div>

            {/* Cards Fan Section */}
            <div className="relative w-full max-w-[1200px] h-[400px] md:h-[500px] flex justify-center items-center perspective-[1000px]">
                {CARDS.map((card, index) => (
                    <motion.div
                        key={card.id}
                        custom={index}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className={cn(
                            "absolute top-10 w-[140px] h-[140px] md:w-[280px] md:h-[280px] rounded-3xl overflow-hidden shadow-2xl",
                            "origin-bottom" // Rotate from bottom for a fan feel
                        )}
                        style={{
                            boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
                        }}
                    >
                        <div className="relative w-full h-full bg-gray-200">
                            <Image
                                src={card.src}
                                alt={card.alt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 300px"
                            />
                            {/* Optional: Add an overlay or gradient if needed */}
                            <div className="absolute inset-0 bg-black/5" />
                        </div>
                    </motion.div>
                ))}
            </div>
            {/* CTA Buttons */}
            <div className="mt-0 md:mt-4 flex flex-wrap items-center justify-center gap-4">
                <button className="px-8 py-2.5 rounded-full bg-[#1a1a1a] text-white font-bold text-[11px] shadow-lg hover:bg-black transition-all active:scale-95">
                    Sizi Arayalım
                </button>
                <button className="px-8 py-2.5 rounded-full bg-white text-[#1a1a1a] font-bold text-[11px] ring-1 ring-black/10 shadow-lg hover:bg-gray-50 transition-all active:scale-95">
                    Şimdi Başvurun
                </button>
            </div>

            {/* Category Text */}
            <div className="mt-6 text-center">
                <p className="text-xs md:text-sm text-gray-500">
                    500'den fazla sağlıktan tekstile, teknolojiden güzelliğe onlarca kategoride marka ile çalışıyoruz.
                </p>
            </div>
        </section>
    );
};

export default CarouselInf;
