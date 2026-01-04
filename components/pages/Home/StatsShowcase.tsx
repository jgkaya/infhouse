"use client";


import { useRef, useState, useEffect, ReactNode } from "react";
import Link from "next/link";

// --- Mock Data ---

const CREATORS = [
    {
        image: "https://video.e-adam.net/download/web-videos/b9a0999b-b224-4b4a-bf8b-1c96c24321ea-1080.mp4",
        name: "Çağla Özer",
        rating: 4.7,
        tags: ["Moda", "Sağlıklı Yaşam"],
        desc: "Güler yüzlü, enerjisi ve doğal kamera duruşuyla dış çekimlere bambaşka bir şık katan içerik üreticisi.",
        price: "350₺'den başlayan fiyatlarla",
    },
    {
        image: "https://video.e-adam.net/download/web-videos/2db69b93-e8b7-4cb6-a3cd-dd84af4e7a4d-1080.mp4",
        name: "Edibe Kılıç",
        rating: 4.8,
        tags: ["Anne-Çocuk", "Lifestyle"],
        desc: "Anne-çocuk kategorisinde içerik üretimi konusunda tecrübeli; samimi yaklaşımı ve izleyiciyle...",
        price: "150₺'den başlayan fiyatlarla",
    },
    {
        image: "https://video.e-adam.net/download/web-videos/89ce72bb-ee19-4c0f-998a-f7b97b149210-1080.mp4",
        name: "Can Altınorak",
        rating: 4.9,
        tags: ["Güzellik", "Moda"],
        desc: "Profesyonel ve modern çekimleriyle dikkat çeken, 5 yıl üstü tecrübeli içerik üreticisi...",
        price: "150₺'den başlayan fiyatlarla",
    },
    {
        image: "https://video.e-adam.net/download/web-videos/b9dc9355-c947-4754-84e2-368f08dd9c18-1080.mp4",
        name: "Sinem Akın",
        rating: 4.9,
        tags: ["Teknoloji", "Lifestyle"],
        desc: "Yaratıcılığıyla dikkat çeken, video kancalarıyla etkileşim yaratan markaların gözde içerik üreticisi.",
        price: "750₺'den başlayan fiyatlarla",
    },
    {
        image: "https://video.e-adam.net/download/web-videos/b9a0999b-b224-4b4a-bf8b-1c96c24321ea-1080.mp4",
        name: "Çağla Özer",
        rating: 4.7,
        tags: ["Moda", "Sağlıklı Yaşam"],
        desc: "Güler yüzlü, enerjisi ve doğal kamera duruşuyla dış çekimlere bambaşka bir şık katan içerik üreticisi.",
        price: "350₺'den başlayan fiyatlarla",
    },
    {
        image: "https://video.e-adam.net/download/web-videos/2db69b93-e8b7-4cb6-a3cd-dd84af4e7a4d-1080.mp4",
        name: "Edibe Kılıç",
        rating: 4.8,
        tags: ["Anne-Çocuk", "Lifestyle"],
        desc: "Anne-çocuk kategorisinde içerik üretimi konusunda tecrübeli; samimi yaklaşımı ve izleyiciyle...",
        price: "150₺'den başlayan fiyatlarla",
    },
    {
        image: "https://video.e-adam.net/download/web-videos/72635ec4-4989-43da-92c8-0aab455f536e-1080.mp4",
        name: "Derya Karakuş",
        rating: 4.9,
        tags: ["Teknoloji", "Lifestyle"],
        desc: "Yaratıcılığıyla dikkat çeken, video kancalarıyla etkileşim yaratan markaların gözde içerik üreticisi.",
        price: "750₺'den başlayan fiyatlarla",
    },
    {
        image: "https://video.e-adam.net/download/web-videos/b9dc9355-c947-4754-84e2-368f08dd9c18-1080.mp4",
        name: "Sinem Akın",
        rating: 4.9,
        tags: ["Teknoloji", "Lifestyle"],
        desc: "Yaratıcılığıyla dikkat çeken, video kancalarıyla etkileşim yaratan markaların gözde içerik üreticisi.",
        price: "750₺'den başlayan fiyatlarla",
    },
];

