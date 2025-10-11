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
import { UserIcon } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
export default function UserCardUi({ user }: any) {
  let { name, email } = user;
  return (
    <Card className="user-profile-card w-[390px]">
      <CardHeader className="flex flex-col justify-start items-center">
        <CardTitle className="flex items-center gap-2">
          <UserIcon className="size-5" />
          Profile Information
        </CardTitle>
        <CardDescription>
          Your account details and current status
        </CardDescription>
      </CardHeader>
      <article className="flex flex-col gap-3  justify-center w-full items-center">
        <div className="user-pic-container">
          <Avatar className="h-32 w-32 flex flex-col justify-start items-start">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="@shadcn"
              className="rounded-full"
            />
            <AvatarFallback>JN</AvatarFallback>
          </Avatar>
        </div>
        <div className="user-details flex justify-center items-center flex-col gap-2">
          <p>{name}</p>
          <p className="text-muted-foreground">{email}</p>
        </div>
      </article>
    </Card>
  );
}
