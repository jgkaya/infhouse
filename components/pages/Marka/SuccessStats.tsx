"use client";

import React, { useRef, useState, useEffect } from "react";
import { useInView, motion, AnimatePresence, animate } from "framer-motion";

// Counter Component to animate numbers
const Counter = ({ from = 0, to, duration = 2, prefix = "", suffix = "" }: { from?: number, to: number, duration?: number, prefix?: string, suffix?: string }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(nodeRef, { once: true, amount: 0.5 }); // Trigger once when visible

    useEffect(() => {
        if (!isInView) return;

        const node = nodeRef.current;
        if (!node) return;

        const controls = animate(from, to, {
            duration: duration,
            onUpdate(value) {
                node.textContent = `${prefix}${Math.round(value)}${suffix}`;
            }
        });

        return () => controls.stop();
    }, [from, to, duration, prefix, suffix, isInView]);

    return <span ref={nodeRef}>{prefix}{from}{suffix}</span>;
};

// Helper component for the confetti particles
const ConfettiParticles = () => {
    const particles = Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        angle: (i * 30 * Math.PI) / 180,
        color: ["#FFDADE", "#FF627B", "#AFF2AD", "#FFD700", "#87CEEB"][
            Math.floor(Math.random() * 5)
        ],
    }));

    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    initial={{ x: 0, y: 0, scale: 0.5, opacity: 1 }}
                    animate={{
                        x: Math.cos(p.angle) * 80,
                        y: Math.sin(p.angle) * 80,
                        scale: 0,
                        opacity: 0,
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute w-3 h-3 rounded-full"
                    style={{ backgroundColor: p.color }}
                />
            ))}
        </div>
    );
};

