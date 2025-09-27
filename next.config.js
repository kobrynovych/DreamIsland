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
    loader: 'custom',
    loaderFile: './image-loader.js'
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/DreamIsland' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/DreamIsland' : '',
};

module.exports = nextConfig;
