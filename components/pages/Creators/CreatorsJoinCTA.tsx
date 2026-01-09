"use client";

import React from "react";

const CreatorsJoinCTA = () => {
    return (
        <section className="w-full bg-white py-12 md:py-20 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
            <div className="w-full flex flex-col items-center">
                {/* Part 1 */}
                <h2
                    style={{
                        fontFamily: '"Instrument Sans", sans-serif',
                        fontWeight: 500,
                        letterSpacing: '-0.05em', // -5%
                        textAlign: 'center',
                        color: '#000000',
                        whiteSpace: 'nowrap'
                    }}
                    className="w-full text-[3.8vw] md:text-[60px] leading-[1.2] md:leading-[70px]"
                >
                    Türkiye’nin En İyi İçerik Platformu Infhouse’da
                </h2>

                {/* Part 2 - Gradient */}
                <h2
                    style={{
                        fontFamily: '"Instrument Sans", sans-serif',
                        fontWeight: 500,
                        letterSpacing: '-0.05em', // -5%
                        textAlign: 'center',
                        background: 'linear-gradient(91.38deg, #FF627B 2.28%, #FFDADE 99.98%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        paddingBottom: '0.1em',
                        whiteSpace: 'nowrap'
                    }}
                    className="w-full text-[3.8vw] md:text-[60px] leading-[1.2] md:leading-[70px]"
                >
                    Katılmak İçin Hemen Formu Doldur!
                </h2>

                {/* Button */}
                <button
                    style={{
                        borderRadius: '41px',
                        borderWidth: '1px',
                        boxShadow: '0px 2px 2.3px 0px #00000040',
                        marginTop: '40px',
                        backgroundColor: '#1a1a1a',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: '"Instrument Sans", sans-serif',
                        fontWeight: 500,
                        letterSpacing: '-0.07em',
                    }}
                    className="w-[160px] h-[36px] md:w-[223px] md:h-[45px] text-[13px] md:text-[16px] hover:scale-105 transition-transform"
                >
                    Formu Doldur
                </button>
            </div>
        </section>
    );
};

export default CreatorsJoinCTA;
