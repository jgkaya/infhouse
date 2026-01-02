import Header from "@/components/Header";
import HomeHero from "@/components/pages/Home/HomeHero";
import StatsShowcase from "@/components/pages/Home/StatsShowcase";
import WhatWeDo from "@/components/pages/Home/WhatWeDo";
import { WorkHero } from "@/components/pages/WorkHero";
import CarouselInf from "@/components/pages/CarouselInf";

export default function Page() {
  return (
    <main>
      <Header />
      <HomeHero />

      <WhatWeDo />
      <StatsShowcase />

      <section id="calismalarimiz">
        <WorkHero />
      </section>

      <section id="markalar">
        <CarouselInf />
      </section>
    </main>
  );
}
