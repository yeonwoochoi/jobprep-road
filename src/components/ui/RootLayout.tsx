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
import { SocialMedia } from "@/components/ui/SocialMedia";

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
    <nav className="mt-px text-white text-5xl font-medium tracking-tight">
      <NavigationRow>
        <NavigationItem href="/">서비스 소개</NavigationItem>
        <NavigationItem href="/curriculum/generate">커리큘럼 생성</NavigationItem>
      </NavigationRow>
      <NavigationRow>
        <NavigationItem href="/profile">마이페이지</NavigationItem>
        <NavigationItem href="/contact">피드백 보내기</NavigationItem>
      </NavigationRow>
    </nav>
  )
}

function NavigationRow({ children }: { children: ReactNode }) {
  return (
    <div className="sm:bg-neutral-950">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2">{children}</div>
      </Container>
    </div>
  )
}

function NavigationItem({ href, children, }: { href: string, children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
    >
      {children}
      <span
        className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100"/>
    </Link>
  )
}

function InfoSection() {
  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value)
      alert("복사되었습니다!")
    } catch (err) {
      console.error("복사 실패:", err)
    }
  }

  return (
    <div className="relative bg-neutral-950 text-white before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800">
      <Container>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 py-12 sm:py-16">
          <div>
            <div className="py-4">
              <div className="font-bold text-xl mb-2">이메일</div>
              <button
                onClick={() => handleCopy("chldusdn20@gmail.com")}
                className="hover:text-gray-300 cursor-pointer"
              >
                chldusdn20@gmail.com
              </button>
            </div>
            <div className="py-4">
              <div className="font-bold text-xl mb-2">연락처</div>
              <button
                onClick={() => handleCopy("+82-10-8560-3465")}
                className="hover:text-gray-300 cursor-pointer"
              >
                +82-10-8560-3465
              </button>
            </div>
          </div>
          <div>
            <div className="font-bold text-xl">소셜 링크</div>
            <SocialMedia className="mt-6" invert />
          </div>
        </div>
      </Container>
    </div>
  )
}

type HeaderPropsType = {
  panelId: string,
  icon: ComponentType<{ className?: string }>
  expanded: boolean
  onToggle: () => void
  toggleRef: RefObject<HTMLButtonElement | null>
  invert?: boolean
}

function Header({ panelId, icon: Icon, expanded, onToggle, toggleRef, invert = false }: HeaderPropsType) {
  const { logoHovered, setLogoHovered } = useContext(RootLayoutContext)!

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
  const panelId = useId()
  const [expanded, setExpanded] = useState(false) // 메뉴의 열림/닫힘 상태
  const [isTransitioning, setIsTransitioning] = useState(false) // 메뉴 열림/닫힘 전환 애니메이션 진행 여부 상태

  const openRef = useRef<HTMLButtonElement | null>(null)
  const closeRef = useRef<HTMLButtonElement | null>(null)
  const navRef = useRef<HTMLDivElement | null>(null)

  const shouldReduceMotion = useReducedMotion()

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
          // @ts-expect-error (https://github.com/facebook/react/issues/17157)
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
          // @ts-expect-error (https://github.com/facebook/react/issues/17157)
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
  const pathname = usePathname()
  const [logoHovered, setLogoHovered] = useState(false)

  return (
    <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
      <RootLayoutInner key={pathname}>
        {children}
      </RootLayoutInner>
    </RootLayoutContext.Provider>
  )
}