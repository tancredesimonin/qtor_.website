/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    localeDetection: true
  },
  images: {
    domains: [process.env.NEXT_PUBLIC_IMAGE_HOSTNAME]
  }
}

module.exports = nextConfig
