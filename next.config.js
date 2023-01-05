/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['firebasestorage.googleapis.com'],
    domains: ['lh3.googleusercontent.com'],
  }
}

module.exports = nextConfig
