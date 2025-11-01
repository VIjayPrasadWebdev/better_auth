"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Globe, Mail } from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiShadcnui,
  SiPrisma,
  SiSupabase,
  SiVercel,
  SiThreedotjs,
  SiZod,
} from "react-icons/si";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function AboutPage() {
  const techStack = [
    { name: "Next.js 15", icon: <SiNextdotjs />, color: "bg-black text-white" },
    { name: "React", icon: <SiReact />, color: "bg-sky-500 text-white" },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      color: "bg-blue-600 text-white",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "bg-cyan-500 text-white",
    },
    {
      name: "ShadCN UI",
      icon: <SiShadcnui />,
      color: "bg-neutral-800 text-white",
    },
    { name: "Prisma", icon: <SiPrisma />, color: "bg-indigo-600 text-white" },
    {
      name: "Supabase",
      icon: <SiSupabase />,
      color: "bg-emerald-600 text-white",
    },
    {
      name: "Better Auth",
      icon: <ShieldCheck />,
      color: "bg-amber-500 text-white",
    },
    { name: "Zod", icon: <SiZod />, color: "bg-purple-600 text-white" },
    {
      name: "Three.js",
      icon: <SiThreedotjs />,
      color: "bg-gray-900 text-white",
    },
    { name: "Vercel", icon: <SiVercel />, color: "bg-zinc-900 text-white" },
  ];

  return (
    <section className="min-h-screen py-16 px-6 md:px-12 flex flex-col items-center">
      <Card className="w-full max-w-4xl shadow-lg border-border/40 bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">
            Project Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            This full-stack authentication app includes admin capabilities,
            secure token-based email verification, password reset, and a smooth
            validation system powered by Zod. It ensures robust security and a
            seamless developer experience, with a subtle Three.js visual effect
            enhancing the UI aesthetics.
          </p>

          <div className="flex flex-wrap gap-2 pt-3">
            {techStack.map((tech) => (
              <Badge
                key={tech.name}
                variant="default"
                className={`${tech.color} flex items-center lg:m-2 m-1 gap-2 px-3 py-2 rounded-md shadow-sm`}
              >
                <span className="text-lg">{tech.icon}</span>
                <span className="text-sm font-medium">{tech.name}</span>
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="mt-16 max-w-4xl w-full">
        <Card className="shadow-md border-border/40 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">
              About the Developer
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>
              Hi, I’m{" "}
              <span className="font-semibold text-foreground">VijayPrasad</span>{" "}
              — a passionate full-stack developer focused on creating secure,
              modern, and visually dynamic applications.
            </p>
            <p>
              This project demonstrates how security, user experience, and
              design can come together in harmony. From admin controls to email
              verification, everything is designed with precision and
              scalability in mind.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="https://github.com/VIjayPrasadWebdev" target="_blank">
                <Button
                  variant="outline"
                  className="flex cursor-pointer items-center gap-2"
                >
                  <Github className="w-4 h-4" /> GitHub
                </Button>
              </Link>
              <Link href="https://better-auth-xi.vercel.app" target="_blank">
                <Button
                  variant="outline"
                  className="flex cursor-pointer items-center gap-2"
                >
                  <Globe className="w-4 h-4" /> Live Demo
                </Button>
              </Link>
              <Link href="mailto:vijayprasad7095@gmail.com">
                <Button
                  variant="outline"
                  className="flex cursor-pointer items-center gap-2"
                >
                  <Mail className="w-4 h-4" /> Contact
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-sm text-muted-foreground text-center">
        © {new Date().getFullYear()} Auth System — Built by{" "}
        <span className="font-medium text-primary">Vijay Prasad</span>
      </footer>
    </section>
  );
}
