/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const headers = require('./next.config.headers');

const nextConfig = {
  // Optimisations de base
  reactStrictMode: true,
  swcMinify: true,
  // Configuration pour réduire la mise en cache agressive
  onDemandEntries: {
    // Période (en ms) pendant laquelle la page est conservée en mémoire
    maxInactiveAge: 10 * 1000,
    // Nombre de pages conservées en mémoire
    pagesBufferLength: 1,
  },
  compress: true, // Active la compression GZIP/Brotli
  
  // Optimisation des images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 jours de cache
  },
  
  // Optimisation des polices
  optimizeFonts: true,
  
  // Désactivation des source maps en production
  productionBrowserSourceMaps: false,
  
  // Configuration expérimentale simplifiée pour le déploiement
  experimental: {
    scrollRestoration: true,
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui',
      'framer-motion',
    ],
  },
  
  // Configuration Webpack personnalisée
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Optimisation du bundle
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 25,
        minSize: 20000,
        cacheGroups: {
          default: false,
          vendors: false,
          // Groupement des dépendances communes
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /[\\/]node_modules[\\/]/,
            priority: 20,
          },
          // Groupement des composants communs
          commons: {
            name: 'commons',
            chunks: 'all',
            minChunks: 2,
            reuseExistingChunk: true,
            priority: 10,
            enforce: true,
          },
        },
      };
    }
    return config;
  },
  
  // En-têtes de sécurité et de cache
  async headers() {
    return [
      ...headers,
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // Optimisation du cache
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = withBundleAnalyzer(nextConfig);
