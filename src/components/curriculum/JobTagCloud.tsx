'use client';

import { useMemo } from 'react';
import { jobData } from '@/data/constants/jobData';
import { MessageKey } from '@/locale/message';
import LocaleText from '@/components/common/LocaleText';
import clsx from 'clsx';

interface JobTagCloudProps {
  industryId: string | null;
  selectedJobs: Set<string>;
  onToggle: (jobId: string) => void;
}

export default function JobTagCloud({ industryId, selectedJobs, onToggle }: JobTagCloudProps) {
  const currentJobs = useMemo(() => {
    if (!industryId) return [];
    const industry = jobData.find((item) => item.id === industryId);
    return industry ? industry.jobs : [];
  }, [industryId]);

  if (!industryId) {
    return null;
  }

  return (
    <div className="mt-12">
      <p className="py-4 text-xl font-semibold text-neutral-900">
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
              'rounded-full border-2 px-4 py-2 text-sm transition-colors duration-200',
              selectedJobs.has(job.id)
                ? 'border-neutral-800 bg-neutral-800 text-white'
                : 'border-neutral-300 bg-white hover:bg-neutral-100'
            )}
          >
            <LocaleText keyOrLocaleData={job.nameKey} />
          </button>
        ))}
      </div>
    </div>
  );
}
