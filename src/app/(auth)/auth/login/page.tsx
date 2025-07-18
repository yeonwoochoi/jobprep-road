import LoginInput from "@/components/auth/LoginInput";
import Link from "next/link";
import { MessageKey } from "@/locale/message";
import LocaleText from "@/components/common/LocaleText";
import { Logo } from "@/components/ui/Logo";
import { FadeIn } from "@/components/ui/FadeIn";

export default function Page() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center pb-24">
      <FadeIn>
        <div className="w-full sm:w-lg px-8">
          <div>
            <Link href="/">
              <Logo className="h-8" />
            </Link>
            <p className="mt-10 text-2xl font-bold">
              <LocaleText messageKey={MessageKey.AUTH_LOGIN_TITLE} />
            </p>
            <p className="mt-2 text-sm text-gray-700">
              <LocaleText messageKey={MessageKey.AUTH_NO_ACCOUNT} />
              <Link href="/auth/signup" className="font-bold hover:underline ml-2" aria-label="Sign up">
                <LocaleText messageKey={MessageKey.AUTH_SIGNUP_CTA} />
              </Link>
            </p>
          </div>
          <LoginInput />
        </div>
      </FadeIn>
    </div>
  )
}