"use client";

import { useRef, useState } from "react";
import { Play, Crown, ChevronRight } from "lucide-react";
import Link from "next/link";

// --- Mock Data ---

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
        <div className="group flex flex-col w-full h-full overflow-hidden rounded-[24px] bg-white ring-1 ring-black/5 shadow-sm transition-all duration-300 hover:shadow-lg">
            {/* Header */}
            <div className="flex items-center justify-between p-4 pb-3">
                <div>
                    <div className="text-[9px] text-gray-500 font-medium mb-0.5">{data.userTitle}</div>
                    <div className="text-[13px] font-bold text-black leading-tight">{data.userName}</div>
                    <div className="flex text-yellow-400 text-[9px] mt-1 gap-0.5">
                        {'★'.repeat(5).split('').map((c, i) => <span key={i}>{c}</span>)}
                    </div>
                </div>
                <img
                    src={data.userAvatar}
                    alt={data.userName}
                    className="h-8 w-8 rounded-full object-cover ring-1 ring-black/5"
                />
            </div>

            {/* Video Section */}
            <div className="relative flex-1 bg-black cursor-pointer" onClick={togglePlay}>
                <video
                    ref={videoRef}
                    src={data.videoSrc}
                    className="absolute inset-0 h-full w-full object-cover"
                    muted={false}
                    loop
                    playsInline
                />

                {/* Tag */}
                <div className="absolute top-3 right-3 z-10 pointer-events-none">
                    <span className="rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-semibold text-black backdrop-blur-md shadow-sm">
                        {data.tag}
                    </span>
                </div>

                {/* Play/Pause Button Overlay */}
                <div className={`absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-transform hover:scale-110 shadow-[0px_0px_36.1px_0px_#AFF2AD]">
                        {isPlaying ? (
                            <Play className="h-5 w-5 text-[#AFF2AD] fill-[#AFF2AD] ml-1" />
                        ) : (
                            <Play className="h-5 w-5 text-[#AFF2AD] fill-[#AFF2AD] ml-1" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function InfoCard() {
    return (
        <div className="flex flex-col h-full rounded-[24px] bg-white p-5 shadow-sm ring-1 ring-black/5">
            {/* Item 1 */}
            <div className="mb-5">
                <div className="mb-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-green-100 text-green-600">
                    <Crown size={16} fill="currentColor" />
                </div>
                <p className="text-[12px] leading-relaxed text-gray-500 font-medium">
                    Zorlu bir inceleme sürecinden geçiyoruz, sadece en iyilerini seçiyoruz
                </p>
                <div className="my-3 h-px w-full bg-gray-100" />
            </div>

            {/* Item 2 */}
            <div className="mb-5">
                <div className="mb-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-100 text-yellow-500">
                    <Crown size={16} fill="currentColor" />
                </div>
                <p className="text-[12px] leading-relaxed text-gray-500 font-medium">
                    18 - 60+ yaş aralığındaki en yetenekli yaratıcılar
                </p>
                <div className="my-3 h-px w-full bg-gray-100" />
            </div>

            {/* Item 3 */}
            <div className="mb-auto">
                <div className="mb-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-pink-100 text-[#FF707F]">
                    <Crown size={16} fill="currentColor" />
                </div>
                <p className="text-[12px] leading-relaxed text-gray-500 font-medium">
                    Çeşitli nişler. Sağlık, çocuklar, fitness, evcil hayvanlar, yiyecek ve daha fazlası
                </p>
            </div>

            {/* CTA Button */}
            <div className="mt-5">
                <Link href="/icerik-ureticileri" className="flex w-full items-center justify-between rounded-full bg-[#1A1A1A] px-5 py-3 text-[12px] font-medium text-white transition-colors hover:bg-black">
                    Tümünü Gör
                    <ChevronRight size={14} />
                </Link>
            </div>
        </div>
    );
}

// --- Main Component ---

export default function BrandsVideos() {
    return (
        <section className="bg-[#fbfaf7] py-20 px-4 md:px-8">
            <div className="mx-auto max-w-[1320px]">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16 px-4">
                    <h2 className="text-[44px] md:text-[64px] font-medium tracking-tight font-instrument leading-[1.1]">
                        <span className="text-[#1A1A1A]">Örnek</span>{" "}
                        <span className="text-[#FF9CA6]">Videolarımız</span>
                    </h2>
                </div>

                {/* Grid Content */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
                    {VIDEO_STORIES.map((story, index) => (
                        <div key={index} className="aspect-[9/16] w-full">
                            <VideoStoryCard data={story} />
                        </div>
                    ))}
                    <div className="aspect-[9/16] w-full">
                        <InfoCard />
                    </div>
                </div>
            </div>
        </section>
    );
}
