'use server'

import { createFormAction } from '@/utils/formActions';
import delay from '@/utils/delay';
import { dynamicFetch } from '@/lib/api';
import { cookies } from 'next/headers';

// TODO
export const resetNewPassword = createFormAction(
  ['email', 'password'] as const,
  { email: 'Email', password: 'Password' },
  async ({ email, password }) => {
    const res = await dynamicFetch('/api/auth/reset-password', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    })

    if (res.status === 'error') {
      throw new Error(res.error)
    }

    const cookieStore = await cookies()
    cookieStore.delete('reset_token')

    await delay(1000)
    return null
  }
)