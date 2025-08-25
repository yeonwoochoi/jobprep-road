'use client'

import { createContext, ReactNode, useContext, useState } from 'react'
import { ProfileData } from '@/types/profile'
import delay from '@/utils/delay'

interface ProfileDataContextType {
  profileData: ProfileData
  removeCurriculum: (id: string) => Promise<void>
}

export const ProfileDataContext = createContext<ProfileDataContextType | null>(null)

export function ProfileDataProvider({
  initialData,
  children,
}: {
  initialData: ProfileData
  children: ReactNode
}) {
  const [profileData, setProfileData] = useState(initialData)

  const removeCurriculum = async (id: string) => {
    try {
      // TODO: fetch(`/api/curriculum/${id}`, { method: 'DELETE' })
      await delay(3000)

      setProfileData((prev) => ({
        ...prev,
        curriculums: prev.curriculums.filter((c) => c.id !== id),
      }))
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      throw new Error(message)
    }
  }

  return (
    <ProfileDataContext.Provider value={{ profileData, removeCurriculum }}>
      {children}
    </ProfileDataContext.Provider>
  )
}

export function useProfileData() {
  const ctx = useContext(ProfileDataContext)
  if (!ctx) throw new Error('useProfileData must be used inside ProfileDataProvider')
  return ctx
}
