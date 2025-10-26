"use client";
import React from "react";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
import { Spinner } from "../ui/spinner";

export default function LoginSubmitBtn() {
  let { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="mt-5 w-full cursor-pointer bg-blue-700 text-white"
    >
      {pending ? <Spinner className="text-white size-6" /> : "Login"}
    </Button>
  );
}
