import { messages, MessageKey } from "@/locale/message"

export type Locale = 'en' | 'ko'

export function t(keyOrLocaleData: MessageKey | { ko: string; en: string }, locale: Locale): string {
  if (typeof keyOrLocaleData === 'string') {
    return messages[keyOrLocaleData]?.[locale] || messages[keyOrLocaleData]?.ko || ''
  } else {
    return keyOrLocaleData[locale]
  }
}