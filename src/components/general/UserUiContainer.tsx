import React from "react";
import Profile from "./profileUi";
import UserCardUi from "./UserCardUi";
import { GetUsers } from "@/lib/actions";
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
export default async function UserUiContainer() {
  let users = await GetUsers();
  return (
    <main
      className={`h-full ${
        users.length > 0 ? "grid grid-cols-1  lg:grid-cols-3" : "flex w-full"
      }  items-center justify-center p-6`}
    >
      {users.length > 0 ? (
        users.map((user: any, i: number) => {
          return <UserCardUi user={user} key={i} />;
        })
      ) : (
        <article className="flex justify-center items-center w-full">
          <Card className="user-profile-card w-[320px]">
            <CardHeader className="flex flex-col justify-start items-center">
              <CardTitle className="flex items-center gap-2">
                <UserIcon className="size-5" />
                Profile Information
              </CardTitle>
              <CardDescription>
                Your account details and current status
              </CardDescription>
            </CardHeader>
            <CardContent>No Users are found</CardContent>
          </Card>
        </article>
      )}
    </main>
  );
}
