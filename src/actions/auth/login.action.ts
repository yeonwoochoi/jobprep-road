'use server'

import { createFormAction } from '@/utils/formActions'
import { dynamicFetch } from '@/lib/api'
import { parse } from 'set-cookie-parser'
import { cookies } from 'next/headers'

export const loginAction = createFormAction(
  ['email', 'password'] as const,
  { email: 'Email', password: 'Password' },
  async ({ email, password }) => {
    const res = await dynamicFetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })

    if (res.status === 'error') {
      throw new Error(res.error)
    } else if (res.status === 'success') {
      const setCookieHeader = res.headers?.get('set-cookie')
      if (setCookieHeader) {
        const cookieObj = parse(setCookieHeader)?.find((c) => c.name === 'access_token')
        if (cookieObj) {
          const cookieStore = await cookies()
          cookieStore.set({
            name: 'access_token',
            value: cookieObj.value,
            path: cookieObj.path,
            httpOnly: !!cookieObj.httpOnly,
            secure: process.env.NODE_ENV === 'production',
            sameSite: cookieObj.sameSite as 'strict' | 'lax' | 'none',
            maxAge: cookieObj.maxAge,
          })
        }
      }
    }
    return null
  }
)
