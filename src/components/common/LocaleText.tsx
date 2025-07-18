'use client'

import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/locale";
import { MessageKey } from "@/locale/message";

export default function LocaleText({ messageKey }: { messageKey: MessageKey }) {
  const { language } = useLanguage();

  return <>{t(messageKey, language)}</>;
}
