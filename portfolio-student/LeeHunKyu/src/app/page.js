"use client";
import React from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import IntroSection from "@/components/section/IntroSection";
import IntroSection2 from "@/components/section/IntroSection2";
import PortSection from "@/components/section/PortSection";
import PortSection2 from "@/components/section/PortSection2";
import PortSection3 from "@/components/section/PortSection3";
import AbilitySection from "@/components/section/AbilitySection";
import WorkSection from "@/components/section/WorkSection";
import WorkSection2 from "@/components/section/WorkSection2";
import ContactSection from "@/components/section/ContactSection";

export default function Home() {
  const lenis = useLenis(({ scroll }) => {});
  return (
    <ReactLenis root>
      <main id="main">
        <IntroSection />
        <IntroSection2 />
        <PortSection />
        <PortSection2 />
        <PortSection3 />
        <AbilitySection />
        <WorkSection />
        <WorkSection2 />
        <ContactSection />
      </main>
    </ReactLenis>
  );
}
