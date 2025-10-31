import ResetPasswordUi from "@/components/general/ResetPasswordUi";
import React from "react";

interface SEARCHPARAMS {
  searchParams: Promise<{ token: string }>;
}

export default async function page({ searchParams }: SEARCHPARAMS) {
  console.log(searchParams);

  let { token } = await searchParams;

  return (
    <section className="h-screen flex justify-center items-center flex-col w-full">
      {token ? (
        <ResetPasswordUi token={token} />
      ) : (
        <div>
          <h2 className="text-red-500">Token is missing</h2>
        </div>
      )}
    </section>
  );
}