const INFLUENCERS = [
    {
        image: "https://video.e-adam.net/download/web-videos/89ce72bb-ee19-4c0f-998a-f7b97b149210-1080.mp4",
        name: "Ebru Uludağ",
        rating: 4.9,
        tags: ["Güzellik", "Moda"],
        desc: "Profesyonel ve modern çekimleriyle dikkat çeken, 5 yıl üstü tecrübeli içerik üreticisi...",
        price: "150₺'den başlayan fiyatlarla",
    },
    {
        image: "https://video.e-adam.net/download/web-videos/b9dc9355-c947-4754-84e2-368f08dd9c18-1080.mp4",
        name: "Okay Soyak",
        rating: 4.9,
        tags: ["Teknoloji", "Lifestyle"],
        desc: "Yaratıcılığıyla dikkat çeken, video kancalarıyla etkileşim yaratan markaların gözde içerik üreticisi.",
        price: "750₺'den başlayan fiyatlarla",
    },
    {
        image: "https://video.e-adam.net/download/web-videos/b9a0999b-b224-4b4a-bf8b-1c96c24321ea-1080.mp4",
        name: "Çağla Özer",
        rating: 4.7,
        tags: ["Moda", "Sağlıklı Yaşam"],
        desc: "Güler yüzlü, enerjisi ve doğal kamera duruşuyla dış çekimlere bambaşka bir şık katan içerik üreticisi.",
        price: "350₺'den başlayan fiyatlarla",
    },
    {
        image: "https://video.e-adam.net/download/web-videos/2db69b93-e8b7-4cb6-a3cd-dd84af4e7a4d-1080.mp4",
        name: "Edibe Kılıç",
        rating: 4.8,
        tags: ["Anne-Çocuk", "Lifestyle"],
        desc: "Anne-çocuk kategorisinde içerik üretimi konusunda tecrübeli; samimi yaklaşımı ve izleyiciyle...",
        price: "150₺'den başlayan fiyatlarla",
    },
    {
        image: "https://video.e-adam.net/download/web-videos/89ce72bb-ee19-4c0f-998a-f7b97b149210-1080.mp4",
        name: "Ebru Uludağ",
        rating: 4.9,
        tags: ["Güzellik", "Moda"],
        desc: "Profesyonel ve modern çekimleriyle dikkat çeken, 5 yıl üstü tecrübeli içerik üreticisi...",
        price: "150₺'den başlayan fiyatlarla",
    },
    {
        image: "https://video.e-adam.net/download/web-videos/b9dc9355-c947-4754-84e2-368f08dd9c18-1080.mp4",
        name: "Okay Soyak",
        rating: 4.9,
        tags: ["Teknoloji", "Lifestyle"],
        desc: "Yaratıcılığıyla dikkat çeken, video kancalarıyla etkileşim yaratan markaların gözde içerik üreticisi.",
        price: "750₺'den başlayan fiyatlarla",
    },
    {
        image: "https://video.e-adam.net/download/web-videos/b9a0999b-b224-4b4a-bf8b-1c96c24321ea-1080.mp4",
        name: "Çağla Özer",
        rating: 4.7,
        tags: ["Moda", "Sağlıklı Yaşam"],
        desc: "Güler yüzlü, enerjisi ve doğal kamera duruşuyla dış çekimlere bambaşka bir şık katan içerik üreticisi.",
        price: "350₺'den başlayan fiyatlarla",
    },
    {
        image: "https://video.e-adam.net/download/web-videos/2db69b93-e8b7-4cb6-a3cd-dd84af4e7a4d-1080.mp4",
        name: "Edibe Kılıç",
        rating: 4.8,
        tags: ["Anne-Çocuk", "Lifestyle"],
        desc: "Anne-çocuk kategorisinde içerik üretimi konusunda tecrübeli; samimi yaklaşımı ve izleyiciyle...",
        price: "150₺'den başlayan fiyatlarla",
    },
];

const VIDEO_1 = "https://video.e-adam.net/download/web-videos/236e80f3-1946-4801-9ea3-1873fdbf4218-1080.mp4";
const VIDEO_2 = "https://video.e-adam.net/download/web-videos/8103b25f-ab40-4149-bfa3-ac5371611f79-1080.mp4";

