'use client'

import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import LocaleText from "@/components/common/LocaleText";
import { MessageKey } from "@/locale/message";
import VerificationForm from "@/components/auth/VerificationForm";

export default function Page() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const email = searchParams.get('email') as string

  const handleVerificationSuccess = (token: string) => {
    router.push(`/auth/forgot-password/reset?email=${encodeURIComponent(email)}&token=${token}`)
  }

  return (
    <>
      <div>
        <Link href="/">
          <Logo className="h-8" />
        </Link>
        <p className="mt-10 text-2xl font-bold">
          <LocaleText keyOrLocaleData={MessageKey.AUTH_FORGOT_PASSWORD_TITLE} />
        </p>
      </div>
      <VerificationForm email={email} onSuccess={handleVerificationSuccess} />
    </>
  )
}