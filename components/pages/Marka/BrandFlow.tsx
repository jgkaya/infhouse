"use client";

import React from "react";
import { motion } from "framer-motion";

const BRAND_LOGOS_ROW_1 = [
    { name: "HYMAN", src: "https://cdn.simpleicons.org/nike" },
    { name: "JAWEL", src: "https://cdn.simpleicons.org/adidas" },
    { name: "JWD GOLD", src: "https://cdn.simpleicons.org/puma" },
    { name: "Matilda Mobilya", src: "https://cdn.simpleicons.org/zara" },
    { name: "Oishii", src: "https://cdn.simpleicons.org/shopify" },
];

const BRAND_LOGOS_ROW_2 = [
    { name: "beee lucky", src: "https://cdn.simpleicons.org/meta" },
    { name: "bueno", src: "https://cdn.simpleicons.org/amazon" },
    { name: "ALTIN", src: "https://cdn.simpleicons.org/tiktok" },
    { name: "LENTİ", src: "https://cdn.simpleicons.org/instagram" },
];

const CATEGORIES = [
    { name: "Giyim", color: "bg-green-100/50", glow: "shadow-[0_0_25px_rgba(187,247,208,0.7)]", border: "border-green-200" },
    { name: "Ayakkabı", color: "bg-yellow-100/50", glow: "shadow-[0_0_25px_rgba(254,240,138,0.7)]", border: "border-yellow-200" },
    { name: "Takı & Saat", color: "bg-pink-100/50", glow: "shadow-[0_0_25px_rgba(252,231,243,0.7)]", border: "border-pink-200" },
    { name: "Kozmetik", color: "bg-purple-100/50", glow: "shadow-[0_0_25px_rgba(233,213,255,0.7)]", border: "border-purple-200" },
];

const MarqueeRow = ({ items, direction = "left", speed = 40 }: { items: any[], direction?: "left" | "right", speed?: number }) => {
    return (
        <div className="flex w-full overflow-hidden whitespace-nowrap py-6">
            <motion.div
                className="flex items-center gap-16 md:gap-24 px-12"
                animate={{
                    x: direction === "left" ? [0, -2000] : [-2000, 0]
                }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                {[...items, ...items, ...items, ...items, ...items, ...items].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-16 md:gap-24">
                        {item.type === "brand" ? (
                            <div className="flex items-center gap-4 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-default shrink-0">
                                <span className="text-[28px] md:text-[42px] font-bold text-gray-900 tracking-tighter uppercase">{item.name}</span>
                            </div>
                        ) : (
                            <div className={`
                                flex items-center gap-2 px-8 py-3.5 rounded-full border ${item.border} ${item.color} ${item.glow}
                                backdrop-blur-sm transition-all hover:scale-105 cursor-default shrink-0
                            `}>
                                <span className="text-black font-bold text-xl md:text-2xl">{item.name}</span>
                                <span className="text-yellow-400 animate-pulse text-2xl">✨</span>
                            </div>
                        )}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export const BrandFlow = () => {
    const row1 = [
        { type: "brand", ...BRAND_LOGOS_ROW_1[0] },
        { type: "cat", ...CATEGORIES[0] },
        { type: "brand", ...BRAND_LOGOS_ROW_1[1] },
        { type: "brand", ...BRAND_LOGOS_ROW_1[2] },
        { type: "cat", ...CATEGORIES[3] },
        { type: "brand", ...BRAND_LOGOS_ROW_1[3] },
    ];

    const row2 = [
        { type: "cat", ...CATEGORIES[1] },
        { type: "brand", ...BRAND_LOGOS_ROW_2[0] },
        { type: "brand", ...BRAND_LOGOS_ROW_2[1] },
        { type: "cat", ...CATEGORIES[2] },
        { type: "brand", ...BRAND_LOGOS_ROW_2[2] },
        { type: "brand", ...BRAND_LOGOS_ROW_1[4] },
    ];

    const row3 = [
        { type: "brand", ...BRAND_LOGOS_ROW_2[3] },
        { type: "cat", ...CATEGORIES[3] },
        { type: "cat", ...CATEGORIES[0] },
        { type: "brand", ...BRAND_LOGOS_ROW_1[0] },
        { type: "brand", ...BRAND_LOGOS_ROW_2[1] },
    ];

    return (
        <section className="w-full bg-[#fbfaf7] py-24 overflow-hidden border-y border-gray-100/50">
            <div className="text-center mb-20 px-4">
                <h2 className="text-xl md:text-2xl text-gray-400 font-medium tracking-tight max-w-4xl mx-auto leading-relaxed">
                    500&apos;den fazla ileri görüşlü sağlık ve zindelik markasıyla çalışıyoruz.
                </h2>
            </div>

            <div className="flex flex-col gap-6 md:gap-10">
                <MarqueeRow items={row1} direction="left" speed={45} />
                <MarqueeRow items={row2} direction="right" speed={55} />
                <MarqueeRow items={row3} direction="left" speed={50} />
            </div>
        </section>
    );
};

export default BrandFlow;
