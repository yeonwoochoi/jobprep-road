import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, password, newPassword } = await request.json()

    // 1. 필수 필드 검증
    if (!email || !password || !newPassword) {
      return NextResponse.json(
        { error: '기존 비밀번호와 새 비밀번호를 입력해주세요.' },
        {
          status: 400,
          statusText: 'Bad Request',
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    // 2. 쿠키에서 토큰 추출
    const token = request.cookies.get('access_token')?.value
    if (!token) {
      return NextResponse.json(
        { error: '로그인 세션이 만료되었습니다. 다시 로그인해주세요.' },
        {
          status: 401,
          statusText: 'Unauthorized',
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    // 3. DB에서 사용자 조회
    // const user = await db.user.findUnique({where: { email }})
    const user = {
      email: 'rud527@naver.com',
      password: '123456',
    } // 샘플 데이터

    if (!user) {
      return NextResponse.json(
        { error: '사용자를 찾을 수 없습니다. 다시 로그인 해주세요.' },
        {
          status: 401,
          statusText: 'Unauthorized',
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    // 4. TODO: cookie 유효성 체크 (verify access token api 만들기)
    // const isValidToken = await verifyAccessToken(email, token)
    const isValidToken = true // 샘플 데이터

    if (!isValidToken) {
      return NextResponse.json(
        { error: '유효하지 않은 토큰이거나 만료되었습니다' },
        {
          status: 400,
          statusText: 'Bad Request',
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    // 5. 비밀번호 유효성 체크
    // const isValidPassword = await bcrypt.compare(password, user.password)
    const isValidPassword = String(password) === '123456' // 샘플 데이터
    if (!isValidPassword) {
      return NextResponse.json(
        { error: '현재 비밀번호가 올바르지 않습니다.' },
        {
          status: 400,
          statusText: 'Bad Request',
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    // 7. 새 비밀번호 암호화 (실제 구현시 주석 해제)
    // const hashedPassword = await bcrypt.hash(password, 12)
    const hashedPassword = '$2a$12$5Iy//jMOq79mj5yePuhzxeUm2djQDYLrJc/oqtm.IA5ru1fsvROYG' // 샘플 데이터 (123456)

    // 8. 비밀번호 업데이트 (실제 구현시 주석 해제)
    // await db.user.update({
    //   where: { email },
    //   data: { password: hashedPassword },
    // })

    return NextResponse.json(
      { success: true, message: '비밀번호가 변경되었습니다' },
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('[CHANGE_PASSWORD_ERROR]', error)
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다' },
      {
        status: 500,
        statusText: 'Internal Server Error',
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}
