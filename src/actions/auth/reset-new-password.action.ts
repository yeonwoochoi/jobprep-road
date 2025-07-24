'use server'

import { createFormAction } from '@/utils/formActions';
import { dynamicFetch } from '@/lib/api';
import { cookies } from 'next/headers';

// TODO
export const resetNewPassword = createFormAction(
  ['email', 'password'] as const,
  { email: 'Email', password: 'Password' },
  async ({ email, password }) => {
    const cookieStore = await cookies();
    const token = cookieStore.get('reset_token')?.value;

    const res = await dynamicFetch('/api/auth/reset-password', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { Cookie: `reset_token=${token}` },
    })

    if (res.status === 'error') {
      throw new Error(res.error)
    }

    cookieStore.delete('reset_token')
    return null
  }
)