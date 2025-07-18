export type LocaleData = Record<string, { 'ko': string, 'en': string }>

export enum MessageKey {
  // HOME
  HOME_TITLE_PREFIX = 'HOME_TITLE_PREFIX',
  HOME_TITLE_SUFFIX = 'HOME_TITLE_SUFFIX',
  HOME_DESCRIPTION = 'HOME_DESCRIPTION',
  HOME_BUTTON = 'HOME_BUTTON',

  // HEADER
  HEADER_COMPANY_NAME = 'HEADER_COMPANY_NAME',
  HEADER_LOGIN_BUTTON = 'HEADER_LOGIN_BUTTON',
  HEADER_HOME = 'HEADER_HOME',
  HEADER_CURRICULUM = 'HEADER_CURRICULUM',
  HEADER_PROFILE = 'HEADER_PROFILE',
  HEADER_FEEDBACK = 'HEADER_FEEDBACK',
  HEADER_CONTACT_EMAIL_TITLE = 'CONTACT_EMAIL_TITLE',
  HEADER_CONTACT_PHONE_TITLE = 'CONTACT_PHONE_TITLE',
  HEADER_CONTACT_SOCIAL_TITLE = 'CONTACT_SOCIAL_TITLE',
  HEADER_CONTACT_LANGUAGE_TITLE = 'CONTACT_LANGUAGE_TITLE',

  // AUTH
  AUTH_EMAIL_LABEL = 'AUTH_EMAIL_LABEL',
  AUTH_PASSWORD_LABEL = 'AUTH_PASSWORD_LABEL',
  AUTH_LOGIN_TITLE = 'AUTH_LOGIN_TITLE',
  AUTH_NO_ACCOUNT = 'AUTH_NO_ACCOUNT',
  AUTH_SIGNUP_CTA = 'AUTH_SIGNUP_CTA',
  AUTH_SUBMIT_BUTTON = 'AUTH_SUBMIT_BUTTON',
  AUTH_SUBMIT_PENDING = 'AUTH_SUBMIT_PENDING',

  // API MESSAGE
  REQUIRED_EMAIL_PASSWORD = 'REQUIRED_EMAIL_PASSWORD',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',

  // ALERT MESSAGE
  COPY_SUCCESS = 'COPY_SUCCESS',
  COPY_FAILURE = 'COPY_FAILURE',
}

export const messages: LocaleData = {
  // HOME
  [MessageKey.HOME_TITLE_PREFIX]: {
    ko: '취준로드 -',
    en: 'Job Prep Road -',
  },
  [MessageKey.HOME_TITLE_SUFFIX]: {
    ko: '맞춤형 취업 준비 로드맵',
    en: 'Your Personalized Career Plan',
  },
  [MessageKey.HOME_DESCRIPTION]: {
    ko: '원하는 직무 기준, 공통 채용 요구 분석 후\n3개월 학습 로드맵 제공해 드립니다.',
    en: 'We analyze common hiring requirements based on your target role\nand provide a 3-month personalized learning roadmap.',
  },
  [MessageKey.HOME_BUTTON]: {
    ko: '바로가기',
    en: 'Get Started',
  },

  // HEADER
  [MessageKey.HEADER_COMPANY_NAME]: {
    ko: '취준로드',
    en: 'Job Prep Road',
  },
  [MessageKey.HEADER_LOGIN_BUTTON]: {
    ko: '로그인',
    en: 'Login',
  },
  [MessageKey.HEADER_HOME]: {
    ko: '서비스 소개',
    en: 'Service Introduction',
  },
  [MessageKey.HEADER_CURRICULUM]: {
    ko: '커리큘럼 생성',
    en: 'Generate Curriculum',
  },
  [MessageKey.HEADER_PROFILE]: {
    ko: '마이페이지',
    en: 'My Page',
  },
  [MessageKey.HEADER_FEEDBACK]: {
    ko: '피드백 보내기',
    en: 'Send Feedback',
  },
  [MessageKey.HEADER_CONTACT_EMAIL_TITLE]: {
    ko: '이메일',
    en: 'Email',
  },
  [MessageKey.HEADER_CONTACT_PHONE_TITLE]: {
    ko: '연락처',
    en: 'Phone',
  },
  [MessageKey.HEADER_CONTACT_SOCIAL_TITLE]: {
    ko: '소셜 링크',
    en: 'Social Links',
  },
  [MessageKey.HEADER_CONTACT_LANGUAGE_TITLE]: {
    ko: '언어',
    en: 'Language',
  },

  // AUTH
  [MessageKey.AUTH_EMAIL_LABEL]: {
    ko: '이메일',
    en: 'Email',
  },
  [MessageKey.AUTH_PASSWORD_LABEL]: {
    ko: '비밀번호',
    en: 'Password',
  },
  [MessageKey.AUTH_LOGIN_TITLE]: {
    ko: '계정 로그인',
    en: 'Login to your account',
  },
  [MessageKey.AUTH_NO_ACCOUNT]: {
    ko: '계정이 없으신가요?',
    en: 'Don’t have an account?',
  },
  [MessageKey.AUTH_SIGNUP_CTA]: {
    ko: '회원가입하기',
    en: 'Sign Up',
  },
  [MessageKey.AUTH_SUBMIT_BUTTON]: {
    ko: '로그인',
    en: 'Login',
  },
  [MessageKey.AUTH_SUBMIT_PENDING]: {
    ko: '로그인 중...',
    en: 'Logging in...',
  },

  // API MESSAGE
  [MessageKey.REQUIRED_EMAIL_PASSWORD]: {
    ko: '이메일과 비밀번호를 모두 입력해주세요.',
    en: 'Please enter both email and password.',
  },
  [MessageKey.UNKNOWN_ERROR]: {
    ko: '알 수 없는 서버 오류가 발생했습니다.',
    en: 'An unknown server error occurred.',
  },

  // ALERT MESSAGE
  [MessageKey.COPY_SUCCESS]: {
    ko: '복사되었습니다!',
    en: 'Copied to clipboard!',
  },
  [MessageKey.COPY_FAILURE]: {
    ko: '복사에 실패했습니다.',
    en: 'Failed to copy.',
  },
} as const
