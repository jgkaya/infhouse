import Header from "@/components/Header";
import HomeHero from "./HomeHero";
import BrandFlow from "../Marka/BrandFlow";
import WhatWeDo from "./WhatWeDo";
import MainBrandShowcase from "./MainBrandShowcase";
import StatsShowcase from "./StatsShowcase";
import Testimonials from "../Marka/Testimonials";

export default function Home() {
    return (
        <>
            <Header />
            <HomeHero />
            <BrandFlow />
            <WhatWeDo />
            <MainBrandShowcase />
            <StatsShowcase />
            <Testimonials />
        </>
    );
}
