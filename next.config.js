/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/DreamIsland',
  assetPrefix: '/DreamIsland/',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
