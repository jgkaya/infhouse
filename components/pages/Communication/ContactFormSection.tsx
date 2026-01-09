"use client";

import { useState } from "react";
import { Check, Phone, Mail, MapPin } from "lucide-react";

export default function ContactFormSection() {
    const [userType, setUserType] = useState<"brand" | "agency">("brand");

    return (
        <section className="bg-white pt-32 pb-20 px-4 md:px-8">
            <div className="mx-auto max-w-[1240px]">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-[48px] md:text-[64px] font-medium tracking-tight font-instrument leading-[1.1] mb-4">
                        <span className="text-[#1A1A1A]">Sizi</span>{" "}
                        <span className="text-[#FF9CA6]">Arayalım</span>
                    </h2>
                    <p className="text-[#666666] text-lg">
                        UGC ile satışlarınızı artırmaya hazır mısınız? Formu doldurun, 24 saat içinde size dönelim.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                    {/* Left Column: Form */}
                    <div className="lg:col-span-7 bg-white rounded-[32px] border border-[#E5E5E5] p-6 md:p-10 shadow-sm">

                        {/* Type Toggle */}
                        <div className="mb-8">
                            <label className="block text-black font-semibold mb-3">Ben bir...</label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <button
                                    onClick={() => setUserType("brand")}
                                    className={`flex items-center justify-center gap-2 py-3 rounded-[12px] border transition-all ${userType === "brand"
                                        ? "border-[#22C55E] bg-[#F0FDF4] text-black"
                                        : "border-[#E5E5E5] bg-white text-[#999999] hover:bg-gray-50"
                                        }`}
                                >
                                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${userType === "brand" ? "bg-[#22C55E]" : "bg-[#E5E5E5]"}`}>
                                        {userType === "brand" && <Check className="w-3 h-3 text-white" />}
                                        {userType !== "brand" && <Check className="w-3 h-3 text-white" />}
                                    </div>
                                    <span className="font-medium">Markayım</span>
                                </button>
                                <button
                                    onClick={() => setUserType("agency")}
                                    className={`flex items-center justify-center gap-2 py-3 rounded-[12px] border transition-all ${userType === "agency"
                                        ? "border-[#22C55E] bg-[#F0FDF4] text-black" // Using Green for active as per screenshot checkmark color
                                        : "border-[#E5E5E5] bg-white text-[#999999] hover:bg-gray-50"
                                        }`}
                                >
                                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${userType === "agency" ? "bg-[#22C55E]" : "bg-[#E5E5E5]"}`}>
                                        {userType === "agency" && <Check className="w-3 h-3 text-white" />}
                                        {userType !== "agency" && <Check className="w-3 h-3 text-white" />}
                                    </div>
                                    <span className="font-medium">Ajansım</span>
                                </button>
                            </div>
                        </div>

                        {/* Form Inputs */}
                        <form className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-black font-medium mb-2">Ad <span className="text-red-500">*</span></label>
                                    <input type="text" placeholder="Ad" className="w-full h-12 px-4 rounded-[12px] border border-[#E5E5E5] focus:outline-none focus:border-black transition-colors placeholder:text-[#CCCCCC]" />
                                </div>
                                <div>
                                    <label className="block text-black font-medium mb-2">Soyad <span className="text-red-500">*</span></label>
                                    <input type="text" placeholder="Soyad" className="w-full h-12 px-4 rounded-[12px] border border-[#E5E5E5] focus:outline-none focus:border-black transition-colors placeholder:text-[#CCCCCC]" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-black font-medium mb-2">E-posta <span className="text-red-500">*</span></label>
                                    <input type="email" placeholder="e-posta" className="w-full h-12 px-4 rounded-[12px] border border-[#E5E5E5] focus:outline-none focus:border-black transition-colors placeholder:text-[#CCCCCC]" />
                                </div>
                                <div>
                                    <label className="block text-black font-medium mb-2">Telefon <span className="text-red-500">*</span></label>
                                    <input type="tel" placeholder="Tel no" className="w-full h-12 px-4 rounded-[12px] border border-[#E5E5E5] focus:outline-none focus:border-black transition-colors placeholder:text-[#CCCCCC]" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-black font-medium mb-2">Websiteniz</label>
                                    <input type="text" placeholder="www.websitesi.com" className="w-full h-12 px-4 rounded-[12px] border border-[#E5E5E5] focus:outline-none focus:border-black transition-colors placeholder:text-[#CCCCCC]" />
                                </div>
                                <div>
                                    <label className="block text-black font-medium mb-2">Marka Instagram Sayfası <span className="text-red-500">*</span></label>
                                    <input type="text" placeholder="@kullanıcıadınız" className="w-full h-12 px-4 rounded-[12px] border border-[#E5E5E5] focus:outline-none focus:border-black transition-colors placeholder:text-[#CCCCCC]" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-black font-medium mb-2">Size nasıl yardımcı olabiliriz? <span className="text-red-500">*</span></label>
                                <textarea rows={1} placeholder="Projeniz, hedefleriniz ve ne tür içerik aradığınız hakkında bilgi verin..." className="w-full py-3 px-4 rounded-[12px] border border-[#E5E5E5] focus:outline-none focus:border-black transition-colors placeholder:text-[#CCCCCC] resize-none min-h-[50px]"></textarea>
                            </div>

                            <button type="button" className="w-full h-14 bg-[#262626] text-white rounded-[16px] font-medium text-lg hover:bg-black transition-colors mt-4">
                                Formu Gönder
                            </button>
                        </form>
                    </div>

                    {/* Right Column: Info */}
                    <div className="lg:col-span-5 flex flex-col h-full">
                        <h3 className="text-[20px] md:text-[32px] font-instrument font-medium text-black mb-4 md:mb-6">İletişim Bilgileri</h3>

                        <div className="grid grid-cols-2 lg:flex lg:flex-col lg:justify-between lg:flex-1 gap-3 lg:gap-0">
                            {/* Contact Cards Container */}
                            <div className="flex flex-col gap-3 lg:gap-6 justify-center">
                                {/* Phone Card */}
                                <div className="bg-[#A4D8FD] rounded-[16px] md:rounded-[24px] p-3 md:p-6 flex items-center gap-2 md:gap-4 transition-transform hover:scale-[1.02] h-full justify-start">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                                        <Phone className="w-4 h-4 md:w-5 md:h-5 text-[#1A1A1A]" />
                                    </div>
                                    <span className="text-[#1A1A1A] text-xs md:text-lg font-medium leading-tight">+90 (262) 606 18 65</span>
                                </div>

                                {/* Email Card */}
                                <div className="bg-[#FF9CA6] rounded-[16px] md:rounded-[24px] p-3 md:p-6 flex items-center gap-2 md:gap-4 transition-transform hover:scale-[1.02] h-full justify-start">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                                        <Mail className="w-4 h-4 md:w-5 md:h-5 text-[#1A1A1A]" />
                                    </div>
                                    <span className="text-[#1A1A1A] text-xs md:text-lg font-medium leading-tight">hello@infhouse.co</span>
                                </div>

                                {/* Address Card */}
                                <div className="bg-[#FDE68A] rounded-[16px] md:rounded-[24px] p-3 md:p-6 flex items-center gap-2 md:gap-4 transition-transform hover:scale-[1.02] h-full justify-start">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                                        <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#1A1A1A]" />
                                    </div>
                                    <span className="text-[#1A1A1A] text-xs md:text-lg font-medium leading-tight line-clamp-2 md:line-clamp-none">İstanbul, Türkiye</span>
                                </div>
                            </div>

                            {/* Benefits Box */}
                            <div className="bg-white rounded-[24px] md:rounded-[32px] border border-[#E5E5E5] p-4 md:p-8 mt-3 lg:mt-0 lg:mb-0 h-auto flex flex-col justify-center">
                                <ul className="space-y-3 md:space-y-5">
                                    <li className="flex items-center gap-2 md:gap-3">
                                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#22C55E] flex items-center justify-center shrink-0">
                                            <Check className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" strokeWidth={3} />
                                        </div>
                                        <span className="text-[#666666] text-[10px] md:text-lg leading-tight">5000+ doğrulanmış içerik üreticisi</span>
                                    </li>
                                    <li className="flex items-center gap-2 md:gap-3">
                                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#22C55E] flex items-center justify-center shrink-0">
                                            <Check className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" strokeWidth={3} />
                                        </div>
                                        <span className="text-[#666666] text-[10px] md:text-lg leading-tight">14 günde videolar hazır</span>
                                    </li>
                                    <li className="flex items-center gap-2 md:gap-3">
                                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#22C55E] flex items-center justify-center shrink-0">
                                            <Check className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" strokeWidth={3} />
                                        </div>
                                        <span className="text-[#666666] text-[10px] md:text-lg leading-tight">Edit Desteği</span>
                                    </li>
                                    <li className="flex items-center gap-2 md:gap-3">
                                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#22C55E] flex items-center justify-center shrink-0">
                                            <Check className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" strokeWidth={3} />
                                        </div>
                                        <span className="text-[#666666] text-[10px] md:text-lg leading-tight">Senaryolaştırma</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
