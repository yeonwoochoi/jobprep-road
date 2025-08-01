import { CurriculumMeta } from "@/types/curriculum";
import { CurriculumUITextKey } from "@/locale/messages/curriculum";
import LocaleText from "@/components/common/LocaleText";
import PDFExporter from "@/components/common/PDFExporter";

export default function CurriculumHeader({ metaData }: { metaData: CurriculumMeta }) {
  const { title, description, targetJobs, level, createdAt } = metaData

  return (
    <div className="flex flex-col gap-y-8 flex-wrap">
      <h2 id="introduction" className="text-4xl font-medium sm:text-5xl tracking-tight text-balance break-keep">{title}</h2>
      <span className="text-xl text-neutral-600 block">{description}</span>
      <div className="flex flex-col p-6 gap-y-4 flex-wrap border border-neutral-200 rounded-md bg-neutral-50">
        <p>
          <span className="block font-semibold text-neutral-800 mr-2 mb-1">
            <LocaleText keyOrLocaleData={CurriculumUITextKey.CURRICULUM_TARGET_JOB}/>:
          </span>
          {targetJobs.map((job, index) => {
            return (
              <span key={`target-job-${index}`} className="inline-block px-3 py-1 mr-2 last:mr-0 text-xs rounded-full bg-neutral-200 text-netural-800">
                {job}
              </span>
            )
          })}
        </p>
        <p>
          <span className="font-semibold text-neutral-800 mr-2">
            <LocaleText keyOrLocaleData={CurriculumUITextKey.CURRICULUM_RECOMMENDED_LEVEL}/>:
          </span>
          {level}
        </p>
        <p>
          <span className="font-semibold text-neutral-800 mr-2">
            <LocaleText keyOrLocaleData={CurriculumUITextKey.CURRICULUM_CREATED_AT}/>:
          </span>
          {createdAt}
        </p>
      </div>
      <PDFExporter/>
    </div>
  )
}