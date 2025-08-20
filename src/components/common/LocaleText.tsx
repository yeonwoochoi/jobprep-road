'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/locale';
import { MessageKey } from '@/locale/message';

interface LocaleTextProps {
  keyOrLocaleData: keyof typeof MessageKey | { ko: string; en: string };
}

export default function LocaleText({ keyOrLocaleData }: LocaleTextProps) {
  const { language } = useLanguage();

  return <>{t(keyOrLocaleData, language)}</>;
}
