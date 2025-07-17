'use client'

import { useLanguage } from "@/contexts/LanguageContext";
import { translate } from "@/locale";
import { MessageKey } from "@/locale/message";

export default function LocaleText({ messageKey }: { messageKey: MessageKey }) {
  const { language } = useLanguage();

  return <>{translate(messageKey, language)}</>;
}
