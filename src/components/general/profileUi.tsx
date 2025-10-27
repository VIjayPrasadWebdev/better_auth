"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { getSession } from "@/lib/get-session";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Profile({ user }: any) {
  let isAdmin = user.role == "Admin";
  let router = useRouter();
  async function handleSignout() {
    await signOut({
      fetchOptions: {
        onRequest: () => {},
        onResponse: () => {},
        onError: (ctx) => {
          toast.error(ctx.error.message);
        },
        onSuccess: () => {
          toast.success("User successfully logged out");
          router.push("/login");
        },
      },
    });
    toast.success("User successfully logged out");
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="font-LATO">
        <div className="info-container flex items-center w-full gap-2.5">
          <Button variant="outline" size="icon" className="cursor-pointer">
            <Image
              src={user.image || "https://github.com/shadcn.png"}
              height={100}
              width={100}
              className={`${buttonVariants({ size: "icon" })} object-cover`}
              alt={user.name || "Guest user"}
            />
          </Button>
          <p className="text-white dark:text-white font-MONTE">
            {user ? user.name : "Guest User"}
          </p>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel> My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {isAdmin && (
          <DropdownMenuItem>
            <Link href="/admin">Admin page</Link>
            <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem>
          <Link href="http://github.com/VIjayPrasadWebdev/better_auth">
            GitHub
          </Link>
          <DropdownMenuShortcut>⌘G</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>Support</DropdownMenuItem>
        <DropdownMenuSeparator />

        {user ? (
          <DropdownMenuItem onClick={handleSignout} className="cursor-pointer">
            Signout
          </DropdownMenuItem>
        ) : (
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Link href="/login">Login</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/register">Register</Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
