'use client'

import { FormEvent, startTransition, useActionState, useEffect, useState } from "react";
import { resetNewPassword } from "@/actions/auth/reset-new-password.action";
import { ApiResult } from "@/lib/api";
import { ResetPasswordData } from "@/types/types";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/useToast";
import { t } from "@/locale";
import { TextField } from "@/components/ui/TextField";

type ResetPasswordActionState = ApiResult<ResetPasswordData | null>

export default function ResetPasswordForm({ email, token, onSuccess }: { email: string, token: string, onSuccess: () => void }) {
  const [state, formAction, isPending] = useActionState<ResetPasswordActionState, FormData>(resetNewPassword, {
    status: 'idle'
  })

  const { language } = useLanguage()
  const { toastSuccess, toastError } = useToast()

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isTouched, setIsTouched] = useState(false)
  const [isMatch, setIsMatch] = useState(true);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (state) {
      if (state.status === 'error') {
        toastError(state.error)
      } else if (state.status === 'success' && state.data) {
        toastSuccess(t({ ko: '비밀번호 재설정이 완료되었습니다.', en: 'Your password has been successfully reset.' }, language))
        onSuccess()
      }
    }
  }, [state])

  useEffect(() => {
    if (password || confirmPassword) {
      setIsTouched(true);
      setIsMatch(password === confirmPassword)
    }
  }, [password, confirmPassword]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsTouched(true)

    if (!isMatch) {
      toastError(t({
        ko: '비밀번호가 일치하지 않습니다',
        en: 'Passwords do not match'
      }, language))
      return
    }

    // FormData 생성 및 서버 액션 실행
    const formData = new FormData()
    formData.append('email', email)
    formData.append('token', token)
    formData.append('password', password)

    startTransition(() => {
      formAction(formData as FormData)
    })
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 w-full">
      <input name="email" value={email} hidden readOnly />
      <input name="token" value={token} hidden readOnly />
      <TextField
        label={t({ ko: "새 비밀번호", en: "New Password" }, language)}
        name="newPassword"
        type="password"
        required
        disabled={isPending}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onBlur={() => setShowError(isTouched && !isMatch)}
        className="mb-8"
      />
      <TextField
        label={t({ ko: "비밀번호 확인", en: "Password Confirm" }, language)}
        name="passwordConfirm"
        type="password"
        required
        disabled={isPending}
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        onBlur={() => setShowError(isTouched && !isMatch)}
      />
      <p className={`text-red-500 text-sm mt-2 ml-2 ${showError ? 'visible' : 'invisible'}`}>
        {t({
          ko: '비밀번호가 일치하지 않습니다',
          en: 'Passwords do not match'
        }, language)}
      </p>
      <button
        type="submit"
        className="bg-black hover:bg-gray-700 rounded-full text-white py-3 mt-4 disabled:bg-gray-400 disabled:cursor-not-allowed"
        disabled={isPending || !isMatch}
      >
        {
          isPending
            ? t({ ko: '재설정 중...', en: 'Resetting...' }, language)
            : t({ ko: '비밀번호 재설정', en: 'Reset Password' }, language)
        }
      </button>
    </form>
  )
}
