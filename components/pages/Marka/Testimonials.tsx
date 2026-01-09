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
        name: "Sinem Güvenir",
        role: "Co-founder - Jerf Sport",
        avatar: "https://cdn.e-adam.net/InfHouse/sinem.png",
        rating: 5,
        content: "Jerf'in aktif, enerjik ve gerçek kullanıcı deneyimine dayanan marka hikâyesini daha geniş kitlelere ulaştırmamızda yanımızda olduğunuz için teşekkür ederiz. Jerf ekibi olarak verimli iş birliğinden oldukça memnunuz ve birlikte büyümeye devam etmeyi diliyoruz."
    },
    {
        id: 2,
        name: "İpek Karagöz",
        role: "Co-founder - Krijen",
        avatar: "https://cdn.e-adam.net/InfHouse/ipek.png",
        rating: 5,
        content: "Infhouse ekibiyle çalışmak bizim için keyifli ve verimli oldu. Hem süreç yönetimindeki profesyonellikleri hem de marka dilimizi doğru anlayıp yaratıcı içerik üretmeleri işimizi çok kolaylaştırıyor. İletişimlerinin her zaman hızlı ve çözüm odaklı olması sayesinde projelerimiz çok kısa sürede hayata geçiyor. Güvenle çalıştığımız bir partner olmalarından büyük memnuniyet duyuyoruz."
    },
    {
        id: 3,
        name: "Özge Doğan",
        role: "Production Team Lead - Dailyshot",
        avatar: "https://cdn.e-adam.net/InfHouse/ozge.png",
        rating: 5,
        content: "Marka ve influencer tarafını tek bir yerde buluşturan bu yapı; doğru eşleşme, içerik onayları, iletişim ve performans takibini ciddi anlamda kolaylaştırıyor. Ajansın profesyonel yaklaşımı, pozitif, enerjik ve çözüm odaklı desteği sayesinde tüm süreç hem verimli hem de sorunsuz ilerliyor. Ve en önemlisi hızlı aksiyon almamıza olanak sağlıyor!! Emeği geçen tüm ekibe teşekkür ederiz."
    },
    {
        id: 4,
        name: "Tara Tell",
        role: "Communications Executive - Gülsha",
        avatar: "https://cdn.e-adam.net/InfHouse/tara.png",
        rating: 5,
        content: "Infhouse ile çalışmak, süreci yalnızca bir hizmet değil gerçekten keyifli bir iş birliği haline getiriyor. UGC tarafında markayı anlayan, dili doğru okuyan ve her adımda iletişimi güçlü tutan bir ekipleri var. İhtiyaçlarımızı hızlıca kavrayıp bize özel çözümler sunmaları, ortaya çıkan içeriklerin doğallığına ve samimiyetine net şekilde yansıyor. Kendimizi her zaman dinlenen, desteklenen ve birlikte üreten bir ekip içinde hissediyoruz. UGC alanında güvenle çalışılabilecek, enerjisi yüksek ve işine özen gösteren bir ekip olarak Infhouse ile bu yolculuğun parçası olmaktan mutluyuz."
    },
    {
        id: 5,
        name: "Onur Arslan",
        role: "Marketing Responsible - Good Year Oto Aksesuar",
        avatar: "https://cdn.e-adam.net/InfHouse/onur.png",
        rating: 5,
        content: "Goodyear Car Accessories ekibi olarak iş birliğimiz bizim için oldukça keyifli ve verimli bir deneyim oldu. Sürecin en başından itibaren ekibinizin beklentilerini dikkatle dinleyen, markamızın tonunu ve hedef kitlesini doğru analiz eden bir yaklaşımla ilerlediler. Üretilen içerikler; doğal, samimi ve kullanıcı deneyimini yansıtan yapısıyla markamızın dijital iletişimini güçlendirdi. Infhouse ekibinin yaratıcı bakış açısı, hızlı aksiyon alabilen yapısı ve çözüm odaklı yaklaşımı sayesinde süreç son derece sorunsuz ilerledi."
    },
    {
        id: 6,
        name: "İlayda Doğan",
        role: "Influencer Marketing Professional - Hiwell",
        avatar: "https://cdn.e-adam.net/InfHouse/ilayda.png",
        rating: 5,
        content: "Infhouse ekibiyle çalışmak bizim için her daim çok keyifli. Süreçlerimiz son derece uyumlu, anlayışlı ve samimi bir iletişim çerçevesinde sorunsuz ve hızlı bir şekilde ilerliyor. İçerik üretimi ve süreç yönetimindeki profesyonellikleri sayesinde de iş birliğimizi sorunsuz ve verimli bir şekilde sürdürüyoruz. Tüm ekibe özenli çalışmaları için teşekkür ederiz."
    }
];

