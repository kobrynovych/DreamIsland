/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
  },
  // Налаштування для GitHub Pages (завжди активні для production)
  assetPrefix: '/DreamIsland',
  basePath: '/DreamIsland',
};

module.exports = nextConfig;
