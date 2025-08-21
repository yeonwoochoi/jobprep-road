'use client'

import { ComponentPropsWithoutRef, createContext, useContext } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const FadeInStaggerContext = createContext(false)

const defaultMargin = '0px 0px -200px'

type FadeInProps = ComponentPropsWithoutRef<typeof motion.div> & {
  /**
   * 애니메이션을 트리거하는 방식 결정
   * 'scroll' (기본값): 컴포넌트가 뷰포트로 들어왔을 때 애니메이션 실행 (whileInView)
   * 'mount': 컴포넌트가 렌더링(마운트)될 때 애니메이션 실행 (animate)
   */
  trigger?: 'scroll' | 'mount'

  /**
   * trigger가 'scroll'일 때, 애니메이션을 한 번만 실행할지 여부 결정
   * true (기본값): 한 번만 실행
   * false: 뷰포트에 들어올 때마다 반복해서 실행
   */
  runOnce?: boolean
  delay?: number
}

export function FadeIn({ trigger = 'scroll', runOnce = true, delay = 0, ...props }: FadeInProps) {
  const shouldReduceMotion = useReducedMotion()
  const isInStaggerGroup = useContext(FadeInStaggerContext)

  const getAnimationProps = () => {
    if (trigger === 'mount') {
      return {
        initial: 'hidden',
        animate: 'visible',
      }
    }

    if (isInStaggerGroup) {
      return {}
    }

    return {
      initial: 'hidden',
      whileInView: 'visible',
      viewport: {
        once: runOnce, // runOnce prop으로 once 옵션을 제어
        margin: defaultMargin,
      },
    }
  }

  const transitionProps = {
    duration: 0.5,
    ...(delay > 0 && { delay }),
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={transitionProps}
      {...getAnimationProps()}
      {...props}
    />
  )
}

export function FadeInStagger({
  faster = false,
  ...props
}: ComponentPropsWithoutRef<typeof motion.div> & { faster?: boolean }) {
  const viewport = { once: true, margin: defaultMargin }
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        {...props}
      />
    </FadeInStaggerContext.Provider>
  )
}
