"use client";

import React from "react";
import { motion } from "framer-motion";

const BRAND_LOGOS = [
    "MAI STUDIOS CO.",
    "gülsha",
    "jerf",
    "GOODYEAR",
    "PAULMARK",
    "Hiwell",
    "LORIS.",
    "bahs.",
    "s'hevec",
    "Çetinkaya",
    "GÖNDERİ®",
    "ABBATE",
];

const BrandLogosStatic = () => {
    return (
        <div className="w-full py-10">
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-20">
                {BRAND_LOGOS.map((name, idx) => (
                    <div key={idx} className="opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-default shrink-0">
                        <span className="text-[20px] md:text-[24px] font-bold text-gray-900 tracking-tighter uppercase font-instrument-sans">
                            {name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const MainBrandShowcase = () => {
    return (
        <section className="w-full bg-white py-20 overflow-hidden relative">
            <div className="max-w-[1440px] mx-auto px-4 flex flex-col items-center">

                {/* Rainbow Header Badge */}
                <div className="mb-12 relative transition-transform hover:scale-[1.02] duration-300">
                    <div className="relative">
                        {/* Shadow & Border Container */}
                        <div className="absolute inset-0 bg-black translate-y-[2px] rounded-full blur-[1px] opacity-10" />

                        {/* Main Rainbow Badge */}
                        <div className="relative px-12 py-3.5 bg-gradient-to-r from-[#bbf7d0] via-[#fef08a] to-[#ffcfd2] border border-black/20 rounded-full flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.05),inset_0_1px_2px_rgba(255,255,255,0.8)]">
                            {/* Sparkles */}
                            <span className="absolute left-3.5 top-2.5 text-white text-[14px] filter drop-shadow-[0_0_3px_rgba(0,0,0,0.1)] select-none">✦</span>
                            <span className="absolute right-3.5 bottom-2.5 text-white text-[14px] filter drop-shadow-[0_0_3px_rgba(0,0,0,0.1)] opacity-80 select-none">✦</span>

                            <span className="text-[14px] md:text-[16px] font-bold text-black tracking-tight text-center relative z-10">
                                700&apos;den Fazla Pazarlama Ekibinin Gizli Silahı
                            </span>
                        </div>
                    </div>
                </div>

                {/* Brand Showcase Area */}
                <div className="w-full relative px-2">
                    <BrandLogosStatic />
                    {/* Side Fades */}
                    <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                </div>

                {/* CTA Buttons */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
                    <button className="h-[64px] px-12 bg-[#221F1E] text-white rounded-full text-[18px] font-bold shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-300">
                        Sizi Arayalım
                    </button>
                    <button className="h-[64px] px-12 bg-white text-[#221F1E] border border-gray-100 rounded-full text-[18px] font-bold shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:scale-105 transition-all duration-300">
                        Şimdi Başvurun
                    </button>
                </div>

                {/* Comparison Table Section */}
                <div className="mt-32 w-full max-w-[1200px] mx-auto px-4 relative">
                    {/* Header Labels (Top) */}
                    <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] mb-4">
                        <div className="px-6"></div>
                        <div className="relative z-20 flex flex-col items-center" style={{ paddingTop: '25px' }}>
                            {/* The Logo and Pill Header part */}
                            <img
                                src="https://cdn.e-adam.net/InfHouse/Inf-logo.png"
                                alt="infhouse"
                                className="h-[40px] w-auto object-contain"
                            />
                        </div>
                        <div className="flex items-center justify-center pt-6">
                            <span className="text-[17px] font-semibold text-gray-800">Şirket içi</span>
                        </div>
                        <div className="flex items-center justify-center pt-6">
                            <span className="text-[17px] font-semibold text-gray-800">Ajanslar</span>
                        </div>
                        <div className="flex items-center justify-center pt-6 text-center">
                            <span className="text-[15px] font-semibold text-gray-800 leading-tight">Kullanıcı tarafından oluşturulan<br />içerik platformları</span>
                        </div>
                    </div>

                    {/* Table Body with Floating Pill */}
                    <div className="relative">
                        {/* THE INFHOUSE PILLAR (Continuous background and border) */}
                        <div className="absolute top-[-100px] bottom-[-40px] bg-[#F4FFF9] border-2 border-[#A7F3D0] rounded-[48px] shadow-[0_20px_50px_-10px_rgba(16,185,129,0.15)] z-10 pointer-events-none"
                            style={{ left: '27.4%', width: '17.8%' }}>
                        </div>

                        {/* Feature Rows */}
                        <div className="relative z-20 space-y-1">
                            {[
                                { label: "Özel destek", inf: "check", sirket: "cross", ajans: "check", ugc: "cross" },
                                { label: "Maliyetler", inf: "check", sirket: "₺₺₺\n(maaşlar dahil)", ajans: "₺₺₺", ugc: "₺", striped: true },
                                { label: "Yaratıcı kalitesi", inf: "Yüksek", sirket: "Belirsiz", ajans: "Genellikle iyi", ugc: "Belirsiz" },
                                { label: "Teslim süresi", inf: "14 gün içinde", sirket: "Öngörülemez", ajans: "3-4 hafta", ugc: "Günler", striped: true },
                                { label: "İçerik kalitesi", inf: "Yüksek", sirket: "Belirsiz", ajans: "İyi", ugc: "Belirsiz" },
                                { label: "Trend müzik edit desteği", inf: "check", sirket: "cross", ajans: "cross", ugc: "cross", striped: true },
                                { label: "Yaratıcı strateji desteği", inf: "check", sirket: "cross", ajans: "check", ugc: "cross" },
                                { label: "İçerik üzerinde kontrol", inf: "check", sirket: "check", ajans: "cross", ugc: "check", striped: true },
                            ].map((row, idx) => (
                                <div key={idx} className={`grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] min-h-[72px] items-center ${row.striped ? 'bg-gray-50/60 rounded-[14px]' : ''}`}>
                                    {/* Feature Name */}
                                    <div className="px-10 h-full flex items-center">
                                        <span className="text-[16px] font-medium text-gray-700">{row.label}</span>
                                    </div>

                                    {/* infhouse Cell */}
                                    <div className="h-full flex items-center justify-center">
                                        {row.inf === "check" ? (
                                            <div className="w-8 h-8 rounded-full bg-[#10B981] flex items-center justify-center shadow-[0_3px_8px_rgba(16,185,129,0.3)]">
                                                <span className="text-white text-[16px]">✓</span>
                                            </div>
                                        ) : (
                                            <span className="text-[#64748B] text-[15px] font-medium">{row.inf}</span>
                                        )}
                                    </div>

                                    {/* Şirket içi Cell */}
                                    <div className="h-full flex flex-col items-center justify-center text-center">
                                        {row.sirket === "check" ? <span className="text-gray-400 text-2xl font-light">✓</span> :
                                            row.sirket === "cross" ? <span className="text-gray-300 text-2xl font-light">✕</span> :
                                                <span className="text-gray-400 text-[14px] leading-tight whitespace-pre-line">{row.sirket}</span>}
                                    </div>

                                    {/* Ajanslar Cell */}
                                    <div className="h-full flex items-center justify-center text-center">
                                        {row.ajans === "check" ? <span className="text-gray-400 text-2xl font-light">✓</span> :
                                            row.ajans === "cross" ? <span className="text-gray-300 text-2xl font-light">✕</span> :
                                                <span className="text-gray-400 text-[14px] leading-tight whitespace-pre-line">{row.ajans}</span>}
                                    </div>

                                    {/* UGC Cell */}
                                    <div className="h-full flex items-center justify-center text-center">
                                        {row.ugc === "check" ? <span className="text-gray-400 text-2xl font-light">✓</span> :
                                            row.ugc === "cross" ? <span className="text-gray-300 text-2xl font-light">✕</span> :
                                                <span className="text-gray-400 text-[14px] leading-tight whitespace-pre-line">{row.ugc}</span>}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Footer / CTA inside Pill */}
                        <div className="relative z-20 grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] mt-10">
                            <div></div>
                            <div className="flex justify-center pb-8">
                                <button className="px-8 py-3.5 bg-[#221F1E] text-white rounded-full text-[15px] font-bold shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap">
                                    Bize ulaşın!
                                </button>
                            </div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainBrandShowcase;
