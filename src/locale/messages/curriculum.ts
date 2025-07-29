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
  GENERATE_LOADING_TEXT_1 = 'GENERATE_LOADING_TEXT_1',
  GENERATE_LOADING_TEXT_2 = 'GENERATE_LOADING_TEXT_2',
  GENERATE_LOADING_TEXT_3 = 'GENERATE_LOADING_TEXT_3',

  // --- Result Alert ---
  GENERATE_SUCCESS_ALERT = 'GENERATE_SUCCESS_ALERT',
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

  // --- Loading State ---
  [CurriculumMessageKey.GENERATE_LOADING_TEXT_1]: {
    ko: '이력서를 기반으로 당신의 강점을 분석하고 있어요...',
    en: 'Analyzing your strengths based on your resume...',
  },
  [CurriculumMessageKey.GENERATE_LOADING_TEXT_2]: {
    ko: '목표 직무에 필요한 핵심 역량을 확인하는 중...',
    en: 'Identifying core competencies for your target job...',
  },
  [CurriculumMessageKey.GENERATE_LOADING_TEXT_3]: {
    ko: '두 데이터를 비교해 맞춤 학습 계획을 짜고 있어요!',
    en: 'Creating your personalized learning plan by comparing the data!',
  },

  // --- Result Alert ---
  [CurriculumMessageKey.GENERATE_SUCCESS_ALERT]: {
    ko: '커리큘럼 생성이 완료되었습니다!',
    en: 'Curriculum generated successfully!',
  },
} as const;