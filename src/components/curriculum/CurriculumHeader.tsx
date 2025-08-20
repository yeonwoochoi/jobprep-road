import { CurriculumMeta } from '@/types/curriculum';
import { CurriculumUITextKey } from '@/locale/messages/curriculum';
import LocaleText from '@/components/common/LocaleText';
import PDFExporter from '@/components/common/PDFExporter';

export default function CurriculumHeader({ metaData }: { metaData: CurriculumMeta }) {
  const { title, description, targetJobs, level, createdAt } = metaData;

  return (
    <div className="flex flex-col flex-wrap gap-y-8">
      <h2
        id="introduction"
        className="text-4xl font-medium tracking-tight text-balance break-keep sm:text-5xl"
      >
        {title}
      </h2>
      <span className="block text-xl text-neutral-600">{description}</span>
      <div className="flex flex-col flex-wrap gap-y-4 rounded-md border border-neutral-200 bg-neutral-50 p-6">
        <p>
          <span className="mr-2 mb-1 block font-semibold text-neutral-800">
            <LocaleText keyOrLocaleData={CurriculumUITextKey.CURRICULUM_TARGET_JOB} />:
          </span>
          {targetJobs.map((job, index) => {
            return (
              <span
                key={`target-job-${index}`}
                className="text-netural-800 mr-2 inline-block rounded-full bg-neutral-200 px-3 py-1 text-xs last:mr-0"
              >
                {job}
              </span>
            );
          })}
        </p>
        <p>
          <span className="mr-2 font-semibold text-neutral-800">
            <LocaleText keyOrLocaleData={CurriculumUITextKey.CURRICULUM_RECOMMENDED_LEVEL} />:
          </span>
          {level}
        </p>
        <p>
          <span className="mr-2 font-semibold text-neutral-800">
            <LocaleText keyOrLocaleData={CurriculumUITextKey.CURRICULUM_CREATED_AT} />:
          </span>
          {createdAt}
        </p>
      </div>
      <PDFExporter />
    </div>
  );
}
