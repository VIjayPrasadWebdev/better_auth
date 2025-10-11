import React from "react";
import { Archivo_Black } from "next/font/google";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import betterAuthLogo from "../../../public/assets/better_auth_logo.png";
import nextjsLogo from "../../../public/assets/nextjs_logo.png";
import { Button } from "@/components/ui/button";
const ArchivoFont = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
});

const MonteFont = Montserrat({
  subsets: ["latin"],
  weight: "400",
});
export default function HeroContentUi() {
  return (
    <section className="relative z-10 w-full text-center text-white p-3 sm:p-0">
      <div className="flex items-center justify-center gap-4">
        <Image
          src={nextjsLogo}
          alt="Next.js logo"
          className="h-32 w-32 bg-white border border-muted-foreground rounded-full p-2 object-contain"
        />
        <span className="text-2xl font-bold">+</span>
        <Image
          src={betterAuthLogo}
          alt="Better Auth logo"
          className="h-32 w-32 object-contain bg-white border border-muted-foreground p-2 rounded-full"
        />
      </div>
      <h1
        className={`${ArchivoFont.className} text-3xl font-semibold sm:text-6xl w-full mt-4`}
      >
        Authentication with Better Auth and Next.js
      </h1>
      <p
        className={`${MonteFont.className} text-foreground mt-3 text-base sm:text-lg opacity-90`}
      >
        A step-by-step guide to implementing secure and modern authentication in
        your Next.js apps
      </p>
      <div className="mx-auto mt-6 flex max-w-sm flex-col gap-3 sm:flex-row sm:justify-center">
        <Button variant="default" className="py-2 px-4">
          <Link href="/dashboard">Go to Dashboard</Link>
        </Button>
        <Button
          variant="ghost"
          className="py-2 px-4 border border-muted-foreground hero-login-btn"
        >
          <Link href="/login">Sign In</Link>
        </Button>
      </div>
    </section>
  );
}
