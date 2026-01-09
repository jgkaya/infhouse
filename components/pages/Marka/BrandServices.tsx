"use client";


import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    Users,
    Swords,
    Search,
    ClipboardCheck,
    MessageSquare,
    Smile,
    Package,
    FileText,
    Bot,
    Hash,
    Lightbulb,
    BarChart3,
    TrendingUp,
    Calendar,
    Store,
    Gift,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const SERVICES = [
    { icon: Users, label: "Hedef Kitle Belirleme" },
    { icon: "https://cdn.e-adam.net/infhouse/strategic-decision_12112632%201.png", label: "Rakip Analizi" },
    { icon: "https://cdn.e-adam.net/infhouse/infsearch%201.png", label: "Influencer Araştırma & Seçimi" },
    { icon: "https://cdn.e-adam.net/infhouse/project%201.png", label: "Doğru Projelendirme" },
    { icon: "https://cdn.e-adam.net/infhouse/smd%201.png", label: "Sosyal Medya Danışmanlığı" },
    { icon: "https://cdn.e-adam.net/infhouse/emoji-happy.png", label: "Marka Yüzü Danışmanlığı" },
    { icon: "https://cdn.e-adam.net/infhouse/ccc%201.png", label: "İçerik Hazırlama & Teslimi" },
    { icon: "https://cdn.e-adam.net/infhouse/inff%201.png", label: "UGC Takibi ve Liste Oluşturma" },
    { icon: "https://cdn.e-adam.net/infhouse/333%201.png", label: "Mecra İşbirlikleri" },
    { icon: "https://cdn.e-adam.net/infhouse/hashtag-up.png", label: "Proje Bazlı Hashtag Belirleme" },
    { icon: "https://cdn.e-adam.net/infhouse/cfs%201.png", label: "Yaratıcı Kampanya Planlamaları" },
    { icon: "https://cdn.e-adam.net/infhouse/rapor%201.png", label: "Performans Takibi ve Raporlama" },
    { icon: "https://cdn.e-adam.net/infhouse/gmsi%201.png", label: "Gündem Bağlantılı İçerik Önerileri" },
    { icon: "https://cdn.e-adam.net/infhouse/iiiii%201.png", label: "Etkinlik Yönetimi & Moderatör Seçimi" },
    { icon: "https://cdn.e-adam.net/infhouse/ppp%201.png", label: "Pop-up Store Yönetimi" },
    { icon: "https://cdn.e-adam.net/infhouse/gift%201.png", label: "PR Gift Gönderimi ve Raporlama" },
];

const BrandServices = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [direction, setDirection] = useState(0);
    const itemsPerPage = 8;
    const totalPages = Math.ceil(SERVICES.length / itemsPerPage);

    const handlePrev = () => {
        setDirection(-1);
        setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleNext = () => {
        setDirection(1);
        setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
    };

    const currentServices = SERVICES.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    return (
        <section className="w-full bg-[#FAFAFA] py-12 md:py-16 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-16 max-w-4xl mx-auto">
                    <h2
                        className="text-[28px] md:text-[60px] font-medium tracking-[-0.05em] leading-[1.2] md:leading-[70px] text-center font-instrument-sans text-transparent bg-clip-text mb-4 md:mb-20 pb-2"
                        style={{ backgroundImage: 'linear-gradient(91.38deg, #FFDADE 2.28%, #FF627B 99.98%)' }}
                    >
                        Sunduğumuz Hizmetler
                    </h2>
                    <p className="text-[#9E9E9E] text-[16px] md:text-[26px] font-normal leading-[100%] tracking-[-0.02em] text-center max-w-5xl" style={{ fontFamily: '"Inter Tight", sans-serif' }}>
                        Markanız için sadece içerik üretmiyoruz; hedef kitle analizinden kreatif kampanyalara,
                        influencer seçiminden performans takibine kadar tüm süreci uçtan uca planlıyoruz.
                    </p>
                </div>

                {/* Mobile View: Animated Slider */}
                <div className="block md:hidden">
                    <div className="relative mb-4">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentPage}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                className="grid grid-cols-2 gap-4"
                            >
                                {currentServices.map((service, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-white border text-[#1c1c1c] border-[#E5E5E5] rounded-[24px] p-2 flex flex-row items-center text-left gap-3 hover:shadow-lg transition-shadow duration-300 h-full"
                                    >
                                        <div className="w-8 h-8 bg-[#FFF9C4] rounded-xl flex items-center justify-center shrink-0">
                                            {typeof service.icon === 'string' ? (
                                                <img src={service.icon} alt={service.label} className="w-4 h-4 object-contain" />
                                            ) : (
                                                <service.icon className="w-4 h-4 text-[#1c1c1c]" strokeWidth={1.5} />
                                            )}
                                        </div>
                                        <span
                                            className="text-[10px] font-medium tracking-[-0.05em] text-[#000]"
                                            style={{
                                                fontFamily: '"Inter Tight", sans-serif',
                                                lineHeight: '1.2'
                                            }}
                                        >
                                            {service.label}
                                        </span>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Pagination Controls */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <button
                            onClick={handlePrev}
                            disabled={currentPage === 0}
                            className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-[#E8F5E9] text-[#1c1c1c] hover:bg-[#C8E6C9] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={currentPage === totalPages - 1}
                            className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-[#E8F5E9] text-[#1c1c1c] hover:bg-[#C8E6C9] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Desktop View: Full Grid */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {SERVICES.map((service, idx) => (
                        <div
                            key={idx}
                            className="bg-white border text-[#1c1c1c] border-[#E5E5E5] rounded-[24px] p-6 flex items-center gap-4 hover:shadow-lg transition-shadow duration-300 h-full text-left"
                        >
                            <div className="w-12 h-12 bg-[#FFF9C4] rounded-xl flex items-center justify-center shrink-0">
                                {typeof service.icon === 'string' ? (
                                    <img src={service.icon} alt={service.label} className="w-6 h-6 object-contain" />
                                ) : (
                                    <service.icon className="w-6 h-6 text-[#1c1c1c]" strokeWidth={1.5} />
                                )}
                            </div>
                            <span
                                className="text-[15px] font-medium tracking-[-0.05em] text-[#000]"
                                style={{
                                    fontFamily: '"Inter Tight", sans-serif',
                                    lineHeight: '1.2'
                                }}
                            >
                                {service.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-row items-center justify-center gap-2 md:gap-4 w-full">
                    <button className="flex-1 md:flex-none w-auto px-4 py-3 md:px-8 md:py-4 bg-[#1c1c1c] text-white rounded-full text-sm md:text-lg font-medium hover:bg-black transition-colors md:min-w-[200px] whitespace-nowrap">
                        Sizi Arayalım
                    </button>
                    <button className="flex-1 md:flex-none w-auto px-4 py-3 md:px-8 md:py-4 bg-white text-[#1c1c1c] border border-[#E5E5E5] rounded-full text-sm md:text-lg font-medium hover:bg-gray-50 transition-colors md:min-w-[200px] whitespace-nowrap">
                        Şimdi Başvurun
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BrandServices;
