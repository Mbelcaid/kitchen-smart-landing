'use client';

import { useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/mwpbkkkw', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });
      
      if (response.ok) {
        setStatus('success');
        setMessage('Votre message a été envoyé avec succès !');
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Erreur lors de l\'envoi du message');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Une erreur est survenue. Veuillez réessayer plus tard.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Contactez-nous
      </h2>
      
      {status === 'success' ? (
        <div className="p-4 mb-6 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">
          {message}
        </div>
      ) : status === 'error' ? (
        <div className="p-4 mb-6 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg">
          {message}
        </div>
      ) : null}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Nom complet *
          </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 text-gray-900 dark:text-white"
            />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email *
          </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 text-gray-900 dark:text-white"
            />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Sujet *
          </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 text-gray-900 dark:text-white"
            />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Message *
          </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 text-gray-900 dark:text-white"
            ></textarea>
        </div>
        
        <div className="flex items-center">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
          </button>
        </div>
      </form>
    </div>
  );
}
