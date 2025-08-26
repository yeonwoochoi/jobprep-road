import { useToast } from '@/hooks/useToast'
import { FormEvent, startTransition, useActionState, useEffect, useState } from 'react'
import { useProfileData } from '@/contexts/ProfileDataContext'
import { TextField } from '@/components/ui/TextField'
import { t } from '@/locale'
import { useLanguage } from '@/contexts/LanguageContext'
import { FormActionResult } from '@/utils/formActions'
import { changePasswordAction } from '@/actions/auth/change-password.action'

export default function ChangePasswordSection() {
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newConfirmPassword, setNewConfirmPassword] = useState('')
  const [isMatch, setIsMatch] = useState(false)
  const [isTouched, setIsTouched] = useState(false) // 새 비밀번호, 비밀번호 확인 입력중인지
  const [showError, setShowError] = useState(false)

  const { profileData } = useProfileData()
  const { toastSuccess, toastError } = useToast()
  const { language } = useLanguage()

  const [state, formAction, isPending] = useActionState<FormActionResult<null>, FormData>(
    changePasswordAction,
    { status: 'idle' }
  )

  const resetFields = () => {
    setPassword('')
    setNewPassword('')
    setNewConfirmPassword('')
    setIsMatch(false)
    setIsTouched(false)
    setShowError(false)
  }

  useEffect(() => {
    if (state.status === 'error') {
      toastError(state.error)
    } else if (state.status === 'success') {
      toastSuccess(
        t(
          {
            ko: '비밀번호 변경이 완료되었습니다.',
            en: 'Your password has been changed successfully.',
          },
          language
        )
      )
      resetFields()
    }
  }, [state])

  useEffect(() => {
    if (newPassword || newConfirmPassword) {
      setIsTouched(true)
      setIsMatch(newPassword === newConfirmPassword)
    }
  }, [newPassword, newConfirmPassword])

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

    const formData = new FormData()
    formData.append('email', profileData.email)
    formData.append('password', password)
    formData.append('newPassword', newPassword)

    startTransition(() => {
      formAction(formData as FormData)
    })
  }

  return (
    <form onSubmit={handleSubmit} className="align-center my-6 flex flex-col px-6">
      <TextField
        label={t({ ko: '현재 비밀번호', en: 'Current Password' }, language)}
        name="password"
        type="password"
        required
        autoComplete="current-password"
        disabled={isPending}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        label={t({ ko: '새 비밀번호', en: 'New Password' }, language)}
        name="newPassword"
        type="password"
        required
        autoComplete="new-password"
        disabled={isPending}
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        onBlur={() => setShowError(!isMatch && isTouched)}
        className="my-12"
      />
      <TextField
        label={t({ ko: '비밀번호 확인', en: 'Password Confirm' }, language)}
        name="passwordConfirm"
        type="password"
        required
        autoComplete="new-password"
        disabled={isPending}
        value={newConfirmPassword}
        onChange={(e) => setNewConfirmPassword(e.target.value)}
        onBlur={() => setShowError(isTouched && !isMatch)}
      />
      <p className={`mt-2 mb-12 ml-2 text-sm text-red-500 ${showError ? 'visible' : 'invisible'}`}>
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
        className="rounded-full bg-black py-3 text-white hover:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-400"
        disabled={isPending || !isMatch}
      >
        {isPending
          ? t({ ko: '변경 중...', en: 'Changing...' }, language)
          : t({ ko: '비밀번호 변경', en: 'Change Password' }, language)}
      </button>
    </form>
  )
}
