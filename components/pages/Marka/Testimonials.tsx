"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
    id: number;
    name: string;
    role: string;
    avatar: string;
    rating: number;
    content: string;
}

const TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        name: "Özge Doğan",
        role: "Production Team Lead - Dailyshot",
        avatar: "https://randomuser.me/api/portraits/women/6.jpg",
        rating: 5,
        content: "Marka ve influencer tarafını tek bir yerde buluşturan bu yapı; doğru eşleşme, içerik onayları, iletişim ve performans takibini ciddi anlamda kolaylaştırıyor. Ajansın profesyonel yaklaşımı, pozitif, enerjik ve çözüm odaklı desteği sayesinde tüm süreç hem verimli hem de sorunsuz ilerliyor. Ve en önemlisi hızlı aksiyon almamıza olanak sağlıyor!!!"
    },
    {
        id: 2,
        name: "Sinem Güvenir",
        role: "Co-founder - Jerf Sport",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        rating: 5,
        content: "Jerf'in aktif, enerjik ve gerçek kullanıcı deneyimine dayanan marka hikâyesini daha geniş kitlelere ulaştırmamızda yanımızda olduğunuz için teşekkür ederiz. Jerf ekibi olarak verimli iş birliğinden oldukça memnunuz ve birlikte büyümeye devam etmeyi diliyoruz."
    },
    {
        id: 3,
        name: "İpek Karagöz",
        role: "Co-founder - Krijen",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        rating: 5,
        content: "Infhouse ekibiyle çalışmak bizim için keyifli ve verimli oldu. Hem süreç yönetimindeki profesyonellikleri hem de marka dilimizi doğru anlayıp yaratıcı içerik üretmeleri işimizi çok kolaylaştırıyor. İletişimlerinin her zaman hızlı ve çözüm odaklı olması sayesinde projelerimiz çok kısa sürede hayata geçiyor. Güvenle çalıştığımız bir partner olmalarından büyük memnuniyet duyuyoruz."
    },
    {
        id: 4,
        name: "Esra Demir",
        role: "Marketing Manager - Bloom",
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        rating: 5,
        content: "Hızlı içerik teslimi ve revize konusundaki esneklikleri bizi çok mutlu ediyor. Global trendleri takip ederek markamıza entegre etmeleri vizyonumuzu genişletti."
    },
    {
        id: 5,
        name: "Caner Öz",
        role: "Founder - FitBox",
        avatar: "https://randomuser.me/api/portraits/men/5.jpg",
        rating: 5,
        content: "Doğru içerik üreticisiyle eşleşmek zordur ama Infhouse bu süreci çok şeffaf ve başarılı yönetiyor. Gelen içeriklerin kalitesi her zaman beklentimizin üzerinde."
    }
];

