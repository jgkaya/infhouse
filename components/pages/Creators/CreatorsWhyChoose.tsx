"use client";

import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FEATURES = [
    {
        iconSrc: "https://cdn.e-adam.net/infhouse/gift.png",
        title: "Zengin PR Gift Deneyimi",
        description: "Farklı kategorilerden markaların PR gönderimleriyle yeni ürünleri ilk deneyimleyen içerik üreticilerinden biri olun."
    },
    {
        iconSrc: "https://cdn.e-adam.net/infhouse/wallet-money.png",
        title: "Gelir Elde Etme Şansı",
        description: "İçerik üretiminizi kazanca dönüştüren, şeffaf ve güvenilir iş birlikleriyle emeğinizin karşılığını alın."
    },
    {
        iconSrc: "https://cdn.e-adam.net/infhouse/lovely.png",
        title: "Etkileşim Artışı",
        description: "Markaların katkısıyla farklı formatlarda üretilen içerikler sayesinde hesabınızda daha yüksek etkileşim ve görünürlük yakalayın."
    },
    {
        iconSrc: "https://cdn.e-adam.net/infhouse/like-tag.png",
        title: "Profesyonel Destek",
        description: "Işık, açı ve anlatım detaylarına kadar hazırlanan net brief'lerle daha güçlü ve kaliteli içerikler üretin."
    },
    {
        iconSrc: "https://cdn.e-adam.net/infhouse/emoji-happy.png",
        title: "Samimi ve Destekleyici Topluluk",
        description: "Infhouse ekibiyle sıcak iletişim içinde, keyifli ve sürdürülebilir iş birliklerinin parçası olun."
    }
];

export default function CreatorsWhyChoose() {
    return (
        <section className="bg-[#FFFCF8] py-24">
            <div className="mx-auto max-w-[1240px] px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-[36px] sm:text-[42px] md:text-[64px] font-medium tracking-tight font-instrument leading-[1.1]">
                        <span className="block md:inline text-[#FF9CA6]">Neden Infhouse'u</span>{" "}
                        <span className="block md:inline text-[#1A1A1A]">Seçmelisiniz?</span>
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 gap-y-8 md:gap-y-16">
                    {FEATURES.map((feature, index) => (
                        <div key={index} className="flex flex-col items-start text-left max-w-sm">
                            <div className="mb-4 relative w-8 h-8">
                                <Image
                                    src={feature.iconSrc}
                                    alt={feature.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-[16px] md:text-[21px] font-medium font-inter-tight text-[#1A1A1A] mb-3 md:mb-4 leading-[1.2] md:leading-[28px] tracking-normal">
                                {feature.title}
                            </h3>
                            <p className="text-[#666666] font-inter-tight font-normal text-[12px] md:text-[14px] leading-[1.4] md:leading-[19px] tracking-[-0.02em]">
                                {feature.description}
                            </p>
                        </div>
                    ))}

                    {/* CTA Card */}
                    <div className="bg-white col-span-1 w-full md:w-[301px] h-auto md:h-[226px] mx-auto md:mx-0 rounded-[20px] px-[14px] py-[19px] border border-[#F0F0F0] shadow-sm relative overflow-hidden flex flex-col gap-[11px]">
                        {/* Avatar Group */}
                        <div className="flex -space-x-3">
                            {[
                                "https://cdn.e-adam.net/infhouse/feyza.jpg",
                                "https://cdn.e-adam.net/infhouse/cemre.png",
                                "https://cdn.e-adam.net/infhouse/gizem.jpg",
                                "https://cdn.e-adam.net/infhouse/image2.jpg",
                                "https://cdn.e-adam.net/infhouse/sefa.jpg",
                                "https://cdn.e-adam.net/infhouse/ezgi.jpg"
                            ].slice(0, 5).map((src, i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative">
                                    <Image
                                        src={src}
                                        alt={`Creator ${i + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>

                        <div>
                            <h3 className="text-[21px] font-medium font-instrument text-[#1A1A1A] mb-1 leading-[1.2] md:leading-[49px] tracking-[-0.05em] whitespace-normal md:whitespace-nowrap">
                                İçerik oluşturmaya hazır mısınız?
                            </h3>
                            <p className="max-w-[240px] text-[#1A1A1A] font-inter-tight font-normal text-[10px] leading-none tracking-[-0.02em]">
                                Başvurunuzu görmek için sabırsızlanıyoruz. Infhouse'a katılmak ve ilham verici markalarla çalışmaya başlamak için hemen formu doldurun!
                            </p>
                        </div>

                        <Link
                            href="/basvuru"
                            className="inline-flex self-start items-center gap-2 md:gap-4 bg-[#1A1A1A] text-white px-4 md:px-6 py-1 md:py-0 rounded-[32px]"
                        >
                            <span className="font-instrument font-medium text-[10px] md:text-[11.53px] leading-[30px] md:leading-[50.43px] tracking-[-0.07em] text-center">
                                Aramıza Katıl
                            </span>
                            <MoveRight className="w-3 h-3 md:w-4 md:h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
