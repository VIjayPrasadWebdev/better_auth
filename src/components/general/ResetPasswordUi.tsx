import React from "react";
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
export default function ResetPasswordUi() {
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
            <Input placeholder="Enter your new password " />
            <Button className="mt-3 bg-white cursor-pointer w-full block justify-center">
              Reset Password
            </Button>
          </CardContent>
        </Card>
      </article>
    </section>
  );
}
