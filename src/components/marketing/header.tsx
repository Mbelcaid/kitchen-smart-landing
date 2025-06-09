"use client";

import Link from 'next/link';

export function Header() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    console.log('Scrolling to section:', sectionId);
    
    const element = document.getElementById(sectionId);
    if (!element) {
      console.error('Element not found:', sectionId);
      return;
    }
    
    const header = document.querySelector('header');
    const headerHeight = header?.offsetHeight || 80; // Augmenté à 80px pour correspondre au padding
    const elementRect = element.getBoundingClientRect();
    
    console.log('Header height:', headerHeight);
    console.log('Element rect:', elementRect);
    
    // Calculer la position pour que le contenu de la section soit juste en dessous du header
    const scrollToPosition = elementRect.top + window.pageYOffset - headerHeight + 40; // Réduit le padding à 40px
    
    console.log('Scrolling to position:', scrollToPosition);
    
    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth'
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#AAEFDF]/80 backdrop-blur supports-[backdrop-filter]:bg-[#AAEFDF]/80">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold text-gray-900">KitchenSmart</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <a
              href="#problem"
              onClick={(e) => scrollToSection(e, 'problem')}
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-emerald-600 cursor-pointer"
            >
              Le défi
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => scrollToSection(e, 'how-it-works')}
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-emerald-600 cursor-pointer"
            >
              Notre solution
            </a>
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/contact';
              }}
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-emerald-600 cursor-pointer"
            >
              Contact
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <a 
            href="#newsletter"
            onClick={(e) => scrollToSection(e, 'newsletter')}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-emerald-600 hover:bg-emerald-700"
          >
            S'inscrire
          </a>
        </div>
      </div>
    </header>
  );
}
