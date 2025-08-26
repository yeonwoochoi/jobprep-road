import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: '이메일과 비밀번호를 입력해주세요.' },
        {
          status: 400,
          statusText: 'Bad Request',
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    // 이메일로 유저 조회
    // const user = await db.user.findUnique({
    //   where: { email }
    // })
    const user = 'rud527@naver.com'
    if (!user) {
      return NextResponse.json(
        { error: '가입되지 않은 계정입니다.' },
        {
          status: 409,
          statusText: 'Conflict',
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    // 비밀번호 암호화 (실제 구현시 주석 해제)
    // const hashedPassword = await bcrypt.hash(password, 12)
    const hashedPassword = '$2a$12$5Iy//jMOq79mj5yePuhzxeUm2djQDYLrJc/oqtm.IA5ru1fsvROYG' // 샘플 데이터 (123456)

    // const accessToken = crypto.randomBytes(32).toString('hex');
    const accessToken: string =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lMSIsImlhdCI6MTczOTM3MDY0NiwiZXhwIjoxNzM5Mzc0MjQ2fQ.gISzSChHIPtAkwi6sh8UlQScynMBBQisSQ393ih0X5g' // Sample
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000) // 10분 유효

    // 로그인 (실제 구현시 주석 해제)
    // await db.user.create({
    //   data: { email,  password: hashedPassword },
    // })

    // 응답 설정
    const response = NextResponse.json(
      { success: true, message: '로그인 성공' },
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )

    response.cookies.set('access_token', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 10 * 60, // 10분
      path: '/', // 전체 경로에서 접근 가능하게
    })

    return response
  } catch (error) {
    console.error('[LOGIN]', error)
    return NextResponse.json(
      { error: '로그인에 실패했습니다' },
      {
        status: 500,
        statusText: 'Internal Server Error',
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}
