/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'OSV Registry',
    description: 'The official store for OSV.',
    icon: 'site/public/OSV_WORKSPACE.png',
    listUrl: 'https://github.com/StudioCordillera/kasm-workspace/',
    contactUrl: 'https://github.com/StudioCordillera/kasm-workspace/',
  },
  reactStrictMode: true,
  basePath: '/OSV Registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
