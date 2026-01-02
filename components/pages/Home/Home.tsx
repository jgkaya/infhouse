"use client";

import Header from "@/components/Header";
import HomeHero from "./HomeHero";
import WhatWeDo from "./WhatWeDo";
import StatsShowcase from "./StatsShowcase";

export default function Home() {
    return (
        <>
            <Header />
            <HomeHero />
            <WhatWeDo />
            <StatsShowcase />
        </>
    );
}
