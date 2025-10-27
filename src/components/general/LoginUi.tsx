"use client";
import React, { useState } from "react";
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
import { signIn } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import LoginSubmitBtn from "./LoginSubmitBtn";
import { Spinner } from "../ui/spinner";
import z from "zod";
export default function LoginUi() {
  let loginSchema = z.object({
    email: z.email("Enter a valid email address"),
  });

  let router = useRouter();

  let [loading, setloading] = useState<"google" | "github" | null>(null);
  async function handleLogin(formdata: FormData) {
    let email = formdata.get("email") as string;
    let password = formdata.get("password") as string;
    let result = loginSchema.safeParse({ email, password });

    if (!result.success) {
      const issues = result.error.issues;
      toast.error(issues[0].message);

      return;
    }
    let { data, error } = await signIn.email(
      { email, password },
      {
        onError: (err) => {
          toast.warning(err.error.message);
        },
        onSuccess: (success) => {
          console.log("success", success);

          toast.success("User Signed in Successfully", {
            description: `User signed on ${format(new Date(), "MMM d YYY")} `,
          });
          router.push("/dashboard");
        },
      }
    );
    console.log("data", data, "error", error);
  }

  async function socialLogin(provider: "google" | "github") {
    let { error } = await signIn.social(
      {
        provider,
        callbackURL: "/dashboard",
      },
      {
        onRequest: () => {
          setloading(provider);
        },
      }
    );

    if (error) {
      toast.warning(error.message);
    } else {
      toast.success("User Signed in Successfully", {
        description: `User signed on ${format(new Date(), "MMM d YYY")} `,
      });
    }
  }

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
        <form action={handleLogin}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="vijay@example.com"
                name="email"
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
              <Input id="password" type="password" name="password" />
            </div>
          </div>
          <div className="grid gap-2">
            <LoginSubmitBtn />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        {/* <Separator className="my-3" /> */}
        <div className="social-container my-3 flex items-center flex-col gap-3 w-full ">
          <Button
            variant="ghost"
            className="w-full cursor-pointer border-2"
            onClick={() => socialLogin("google")}
            disabled={loading == "google"}
          >
            {loading === "google" ? (
              <Spinner className="text-white size-6" />
            ) : (
              <>
                <GoogleIcon className="h-6 w-6 size-5" />
                <span className="text-muted-foreground"></span> Login with
                Google
              </>
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-full cursor-pointer border-2"
            onClick={() => socialLogin("github")}
            disabled={loading == "github"}
          >
            {loading === "github" ? (
              <Spinner className="text-white size-6" />
            ) : (
              <>
                <GitHubIcon className="h-6 w-6 size-5" />
                <span className="text-muted-foreground"></span>Login with Github
              </>
            )}
          </Button>
          {/* <Button
            variant="ghost"
            size="icon"
            className="w-full  cursor-pointer border-2"
          >
            <LinkedinIcon className="h-10 w-10" />
            <span className="text-muted-foreground"></span> Login with Linkedin
          </Button> */}
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
