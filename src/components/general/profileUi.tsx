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

export default async function Profile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="font-LATO">
        <div className="info-container flex items-center w-full gap-2">
          <Button variant="outline" size="icon" className="cursor-pointer">
            <Image
              src={"https://github.com/shadcn.png"}
              height={100}
              width={100}
              className={`${buttonVariants({ size: "icon" })} object-cover`}
              alt="user"
            />
          </Button>
          {/* <p className="text-white dark:text-white font-MONTE">Guest User</p> */}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="/login">Login</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/register">Register</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Link href="https://github.com/VIjayPrasadWebdev/Next-js-15-task-manager">
            GitHub
          </Link>
          <DropdownMenuShortcut>⌘G</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>Support</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
