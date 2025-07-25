import { ReactNode } from "react";
import { cookies } from 'next/headers';
import { LanguageProvider } from '@/contexts/LanguageContext';

import '@/styles/tailwind.css'
import { ToastProvider } from "@/components/ui/ToastProvider";
import { generateRootMetadata } from "@/_meta/metadata-utils";

export const metadata = generateRootMetadata()

export default async function RootLayout({ children }: { children: ReactNode }) {
  const cookieStore = await cookies();
  const langCookie = cookieStore.get('lang' as any);
  const lang = langCookie?.value === 'en' ? 'en' : 'ko';

  return (
    <html lang={lang}>
      <body>
        <LanguageProvider initialLanguage={lang}>
          {children}
        </LanguageProvider>
        <ToastProvider />
      </body>
    </html>
  )
}
