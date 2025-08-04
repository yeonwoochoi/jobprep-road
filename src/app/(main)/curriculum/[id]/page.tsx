import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { Container } from "@/components/ui/Container";
import mockData from "@/data/mockData.json"
import { Curriculum } from "@/types/curriculum";
import LocaleText from "@/components/common/LocaleText";
import TableOfContents from "@/components/curriculum/TableOfContents";
import { MessageKey } from "@/locale/message";
import { WeeklyPlanSection } from "@/components/curriculum/WeeklyPlanSection";
import CurriculumSection from "@/components/curriculum/CurriculumSection";
import CurriculumHeader from "@/components/curriculum/CurriculumHeader";
import SkillSection from "@/components/curriculum/SkillSection";
import RecommendedResourceSection from "@/components/curriculum/RecommendedResourceSection";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { Locale } from "@/locale";
import { generatePageMetadata } from "@/_meta/metadata-utils";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies()
  const lang = (cookieStore.get('lang' as any)?.value as Locale) || 'ko'
  return generatePageMetadata("curriculum/[id]", lang)
}

export default function Page() {
  const { metadata, skillTree, recommendedResources, weeklyPlan } = mockData.data as Curriculum

  return (
    <>
      <TableOfContents contentId="table-of-contents"/>
      <FadeInStagger>
        <Container>
          <div id="table-of-contents" className="w-full">
            <FadeIn key="curriculum-header">
              <CurriculumHeader metaData={metadata}/>
            </FadeIn>
            <CurriculumSection category={<LocaleText keyOrLocaleData={MessageKey.SKILL_STACK}/>} contentId="skill-stack">
              <SkillSection skillTree={skillTree}/>
            </CurriculumSection>
            <CurriculumSection category={<LocaleText keyOrLocaleData={MessageKey.RECOMMENDED_RESOURCES}/>} contentId="recommended-resources">
              <RecommendedResourceSection recommendedResources={recommendedResources}/>
            </CurriculumSection>
            <WeeklyPlanSection weeklyPlan={weeklyPlan}/>
          </div>
        </Container>
      </FadeInStagger>
    </>
  )
}