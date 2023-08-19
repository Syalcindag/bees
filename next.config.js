/** @type {import('next').NextConfig} */
const nextConfig = { // The config script is not used If you use react Image and use external link , you must add this
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.temellikayisi.com',
            port: '',
            pathname: '/images/**',
          }
        ],
      },
}

module.exports = nextConfig
