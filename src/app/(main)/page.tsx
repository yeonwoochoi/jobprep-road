import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { MessageKey } from "@/locale/message";
import LocaleText from "@/components/common/LocaleText";
import { generatePageMetadata } from "@/_meta/metadata-utils";
import { ContactSection } from "@/components/common/ContactSection";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { List, ListItem } from "@/components/ui/List";
import { StylizedImage } from "@/components/ui/StylizedImage";
import imageLaptop from '@/images/laptop.jpg'

export const generateMetadata = async () => generatePageMetadata('home')

function CtoSection() {
  return (
    <Container className="mt-24 sm:mt-32 md:mt-56">
      <FadeIn className="max-w-3xl">
        <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
          <LocaleText keyOrLocaleData={MessageKey.HOME_TITLE_PREFIX} />
          <br className="hidden sm:inline" />
          <LocaleText keyOrLocaleData={MessageKey.HOME_TITLE_SUFFIX} />
        </h1>
        <p className="mt-6 text-xl text-neutral-600 text-pretty">
          <LocaleText keyOrLocaleData={MessageKey.HOME_DESCRIPTION} />
        </p>
        <Button href="/curriculum" className="text-lg w-[150px] h-12 mt-6">
          <LocaleText keyOrLocaleData={MessageKey.HOME_BUTTON} />
        </Button>
      </FadeIn>
    </Container>
  )
}

function ServiceSection () {
  return (
    <div className="sm:mt-32 sm:py-32 lg:mt-56">
      <SectionIntro
        eyebrow={<LocaleText keyOrLocaleData={MessageKey.HOME_SERVICE_EYEBROW}/>}
        title={<LocaleText keyOrLocaleData={MessageKey.HOME_SERVICE_TITLE}/>}
        className="py-20"
      >
        <p>
          <LocaleText keyOrLocaleData={MessageKey.HOME_SERVICE_SUBTITLE}/>
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                shape={2}
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title={<LocaleText keyOrLocaleData={MessageKey.HOME_SERVICE_STEP_1_TITLE}/>}>
              <LocaleText keyOrLocaleData={MessageKey.HOME_SERVICE_STEP_1_DESC}/>
            </ListItem>
            <ListItem title={<LocaleText keyOrLocaleData={MessageKey.HOME_SERVICE_STEP_2_TITLE}/>}>
              <LocaleText keyOrLocaleData={MessageKey.HOME_SERVICE_STEP_2_DESC}/>
            </ListItem>
            <ListItem title={<LocaleText keyOrLocaleData={MessageKey.HOME_SERVICE_STEP_3_TITLE}/>}>
              <LocaleText keyOrLocaleData={MessageKey.HOME_SERVICE_STEP_3_DESC}/>
            </ListItem>
          </List>
        </div>
      </Container>
    </div>
  )
}

function WhyUsSection () {
  return (
    <div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <CtoSection/>
      <ServiceSection/>
      <WhyUsSection/>
      <ContactSection/>
    </>
  )
}
