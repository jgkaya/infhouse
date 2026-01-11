"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Total 10 cards
const SERVICES = [
    { id: 1, title: "Revize Hakkı", image: "https://cdn.e-adam.net/infhouse/revize.mp4" },
    { id: 2, title: "Aylık Sosyal Medya Paylaşım Planı", image: "https://cdn.e-adam.net/infhouse/ayl%C4%B1k.mp4" },
    { id: 3, title: "Edit Desteği", image: "https://cdn.e-adam.net/infhouse/edit.mp4" },
    { id: 4, title: "Proje Önerileri ve Yönetimi", image: "https://cdn.e-adam.net/infhouse/proje.mp4" },
    { id: 5, title: "Story ve Reels Önerileri", image: "https://cdn.e-adam.net/infhouse/story.mp4" },
    { id: 6, title: "Seçkin İçerik Üreticileri", image: "https://cdn.e-adam.net/infhouse/se%C3%A7kin.mp4" },
    { id: 7, title: "Marka Yüzü Desteği", image: "https://cdn.e-adam.net/infhouse/marka.mp4" },
    { id: 8, title: "Günlük Sosyal Medya Raporu", image: "https://cdn.e-adam.net/infhouse/g%C3%BCnl%C3%BCk.mp4" },
    { id: 9, title: "Global Trend Takibi", image: "https://cdn.e-adam.net/infhouse/global.mp4" },
    { id: 10, title: "24 Saate İçerik Teslimi", image: "https://cdn.e-adam.net/infhouse/24saat.mp4" },
];

export default function WhatWeDo() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    // Debounced scroll check
    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 5); // tolerance
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
        }
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        // Scroll to show the 2nd column initially
        // 1st column width approx 360px + gap.
        // Let's approximate 1 column width to scroll.
        // Or simpler: scroll to approximately 360px.
        // 360px card + 24px gap = 384px.
        el.scrollLeft = 384;
        checkScroll();

        let timeoutId: NodeJS.Timeout;
        const handleScroll = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(checkScroll, 100);
        };

        el.addEventListener("scroll", handleScroll);

        return () => {
            el.removeEventListener("scroll", handleScroll);
            clearTimeout(timeoutId);
        };
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            // Scroll by approximately one column + gap
            const scrollAmount = 384;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
            setTimeout(checkScroll, 300);
        }
    };

    return (
        <section className="bg-[#fbfaf7] py-10 overflow-hidden">
            <div className="mx-auto max-w-[1180px] px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-[42px] md:text-[48px] font-bold tracking-tight text-[#1a1a1a]">
                        Sizin İçin{" "}
                        <span className="bg-gradient-to-r from-[#FFDADE] to-[#FF6C7C] bg-clip-text text-transparent">
                            Neler Yapıyoruz?
                        </span>
                    </h2>
                    <p className="mt-3 text-[17px] text-gray-500 font-medium">
                        Kaliteli ve etkileyici içerikler üretiyoruz.
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative">

                    {/* Scrollable Area - Grid with 2 Rows */}
                    <div
                        ref={scrollRef}
                        className="
              grid grid-rows-2 grid-flow-col gap-6
              overflow-x-auto pb-4 pt-4 px-2
              scroll-smooth
              snap-x snap-mandatory
              [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
            "
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        {SERVICES.map((item) => (
                            <div
                                key={item.id}
                                className="
                  w-[300px] md:w-[360px]
                  snap-center
                "
                            >
                                <div className="
                  group relative flex flex-col items-center justify-start
                  h-[340px] rounded-[32px] bg-white p-5
                  shadow-[0_2px_20px_rgba(0,0,0,0.04)]
                  ring-1 ring-black/[0.03]
                  transition-all duration-300
                  hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]
                  hover:-translate-y-1
                ">
                                    {/* Image/GIF Area - Compact height for 2-row layout */}
                                    <div className="relative w-full h-[220px] mb-5 overflow-hidden rounded-[20px] bg-gray-50">
                                        <video
                                            src={item.image}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-[18px] font-bold text-gray-900 text-center leading-tight">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop Navigation Buttons */}
                    <>
                        <button
                            onClick={() => scroll("left")}
                            disabled={!canScrollLeft}
                            className={`
                absolute top-1/2 -translate-y-1/2 z-10
                hidden md:flex h-12 w-12 items-center justify-center rounded-2xl
                bg-[#e6f4ea] text-[#1e8e3e]
                transition-all duration-200
                hover:bg-[#dcecd0] hover:scale-110
                disabled:opacity-0 disabled:cursor-not-allowed
                left-4 xl:-left-12
              `}
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>

                        <button
                            onClick={() => scroll("right")}
                            disabled={!canScrollRight}
                            className={`
                absolute top-1/2 -translate-y-1/2 z-10
                hidden md:flex h-12 w-12 items-center justify-center rounded-2xl
                bg-[#e6f4ea] text-[#1e8e3e]
                transition-all duration-200
                hover:bg-[#dcecd0] hover:scale-110
                disabled:opacity-0 disabled:cursor-not-allowed
                right-4 xl:-right-12
              `}
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    </>

                    {/* Mobile Navigation Buttons */}
                    <div className="mt-8 flex md:hidden items-center justify-center gap-4">
                        <button
                            onClick={() => scroll("left")}
                            disabled={!canScrollLeft}
                            className={`
                flex h-12 w-12 items-center justify-center rounded-2xl
                bg-[#e6f4ea] text-[#1e8e3e]
                transition-all duration-200
                hover:bg-[#dcecd0]
                active:scale-95
                disabled:opacity-50 disabled:cursor-not-allowed
              `}
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>

                        <button
                            onClick={() => scroll("right")}
                            disabled={!canScrollRight}
                            className={`
                flex h-12 w-12 items-center justify-center rounded-2xl
                bg-[#e6f4ea] text-[#1e8e3e]
                transition-all duration-200
                hover:bg-[#dcecd0]
                active:scale-95
                disabled:opacity-50 disabled:cursor-not-allowed
              `}
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
