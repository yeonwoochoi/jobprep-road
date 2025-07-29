'use client'

import { useMemo } from "react";
import { jobData } from "@/data/jobData";
import { MessageKey } from "@/locale/message";
import LocaleText from "@/components/common/LocaleText";
import clsx from "clsx";

interface JobTagCloudProps {
  industryId: string | null
  selectedJobs: Set<string>
  onToggle: (jobId: string) => void
}

export default function JobTagCloud({ industryId, selectedJobs, onToggle }: JobTagCloudProps) {
  const currentJobs = useMemo(() => {
    if (!industryId) return []
    const industry = jobData.find(item => item.id === industryId)
    return industry ? industry.jobs : []
  }, [industryId])

  if (!industryId) {
    return null
  }

  return (
    <div className="mt-12">
      <p className="text-xl font-semibold text-neutral-900 py-4">
        <LocaleText keyOrLocaleData={MessageKey.GENERATE_STEP1_JOB_LABEL} />{' '}
        <span className="text-sm font-normal text-neutral-500">
          <LocaleText keyOrLocaleData={MessageKey.GENERATE_STEP1_JOB_MULTI_SELECTABLE} />
        </span>
      </p>
      <div className="flex flex-wrap gap-3 pt-4">
        {currentJobs.map((job) => (
          <button
            key={job.id}
            onClick={() => onToggle(job.id)}
            className={clsx(
              'px-4 py-2 border-2 rounded-full transition-colors duration-200 text-sm',
              selectedJobs.has(job.id)
                ? 'bg-neutral-800 text-white border-neutral-800'
                : 'bg-white border-neutral-300 hover:bg-neutral-100'
            )}
          >
            <LocaleText keyOrLocaleData={job.nameKey}/>
          </button>
        ))}
      </div>
    </div>
  )
}