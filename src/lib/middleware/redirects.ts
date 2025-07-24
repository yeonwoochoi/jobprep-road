import { NextResponse } from "next/server";
import { Middleware } from "@/lib/middleware/chain";

export const redirectMiddleware: Middleware = async (request, next) => {
  const token = request.cookies.get('reset_token')?.value
  const isResetPasswordPage = request.nextUrl.pathname.startsWith('/auth/forgot-password/reset')

  if (isResetPasswordPage && !token) {
    return NextResponse.redirect(
      new URL('/auth/forgot-password?error=no_token', request.url)
    )
  }

  return next();
}

export const redirectConfig = {
  matcher: ['/auth/forgot-password/reset/:path*'], // 이 모듈이 처리할 경로
}