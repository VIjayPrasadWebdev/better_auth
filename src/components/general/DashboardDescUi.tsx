import React from "react";

export default function DashboardDescUi({ user }: any) {
  return (
    <article className="text-white flex flex-col justify-center items-start gap-3 mb-4">
      <h2>Dashboard</h2>
      <p>
        Hey <span className="font-bold">{user ? user.name : "John"}</span>{" "}
        Welcome back! Here's your account overview
      </p>
    </article>
  );
}
