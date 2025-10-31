import React from "react";

export default function DashboardDescUi({ user }: any) {
  return (
    <article className="text-white flex flex-col justify-center w-full items-start gap-3 mb-4">
      <h2 className="text-2xl hidden lg:block">Dashboard</h2>
      <p className="lg:mt-0 md:mt-0 mt-[8rem]">
        Hey
        <span className="font-bold mx-2">{user ? user.name : "Guest"}</span>
        Welcome back! Here's your account overview
      </p>
    </article>
  );
}
