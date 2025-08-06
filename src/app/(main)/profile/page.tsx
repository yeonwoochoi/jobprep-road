import {FadeIn, FadeInStagger} from "@/components/ui/FadeIn";
import {Container} from "@/components/ui/Container";
import {SectionIntro} from "@/components/ui/SectionIntro";
import LocaleText from "@/components/common/LocaleText";
import {MessageKey} from "@/locale/message";
import ProfileSidebar from "@/components/profile/ProfileSidebar";

type ActiveMenu = 'myCurriculums' | 'profileSettings' | 'accountSettings' | 'billingHistory';

export default function Page() {
  return (
    <FadeInStagger>
      <Container className="mt-0 sm:mt-8 lg:mt-16">
        <FadeIn>
          <SectionIntro
            eyebrow={<LocaleText keyOrLocaleData={MessageKey.PROFILE_HEADER_EYEBROW}/>}
            title={<LocaleText keyOrLocaleData={MessageKey.PROFILE_HEADER_TITLE}/>}
          >
            <p>
              <LocaleText keyOrLocaleData={MessageKey.PROFILE_HEADER_DESCRIPTION} />
            </p>
          </SectionIntro>
        </FadeIn>
      </Container>
      <Container className="mt-16 sm:mt-20">
        <FadeIn>
          <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-4">
            <aside className="lg:col-span-1">
              <ProfileSidebar/>
            </aside>
            <main className="lg:col-span-3">
              Content
            </main>
          </div>
        </FadeIn>
      </Container>
    </FadeInStagger>
  )
}
