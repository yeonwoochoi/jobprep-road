import { createFormAction } from "@/utils/formActions";
import delay from "@/utils/delay";

// TODO
export const verifyCodeAction = createFormAction(
  ["email", "verificationCode"] as const,
{ email: 'Email', verificationCode: 'Verification Code' },
  async ({ email, verificationCode }) => {
    // const isValid = await checkVerificationCode(email, verificationCode); // 서버 검증 함수
    // if (!isValid) throw new Error('인증번호가 올바르지 않습니다.');
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lMSIsImlhdCI6MTczOTM3MDY0NiwiZXhwIjoxNzM5Mzc0MjQ2fQ.gISzSChHIPtAkwi6sh8UlQScynMBBQisSQ393ih0X5g"
    await delay(2000)
    console.log({ email, verificationCode })
    return { email, token };
  }
)