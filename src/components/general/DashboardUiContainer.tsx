import React from "react";
import DashboardUi from "./DashboardUi";
import DashboardDescUi from "./DashboardDescUi";
import DashboardCardUi from "./DashboardCardUi";
import { getSession } from "@/lib/get-session";
import { unauthorized } from "next/navigation";
import EmailVerfiedUi from "./EmailVerfiedUi";

export default async function DashboardUiContainer() {
  let session = await getSession();
  let user = session?.user;
  console.log("userdata", user);
  if (!user) return unauthorized();
  return (
    <main className="h-screen flex justify-center  lg:items-start items-center flex-col w-full gap-3 lg:p-12  p-0 overflow-hidden">
      <DashboardDescUi user={user} />
      <DashboardCardUi user={user} />
    </main>
  );
}
