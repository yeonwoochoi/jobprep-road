import { ComponentPropsWithoutRef, useId } from 'react'
import clsx from 'clsx'

export function Logomark({
  invert = false,
  filled = false,
  ...props
}: ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
}) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      {/* 닫힌 도형 (로드맵을 상징하는 방패 모양) */}
      <path
        d="M16 3.5a12.5 12.5 0 0 1 12.5 12.5c0 6.904-5.596 12.5-12.5 12.5S3.5 22.904 3.5 16A12.5 12.5 0 0 1 16 3.5Z"
        className={clsx(
          'stroke-2 transition-all duration-300',
          invert ? 'stroke-white' : 'stroke-neutral-950',
          filled ? 'fill-current' : 'fill-none'
        )}
      />

      {/* 웹크롤링을 상징하는 스파이더 아이콘 */}
      <path
        d="M16 11.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="1.5"
      />
      <path
        d="m22.5 9.5-3 3m6-6-3 3m-15 0-3 3m6-6-3 3m3 12 3-3m-6 6 3-3m15-3 3-3m-6 6 3-3"
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* 로드맵을 상징하는 3개월 경로 */}
      <path
        d="M8.5 20.5c3-5 6.5-8 7-8s4.5 3 7.5 8"
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="4 2"
      />

      {/* 3개월 체크포인트 (3개 월 표시) */}
      <g className={invert ? 'fill-white' : 'fill-neutral-950'}>
        <circle cx="11.5" cy="15.5" r="1.5" />
        <circle cx="16" cy="12.5" r="1.5" />
        <circle cx="20.5" cy="15.5" r="1.5" />
      </g>
    </svg>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    <svg
      viewBox="0 0 180 32"
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      <Logomark
        preserveAspectRatio="xMinYMid meet"
        invert={invert}
        filled={filled}
        className="h-8 w-8"
      />
      <text
        x="40"
        y="22"
        className={clsx(
          'text-xl font-bold',
          invert ? 'fill-white' : 'fill-neutral-950'
        )}
      >
        취준로드
      </text>
    </svg>
  )
}