"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
    {
        id: 1,
        name: "Metehan Aydın",
        role: "İçerik Üreticisi",
        content: "Infhouse ile çalışmak bana ayrı bir heyecan veriyor. Ekibin samimiyeti ve gerçekçiliği bana güven veriyor. Harika bir ekiple beraber olduğuma inanıyorum. 😍",
        avatar: "https://cdn.e-adam.net/infhouse/metehan.png",
    },
    {
        id: 2,
        name: "Okay Soyak",
        role: "İçerik Üreticisi",
        content: "Yeni olsam da beni hep ekibin, takımın parçası gibi hissettiren ve markalarla iletişim kurmamı sağlayan her bir çalışanınıza teşekkür ediyorum. Yeni oluşumunuz Infhouse sayesinde de bu deneyimlere yeni, güzel markalar ve günler geleceğini umuyorum. Teşekkürler ✨",
        avatar: "https://cdn.e-adam.net/InfHou  se/okay.png",
    },
    {
        id: 3,
        name: "Derya Karakuş Süman",
        role: "İçerik Üreticisi",
        content: "En en en sevdiğim bir ekip. Yaptığım her iş işte çok memnunum. Ekipteki kızların iletişimi, enerjisi, anlayışı her şeyine bayılıyorum. Sizin sayenizde etkileşimlerim o kadar arttı ki. Her şey için teşekkür ediyorum. Umarım her zaman bu şekilde devam eder, sizi çok seviyorum varısınızzzzz!",
        avatar: "https://cdn.e-adam.net/infhouse/derya.png",
    },
];

export default function CreatorsTestimonials() {
    const [centerIndex, setCenterIndex] = useState(1);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const next = () => {
        setCenterIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const prev = () => {
        setCenterIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    return (
        <section className="bg-[#fbfaf7] py-8 md:py-24 px-4 md:px-12 overflow-hidden relative">
            <div className="max-w-[1400px] mx-auto text-center mb-4 md:mb-24 px-4">
                <h2 className="text-[20px] md:text-[72px] font-bold tracking-tight leading-[1.2] font-instrument">
                    <span className="bg-gradient-to-r from-[#FFDADE] to-[#FF6C79] bg-clip-text text-transparent">İçerik Üreticilerimizin</span> Yorumları
                </h2>
            </div>

            <div className="max-w-[1400px] mx-auto relative h-[320px] md:h-[550px] flex items-center justify-center">
                {TESTIMONIALS.map((t, i) => {
                    const diff = (i - centerIndex + TESTIMONIALS.length) % TESTIMONIALS.length;
                    let pos = "hidden";
                    if (diff === 0) pos = "center";
                    else if (diff === 1 || (diff === -2 && TESTIMONIALS.length === 3)) pos = "right";
                    else if (diff === TESTIMONIALS.length - 1 || diff === -1) pos = "left";

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

                            <div className="flex flex-col h-full">
                                <div className="flex items-center gap-2 md:gap-4 mb-3 md:mb-6">
                                    <img src={t.avatar} alt={t.name} className="w-7 h-7 md:w-14 md:h-14 rounded-full object-cover ring-2 ring-white shadow-md" />
                                    <div>
                                        <h3 className="text-[11px] md:text-lg font-bold text-black leading-tight">{t.name}</h3>
                                        <p className="text-gray-400 text-[8px] md:text-xs font-medium">{t.role}</p>
                                    </div>
                                </div>

                                <p className="text-gray-500 text-[10px] md:text-[16px] leading-[1.4] text-left font-medium line-clamp-[6]">
                                    {t.content}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Navigation */}
            <div className="mt-4 md:mt-2 flex flex-col items-center gap-4 md:gap-8">
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
