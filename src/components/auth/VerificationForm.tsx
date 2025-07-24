'use client'

import { TextField } from "@/components/ui/TextField";
import { t } from "@/locale";
import { useActionState, useEffect, useTransition } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/useToast";
import { verifyCodeAction } from "@/actions/auth/verify-code.action";
import { sendVerificationCodeAction } from "@/actions/auth/send-verification-code.action";
import { useRouter } from "next/navigation";
import { FormActionResult } from "@/utils/formActions";

export default function VerificationForm({ email }: { email: string }) {
  const [state, formAction, isVerifying] = useActionState<FormActionResult<null>, FormData>(verifyCodeAction, {
    status: 'idle'
  })
  const [isResending, startTransition] = useTransition()

  const { language } = useLanguage()
  const { toastSuccess, toastError } = useToast()
  const router = useRouter()

  useEffect(() => {
    if (state) {
      if (state.status === 'error') {
        toastError(state.error)
      } else if (state.status === 'success') {
        toastSuccess(t({ ko: '인증이 완료되었습니다.', en: 'Verification completed.' }, language))
        router.push(`/auth/forgot-password/reset?email=${encodeURIComponent(email)}`)
      }
    }
  }, [state])

  const resendVerificationCode = () => {
    startTransition(async () => {
      const formData = new FormData()
      formData.append('email', email)

      const result = await sendVerificationCodeAction(null, formData as FormData)

      if (result.status === 'success') {
        toastSuccess(t({ ko: '메일이 전송되었습니다.', en: 'Email has been sent.' }, language))
      } else if (result.status === 'error') {
        toastError(result.error)
      }
    })
  }

  return (
    <form action={formAction} className="mt-10 grid grid-cols-1 gap-y-4 w-full">
      <input name="email" value={email} hidden readOnly />
      <TextField
        label={t({ ko: "인증번호", en: "Verification Code" }, language)}
        name="verificationCode"
        required
        disabled={isVerifying}
      />
      <p className="text-sm text-gray-500">
        {t({
          ko: "아직 메일이 오지 않으셨나요? ",
          en: "Didn't receive the email yet? ",
        }, language)}
        <button
          className="underline ml-1 cursor-pointer disabled:no-underline disabled:cursor-not-allowed"
          onClick={resendVerificationCode}
          disabled={isResending}
        >
          { isResending
            ? t({ ko: '전송중...', en: 'Sending...' }, language)
            : t({ ko: "재전송", en: "Resend" }, language)
          }
        </button>
      </p>
      <button
        type="submit"
        className="bg-black hover:bg-gray-700 rounded-full text-white py-3 mt-4 disabled:bg-gray-400 disabled:cursor-not-allowed"
        disabled={isVerifying}
      >
        {
          isVerifying
            ? t({ ko: '확인 중...', en: 'Verifying...' }, language)
            : t({ ko: '확인', en: 'Verify' }, language)
        }
      </button>
    </form>
  )
}