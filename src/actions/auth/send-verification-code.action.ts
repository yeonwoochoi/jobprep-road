'use server'

import { createFormAction } from "@/utils/formActions";
import delay from "@/utils/delay";

export const sendVerificationCodeAction = createFormAction(
  ["email"] as const,
  { email: "Email" },
  async ({ email }) => {
    await delay(2000)
    console.log({ email })
    return { email } // TODO 실제 처리
  }
)