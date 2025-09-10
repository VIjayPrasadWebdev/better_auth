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
export default function LoginUi() {
  return (
    <Card
      className="login-card w-[22rem] sm:w-[25rem] min-h-[25rem] h-auto  bg-white/10 dark:bg-black/30 backdrop-blur-lg border border-white/20 
        dark:border-gray-700 rounded-xl  "
    >
      <CardHeader className="text-white">
        <CardTitle>Login to your account</CardTitle>
        <CardDescription className="text-muted-foreground">
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent className="text-white">
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="vijay@example.com"
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
        <Button type="submit" className="w-full cursor-pointer  bg-blue-700">
          Login
        </Button>
        {/* <Separator className="my-3" /> */}
        <div className="social-container my-3 flex items-center flex-col gap-3 w-full ">
          <Button
            variant="ghost"
            size="icon"
            className="w-full  cursor-pointer border-2 "
          >
            <GoogleIcon className="h-18 w-18" />
            <span className="text-muted-foreground"></span> Login with Google
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-full  cursor-pointer border-2"
          >
            <GitHubIcon className="h-10 w-10" />
            <span className="text-muted-foreground"></span>Login with Github
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-full  cursor-pointer border-2"
          >
            <LinkedinIcon className="h-10 w-10" />
            <span className="text-muted-foreground"></span> Login with Linkedin
          </Button>
        </div>

        <Separator className="my-3" />
        <div className="register-container">
          <p className="text-muted-foreground text-sm flex items-center gap-3">
            Don't have an account?
            <Link href="/register" className="underline cursor-pointer">
              Register
            </Link>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}
