import React from "react";

export default function DashboardDescUi({ user }: any) {
  return (
    <article className="text-white flex flex-col justify-center w-full items-start gap-3 mb-4">
      <h2 className="text-2xl">Dashboard</h2>
      <p>
        Hey
        <span className="font-bold mt-2"> {user ? user.name : "Guest"} </span>
        Welcome back! Here's your account overview
      </p>
    </article>
  );
}
