'use client'

import { SectionIntro } from "@/components/ui/SectionIntro";
import LocaleText from "@/components/common/LocaleText";
import { MessageKey } from "@/locale/message";
import { Container } from "@/components/ui/Container";
import { CurriculumMessageKey } from "@/locale/messages/curriculum";
import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import IndustrySelector from "@/components/common/IndustrySelector";
import JobTagCloud from "@/components/common/JobTagCloud";
import ResumeUploader from "@/components/common/ResumeUploader";
import GenerateLoading, { GenerationStatus } from "@/components/common/GenerateLoading";
import { useRouter } from "next/navigation";
import { dynamicFetch } from "@/lib/api";
import { Curriculum } from "@/types/curriculum";
import { useLanguage } from "@/contexts/LanguageContext";
import { industryIdToNameKeyMap, jobIdToNameKeyMap } from "@/data/jobData";
import { t } from "@/locale";

interface StepSectionProps {
  step: number;
  titleKey: CurriculumMessageKey;
  children: ReactNode;
}

function StepSection({ step, titleKey, children }: StepSectionProps) {
  return (
    <FadeIn>
      <h2 className="mb-6 block font-display text-base font-semibold uppercase">
        STEP {step}
      </h2>
      <h3 className="text-3xl font-bold text-neutral-900">
        <LocaleText keyOrLocaleData={titleKey}/>
      </h3>
      <div className="mt-6">
        {children}
      </div>
    </FadeIn>
  )
}

export default function Page() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null)
  const [selectedJobs, setSelectedJobs] = useState(new Set<string>())
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [currentStatus, setCurrentStatus] = useState<GenerationStatus>('idle')
  const isLoading = useMemo(() => currentStatus !== 'idle', [currentStatus]);

  const router = useRouter()
  const { language } = useLanguage()

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault()
      event.returnValue = ''
    }
    if (isLoading) {
      window.addEventListener('beforeunload', handleBeforeUnload)
    }
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [isLoading])

  const handleIndustrySelect = useCallback((industryId: string) => {
    setSelectedIndustry(industryId);
    setSelectedJobs(new Set());
  }, [])

  const handleJobToggle = useCallback((jobId: string) => {
    setSelectedJobs((prev) => {
      const newJobs = new Set(prev)
      if (newJobs.has(jobId)) {
        newJobs.delete(jobId)
      } else {
        newJobs.add(jobId)
      }
      return newJobs
    })
  }, [])

  const handleAddFiles = useCallback((newFiles: File[]) => {
    setUploadedFiles((prevFiles) => {
      const existingFiles= new Set(prevFiles.map(f => `${f.name}-${f.size}`))
      const uniqueFiles = newFiles.filter(f => !existingFiles.has(`${f.name}-${f.size}`))
      return [...prevFiles, ...uniqueFiles]
    })
  }, [])

  const handleRemoveFiles = useCallback((fileToRemove: File) => {
    setUploadedFiles((prevFiles) => prevFiles.filter((file) => file !== fileToRemove))
  }, [])

  const isGenerateButtonEnabled = useMemo(() => {
    return selectedJobs.size > 0 && uploadedFiles.length > 0
  }, [uploadedFiles, selectedJobs])

  const handleGenerate = async () => {
    if (!isGenerateButtonEnabled || isLoading) return;

    setCurrentStatus('preparing');

    try {
      const industryNameKey = industryIdToNameKeyMap.get(selectedIndustry!);
      const industryText = industryNameKey ? t(industryNameKey, language) : selectedIndustry;
      const targetJobTexts = Array.from(selectedJobs).map(jobId => {
        const jobNameKey = jobIdToNameKeyMap.get(jobId);
        // 만약 키를 찾으면 번역된 텍스트를, 못찾으면 원래 id를 반환
        return jobNameKey ? t(jobNameKey, language).replace(/^#/, "") : jobId;
      });


      const formData = new FormData()
      formData.append('industry', industryText!)
      formData.append('targetJobs', JSON.stringify(targetJobTexts))
      uploadedFiles.forEach(file => {
        formData.append('files', file)
      })

      setCurrentStatus('generating')
      const res = await dynamicFetch<Curriculum>('/api/curriculum/generate', {
        method: 'POST',
        body: formData as BodyInit
      });

      if (res.status === 'success' && res.data) {
        setCurrentStatus('success')

        // TODO: 생성된 데이터를 어딘가에 저장하고 결과 페이지로 이동
        // 예를 들어, Recoil, Zustand, Redux 같은 상태 관리 라이브러리에 저장하거나,
        // router.push의 query 파라미터로 간단한 ID만 넘겨주고,
        // 결과 페이지에서 해당 ID로 데이터를 다시 조회할 수 있다.
        // 지금은 alert로 생성된 데이터의 일부를 보여준다.
        alert(`커리큘럼 생성 성공!\n제목: ${res.data.metadata.title}`);
        // router.push(`/curriculum/${some_id}`); // 실제 결과 페이지 이동 로직
      } else if (res.status === 'error') {
        throw new Error(res.error);
      }
    } catch (error) {
      setCurrentStatus('error')
      alert(error)
    } finally {
      setCurrentStatus('idle')
    }
  }

  return (
    <>
      <FadeInStagger className="mt-24 sm:mt-32 lg:mt-40">
        <SectionIntro
          title={<LocaleText keyOrLocaleData={MessageKey.GENERATE_HEADER_TITLE}/>}
        >
          <p>
            <LocaleText keyOrLocaleData={MessageKey.GENERATE_HEADER_DESCRIPTION} />
          </p>
        </SectionIntro>
        <Container>
          <div className="flex flex-col gap-y-20 py-20">
            <StepSection step={1} titleKey={MessageKey.GENERATE_STEP1_TITLE}>
              <IndustrySelector selectedIndustry={selectedIndustry} onSelect={handleIndustrySelect}/>
              <JobTagCloud industryId={selectedIndustry} selectedJobs={selectedJobs} onToggle={handleJobToggle}/>
            </StepSection>
            <StepSection step={2} titleKey={MessageKey.GENERATE_STEP2_TITLE}>
              <ResumeUploader uploadedFiles={uploadedFiles} onAddFiles={handleAddFiles} onRemoveFile={handleRemoveFiles}/>
            </StepSection>
            <FadeIn>
              <button
                onClick={handleGenerate}
                disabled={!isGenerateButtonEnabled || isLoading}
                className="bg-neutral-950 text-white hover:bg-neutral-800 rounded-4xl cursor-pointer w-full py-4 text-lg font-bold disabled:bg-neutral-300 disabled:cursor-not-allowed"
              >
                <LocaleText keyOrLocaleData={MessageKey.GENERATE_CTA_BUTTON}/>
              </button>
            </FadeIn>
          </div>
        </Container>
      </FadeInStagger>
      {isLoading && <GenerateLoading status={currentStatus}/>}
    </>
  )
}