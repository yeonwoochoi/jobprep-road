import { Container } from "@/components/ui/Container";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { MessageKey } from "@/locale/message";
import LocaleText from "@/components/common/LocaleText";
import { generatePageMetadata } from "@/_meta/metadata-utils";
import { ContactSection } from "@/components/common/ContactSection";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { List, ListItem } from "@/components/ui/List";
import { StylizedImage } from "@/components/ui/StylizedImage";
import imageLaptop from '@/images/laptop.jpg'
import { Metadata } from "next";
import { cookies } from "next/headers";
import { Locale } from "@/locale";
import { ReactNode, useId } from "react";

import Feature1Icon from '@/images/icons/why-us-feature-1.svg';
import Feature2Icon from '@/images/icons/why-us-feature-2.svg';
import Feature3Icon from '@/images/icons/why-us-feature-3.svg';
import Image, { ImageProps } from "next/image";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies()
  const lang = (cookieStore.get('lang' as any)?.value as Locale) || 'ko'
  return generatePageMetadata("home", lang)
}

function CtoSection() {
  return (
    <Container className="mt-0 sm:mt-8 md:mt-32">
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
    <div className="mt-32 py-32 lg:mt-56">
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
          <List className="break-keep mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
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

type WhyUsDistinction = {
  icon: ImageProps['src']
  title: string | ReactNode
  description: string | ReactNode
}

function WhyUsSection () {
  const distinctions: WhyUsDistinction[] = [
    {
      icon: Feature1Icon,
      title: <LocaleText keyOrLocaleData={MessageKey.HOME_WHY_US_FEATURE_1_TITLE} />,
      description: <LocaleText keyOrLocaleData={MessageKey.HOME_WHY_US_FEATURE_1_DESC} />
    },
    {
      icon: Feature2Icon,
      title: <LocaleText keyOrLocaleData={MessageKey.HOME_WHY_US_FEATURE_2_TITLE} />,
      description: <LocaleText keyOrLocaleData={MessageKey.HOME_WHY_US_FEATURE_2_DESC} />
    },
    {
      icon: Feature3Icon,
      title: <LocaleText keyOrLocaleData={MessageKey.HOME_WHY_US_FEATURE_3_TITLE} />,
      description: <LocaleText keyOrLocaleData={MessageKey.HOME_WHY_US_FEATURE_3_DESC} />
    },
  ]

  return (
    <div className="py-16 sm:py-32 mt-16">
      <SectionIntro
        eyebrow={<LocaleText keyOrLocaleData={MessageKey.HOME_WHY_US_EYEBROW}/>}
        title={<LocaleText keyOrLocaleData={MessageKey.HOME_WHY_US_TITLE}/>}
      >
        <p>
          <LocaleText keyOrLocaleData={MessageKey.HOME_WHY_US_SUBTITLE_1}/>
        </p>
        <p>
          <LocaleText keyOrLocaleData={MessageKey.HOME_WHY_US_SUBTITLE_2}/>
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {distinctions.map((distinction, index) => {
            return <WhyUsCard key={`why-us-card-${index}`} {...distinction}/>
          })}
        </FadeInStagger>
      </Container>
    </div>
  )
}

function WhyUsCard ({ icon: iconSrc, title, description }: WhyUsDistinction) {
  const id = useId()
  const titleId = `distinction-title-${id}`
  const descriptionId = `distinction-desc-${id}`

  return (
    <FadeIn key={id} className="flex">
      <article className="w-full rounded-3xl ring-1 ring-neutral-950/5 hover:bg-neutral-50 p-6 sm:p-8">
        {iconSrc && (
          <Image
            src={iconSrc}
            alt={`why-us-icon-${id}`}
            width={48}
            height={48}
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
          />
        )}
        <p id={titleId} className="break-keep mt-6 font-display text-2xl font-semibold text-neutral-950">
          {title}
        </p>
        <p id={descriptionId} className="break-keep mt-4 text-base text-neutral-600">
          {description}
        </p>
      </article>
    </FadeIn>
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
