import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyJwtToken } from "./utils/jwt";
import i18n from "../i18n";

export async function middleware(request: NextRequest) {
  const token = await verifyJwtToken(request.cookies.get("token")?.value);

  // const locale = request.nextUrl.locale || i18n.defaultLocale;
  // request.nextUrl.searchParams.set("lang", locale);
  // request.nextUrl.href = request.nextUrl.href.replace(`/${locale}`, "");
  // return NextResponse.rewrite(request.nextUrl);

  if (request.nextUrl.pathname.startsWith("/admin") && !token) {
    request.cookies.delete("token");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (
    (request.nextUrl.pathname.startsWith("/login") ||
      request.nextUrl.pathname.startsWith("/forget-password") ||
      request.nextUrl.pathname.startsWith("/verify-otp") ||
      request.nextUrl.pathname.startsWith("/new-password")) &&
    token
  ) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
