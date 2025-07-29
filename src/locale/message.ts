export type LocaleData = Record<string, { 'ko': string, 'en': string }>

export enum MessageKey {
  // HOME
  HOME_TITLE_PREFIX = 'HOME_TITLE_PREFIX',
  HOME_TITLE_SUFFIX = 'HOME_TITLE_SUFFIX',
  HOME_DESCRIPTION = 'HOME_DESCRIPTION',
  HOME_BUTTON = 'HOME_BUTTON',

  // Home - Get started
  HOME_SERVICE_EYEBROW = 'HOME_SERVICE_EYEBROW',
  HOME_SERVICE_TITLE = 'HOME_SERVICE_TITLE',
  HOME_SERVICE_SUBTITLE = 'HOME_SERVICE_SUBTITLE',
  HOME_SERVICE_STEP_1_TITLE = 'HOME_SERVICE_STEP_1_TITLE',
  HOME_SERVICE_STEP_1_DESC = 'HOME_SERVICE_STEP_1_DESC',
  HOME_SERVICE_STEP_2_TITLE = 'HOME_SERVICE_STEP_2_TITLE',
  HOME_SERVICE_STEP_2_DESC = 'HOME_SERVICE_STEP_2_DESC',
  HOME_SERVICE_STEP_3_TITLE = 'HOME_SERVICE_STEP_3_TITLE',
  HOME_SERVICE_STEP_3_DESC = 'HOME_SERVICE_STEP_3_DESC',

  // HOME - Why us?
  HOME_WHY_US_EYEBROW = 'HOME_WHY_US_EYEBROW',
  HOME_WHY_US_TITLE = 'HOME_WHY_US_TITLE',
  HOME_WHY_US_SUBTITLE_1 = 'HOME_WHY_US_SUBTITLE_1',
  HOME_WHY_US_SUBTITLE_2 = 'HOME_WHY_US_SUBTITLE_2',
  HOME_WHY_US_FEATURE_1_TITLE = 'HOME_WHY_US_FEATURE_1_TITLE',
  HOME_WHY_US_FEATURE_1_DESC = 'HOME_WHY_US_FEATURE_1_DESC',
  HOME_WHY_US_FEATURE_2_TITLE = 'HOME_WHY_US_FEATURE_2_TITLE',
  HOME_WHY_US_FEATURE_2_DESC = 'HOME_WHY_US_FEATURE_2_DESC',
  HOME_WHY_US_FEATURE_3_TITLE = 'HOME_WHY_US_FEATURE_3_TITLE',
  HOME_WHY_US_FEATURE_3_DESC = 'HOME_WHY_US_FEATURE_3_DESC',

  // HOME - Contact
  HOME_CONTACT_TITLE = 'HOME_CONTACT_TITLE',
  HOME_CONTACT_FEEDBACK_BUTTON = 'HOME_CONTACT_FEEDBACK_BUTTON',
  HOME_CONTACT_EMAIL = 'HOME_CONTACT_EMAIL',
  HOME_CONTACT_PHONE = 'HOME_CONTACT_PHONE',


  // HEADER
  HEADER_COMPANY_NAME = 'HEADER_COMPANY_NAME',
  HEADER_LOGIN_BUTTON = 'HEADER_LOGIN_BUTTON',
  HEADER_HOME = 'HEADER_HOME',
  HEADER_CURRICULUM = 'HEADER_CURRICULUM',
  HEADER_PROFILE = 'HEADER_PROFILE',
  HEADER_FEEDBACK = 'HEADER_FEEDBACK',
  HEADER_CONTACT_EMAIL_TITLE = 'HEADER_CONTACT_EMAIL_TITLE',
  HEADER_CONTACT_PHONE_TITLE = 'HEADER_CONTACT_PHONE_TITLE',
  HEADER_CONTACT_SOCIAL_TITLE = 'HEADER_CONTACT_SOCIAL_TITLE',
  HEADER_CONTACT_LANGUAGE_TITLE = 'HEADER_CONTACT_LANGUAGE_TITLE',

