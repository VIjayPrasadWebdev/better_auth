import React from "react";
import GradientBlinds from "@/components/ui/GradientModel";
import Beams from "../ui/BeamsModel";
import Plasma from "./PlasaModel";
export default function HeroUi() {
  return (
    <section className="absolute h-full w-full">
      <Plasma
        color="#430bf9"
        speed={0.6}
        direction="forward"
        scale={2}
        opacity={0.8}
        mouseInteractive={true}
      />
    </section>
  );
}
