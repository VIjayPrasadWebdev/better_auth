import { NextRequest, NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // Page routes protection
  const protectedPages = ["/dashboard", "/about"];
  const authPages = ["/login", "/register"];

  // API routes that need protection (exclude auth APIs)
  const protectedApis = ["/api/admin", "/api/protected"];
  const authApis = [
    "/api/auth/sign-in",
    "/api/auth/sign-up",
    "/api/auth/sign-out",
  ];

  const isProtectedPage = protectedPages.some((route) =>
    pathname.startsWith(route)
  );
  const isAuthPage = authPages.some((route) => pathname.startsWith(route));
  const isProtectedApi = protectedApis.some((route) =>
    pathname.startsWith(route)
  );
  const isAuthApi = authApis.some((route) => pathname.startsWith(route));

  // Allow all auth API routes (sign-in, sign-out, sign-up) to pass through
  if (isAuthApi) {
    return NextResponse.next();
  }

  // Handle protected API routes
  if (isProtectedApi && !session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Handle page routes
  if (!session && isProtectedPage) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (session && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  runtime: "nodejs",
  matcher: [
    "/dashboard/:path*",
    "/about/:path*",
    "/login",
    "/register",
    "/api/admin/:path*",
    "/api/protected/:path*",
    "/api/auth/:path*",
  ],
};
