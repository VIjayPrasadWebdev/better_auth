import EmailVerfiedLinkButtonUi from "@/components/general/EmailVerfiedLinkButtonUi";
import EmailVerfiedLink from "@/components/general/EmailVerfiedLinkButtonUi";
import { getSession } from "@/lib/get-session";
import { redirect, unauthorized } from "next/navigation";
import React from "react";

export default async function page() {
  let session = await getSession();
  let user = session?.user;

  if (!user) unauthorized();

  if (user.emailVerified) redirect("/dashboard");

  return (
    <article className="h-screen flex justify-center items-center flex-col gap-3">
      <h2 className="text-xl">Verify your Email</h2>
      <p className="text-muted-foreground">
        A verification email was sent to your email
      </p>
      <EmailVerfiedLinkButtonUi email={user.email} />
    </article>
  );
}
