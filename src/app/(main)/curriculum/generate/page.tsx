import { Locale } from "@/locale";
import { generatePageMetadata } from "@/_meta/metadata-utils";
import { Metadata } from "next";
import { cookies } from "next/headers";
import ClientPage from "@/app/(main)/curriculum/generate/client.page";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies()
  const lang = (cookieStore.get('lang' as any)?.value as Locale) || 'ko'
  return generatePageMetadata("curriculum/generate", lang)
}

export default function Page() {
  return (
    <ClientPage/>
  )
}