"use server";

import { Button, buttonVariants } from "../ui/button";

import Link from "next/link";
import { CodeXml } from "lucide-react";
import Profile from "./profileUi";
import { ModeToggle } from "./ModeUi";
import { getSession } from "@/lib/get-session";
export default async function Navbar() {
  let session = await getSession();
  let user = session?.user;
  return (
    <header className="flex justify-center items-center">
      <nav className="fixed top-0 w-3/6  mx-auto mt-4 px-5  py-3 rounded-full flex justify-between items-center">
        <Link href="/" className="flex items-center gap-4">
          <Button
            size="icon"
            variant="outline"
            className=" cursor-pointer text-black dark:text-white"
          >
            <CodeXml className="w-5 h-5" />
          </Button>
          <p className="font-GABARITO hidden md:block text-lg font-medium text-white dark:text-white">
            Next js + Better Auth
          </p>
        </Link>

        <div className="font-POPPINS font-normal hidden md:flex text-white dark:text-white items-center gap-9">
          <Link className="text-white dark:text-white" href="/">
            Home
          </Link>
          <Link className="text-white dark:text-white" href="/dashboard">
            Dashboard
          </Link>
          <Link className="text-white dark:text-white" href="/about">
            About
          </Link>
        </div>
        <article className="flex items gap-3">
          {/* <ModeToggle /> */}
          <Profile user={user} />
        </article>
      </nav>
    </header>
  );
}
