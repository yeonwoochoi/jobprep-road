import { LocaleData } from '@/locale/message';

export enum HomeMessageKey {
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
}

export const homeMessages: LocaleData = {
  // HOME
  [HomeMessageKey.HOME_TITLE_PREFIX]: {
    ko: '취준로드 -',
    en: 'Job Prep Road -',
  },
  [HomeMessageKey.HOME_TITLE_SUFFIX]: {
    ko: '맞춤형 취업 준비 로드맵',
    en: 'Your Personalized Career Plan',
  },
  [HomeMessageKey.HOME_DESCRIPTION]: {
    ko: '원하는 직무 기준, 공통 채용 요구 분석 후 3개월 학습 로드맵 제공해 드립니다.',
    en: 'We analyze common hiring requirements based on your target role and provide a 3-month personalized learning roadmap.',
  },
  [HomeMessageKey.HOME_BUTTON]: {
    ko: '바로가기',
    en: 'Get Started',
  },

  // Home - Get Started
  [HomeMessageKey.HOME_SERVICE_EYEBROW]: {
    ko: '서비스',
    en: 'Services',
  },
  [HomeMessageKey.HOME_SERVICE_TITLE]: {
    ko: '취업 준비, 이제 맞춤형으로!',
    en: 'Job Prep, Now Personalized!',
  },
  [HomeMessageKey.HOME_SERVICE_SUBTITLE]: {
    ko: 'AI가 당신의 업종과 직무에 딱 맞는 커리큘럼을 설계해 드립니다.',
    en: 'AI designs a curriculum perfectly tailored to your industry and role.',
  },
  [HomeMessageKey.HOME_SERVICE_STEP_1_TITLE]: {
    ko: '1단계. 업종/직무 선택',
    en: 'Step 1. Select Industry/Role',
  },
  [HomeMessageKey.HOME_SERVICE_STEP_1_DESC]: {
    ko: '취업 희망 업종과 직무를 선택하면, 최신 채용 공고 데이터를 분석해 핵심 요구사항을 뽑아드립니다.',
    en: "Choose your desired industry and role, and we'll analyze the latest job postings to extract core requirements.",
  },
  [HomeMessageKey.HOME_SERVICE_STEP_2_TITLE]: {
    ko: '2단계. AI 커리큘럼 생성',
    en: 'Step 2. AI Curriculum Generation',
  },
  [HomeMessageKey.HOME_SERVICE_STEP_2_DESC]: {
    ko: 'AI가 스킬트리, 추천 학습 자료, 타임라인까지 개인 맞춤형 학습 계획을 즉시 생성해드립니다.',
    en: 'AI instantly generates a personalized learning plan, including skill trees, recommended study materials, and a timeline.',
  },
  [HomeMessageKey.HOME_SERVICE_STEP_3_TITLE]: {
    ko: '3단계. 쉽고 빠른 준비',
    en: 'Step 3. Easy & Fast Preparation',
  },
  [HomeMessageKey.HOME_SERVICE_STEP_3_DESC]: {
    ko: '생성한 커리큘럼은 저장, 공유, PDF 내보내기까지 지원! 번거로운 검색 없이 준비 끝.',
    en: 'Your generated curriculum supports saving, sharing, and PDF export! Finish your prep without tedious searching.',
  },

  // HOME - Why us?
  [HomeMessageKey.HOME_WHY_US_EYEBROW]: {
    ko: '차별점',
    en: 'Why Us?',
  },
  [HomeMessageKey.HOME_WHY_US_TITLE]: {
    ko: '왜 취준로드인가?',
    en: 'Why Job Prep Road?',
  },
  [HomeMessageKey.HOME_WHY_US_SUBTITLE_1]: {
    ko: '취업 준비, 더 이상 막막하지 않습니다.',
    en: 'Job preparation is no longer overwhelming.',
  },
  [HomeMessageKey.HOME_WHY_US_SUBTITLE_2]: {
    ko: '취준로드가 직접 분석하고 맞춤형으로 안내합니다.',
    en: 'Job Prep Road analyzes your needs and provides personalized guidance.',
  },
  [HomeMessageKey.HOME_WHY_US_FEATURE_1_TITLE]: {
    ko: '최신 기업 요구사항 자동 반영',
    en: 'Real-time Reflection of Latest Company Requirements',
  },
  [HomeMessageKey.HOME_WHY_US_FEATURE_1_DESC]: {
    ko: '잡코리아, 사람인 등 실시간 채용 공고 크롤링으로 항상 최신 데이터를 반영합니다.',
    en: 'Always updated with the latest data through real-time job posting crawling from JobKorea, Saramin, and more.',
  },
  [HomeMessageKey.HOME_WHY_US_FEATURE_2_TITLE]: {
    ko: 'AI가 설계하는 개인 맞춤 커리큘럼',
    en: 'AI-Designed Personalized Curriculum',
  },
  [HomeMessageKey.HOME_WHY_US_FEATURE_2_DESC]: {
    ko: 'AI가 당신의 상황과 목표에 맞춰 핵심 스킬트리와 최적 학습 경로를 자동으로 생성합니다.',
    en: 'AI automatically generates core skill trees and optimal learning paths tailored to your situation and goals.',
  },
  [HomeMessageKey.HOME_WHY_US_FEATURE_3_TITLE]: {
    ko: '간편한 정보 입력 및 분석',
    en: 'Effortless Information Input & Analysis',
  },
  [HomeMessageKey.HOME_WHY_US_FEATURE_3_DESC]: {
    ko: '이력서 등 취업에 필요한 파일을 업로드하면 즉시 분석하여 시간을 절약합니다.',
    en: 'Simply upload necessary employment files like your resume for instant analysis, saving you time.',
  },

  // HOME - Contact
  [HomeMessageKey.HOME_CONTACT_TITLE]: {
    ko: '프로젝트 개선을 위한 의견을 부탁드립니다.',
    en: 'We’d love your feedback.',
  },
  [HomeMessageKey.HOME_CONTACT_FEEDBACK_BUTTON]: {
    ko: '피드백 보내기',
    en: 'Send Feedback',
  },
  [HomeMessageKey.HOME_CONTACT_EMAIL]: {
    ko: '이메일',
    en: 'Email',
  },
  [HomeMessageKey.HOME_CONTACT_PHONE]: {
    ko: '연락처',
    en: 'Phone',
  },

  // HEADER
  [HomeMessageKey.HEADER_COMPANY_NAME]: {
    ko: '취준로드',
    en: 'Job Prep Road',
  },
  [HomeMessageKey.HEADER_LOGIN_BUTTON]: {
    ko: '로그인',
    en: 'Login',
  },
  [HomeMessageKey.HEADER_HOME]: {
    ko: '서비스 소개',
    en: 'Service Introduction',
  },
  [HomeMessageKey.HEADER_CURRICULUM]: {
    ko: '커리큘럼 생성',
    en: 'Generate Curriculum',
  },
  [HomeMessageKey.HEADER_PROFILE]: {
    ko: '마이페이지',
    en: 'My Page',
  },
  [HomeMessageKey.HEADER_FEEDBACK]: {
    ko: '피드백 보내기',
    en: 'Send Feedback',
  },
  [HomeMessageKey.HEADER_CONTACT_EMAIL_TITLE]: {
    ko: '이메일',
    en: 'Email',
  },
  [HomeMessageKey.HEADER_CONTACT_PHONE_TITLE]: {
    ko: '연락처',
    en: 'Phone',
  },
  [HomeMessageKey.HEADER_CONTACT_SOCIAL_TITLE]: {
    ko: '소셜 링크',
    en: 'Social Links',
  },
  [HomeMessageKey.HEADER_CONTACT_LANGUAGE_TITLE]: {
    ko: '언어',
    en: 'Language',
  },
} as const;
