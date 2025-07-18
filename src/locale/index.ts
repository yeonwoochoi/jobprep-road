import { messages, MessageKey  } from "@/locale/message"

export type Locale = 'en' | 'ko'

export function t(key: MessageKey, locale: 'ko' | 'en'): string {
  return messages[key]?.[locale] || messages[key]?.ko || ''
}
