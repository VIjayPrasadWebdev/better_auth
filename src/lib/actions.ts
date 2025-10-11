"use server";

import prisma from "./prisma";

export async function GetUsers() {
  return await prisma.user.findMany();
}
