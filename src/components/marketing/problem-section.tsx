'use client';

import { motion } from 'framer-motion';

export function ProblemSection() {
  const stats = [
    { 
      value: '30 kg', 
      label: 'de nourriture gaspillés par personne/an', 
      color: 'text-emerald-500',
      icon: (
        <div className="text-4xl mb-4">
          🗑️
        </div>
      )
    },
    { 
      value: '650 €', 
      label: 'jetés à la poubelle chaque année', 
      color: 'text-blue-500',
      icon: (
        <div className="text-4xl mb-4">
          💰
        </div>
      )
    },
    { 
      value: '10 millions', 
      label: 'de tonnes de déchets alimentaires en France', 
      color: 'text-amber-500',
      icon: (
        <div className="text-4xl mb-4">
          🏭
        </div>
      )
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="problem" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 scroll-mt-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-3 text-lg font-extrabold text-white mb-8 shadow-xl shadow-emerald-500/30 transform transition-all duration-300 hover:scale-105">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            LE DÉFI
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-6">
            Réduire le gaspillage alimentaire, un défi collectif
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Chaque année, des millions de tonnes de nourriture sont gaspillées alors que des millions de personnes 
            souffrent de la faim. Ensemble, changeons la donne avec des solutions innovantes et accessibles à tous.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
              variants={item}
            >
              <div className={`${stat.color} mb-4`}>
                {stat.icon}
              </div>
              <div className={`text-4xl font-bold ${stat.color} mb-3`}>
                {stat.value}
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            La plupart du temps, nous jetons des aliments encore consommables simplement 
            parce que nous oublions ce que nous avons ou que nous ne savons pas comment les utiliser.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