export default function Testimonials() {
    const [centerIndex, setCenterIndex] = useState(0);
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
        const interval = setInterval(next, 5000);
        return () => clearInterval(interval);
    }, [next]);

    const getPosition = (index: number) => {
        const diff = (index - centerIndex + TESTIMONIALS.length) % TESTIMONIALS.length;
        if (diff === 0) return "center";
        if (diff === 1) return "right";
        if (diff === TESTIMONIALS.length - 1) return "left";
        return "hidden";
    };

    return (
        <section className="bg-[#fbfaf7] py-16 md:py-32 px-4 md:px-12 overflow-hidden relative">
            <div className="max-w-[1400px] mx-auto text-center mb-12 md:mb-24 px-4">
                <h2 className="text-[24px] md:text-[72px] font-bold tracking-tight leading-[1.2] font-instrument">
                    <span className="bg-gradient-to-r from-[#FFDADE] to-[#FF6C79] bg-clip-text text-transparent">Müşterilerimiz</span> Ne Diyor?
                </h2>
            </div>

            <div className="relative w-full max-w-[1600px] mx-auto h-[400px] md:h-[550px]">
                <div className="flex items-center justify-center w-full h-full relative">
                    {TESTIMONIALS.map((t, i) => {
                        const pos = getPosition(i);

                        return (
                            <motion.div
                                key={t.id}
                                className="absolute w-[85%] md:w-[35%] lg:w-[32%] bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100/50"
                                initial={false}
                                animate={{
                                    scale: pos === "center" ? 1.05 : 0.85,
                                    x: pos === "center" ? "0%" : pos === "right" ? (isMobile ? "95%" : "110%") : pos === "left" ? (isMobile ? "-95%" : "-110%") : pos === "hidden" ? (i > centerIndex ? "150%" : "-150%") : 0,
                                    y: pos === "center" ? 0 : 20,
                                    opacity: pos === "hidden" ? 0 : 1,
                                    zIndex: pos === "center" ? 50 : 30,
                                    filter: pos === "center" ? "blur(0px)" : "blur(1px)",
                                }}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.32, 0.72, 0, 1]
                                }}
                            >
                                {/* Quote Icon */}
                                <div className="absolute top-4 right-4 text-[#FF6C79] opacity-20">
                                    <svg width="24" height="18" viewBox="0 0 48 36" fill="currentColor">
                                        <path d="M12.9 36C5.1 36 0 30.6 0 24.3c0-4.8 3.3-8.7 8.1-9.9C9.6 4.5 16.5 0 24 0v4.8c-6 0-11.4 3.9-12.6 10.5h11.1v20.7H12.9z M36.9 36C29.1 36 24 30.6 24 24.3c0-4.8 3.3-8.7 8.1-9.9C33.6 4.5 40.5 0 48 0v4.8c-6 0-11.4 3.9-12.6 10.5H46.5v20.7H36.9z" />
                                    </svg>
                                </div>

                                <div className="flex flex-col h-full">
                                    <div className="flex items-center gap-4 mb-6">
                                        <img src={t.avatar} alt={t.name} className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover ring-2 ring-[#FFDADE]/50" />
                                        <div className="text-left">
                                            <div className="flex text-[#FFD700] text-xs mb-1">
                                                {"★".repeat(t.rating)}
                                            </div>
                                            <h3 className="text-[14px] md:text-xl font-bold text-black leading-tight">{t.name}</h3>
                                            <p className="text-gray-400 text-[10px] md:text-sm font-medium">{t.role}</p>
                                        </div>
                                    </div>

                                    <p className="text-gray-500 text-[13px] md:text-[16px] leading-[1.6] text-left font-medium line-clamp-[8]">
                                        {t.content}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Navigation */}
            <div className="mt-8 md:mt-12 flex flex-col items-center gap-8">
                <div className="flex items-center gap-6 md:gap-10">
                    <button
                        onClick={prev}
                        className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white shadow-md border border-gray-100 text-[#FF6C79] flex items-center justify-center hover:scale-110 transition-all active:scale-95"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <div className="flex gap-2">
                        {TESTIMONIALS.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCenterIndex(i)}
                                className={`h-2 rounded-full transition-all duration-300 ${i === centerIndex ? "w-8 bg-[#FF6C79]" : "w-2 bg-[#FFDADE]"}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={next}
                        className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white shadow-md border border-gray-100 text-[#FF6C79] flex items-center justify-center hover:scale-110 transition-all active:scale-95"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
}
