import clsx from 'clsx'
import { ActiveMenu, PROFILE_MENU_ITEMS as menuItems } from '@/data/constants/profileMenu'
import LocaleText from '@/components/common/LocaleText'

interface ProfileContentCardProps {
  activeMenu: ActiveMenu
  className?: string
}

export default function ProfileContentCard({ activeMenu, className }: ProfileContentCardProps) {
  const currentMenuItem = menuItems.find((item) => item.key === activeMenu)

  if (!currentMenuItem) {
    return null
  }

  return (
    <section className={clsx('rounded-lg border border-neutral-200 bg-white shadow-sm', className)}>
      <div className="border-b border-neutral-200 p-6">
        <h3 className="text-lg leading-6 font-semibold text-neutral-900">
          <LocaleText keyOrLocaleData={currentMenuItem.titleMessageKey} />
        </h3>
      </div>

      <div className="p-6">Content</div>
    </section>
  )
}
