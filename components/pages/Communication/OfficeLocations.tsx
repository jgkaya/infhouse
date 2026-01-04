"use client";

const OFFICES = [
    {
        id: 1,
        title: "Antalya Ofis",
        address: "Liman Mahallesi, Atatürk Bulvarı, 289/A 07720, Konyaaltı / Antalya",
        image: "https://cdn.e-adam.net/infhouse/antalya.png"
    },
    {
        id: 2,
        title: "Skyland Ofis",
        address: "Huzur Mahallesi, Azerbeycan Caddesi, 4 34415, Sarıyer / İstanbul",
        image: "https://cdn.e-adam.net/infhouse/skyland.png"
    },
    {
        id: 3,
        title: "Teknokent Ofis",
        address: "Üniversite Mahallesi, Sarıgül Sokak, No:37/1 No:97 Avcılar / İstanbul",
        image: "https://cdn.e-adam.net/infhouse/teknokent.png"
    },
    {
        id: 4,
        title: "Dubai Ofis",
        address: "Dubai",
        image: "https://cdn.e-adam.net/infhouse/dubai.png"
    }
];

export default function OfficeLocations() {
    return (
        <section className="bg-[#fbfaf7] md:bg-white py-12 md:py-20 px-4 md:px-8">
            <div className="mx-auto max-w-[1240px]">
                {/* Header */}
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-[32px] md:text-[64px] font-medium tracking-tight font-instrument leading-[1.1] text-[#FF9CA6]">
                        Ofislerimiz
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                    {OFFICES.map((office) => (
                        <div key={office.id} className="flex flex-col items-center bg-white rounded-[16px] md:rounded-[24px] p-2 md:p-0 border border-[#E5E5E5] md:border-none shadow-sm md:shadow-none">
                            <div className="w-full aspect-[4/3] rounded-[12px] md:rounded-[24px] overflow-hidden mb-3 md:mb-6 md:shadow-sm md:border md:border-gray-100">
                                <img
                                    src={office.image}
                                    alt={office.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-xs md:text-xl font-bold text-[#1A1A1A] mb-1 md:mb-2 text-center">{office.title}</h3>
                            <p className="text-[#666666] text-center text-[10px] md:text-sm leading-relaxed max-w-[250px] px-1 md:px-0">
                                {office.address}
                            </p>
                            {/* Mobile only padding bottom to mimics card look */}
                            <div className="h-2 md:h-0"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
