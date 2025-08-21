import LocaleText from '@/components/common/LocaleText'
import { MessageKey } from '@/locale/message'
import ClientPage from '@/app/(auth)/auth/forgot-password/ClientPage'

export default function Page() {
  return (
    <>
      <div>
        <p className="mt-2 text-sm text-gray-700">
          <LocaleText keyOrLocaleData={MessageKey.AUTH_FORGOT_PASSWORD_DESCRIPTION_1} />
          <br />
          <LocaleText keyOrLocaleData={MessageKey.AUTH_FORGOT_PASSWORD_DESCRIPTION_2} />
        </p>
      </div>
      <ClientPage />
    </>
  )
}
