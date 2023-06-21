/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.pngall.com',
      },
    ],
  },
};

(module.exports = nextConfig), { eslint: { ignoreDuringBuilds: true } };
