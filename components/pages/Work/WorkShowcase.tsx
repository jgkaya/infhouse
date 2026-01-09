"use client";

import { useState } from "react";

// Icons as components for cleaner usage
const Icons = {
    Heart: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>,
    Lipstick: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.5 5.5 10 3 7.5 5.5 10 8Z" /><path d="M10 8v7" /><path d="M6 15h8" /><path d="M7 15v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4" /></svg>,
    Game: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="12" x="2" y="6" rx="2" /><path d="M6 12h2" /><path d="M7 11v2" /><path d="M15 11h.01" /><path d="M17 13h.01" /></svg>,
    Food: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 15v4a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v-4" /><path d="M10 9V7a3 3 0 0 1 6 0v2" /><path d="M10 9h6" /></svg>,
    Dumbbell: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6.5 6.5 11 11" /><path d="m21 21-1-1" /><path d="m3 3 1 1" /><path d="m18 22 4-4" /><path d="m2 6 4-4" /><path d="m3 10 7-7" /><path d="m14 21 7-7" /></svg>,
    Paw: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-5.1 7H8.68C4 10 2.18 3.6 3.58 3.02 4.97 2.44 8.22 3.28 10 5.26c.65-.17 1.33-.26 2-.26Z" /></svg>,
    Headset: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 14h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /><path d="M17 14h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-3z" /><path d="M3 9v6a6 6 0 0 0 6 6h6a6 6 0 0 0 6-6V9" /></svg>,
    Family: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
    Money: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="12" x="2" y="6" rx="2" /><circle cx="12" cy="12" r="2" /><path d="M6 12h.01M18 12h.01" /></svg>,
    Plane: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20" /><path d="M13 12l2.5-6.5L18 5l-2.5 7H18L22 17H2" /><path d="m8 12-2.5 6H5" /></svg>,
    House: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
};

const CATEGORIES = [
    { id: "saglik", label: "Sağlık / Zindelik", icon: <Icons.Heart /> },
    { id: "guzellik", label: "Güzellik / Kozmetik", icon: <Icons.Lipstick /> },
    { id: "oyun", label: "Oyun", icon: <Icons.Game /> },
    { id: "yiyecek", label: "Yiyecek ve İçecek", icon: <Icons.Food /> },
    { id: "fitness", label: "Fitness ve Takviyeler", icon: <Icons.Dumbbell /> },
    { id: "evcil", label: "Evcil Hayvanlar", icon: <Icons.Paw /> },
    { id: "hizmet", label: "Tüketici Hizmetleri", icon: <Icons.Headset /> },
    { id: "aile", label: "Aile ve Çocuklar", icon: <Icons.Family /> },
    { id: "finans", label: "Finans ve Sigorta", icon: <Icons.Money /> },
    { id: "seyahat", label: "Seyahat", icon: <Icons.Plane /> },
    { id: "ev", label: "Ev ve Ev Eşyaları", icon: <Icons.House /> },
];

// Placeholder for videos - User should replace these URLs with actual video thumbnails/sources
const VIDEOS = [
    { id: 1, thumbnail: "https://video.e-adam.net/download/web-videos/cfa91dbe-481a-4fbf-8874-2aee01ae58f3-1080.mp4", label: "Sanat Ürünleri" },
    { id: 2, thumbnail: "https://video.e-adam.net/download/web-videos/6006fcb9-18c3-4611-bb5a-fd38904c2daa-1080.mp4", label: "Sanat Ürünleri" },
    { id: 3, thumbnail: "https://video.e-adam.net/download/web-videos/6006fcb9-18c3-4611-bb5a-fd38904c2daa-1080.mp4", label: "Sanat Ürünleri" },
    { id: 4, thumbnail: "https://video.e-adam.net/download/web-videos/6006fcb9-18c3-4611-bb5a-fd38904c2daa-1080.mp4", label: "Sanat Ürünleri" },
    { id: 5, thumbnail: "https://video.e-adam.net/download/web-videos/6006fcb9-18c3-4611-bb5a-fd38904c2daa-1080.mp4", label: "Sanat Ürünleri" },
    { id: 6, thumbnail: "https://video.e-adam.net/download/web-videos/6006fcb9-18c3-4611-bb5a-fd38904c2daa-1080.mp4", label: "Sanat Ürünleri" },
    { id: 7, thumbnail: "https://video.e-adam.net/download/web-videos/6006fcb9-18c3-4611-bb5a-fd38904c2daa-1080.mp4", label: "Sanat Ürünleri" },
    { id: 8, thumbnail: "https://video.e-adam.net/download/web-videos/6006fcb9-18c3-4611-bb5a-fd38904c2daa-1080.mp4", label: "Sanat Ürünleri" },
];

