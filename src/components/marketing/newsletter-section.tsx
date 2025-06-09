'use client';

import { useState, useEffect } from 'react';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'already'>('idle');
  const [subscribedEmails, setSubscribedEmails] = useState<string[]>([]);
  
  // Charger les emails déjà inscrits depuis localStorage
  useEffect(() => {
    const savedEmails = localStorage.getItem('kitchenSmart_subscribedEmails');
    if (savedEmails) {
      setSubscribedEmails(JSON.parse(savedEmails));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Vérifier si l'email est déjà inscrit
    if (subscribedEmails.includes(email.toLowerCase())) {
      setStatus('already');
      return;
    }
    
    setStatus('loading');
    
    try {
      // Utilisation de Formspree pour la gestion des emails
      const response = await fetch('https://formspree.io/f/xrbkggpy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          _subject: 'Nouvelle inscription à la newsletter',
          _format: 'plain',
        }),
      });

      if (response.ok) {
        // Enregistrer l'email dans localStorage
        const updatedEmails = [...subscribedEmails, email.toLowerCase()];
        localStorage.setItem('kitchenSmart_subscribedEmails', JSON.stringify(updatedEmails));
        setSubscribedEmails(updatedEmails);
        
        // Rediriger vers la page de confirmation
        setEmail('');
        window.location.href = '/newsletter-confirmation';
        return; // Important: stopper l'exécution ici
      } else {
        throw new Error('Erreur lors de l\'inscription');
      }
    } catch (_error) {
      setStatus('error');
      alert('Une erreur est survenue. Veuillez réessayer plus tard.');
    }
  };

  return (
    <section id="newsletter" className="py-16 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 scroll-mt-16">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center px-6 py-2 mb-6 text-sm font-medium rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200">
            Rejoignez-nous
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-6">
            Soyez les premiers à essayer KitchenSmart
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Inscrivez-vous pour recevoir les dernières mises à jour, des offres exclusives 
            et une chance de devenir bêta-testeur de notre application.
          </p>
          
          <form onSubmit={handleSubmit} className="mt-8 sm:mx-auto sm:max-w-lg sm:flex">
            <div className="min-w-0 flex-1">
              <label htmlFor="cta-email" className="sr-only">
                Adresse email
              </label>
              <input
                id="cta-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                placeholder="Entrez votre email"
                required
                disabled={status === 'loading'}
              />
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-3">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="block w-full px-6 py-3 text-base font-medium text-white bg-emerald-600 border border-transparent rounded-md shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Inscription...' : 'S\'inscrire'}
              </button>
            </div>
          </form>
          
          {status === 'error' && (
            <div className="mt-4 text-sm text-red-600 dark:text-red-400">
              Une erreur est survenue. Veuillez réessayer plus tard.
            </div>
          )}
          
          {status === 'already' && (
            <div className="mt-4 text-sm text-amber-600 dark:text-amber-400">
              Vous êtes déjà inscrit(e) à notre newsletter. Merci pour votre enthousiasme !
            </div>
          )}
          
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
            Nous respectons votre vie privée. Désinscription à tout moment.
          </p>
        </div>
      </div>
    </section>
  );
}
