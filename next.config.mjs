import BundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = BundleAnalyzer({
  enabled: false,
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
    ],
  },
};

export default withBundleAnalyzer(nextConfig);
