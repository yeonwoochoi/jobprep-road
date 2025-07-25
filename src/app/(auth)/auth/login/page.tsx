import LoginInput from "@/components/auth/LoginInput";
import Link from "next/link";
import { MessageKey } from "@/locale/message";
import LocaleText from "@/components/common/LocaleText";
import { Logo } from "@/components/ui/Logo";
import { generatePageMetadata } from "@/_meta/metadata-utils";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { Locale } from "@/locale";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies()
  const lang = (cookieStore.get('lang' as any)?.value as Locale) || 'ko'
  return generatePageMetadata("login", lang)
}

export default function Page() {
  return (
    <>
      <div>
        <Link href="/">
          <Logo className="inline-block h-8" />
        </Link>
        <p className="mt-10 text-2xl font-bold">
          <LocaleText keyOrLocaleData={MessageKey.AUTH_LOGIN_TITLE} />
        </p>
        <p className="mt-2 text-sm text-gray-700">
          <LocaleText keyOrLocaleData={MessageKey.AUTH_NO_ACCOUNT} />
          <Link href="/auth/signup" className="font-bold hover:underline ml-2" aria-label="Sign up">
            <LocaleText keyOrLocaleData={MessageKey.AUTH_SIGNUP_CTA} />
          </Link>
        </p>
      </div>
      <LoginInput />
    </>
  )
}