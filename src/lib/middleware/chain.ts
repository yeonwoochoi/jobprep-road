import { NextRequest, NextResponse } from 'next/server';

export type Middleware = (
  request: NextRequest,
  next: () => Promise<NextResponse>
) => Promise<NextResponse> | NextResponse;

export function chain(middlewares: Middleware[]) {
  return async (request: NextRequest, _: any): Promise<NextResponse> => {
    const invoke = async (index: number): Promise<NextResponse> => {
      if (index >= middlewares.length) {
        return NextResponse.next(); // 기본 응답
      }

      const currentMiddleware = middlewares[index];
      return currentMiddleware(request, () => invoke(index + 1));
    };
    return invoke(0);
  };
}
