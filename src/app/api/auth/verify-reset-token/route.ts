import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get('reset_token')?.value
    if (!token) {
      return NextResponse.json(
        { error: '인증 토큰이 없습니다. 다시 인증해주세요' },
        {
          status: 401,
          statusText: 'Unauthorized',
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    // 토큰 유효성 검사 (실제 구현시 주석 해제)
    // const isValid = await verifyResetToken(email, token)
    const isValid = true // 샘플 데이터

    if (!isValid) {
      return NextResponse.json(
        { error: '유효하지 않은 토큰이거나 만료되었습니다' },
        {
          status: 400,
          statusText: 'Bad Request',
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    return NextResponse.json(
      { success: true, message: '유효한 토큰입니다.' },
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('[RESET_TOKEN_VERIFY_ERROR]', error)
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
