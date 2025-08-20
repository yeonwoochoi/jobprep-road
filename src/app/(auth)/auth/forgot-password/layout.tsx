import { ReactNode } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import LocaleText from '@/components/common/LocaleText';
import { MessageKey } from '@/locale/message';
import { generatePageMetadata } from '@/_meta/metadata-utils';
import { cookies } from 'next/headers';
import { Locale } from '@/locale';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const lang = (cookieStore.get('lang' as any)?.value as Locale) || 'ko';
  return generatePageMetadata('forgot-password', lang);
}

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <div>
        <Link href="/">
          <Logo className="inline-block h-8" />
        </Link>
        <p className="mt-10 text-2xl font-bold">
          <LocaleText keyOrLocaleData={MessageKey.AUTH_FORGOT_PASSWORD_TITLE} />
        </p>
      </div>
      {children}
    </>
  );
}
