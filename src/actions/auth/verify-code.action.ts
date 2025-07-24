'use server'

import { createFormAction } from '@/utils/formActions'
import delay from '@/utils/delay'
import { dynamicFetch } from '@/lib/api'
import parse from 'set-cookie-parser'
import { cookies } from 'next/headers'

// TODO
export const verifyCodeAction = createFormAction(
  ['email', 'verificationCode'] as const,
{ email: 'Email', verificationCode: 'Verification Code' },
  async ({ email, verificationCode }) => {
    const res = await dynamicFetch('/api/auth/verify-reset-code', {
      method: 'POST',
      body: JSON.stringify({ email, verificationCode })
    })

    if (res.status === 'error') {
      throw new Error(res.error)
    }
    else if (res.status === 'success') {
      const setCookieHeader = res.headers?.get('set-cookie')
      if (setCookieHeader) {
        const cookieObj = parse(setCookieHeader)?.find(c => c.name === 'reset_token')
        if (cookieObj) {
          const cookieStore = await cookies()
          cookieStore.set({
            name: 'reset_token',
            value: cookieObj.value,
            path: cookieObj.path,
            httpOnly: !!cookieObj.httpOnly,
            secure: process.env.NODE_ENV === 'production',
            sameSite: cookieObj.sameSite as 'strict' | 'lax' | 'none',
            maxAge: cookieObj.maxAge
          })
        }
      }
    }

    await delay(1000)
    return null
  }
)