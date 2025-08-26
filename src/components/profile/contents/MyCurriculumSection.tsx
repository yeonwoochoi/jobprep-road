import { CurriculumSummary } from '@/types/profile'
import { useProfileData } from '@/contexts/ProfileDataContext'
import LocaleText from '@/components/common/LocaleText'
import { MessageKey } from '@/locale/message'
import { Eye, Trash2 } from 'lucide-react'
import { Level } from '@/types/curriculum'
import { t } from '@/locale'
import { useLanguage } from '@/contexts/LanguageContext'
import { useState } from 'react'
import { useToast } from '@/hooks/useToast'
import { Button } from '@/components/ui/Button'
import { useRouter } from 'next/navigation'

interface CurriculumCardProps {
  curriculum: CurriculumSummary
  removeCurriculum: (id: string) => Promise<void>
}

const isoDateRegex = /^(\d{4})-(\d{2})-(\d{2}).*$/
const levelMap: Record<Level, keyof typeof MessageKey> = {
  entry: MessageKey.LEVEL_ENTRY,
  junior: MessageKey.LEVEL_JUNIOR,
  senior: MessageKey.LEVEL_SENIOR,
}
const formatDate = (isoDate: string) => isoDate.replace(isoDateRegex, '$1년 $2월 $3일')

function CurriculumCard({ curriculum, removeCurriculum }: CurriculumCardProps) {
  const createdAt = formatDate(curriculum.createdAt)
  const { language } = useLanguage()
  const [isDeleting, setIsDeleting] = useState<boolean>(false)
  const { toastSuccess, toastError } = useToast()
  const router = useRouter()

  const handleRemoveClick = async () => {
    if (isDeleting) return
    if (
      confirm(t({ ko: '정말 삭제하시겠습니까?', en: 'Are you sure you want to delete?' }, language))
    ) {
      try {
        setIsDeleting(true)
        await removeCurriculum(curriculum.id)
        toastSuccess(t({ ko: '삭제에 성공했습니다.', en: 'Delete successfully.' }, language))
      } catch (error) {
        toastError(t({ ko: '삭제에 실패했습니다.', en: 'Failed to delete.' }, language))
      } finally {
        setIsDeleting(false)
      }
    } else {
      setIsDeleting(false)
    }
  }

  const handleDetailClick = () => {
    if (isDeleting) return
    router.push(`/curriculum/${curriculum.id}`)
  }

  return (
    <div className="mb-6 flex flex-col gap-6 rounded-md border-2 border-neutral-200 px-6 py-6 sm:gap-4">
      <div className="flex flex-col items-start justify-center sm:flex-row sm:justify-between">
        <p className="mb-2 text-xl font-bold sm:mr-2">{curriculum.title}</p>
        <p className="flex-shrink-0 text-neutral-400">{createdAt}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {curriculum.targetJobs.map((job, index) => (
          <span key={index} className="text-md rounded-full bg-neutral-200 px-4 font-light">
            #{job}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <div className="text-md hidden text-neutral-400 sm:block">
          <LocaleText keyOrLocaleData={MessageKey.PROFILE_DIFFICULTY} />:
          <span className="ml-2">
            <LocaleText keyOrLocaleData={levelMap[curriculum.level]} />
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={handleRemoveClick}
            disabled={isDeleting}
            className="cursor-pointer text-neutral-400 hover:text-neutral-500 disabled:cursor-not-allowed disabled:text-neutral-300 disabled:hover:text-neutral-300"
            aria-label="Delete curriculum"
          >
            <Trash2 className="h-6 w-6" />
          </button>

          <Button
            onClick={handleDetailClick}
            className="cursor-pointer rounded-md disabled:cursor-not-allowed disabled:bg-neutral-800"
            disabled={isDeleting}
          >
            <div className="flex items-center">
              <Eye className="mr-2 h-5 w-5" />
              <LocaleText keyOrLocaleData={MessageKey.PROFILE_CURRICULUM_DETAIL_BUTTON} />
            </div>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function MyCurriculumSection() {
  const { profileData, removeCurriculum } = useProfileData()

  return profileData.curriculums.map((v) => (
    <CurriculumCard key={v.id} curriculum={v} removeCurriculum={removeCurriculum} />
  ))
}
