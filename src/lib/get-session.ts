import { auth } from "./auth"; // path to your Better Auth server instance
import { headers } from "next/headers";

export async function getSession() {
  return await auth.api.getSession({
    headers: await headers(),
  });
}
