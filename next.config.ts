import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: false, // <-- Strict Mode 끄기
  serverExternalPackages: ['pdf-parse'],
}

export default nextConfig