// Component that handles:
// 1. Static image by default
// 2. Plays Sequence on View (Play -> Stop -> Play -> Stop)
// 3. Plays GIF on Hover
// 4. Explodes on click
const InteractiveIcon = ({
    staticSrc,
    gifSrc,
    alt,
    className,
    shouldPlay // Trigger from parent scroll
}: {
    staticSrc: string,
    gifSrc: string,
    alt: string,
    className?: string,
    shouldPlay?: boolean
}) => {
    const [isGif, setIsGif] = useState(false);
    const [isExploding, setIsExploding] = useState(false);
    const [key, setKey] = useState(0);

    // Sequence Ref to prevent double triggering or cleanup
    const sequenceTimeoutRef = useRef<NodeJS.Timeout[]>([]);

    const clearSequence = () => {
        sequenceTimeoutRef.current.forEach(clearTimeout);
        sequenceTimeoutRef.current = [];
    };

    // Handle View Trigger Sequence
    useEffect(() => {
        if (shouldPlay) {
            clearSequence(); // Clear any existing

            // --- First Blink ---
            setIsGif(true);
            setKey(prev => prev + 1);

            // Stop after 1.5s
            const t1 = setTimeout(() => {
                setIsGif(false);
            }, 1500);

            // --- Second Blink (after 0.5s pause) ---
            const t2 = setTimeout(() => {
                setIsGif(true);
                setKey(prev => prev + 1);
            }, 2000);

            // Stop after 1.5s (at 3.5s total)
            const t3 = setTimeout(() => {
                setIsGif(false);
            }, 3500);

            // --- Third Blink (after 3s pause -> at 6.5s total) ---
            const t4 = setTimeout(() => {
                setIsGif(true);
                setKey(prev => prev + 1);
            }, 6500);

            // Stop after 1.5s (at 8s total)
            const t5 = setTimeout(() => {
                setIsGif(false);
            }, 8000);

            sequenceTimeoutRef.current.push(t1, t2, t3, t4, t5);
        } else {
            setIsGif(false);
            clearSequence();
        }

        return () => clearSequence();
    }, [shouldPlay]);

    const handleMouseEnter = () => {
        // Hover overrides sequence (or ensures play)
        setIsGif(true);
        // setKey(prev => prev + 1); // Optional: Restart on hover? Maybe too jumpy.
    };

    const handleMouseLeave = () => {
        // If query is running, do we stop? 
        // Let's say hover is temporary. On leave, we revert to whatever the state implies?
        // Simpler: On leave, stop to be responsive.
        setIsGif(false);
    };

    const handleClick = () => {
        if (isExploding) return;

        setIsExploding(true);
        setIsGif(true);
        setKey(prev => prev + 1);

        setTimeout(() => {
            setIsExploding(false);
        }, 500);
    };

    return (
        <div
            className="relative w-full h-full cursor-pointer flex items-center justify-center"
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <AnimatePresence>
                {isExploding && <ConfettiParticles />}
            </AnimatePresence>

            <div className="relative w-full h-full">
                <AnimatePresence mode="popLayout" initial={false}>
                    {isGif ? (
                        <motion.div
                            key="gif"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={`${gifSrc}?t=${key}`}
                                alt={alt}
                                className={className}
                            />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="static"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={staticSrc}
                                alt={alt}
                                className={className}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

const SuccessStats = () => {
    // Ref for the CTA section to detect visibility
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.5 });
    const [shouldPlay, setShouldPlay] = useState(false);

    // Update state based on visibility
    useEffect(() => {
        if (isInView) {
            setShouldPlay(true);
        } else {
            setShouldPlay(false);
        }
    }, [isInView]);

    const leftGifUrl = "https://cdn.e-adam.net/infhouse/Markalar_siziarayal%C4%B1m_be%C4%9Feni_in.gif";
    const rightGifUrl = "https://cdn.e-adam.net/infhouse/Markalar_siziarayal%C4%B1m_kalp_in.gif";

    // Assuming we successfully moved the files to public/assets
    // Adjust logic if user cancels copy: fallback to GIF but maybe with opacity hack or just full GIF.
    // Ideally we have the static assets.
    const leftStaticUrl = "https://cdn.e-adam.net/infhouse/like.png";
    const rightStaticUrl = "https://cdn.e-adam.net/infhouse/kalp.png";

    return (
        <section className="w-full bg-[#fafafb] py-12 md:py-16 flex flex-col items-center overflow-hidden">
            {/* Title */}
            <h2
                className="mb-12 md:mb-16 text-center text-transparent bg-clip-text bg-gradient-to-b from-[#FFDADE] to-[#FF627B] text-[40px] leading-[48px] md:text-[60px] md:leading-[70px]"
                style={{
                    fontFamily: '"Instrument Sans", sans-serif',
                    fontWeight: 500,
                    letterSpacing: '-0.05em', // -5%
                    textAlign: 'center',
                    verticalAlign: 'middle'
                }}
            >
                Başarılarımız
            </h2>

            {/* Stats Rows */}
            <div className="w-full flex flex-col font-sans">
                {/* Row 1: +5000 */}
                <div className="w-full py-8 md:py-12 border-b border-gray-50/50">
                    <div className="max-w-[1200px] mx-auto px-4 md:px-6 grid grid-cols-[4fr_6fr] gap-4 md:gap-24 items-center">
                        <div className="text-center md:text-left">
                            <span
                                className="text-[50px] md:text-[110px] text-[#1a1a1a] block"
                                style={{
                                    fontFamily: '"Instrument Sans", sans-serif',
                                    fontWeight: 500,
                                    lineHeight: '137.63px',
                                    letterSpacing: '-0.05em'
                                }}
                            >
                                <Counter from={0} to={5000} prefix="+" duration={2} />
                            </span>
                        </div>
                        <div className="text-center md:text-left">
                            <p
                                className="text-[#9E9E9E]"
                                style={{
                                    fontFamily: '"Inter Tight", sans-serif',
                                    fontWeight: 400,
                                    fontSize: '10px',
                                    lineHeight: '110%',
                                    letterSpacing: '-0.02em'
                                }}
                            >
                                <span className="md:text-[20px] md:leading-[100%] block">
                                    Ürettiğimiz videolar 200 milyondan fazla izlendi. Gerçek
                                    deneyimlerle oluşturduğumuz içerikler, hedef kitleyle güçlü bir
                                    bağ kurdu.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Row 2: +2000 M (Green Background) */}
                <div className="w-full py-8 md:py-12 bg-[#AFF2AD40]">
                    <div className="max-w-[1200px] mx-auto px-4 md:px-6 grid grid-cols-[4fr_6fr] gap-4 md:gap-24 items-center">
                        <div className="text-center md:text-left">
                            <span
                                className="text-[40px] md:text-[90px] text-[#1a1a1a] block whitespace-nowrap"
                                style={{
                                    fontFamily: '"Instrument Sans", sans-serif',
                                    fontWeight: 500,
                                    lineHeight: '137.63px',
                                    letterSpacing: '-0.05em'
                                }}
                            >
                                <Counter from={0} to={2000} prefix="+" suffix=" M" duration={2} />
                            </span>
                        </div>
                        <div className="text-center md:text-left">
                            <p
                                className="text-[#9E9E9E]"
                                style={{
                                    fontFamily: '"Inter Tight", sans-serif',
                                    fontWeight: 400,
                                    fontSize: '10px',
                                    lineHeight: '110%',
                                    letterSpacing: '-0.02em'
                                }}
                            >
                                <span className="md:text-[20px] md:leading-[100%] block">
                                    Ürettiğimiz videolar 200 milyondan fazla izlendi. Gerçek
                                    deneyimlerle oluşturduğumuz içerikler, hedef kitleyle güçlü bir
                                    bağ kurdu.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Row 3: +500 */}
                <div className="w-full py-8 md:py-12">
                    <div className="max-w-[1200px] mx-auto px-4 md:px-6 grid grid-cols-[4fr_6fr] gap-4 md:gap-24 items-center">
                        <div className="text-center md:text-left">
                            <span
                                className="text-[50px] md:text-[110px] text-[#1a1a1a] block"
                                style={{
                                    fontFamily: '"Instrument Sans", sans-serif',
                                    fontWeight: 500,
                                    lineHeight: '137.63px',
                                    letterSpacing: '-0.05em'
                                }}
                            >
                                <Counter from={0} to={500} prefix="+" duration={2} />
                            </span>
                        </div>
                        <div className="text-center md:text-left">
                            <p
                                className="text-[#9E9E9E]"
                                style={{
                                    fontFamily: '"Inter Tight", sans-serif',
                                    fontWeight: 400,
                                    fontSize: '10px',
                                    lineHeight: '110%',
                                    letterSpacing: '-0.02em'
                                }}
                            >
                                <span className="md:text-[20px] md:leading-[100%] block">
                                    500 farklı markaya UGC odaklı reklam kampanyası yönettik.
                                    Ürettiğimiz içerikler sadece görünürlük değil, ölçülebilir
                                    başarılar getirdi.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div
                ref={containerRef}
                className="mt-16 w-full max-w-[1200px] px-6 relative pb-12 md:pb-0"
            >
                <div className="flex flex-col items-center justify-center text-center space-y-8 relative z-10">
                    <h3 className="text-[18px] md:text-4xl font-medium text-[#1a1a1a] leading-snug tracking-tight max-w-[330px] md:max-w-4xl mx-auto">
                        Türkiye’nin en iyi içerik üreticileri ile en kaliteli içeriklere
                        sahip olmak istiyorsanız,{" "}
                        <span className="text-[#ff9cae] font-bold">
                            Infhouse ile tanışın.
                        </span>
                    </h3>

                    <button className="bg-[#1a1a1a] text-white px-8 py-2.5 rounded-full font-bold hover:bg-black transition-transform active:scale-95 text-[11px] shadow-lg">
                        Sizi Arayalım
                    </button>
                </div>

                {/* Left Decoration - Visible on Mobile */}
                <div className="flex absolute top-1/2 -translate-y-1/2 left-0 md:translate-x-0 lg:left-8 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 items-center justify-center">
                    <InteractiveIcon
                        staticSrc={leftStaticUrl}
                        gifSrc={leftGifUrl}
                        alt="Beğeni"
                        className="w-full h-full object-contain"
                        shouldPlay={shouldPlay}
                    />
                </div>

                {/* Right Decoration - Visible on Mobile */}
                <div className="flex absolute top-1/2 -translate-y-1/2 right-0 md:translate-x-0 lg:right-8 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 items-center justify-center">
                    <InteractiveIcon
                        staticSrc={rightStaticUrl}
                        gifSrc={rightGifUrl}
                        alt="Kalp"
                        className="w-full h-full object-contain"
                        shouldPlay={shouldPlay}
                    />
                </div>
            </div>
        </section>
    );
};

export default SuccessStats;
