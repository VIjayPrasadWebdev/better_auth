import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import GoogleIcon from "../icons/Google";
import { GitHubIcon } from "../icons/Github";
import LinkedinIcon from "../icons/Linkedin";
import { Separator } from "../ui/separator";
import Link from "next/link";
export default function RegisterUi() {
  return (
    <Card
      className="login-card w-[22rem] sm:w-[25rem] min-h-[25rem] h-auto  bg-white/10 dark:bg-black/30 backdrop-blur-lg border border-white/20 
        dark:border-gray-700 rounded-xl  "
    >
      <CardHeader className="text-white">
        <CardTitle>Register your account</CardTitle>
        <CardDescription className="text-muted-foreground">
          Sign Up Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent className="text-white">
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Vijayprasad"
                required
                className=""
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full cursor-pointer bg-blue-700">
          Create an Account
        </Button>

        <Separator className="my-3" />
        <div className="register-container">
          <p className="text-muted-foreground text-sm flex items-center gap-3">
            Already have an account?
            <Link href="/login" className="underline cursor-pointer">
              Login
            </Link>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}