// Brands as Images - Ready for user to fill
const BRAND_IMAGES = [
    "https://cdn.e-adam.net/infhouse/logo/mai.png",    // mai
    "https://cdn.e-adam.net/infhouse/logo/g%C3%BClsha.png",      // gülsha
    "https://cdn.e-adam.net/infhouse/logo/jerf.png",  // jerf
    "https://cdn.e-adam.net/infhouse/logo/goodyear.png",  // goodyear
    "https://cdn.e-adam.net/infhouse/logo/paulmark.png",  // paulmark
    "https://cdn.e-adam.net/infhouse/logo/hiwell.png",    // hiwell
    "https://cdn.e-adam.net/infhouse/logo/loris.png",     // loris
    "https://cdn.e-adam.net/infhouse/logo/bahs.png",      // bahs
    "https://cdn.e-adam.net/infhouse/logo/shevec.png",    // shevec
    "https://cdn.e-adam.net/infhouse/logo/%C3%A7etinkaya.png", // cetinkaya
    "https://cdn.e-adam.net/infhouse/logo/g%C3%B6nderi.png",    // gönderi
    "https://cdn.e-adam.net/infhouse/logo/abbate.png"     // abbate
];

export const WorkShowcase = () => {
    const [activeCategory, setActiveCategory] = useState("saglik");

    return (
        <section className="w-full bg-[#fbfaf7] pt-8 md:pt-16 pb-4 md:pb-8 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4">

                <div className="bg-white rounded-[40px] px-6 py-10 md:px-20 md:py-16 shadow-sm ring-1 ring-black/5 mx-auto relative">
                    {/* Filters */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-12 md:mb-16 max-w-6xl mx-auto">
                        {CATEGORIES.map((cat) => (
                            <div
                                key={cat.id}
                                className="flex items-center gap-2 px-3 py-2 rounded-full text-[11px] md:text-[15px] font-medium bg-white border border-gray-100 text-black shadow-[0_2px_8px_rgba(0,0,0,0.04)] cursor-default transition-transform hover:scale-[1.02]"
                            >
                                <span className="text-black/80">
                                    {cat.icon}
                                </span>
                                {cat.label}
                            </div>
                        ))}
                    </div>

                    {/* Video Grid */}
                    <div className="relative mb-20 px-2 md:px-0">
                        {/* Navigation Arrows */}
                        <button className="hidden md:flex absolute -left-16 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-[#edffea] border-2 border-[#bbf7d0] rounded-[18px] items-center justify-center text-black/80 hover:bg-[#e0fcdb] transition-colors cursor-pointer">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                        </button>
                        <button className="hidden md:flex absolute -right-16 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-[#edffea] border-2 border-[#bbf7d0] rounded-[18px] items-center justify-center text-black/80 hover:bg-[#e0fcdb] transition-colors cursor-pointer">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                        </button>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {VIDEOS.map((video) => (
                                <div key={video.id} className="relative aspect-[9/16] bg-black rounded-[18px] overflow-hidden group cursor-pointer">
                                    <div className="absolute top-3 right-3 z-20 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-medium text-black tracking-tight shadow-sm">
                                        {video.label}
                                    </div>
                                    <div className="absolute inset-0 bg-neutral-200">
                                        <div className="w-full h-full bg-gradient-to-b from-black/10 to-black/40" />
                                        {/* Play Button */}
                                        <div className="absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-300 opacity-100">
                                            <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-white transition-transform hover:scale-110 shadow-[0px_0px_36.1px_0px_#AFF2AD]">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="#2E7D32" className="ml-1 drop-shadow-sm md:w-6 md:h-6">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer Section */}
                    <div className="flex flex-col items-center justify-center space-y-10">
                        <p className="text-black/60 text-[11px] md:text-[14px] font-medium tracking-normal text-center">
                            700&apos;den fazla pazarlama ekibinin gizli silahı
                        </p>

                        {/* Brands as Images */}
                        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-x-6 md:gap-x-8 w-full max-w-[95%] mx-auto mt-6">
                            {BRAND_IMAGES.map((src, i) => (
                                <img
                                    key={i}
                                    src={src}
                                    alt="Brand Logo"
                                    className="h-8 md:h-12 lg:h-14 w-auto object-contain shrink-0"
                                    draggable={false}
                                />
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center gap-3 pt-4">
                            <button className="h-[38px] md:h-[46px] px-5 md:px-8 rounded-full bg-[#111] text-white font-medium text-[12px] md:text-[14px] hover:bg-black transition-all shadow-md hover:translate-y-[-1px]">
                                İletişime Geç!
                            </button>
                            <button className="h-[38px] md:h-[46px] px-5 md:px-8 rounded-full bg-white border border-gray-200 text-black font-medium text-[12px] md:text-[14px] hover:bg-gray-50 transition-all shadow-sm hover:translate-y-[-1px]">
                                Formu Doldur!
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
