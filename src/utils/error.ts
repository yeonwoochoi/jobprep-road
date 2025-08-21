export function getErrorMessage(error: unknown, fallback: string = 'Unknown Error'): string {
  if (error instanceof Error) return error.message
  if (typeof error === 'string') return error
  if (typeof error === 'object' && error !== null && 'message' in error) {
    const message = (error as any).message
    if (typeof message === 'string') return message
  }
  return fallback
}
