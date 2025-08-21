'use client'

import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react'

type SidebarContextType = {
  isSidebarVisible: boolean
  setIsSidebarVisible: Dispatch<SetStateAction<boolean>>
}

const SidebarContext = createContext<SidebarContextType | null>(null)

export function useSidebar() {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }
  return context
}

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false)

  return (
    <SidebarContext.Provider value={{ isSidebarVisible, setIsSidebarVisible }}>
      {children}
    </SidebarContext.Provider>
  )
}
