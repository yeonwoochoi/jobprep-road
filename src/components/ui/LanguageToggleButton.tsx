"use client"

import { GlobeIcon } from "@/components/ui/Icons";
import { useLanguage } from "@/contexts/LanguageContext";
import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  iconClassName?: string;
};

export default function LanguageToggleButton({ className, iconClassName, ...props }: ButtonProps) {
  const { toggleLanguage } = useLanguage()

  return (
    <button onClick={() => toggleLanguage()} className={clsx("cursor-pointer", className)} {...props}>
      <GlobeIcon className={clsx("w-6 h-6", iconClassName)} />
    </button>
  )
}