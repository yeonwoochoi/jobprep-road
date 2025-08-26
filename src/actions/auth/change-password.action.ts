'use server'

import { createFormAction } from '@/utils/formActions'
import { dynamicFetch } from '@/lib/api'
import { cookies } from 'next/headers'

export const changePasswordAction = createFormAction(
  ['email', 'password', 'newPassword'] as const,
  { email: 'Email', password: 'Password', newPassword: 'New Password' },
  async ({ email, password, newPassword }) => {
    const cookieStore = await cookies()
    const token = cookieStore.get('access_token')?.value

    if (token) {
      const res = await dynamicFetch('/api/auth/change-password', {
        method: 'POST',
        body: JSON.stringify({ email, password, newPassword }),
        headers: { Cookie: `access_token=${token}` },
      })

      if (res.status === 'error') {
        throw new Error(res.error)
      }
    } else {
      throw new Error('로그인 세션이 만료되었습니다. 다시 로그인해주세요.')
    }

    return null
  }
)