const VIDEO_STORIES = [
    {
        videoSrc: "https://video.e-adam.net/download/web-videos/cfa91dbe-481a-4fbf-8874-2aee01ae58f3-1080.mp4",
        userAvatar: "https://cdn.e-adam.net/infhouse/%C5%9Fulegiyim.png",
        userName: "Meryem Timurtaş",
        userTitle: "Şule Giyim",
        brandLogo: "https://cdn.simpleicons.org/nike/white",
        tag: "Giyim",
    },
    {
        videoSrc: "https://video.e-adam.net/download/web-videos/a4884561-2ac1-4287-be86-e71938a0c842-1080.mp4",
        userAvatar: "https://cdn.e-adam.net/infhouse/iyzads.png",
        userName: "Büşra Cantaş",
        userTitle: "iyzads",
        brandLogo: "https://cdn.simpleicons.org/adidas/white",
        tag: "Teknoloji",
    },
    {
        videoSrc: "https://video.e-adam.net/download/web-videos/19962a47-eaf8-438e-97f6-75e8c66a754f-1080.mp4",
        userAvatar: "https://cdn.e-adam.net/infhouse/goodyear.png",
        userName: "Emre Sözen",
        userTitle: "Goodyear",
        brandLogo: "https://cdn.simpleicons.org/puma/white",
        tag: "Oto Aksesuar",
    },
    {
        videoSrc: "https://video.e-adam.net/download/web-videos/683337a4-9aa4-4095-9014-f832bdcf7306-1080.mp4",
        userAvatar: "https://cdn.e-adam.net/infhouse/bloved.png",
        userName: "Bahar Balkaya",
        userTitle: "B-Love",
        brandLogo: "https://cdn.simpleicons.org/reebok/white",
        tag: "Güzellik ve Cilt Bakım",
    },
];

// --- Sub Components ---

function SectionHeader({
    pinkText,
    blackText,
    description,
    href,
}: {
    pinkText: string;
    blackText: string | ReactNode;
    description: string;
    href?: string;
}) {
    const content = (
        <>
            <h2 className="text-[42px] leading-[1.1] font-medium text-black tracking-tight font-['Instrument_Sans',sans-serif]">
                <span className="text-[#FF707F] font-semibold">{pinkText}</span> {blackText}
            </h2>
            <p className="mt-4 text-[16px] text-gray-500 max-w-3xl leading-relaxed">
                {description}
            </p>
        </>
    );

    return (
        <div className="mb-10">
            {href ? (
                <Link href={href} className="group block">
                    <div className="inline-block w-full">
                        {content}

                    </div>
                </Link>
            ) : content}
        </div>
    );
}

