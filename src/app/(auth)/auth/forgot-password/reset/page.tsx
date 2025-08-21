'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent, startTransition, useActionState, useEffect, useState } from 'react'
import { fetchApi } from '@/lib/api'
import { FormActionResult } from '@/utils/formActions'
import { resetNewPassword } from '@/actions/auth/reset-new-password.action'
import { useLanguage } from '@/contexts/LanguageContext'
import { useToast } from '@/hooks/useToast'
import { t } from '@/locale'
import { TextField } from '@/components/ui/TextField'

export default function Page() {
  const searchParams = useSearchParams()
  const email = searchParams.get('email') as string
  const router = useRouter()

  const { language } = useLanguage()
  const { toastSuccess, toastError } = useToast()

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isTouched, setIsTouched] = useState(false)
  const [isMatch, setIsMatch] = useState(true)
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    // 1. 토큰 유효성 검사
    const validateToken = async () => {
      const response = await fetchApi('/api/auth/verify-reset-token', {
        method: 'POST',
      })

      if (response.status === 'error') {
        throw new Error('Invalid token')
      }
    }
    validateToken().catch(() => router.replace(`/auth/forgot-password?error=no_token`))

    // 2. beforeunload 핸들러 추가 (페이지 언로드 시 실행)
    const handleUnload = () => {
      const url = '/api/auth/clear-reset-token'
      const data = new Blob([JSON.stringify({})], { type: 'application/json' })
      navigator.sendBeacon(url, data)
    }

    window.addEventListener('beforeunload', handleUnload)

    // 3. 컴포넌트 언마운트 시 실행될 클린업 함수
    return () => {
      // 이벤트 리스너 제거
      window.removeEventListener('beforeunload', handleUnload)

      // 기존 API 호출 유지
      fetchApi('/api/auth/clear-reset-token', { method: 'POST' }).catch(console.error)
    }
  }, [router])
  const [state, formAction, isPending] = useActionState<FormActionResult<null>, FormData>(
    resetNewPassword,
    {
      status: 'idle',
    }
  )

  useEffect(() => {
    if (state) {
      if (state.status === 'error') {
        toastError(state.error)
      } else if (state.status === 'success') {
        toastSuccess(
          t(
            {
              ko: '비밀번호 재설정이 완료되었습니다.',
              en: 'Your password has been successfully reset.',
            },
            language
          )
        )
        router.push('/auth/login')
      }
    }
  }, [state])

  useEffect(() => {
    if (password || confirmPassword) {
      setIsTouched(true)
      setIsMatch(password === confirmPassword)
    }
  }, [password, confirmPassword])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsTouched(true)

    if (!isMatch) {
      toastError(
        t(
          {
            ko: '비밀번호가 일치하지 않습니다',
            en: 'Passwords do not match',
          },
          language
        )
      )
      return
    }

    // FormData 생성 및 서버 액션 실행
    const formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)

    startTransition(() => {
      formAction(formData as FormData)
    })
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 grid w-full grid-cols-1">
      <input name="email" value={email} hidden readOnly />
      <TextField
        label={t({ ko: '새 비밀번호', en: 'New Password' }, language)}
        name="newPassword"
        type="password"
        required
        autoComplete="new-password"
        disabled={isPending}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onBlur={() => setShowError(isTouched && !isMatch)}
        className="mb-8"
      />
      <TextField
        label={t({ ko: '비밀번호 확인', en: 'Password Confirm' }, language)}
        name="passwordConfirm"
        type="password"
        required
        autoComplete="new-password"
        disabled={isPending}
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        onBlur={() => setShowError(isTouched && !isMatch)}
      />
      <p className={`mt-2 ml-2 text-sm text-red-500 ${showError ? 'visible' : 'invisible'}`}>
        {t(
          {
            ko: '비밀번호가 일치하지 않습니다',
            en: 'Passwords do not match',
          },
          language
        )}
      </p>
      <button
        type="submit"
        className="mt-4 rounded-full bg-black py-3 text-white hover:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-400"
        disabled={isPending || !isMatch}
      >
        {isPending
          ? t({ ko: '재설정 중...', en: 'Resetting...' }, language)
          : t({ ko: '비밀번호 재설정', en: 'Reset Password' }, language)}
      </button>
    </form>
  )
}
