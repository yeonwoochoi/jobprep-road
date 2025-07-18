import { ComponentPropsWithoutRef, ReactNode, useId } from "react";

const formClasses = 'block w-full appearance-none rounded-md border border-neutral-300 bg-neutral-50 px-3 py-2 text-neutral-900 placeholder-neutral-400 focus:border-neutral-500 focus:bg-white focus:outline-hidden focus:ring-neutral-500 sm:text-sm'

function Label({ id, children }: { id: string; children: ReactNode }) {
  return (
    <label
      htmlFor={id}
      className="mb-3 block text-sm font-medium text-neutral-700"
    >
      {children}
    </label>
  )
}

export default function TextField(
  { label, type = 'text', className, ...props }
  : Omit<ComponentPropsWithoutRef<'input'>, 'id'> & { label: string }) {
  const id = useId()
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input id={id} type={type} name={label} {...props} className={formClasses} />
    </div>
  )
}