export default function Testimonials() {
    const [centerIndex, setCenterIndex] = useState(1); // Set Sinem Güvenir as initial center
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const next = useCallback(() => {
        setCenterIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, []);

    const prev = useCallback(() => {
        setCenterIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    }, []);

    useEffect(() => {
        const interval = setInterval(next, 4000);
        return () => clearInterval(interval);
    }, [next]);

    const getPosition = (index: number) => {
        const diff = (index - centerIndex + TESTIMONIALS.length) % TESTIMONIALS.length;
        if (diff === 0) return "center";
        if (diff === 1 || diff === -(TESTIMONIALS.length - 1)) return "right";
        if (diff === TESTIMONIALS.length - 1 || diff === -1) return "left";
        return "hidden";
    };

    return (
        <section className="bg-[#fbfaf7] py-8 md:py-24 px-4 md:px-12 overflow-hidden relative">
            <div className="max-w-[1400px] mx-auto text-center mb-0 md:mb-24 px-4">
                <h2 className="text-[20px] md:text-[72px] font-bold tracking-tight leading-[1.2] font-instrument">
                    <span className="bg-gradient-to-r from-[#FFDADE] to-[#FF6C79] bg-clip-text text-transparent">Müşterilerimiz</span> Ne Diyor?
                </h2>
            </div>

            <div className="relative w-full max-w-[1600px] mx-auto h-[320px] md:h-[500px]">
                <div className="flex items-center justify-center w-full h-full relative">
                    {TESTIMONIALS.map((t, i) => {
                        const pos = getPosition(i);

                        return (
                            <motion.div
                                key={t.id}
                                className="absolute w-[65%] md:w-[32%] lg:w-[30%] bg-white rounded-[16px] md:rounded-[32px] p-3 md:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-gray-100/50"
                                initial={false}
                                animate={{
                                    scale: pos === "center" ? 1.05 : 0.9,
                                    x: pos === "center" ? "0%" : pos === "right" ? (isMobile ? "68%" : "105%") : pos === "left" ? (isMobile ? "-68%" : "-105%") : pos === "hidden" ? (i > centerIndex ? "200%" : "-200%") : 0,
                                    y: pos === "center" ? (isMobile ? -2 : -40) : (isMobile ? 15 : 40),
                                    opacity: pos === "hidden" ? 0 : 1,
                                    zIndex: pos === "center" ? 50 : 30,
                                    filter: pos === "center" ? "blur(0px)" : (isMobile ? "blur(0.5px)" : "blur(1px)"),
                                }}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.32, 0.72, 0, 1]
                                }}
                            >
                                {/* Quote Icon */}
                                <div className="absolute top-3 right-3 text-[#FF6C79] opacity-30">
                                    <svg width="14" height="10" viewBox="0 0 48 36" fill="none" stroke="currentColor" strokeWidth="4">
                                        <path d="M12.9 36C5.1 36 0 30.6 0 24.3c0-4.8 3.3-8.7 8.1-9.9C9.6 4.5 16.5 0 24 0v4.8c-6 0-11.4 3.9-12.6 10.5h11.1v20.7H12.9z M36.9 36C29.1 36 24 30.6 24 24.3c0-4.8 3.3-8.7 8.1-9.9C33.6 4.5 40.5 0 48 0v4.8c-6 0-11.4 3.9-12.6 10.5H46.5v20.7H36.9z" />
                                    </svg>
                                </div>

                                <div className="flex items-center gap-2 mb-2">
                                    <img src={t.avatar} alt={t.name} className="w-7 h-7 md:w-14 md:h-14 rounded-full object-cover ring-2 ring-white shadow-md" />
                                    <div className="text-left">
                                        <div className="flex text-yellow-400 text-[6px] md:text-xs mb-0.5">
                                            {"★".repeat(t.rating)}
                                        </div>
                                        <h3 className="text-[11px] md:text-lg font-bold text-black leading-tight">{t.name}</h3>
                                        <p className="text-gray-400 text-[8px] md:text-xs font-medium">{t.role}</p>
                                    </div>
                                </div>

                                <p className="text-gray-500 text-[10px] md:text-[16px] leading-[1.4] text-left font-medium line-clamp-[6]">
                                    {t.content}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Navigation */}
            <div className="mt-4 md:mt-8 flex flex-col items-center gap-6">
                <div className="flex items-center gap-6 md:gap-10">
                    <button
                        onClick={prev}
                        className="w-8 h-8 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[#E6F4EA] text-[#1E8E3E] flex items-center justify-center hover:bg-[#dcecd0] transition-all active:scale-90"
                    >
                        <ChevronLeft size={isMobile ? 18 : 24} />
                    </button>

                    <div className="flex gap-2">
                        {TESTIMONIALS.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCenterIndex(i)}
                                className={`h-1.5 md:h-2.5 rounded-full transition-all duration-300 ${i === centerIndex ? "w-4 md:w-6 bg-[#FF6C79]" : "w-1.5 md:w-2.5 bg-[#FFDADE]"}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={next}
                        className="w-8 h-8 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[#E6F4EA] text-[#1E8E3E] flex items-center justify-center hover:bg-[#dcecd0] transition-all active:scale-90"
                    >
                        <ChevronRight size={isMobile ? 18 : 24} />
                    </button>
                </div>
            </div>
        </section>
    );
}