function PersonCard({ data }: { data: typeof CREATORS[0] }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);

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
        <div className="group flex flex-col w-full overflow-hidden rounded-[16px] md:rounded-[24px] bg-white ring-1 ring-black/5 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100 cursor-pointer" onClick={data.image.endsWith('.mp4') ? togglePlay : undefined}>
                {data.image.endsWith('.mp4') ? (
                    <>
                        <video
                            ref={videoRef}
                            src={data.image}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                        {/* Play/Pause Button Overlay for PersonCard */}
                        <div className={`absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
                            <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/30 backdrop-blur-md transition-transform hover:scale-110">
                                {isPlaying ? (
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white" className="drop-shadow-md md:w-5 md:h-5">
                                        <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
                                    </svg>
                                ) : (
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white" className="ml-1 drop-shadow-md md:w-5 md:h-5">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                )}
                            </div>
                        </div>
                    </>
                ) : (
                    <img
                        src={data.image}
                        alt={data.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                )}
            </div>
            <div className="flex flex-1 flex-col p-3 md:p-5">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                    <h3 className="text-[15px] md:text-[18px] font-bold text-black leading-tight">{data.name}</h3>
                    <div className="flex items-center gap-1 text-[12px] md:text-[13px] font-semibold text-black">
                        <span className="text-yellow-400">★</span> {data.rating}
                    </div>
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5 md:gap-2">
                    {data.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-[9px] md:text-[10px] font-medium text-gray-500"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <p className="mt-2 md:mt-3 text-[11px] md:text-[13px] leading-relaxed text-gray-500 line-clamp-3 md:line-clamp-3">
                    {data.desc}
                </p>
                <div className="mt-auto pt-3 md:pt-5">
                    <div className="rounded-full bg-[#232323] py-2 md:py-3 text-center text-[11px] md:text-[13px] font-medium text-white transition-colors hover:bg-black px-2">
                        {data.price}
                    </div>
                </div>
            </div>
        </div>
    );
}

function InfoCards() {
    return (
        <div className="my-16 grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-[24px] bg-[#fdfdfd] p-6 text-left ring-1 ring-black/5">
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-green-100 text-green-600">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                </div>
                <p className="text-[15px] leading-relaxed text-gray-600">
                    Zorlu bir inceleme sürecinden geçiyoruz, sadece en iyilerini seçiyoruz.
                </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-[24px] bg-[#fdfdfd] p-6 text-left ring-1 ring-black/5">
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-yellow-100 text-yellow-600">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                        <path d="M4 22h16" />
                        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                    </svg>
                </div>
                <p className="text-[15px] leading-relaxed text-gray-600">
                    18 - 60+ yaş aralığındaki en yetenekli içerik üreticileri.
                </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-[24px] bg-[#fdfdfd] p-6 text-left ring-1 ring-black/5">
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-pink-100 text-pink-600">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                </div>
                <p className="text-[15px] leading-relaxed text-gray-600">
                    Her marka yapısına uygun, sağlık, anne-çocuk, teknoloji, yiyecek gibi onlarca kategoriye uygun içerik üreticileri.
                </p>
            </div>
        </div>
    );
}

function VideoStoryCard({ data }: { data: typeof VIDEO_STORIES[0] }) {
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
        <div className="group flex flex-col w-full overflow-hidden rounded-[16px] md:rounded-[24px] bg-white ring-1 ring-black/5 shadow-sm transition-all duration-300 hover:shadow-lg">
            {/* Header */}
            <div className="flex items-center justify-between p-3 md:p-5 pb-3 md:pb-4">
                <div className="min-w-0 pr-2">
                    <div className="text-[9px] md:text-[10px] text-gray-500 font-medium mb-0.5 truncate">{data.userTitle}</div>
                    <div className="text-[13px] md:text-[14px] font-bold text-black leading-tight truncate">{data.userName}</div>
                    <div className="flex text-yellow-400 text-[9px] md:text-[10px] mt-1 gap-0.5">
                        {'★'.repeat(5).split('').map((c, i) => <span key={i}>{c}</span>)}
                    </div>
                </div>
                <img
                    src={data.userAvatar}
                    alt={data.userName}
                    className="h-8 w-8 md:h-10 md:w-10 flex-none rounded-full object-cover ring-1 ring-black/5"
                />
            </div>

            {/* Video Section */}
            <div className="relative aspect-[9/14] w-full bg-black cursor-pointer" onClick={togglePlay}>
                <video
                    ref={videoRef}
                    src={data.videoSrc}
                    className="h-full w-full object-cover"
                    muted={false}
                    loop
                    playsInline
                />

                {/* Tag */}
                <div className="absolute top-3 right-3 md:top-4 md:right-4 z-10 pointer-events-none">
                    <span className="rounded-full bg-white/90 px-2.5 py-1 md:px-3 md:py-1.5 text-[9px] md:text-[10px] font-semibold text-black backdrop-blur-md shadow-sm">
                        {data.tag}
                    </span>
                </div>

                {/* Play/Pause Button Overlay */}
                <div className={`absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
                    <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-white transition-transform hover:scale-110 shadow-[0px_0px_36.1px_0px_#AFF2AD]">
                        {isPlaying ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="#2E7D32" className="drop-shadow-sm md:w-6 md:h-6">
                                <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
                            </svg>
                        ) : (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="#2E7D32" className="ml-1 drop-shadow-sm md:w-6 md:h-6">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function CarouselRow({ children, scrollStep = 320 }: { children: ReactNode, scrollStep?: number }) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -scrollStep, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: scrollStep, behavior: "smooth" });
        }
    };

    return (
        <div className="relative group">
            {/* Left Button (Desktop) */}
            <button
                onClick={scrollLeft}
                className="absolute -left-5 top-1/2 z-10 -translate-x-full -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#E8F5E9] text-[#2E7D32] transition hover:bg-[#C8E6C9] max-md:hidden"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            </button>

            {/* Right Button (Desktop) */}
            <button
                onClick={scrollRight}
                className="absolute -right-5 top-1/2 z-10 translate-x-full -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#E8F5E9] text-[#2E7D32] transition hover:bg-[#C8E6C9] max-md:hidden"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                </svg>
            </button>

            {/* Carousel */}
            <div
                ref={scrollContainerRef}
                className="flex gap-3 md:gap-6 overflow-x-auto pb-4 md:pb-8 scrollbar-hide snap-x"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {children}
            </div>

            {/* Mobile Navigation (Bottom) */}
            <div className="flex justify-center gap-2 mt-4 md:hidden">
                <button
                    onClick={scrollLeft}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#2E7D32]"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
                <button
                    onClick={scrollRight}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#2E7D32]"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

// --- Main Component ---

export default function StatsShowcase() {
    return (
        <section className="bg-[#fbfaf7] py-24">
            <div className="mx-auto max-w-[1180px] px-4">

                {/* SECTION 1: CREATORS */}
                <SectionHeader
                    pinkText="+5.000"
                    blackText="İçerik Üreticisi"
                    href="/icerik-ureticileri"
                    description="Sağlık, güzellik, moda, yaşam ve daha birçok kategoride; markanızı en iyi şekilde temsil edecek içerik üreticileriyle buluşturuyoruz. Güvenilir seçim modelimiz sayesinde yalnızca özenle seçilmiş ve yüksek performans gösteren içerik üreticileri ile çalışırsınız."
                />

                <CarouselRow>
                    {CREATORS.map((creator, i) => (
                        <div key={i} className="w-[calc(50%-6px)] md:w-[280px] flex-none snap-start lg:w-[calc(25%_-_18px)]">
                            <PersonCard data={creator} />
                        </div>
                    ))}
                </CarouselRow>

                {/* SECTION 2: INFO CARDS */}
                <InfoCards />

                {/* SECTION 3: INFLUENCERS */}
                <div className="mt-32">
                    <SectionHeader
                        pinkText="100'lerce"
                        blackText="Influencer İş Birliği"
                        href="/markalar"
                        description="Sağlık, güzellik, moda, yaşam ve daha birçok kategoride; markanızı en iyi şekilde temsil edecek içerik üreticileriyle buluşturuyoruz. Güvenilir seçim modelimiz sayesinde yalnızca özenle seçilmiş ve yüksek performans gösteren içerik üreticileri ile çalışırsınız."
                    />
                    <CarouselRow>
                        {INFLUENCERS.map((inf, i) => (
                            <div key={i} className="w-[calc(50%-6px)] md:w-[280px] flex-none snap-start lg:w-[calc(25%_-_18px)]">
                                <PersonCard data={inf} />
                            </div>
                        ))}
                    </CarouselRow>
                </div>

                {/* SECTION 4: VIDEO STORIES */}
                <div className="relative mt-32">
                    <SectionHeader
                        pinkText="15.000'den"
                        blackText={
                            <>
                                Fazla
                                <br />
                                İçerik Üretimi Ve Teslimi
                            </>
                        }
                        href="/calismalarimiz"
                        description="Bugüne kadar farklı kategorilerde 15.000+ içerik ürettik ve markalara teslim ettik. Bugün ise aylık 1.000'in üzerinde içerik üretimiyle markalar için ölçeklenebilir ve yüksek kaliteli UGC çözümleri sunuyoruz."
                    />

                    {/* Mobile Grid Layout */}
                    <div className="grid grid-cols-2 gap-3 md:hidden">
                        {VIDEO_STORIES.map((story, i) => (
                            <div key={i} className="w-full">
                                <VideoStoryCard data={story} />
                            </div>
                        ))}
                    </div>

                    {/* Desktop Carousel Layout */}
                    <div className="hidden md:block">
                        <CarouselRow>
                            {VIDEO_STORIES.map((story, i) => (
                                <div key={i} className="w-[calc(50%-6px)] md:w-[280px] flex-none snap-start lg:w-[calc(25%_-_18px)]">
                                    <VideoStoryCard data={story} />
                                </div>
                            ))}
                        </CarouselRow>
                    </div>
                </div>

            </div>
        </section>
    );
}
