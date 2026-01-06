"use client";

import React from "react";
import { motion } from "framer-motion";

const BRAND_LOGOS_ROW_1 = [
    { name: "Cansin", src: "" },
    { name: "Chipsm", src: "" },
    { name: "Hyman", src: "" },
    { name: "Jawel", src: "" },
    { name: "Jwd Gold", src: "" },
    { name: "Matilda Mobilya", src: "" },
    { name: "Message Gate", src: "" },
    { name: "Greenlabel", src: "" },
];

const BRAND_LOGOS_ROW_2 = [
    { name: "Akbeniz", src: "" },
    { name: "Algetir", src: "" },
    { name: "Beee Lucky", src: "" },
    { name: "Bueno", src: "" },
    { name: "Altın", src: "" },
    { name: "Youmoda", src: "" },
    { name: "Imajbutik", src: "" },
];

const BRAND_LOGOS_ROW_3 = [
    { name: "Known", src: "" },
    { name: "Kriyen", src: "" },
    { name: "Lenti", src: "" },
    { name: "Maf Collection", src: "" },
    { name: "Modalook", src: "" },
    { name: "Oishii", src: "" },
    { name: "Renova Food", src: "" },
    { name: "Secil Store", src: "" },
];

const CATEGORIES = [
    { name: "Oto aksesuar", color: "bg-[#FFEBEE]/60", glow: "shadow-[0_4px_15px_rgba(255,182,193,0.3)]", border: "border-[#FFCDD2]/50" },
    { name: "Giyim", color: "bg-[#E8F5E9]/60", glow: "shadow-[0_4px_15px_rgba(165,214,167,0.3)]", border: "border-[#C8E6C9]/50" },
    { name: "Ayakkabı", color: "bg-[#FFFDE7]/60", glow: "shadow-[0_4px_15px_rgba(255,245,157,0.3)]", border: "border-[#FFF9C4]/50" },
    { name: "Takı aksesuar", color: "bg-[#F3E5F5]/60", glow: "shadow-[0_4px_15px_rgba(206,147,216,0.3)]", border: "border-[#E1BEE7]/50" },
];

