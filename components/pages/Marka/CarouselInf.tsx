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
            opacity: index === 2 ? 1 : 0, // Only center visible initially or all stacked? user said "arkasında". Let's make center visible, others hidden or opacity 1 but behind.
            // If opacity is 1 and z-index is lower, they are hidden behind.
            // Let's set opacity to 0 though to be smoother "appearing" if z-index fighting occurs.
            // But user said "arkasında olacak". Let's try opacity 1 but scaled down slightly and behind.
            scale: 0.8,
            zIndex: 5 - Math.abs(2 - index), // 0->3, 1->4, 2->5, 3->4, 4->3
        }),
        visible: (index: number) => {
            // 0: Far Left
            // 1: Left
            // 2: Center
            // 3: Right
            // 4: Far Right

            const variants = [
                { x: -300, y: 30, rotate: -15, scale: 0.9, zIndex: 1 },  // Far Left
                { x: -160, y: 10, rotate: -7, scale: 0.95, zIndex: 2 }, // Left
                { x: 0, y: 0, rotate: 0, scale: 1.1, zIndex: 10 },      // Center
                { x: 160, y: 10, rotate: 7, scale: 0.95, zIndex: 2 },   // Right
                { x: 300, y: 30, rotate: 15, scale: 0.9, zIndex: 1 },   // Far Right
            ];

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
        <section id="markalar" className="w-full min-h-[800px] flex flex-col items-center justify-center bg-white overflow-hidden py-20">

            {/* Header Text Section */}
            {/* Header Text Section /w Glow */}
            <div className="relative mb-16 px-4 text-center">
                {/* Green Glow Effect - Persistent */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-green-200/50 blur-[80px] rounded-full pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 space-y-4"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                        <span className="text-pink-300">+500</span> markanın gizli silahı!
                    </h2>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                        <span className="text-pink-300">+5000</span> sözleşmeli içerik üreticisi ile
                    </h2>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                        Türkiye&apos;nin en kaliteli UGC videoları!
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg text-gray-500 mt-6 leading-relaxed">
                        Markanızı güçlendirmek için, her içeriği ekip çalışması,
                        strateji ve titiz operasyonun birleşimiyle hayata geçiriyoruz.
                    </p>
                </motion.div>
            </div>

            {/* Cards Fan Section */}
            <div className="relative w-full max-w-[1200px] h-[500px] flex justify-center items-center perspective-[1000px]">
                {CARDS.map((card, index) => (
                    <motion.div
                        key={card.id}
                        custom={index}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className={cn(
                            "absolute top-10 w-[240px] h-[380px] md:w-[280px] md:h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white",
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
        </section>
    );
};

export default CarouselInf;
