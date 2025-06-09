'use client';

import { Header } from "@/components/marketing/header";
import { Footer } from "@/components/marketing/footer";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { ImpactStats } from "@/components/marketing/impact-stats";
import { ProblemSection } from "@/components/marketing/problem-section";
import { NewsletterSection } from "@/components/marketing/newsletter-section";
import { useEffect, useState } from 'react';
import Link from 'next/link';

// Composant pour le texte critique avec priorité de rendu
const HeroText = () => {
  const [, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="relative inline-block mb-6 md:mb-10 group">
        <div 
          className="absolute -inset-3 bg-gradient-to-r from-emerald-700 to-green-800 rounded-full opacity-75 blur-lg group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
          aria-hidden="true"
        />
        <h1 
          id="main-heading"
          className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-green-600 mb-4 md:mb-6 leading-tight"
          style={{
            fontVariationSettings: '\'wght\' 900',
            fontOpticalSizing: 'auto',
          }}
        >
          KITCHENSMART
        </h1>
      </div>
      <h2 
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-8 leading-snug"
        style={{
          fontVariationSettings: '\'wght\' 700',
          fontOpticalSizing: 'auto',
        }}
      >
        La gestion culinaire réinventée
      </h2>
      <p 
        className="text-lg sm:text-xl text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed"
        style={{
          contentVisibility: 'auto',
          contain: 'content',
          fontFeatureSettings: '\'calt\' 1, \'tnum\' 1, \'case\' 1, \'ss03\' 1',
          textRendering: 'optimizeLegibility',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          fontVariationSettings: '\'wght\' 400',
          fontOpticalSizing: 'auto',
        }}
      >
        KitchenSmart révolutionne votre façon de gérer votre cuisine avec des outils intelligents pour vos recettes, votre inventaire et vos listes de courses.
      </p>
    </div>
  );
};

export default function Home() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const header = document.querySelector('header');
      const headerHeight = header?.clientHeight || 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section 
          className="relative overflow-hidden py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 to-blue-900"
          aria-labelledby="main-heading"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10" aria-hidden="true">
            {/* Background elements */}
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <HeroText />
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a 
                href="#newsletter"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full transition-colors text-center focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Commencer gratuitement avec KitchenSmart"
                onClick={(e) => handleScroll(e, 'newsletter')}
              >
                Commencer gratuitement
              </a>
              <Link 
                href="#how-it-works"
                className="bg-transparent hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full border border-gray-600 transition-colors text-center focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                onClick={(e) => handleScroll(e, 'how-it-works')}
                aria-label="Découvrir les fonctionnalités de KitchenSmart"
              >
                Découvrir les fonctionnalités
              </Link>
            </div>
          </div>
        </section>

        {/* Le Défi Section */}
        <section id="problem" className="py-16 md:py-24 bg-gray-900">
          <ProblemSection />
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 md:py-24 bg-gray-800">
          <HowItWorks />
        </section>
        
        {/* Impact Stats Section */}
        <section className="py-16 md:py-24 bg-gray-900">
          <ImpactStats />
        </section>
        
        {/* Newsletter Section */}
        <section id="newsletter" className="py-16 md:py-24 bg-gray-800">
          <NewsletterSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}
