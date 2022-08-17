/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
};

module.exports = {
  nextConfig,

  images: {
    domains: [ 'source.unsplash.com' ],
  },
};
