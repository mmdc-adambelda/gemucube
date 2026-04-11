/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // Static HTML export — required for GitHub Pages
  trailingSlash: true,       // /about → /about/index.html — required for GH Pages routing
  images: {
    unoptimized: true,       // next/image optimization needs a server; GH Pages is static
  },
  // If your repo is username.github.io/gemucube (not a root domain), set basePath:
  // basePath: '/gemucube',
  // assetPrefix: '/gemucube/',
}

module.exports = nextConfig
