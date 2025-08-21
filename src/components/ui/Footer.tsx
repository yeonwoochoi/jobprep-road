import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { Logo } from '@/components/ui/Logo'
import Link from 'next/link'

export default function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full">
      <FadeIn>
        <div className="h-1" />
        <div className="mt-24 mb-20 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Home">
            <Logo className="h-8" fillOnHover />
          </Link>
          <p className="text-sm text-neutral-700">
            © {new Date().getFullYear()} Yeon Woo Choi. All rights reserved.
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
