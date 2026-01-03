"use client";

import { useForm } from "react-hook-form";

import Header from "@/components/Header";

// --- Components ---

function LeftColumn() {
    return (
        <div className="flex flex-col h-full bg-white rounded-[32px] border border-gray-100 p-8 md:p-12 items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            {/* Graphic Area */}
            <div className="w-full mb-10 flex justify-center">
                <img
                    src="https://cdn.e-adam.net/infhouse/Sosyal_medya_analiz_ba%C5%9Fvuru.gif"
                    alt="Analysis"
                    className="w-full max-w-[300px] h-auto object-contain"
                />
            </div>

            {/* Text Content */}
            <h2 className="text-[32px] font-medium text-[#1A1A1A] mb-4 font-instrument tracking-tight">
                Sosyal Medya Analizi
            </h2>
            <p className="text-[15px] leading-relaxed text-gray-500 max-w-sm">
                Dijital platformlardaki etkileşim ve trafik verilerini inceleyerek marka performansını ölçer; elde edilen içgörülerle içerik stratejilerini optimize eder ve büyümeyi veriye dayalı şekilde destekler.
            </p>
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
        <div className="bg-white rounded-[32px] border border-gray-100 p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.02)] h-full">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                {/* Row 1: Name / Surname */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                {/* Row 3: Phone */}
                <div className="space-y-2">
                    <label className="text-[14px] font-bold text-[#1A1A1A]">
                        Tel no <span className="text-red-500">*</span>
                    </label>
                    <input
                        {...register("phone", { required: true })}
                        type="tel"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[12px] text-[14px] placeholder:text-gray-300 focus:outline-none focus:border-black transition-colors"
                        placeholder="Telefon Numaranız"
                    />
                </div>

                {/* Row 4: Tiktok URL */}
                <div className="space-y-2">
                    <label className="text-[14px] font-bold text-[#1A1A1A]">
                        Tiktok URL
                    </label>
                    <input
                        {...register("tiktokUrl")}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[12px] text-[14px] placeholder:text-gray-300 focus:outline-none focus:border-black transition-colors"
                        placeholder="www.tiktok.com/@ugc"
                    />
                </div>

                {/* Row 5: Instagram URL */}
                <div className="space-y-2">
                    <label className="text-[14px] font-bold text-[#1A1A1A]">
                        İnstagram URL <span className="text-red-500">*</span>
                    </label>
                    <input
                        {...register("instagramUrl", { required: true })}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[12px] text-[14px] placeholder:text-gray-300 focus:outline-none focus:border-black transition-colors"
                        placeholder="www.instagram.com/@ugc"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-[#1A1A1A] hover:bg-black text-white font-medium py-4 rounded-[16px] transition-colors mt-4 text-[15px]"
                >
                    Ücretsiz analiz için tıklayın
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
