'use client'

import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/locale";
import { MessageKey } from "@/locale/message";

export default function LocaleText({ keyOrLocaleData }: { keyOrLocaleData: MessageKey | { ko: string; en: string } }) {
  const { language } = useLanguage();

  return <>{t(keyOrLocaleData, language)}</>;
}
