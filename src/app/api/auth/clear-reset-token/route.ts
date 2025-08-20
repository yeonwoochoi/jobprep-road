import { NextResponse } from 'next/server';

export async function POST() {
  const res = NextResponse.json({
    success: true,
    message: '토큰이 제거되었습니다.',
  });
  res.cookies.delete('reset_token');
  return res;
}
