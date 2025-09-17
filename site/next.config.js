/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'OSV Registry',
    description: 'The official store for OSV.',
    icon: 'site/public/OSV_WORKSPACE.png',
    listUrl: 'https://studiocordillera.github.io/kasm-workspace/1.1/',
    contactUrl: 'https://studiocordillera.github.io/kasm-workspace/1.1/',
  },
  reactStrictMode: true,
  basePath: '/OSV Registry/1.1',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
