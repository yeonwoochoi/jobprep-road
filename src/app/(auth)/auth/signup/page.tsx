import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import LocaleText from '@/components/common/LocaleText';
import { MessageKey } from '@/locale/message';
import SignupInput from '@/components/auth/SignupInput';
import { generatePageMetadata } from '@/_meta/metadata-utils';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Locale } from '@/locale';

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const lang = (cookieStore.get('lang' as any)?.value as Locale) || 'ko';
  return generatePageMetadata('signup', lang);
}

export default function Page() {
  return (
    <>
      <div>
        <Link href="/">
          <Logo className="inline-block h-8" />
        </Link>
        <p className="mt-10 text-2xl font-bold">
          <LocaleText keyOrLocaleData={MessageKey.AUTH_SIGN_UP_TITLE} />
        </p>
        <p className="mt-2 text-sm text-gray-700">
          <LocaleText keyOrLocaleData={MessageKey.AUTH_ALREADY_REGISTERED} />
          <Link href="/auth/login" className="ml-2 font-bold hover:underline" aria-label="Sign in">
            <LocaleText keyOrLocaleData={{ ko: '로그인', en: 'Sign in' }} />
          </Link>
          <LocaleText keyOrLocaleData={{ ko: '하세요', en: '' }} />
        </p>
      </div>
      <SignupInput />
    </>
  );
}
