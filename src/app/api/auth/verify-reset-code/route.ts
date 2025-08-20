import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, verificationCode } = await request.json();

    if (!email || !verificationCode) {
      return NextResponse.json(
        { error: '이메일과 인증번호를 입력해주세요.' },
        {
          status: 400,
          statusText: 'Bad Request',
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // 2. 인증번호 검증 (DB 또는 캐시에서 조회)
    // const resetRecord = await db.passwordReset.findUnique({
    //   where: { email },
    // });
    const resetRecord = { token: '123456', createdAt: new Date() }; // Sample

    if (!resetRecord) {
      return NextResponse.json(
        { error: '인증번호 요청 기록이 없습니다' },
        {
          status: 404,
          statusText: 'Not Found',
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // 3. 인증번호 일치 여부 확인
    if (resetRecord.token !== verificationCode) {
      return NextResponse.json(
        { error: '인증번호가 일치하지 않습니다' },
        {
          status: 401,
          statusText: 'Unauthorized',
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // 4. 만료 시간 검증 (예: 10분)
    const expirationTime = new Date(resetRecord.createdAt).getTime() + 10 * 60 * 1000;
    if (Date.now() > expirationTime) {
      return NextResponse.json(
        { error: '인증번호가 만료되었습니다' },
        {
          status: 401,
          statusText: 'Unauthorized',
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // 5. 비밀번호 재설정 토큰 생성
    // const resetToken = crypto.randomBytes(32).toString('hex');
    const resetToken: string =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lMSIsImlhdCI6MTczOTM3MDY0NiwiZXhwIjoxNzM5Mzc0MjQ2fQ.gISzSChHIPtAkwi6sh8UlQScynMBBQisSQ393ih0X5g'; // Sample
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10분 유효

    // 6. 토큰 저장 (DB 업데이트)
    // await db.passwordReset.update({
    //   where: { email },
    //   data: {
    //     resetToken,
    //     resetTokenExpires: expiresAt,
    //   },
    // });

    // 7. 응답 설정
    const response = NextResponse.json(
      { success: true, message: '인증되었습니다' },
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

    response.cookies.set('reset_token', resetToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 10 * 60, // 10분
      path: '/', // 전체 경로에서 접근 가능하게
    });

    return response;
  } catch (error) {
    console.error('[RESET_CODE_VERIFY_ERROR]', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다' },
      {
        status: 500,
        statusText: 'Internal Server Error',
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
