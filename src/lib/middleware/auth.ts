import { Middleware } from "@/lib/middleware/chain";

export const authMiddleware: Middleware = async (request, next) => {
  // TODO
  return next()
}

export const authConfig = {
  matcher: [], // 이 모듈이 처리할 경로
}