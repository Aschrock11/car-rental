/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    reactStrictMode: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.pngall.com',
      },
    ],
  },
};

module.exports = nextConfig;
