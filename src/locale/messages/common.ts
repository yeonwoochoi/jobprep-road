import { LocaleData } from '@/locale/message';

export enum CommonMessageKey {
  // NOT FOUND
  NOT_FOUND_TITLE = 'NOT_FOUND_TITLE',
  NOT_FOUND_SUBTITLE = 'NOT_FOUND_SUBTITLE',
  NOT_FOUND_DESCRIPTION = 'NOT_FOUND_DESCRIPTION',
  NOT_FOUND_HOME_BUTTON = 'NOT_FOUND_HOME_BUTTON',

  // API MESSAGE
  REQUIRED_EMAIL_PASSWORD = 'REQUIRED_EMAIL_PASSWORD',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',

  // ALERT MESSAGE
  COPY_SUCCESS = 'COPY_SUCCESS',
  COPY_FAILURE = 'COPY_FAILURE',
}

export const commonMessages: LocaleData = {
  // NOT FOUND
  [CommonMessageKey.NOT_FOUND_TITLE]: {
    ko: '404',
    en: '404',
  },
  [CommonMessageKey.NOT_FOUND_SUBTITLE]: {
    ko: '페이지 없음',
    en: 'Page not found',
  },
  [CommonMessageKey.NOT_FOUND_DESCRIPTION]: {
    ko: '죄송합니다. 요청하신 페이지를 찾을 수 없습니다.',
    en: 'Sorry, we couldn’t find the page you’re looking for.',
  },
  [CommonMessageKey.NOT_FOUND_HOME_BUTTON]: {
    ko: '홈으로',
    en: 'Go back home',
  },

  // API MESSAGE
  [CommonMessageKey.REQUIRED_EMAIL_PASSWORD]: {
    ko: '이메일과 비밀번호를 모두 입력해주세요.',
    en: 'Please enter both email and password.',
  },
  [CommonMessageKey.UNKNOWN_ERROR]: {
    ko: '알 수 없는 서버 오류가 발생했습니다.',
    en: 'An unknown server error occurred.',
  },

  // ALERT MESSAGE
  [CommonMessageKey.COPY_SUCCESS]: {
    ko: '복사되었습니다!',
    en: 'Copied to clipboard!',
  },
  [CommonMessageKey.COPY_FAILURE]: {
    ko: '복사에 실패했습니다.',
    en: 'Failed to copy.',
  },
} as const;
