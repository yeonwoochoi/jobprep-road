import { SectionIntro } from '@/components/ui/SectionIntro'
import LocaleText from '@/components/common/LocaleText'
import { MessageKey } from '@/locale/message'
import { Container } from '@/components/ui/Container'
import { FadeIn, FadeInStagger } from '@/components/ui/FadeIn'
import { Border } from '@/components/ui/Border'
import Link from 'next/link'
import ContactForm from '@/components/common/ContactForm'
import { Metadata } from 'next'
import { generatePageMetadata } from '@/_meta/metadata-utils'
import { Locale } from '@/locale'
import { cookies } from 'next/headers'

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies()
  const lang = (cookieStore.get('lang' as any)?.value as Locale) || 'ko'
  return generatePageMetadata('contact', lang)
}

function ContactDetails() {
  const email = 'chldusdn20@gmail.com'
  const phone = '+82-10-8560-3465'

  return (
    <FadeIn className="pr-6">
      <div>
        <h2 className="font-display mb-6 text-base font-semibold text-neutral-950">
          <LocaleText keyOrLocaleData={MessageKey.FEEDBACK_GUIDE_TITLE} />
        </h2>
        <div className="space-y-4">
          <div className="rounded-lg border border-neutral-200 bg-white p-4">
            <div className="flex items-center gap-x-3">
              <p className="font-semibold text-neutral-800">
                <LocaleText keyOrLocaleData={MessageKey.FEEDBACK_GUIDE_BUG_REPORT_TITLE} />
              </p>
            </div>
            <blockquote className="mt-3 border-l-2 border-neutral-300 pl-3 text-sm break-keep text-neutral-600">
              <p>
                <LocaleText keyOrLocaleData={MessageKey.FEEDBACK_GUIDE_BUG_REPORT_EXAMPLE_1} />
              </p>
              <p>
                <LocaleText keyOrLocaleData={MessageKey.FEEDBACK_GUIDE_BUG_REPORT_EXAMPLE_2} />
              </p>
            </blockquote>
          </div>

          <div className="rounded-lg border border-neutral-200 bg-white p-4">
            <div className="flex items-center gap-x-3">
              <p className="font-semibold text-neutral-800">
                <LocaleText keyOrLocaleData={MessageKey.FEEDBACK_GUIDE_IDEA_PROPOSAL_TITLE} />
              </p>
            </div>
            <blockquote className="mt-3 border-l-2 border-neutral-300 pl-3 text-sm text-neutral-600">
              <LocaleText keyOrLocaleData={MessageKey.FEEDBACK_GUIDE_IDEA_PROPOSAL_EXAMPLE} />
            </blockquote>
          </div>
        </div>
      </div>
      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          <LocaleText keyOrLocaleData={MessageKey.FEEDBACK_DIRECT_CONTACT_TITLE} />
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          <div>
            <dt className="font-semibold text-neutral-950">
              <LocaleText keyOrLocaleData={MessageKey.HEADER_CONTACT_EMAIL_TITLE} />
            </dt>
            <dd>
              <Link href={`mailto:${email}`} className="text-neutral-600 hover:text-neutral-950">
                {email}
              </Link>
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-neutral-950">
              <LocaleText keyOrLocaleData={MessageKey.HEADER_CONTACT_PHONE_TITLE} />
            </dt>
            <dd>
              <Link
                href={`tel:${phone.replace(/-/g, '')}`}
                className="text-neutral-600 hover:text-neutral-950"
              >
                {phone}
              </Link>
            </dd>
          </div>
        </dl>
      </Border>
    </FadeIn>
  )
}

export default function Page() {
  return (
    <FadeInStagger>
      <SectionIntro
        eyebrow={<LocaleText keyOrLocaleData={MessageKey.FEEDBACK_SECTION_EYEBROW} />}
        title={<LocaleText keyOrLocaleData={MessageKey.FEEDBACK_SECTION_TITLE} />}
        className="py-20"
      >
        <p className="text-balance break-keep">
          <LocaleText keyOrLocaleData={MessageKey.FEEDBACK_SECTION_DESCRIPTION} />
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactDetails />
          <ContactForm />
        </div>
      </Container>
    </FadeInStagger>
  )
}
