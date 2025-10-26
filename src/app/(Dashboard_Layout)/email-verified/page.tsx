import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <article className="h-screen flex justify-center items-center flex-col gap-3">
      <h2 className="text-xl">Email verified </h2>
      <p className="text-green-500">
        Your Email has been verified Successfully
      </p>
      <Button variant="outline">
        <Link href="/dashboard"> Go to the Dashboard</Link>
      </Button>
    </article>
  );
}
