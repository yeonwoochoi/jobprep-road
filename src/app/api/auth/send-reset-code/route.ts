import { NextRequest, NextResponse } from 'next/server';
import { sendResetEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // 1. 이메일 존재 여부 확인
    // const user = await db.user.findUnique({ where: { email } });
    const user = 'rud527@naver.com'; // Sample
    if (!user) {
      return NextResponse.json(
        { error: '해당 이메일로 가입된 계정이 없습니다' },
        {
          status: 400,
          statusText: 'Bad Request',
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // 2. 인증번호 생성 (6자리 숫자)
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

    // 3. DB에 저장 (기존 기록 삭제 후 생성)
    // await db.passwordReset.upsert({
    //   where: { email },
    //   update: { token: verificationCode, createdAt: new Date() },
    //   create: {
    //     email,
    //     token: verificationCode,
    //   },
    // });

    // 4. 이메일 전송
    await sendResetEmail(email, verificationCode);

    return NextResponse.json(
      { success: true, message: '인증번호가 전송되었습니다.' },
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('[RESET_CODE_SEND_ERROR]', error);
    return NextResponse.json(
      { error: '인증번호 전송에 실패했습니다' },
      {
        status: 500,
        statusText: 'Internal Server Error',
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