  // AUTH
  AUTH_EMAIL_LABEL = 'AUTH_EMAIL_LABEL',
  AUTH_PASSWORD_LABEL = 'AUTH_PASSWORD_LABEL',
  AUTH_LOGIN_TITLE = 'AUTH_LOGIN_TITLE',
  AUTH_NO_ACCOUNT = 'AUTH_NO_ACCOUNT',
  AUTH_SIGNUP_CTA = 'AUTH_SIGNUP_CTA',
  AUTH_SIGN_UP_TITLE = 'AUTH_SIGN_UP_TITLE',
  AUTH_ALREADY_REGISTERED = 'AUTH_ALREADY_REGISTERED',
  AUTH_FORGOT_PASSWORD_BUTTON = 'AUTH_FORGOT_PASSWORD_BUTTON',
  AUTH_FORGOT_PASSWORD_TITLE = 'AUTH_FORGOT_PASSWORD_TITLE',
  AUTH_FORGOT_PASSWORD_DESCRIPTION_1 = 'AUTH_FORGOT_PASSWORD_DESCRIPTION_1',
  AUTH_FORGOT_PASSWORD_DESCRIPTION_2 = 'AUTH_FORGOT_PASSWORD_DESCRIPTION_2',

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
    ko: '원하는 직무 기준, 공통 채용 요구 분석 후 3개월 학습 로드맵 제공해 드립니다.',
    en: 'We analyze common hiring requirements based on your target role and provide a 3-month personalized learning roadmap.',
  },
  [MessageKey.HOME_BUTTON]: {
    ko: '바로가기',
    en: 'Get Started',
  },

  // Home - Get Started
  [MessageKey.HOME_SERVICE_EYEBROW]: {
    ko: '서비스',
    en: 'Services',
  },
  [MessageKey.HOME_SERVICE_TITLE]: {
    ko: '취업 준비, 이제 맞춤형으로!',
    en: 'Job Prep, Now Personalized!',
  },
  [MessageKey.HOME_SERVICE_SUBTITLE]: {
    ko: 'AI가 당신의 업종과 직무에 딱 맞는 커리큘럼을 설계해 드립니다.',
    en: 'AI designs a curriculum perfectly tailored to your industry and role.',
  },
  [MessageKey.HOME_SERVICE_STEP_1_TITLE]: {
    ko: '1단계. 업종/직무 선택',
    en: 'Step 1. Select Industry/Role',
  },
  [MessageKey.HOME_SERVICE_STEP_1_DESC]: {
    ko: '취업 희망 업종과 직무를 선택하면, 최신 채용 공고 데이터를 분석해 핵심 요구사항을 뽑아드립니다.',
    en: 'Choose your desired industry and role, and we\'ll analyze the latest job postings to extract core requirements.',
  },
  [MessageKey.HOME_SERVICE_STEP_2_TITLE]: {
    ko: '2단계. AI 커리큘럼 생성',
    en: 'Step 2. AI Curriculum Generation',
  },
  [MessageKey.HOME_SERVICE_STEP_2_DESC]: {
    ko: 'AI가 스킬트리, 추천 학습 자료, 타임라인까지 개인 맞춤형 학습 계획을 즉시 생성해드립니다.',
    en: 'AI instantly generates a personalized learning plan, including skill trees, recommended study materials, and a timeline.',
  },
  [MessageKey.HOME_SERVICE_STEP_3_TITLE]: {
    ko: '3단계. 쉽고 빠른 준비',
    en: 'Step 3. Easy & Fast Preparation',
  },
  [MessageKey.HOME_SERVICE_STEP_3_DESC]: {
    ko: '생성한 커리큘럼은 저장, 공유, PDF 내보내기까지 지원! 번거로운 검색 없이 준비 끝.',
    en: 'Your generated curriculum supports saving, sharing, and PDF export! Finish your prep without tedious searching.',
  },

  // HOME - Why us?
  [MessageKey.HOME_WHY_US_EYEBROW]: {
    ko: '차별점',
    en: 'Why Us?',
  },
  [MessageKey.HOME_WHY_US_TITLE]: {
    ko: '왜 취준로드인가?',
    en: 'Why Job Prep Road?',
  },
  [MessageKey.HOME_WHY_US_SUBTITLE_1]: {
    ko: '취업 준비, 더 이상 막막하지 않습니다.',
    en: 'Job preparation is no longer overwhelming.',
  },
  [MessageKey.HOME_WHY_US_SUBTITLE_2]: {
    ko: '취준로드가 직접 분석하고 맞춤형으로 안내합니다.',
    en: 'Job Prep Road analyzes your needs and provides personalized guidance.',
  },
  [MessageKey.HOME_WHY_US_FEATURE_1_TITLE]: {
    ko: '최신 기업 요구사항 자동 반영',
    en: 'Real-time Reflection of Latest Company Requirements',
  },
  [MessageKey.HOME_WHY_US_FEATURE_1_DESC]: {
    ko: '잡코리아, 사람인 등 실시간 채용 공고 크롤링으로 항상 최신 데이터를 반영합니다.',
    en: 'Always updated with the latest data through real-time job posting crawling from JobKorea, Saramin, and more.',
  },
  [MessageKey.HOME_WHY_US_FEATURE_2_TITLE]: {
    ko: 'AI가 설계하는 개인 맞춤 커리큘럼',
    en: 'AI-Designed Personalized Curriculum',
  },
  [MessageKey.HOME_WHY_US_FEATURE_2_DESC]: {
    ko: 'AI가 당신의 상황과 목표에 맞춰 핵심 스킬트리와 최적 학습 경로를 자동으로 생성합니다.',
    en: 'AI automatically generates core skill trees and optimal learning paths tailored to your situation and goals.',
  },
  [MessageKey.HOME_WHY_US_FEATURE_3_TITLE]: {
    ko: '간편한 정보 입력 및 분석',
    en: 'Effortless Information Input & Analysis',
  },
  [MessageKey.HOME_WHY_US_FEATURE_3_DESC]: {
    ko: '이력서 등 취업에 필요한 파일을 업로드하면 즉시 분석하여 시간을 절약합니다.',
    en: 'Simply upload necessary employment files like your resume for instant analysis, saving you time.',
  },

  // HOME - Contact
  [MessageKey.HOME_CONTACT_TITLE]: {
    ko: '프로젝트 개선을 위한 의견을 부탁드립니다.',
    en: 'We’d love your feedback.',
  },
  [MessageKey.HOME_CONTACT_FEEDBACK_BUTTON]: {
    ko: '피드백 보내기',
    en: 'Send Feedback',
  },
  [MessageKey.HOME_CONTACT_EMAIL]: {
    ko: '이메일',
    en: 'Email',
  },
  [MessageKey.HOME_CONTACT_PHONE]: {
    ko: '연락처',
    en: 'Phone',
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
  [MessageKey.AUTH_SIGN_UP_TITLE]: {
    ko: '회원가입하기',
    en: 'Sign up for an account',
  },
  [MessageKey.AUTH_ALREADY_REGISTERED]: {
    ko: '이미 회원이신가요?',
    en: 'Already registered?',
  },
  [MessageKey.AUTH_FORGOT_PASSWORD_BUTTON]: {
    ko: '비밀번호를 잊으셨나요?',
    en: 'Forgot password?',
  },
  [MessageKey.AUTH_FORGOT_PASSWORD_TITLE]: {
    ko: '비밀번호 재설정',
    en: 'Forgot password',
  },
  [MessageKey.AUTH_FORGOT_PASSWORD_DESCRIPTION_1]: {
    ko: '가입했던 이메일을 입력해주세요.',
    en: 'Enter the email you signed up with.',
  },
  [MessageKey.AUTH_FORGOT_PASSWORD_DESCRIPTION_2]: {
    ko: '비밀번호 재설정 메일을 보내드립니다.',
    en: 'We’ll send you an email to reset your password.',
  },

  // NOT FOUND
  [MessageKey.NOT_FOUND_TITLE]: {
    ko: '404',
    en: '404',
  },
  [MessageKey.NOT_FOUND_SUBTITLE]: {
    ko: '페이지 없음',
    en: 'Page not found',
  },
  [MessageKey.NOT_FOUND_DESCRIPTION]: {
    ko: '죄송합니다. 요청하신 페이지를 찾을 수 없습니다.',
    en: 'Sorry, we couldn’t find the page you’re looking for.',
  },
  [MessageKey.NOT_FOUND_HOME_BUTTON]: {
    ko: '홈으로',
    en: 'Go back home',
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
