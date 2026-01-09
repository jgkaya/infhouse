"use client";

import { useRef, useState, ReactNode } from "react";

// Mock Data based on the image
const PROJECTS = [
    {
        id: 1,
        title: "A Roasting Lab",
        subtitle: "Mama Yardımı",
        videoSrc: "https://video.e-adam.net/download/web-videos/6006fcb9-18c3-4611-bb5a-fd38904c2daa-1080.mp4", // Placeholder
    },
    {
        id: 2,
        title: "CFORB",
        subtitle: "Anneler Günü",
        videoSrc: "https://video.e-adam.net/download/web-videos/59ce7549-ab04-4aa6-be22-85d92a09a442-1080.mp4", // Placeholder
    },
    {
        id: 3,
        title: "Avni Erel",
        subtitle: "Tadım Challange",
        videoSrc: "https://video.e-adam.net/download/web-videos/439748d9-f8d4-4b8a-8610-d2dbb7fbd586-1080.mp4", // Placeholder
    },
    {
        id: 4,
        title: "Bueno Shoes",
        subtitle: "Babalar Günü",
        videoSrc: "https://video.e-adam.net/download/web-videos/58dce20d-775e-4121-8db8-a073b89e5cc7-1080.mp4", // Placeholder
    },
    {
        id: 5,
        title: "Chipsm",
        subtitle: "Tadım Challange",
        videoSrc: "https://video.e-adam.net/download/web-videos/19962a47-eaf8-438e-97f6-75e8c66a754f-1080.mp4", // Placeholder
    },
    {
        id: 6,
        title: "A Roasting Lab",
        subtitle: "Mama Yardımı",
        videoSrc: "https://video.e-adam.net/download/web-videos/683337a4-9aa4-4095-9014-f832bdcf7306-1080.mp4", // Placeholder
    },
    {
        id: 7,
        title: "Avni Erel",
        subtitle: "Tadım Challange",
        videoSrc: "https://video.e-adam.net/download/web-videos/cfa91dbe-481a-4fbf-8874-2aee01ae58f3-1080.mp4", // Placeholder
    },
    {
        id: 8,
        title: "Bueno Shoes",
        subtitle: "Babalar Günü",
        videoSrc: "https://video.e-adam.net/download/web-videos/a4884561-2ac1-4287-be86-e71938a0c842-1080.mp4", // Placeholder
    },
    {
        id: 9,
        title: "Chipsm",
        subtitle: "Tadım Challange",
        videoSrc: "https://video.e-adam.net/download/web-videos/19962a47-eaf8-438e-97f6-75e8c66a754f-1080.mp4", // Placeholder
    }
];

function CarouselRow({ children }: { children: ReactNode }) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const isDown = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const onMouseDown = (e: React.MouseEvent) => {
        if (!scrollContainerRef.current) return;
        isDown.current = true;
        scrollContainerRef.current.classList.add('cursor-grabbing');
        scrollContainerRef.current.classList.remove('cursor-grab');
        startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
        scrollLeft.current = scrollContainerRef.current.scrollLeft;
    };

    const onMouseLeave = () => {
        if (!scrollContainerRef.current) return;
        isDown.current = false;
        scrollContainerRef.current.classList.remove('cursor-grabbing');
        scrollContainerRef.current.classList.add('cursor-grab');
    };

    const onMouseUp = () => {
        if (!scrollContainerRef.current) return;
        isDown.current = false;
        scrollContainerRef.current.classList.remove('cursor-grabbing');
        scrollContainerRef.current.classList.add('cursor-grab');
    };

    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDown.current || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX.current) * 2; // scroll-fast
        scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
    };

    return (
        <div className="relative group px-0 md:px-0 select-none">
            <div
                ref={scrollContainerRef}
                className="flex gap-3 md:gap-6 overflow-x-auto pb-8 scrollbar-hide cursor-grab pt-2 snap-x snap-mandatory px-[calc(50%-140px)] md:px-0"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                onMouseDown={onMouseDown}
                onMouseLeave={onMouseLeave}
                onMouseUp={onMouseUp}
                onMouseMove={onMouseMove}
            >
                {children}
            </div>
        </div>
    )
}

function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent drag interference if possible
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
        <div className="relative flex-none w-[280px] md:w-[320px] group snap-center">
            {/* Card Container */}
            <div className="bg-white p-4 rounded-[24px] shadow-sm ring-1 ring-black/5 h-full flex flex-col gap-4">

                {/* Header Text */}
                <div>
                    <h3 className="text-[20px] font-bold text-black leading-tight">
                        {project.title}
                    </h3>
                    <p className="text-[14px] text-gray-500 mt-1">
                        {project.subtitle}
                    </p>
                </div>

                {/* Video Area */}
                <div
                    className="relative aspect-[9/16] w-full rounded-[16px] overflow-hidden bg-gray-100 cursor-pointer"
                    onClick={togglePlay}
                >
                    <video
                        ref={videoRef}
                        src={project.videoSrc}
                        className="h-full w-full object-cover"
                        muted={false}
                        loop
                        playsInline
                    />

                    {/* Play Button */}
                    <div className={`absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-300 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white transition-transform group-hover:scale-110 shadow-lg">
                            {isPlaying ? (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="#2E7D32" className="drop-shadow-sm md:w-6 md:h-6">
                                    <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
                                </svg>
                            ) : (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="#2E7D32" className="ml-1 md:w-6 md:h-6">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export const WorkProjects = () => {
    return (
        <section className="w-full bg-[#fbfaf7] pt-4 pb-10 md:pt-8 md:pb-16 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">

                {/* Header */}
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-[34px] md:text-[56px] font-bold tracking-tight inline-block bg-gradient-to-r from-[#FFC0CB] to-[#FF6B6B] bg-clip-text text-transparent opacity-80" style={{ backgroundImage: 'linear-gradient(90deg, #FFD1D6 0%, #FF5A5F 100%)' }}>
                        Projelerimiz
                    </h2>
                </div>

                {/* Carousel */}
                <CarouselRow>
                    {PROJECTS.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </CarouselRow>

            </div>
        </section>
    );
};
