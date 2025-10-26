"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { sendVerificationEmail } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Spinner } from "../ui/spinner";

export default function EmailVerfiedLinkButtonUi({ email }: any) {
  let router = useRouter();
  let [loading, setloading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleEmailVerfication() {
    setloading(true);
    setSuccess(null);
    setError(null);
    let { error, data } = await sendVerificationEmail(
      {
        email,
        callbackURL: "/email-verified",
      },

      {
        onError: (err) => {
          toast.error(err.error.message || "Something went wrong");
        },
        onSuccess: () => {
          toast.success("Verification email send successfully");
          setTimeout(() => {
            router.push("/email-verified");
          }, 1500);
          //
        },

        // onRequest: () => {
        //   setloading(true);
        // },
      }
    );
    console.log("Verification error", error);
    console.log("Verification data", data);
    setloading(false);
    if (error) {
      setError(error.message || "Something went wrong");
    } else {
      setSuccess("Verification email sent successfully");
    }
  }

  return (
    <div>
      <div className="space-y-4">
        {success && (
          <div role="status" className="text-sm text-green-600">
            {success}
          </div>
        )}
        {error && (
          <div role="alert" className="text-sm text-red-600">
            {error}
          </div>
        )}
      </div>

      <Button
        variant="outline"
        className="mt-3 cursor-pointer w-full block justify-center"
        disabled={loading}
        onClick={handleEmailVerfication}
      >
        {loading ? (
          <Spinner className="text-white size-6" />
        ) : (
          "Resend Verification Email"
        )}
      </Button>
    </div>
  );
}
