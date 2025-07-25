import { Metadata } from "next";
import { Locale } from "@/locale";
import { commonMetadata, pageMetadata } from "@/_meta/metadata-definition";

export function generatePageMetadata(pageKey: keyof typeof pageMetadata, lang: Locale): Metadata {
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
      url: process.env.NEXT_PUBLIC_BASE_URL || '/',
      siteName: commonMeta[lang].siteName,
      type: 'website',
      images: [{ url: '/thumbnail.png' }],
    }
  }
}