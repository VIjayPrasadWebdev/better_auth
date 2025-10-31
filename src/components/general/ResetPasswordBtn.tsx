"use client";

import React from "react";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
export default function ResetPasswordBtn({ loading }: { loading: boolean }) {
  return (
    <Button
      type="submit"
      disabled={loading}
      className="mt-5 bg-blue-700 text-center text-white cursor-pointer w-full  justify-center"
    >
      {loading ? <Spinner className="text-white size-6" /> : "Reset Password"}
    </Button>
  );
}
