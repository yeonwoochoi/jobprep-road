import { LocaleData } from "@/locale/message";

export enum CurriculumMessageKey {
  // --- Header ---
  GENERATE_HEADER_TITLE = 'GENERATE_HEADER_TITLE',
  GENERATE_HEADER_DESCRIPTION = 'GENERATE_HEADER_DESCRIPTION',

  // --- Step 1: Goal Setting ---
  GENERATE_STEP1_TITLE = 'GENERATE_STEP1_TITLE',
  GENERATE_STEP1_INDUSTRY_LABEL = 'GENERATE_STEP1_INDUSTRY_LABEL',
  GENERATE_STEP1_JOB_LABEL = 'GENERATE_STEP1_JOB_LABEL',
  GENERATE_STEP1_JOB_MULTI_SELECTABLE = 'GENERATE_STEP1_JOB_MULTI_SELECTABLE',

  // --- Step 2: File Upload ---
  GENERATE_STEP2_TITLE = 'GENERATE_STEP2_TITLE',

  // --- File Upload Component ---
  GENERATE_FILE_DROPZONE_TEXT_1 = 'GENERATE_FILE_DROPZONE_TEXT_1',
  GENERATE_FILE_DROPZONE_BUTTON = 'GENERATE_FILE_DROPZONE_BUTTON',
  GENERATE_FILE_HELPER_TEXT_1 = 'GENERATE_FILE_HELPER_TEXT_1',
  GENERATE_FILE_HELPER_TEXT_2 = 'GENERATE_FILE_HELPER_TEXT_2',
  GENERATE_FILE_SUPPORTED_FORMATS = 'GENERATE_FILE_SUPPORTED_FORMATS',
  GENERATE_FILE_UNSUPPORTED_ALERT = 'GENERATE_FILE_UNSUPPORTED_ALERT',

  // --- Footer & CTA Button ---
  GENERATE_CTA_BUTTON = 'GENERATE_CTA_BUTTON',

  // --- Loading State ---
  GENERATE_STATUS_PREPARING = 'GENERATE_STATUS_PREPARING',
  GENERATE_STATUS_GENERATING = 'GENERATE_STATUS_GENERATING',
  GENERATE_STATUS_SUCCESS = 'GENERATE_STATUS_SUCCESS',
  GENERATE_STATUS_ERROR = 'GENERATE_STATUS_ERROR',
}

export enum CurriculumUITextKey {
  // Meta data
  CURRICULUM_TARGET_JOB = 'CURRICULUM_TARGET_JOB',
  CURRICULUM_RECOMMENDED_LEVEL = 'CURRICULUM_RECOMMENDED_LEVEL',
  CURRICULUM_CREATED_AT = 'CURRICULUM_CREATED_AT',

  // Level
  LEVEL_ENTRY = 'LEVEL_ENTRY',
  LEVEL_JUNIOR = 'LEVEL_JUNIOR',
  LEVEL_SENIOR = 'LEVEL_SENIOR',

  // Importance
  IMPORTANCE_REQUIRED = 'IMPORTANCE_REQUIRED',
  IMPORTANCE_RECOMMENDED = 'IMPORTANCE_RECOMMENDED',
  IMPORTANCE_NICE_TO_HAVE = 'IMPORTANCE_NICE_TO_HAVE',

  // Table of Contents
  TABLE_OF_CONTENTS = 'TABLE_OF_CONTENTS',
  RECOMMENDED_RESOURCES = 'RECOMMENDED_RESOURCES',
  INTRODUCTION = 'INTRODUCTION',
  SKILL_STACK = 'SKILL_STACK',
  WEEK_1 = 'WEEK_1',
  WEEK_2 = 'WEEK_2',
  WEEK_3 = 'WEEK_3',
  WEEK_4 = 'WEEK_4',
  WEEK_5 = 'WEEK_5',
  WEEK_6 = 'WEEK_6',
  WEEK_7 = 'WEEK_7',
  WEEK_8 = 'WEEK_8',
  WEEK_9 = 'WEEK_9',
  WEEK_10 = 'WEEK_10',
  WEEK_11 = 'WEEK_11',
  WEEK_12 = 'WEEK_12',

