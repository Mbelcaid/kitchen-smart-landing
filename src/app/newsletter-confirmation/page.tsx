'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NewsletterConfirmation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white flex flex-col items-center justify-center p-4 text-center">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-3 bg-emerald-500/20 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative text-6xl md:text-8xl font-black mb-6 flex items-center justify-center gap-4">
              📱 ✉️ 🎉
            </div>
          </div>
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-500"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Merci pour votre inscription !
        </motion.h1>

        <motion.p 
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Votre smartphone va bientôt devenir votre meilleur allié en cuisine ! Vous recevrez les dernières mises à jour, des offres exclusives et vous aurez la chance de devenir bêta-testeur de notre application mobile anti-gaspillage.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
        >
          <Link
            href="/"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full transition-colors text-center focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Retour à l'accueil
          </Link>
        </motion.div>

        <motion.div 
          className="mt-12 text-xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="mb-4">Voici ce que vous pouvez attendre :</p>
          <ul className="text-left list-none space-y-4 mb-8">
            <li className="flex items-start">
              <span className="mr-3 text-emerald-500">📲</span>
              <span>Des notifications sur les nouvelles fonctionnalités avant tout le monde</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-emerald-500">🔔</span>
              <span>Des alertes intelligentes pour vos aliments qui approchent la date limite</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-emerald-500">🍳</span>
              <span>Des recettes personnalisées basées sur ce que vous avez déjà dans votre frigo</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-emerald-500">🚀</span>
              <span>Une invitation pour tester la version bêta dès qu'elle sera disponible</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
