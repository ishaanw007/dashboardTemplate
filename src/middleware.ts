"use client";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const cookieStore = cookies();
  // console.log(cookieStore, "cookieStore");
  const authtoken = cookieStore.get("connect.sid")?.value;
  // console.log(authtoken, "authtoken");
  const notloggedinuserpaths =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/register";
  if (notloggedinuserpaths) {
    if (authtoken) {
      return NextResponse.redirect(new URL("/dashboard/home", request.url));
    }
  } else {
    if (!authtoken) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register"],
};
