import { RecommendedResource, ResourceType } from "@/types/curriculum";
import React, { SVGProps } from "react";

const ResourceIcons: Record<ResourceType, (props: SVGProps<SVGSVGElement>) => any> = {
  course: (props) => (
    <svg {...props} viewBox="0 0 20 20" fill="currentColor">
      <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm4 2v6h8V8H6z" clipRule="evenodd" fillRule="evenodd"/>
    </svg>
  ),
  article: (props) => (
    <svg {...props} viewBox="0 0 20 20" fill="currentColor">
      <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm0 2h12v1H4V5zm0 3h12v1H4V8zm0 3h12v1H4v-1z" clipRule="evenodd" fillRule="evenodd"/>
    </svg>
  ),
  book: (props) => (
    <svg {...props} viewBox="0 0 20 20" fill="currentColor">
      <path d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm2 2h8v1H6V4zm0 3h8v1H6V7zm0 3h5v1H6v-1z"/>
    </svg>
  ),
  official_docs: (props) => (
    <svg {...props} viewBox="0 0 20 20" fill="currentColor">
      <path d="M9 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-4V3a1 1 0 00-1-1H9zm-1 4h6v2H8V6zm0 4h6v2H8v-2z"/>
    </svg>
  ),
  project: (props) => (
    <svg {...props} viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 2a.75.75 0 01.75.75v5.5h5.5a.75.75 0 010 1.5h-5.5v5.5a.75.75 0 01-1.5 0v-5.5h-5.5a.75.75 0 010-1.5h5.5v-5.5A.75.75 0 0110 2z"/>
    </svg>
  ),
}

const resourceTypeDetails = {
  course: { label: '강의', Icon: ResourceIcons.course },
  article: { label: '아티클', Icon: ResourceIcons.article },
  book: { label: '도서', Icon: ResourceIcons.book },
  official_docs: { label: '공식 문서', Icon: ResourceIcons.official_docs },
  project: { label: '프로젝트', Icon: ResourceIcons.project },
}

const ExternalLinkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
  </svg>
)

export default function RecommendedResourceSection({ recommendedResources }: { recommendedResources: RecommendedResource[] }) {
  if (!recommendedResources || recommendedResources.length === 0) return null

  return (
    <section>
      <div className="grid grid-cols-1 gap-4">
        {recommendedResources.map((resource) => {
          const { label, Icon } = resourceTypeDetails[resource.type]
          return (
            <a
              key={resource.resourceId}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between rounded-lg border bg-neutral-50 p-5 transition-shadow duration-200 hover:shadow-md border-neutral-200"
            >
              <div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <div
                    className="inline-flex items-center gap-x-1.5 rounded-full bg-neutral-200 px-2.5 py-1 text-xs font-medium text-neutral-700">
                    <Icon className="h-4 w-4"/>
                    <span>{label}</span>
                  </div>
                  {resource.platform && (
                    <span className="text-sm text-neutral-500">
                      {resource.platform}
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-base font-semibold text-neutral-800">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm/6 text-neutral-600">
                  {resource.description}
                </p>
              </div>
              <ExternalLinkIcon className="absolute top-5 right-5 h-5 w-5 text-neutral-400 transition-colors group-hover:text-neutral-600"/>
            </a>
          )
        })}
      </div>
    </section>
  )
}
