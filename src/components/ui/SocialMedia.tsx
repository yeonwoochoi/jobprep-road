import Link from 'next/link'
import clsx from 'clsx'
import { GitHubIcon, NotionIcon, TwitterIcon } from "@/components/ui/Icons";

export const socialMediaProfiles = [
  { title: 'GitHub', href: 'https://github.com/yeonwoochoi', icon: GitHubIcon },
  { title: 'Notion', href: 'https://www.notion.so/Dev-Notes-21d642209e4d800c842bd3cb5941b507?source=copy_link', icon: NotionIcon },
  { title: 'X', href: 'https://x.com/choeyeonu53311', icon: TwitterIcon }
]

export function SocialMedia({
  className,
  invert = false,
}: {
  className?: string
  invert?: boolean
}) {
  return (
    <ul
      role="list"
      className={clsx(
        'flex gap-x-10',
        invert ? 'text-white' : 'text-neutral-950',
        className,
      )}
    >
      {socialMediaProfiles.map((socialMediaProfile) => (
        <li key={socialMediaProfile.title}>
          <Link
            target="_blank"
            href={socialMediaProfile.href}
            aria-label={socialMediaProfile.title}
            className={clsx(
              'transition',
              invert ? 'hover:text-neutral-200' : 'hover:text-neutral-700',
            )}
          >
            <socialMediaProfile.icon className="h-6 w-6 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  )
}
