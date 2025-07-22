'use client'

import { TextField } from "@/components/ui/TextField";
import { t } from "@/locale";
import { useActionState, useEffect } from "react";
import { sendVerificationCodeAction } from "@/actions/auth/send-verification-code.action";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/useToast";
import { SendVerificationCodeData } from "@/types/types";
import { ApiResult } from "@/lib/api";

type SendVerificationCodeActionState = ApiResult<SendVerificationCodeData | null>

export default function EmailForm({ onSuccess }: { onSuccess: (email: string) => void }) {
  const [state, formAction, isPending] = useActionState<SendVerificationCodeActionState, FormData>(sendVerificationCodeAction, {
    status: 'idle'
  })

  const { language } = useLanguage()
  const { toastSuccess, toastError } = useToast()

  useEffect(() => {
    if (state) {
      if (state.status === 'error') {
        toastError(state.error)
      } else if (state.status === 'success' && state.data) {
        toastSuccess(t({ ko: '메일이 전송되었습니다.', en: 'Email has been sent.' }, language))
        onSuccess(state.data.email)
      }
    }
  }, [state])

  return (
    <form action={formAction} className="mt-10 grid grid-cols-1 gap-y-6 w-full">
      <TextField
        label={t({ ko: "이메일", en: "Email Address" }, language)}
        name="email"
        type="email"
        autoComplete="email"
        required
        disabled={isPending}
      />
      <button
        type="submit"
        className="bg-black hover:bg-gray-700 rounded-full text-white py-3 mt-4 disabled:bg-gray-400 disabled:cursor-not-allowed"
        disabled={isPending}
      >
        {
          isPending
            ? t({ ko: '전송중...', en: 'Sending...' }, language)
            : t({ ko: '메일 보내기', en: 'Send Email' }, language)
        }
      </button>
    </form>
  )
}