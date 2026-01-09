"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// 1. BURAYA EKLEYİN: Marka logolarınızın linklerini aşağıdaki 'src' kısımlarına yapıştırın.
// Örnek: src: "https://cdn.e-adam.net/InfHouse/logo1.png"
const BRANDS = [
    { name: "Brand 1", src: "https://cdn.e-adam.net/InfHouse/markalar/A%20Roasting%20Lab%20.png", type: "brand" },
    { name: "Brand 2", src: "https://cdn.e-adam.net/InfHouse/markalar/ALGET%C4%B0R.com.png", type: "brand" },
    { name: "Brand 3", src: "https://cdn.e-adam.net/InfHouse/markalar/Autopartia.png", type: "brand" },
    { name: "Brand 4", src: "https://cdn.e-adam.net/InfHouse/markalar/Akbeniz.jpg", type: "brand" },
    { name: "Brand 5", src: "https://cdn.e-adam.net/InfHouse/markalar/Arotolia%20.png", type: "brand" },
    { name: "Brand 6", src: "https://cdn.e-adam.net/InfHouse/markalar/CforB.jpeg", type: "brand" },
    { name: "Brand 7", src: "https://cdn.e-adam.net/InfHouse/markalar/Beeelucky.webp", type: "brand" },
    { name: "Brand 8", src: "https://cdn.e-adam.net/InfHouse/markalar/Cans%C4%B1n%20Mini%20.png", type: "brand" },
    { name: "Brand 9", src: "https://cdn.e-adam.net/InfHouse/markalar/Berthe%20London%20.webp", type: "brand" },
    { name: "Brand 10", src: "https://cdn.e-adam.net/InfHouse/markalar/Bueno%20Shoes%20.png", type: "brand" },
    { name: "Brand 11", src: "https://cdn.e-adam.net/InfHouse/markalar/Chipsm.webp", type: "brand" },
    { name: "Brand 12", src: "https://cdn.e-adam.net/InfHouse/markalar/Derme%20Online.jpeg", type: "brand" },
    { name: "Brand 13", src: "https://cdn.e-adam.net/InfHouse/markalar/De%20Lucca%20.jpeg", type: "brand" },
    { name: "Brand 14", src: "https://cdn.e-adam.net/InfHouse/markalar/Dr.Bora%20%C3%96zel%20.png", type: "brand" },
    { name: "Brand 15", src: "https://cdn.e-adam.net/InfHouse/markalar/El%C3%B6ren.jpg", type: "brand" },
    { name: "Brand 16", src: "https://cdn.e-adam.net/InfHouse/markalar/Fermente.png", type: "brand" },
    { name: "Brand 17", src: "https://cdn.e-adam.net/InfHouse/markalar/Esma%20Balkaya%20.png", type: "brand" },
    { name: "Brand 18", src: "https://cdn.e-adam.net/InfHouse/markalar/For%20You%20Moda%20.png", type: "brand" },
    { name: "Brand 19", src: "https://cdn.e-adam.net/InfHouse/markalar/Geske.webp", type: "brand" },
    { name: "Brand 20", src: "https://cdn.e-adam.net/InfHouse/markalar/GreenLabel.webp", type: "brand" },
    { name: "Brand 21", src: "https://cdn.e-adam.net/InfHouse/markalar/G%C3%B6n%20Deri%20.jpeg", type: "brand" },
    { name: "Brand 22", src: "https://cdn.e-adam.net/InfHouse/markalar/Haluk%20%C3%87erez%20.jpg", type: "brand" },
    { name: "Brand 23", src: "https://cdn.e-adam.net/InfHouse/markalar/Healing%20Care%20.jpg", type: "brand" },
    { name: "Brand 24", src: "https://cdn.e-adam.net/InfHouse/markalar/Hicret%20Kuruyemi%C5%9F%20.png", type: "brand" },
    { name: "Brand 25", src: "https://cdn.e-adam.net/InfHouse/markalar/Holistik%20Market%20.png", type: "brand" },
    { name: "Brand 26", src: "https://cdn.e-adam.net/InfHouse/markalar/Iyzads.jpeg", type: "brand" },
    { name: "Brand 27", src: "https://cdn.e-adam.net/InfHouse/markalar/Hyman.png", type: "brand" },
    { name: "Brand 28", src: "https://cdn.e-adam.net/InfHouse/markalar/JWD.png", type: "brand" },
    { name: "Brand 29", src: "https://cdn.e-adam.net/InfHouse/markalar/Jawel%20.png", type: "brand" },
    { name: "Brand 30", src: "https://cdn.e-adam.net/InfHouse/markalar/Known.jpg", type: "brand" },
    { name: "Brand 31", src: "https://cdn.e-adam.net/InfHouse/markalar/Krijen%20.png", type: "brand" },
    { name: "Brand 32", src: "https://cdn.e-adam.net/InfHouse/markalar/LeeRoy%20.jpeg", type: "brand" },
    { name: "Brand 33", src: "https://cdn.e-adam.net/InfHouse/markalar/Lenti%20Optik%20.png", type: "brand" },
    { name: "Brand 34", src: "https://cdn.e-adam.net/InfHouse/markalar/Liva%20Shop.png", type: "brand" },
    { name: "Brand 35", src: "https://cdn.e-adam.net/InfHouse/markalar/MAF%20Collection%20.png", type: "brand" },
    { name: "Brand 36", src: "https://cdn.e-adam.net/InfHouse/markalar/MCD%20Bags%20.webp", type: "brand" },
    { name: "Brand 37", src: "https://cdn.e-adam.net/InfHouse/markalar/Mamaslina.jpeg", type: "brand" },
    { name: "Brand 38", src: "https://cdn.e-adam.net/InfHouse/markalar/Matilda.webp", type: "brand" },
    { name: "Brand 39", src: "https://cdn.e-adam.net/InfHouse/markalar/Mely%20Baby%20.jpeg", type: "brand" },
    { name: "Brand 40", src: "https://cdn.e-adam.net/InfHouse/markalar/MessageGate.png", type: "brand" },
    { name: "Brand 41", src: "https://cdn.e-adam.net/InfHouse/markalar/Mirabellix.webp", type: "brand" },
    { name: "Brand 42", src: "https://cdn.e-adam.net/InfHouse/markalar/Modalook%20.png", type: "brand" },
    { name: "Brand 43", src: "https://cdn.e-adam.net/InfHouse/markalar/Mogaf%20D%C3%B6ner%20.png", type: "brand" },
    { name: "Brand 44", src: "https://cdn.e-adam.net/InfHouse/markalar/Monreal.webp", type: "brand" },
    { name: "Brand 45", src: "https://cdn.e-adam.net/InfHouse/markalar/Nihan%20Giyim%20.jpeg", type: "brand" },
    { name: "Brand 46", src: "https://cdn.e-adam.net/InfHouse/markalar/Oishii%20Active%20.webp", type: "brand" },
    { name: "Brand 47", src: "https://cdn.e-adam.net/InfHouse/markalar/Ravello%20Kozmetik%20.webp", type: "brand" },
    { name: "Brand 48", src: "https://cdn.e-adam.net/InfHouse/markalar/Renovafood%20.webp", type: "brand" },
    { name: "Brand 49", src: "https://cdn.e-adam.net/InfHouse/markalar/RetailLabs.jpeg", type: "brand" },
    { name: "Brand 50", src: "https://cdn.e-adam.net/InfHouse/markalar/Retrobird.png", type: "brand" },
    { name: "Brand 51", src: "https://cdn.e-adam.net/InfHouse/markalar/SC%20Sarvin%20.png", type: "brand" },
    { name: "Brand 52", src: "https://cdn.e-adam.net/InfHouse/markalar/Seda%20Yal%C3%A7%C4%B1n%20.webp", type: "brand" },
    { name: "Brand 53", src: "https://cdn.e-adam.net/InfHouse/markalar/Sekafarm%20.png", type: "brand" },
    { name: "Brand 54", src: "https://cdn.e-adam.net/InfHouse/markalar/Sepanu%20.webp", type: "brand" },
    { name: "Brand 55", src: "https://cdn.e-adam.net/InfHouse/markalar/Sevilen.webp", type: "brand" },
    { name: "Brand 56", src: "https://cdn.e-adam.net/InfHouse/markalar/Sezgi%20Tekin%20.jpg", type: "brand" },
    { name: "Brand 57", src: "https://cdn.e-adam.net/InfHouse/markalar/Se%C3%A7il%20Store%20.jpg", type: "brand" },
    { name: "Brand 58", src: "https://cdn.e-adam.net/InfHouse/markalar/Shule%20Bags%20.gif", type: "brand" },
    { name: "Brand 59", src: "https://cdn.e-adam.net/InfHouse/markalar/Store%20Mekap%20.webp", type: "brand" },
    { name: "Brand 60", src: "https://cdn.e-adam.net/InfHouse/markalar/Swass%20Online.webp", type: "brand" },
    { name: "Brand 61", src: "https://cdn.e-adam.net/InfHouse/markalar/Teknolom%20.png", type: "brand" },
    { name: "Brand 62", src: "https://cdn.e-adam.net/InfHouse/markalar/Xpillo.webp", type: "brand" },
    { name: "Brand 63", src: "https://cdn.e-adam.net/InfHouse/markalar/%C4%B0maj%20Butik%20.png", type: "brand" },
];

