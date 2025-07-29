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
import GenerateLoading from "@/components/common/GenerateLoading";

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
  const [isLoading, setIsLoading] = useState(false)

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

    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 12000));

    setIsLoading(false);
    // TODO: 생성 완료 후 결과 페이지로 리다이렉트 또는 결과 표시
    alert('생성이 완료되었습니다!');
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
      {isLoading && <GenerateLoading/>}
    </>
  )
}