  // Resource Type
  RESOURCE_TYPE_COURSE = 'RESOURCE_TYPE_COURSE',
  RESOURCE_TYPE_ARTICLE = 'RESOURCE_TYPE_ARTICLE',
  RESOURCE_TYPE_BOOK = 'RESOURCE_TYPE_BOOK',
  RESOURCE_TYPE_OFFICIAL_DOCS = 'RESOURCE_TYPE_OFFICIAL_DOCS',
  RESOURCE_TYPE_PROJECT = 'RESOURCE_TYPE_PROJECT',
}

export const curriculumMessages: LocaleData = {
  // --- Header ---
  [CurriculumMessageKey.GENERATE_HEADER_TITLE]: {
    ko: 'AI 기반 맞춤 커리큘럼 생성',
    en: 'AI-Generated Personalized Curriculum',
  },
  [CurriculumMessageKey.GENERATE_HEADER_DESCRIPTION]: {
    ko: '준비된 이력서나 자기소개서 파일을 업로드하고, 목표 직무를 선택해주세요.',
    en: 'Upload your resume or cover letter and select your target job.',
  },

  // --- Step 1: Goal Setting ---
  [CurriculumMessageKey.GENERATE_STEP1_TITLE]: {
    ko: '어떤 커리어를 목표하시나요?',
    en: 'What is your career goal?',
  },
  [CurriculumMessageKey.GENERATE_STEP1_INDUSTRY_LABEL]: {
    ko: '업종 선택',
    en: 'Select Industry',
  },
  [CurriculumMessageKey.GENERATE_STEP1_JOB_LABEL]: {
    ko: '직무 선택',
    en: 'Select Job',
  },
  [CurriculumMessageKey.GENERATE_STEP1_JOB_MULTI_SELECTABLE]: {
    ko: '(다중 선택 가능)',
    en: '(Multiple selections possible)',
  },

  // --- Step 2: File Upload ---
  [CurriculumMessageKey.GENERATE_STEP2_TITLE]: {
    ko: '분석할 서류 파일을 올려주세요',
    en: 'Upload your documents for analysis',
  },

  // --- File Upload Component ---
  [CurriculumMessageKey.GENERATE_FILE_DROPZONE_TEXT_1]: {
    ko: '파일을 이곳에 드래그하거나',
    en: 'Drag and drop your file here, or',
  },
  [CurriculumMessageKey.GENERATE_FILE_DROPZONE_BUTTON]: {
    ko: '파일 선택하기',
    en: 'Choose a file',
  },
  [CurriculumMessageKey.GENERATE_FILE_HELPER_TEXT_1]: {
    ko: '📄 이력서, 자기소개서, 포트폴리오 등 어떤 파일이든 좋아요.',
    en: '📄 Any file like a resume, cover letter, or portfolio is fine.',
  },
  [CurriculumMessageKey.GENERATE_FILE_HELPER_TEXT_2]: {
    ko: '🔒 업로드된 파일은 커리큘럼 생성 직후 완전히 삭제돼요.',
    en: '🔒 Uploaded files are permanently deleted right after generation.',
  },
  [CurriculumMessageKey.GENERATE_FILE_SUPPORTED_FORMATS]: {
    ko: '(지원 형식: PDF, DOCX, HWP, TXT)',
    en: '(Supported formats: PDF, DOCX, HWP, TXT)',
  },
  [CurriculumMessageKey.GENERATE_FILE_UNSUPPORTED_ALERT]: {
    ko: '지원하지 않는 파일 형식입니다. (지원 형식: PDF, DOCX, HWP, TXT)',
    en: 'Unsupported file format. (Supported: PDF, DOCX, HWP, TXT)',
  },

  // --- Footer & CTA Button ---
  [CurriculumMessageKey.GENERATE_CTA_BUTTON]: {
    ko: '커리큘럼 생성하기',
    en: 'Generate Curriculum',
  },

  // --- Generation Status Messages ---
  [CurriculumMessageKey.GENERATE_STATUS_PREPARING]: {
    ko: '요청 데이터를 준비하고 있어요...',
    en: 'Preparing your request data...',
  },
  [CurriculumMessageKey.GENERATE_STATUS_GENERATING]: {
    ko: 'AI가 맞춤형 커리큘럼을 생성하고 있어요...',
    en: 'The AI is generating your personalized curriculum...',
  },
  [CurriculumMessageKey.GENERATE_STATUS_SUCCESS]: {
    ko: '커리큘럼 생성이 완료되었어요!',
    en: 'Curriculum generation complete!',
  },
  [CurriculumMessageKey.GENERATE_STATUS_ERROR]: {
    ko: '오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
    en: 'An error occurred. Please try again in a moment.',
  },
} as const;

