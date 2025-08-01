'use client'

import LocaleText from "@/components/common/LocaleText";
import { MessageKey } from "@/locale/message";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { createPortal } from "react-dom";
import { useSidebar } from "@/contexts/SidebarContext";

type HeadingData = { id: string, key: keyof typeof MessageKey}
type HeadingIds = HeadingData[]

const tocItems: HeadingIds = [
  { id: 'introduction', key: MessageKey.INTRODUCTION },
  { id: 'skill-stack', key: MessageKey.SKILL_STACK },
  { id: 'recommended-resources', key: MessageKey.RECOMMENDED_RESOURCES },
  { id: 'week-1', key: MessageKey.WEEK_1 },
  { id: 'week-2', key: MessageKey.WEEK_2 },
  { id: 'week-3', key: MessageKey.WEEK_3 },
  { id: 'week-4', key: MessageKey.WEEK_4 },
  { id: 'week-5', key: MessageKey.WEEK_5 },
  { id: 'week-6', key: MessageKey.WEEK_6 },
  { id: 'week-7', key: MessageKey.WEEK_7 },
  { id: 'week-8', key: MessageKey.WEEK_8 },
  { id: 'week-9', key: MessageKey.WEEK_9 },
  { id: 'week-10', key: MessageKey.WEEK_10 },
  { id: 'week-11', key: MessageKey.WEEK_11 },
  { id: 'week-12', key: MessageKey.WEEK_12 }
]

function useTableOfContents(headingIds: HeadingIds, contentId: string) {
  let [headings, setHeadings] = useState<(HeadingData & { level: number; active: boolean })[]>([]);
  const pathname = usePathname()

  useEffect(() => {
    const root = document.getElementById(contentId)
    if (!root) return

    setHeadings(
      headingIds.map((heading) => (
        { ...heading, level: 2, active: false }
      ))
    )

    // Content Element 랑 id 매핑
    const contentElements = new Map<Element, string>()
    headingIds.forEach(({ id }) => {
      const currentElement = root.querySelector(`#${id}`)
      if (!currentElement) return
      contentElements.set(currentElement, id)
    })

    let scrollPaddingTop = getComputedStyle(document.documentElement).scrollPaddingTop;
    if (scrollPaddingTop === 'auto') scrollPaddingTop = '0px';

    // Viewport에 보이는 element 감시
    const visibleElements = new Set<Element>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            visibleElements.add(entry.target)
          } else {
            visibleElements.delete(entry.target)
          }
        })

        // Viewport에 보이는 첫 element
        const firstVisibleContentElement = Array.from(
          contentElements.entries()
        ).find(([element]: [Element, string]) => visibleElements.has(element));

        // firstVisibleContentElement에 해당하는 element만 active = true
        setHeadings((current) =>
          current.map((heading) => ({
            ...heading,
            active: heading.id === firstVisibleContentElement?.[1]
          }))
        )
      },
      { rootMargin: `-${scrollPaddingTop} 0px 0px` }
    )

    Array.from(contentElements.keys()).forEach((element) => observer.observe(element))

    return () => observer.disconnect()

  }, [pathname, headingIds, contentId])

  return headings
}

export default function TableOfContents({ contentId }: { contentId: string }) {
  const headings = useTableOfContents(tocItems, contentId)
  const [portalNode, setPortalNode] = useState<HTMLElement | null>(null);
  const { isSidebarVisible, setIsSidebarVisible } = useSidebar();

  useEffect(() => {
    setIsSidebarVisible(true)
    return () => setIsSidebarVisible(false)
  }, [setIsSidebarVisible])

  useEffect(() => {
    if (isSidebarVisible) {
      const node = document.getElementById('toc-portal-exit');
      setPortalNode(node);
    }
  }, [isSidebarVisible])

  const tocContent = (
    <nav className="sticky top-16">
      <h2 className="text-lg font-semibold text-neutral-950">
        <LocaleText keyOrLocaleData={MessageKey.TABLE_OF_CONTENTS}/>
      </h2>
      <ul className="mt-3 flex flex-col gap-3 border-l border-neutral-950/10 text-sm text-neutral-700">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={clsx(
              "-ml-px border-l border-transparent pl-4",
              "hover:text-neutral-950 hover:not-has-aria-[current=location]:border-neutral-400",
              "has-aria-[current=location]:border-neutral-950",
            )}
          >
            <a
              href={`#${heading.id}`}
              aria-current={heading.active ? "location" : undefined}
              className={clsx(
                heading.level === 3 && "pl-4",
                "block aria-[current=location]:font-medium aria-[current=location]:text-neutral-950",
              )}
            >
              <LocaleText keyOrLocaleData={heading.key}/>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )

  if (portalNode) {
    return createPortal(tocContent, portalNode)
  }
  return null
}