const CATEGORIES = [
    { name: "Oto aksesuar", color: "bg-[#FFEBEE]/60", glow: "shadow-[0_4px_15px_rgba(255,182,193,0.3)]", border: "border-[#FFCDD2]/50" },
    { name: "Giyim", color: "bg-[#E8F5E9]/60", glow: "shadow-[0_4px_15px_rgba(165,214,167,0.3)]", border: "border-[#C8E6C9]/50" },
    { name: "Ayakkabı", color: "bg-[#FFFDE7]/60", glow: "shadow-[0_4px_15px_rgba(255,245,157,0.3)]", border: "border-[#FFF9C4]/50" },
    { name: "Takı aksesuar", color: "bg-[#F3E5F5]/60", glow: "shadow-[0_4px_15px_rgba(206,147,216,0.3)]", border: "border-[#E1BEE7]/50" },
];

const MarqueeRow = ({ items, direction = "left", speed = 40 }: { items: any[], direction?: "left" | "right", speed?: number }) => {
    return (
        <div className="flex w-full overflow-hidden whitespace-nowrap py-3 md:py-4">
            <motion.div
                className="flex items-center gap-12 md:gap-24"
                animate={{
                    x: direction === "left" ? [0, -3000] : [-3000, 0]
                }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                {/* Repeat items many times to ensure seamless loop */}
                {[...items, ...items, ...items].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-12 md:gap-24 shrink-0">
                        {item.type === "brand" ? (
                            <div className="flex items-center justify-center opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-default min-w-[100px]">
                                {item.src ? (
                                    <div className="relative w-24 h-12 md:w-32 md:h-16">
                                        <Image
                                            src={item.src}
                                            alt={item.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                ) : (
                                    <span className="text-[20px] md:text-[28px] font-bold text-gray-900 tracking-tighter uppercase font-instrument-sans">
                                        {item.name}
                                    </span>
                                )}
                            </div>
                        ) : (
                            <div className={`
                                flex items-center gap-2 px-6 py-2 md:px-8 md:py-3 rounded-full border ${item.border} ${item.color} ${item.glow}
                                backdrop-blur-md transition-all hover:scale-105 cursor-default relative overflow-hidden
                            `}>
                                <span className="text-black font-bold text-xs md:text-lg tracking-tight relative z-10">{item.name}</span>
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
    // Helper to interleave categories every 2 brands
    const interleaveItems = (brands: any[], startCatIndex: number) => {
        const result = [];
        let catIdx = startCatIndex;
        for (let i = 0; i < brands.length; i++) {
            result.push(brands[i]);
            // Every 2 brands, insert a category
            if ((i + 1) % 2 === 0 && result.length < 31) {
                result.push({ type: "cat", ...CATEGORIES[catIdx % CATEGORIES.length] });
                catIdx++;
            }
        }
        // Fill remaining slots if needed to reach exactly 31
        while (result.length < 31) {
            result.push({ type: "cat", ...CATEGORIES[catIdx % CATEGORIES.length] });
            catIdx++;
        }
        return result;
    };

    const row1 = interleaveItems(BRANDS.slice(0, 21), 0);
    const row2 = interleaveItems(BRANDS.slice(21, 42), 1);
    const row3 = interleaveItems(BRANDS.slice(42, 63), 2);

    return (
        <section className="w-full bg-white py-12 md:py-0 overflow-hidden relative">
            <div className="max-w-[1440px] mx-auto aspect-auto md:min-h-[300px] flex flex-col justify-center px-4 relative">
                <div className="flex flex-col gap-0 md:gap-2 relative">
                    <MarqueeRow items={row1} direction="right" speed={80} />
                    <MarqueeRow items={row2} direction="left" speed={90} />
                    <MarqueeRow items={row3} direction="right" speed={85} />
                </div>

                {/* Side Fades */}
                <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
};

export default BrandFlow;
