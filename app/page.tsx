import Header from "@/components/Header";
import HomeHero from "@/components/pages/Home/HomeHero";
import StatsShowcase from "@/components/pages/Home/StatsShowcase";
import WhatWeDo from "@/components/pages/Home/WhatWeDo";

export default function Page() {
  return (
    <main>
      <Header />
      <HomeHero />

      <WhatWeDo />
      <StatsShowcase />
    </main>
  );
}
