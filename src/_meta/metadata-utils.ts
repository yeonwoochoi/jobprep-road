import { Metadata } from "next";
import { cookies } from "next/headers";
import { Locale } from "@/locale";
import { commonMetadata, pageMetadata } from "@/_meta/metadata-definition";

export async function generateRootMetadata(): Promise<Metadata> {
  const cookieStore = await cookies()
  const lang = (cookieStore.get('lang')?.value as Locale) || 'ko'

  const commonMeta = commonMetadata

  return {
    title: {
      default: commonMeta[lang].siteName,
      template: `${commonMeta[lang].siteName} - %s`
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
      card: 'summary_large_image'
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000')
  }
}

export async function generatePageMetadata(pageKey: keyof typeof pageMetadata): Promise<Metadata> {
  const cookieStore = await cookies()
  const lang = (cookieStore.get('lang')?.value as Locale) || 'ko'

  const pageMeta = pageMetadata[pageKey];
  const commonMeta = commonMetadata;

  if (!pageMeta) {
    console.warn(`[Metadata] No metadata found for key: ${pageKey}`);
    return {
      title: commonMeta[lang].siteName,
      description: commonMeta[lang].description
    }
  }

  const title = pageMeta[lang].title
  const description = pageMeta[lang].description

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: process.env.NEXT_PUBLIC_BASE_URL || '/', // 환경 변수 사용 권장
      siteName: commonMeta[lang].siteName,
      type: 'website',
      images: [{ url: '/thumbnail.png' }], // 공통 OG 이미지 설정
    }
  }
}