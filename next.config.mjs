import BundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = BundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'plus.unsplash.com',
      },
      {
        hostname: 'images.unsplash.com',
      },
      {
        hostname: 'storage.googleapis.com',
      },
    ],
  },
};

export default withBundleAnalyzer(nextConfig);
