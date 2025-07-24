'use server'

import { createFormAction } from "@/utils/formActions";
import delay from "@/utils/delay";
import { dynamicFetch } from "@/lib/api";

export const sendVerificationCodeAction = createFormAction(
  ["email"] as const,
  { email: "Email" },
  async ({ email }) => {
    const res = await dynamicFetch('/api/auth/send-reset-code', {
      method: "POST",
      body: JSON.stringify({ email })
    })

    if (res.status === 'error') {
      throw new Error(res.error)
    }

    await delay(1000)
    return null
  }
)