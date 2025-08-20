import { chain } from '@/lib/middleware/chain';
import { authMiddleware } from '@/lib/middleware/auth';
import { redirectMiddleware } from '@/lib/middleware/redirects';

export default chain([authMiddleware, redirectMiddleware]);

export const config = {
  matcher: ['/auth/forgot-password/reset/:path*'], // 이 모듈이 처리할 경로
};
