"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { motion } from "framer-motion";

const FEEDBACKS = [
    {
        id: 1,
        name: "Şevval Şahin",
        quote: "\"Benim için anlamı bir aile\"",
        video: "https://video.e-adam.net/download/web-videos/8b4878ae-740f-488f-a122-0a0c6f0c0e97-1080.mp4",
    },
    {
        id: 2,
        name: "Okay Soyak",
        quote: "\"İçerik üretmek ve kendimi geliştirmek konusunda çok yardımcı oldu\"",
        video: "https://video.e-adam.net/download/web-videos/b9dc9355-c947-4754-84e2-368f08dd9c18-1080.mp4",
    },
    {
        id: 3,
        name: "Kübra Eroğlu",
        quote: "\"infhouse bizi çok güzel markalarla tanıştırdı\"",
        video: "https://video.e-adam.net/download/web-videos/02243e69-92a7-47b5-9e1e-9d382bb38111-1080.mp4",
    },
    {
        id: 4,
        name: "Azra Ün",
        quote: "\"Infhouse etkileşimlerimi çok artırdı. \"",
        video: "https://video.e-adam.net/download/web-videos/c60ec60d-6fee-4224-bcb3-a4f5a46a7e2d-1080.mp4",
    },
];

function FeedbackCard({ item }: { item: typeof FEEDBACKS[0] }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    return (
        <div className="w-full md:flex-none md:snap-start md:w-[calc(25%_-_12px)]">
            <div className="group relative flex flex-col bg-white rounded-[16px] md:rounded-[24px] overflow-hidden border-0 md:border md:border-[#F0F0F0] shadow-none md:shadow-[0_4px_20px_rgba(0,0,0,0.02)] h-full transition-shadow duration-300 hover:shadow-xl">
                {/* Video Area */}
                <div
                    className="relative aspect-[9/16] overflow-hidden bg-gray-50 m-0 md:m-2 rounded-t-[16px] rounded-b-none md:rounded-[20px] cursor-pointer"
                    onClick={togglePlay}
                >
                    <video
                        ref={videoRef}
                        src={item.video}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loop
                        playsInline
                    />
                    {/* Play Icon Overlay */}
                    <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? "opacity-0" : "opacity-100"}`}>
                        <div className="flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-full bg-white shadow-[0px_0px_36.1px_0px_#AFF2AD] transition-transform duration-300 group-hover:scale-110">
                            <Play className="h-4 w-4 md:h-6 md:w-6 text-[#AFF2AD] fill-[#AFF2AD] ml-1" />
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="p-3 md:px-5 md:py-6 text-center">
                    <h3 className="text-[15px] md:text-[16px] font-bold text-[#111111] mb-1 md:mb-2 tracking-tight">
                        {item.name}
                    </h3>
                    <p className="text-[13px] md:text-[15px] leading-relaxed text-[#666666] font-medium font-inter-tight px-1">
                        {item.quote}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function CreatorsFeedback() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 5);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
        }
    };

    useEffect(() => {
        checkScroll();
        const el = scrollRef.current;
        if (el) {
            el.addEventListener("scroll", checkScroll);
            return () => el.removeEventListener("scroll", checkScroll);
        }
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 300;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="bg-white py-16 overflow-hidden">
            <div className="mx-auto max-w-[1240px] px-0 md:px-4">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16 px-4">
                    <h2 className="text-[44px] md:text-[64px] font-medium tracking-tight font-instrument leading-[1.1]">
                        <span className="text-[#FF9CA6]">İçerik Üreticilerimiz</span>{" "}
                        <span className="text-[#1A1A1A]">Ne Diyor?</span>
                    </h2>
                </div>

                {/* Carousel Container */}
                <div className="relative group/carousel max-w-[1320px] mx-auto px-3 md:px-20">
                    {/* Navigation Buttons */}
                    <button
                        onClick={() => scroll("left")}
                        disabled={!canScrollLeft}
                        className="hidden md:flex absolute left-2 md:left-4 top-[50%] -translate-y-1/2 z-10 h-11 w-11 items-center justify-center rounded-[14px] bg-[#E1F1E5] text-[#1E8E3E] transition-all hover:bg-[#D4EDDA] disabled:opacity-50"
                    >
                        <ChevronLeft className="h-6 w-6" strokeWidth={2.5} />
                    </button>

                    <button
                        onClick={() => scroll("right")}
                        disabled={!canScrollRight}
                        className="hidden md:flex absolute right-2 md:right-4 top-[50%] -translate-y-1/2 z-10 h-11 w-11 items-center justify-center rounded-[14px] bg-[#E1F1E5] text-[#1E8E3E] transition-all hover:bg-[#D4EDDA] disabled:opacity-50"
                    >
                        <ChevronRight className="h-6 w-6" strokeWidth={2.5} />
                    </button>

                    {/* Scrollable Area */}
                    <div
                        ref={scrollRef}
                        className="grid grid-cols-2 gap-3 px-0 md:px-0 md:flex md:gap-4 md:overflow-x-auto md:pb-12 md:snap-x md:snap-mandatory md:scrollbar-hide md:scroll-smooth"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {FEEDBACKS.map((item) => (
                            <FeedbackCard key={item.id} item={item} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
