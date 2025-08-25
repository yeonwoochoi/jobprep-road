import { CurriculumMeta } from '@/types/curriculum'

export interface CurriculumSummary extends CurriculumMeta {
  id: string
}

export interface ProfileData {
  id: string // 사용자 ID
  name: string
  email: string
  curriculums: CurriculumSummary[] // 사용자가 생성한 커리큘럼 목록
}
