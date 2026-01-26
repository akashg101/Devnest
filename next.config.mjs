/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for Vercel
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
    unoptimized: false, // Enable Next.js image optimization
  },

  // Performance
  productionBrowserSourceMaps: false,
  
  // Headers for caching
  async headers() {
    return [
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Redirects
  async redirects() {
    return [
      {
        source: '/documentation',
        destination: '/',
        permanent: true,
      },
      {
        source: '/docs',
        destination: '/',
        permanent: true,
      },
    ];
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
