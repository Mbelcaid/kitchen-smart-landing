import Image from 'next/image';

const steps = [
  {
    title: 'Scannez vos produits',
    description: 'Enregistrez facilement vos courses en scannant les codes-barres ou en prenant des photos des tickets de caisse.',
    icon: '📱'
  },
  {
    title: 'Gestion intelligente',
    description: 'Optimisez votre gestion de stock avec nos outils intelligents et découvrez toutes nos fonctionnalités ci-dessous.',
    icon: '🔔',
    features: [
      'Liste de courses automatique',
      'Alertes de péremption',
      'Suggestions personnalisées'
    ]
  },
  {
    title: 'Découvrez des recettes',
    description: 'Trouvez des idées de recettes personnalisées en fonction des ingrédients que vous avez chez vous.',
    icon: '👨‍🍳'
  },
  {
    title: 'Gérez votre inventaire',
    description: 'Ayez une vue d\'ensemble de vos stocks et de leur emplacement dans votre cuisine.',
    icon: '📊'
  }
];

export function HowItWorks() {
  console.log('Rendering HowItWorks component');
  return (
    <section className="py-20 bg-gray-900 text-white scroll-mt-16">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-3 text-lg font-extrabold text-white mb-8 shadow-xl shadow-green-500/30 transform transition-all duration-300 hover:scale-105">
            <Image 
              src="/images/icons/solution-icon.webp" 
              alt="Solution" 
              className="w-6 h-6 mr-2 object-contain"
              width={24}
              height={24}
              priority
              unoptimized
            />
            NOTRE SOLUTION
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Une solution complète contre le gaspillage
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Découvrez comment KitchenSmart transforme votre façon de cuisiner et de gérer vos aliments en 4 étapes simples
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div 
              key={`${step.title}-${index}`}
              className="group relative overflow-hidden rounded-xl border border-gray-700 bg-gray-800 p-8 transition-all hover:bg-gray-700/80 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-2xl shadow-lg">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {step.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {step.description}
              </p>
              {step.features && (
                <ul className="space-y-2 mt-4">
                  {step.features.map((feature, i) => (
                    <li key={`${feature}-${i}`} className="flex items-start">
                      <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="absolute -bottom-8 -right-8 h-16 w-16 rounded-full bg-green-500/10 transition-all duration-300 group-hover:scale-[10] group-hover:opacity-0"></div>
            </div>
          ))}
        </div>

        {/* Section des fonctionnalités clés */}
        <div id="features" className="mt-24 scroll-mt-20">
          <div className="flex flex-col items-center justify-center mb-12">
            <h2 className="text-3xl font-bold text-center mb-4">
              Nos fonctionnalités clés
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-2"></div>
            <p className="text-gray-400 text-center max-w-2xl">
              Découvrez comment nous vous aidons à réduire le gaspillage alimentaire
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Carte Liste de courses intelligente */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-green-500/50 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🛒</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Liste de courses intelligente</h3>
              <p className="text-gray-300 mb-4">Générez automatiquement des listes de courses optimisées en fonction de vos recettes planifiées et de votre stock actuel.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start">
                  <svg className="h-4 w-4 text-green-400 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Génération automatique basée sur vos recettes</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-4 w-4 text-green-400 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Détection des ingrédients manquants</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-4 w-4 text-green-400 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Suggestions de quantités optimales</span>
                </li>
              </ul>
            </div>

            {/* Carte Alertes intelligentes */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-green-500/50 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Alertes intelligentes</h3>
              <p className="text-gray-300 mb-4">Ne ratez jamais une date de péremption grâce à nos alertes personnalisées et suggestions d'utilisation.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start">
                  <svg className="h-4 w-4 text-green-400 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Alertes avant péremption personnalisables</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-4 w-4 text-green-400 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Suggestions de recettes pour utiliser les aliments bientôt périmés</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-4 w-4 text-green-400 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Notifications push et par email</span>
                </li>
              </ul>
            </div>

            {/* Carte Suggestions personnalisées */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-green-500/50 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Suggestions intelligentes</h3>
              <p className="text-gray-300 mb-4">Découvrez des recettes qui correspondent à vos goûts et à ce que vous avez dans votre frigo.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start">
                  <svg className="h-4 w-4 text-green-400 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Recommandations basées sur vos ingrédients</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-4 w-4 text-green-400 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Filtres par régime alimentaire et préférences</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-4 w-4 text-green-400 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Découverte de nouvelles saveurs et recettes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
