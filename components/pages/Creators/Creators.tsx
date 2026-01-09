"use client";

import Header from "@/components/Header";
import CreatorsHero from "./CreatorsHero";
import CreatorsFeedback from "./CreatorsFeedback";
import CreatorsWhyChoose from "./CreatorsWhyChoose";
import CreatorsJoinCTA from "./CreatorsJoinCTA";
import CreatorsTestimonials from "./CreatorsTestimonials";

export default function Creators() {
    return (
        <>
            <Header />
            <CreatorsHero />
            <CreatorsFeedback />
            <CreatorsWhyChoose />
            <CreatorsTestimonials />
            <CreatorsJoinCTA />
        </>
    );
}
