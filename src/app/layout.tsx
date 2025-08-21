import { ReactNode } from 'react'
import { cookies } from 'next/headers'
import { LanguageProvider } from '@/contexts/LanguageContext'

import '@/styles/tailwind.css'
import { ToastProvider } from '@/components/ui/ToastProvider'
import { Metadata } from 'next'
import { Locale } from '@/locale'
import { commonMetadata } from '@/_meta/metadata-definition'

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies()
  const lang = (cookieStore.get('lang' as any)?.value as Locale) || 'ko'

  const commonMeta = commonMetadata

  return {
    title: {
      default: commonMeta[lang].siteName,
      template: `${commonMeta[lang].siteName} - %s`,
    },
    description: commonMeta[lang].description,
    openGraph: {
      siteName: commonMeta[lang].siteName,
      url: process.env.NEXT_PUBLIC_BASE_URL || '/',
      locale: lang,
      type: 'website',
      images: [{ url: '/thumbnail.png' }], // 공통 OG 이미지 설정
    },
    twitter: {
      card: 'summary_large_image',
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  }
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const cookieStore = await cookies()
  const langCookie = cookieStore.get('lang' as any)
  const lang = langCookie?.value === 'en' ? 'en' : 'ko'

  return (
    <html lang={lang}>
      <body>
        <LanguageProvider initialLanguage={lang}>{children}</LanguageProvider>
        <ToastProvider />
      </body>
    </html>
  )
}
