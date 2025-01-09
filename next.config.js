// next.config.js
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'aceternity.com',
          pathname: '/images/products/thumbnails/**',
        },
      ],
      eslint: {
        ignoreDuringBuilds: true, // Disables ESLint checks during `next build`
      },
    },
  };
  