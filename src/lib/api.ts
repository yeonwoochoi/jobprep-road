import { cache } from 'react'
import { getErrorMessage } from '@/utils/error'

type FetchOptions = RequestInit & {
  cache?: 'force-cache' | 'no-store'
  next?: {
    revalidate?: number | false
    tags?: string[]
  }
}

export type ApiResult<T> =
  | { status: 'idle' }
  | { status: 'success'; data: T; headers?: Headers }
  | { status: 'error'; error: string }

class ApiClient {
  private readonly baseUrl: string

  constructor(baseUrl: string = '') {
    this.baseUrl = baseUrl
  }

  async fetchApi<T>(url: string, options: FetchOptions = {}): Promise<ApiResult<T | null>> {
    const fullUrl = this.baseUrl + url
    const isFormData = options.body instanceof FormData

    try {
      const response = await fetch(fullUrl, {
        ...options,
        headers: isFormData
          ? (options.headers as Record<string, string>) // FormData일 땐 Content-Type 자동 세팅
          : {
              'Content-Type': 'application/json',
              ...(options.headers as Record<string, string>),
            },
      })
      const text = await response.text()

      if (!response.ok) {
        const errorMessage = text ? JSON.parse(text)?.error : `HTTP error! ${response.status}`
        throw new Error(errorMessage)
      }

      // 빈 Body 체크
      if (!text) {
        return { status: 'success', data: null }
      } else {
        const data = JSON.parse(text)
        return { status: 'success', data, headers: response.headers }
      }
    } catch (err) {
      return { status: 'error', error: getErrorMessage(err, 'Fetch error') }
    }
  }

  // force-cache (기본값)
  cachedFetch = cache(
    async <T>(
      url: string,
      options: Omit<FetchOptions, 'cache'> = {}
    ): Promise<ApiResult<T | null>> => {
      return this.fetchApi<T>(url, { ...options, cache: 'force-cache' })
    }
  )

  // no-store (항상 새 데이터)
  // 그래서 caching 안함.
  dynamicFetch = async <T>(
    url: string,
    options: Omit<FetchOptions, 'cache'> = {}
  ): Promise<ApiResult<T | null>> => {
    return this.fetchApi<T>(url, { ...options, cache: 'no-store' })
  }

  // ISR (재검증 주기 설정)
  revalidatingFetch = cache(
    async <T>(
      url: string,
      revalidateSeconds: number,
      options: Omit<FetchOptions, 'next'> = {}
    ): Promise<ApiResult<T | null>> => {
      return this.fetchApi<T>(url, {
        ...options,
        next: { revalidate: revalidateSeconds },
      })
    }
  )

  // 태그 기반 캐시
  // unstable_cache를 쓰던지 기본 fetch 쓰던지
  // unstable_cache는 말 그대로 아직 안정화되지 않아서 fetch 쓰는게 나을듯.
  taggedFetch = async <T>(
    url: string,
    tags: string[],
    options: Omit<FetchOptions, 'next'> = {}
  ): Promise<ApiResult<T | null>> => {
    return this.fetchApi<T>(url, { ...options, next: { tags } })
  }
}

const apiClient = new ApiClient(process.env.NEXT_PUBLIC_BASE_URL)

// 직접 클라이언트 생성할 수도 있어서 (다른 base URL 사용 시)
export default apiClient

export const fetchApi = apiClient.fetchApi.bind(apiClient)

export const { cachedFetch, dynamicFetch, revalidatingFetch, taggedFetch } = apiClient
