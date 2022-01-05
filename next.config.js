const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    // scrollRestoration: true,
    styledComponents: true, // https://nextjs.org/docs/advanced-features/compiler#styled-components
  },
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withBundleAnalyzer(nextConfig);
