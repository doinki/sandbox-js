const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  compiler: {
    reactRemoveProperties: process.env.NODE_ENV !== 'test',
    removeConsole: process.env.NODE_ENV !== 'development',
    styledComponents: true,
  },
  eslint: { dirs: ['src'], ignoreDuringBuilds: true },
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withBundleAnalyzer(nextConfig);
