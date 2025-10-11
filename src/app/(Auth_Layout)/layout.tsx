import HeroUi from "@/components/general/HeroUi";
import { Toaster } from "@/components/ui/sonner";
import React, { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="relative z-10 w-full text-center text-white">
      <HeroUi />
      {children}
      <Toaster richColors />
    </main>
  );
}
