const headerConfig = [
  {
    // Appliquer ces en-têtes à tous les fichiers statiques
    source: '/(.*)',
    headers: [
      // Cache pour les fichiers statiques (1 an)
      {
        key: 'Cache-Control',
        value: 'public, max-age=31536000, immutable',
      },
    ],
  },
  {
    // Appliquer ces en-têtes aux pages HTML
    source: '/:path*',
    headers: [
      // Cache court pour le HTML (10 minutes)
      {
        key: 'Cache-Control',
        value: 'public, max-age=600, must-revalidate',
      },
    ],
  },
];

module.exports = headerConfig;
