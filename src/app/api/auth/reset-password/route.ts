import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // 1. 필수 필드 검증
    if (!email || !password) {
      return NextResponse.json(
        { error: '이메일과 비밀번호를 입력해주세요' },
        {
          status: 400,
          statusText: 'Bad Request',
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // 2. 쿠키에서 토큰 추출
    const token = request.cookies.get('reset_token')?.value || undefined;

    if (!token) {
      return NextResponse.json(
        { error: '인증 토큰이 없습니다. 다시 인증해주세요' },
        {
          status: 401,
          statusText: 'Unauthorized',
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // 3. DB에서 사용자 조회 (실제 구현시 주석 해제)
    // const user = await db.user.findUnique({ where: { email } })
    const user = 'rud527@naver.com'; // 샘플 데이터

    if (!user) {
      return NextResponse.json(
        { error: '해당 이메일로 가입된 계정이 없습니다' },
        {
          status: 404,
          statusText: 'Not Found',
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // 4. 토큰 유효성 검사 (실제 구현시 주석 해제)
    // const isValid = await verifyResetToken(email, token)
    const isValid = true; // 샘플 데이터

    if (!isValid) {
      return NextResponse.json(
        { error: '유효하지 않은 토큰이거나 만료되었습니다' },
        {
          status: 400,
          statusText: 'Bad Request',
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // 5. 비밀번호 암호화 (실제 구현시 주석 해제)
    // const hashedPassword = await bcrypt.hash(password, 12)
    const hashedPassword = '$2a$12$5Iy//jMOq79mj5yePuhzxeUm2djQDYLrJc/oqtm.IA5ru1fsvROYG'; // 샘플 데이터 (123456)

    // 6. 비밀번호 업데이트 (실제 구현시 주석 해제)
    // await db.user.update({
    //   where: { email },
    //   data: { password: hashedPassword },
    // })

    // 7. 토큰 삭제 (실제 구현시 주석 해제)
    // await db.passwordReset.delete({ where: { email } })

    // 8. 성공 응답 + 쿠키 삭제
    const response = NextResponse.json(
      { success: true, message: '비밀번호가 재설정되었습니다' },
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

    response.cookies.delete('reset_token'); // 브라우저에서도 쿠키 삭제 지시
    return response;
  } catch (error) {
    console.error('[RESET_PASSWORD_ERROR]', error);
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
