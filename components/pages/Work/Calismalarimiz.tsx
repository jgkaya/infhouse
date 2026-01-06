"use client";

import Header from "@/components/Header";
import { WorkHero } from "./WorkHero";
import { WorkShowcase } from "./WorkShowcase";
import { WorkProjects } from "./WorkProjects";

export default function Calismalarimiz() {
    return (
        <>
            <Header />
            <WorkHero />
            <WorkShowcase />
            <WorkProjects />
        </>
    );
}
