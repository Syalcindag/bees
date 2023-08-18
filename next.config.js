/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.temellikayisi.com',
            port: '',
            pathname: '/images/**',
          },
        ],
      },
}

module.exports = nextConfig
