'use client'

import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import ProfileUserInfoCard from '@/components/profile/ProfileUserInfoCard'
import ProfileSidebar from '@/components/profile/ProfileSidebar'
import { useEffect, useRef, useState } from 'react'
import ProfileContentCard from '@/components/profile/ProfileContentCard'
import { ActiveMenu } from '@/data/constants/profileMenu'
import { useProfileData } from '@/contexts/ProfileDataContext'

export default function ProfileClientPage() {
  const { profileData } = useProfileData()
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>('profileSettings')
  const isInitialRender = useRef(true)

  useEffect(() => {
    isInitialRender.current = false
  }, [])

  if (!profileData) {
    return null
  }

  const animationDelay = isInitialRender.current ? 0.4 : 0

  return (
    <Container className="mt-16 sm:mt-20">
      <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-3">
        <aside className="lg:col-span-1">
          <FadeIn>
            <ProfileUserInfoCard
              className="hidden lg:block"
              email={profileData.email}
              name={profileData.name}
            />
            <ProfileSidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
          </FadeIn>
        </aside>
        <main className="lg:col-span-2">
          <FadeIn key={activeMenu} trigger="mount" delay={animationDelay}>
            <ProfileContentCard activeMenu={activeMenu} />
          </FadeIn>
        </main>
      </div>
    </Container>
  )
}
