/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // Only if your repo is NOT named <username>.github.io:
  // basePath: '/your-repo-name',
};
module.exports = nextConfig;