'use client'

import LocaleText from '@/components/common/LocaleText'
import { MessageKey } from '@/locale/message'
import { jobData } from '@/data/constants/jobData'
import clsx from 'clsx'

interface IndustrySelectorProps {
  selectedIndustry: string | null
  onSelect: (industryId: string) => void
}

export default function IndustrySelector({ selectedIndustry, onSelect }: IndustrySelectorProps) {
  return (
    <div className="mt-12">
      <p className="py-4 text-xl font-semibold text-neutral-900">
        <LocaleText keyOrLocaleData={MessageKey.GENERATE_STEP1_INDUSTRY_LABEL} />
      </p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
        {jobData.map(({ id, icon: Icon, nameKey }) => (
          <div
            key={id}
            onClick={() => onSelect(id)}
            className={clsx(
              'flex h-full min-w-0 cursor-pointer flex-col items-center justify-center rounded-xl border-2 p-4 text-center transition-all duration-200',
              selectedIndustry === id
                ? 'shadow-wd border-neutral-800 bg-neutral-100'
                : 'border-neutral-200 hover:border-neutral-400 hover:shadow-sm'
            )}
          >
            <Icon className="mb-2 h-6 w-6 text-neutral-600" />
            <span className="text-sm font-semibold break-words text-neutral-800">
              <LocaleText keyOrLocaleData={nameKey} />
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
