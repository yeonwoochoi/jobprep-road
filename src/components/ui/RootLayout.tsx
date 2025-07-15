'use client'

import {
  ComponentPropsWithoutRef,
  ComponentType,
  createContext,
  Dispatch,
  ReactNode,
  RefObject,
  SetStateAction,
  useContext,
  useEffect,
  useId,
  useRef,
  useState
} from "react";
import { usePathname } from "next/navigation";
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'

import { GridPattern } from '@/components/ui/GridPattern'
import Footer from "@/components/ui/Footer";
import Container from "@/components/ui/Container";
import Link from "next/link";
import { Logo, Logomark } from "@/components/ui/Logo";
import clsx from "clsx";
import { Button } from "@/components/ui/Button";

const RootLayoutContext = createContext<{
  logoHovered: boolean
  setLogoHovered: Dispatch<SetStateAction<boolean>>
} | null>(null)

function XIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z"/>
      <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z"/>
    </svg>
  )
}

function MenuIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M2 6h20v2H2zM2 16h20v2H2z"/>
    </svg>
  )
}

function Navigation() {
  return (
    <nav>

    </nav>
  )
}

function NavigationRow({ children }: { children: ReactNode }) {
  return <div></div>
}

function NavigationItem({ href, children }: { href: string, children: ReactNode }) {
  return <div></div>
}

function InfoSection() {
  return (
    <div>

    </div>
  )
}

type HeaderPropsType = {
  panelId: string,
  icon: ComponentType<{ className?: string }>
  expanded: boolean
  onToggle: () => void
  toggleRef: RefObject<HTMLButtonElement>
  invert?: boolean
}

function Header({ panelId, icon: Icon, expanded, onToggle, toggleRef, invert = false }: HeaderPropsType) {
  let { logoHovered, setLogoHovered } = useContext(RootLayoutContext)!

  return (
    <Container>
      <div className="flex items-center justify-between">
        <Link
          href="/"
          aria-label="Home"
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <Logomark
            className="h-8 sm:hidden"
            invert={invert}
            filled={logoHovered}
          />
          <Logo
            className="hidden h-8 sm:block"
            invert={invert}
            filled={logoHovered}
          />
        </Link>
        <div className="flex items-center gap-x-8">
          <Button href="/contact" invert={invert}>
            Contact us
          </Button>
          <button
            ref={toggleRef}
            type="button"
            onClick={onToggle}
            aria-expanded={expanded ? 'true' : 'false'}
            aria-controls={panelId}
            aria-label="Toggle navigation"
            className={clsx(
              'group rounded-full -m-2.5 p-2.5 transition',
              invert ? 'hover:bg-white/10' : 'bg-neutral-950/10'
            )}
          >
            <Icon
              className={clsx(
                'w-6 h-6',
                invert
                  ? 'fill-white group-hover:fill-neutral-200'
                  : 'fill-neutral-950 group-hover:fill-neutral-700'
              )}
            />
          </button>
        </div>
      </div>
    </Container>
  )
}

function RootLayoutInner({ children }: { children: ReactNode }) {
  let panelId = useId()
  let [expanded, setExpanded] = useState(false) // 메뉴의 열림/닫힘 상태
  let [isTransitioning, setIsTransitioning] = useState(false) // 메뉴 열림/닫힘 전환 애니메이션 진행 여부 상태

  let openRef = useRef<HTMLButtonElement | null>(null)
  let closeRef = useRef<HTMLButtonElement | null>(null)
  let navRef = useRef<HTMLDivElement | null>(null)

  let shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    // 현재 페이지 링크 클릭 시 메뉴 닫고 애니메이션 초기화
    // usePathname을 key로 써서 같은 경로는 리렌더링 안 되기 때문
    function onClick(event: MouseEvent) {
      if (event.target instanceof HTMLElement
        && event.target.closest('a')?.href === window.location.href) {
        setIsTransitioning(false)
        setExpanded(false)
      }
    }

    window.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [])

  const toggleMenuAndFocusCloseButton = () => {
    setIsTransitioning(true)
    setExpanded((expanded) => !expanded)

    // Rendering 끝나면 = (콜스택이 비면, 이미 준비된 비동기 작업의 콜백이 스택에 들어가 실행되니까)
    // close button (closeRef) 가 렌더링 전이면 없을 수도 있으니까.
    // 메뉴가 열린 후 닫기 버튼(XIcon)에 포커스를 강제로 줌
    window.setTimeout(() => {
      const el = closeRef.current
      if (el) {
        el.focus({ preventScroll: true } as FocusOptions)
      }
    })
  }

  return (
    <MotionConfig transition={(shouldReduceMotion || !isTransitioning) ? { duration: 0 } : undefined}>
      {/* Header */}
      <header>
        {/* Expand 전 Header */}
        <div
          className="absolute top-2 right-0 left-0 z-40 pt-14"
          aria-hidden={expanded ? 'true' : undefined}
          inert={expanded ? undefined : ''}
        >
          <Header
            panelId={panelId}
            icon={MenuIcon}
            toggleRef={openRef}
            expanded={expanded}
            onToggle={toggleMenuAndFocusCloseButton}
          />
        </div>

        {/* Expand 후 Header */}
        {/* z-index 이용해 가리는 거, 위 컴포넌트를 가리는 것임 */}
        <motion.div
          layout
          id={panelId}
          style={{ height: expanded ? 'auto' : '0.5rem' }}
          className="relative z-50 overflow-hidden bg-neutral-950 pt-2"
          aria-hidden={expanded ? undefined : 'true'}
          inert={expanded ? undefined : ''}
        >
          <motion.div layout className="bg-neutral-800">
            <div ref={navRef} className="bg-neutral-950 pt-14 pb-16">
              <Header
                invert
                panelId={panelId}
                icon={XIcon}
                toggleRef={openRef}
                expanded={expanded}
                onToggle={toggleMenuAndFocusCloseButton}
              />
            </div>
            <Navigation/>
            <InfoSection/>
          </motion.div>
        </motion.div>
      </header>

      {/* Main & Footer */}
      <motion.div
        layout
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="relative flex flex-auto overflow-hidden bg-white pt-14"
      >
        <motion.div className="relative isolate flex flex-col w-full pt-9">
          <GridPattern
            className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-50 stroke-neutral-950/5"
            yOffset={-96}
            interactive
          />
          <main className="w-full flex-auto">{children}</main>
          <Footer/>
        </motion.div>
      </motion.div>
    </MotionConfig>
  )
}

export default function RootLayout({ children }: { children: ReactNode }) {
  let pathname = usePathname()
  let [logoHovered, setLogoHovered] = useState(false)

  return (
    <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
      <RootLayoutInner key={pathname}>
        {children}
      </RootLayoutInner>
    </RootLayoutContext.Provider>
  )
}