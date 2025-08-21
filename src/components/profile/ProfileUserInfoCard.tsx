import clsx from 'clsx'

interface UserInfoCardProps {
  email: string
  name: string
  className?: string
}

export default function ProfileUserInfoCard({ email, name, className }: UserInfoCardProps) {
  const initial = name && name.length > 0 ? name.charAt(0).toUpperCase() : '?'

  return (
    <div
      className={clsx(
        'rounded-lg border border-neutral-300 py-12',
        'flex w-full flex-col items-center space-y-4',
        className
      )}
    >
      {/* 원형 프로필 아이콘 */}
      <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-neutral-200">
        <span className="text-6xl font-bold text-neutral-600">{initial}</span>
      </div>

      {/* 사용자 이름 */}
      <h2 className="pt-6 text-center text-3xl font-semibold break-words text-neutral-800">
        {name}
      </h2>

      {/* 사용자 이메일 */}
      <p className="text-center text-sm break-words text-neutral-500">{email}</p>
    </div>
  )
}
