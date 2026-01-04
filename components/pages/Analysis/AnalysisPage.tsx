"use client";

import { useForm } from "react-hook-form";

import Header from "@/components/Header";

// --- Components ---

function LeftColumn() {
    return (
        <div className="flex flex-row md:flex-col h-full bg-white rounded-[32px] border border-gray-100 p-6 md:p-12 items-center md:text-center text-left shadow-[0_4px_20px_rgba(0,0,0,0.02)] gap-4 md:gap-0">
            {/* Graphic Area */}
            <div className="w-1/3 md:w-full md:mb-10 flex flex-shrink-0 justify-center">
                <img
                    src="https://cdn.e-adam.net/infhouse/Sosyal_medya_analiz_ba%C5%9Fvuru.gif"
                    alt="Analysis"
                    className="w-full h-auto object-contain"
                />
            </div>

            {/* Text Content */}
            <div className="flex-1">
                <h2 className="text-[18px] md:text-[32px] font-medium text-[#1A1A1A] mb-2 md:mb-4 font-instrument tracking-tight">
                    Sosyal Medya Analizi
                </h2>
                <p className="text-[12px] md:text-[15px] leading-relaxed text-gray-500 max-w-sm">
                    Dijital platformlardaki etkileşim ve trafik verilerini inceleyerek marka performansını ölçer; elde edilen içgörülerle içerik stratejilerini optimize eder ve büyümeyi veriye dayalı şekilde destekler.
                </p>
            </div>
        </div>
    );
}

function AnalysisForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
        // Handle form submission
    };

    return (
        <div className="bg-white rounded-[32px] border border-gray-100 p-6 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.02)] h-full">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                {/* Row 1: Name / Surname */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                        <label className="text-[14px] font-bold text-[#1A1A1A]">
                            Ad <span className="text-red-500">*</span>
                        </label>
                        <input
                            {...register("firstName", { required: true })}
                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[12px] text-[14px] placeholder:text-gray-300 focus:outline-none focus:border-black transition-colors"
                            placeholder="Ad"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[14px] font-bold text-[#1A1A1A]">
                            Soyad <span className="text-red-500">*</span>
                        </label>
                        <input
                            {...register("lastName", { required: true })}
                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[12px] text-[14px] placeholder:text-gray-300 focus:outline-none focus:border-black transition-colors"
                            placeholder="Soyad"
                        />
                    </div>
                </div>

                {/* Row 2: Company / Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                        <label className="text-[14px] font-bold text-[#1A1A1A]">
                            Şirket Adı <span className="text-red-500">*</span>
                        </label>
                        <input
                            {...register("companyName", { required: true })}
                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[12px] text-[14px] placeholder:text-gray-300 focus:outline-none focus:border-black transition-colors"
                            placeholder="Şirket Adı"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[14px] font-bold text-[#1A1A1A]">
                            E-posta <span className="text-red-500">*</span>
                        </label>
                        <input
                            {...register("email", { required: true })}
                            type="email"
                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[12px] text-[14px] placeholder:text-gray-300 focus:outline-none focus:border-black transition-colors"
                            placeholder="e-postanız"
                        />
                    </div>
                </div>

                {/* Row 4: Tiktok URL */}
                <div className="space-y-2">
                    <label className="text-[14px] font-bold text-[#1A1A1A]">
                        Tiktok URL <span className="text-red-500">*</span>
                    </label>
                    <input
                        {...register("tiktokUrl", { required: true })}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[12px] text-[14px] placeholder:text-gray-300 focus:outline-none focus:border-black transition-colors"
                        placeholder="www.tiktok.com/@ugc"
                    />
                </div>

                {/* Row 5: Instagram URL */}
                <div className="space-y-2">
                    <label className="text-[14px] font-bold text-[#1A1A1A]">
                        Instagram URL
                    </label>
                    <input
                        {...register("instagramUrl")}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[12px] text-[14px] placeholder:text-gray-300 focus:outline-none focus:border-black transition-colors"
                        placeholder="www.instagram.com/@ugc"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-[#1A1A1A] hover:bg-black text-white font-medium py-4 rounded-[16px] transition-colors mt-4 text-[15px]"
                >
                    Formu Gönder
                </button>

            </form>
        </div>
    );
}

export default function AnalysisPage() {
    return (
        <div className="min-h-screen bg-[#fbfaf7]">
            <Header />
            <main className="pt-32 pb-20 px-4 md:px-8">
                <div className="max-w-[1180px] mx-auto">
                    {/* Page Title */}
                    <h1 className="text-[32px] md:text-[40px] font-medium text-[#1A1A1A] mb-8 font-instrument tracking-tight">
                        Analize Başlayalım
                    </h1>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-6 items-start">
                        <LeftColumn />
                        <AnalysisForm />
                    </div>
                </div>
            </main>
        </div>
    );
}
