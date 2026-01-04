"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white pt-20 pb-10 px-4 md:px-12 border-t border-gray-100">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-6">
                        <div className="w-40 h-16 bg-gray-50 rounded-2xl border border-dashed border-gray-200 flex items-center justify-center text-gray-400 font-medium">
                            Logo Placeholder
                        </div>
                        <p className="text-gray-400 text-[15px] leading-relaxed max-w-xs">
                            Markanızı ve ürünlerinizi en iyi şekilde tanıtan kullanıcı odaklı UGC videolar hazırlıyoruz. Deneyimli içerik üreticileri tarafından sizin ürünlerinizle çekilmiş gerçek kullanıcı videolarını size sunuyoruz.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { Icon: Instagram, href: "#" },
                                {
                                    Icon: ({ size }: { size: number }) => (
                                        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M9 12a4 4 0 1 0 4 4V4" />
                                            <path d="M15 8a2 2 0 1 0 0-4" />
                                        </svg>
                                    ), href: "#"
                                }, // TikTok
                                { Icon: Linkedin, href: "#" },
                                { Icon: Twitter, href: "#" }
                            ].map((social, i) => (
                                <Link
                                    key={i}
                                    href={social.href}
                                    className="w-11 h-11 rounded-xl border border-gray-200 flex items-center justify-center text-gray-900 hover:bg-gray-50 transition-all hover:scale-105 shadow-sm"
                                >
                                    <social.Icon size={20} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Platform Column */}
                    <div>
                        <h4 className="text-[22px] font-bold text-black mb-8">Platform</h4>
                        <ul className="flex flex-col gap-4">
                            {["İçerik Üreticileri", "Çalışmalarımız", "Nasıl Çalışır", "S.S.S."].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-gray-400 hover:text-[#FF6C79] transition-colors font-medium">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Şirket Column */}
                    <div>
                        <h4 className="text-[22px] font-bold text-black mb-8">Şirket</h4>
                        <ul className="flex flex-col gap-4">
                            {["İletişim", "İçerik Üreticisi Ol", "Kurumsal", "Blog"].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-gray-400 hover:text-[#FF6C79] transition-colors font-medium">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* İletişim Column */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-[22px] font-bold text-black mb-8">İletişim</h4>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3 bg-[#B8E2FF] p-3 rounded-2xl group cursor-pointer hover:shadow-md transition-all">
                                <div className="w-8 h-8 flex items-center justify-center">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black group-hover:scale-110 transition-transform">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <span className="text-black font-semibold text-[15px]">+90 (262) 606 18 65</span>
                            </div>

                            <div className="flex items-center gap-3 bg-[#FFADC1] p-3 rounded-2xl group cursor-pointer hover:shadow-md transition-all">
                                <div className="w-8 h-8 flex items-center justify-center">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black group-hover:scale-110 transition-transform">
                                        <rect width="20" height="16" x="2" y="4" rx="2" />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                </div>
                                <span className="text-black font-semibold text-[15px]">hello@infhouse.co</span>
                            </div>

                            <div className="flex items-center gap-3 bg-[#FFE6A5] p-3 rounded-2xl group cursor-pointer hover:shadow-md transition-all">
                                <div className="w-8 h-8 flex items-center justify-center">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black group-hover:scale-110 transition-transform">
                                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <span className="text-black font-semibold text-[15px]">İstanbul, Türkiye</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-gray-100 gap-6">
                    <p className="text-gray-400 text-sm">
                        © 2025 InfHouse | UGC İçerik Platformu. Tüm hakları saklıdır.
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-gray-400 hover:text-black transition-colors text-sm font-medium">Gizlilik Politikası</Link>
                        <Link href="#" className="text-gray-400 hover:text-black transition-colors text-sm font-medium">Kullanım Şartları</Link>
                    </div>
                </div>

                <div className="flex justify-start">
                    <span className="text-gray-400 text-xs mt-2 italic">by e-adam</span>
                </div>
            </div>
        </footer>
    );
}