const MarqueeRow = ({ items, direction = "left", speed = 40 }: { items: any[], direction?: "left" | "right", speed?: number }) => {
    return (
        <div className="flex w-full overflow-hidden whitespace-nowrap py-4 md:py-6">
            <motion.div
                className="flex items-center gap-16 md:gap-32"
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
                    <div key={idx} className="flex items-center gap-16 md:gap-32">
                        {item.type === "brand" ? (
                            <div className="flex items-center gap-4 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-default shrink-0">
                                <span className="text-[24px] md:text-[32px] font-bold text-gray-900 tracking-tighter uppercase font-instrument-sans">{item.name}</span>
                            </div>
                        ) : (
                            <div className={`
                                flex items-center gap-2 px-8 py-3 rounded-full border ${item.border} ${item.color} ${item.glow}
                                backdrop-blur-md transition-all hover:scale-105 cursor-default shrink-0 relative overflow-hidden
                            `}>
                                <span className="text-black font-bold text-sm md:text-lg tracking-tight relative z-10">{item.name}</span>
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
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
        { type: "brand", ...BRAND_LOGOS_ROW_1[0] }, // Cansin
        { type: "brand", ...BRAND_LOGOS_ROW_1[1] }, // Chipsm
        { type: "cat", ...CATEGORIES[0] },        // Oto aksesuar
        { type: "brand", ...BRAND_LOGOS_ROW_1[2] }, // Hyman
        { type: "brand", ...BRAND_LOGOS_ROW_1[3] }, // Jawel
        { type: "cat", ...CATEGORIES[1] },        // Giyim
        { type: "brand", ...BRAND_LOGOS_ROW_1[4] }, // Jwd Gold
        { type: "brand", ...BRAND_LOGOS_ROW_1[5] }, // Matilda Mobilya
        { type: "brand", ...BRAND_LOGOS_ROW_1[6] }, // Message Gate
        { type: "brand", ...BRAND_LOGOS_ROW_1[7] }, // Greenlabel
    ];

    const row2 = [
        { type: "brand", ...BRAND_LOGOS_ROW_2[0] }, // Akbeniz
        { type: "brand", ...BRAND_LOGOS_ROW_2[1] }, // Algetir
        { type: "cat", ...CATEGORIES[2] },        // Ayakkabı
        { type: "brand", ...BRAND_LOGOS_ROW_2[2] }, // Beee Lucky
        { type: "brand", ...BRAND_LOGOS_ROW_2[3] }, // Bueno
        { type: "brand", ...BRAND_LOGOS_ROW_2[4] }, // Altın
        { type: "cat", ...CATEGORIES[3] },        // Takı aksesuar
        { type: "brand", ...BRAND_LOGOS_ROW_2[5] }, // Youmoda
        { type: "brand", ...BRAND_LOGOS_ROW_2[6] }, // Imajbutik
    ];

    const row3 = [
        { type: "brand", ...BRAND_LOGOS_ROW_3[0] }, // Known
        { type: "brand", ...BRAND_LOGOS_ROW_3[1] }, // Kriyen
        { type: "cat", ...CATEGORIES[0] },        // Oto aksesuar
        { type: "brand", ...BRAND_LOGOS_ROW_3[2] }, // Lenti
        { type: "brand", ...BRAND_LOGOS_ROW_3[3] }, // Maf Collection
        { type: "cat", ...CATEGORIES[1] },        // Giyim
        { type: "brand", ...BRAND_LOGOS_ROW_3[4] }, // Modalook
        { type: "brand", ...BRAND_LOGOS_ROW_3[5] }, // Oishii
        { type: "brand", ...BRAND_LOGOS_ROW_3[6] }, // Renova Food
        { type: "brand", ...BRAND_LOGOS_ROW_3[7] }, // Secil Store
    ];

    return (
        <section className="w-full bg-white py-12 md:py-0 overflow-hidden relative">
            <div className="max-w-[1440px] mx-auto aspect-auto md:aspect-[1440/292] flex flex-col justify-center px-4 relative">
                {/* Header Badge */}
                <div className="flex justify-center mt-12 mb-6 relative z-10 transition-transform hover:scale-[1.02] duration-300">
                    <div className="relative">
                        {/* Shadow & Border Container */}
                        <div className="absolute inset-0 bg-black translate-y-[2px] rounded-full blur-[1px] opacity-10" />

                        {/* Main Rainbow Badge */}
                        {/* Main Rainbow Badge */}
                        <div className="relative px-12 py-3.5 bg-gradient-to-r from-[#bbf7d0] via-[#fef08a] to-[#ffcfd2] border border-black/20 rounded-full flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.05),inset_0_1px_2px_rgba(255,255,255,0.8)]">
                            {/* Sparkles */}
                            <span className="absolute left-3.5 top-2.5 text-white text-[14px] filter drop-shadow-[0_0_3px_rgba(0,0,0,0.1)] select-none">✦</span>
                            <span className="absolute right-3.5 bottom-2.5 text-white text-[14px] filter drop-shadow-[0_0_3px_rgba(0,0,0,0.1)] opacity-80 select-none">✦</span>

                            <span className="text-[14px] md:text-[16px] font-bold text-black tracking-tight text-center relative z-10">
                                500&apos;den fazla sağlıktan tekstile, teknolojiden güzelliğe onlarca kategoride marka ile çalışıyoruz.
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-0 relative">
                    <MarqueeRow items={row1} direction="left" speed={60} />
                    <MarqueeRow items={row2} direction="right" speed={70} />
                    <MarqueeRow items={row3} direction="left" speed={65} />
                </div>

                {/* Side Fades */}
                <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
};

export default BrandFlow;
