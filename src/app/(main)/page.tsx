import Container from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { MessageKey } from "@/locale/message";
import LocaleText from "@/components/common/LocaleText";
import { generatePageMetadata } from "@/_meta/metadata-utils";

export const generateMetadata = async () => generatePageMetadata('home')

export default function Home() {
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
