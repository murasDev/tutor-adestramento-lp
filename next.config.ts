import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'github.com',
      }, 
      {
        hostname: 'www.petz.com.br',
      }
    ],
  },
}

export default nextConfig
