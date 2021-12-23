/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  experimental: {
    // scrollRestoration: true,
    styledComponents: true, // https://nextjs.org/docs/advanced-features/compiler#styled-components
  },
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
};
