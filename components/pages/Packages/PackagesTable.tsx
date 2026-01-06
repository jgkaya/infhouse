"use client";

import React from "react";
import { Check, X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Tier {
    name: string;
    subtitle: string;
    price?: string;
    features: (string | boolean)[];
    isRecommended?: boolean;
    color: string;
}

const tiers: Tier[] = [
    {
        name: "Start",
        subtitle: "5 kişi - 5 video",
        features: [
            "5 kişi - 5 video",
            "1 Kişi - 4 Reels\n4 Post - 8 Story",
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            true,
            true,
            true,
            true,
            false,
            true,
            true,
            true,
            false,
        ],
        color: "text-black",
    },
    {
        name: "Special",
        subtitle: "10 kişi - 10 video",
        features: [
            "10 kişi - 10 video",
            "3 Kişi - 9 Reels\n3 Post - 9 Story",
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            false,
            true,
            true,
            true,
            true,
        ],
        color: "text-[#22C55E]",
    },
    {
        name: "Pro Max",
        subtitle: "15 kişi - 15 video",
        isRecommended: true,
        features: [
            "15 kişi - 15 video",
            "5 Kişi - 15 Reels\n5 Post - 15 Story",
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
        ],
        color: "text-[#F43F5E]",
    },
];

const featureLabels = [
    "UGC Video İçeriği",
    "Seçili (Marka Yüzü) UGC Video İçeriği",
    "Web Sitesinde UGC Alanı Oluşturma",
    "İçerik Üretimi Konusunda Danışmanlık",
    "Sosyal Medya Danışmanlığı",
    "Sosyal Medya Paylaşım Planı",
    "Reels, Story İçerik Önerileri",
    "Mecra İşbirlikleri",
    "Gündem Bağlantılı İçerik Önerileri",
    "Reklam Ve Sosyal Medya Destekleme",
    "Hedef Kitle Belirleme",
    "Hedef Kitleye Uygun Stratejiler Geliştirme",
    "Rakip Analizi",
    "UGC Takibi",
    "UGC Listesi Oluşturma",
    "UGC İçeriklerinin Hazırlanması Ve Teslimi",
    "Senaryolaştırma",
    "Kampanya Yönetimi",
    "Günlük Sosyal Mecra Kontrol Ve Rapor",
    "Performans Takibi Ve Raporlama",
    "Influencer İsim Önerileri",
];

const PackagesTable = () => {
    return (
        <section className="py-20 px-4 md:px-8 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative overflow-x-auto">
                    {/* Main Table Structure */}
                    <table className="w-full border-collapse min-w-[1000px] table-fixed">
                        <thead>
                            <tr>
                                <th className="w-1/4 p-4 sticky left-0 bg-white z-10">
                                    <div className="h-24"></div>
                                </th>
                                {tiers.map((tier, idx) => (
                                    <th key={idx} className="w-1/4 p-0 relative align-bottom">
                                        <div className={cn(
                                            "flex flex-col items-center justify-center p-8 pt-14 rounded-t-[40px] border-t border-x transition-all duration-300 h-64",
                                            tier.isRecommended ? "bg-[#F0FDF4] border-[#86EFAC]" : "border-gray-100 bg-white"
                                        )}>
                                            {/* Status Dot */}
                                            {tier.isRecommended && (
                                                <div className="absolute top-6 right-6">
                                                    <div className="w-8 h-8 rounded-full border-2 border-[#FF4D8D]/20 flex items-center justify-center bg-white shadow-sm">
                                                        <Star className="w-4 h-4 fill-[#FF4D8D] text-[#FF4D8D]" />
                                                    </div>
                                                </div>
                                            )}

                                            <h3 className={cn("text-4xl font-bold mb-3 tracking-tight font-instrument-sans", tier.color)}>
                                                {tier.name}
                                            </h3>

                                            {/* Badge Container with fixed height to keep headers equal */}
                                            <div className="h-10 flex items-center justify-center mb-4">
                                                {tier.isRecommended ? (
                                                    <span className="bg-black text-white text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                                                        Önerilen Paket
                                                    </span>
                                                ) : (
                                                    <div className="h-8" />
                                                )}
                                            </div>

                                            <p className="text-gray-400 text-sm font-semibold tracking-wide">
                                                {tier.subtitle}
                                            </p>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {featureLabels.map((label, rowIdx) => (
                                <tr key={rowIdx} className={rowIdx % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]/50"}>
                                    <td className="p-4 py-8 font-medium text-gray-800 relative sticky left-0 bg-inherit z-10 text-center">
                                        {/* Animated Dashed Line Overlay for rows 1 and 2 */}
                                        {rowIdx === 0 && (
                                            <div className="absolute left-0 top-[40px] w-[100px] h-[120px] pointer-events-none z-20">
                                                <svg width="100" height="120" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
                                                    {/* The dashed path - dots are at x=50, vertical line at x=15 */}
                                                    <path
                                                        d="M50 15H30C20 15 15 20 15 30V45M15 75V90C15 100 20 105 30 105H50"
                                                        stroke="#CBD5E1"
                                                        strokeWidth="1.5"
                                                        strokeDasharray="4 4"
                                                        className="animate-dash-flow"
                                                    />
                                                    {/* Dots at the ends */}
                                                    <circle cx="60" cy="15" r="2.5" fill="#94A3B8" />
                                                    <circle cx="60" cy="105" r="2.5" fill="#94A3B8" />

                                                    {/* "veya" Badge - shifted right */}
                                                    <foreignObject x="0" y="45" width="50" height="30" style={{ overflow: 'visible' }}>
                                                        <div className="flex items-center justify-center w-full h-full">
                                                            <div className="bg-[#FF5D8F] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap">
                                                                veya
                                                            </div>
                                                        </div>
                                                    </foreignObject>
                                                </svg>
                                            </div>
                                        )}

                                        <span className="block pl-16 pr-4 relative z-10">{label}</span>
                                    </td>

                                    {tiers.map((tier, colIdx) => (
                                        <td key={colIdx} className={cn(
                                            "p-4 py-8 text-center border-x transition-all duration-300",
                                            tier.isRecommended ? "bg-[#F0FDF4]/50 border-[#86EFAC]" : "border-gray-100"
                                        )}>
                                            {typeof tier.features[rowIdx] === "string" ? (
                                                <div className="text-sm text-gray-600 whitespace-pre-line leading-relaxed font-semibold">
                                                    {tier.features[rowIdx]}
                                                </div>
                                            ) : tier.features[rowIdx] ? (
                                                <div className="flex justify-center">
                                                    <div className="w-8 h-8 rounded-full bg-[#10B981] flex items-center justify-center shadow-sm">
                                                        <Check className="w-5 h-5 text-white" />
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="flex justify-center">
                                                    <X className="w-6 h-6 text-gray-300 stroke-[1.5]" />
                                                </div>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}

                            {/* Footer row with buttons */}
                            <tr>
                                <td className="p-4 sticky left-0 bg-white z-10 border-b border-gray-100"></td>
                                {tiers.map((tier, idx) => (
                                    <td key={idx} className={cn(
                                        "p-10 text-center border-x border-b rounded-b-[40px] transition-all duration-300",
                                        tier.isRecommended ? "bg-[#F0FDF4] border-[#86EFAC]" : "border-gray-100 bg-white"
                                    )}>
                                        <Button className="bg-[#1A1A1A] hover:bg-black text-white rounded-full px-12 py-8 w-full max-w-[220px] text-lg font-bold transition-transform hover:scale-105 shadow-lg shadow-black/10">
                                            Bilgi Alın
                                        </Button>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <style jsx global>{`
        @keyframes dashFlow {
          from {
            stroke-dashoffset: 20;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        .animate-dash-flow {
          animation: dashFlow 2s linear infinite;
        }
      `}</style>
        </section>
    );
};

export default PackagesTable;
