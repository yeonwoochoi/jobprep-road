'use client'

import { Logo } from "@/components/ui/Logo";
import Link from "next/link";
import LocaleText from "@/components/common/LocaleText";
import { MessageKey } from "@/locale/message";
import EmailForm from "@/components/auth/EmailForm";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter()

  const handleSuccess = (email: string) => {
    router.push(`/auth/forgot-password/verify?email=${encodeURIComponent(email)}`)
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
        <p className="mt-2 text-sm text-gray-700">
          <LocaleText keyOrLocaleData={MessageKey.AUTH_FORGOT_PASSWORD_DESCRIPTION_1} />
          <br/>
          <LocaleText keyOrLocaleData={MessageKey.AUTH_FORGOT_PASSWORD_DESCRIPTION_2} />
        </p>
      </div>
      <EmailForm onSuccess={handleSuccess}/>
    </>
  )
}