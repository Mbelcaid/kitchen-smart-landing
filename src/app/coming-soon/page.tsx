'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ComingSoon() {
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
            <div className="relative text-6xl md:text-8xl font-black mb-6">
              🍳👩‍🍳
            </div>
          </div>
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-500"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Votre repas sera bientôt servi !
        </motion.h1>

        <motion.p 
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Notre équipe de chefs numériques est en train de préparer quelque chose de délicieux pour vous. 
          Revenez bientôt pour découvrir nos nouvelles fonctionnalités !
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
          className="mt-16 text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p>En attendant, suivez-nous sur nos réseaux pour des astuces cuisine !</p>
        </motion.div>
      </div>
    </div>
  );
}
