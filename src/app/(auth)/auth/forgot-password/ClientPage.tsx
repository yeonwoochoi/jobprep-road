'use client'

import { TextField } from "@/components/ui/TextField";
import { t } from "@/locale";
import { useActionState, useEffect, useState } from "react";
import { sendVerificationCodeAction } from "@/actions/auth/send-verification-code.action";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/useToast";
import { useRouter, useSearchParams } from "next/navigation";
import { FormActionResult } from "@/utils/formActions";

export default function ClientPage() {
  const [state, formAction, isPending] = useActionState<FormActionResult<null>, FormData>(sendVerificationCodeAction, {
    status: 'idle'
  })

  const searchParams = useSearchParams()
  const error = searchParams.get('error') as string

  useEffect(() => {
    if (error) {
      toastError('잘못된 접근입니다.')
    }
  }, [])


  const [email, setEmail] = useState('');
  const { language } = useLanguage()
  const { toastSuccess, toastError } = useToast()
  const router = useRouter()

  useEffect(() => {
    if (state) {
      if (state.status === 'error') {
        toastError(state.error)
      } else if (state.status === 'success') {
        toastSuccess(t({ ko: '메일이 전송되었습니다.', en: 'Email has been sent.' }, language))
        router.push(`/auth/forgot-password/verify?email=${encodeURIComponent(email)}`)
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
        onChange={(e) => setEmail(e.target.value)}
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