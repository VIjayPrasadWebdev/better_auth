import HeroUi from "@/components/general/HeroUi";
import Navbar from "@/components/general/NavbarUi";
import React from "react";

export default function Dashboardlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative z-10 w-full h-screen text-center text-white">
      {/* {<HeroUi />} */}
      <Navbar />
      {children}
    </main>
  );
}
