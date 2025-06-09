'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-[calc(100vh-64px)] bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Retour à l'accueil
          </Link>
        </div>
        
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Politique de Confidentialité
            </h1>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Dernière mise à jour : 1er juin 2024
            </p>
            
            <div className="prose dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">1. Introduction</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Chez KitchenSmart, nous prenons votre vie privée très au sérieux. Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos informations lorsque vous utilisez notre application et nos services.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">2. Données que nous collectons</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Nous pouvons collecter les types d'informations suivants :
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                  <li>Informations personnelles (nom, adresse e-mail, etc.) que vous fournissez lors de l'inscription</li>
                  <li>Données d'utilisation et informations sur la façon dont vous utilisez notre application</li>
                  <li>Informations sur votre appareil et votre connexion Internet</li>
                  <li>Cookies et technologies de suivi similaires</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">3. Comment nous utilisons vos données</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Nous utilisons les informations que nous collectons pour :
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                  <li>Fournir, maintenir et améliorer nos services</li>
                  <li>Personnaliser votre expérience utilisateur</li>
                  <li>Vous contacter concernant les mises à jour ou les offres promotionnelles</li>
                  <li>Détecter et prévenir les activités frauduleuses</li>
                  <li>Se conformer aux obligations légales</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">4. Partage de vos informations</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Nous ne vendons ni ne louons vos informations personnelles à des tiers. Nous pouvons partager vos informations avec :
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                  <li>Les fournisseurs de services qui travaillent en notre nom</li>
                  <li>Les autorités compétentes lorsque la loi l'exige</li>
                  <li>Les tiers dans le cadre d'une fusion, acquisition ou vente d'actifs</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">5. Vos droits</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Conformément au RGPD et à d'autres lois sur la protection des données, vous avez le droit de :
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                  <li>Accéder à vos données personnelles</li>
                  <li>Demander la rectification de vos données</li>
                  <li>Demander la suppression de vos données</li>
                  <li>Vous opposer au traitement de vos données</li>
                  <li>Demander la limitation du traitement</li>
                  <li>Demander la portabilité de vos données</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">6. Cookies et technologies similaires</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Nous utilisons des cookies et des technologies similaires pour améliorer votre expérience, analyser le trafic et personnaliser le contenu. Vous pouvez gérer vos préférences en matière de cookies via les paramètres de votre navigateur.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">7. Sécurité des données</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, altération, divulgation ou destruction.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">8. Conservation des données</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Nous conservons vos données personnelles aussi longtemps que nécessaire pour fournir nos services et nous conformer à nos obligations légales, sauf si une période de conservation plus longue est requise ou autorisée par la loi.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">9. Modifications de cette politique</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle politique sur cette page et en mettant à jour la date de "dernière mise à jour" en haut de cette politique.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">10. Nous contacter</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Si vous avez des questions concernant cette politique de confidentialité ou vos données personnelles, veuillez nous contacter à :
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <Link href="/contact" className="text-emerald-600 hover:underline dark:text-emerald-400">
                    Formulaire de contact
                  </Link>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
