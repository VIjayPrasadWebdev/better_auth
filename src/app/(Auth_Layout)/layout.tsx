import HeroUi from "@/components/general/HeroUi";
import React, { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="relative z-10 w-full text-center text-white bg-foreground">
      <HeroUi />
      {children}
    </main>
  );
}
