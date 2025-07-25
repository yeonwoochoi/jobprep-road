'use client'

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { FadeIn } from "@/components/ui/FadeIn";

export default function PageTransitionWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <FadeIn key={pathname}>
      {children}
    </FadeIn>
  )
}