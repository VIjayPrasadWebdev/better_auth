import { Mail } from "lucide-react";
import React from "react";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Button } from "../ui/button";
import Link from "next/link";

export default function EmailVerfiedUi() {
  return (
    <article className="flex items-center justify-between p-3  h-full w-full">
      <Item variant="muted" className=" w-[90%]">
        <ItemContent>
          <ItemTitle>
            {/* <p className="flex items-center gap-2"> */}
            <Mail /> Please Verify your Email to access all the features
            {/* </p> */}
          </ItemTitle>
          {/* <ItemDescription>
            A simple item with title and description.
          </ItemDescription> */}
        </ItemContent>
        <ItemActions>
          <Button variant="outline">
            <Link href="/verify-email">Verify Email</Link>
          </Button>
        </ItemActions>
      </Item>
    </article>
  );
}
