import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import LocaleText from "@/components/common/LocaleText";
import { MessageKey } from "@/locale/message";
import { Button } from "@/components/ui/Button";
import ContactInfo from "@/components/ui/ContactInfo";

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-28 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-balance text-white sm:text-4xl">
              <LocaleText keyOrLocaleData={MessageKey.HOME_CONTACT_TITLE}/>
            </h2>
            <div className="mt-8 flex">
              <Button href="/contact" invert>
                <LocaleText keyOrLocaleData={MessageKey.HOME_CONTACT_FEEDBACK_BUTTON}/>
              </Button>
            </div>
            <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="font-display text-base font-semibold text-white">
                <ContactInfo className="space-y-8" invert/>
              </h3>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}