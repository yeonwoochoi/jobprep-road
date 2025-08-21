import { Importance, SkillCategory } from '@/types/curriculum'
import { useId } from 'react'

export default function SkillSection({ skillTree }: { skillTree: SkillCategory[] }) {
  const componentId = useId()
  const importanceInfo: Record<Importance, { icon: string; className: string }> = {
    required: { icon: '★★★', className: 'text-neutral-700 font-bold' },
    recommended: { icon: '★★☆', className: 'text-neutral-600' },
    nice_to_have: { icon: '★☆☆', className: 'text-neutral-500' },
  }

  return (
    <section className="flex flex-col gap-y-20">
      {skillTree.map(({ categoryName, description, skills }) => (
        <div key={`${componentId}-${categoryName}`}>
          <h2 className="text-2xl font-medium tracking-tight text-pretty text-neutral-950">
            {categoryName}
          </h2>
          <p className="sm:text-md/7 mt-4 text-gray-700">{description}</p>
          <div className="mt-12 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {skills.map((skill) => {
              const info = importanceInfo[skill.importance]
              return (
                <div
                  key={`${componentId}-${categoryName}-${skill.name}`}
                  className="group rounded-lg border border-neutral-200 bg-white p-5 transition-all duration-200 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold text-neutral-800">{skill.name}</h3>
                    <span className={`text-sm font-medium whitespace-nowrap ${info.className}`}>
                      {info.icon}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-neutral-600">{skill.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </section>
  )
}
