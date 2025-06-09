import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fr" className="scroll-smooth">
      <Head>
        {/* Préchargement des polices critiques */}
        <link
          rel="preload"
          href="/fonts/Inter.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          data-nimg="font"
        />
        
        {/* Préchargement des connexions critiques */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Préchargement des ressources critiques */}
        <link 
          rel="preload" 
          href="/_next/static/css/app/layout.css" 
          as="style"
          onLoad={() => {
            const link = document.querySelector('link[rel="preload"][as="style"]');
            if (link) {
              link.setAttribute('rel', 'stylesheet');
            }
          }}
        />
        <noscript>
          <link rel="stylesheet" href="/_next/static/css/app/layout.css" />
        </noscript>
        
        {/* Préchargement des images critiques */}
        <link 
          rel="preload" 
          href="/images/hero-image.webp" 
          as="image" 
          type="image/webp"
          fetchPriority="high"
          imageSrcSet="/images/hero-image-640w.webp 640w, /images/hero-image-768w.webp 768w, /images/hero-image-1024w.webp 1024w, /images/hero-image-1280w.webp 1280w"
          imageSizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        
        {/* Préchargement des scripts critiques */}
        <link 
          rel="preload" 
          href="/_next/static/chunks/webpack.js" 
          as="script"
          fetchPriority="low"
        />
        
        {/* Métadonnées de performance améliorées */}
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="color-scheme" content="dark light" />
        
        {/* Préchargement des données critiques */}
        <link rel="preload" as="fetch" href="/api/initial-data" crossOrigin="anonymous" />
      </Head>
      <body className="antialiased text-gray-900 bg-white dark:bg-gray-900 dark:text-white">
        <Main />
        <NextScript />
        
        {/* Chargement différé des scripts non critiques */}
        <script 
          src="/_next/static/chunks/polyfills.js" 
          noModule
          crossOrigin="anonymous"
          defer
        />
      </body>
    </Html>
  );
}
