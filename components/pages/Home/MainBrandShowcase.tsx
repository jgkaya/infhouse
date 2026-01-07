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
    // Duplicate brands for seamless infinite scroll
    const duplicatedBrands = [...BRAND_LOGOS, ...BRAND_LOGOS];

    return (
        <div className="w-full py-10">
            {/* Mobile: Auto-scrolling Animation */}
            <div className="md:hidden overflow-hidden">
                <div className="flex items-center gap-x-8 animate-scroll-mobile">
                    {duplicatedBrands.map((name, idx) => (
                        <div key={idx} className="opacity-40 grayscale cursor-default shrink-0">
                            <span className="text-[18px] font-bold text-gray-900 tracking-tighter uppercase font-instrument-sans whitespace-nowrap">
                                {name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            {/* Desktop: Flex Wrap (Static) */}
            <div className="hidden md:flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-20">
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
                        <div className="relative px-6 md:px-12 py-3.5 bg-gradient-to-r from-[#bbf7d0] via-[#fef08a] to-[#ffcfd2] border border-black/20 rounded-full flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.05),inset_0_1px_2px_rgba(255,255,255,0.8)]">
                            {/* Sparkles */}
                            <span className="absolute left-3.5 top-2.5 text-white text-[14px] filter drop-shadow-[0_0_3px_rgba(0,0,0,0.1)] select-none">✦</span>
                            <span className="absolute right-3.5 bottom-2.5 text-white text-[14px] filter drop-shadow-[0_0_3px_rgba(0,0,0,0.1)] opacity-80 select-none">✦</span>

                            <span className="text-[11px] md:text-[16px] font-bold text-black tracking-tight text-center relative z-10 whitespace-nowrap">
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
                    <button className="px-8 py-2.5 bg-[#221F1E] text-white rounded-full text-[11px] font-bold shadow-lg hover:scale-105 transition-all duration-300">
                        Sizi Arayalım
                    </button>
                    <button className="px-8 py-2.5 bg-white text-[#221F1E] border border-gray-100 rounded-full text-[11px] font-bold shadow-lg hover:scale-105 transition-all duration-300">
                        Şimdi Başvurun
                    </button>
                </div>

                {/* Comparison Table Section */}
                <div className="mt-20 md:mt-32 w-full max-w-[1200px] mx-auto px-4 relative">
                    {/* Mobile View - Scrollable Full Table */}
                    <div className="md:hidden">
                        {/* Mobile: Full width table without scroll */}
                        <div className="w-full">
                            {/* Header Row */}
                            <div className="grid grid-cols-[0.8fr_0.7fr_0.7fr_0.7fr_1fr] gap-1 mb-3 px-1">
                                <div></div>
                                <div className="flex items-center justify-center">
                                    <img
                                        src="https://cdn.e-adam.net/InfHouse/Inf-logo.png"
                                        alt="infhouse"
                                        className="h-[22px] w-auto object-contain"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <span className="text-[9px] font-semibold text-gray-800 text-center leading-tight">Şirket içi</span>
                                </div>
                                <div className="flex items-center justify-center">
                                    <span className="text-[9px] font-semibold text-gray-800 text-center leading-tight">Ajanslar</span>
                                </div>
                                <div className="flex items-center justify-center">
                                    <span className="text-[8px] font-semibold text-gray-800 text-center leading-[1.2]">Kullanıcı tarafından oluşturulan içerik platformları</span>
                                </div>
                            </div>

                            {/* Table Body */}
                            <div className="relative">
                                {/* Green pill background for infhouse column - NO BORDER */}
                                <div className="absolute top-[-30px] bottom-[-15px] bg-[#F4FFF9] rounded-[28px] shadow-[0_12px_35px_-10px_rgba(16,185,129,0.15)] z-0"
                                    style={{ left: 'calc(0.8fr + 0.5rem)', width: 'calc(0.7fr - 0.5rem)' }}>
                                </div>

                                {/* Rows */}
                                <div className="relative z-10 space-y-0.5">
                                    {[
                                        { label: "Özel destek", inf: "check", sirket: "cross", ajans: "check", ugc: "cross" },
                                        { label: "Maliyetler", inf: "check", sirket: "₺₺₺", ajans: "₺₺₺", ugc: "₺", striped: true },
                                        { label: "Yaratıcı kalitesi", inf: "Yüksek", sirket: "Belirsiz", ajans: "Genellikle iyi", ugc: "Belirsiz" },
                                        { label: "Teslim süresi", inf: "14 gün içinde", sirket: "Öngörülemez", ajans: "3-4 hafta", ugc: "Günler", striped: true },
                                        { label: "İçerik kalitesi", inf: "Yüksek", sirket: "Belirsiz", ajans: "İyi", ugc: "Belirsiz" },
                                        { label: "Trend müzik edit desteği", inf: "check", sirket: "cross", ajans: "cross", ugc: "cross", striped: true },
                                        { label: "Yaratıcı strateji desteği", inf: "check", sirket: "cross", ajans: "check", ugc: "cross" },
                                        { label: "İçerik üzerinde kontrol", inf: "check", sirket: "check", ajans: "cross", ugc: "check", striped: true },
                                    ].map((row, idx) => (
                                        <div key={idx} className={`grid grid-cols-[0.8fr_0.7fr_0.7fr_0.7fr_1fr] gap-1 min-h-[44px] items-center px-1 ${row.striped ? 'bg-gray-50/60 rounded-[10px]' : ''}`}>
                                            {/* Feature Name */}
                                            <div className="flex items-center pr-1">
                                                <span className="text-[9px] font-medium text-gray-700 leading-[1.2]">{row.label}</span>
                                            </div>

                                            {/* infhouse */}
                                            <div className="flex items-center justify-center">
                                                {row.inf === "check" ? (
                                                    <div className="w-5 h-5 rounded-full bg-[#10B981] flex items-center justify-center shadow-[0_2px_5px_rgba(16,185,129,0.3)]">
                                                        <span className="text-white text-[11px]">✓</span>
                                                    </div>
                                                ) : (
                                                    <span className="text-[#64748B] text-[8px] font-medium text-center leading-[1.2]">{row.inf}</span>
                                                )}
                                            </div>

                                            {/* Şirket içi */}
                                            <div className="flex items-center justify-center">
                                                {row.sirket === "check" ? <span className="text-gray-400 text-base font-light">✓</span> :
                                                    row.sirket === "cross" ? <span className="text-gray-300 text-base font-light">✕</span> :
                                                        <span className="text-gray-400 text-[8px] text-center leading-[1.2]">{row.sirket}</span>}
                                            </div>

                                            {/* Ajanslar */}
                                            <div className="flex items-center justify-center">
                                                {row.ajans === "check" ? <span className="text-gray-400 text-base font-light">✓</span> :
                                                    row.ajans === "cross" ? <span className="text-gray-300 text-base font-light">✕</span> :
                                                        <span className="text-gray-400 text-[8px] text-center leading-[1.2]">{row.ajans}</span>}
                                            </div>

                                            {/* UGC */}
                                            <div className="flex items-center justify-center">
                                                {row.ugc === "check" ? <span className="text-gray-400 text-base font-light">✓</span> :
                                                    row.ugc === "cross" ? <span className="text-gray-300 text-base font-light">✕</span> :
                                                        <span className="text-gray-400 text-[8px] text-center leading-[1.2]">{row.ugc}</span>}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Mobile Button */}
                                <div className="relative z-10 mt-5 flex justify-center pb-3">
                                    <button className="px-8 py-2.5 bg-[#221F1E] text-white rounded-full text-[11px] font-bold shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap">
                                        Bize ulaşın!
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Desktop View - Full Table */}
                    <div className="hidden md:block">
                        {/* Header Labels (Top) */}
                        <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] mb-4">
                            <div className="px-6"></div>
                            <div className="relative z-20 flex flex-col items-center" style={{ paddingTop: '25px' }}>
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
                            {/* THE INFHOUSE PILLAR */}
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
                                                <span className="text-[#64748B] text-[15px] font-medium text-center">{row.inf}</span>
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
            </div>
        </section>
    );
};

export default MainBrandShowcase;
