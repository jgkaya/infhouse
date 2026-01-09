"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
    {
        id: 1,
        name: "Deniz Çakmak",
        role: "İçerik Üreticisi",
        content: "Çalıştığımız ilk günden beri profesyonellikleri, hızlı iletişimleri ve yaratıcı dokunuşlarıyla bana her zaman güven verdiler. İhtiyaçlarımı doğru analiz edip beklentimin üzerinde bir hizmet sundular. Hem süreç yönetimi hem de sonuçlar açısından gerçekten çok memnun kaldım. İşini tutkuyla yapan bir ekiple çalışmak müthiş bir ayrıcalık. Gönül rahatlığıyla tavsiye ederim.",
        avatar: "https://cdn.e-adam.net/InfHouse/deniz.png",
    },
    {
        id: 2,
        name: "Okay Soyak",
        role: "İçerik Üreticisi",
        content: "Yeni olsam da beni hep ekibin, takımın parçası gibi hissettiren ve markalarla iletişim kurmamı sağlayan her bir çalışanınıza teşekkür ediyorum. Yeni oluşumunuz Infhouse sayesinde de bu deneyimlere yeni, güzel markalar ve günler geleceğini umuyorum. Teşekkürler ✨",
        avatar: "https://cdn.e-adam.net/InfHouse/okay.png",
    },
    {
        id: 3,
        name: "Derya Karakuş Süman",
        role: "İçerik Üreticisi",
        content: "En en en sevdiğim bir ekip. Yaptığım her iş işte çok memnun kaldım. Ekipteki kızların iletişimi, enerjisi, anlayışı her şeyine bayılıyorum. Sizin sayenizde etkileşimlerim o kadar arttı ki. Çok teşekkür ediyorum her şey için. Umarım her zaman bu şekilde devam eder, iyi ki varsınızzzzz!",
        avatar: "https://cdn.e-adam.net/InfHouse/derya.png",
    },
    {
        id: 4,
        name: "Nagehan Aydın",
        role: "İçerik Üreticisi",
        content: "Infhouse'a katılmak bana ayrı bir heyecan veriyor 🍂 içerik üreticileri olarak özgünlük ve gerçekliğiyle bana güven veriyor 😍 harika bir ekiple güzel işler olacağına inanıyorum ✊",
        avatar: "https://cdn.e-adam.net/InfHouse/nagehan.png",
    },
    {
        id: 5,
        name: "Seda Tütüncü",
        role: "İçerik Üreticisi",
        content: "Infhouse ile tanıştığımdan beri kendimi gerçekten değerli ve desteklenmiş hissediyorum. Süreçlerdeki profesyonellikleri, iletişimleri ve içerik üreticisine verdikleri önem gerçekten fark yaratıyor. Böyle bir ekiple yol almak büyük bir güven veriyor.",
        avatar: "https://cdn.e-adam.net/InfHouse/seda.png",
    },
    {
        id: 6,
        name: "Ezgi Kafkas",
        role: "İçerik Üreticisi",
        content: "Yaklaşık 1.5 yıldır e-adam dijital medya ajansındayım, şu zamana kadar birbirinden değerli kişilerle çalışma şansım oldu. Oluşturduğumuz tüm içeriklere dair önerilerimi, yorumlarımı, en önemlisi de desteklerini harika bir şekilde dile getiren bir ekip var içeride. Böylesine güzel kişilerle çalıştığım ve arkadaş olduğum için çok mutluyum.",
        avatar: "https://cdn.e-adam.net/InfHouse/ezgi.png",
    },
];

export default function CreatorsTestimonials() {
    const [centerIndex, setCenterIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
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

    const getPosition = (index: number) => {
        const diff = (index - centerIndex + TESTIMONIALS.length) % TESTIMONIALS.length;
        if (diff === 0) return "center";
        if (diff === 1) return "right";
        if (diff === TESTIMONIALS.length - 1) return "left";
        return "hidden";
    };

    return (
        <section className="bg-[#fbfaf7] py-16 md:py-24 px-4 md:px-12 overflow-hidden relative">
            <div className="max-w-[1400px] mx-auto text-center mb-12 md:mb-20 px-4">
                <h2 className="text-[24px] md:text-[72px] font-bold tracking-tight leading-[1.2] font-instrument">
                    <span className="bg-gradient-to-r from-[#FFDADE] to-[#FF6C79] bg-clip-text text-transparent">İçerik Üreticilerimizin</span> Yorumları
                </h2>
            </div>

            <div className="relative w-full max-w-[1400px] mx-auto h-[400px] md:h-[500px] flex items-center justify-center">
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
                                            {"★"}{"★"}{"★"}{"★"}{"★"}
                                        </div>
                                        <h3 className="text-[14px] md:text-xl font-bold text-black leading-tight">{t.name}</h3>
                                        <p className="text-gray-400 text-[10px] md:text-sm font-medium">{t.role}</p>
                                    </div>
                                </div>

                                <p className="text-gray-500 text-[13px] md:text-[16px] leading-[1.6] text-left font-medium line-clamp-[6]">
                                    {t.content}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
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
