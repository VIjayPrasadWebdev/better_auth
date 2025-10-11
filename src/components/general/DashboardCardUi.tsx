import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";
import { Badge } from "../ui/badge";
import { CalendarDaysIcon, MailIcon, ShieldIcon, UserIcon } from "lucide-react";
import { getSession } from "@/lib/get-session";

type USER = {
  name: string;
  email: string;
  image?: any;
  role?: string;
  createdAt: any;
};
export default async function DashboardCardUi({ user }: any) {
  // const user = {
  //   name: "John Doe",
  //   email: "john.doe@example.com",
  //   image: undefined,
  //   role: "admin",
  //   createdAt: new Date(),
  // };

  const initials = user.name
    .split(" ")
    .filter(Boolean)
    .map((part: any) => part[0])
    .join("");
  return (
    <article className="w-screen   flex lg:items-start lg:justify-start justify-center items-center">
      <Card className="w-[90%] dashboard-card text-white">
        <CardHeader className="flex flex-col justify-start items-start">
          <CardTitle className="flex items-center gap-2">
            <UserIcon className="size-5" />
            Profile Information
          </CardTitle>
          <CardDescription>
            Your account details and current status
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col justify-start items-start">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="flex flex-col items-center gap-3">
              <Avatar className="h-32 w-32">
                <AvatarImage
                  src={user.image || "https://github.com/shadcn.png"}
                  alt={user ? user.name : "userpic"}
                />
                <AvatarFallback>{user ? initials : "SN"}</AvatarFallback>
              </Avatar>
              {/* {user.role && (
                <Badge>
                  <ShieldIcon className="size-3" />
                  {user.role}
                </Badge>
              )} */}
            </div>

            <div className="flex-1 text-left space-y-4">
              <div className="flex flex-col gap-1.5">
                <h3 className="text-2xl font-semibold">{user.name}</h3>
                <p className="text-muted-foreground">{user.email}</p>
              </div>

              <div className="space-y-2">
                <div className="text-muted-foreground flex items-center gap-2 text-sm">
                  <CalendarDaysIcon className="size-4" />
                  Member Since
                </div>
                <p className="font-medium">
                  {format(user.createdAt, "MMMM d YYY")}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </article>
  );
}
