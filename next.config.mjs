/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  // Export as a static site
  output: 'export',
  // Set base path and asset prefix for GitHub Pages
  basePath: isProd ? '/your-repo-name' : '',
  assetPrefix: isProd ? '/your-repo-name/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true, // Disable image optimization
  },
};

export default nextConfig;