export const curriculumUIMessages = {
  // Curriculum Info
  [CurriculumUITextKey.CURRICULUM_TARGET_JOB]: { ko: '대상 직무', en: 'Target Jobs' },
  [CurriculumUITextKey.CURRICULUM_RECOMMENDED_LEVEL]: { ko: '추천 레벨', en: 'Recommended Level' },
  [CurriculumUITextKey.CURRICULUM_CREATED_AT]: { ko: '생성일', en: 'Created At' },

  // Level
  [CurriculumUITextKey.LEVEL_ENTRY]: { ko: '신입', en: 'Entry' },
  [CurriculumUITextKey.LEVEL_JUNIOR]: { ko: '주니어', en: 'Junior' },
  [CurriculumUITextKey.LEVEL_SENIOR]: { ko: '경력', en: 'Senior' },

  // Importance
  [CurriculumUITextKey.IMPORTANCE_REQUIRED]: { ko: '필수', en: 'Required' },
  [CurriculumUITextKey.IMPORTANCE_RECOMMENDED]: { ko: '권장', en: 'Recommended' },
  [CurriculumUITextKey.IMPORTANCE_NICE_TO_HAVE]: { ko: '알아두면 좋음', en: 'Nice to have' },

  // Table of Contents
  [CurriculumUITextKey.TABLE_OF_CONTENTS]: { ko: '목차', en: 'Table of Contents' },
  [CurriculumUITextKey.INTRODUCTION]: { ko: '개요 및 소개', en: 'Introduction' },
  [CurriculumUITextKey.SKILL_STACK]: { ko: '기술 스택', en: 'Skill Stack' },
  [CurriculumUITextKey.RECOMMENDED_RESOURCES]: { ko: '추천 학습 자료', en: 'Recommended Resources' },
  [CurriculumUITextKey.WEEK_1]: { ko: '1주차', en: 'Week 1' },
  [CurriculumUITextKey.WEEK_2]: { ko: '2주차', en: 'Week 2' },
  [CurriculumUITextKey.WEEK_3]: { ko: '3주차', en: 'Week 3' },
  [CurriculumUITextKey.WEEK_4]: { ko: '4주차', en: 'Week 4' },
  [CurriculumUITextKey.WEEK_5]: { ko: '5주차', en: 'Week 5' },
  [CurriculumUITextKey.WEEK_6]: { ko: '6주차', en: 'Week 6' },
  [CurriculumUITextKey.WEEK_7]: { ko: '7주차', en: 'Week 7' },
  [CurriculumUITextKey.WEEK_8]: { ko: '8주차', en: 'Week 8' },
  [CurriculumUITextKey.WEEK_9]: { ko: '9주차', en: 'Week 9' },
  [CurriculumUITextKey.WEEK_10]: { ko: '10주차', en: 'Week 10' },
  [CurriculumUITextKey.WEEK_11]: { ko: '11주차', en: 'Week 11' },
  [CurriculumUITextKey.WEEK_12]: { ko: '12주차', en: 'Week 12' },

  // Resource Type
  [CurriculumUITextKey.RESOURCE_TYPE_COURSE]: { ko: '강의', en: 'Course' },
  [CurriculumUITextKey.RESOURCE_TYPE_ARTICLE]: { ko: '아티클', en: 'Article' },
  [CurriculumUITextKey.RESOURCE_TYPE_BOOK]: { ko: '도서', en: 'Book' },
  [CurriculumUITextKey.RESOURCE_TYPE_OFFICIAL_DOCS]: { ko: '공식문서', en: 'Docs' },
  [CurriculumUITextKey.RESOURCE_TYPE_PROJECT]: { ko: '프로젝트', en: 'Project' },
} as const;