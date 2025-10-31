"use client";
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
import { signUp } from "@/lib/auth-client";
import RegisterSubmitBtn from "./RegisterSubmitBtn";
import { toast } from "sonner";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import z from "zod";
export default function RegisterUi() {
  const registerSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.email("Enter a valid email address"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(5, "Password must be at least 5 characters")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain at least one special character"
      ),
  });
  type REGISTERTYPE = z.infer<typeof registerSchema>;
  let router = useRouter();
  async function handleRegister(formData: FormData) {
    // event.preventDefault();

    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const result = registerSchema.safeParse({ name, email, password });

    // if (!name) return toast.error("Name is required");
    // if (!email) return toast.error("Email is required");
    // if (!password) return toast.error("Password is required");

    if (!result.success) {
      const issues = result.error.issues;

      toast.error(issues[0].message);

      return;
    }
    const { data, error } = await signUp.email(
      { name, email, password, callbackURL: "/email-verified" },
      {
        onRequest: () => {},

        onError: (err) => {
          toast.warning(err.error.message);
        },
        onSuccess: (success) => {
          //  console.log("success", success);

          toast.success("User Registered Successfully", {
            description: `User Created on ${format(new Date(), "MMM d YYY")} `,
          });
          router.push("/login");
        },
      }
    );
    console.log("data", data, "error", error);
  }
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
        <form action={handleRegister}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Vijayprasad"
                className=""
                name="name"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
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
            <RegisterSubmitBtn />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
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
