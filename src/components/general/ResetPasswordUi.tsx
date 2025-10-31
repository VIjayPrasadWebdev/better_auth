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
import ResetPasswordBtn from "./ResetPasswordBtn";
import { useRouter } from "next/navigation";
import { resetPassword } from "@/lib/auth-client";
import { toast } from "sonner";
export default function ResetPasswordUi({ token }: { token: string }) {
  let [loading, setloading] = useState(false);
  let router = useRouter();
  async function handleResetpassword(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let formdata = new FormData(event.currentTarget);
    let password = formdata.get("password") as string;
    if (!password) {
      toast.error("Please enter the password");
      return;
    }
    try {
      setloading(true);
      let { data, error } = await resetPassword(
        {
          newPassword: password,
          token,
        },
        {
          onError: (err) => {
            toast.error(err.error.message || "Something went wrong");
          },
          onSuccess: () => {
            toast.success("Password has been reset you can now sign in");
            router.push("/login");
          },
        }
      );
    } catch (err) {
    } finally {
      setloading(false);
    }
  }

  return (
    <section>
      <div className="forgot-password-desc flex flex-col justify-center items-center gap-2">
        <h2 className="text-xl">Reset Password </h2>
        <p className="text-muted-foreground">Enter your new password below</p>
      </div>
      <article className="flex items-center justify-between p-3  h-full w-full">
        <Card className="user-profile-card  w-[280px] md:w-[350px]  lg:w-[390px]">
          <CardHeader className="flex flex-col justify-start items-center">
            <CardTitle className="flex items-center gap-2">
              New Password
            </CardTitle>
            <CardDescription>Reset the password</CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col gap-3">
            <form onSubmit={handleResetpassword}>
              <Input
                type="password"
                name="password"
                placeholder="Enter your new password "
              />
              <ResetPasswordBtn loading={loading} />
            </form>
          </CardContent>
        </Card>
      </article>
    </section>
  );
}
