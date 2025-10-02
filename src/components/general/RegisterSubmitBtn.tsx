"use client";
import React from "react";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

export default function RegisterSubmitBtn() {
  let { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="mt-5 w-full cursor-pointer bg-blue-700"
    >
      {pending ? (
        <Loader2 className="text-white size-8 animate-spin" />
      ) : (
        " Create an Account"
      )}
    </Button>
  );
}
