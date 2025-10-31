"use client";
import React, { useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { Input } from "../ui/input";
import { requestPasswordReset } from "@/lib/auth-client";
import { toast } from "sonner";
import ForgotPasswordBtn from "./ForgotPasswordBtn";
import { useRouter } from "next/navigation";
export default function ForgotPasswordUi() {
  let router = useRouter();
  let [loading, setloading] = useState<boolean>(false);
  async function handleForgotpassword(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setloading(true);
    try {
      let formdata = new FormData(event.currentTarget);

      let email = formdata.get("email") as string;
      if (!email) {
        toast.error("Please enter the email");
        return;
      }
      let { data, error } = await requestPasswordReset(
        {
          email,

          redirectTo: "/reset-password",
        },
        {
          onSuccess: () => {
            toast.success(
              "If an account exists for this email then we've send an reset password link"
            );
          },
          onError: (err) => {
            toast.error(err.error.message || "Something went wrong");
          },
        }
      );
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setloading(false);
    }
  }
  return (
    <section>
      <div className="forgot-password-desc flex flex-col justify-center items-center gap-2">
        <h2 className="text-xl">Forgot Password </h2>
        <p className="text-muted-foreground">
          Enter your Email address we'll send you a link to reset the password
        </p>
      </div>
      <article className="flex items-center justify-between p-3  h-full w-full">
        <Card className="user-profile-card  w-[280px] md:w-[350px]  lg:w-[390px]">
          <CardHeader className="flex flex-col justify-start items-center">
            <CardTitle className="flex items-center gap-2">Email</CardTitle>
            <CardDescription>Reset the password</CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col gap-3">
            <form onSubmit={handleForgotpassword}>
              <Input placeholder="Enter your email " name="email" />
              <ForgotPasswordBtn loading={loading} />
            </form>
          </CardContent>
        </Card>
      </article>
    </section>
  );
}
