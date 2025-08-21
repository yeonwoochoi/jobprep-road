'use client'

import clsx from 'clsx'
import React from 'react'
import LocaleText from '@/components/common/LocaleText'
import { MessageKey } from '@/locale/message'
import { ChevronRight } from 'lucide-react'
import { ActiveMenu, PROFILE_MENU_ITEMS as menuItems } from '@/data/constants/profileMenu'

interface ProfileSidebarProps {
  className?: string
  activeMenu: ActiveMenu
  setActiveMenu: React.Dispatch<React.SetStateAction<ActiveMenu>>
}

export default function ProfileSidebar({
  className,
  activeMenu,
  setActiveMenu,
}: ProfileSidebarProps) {
  return (
    <div
      className={clsx(
        'flex flex-col gap-2 rounded-md border border-neutral-300 px-8 py-8 lg:mt-8 lg:px-6',
        className
      )}
    >
      <div className="mb-4 border-b border-neutral-300 pb-4 text-xl font-bold text-neutral-950">
        <LocaleText keyOrLocaleData={MessageKey.PROFILE_MENU_PROFILE_SETTINGS} />
      </div>
      <div className="flex flex-col gap-y-1">
        {menuItems.map(({ key, titleMessageKey }) => (
          <button
            key={key}
            className={clsx(
              'flex cursor-pointer items-center justify-between rounded-md px-3 py-2 hover:bg-neutral-50 lg:px-2',
              activeMenu === key && 'font-bold'
            )}
            onClick={() => setActiveMenu(key)}
          >
            <LocaleText keyOrLocaleData={titleMessageKey} />
            <ChevronRight className={clsx(activeMenu !== key && 'text-neutral-400')} />
          </button>
        ))}
      </div>
    </div>
  )
}
