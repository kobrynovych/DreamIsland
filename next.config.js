/** @type {import('next').NextConfig} */

// Визначаємо чи це GitHub Pages збірка
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

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
  // Налаштування для GitHub Pages
  ...(isGitHubPages && {
    assetPrefix: '/DreamIsland',
    basePath: '/DreamIsland',
  }),
};

module.exports = nextConfig;
