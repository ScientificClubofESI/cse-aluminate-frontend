/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow all domains
      },
    ],
    formats: ['image/avif', 'image/webp'], // Modern image formats for better performance
  },
  // Compress all responses
  compress: true,
  // Generate ETags for better caching
  generateEtags: true,
  // Power optimization for SEO
  poweredByHeader: false,
  // Enable SWC minification for better performance
  swcMinify: true,
  // Add headers for better SEO and security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
