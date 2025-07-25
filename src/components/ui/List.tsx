import { ReactNode } from "react";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import clsx from "clsx";
import { Border } from "@/components/ui/Border";

export function List({children, className}: { children: ReactNode, className?: string }) {
  return (
    <FadeInStagger>
      <ul role="list" className={clsx('text-base text-neutral-600', className)}>
        {children}
      </ul>
    </FadeInStagger>
  )
}

export function ListItem({ children, title }: { children: ReactNode, title?: string | ReactNode }) {
  return (
    <li className="group mt-10 first:mt-0">
      <FadeIn>
        <Border className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
          {
            title && (
              <strong className="font-semibold text-neutral-950">
                {title}
                {'. '}
              </strong>
            )
          }
          {children}
        </Border>
      </FadeIn>
    </li>
  )
}