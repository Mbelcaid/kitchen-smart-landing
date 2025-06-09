# Guide de Modification - KitchenSmart

## Table des Matières
1. [Structure des Fichiers](#structure-des-fichiers)
2. [Modification du Contenu](#modification-du-contenu)
3. [Ajout de Nouvelles Sections](#ajout-de-nouvelles-sections)
4. [Personnalisation du Style](#personnalisation-du-style)
5. [Mise à Jour des Images](#mise-à-jour-des-images)
6. [Déploiement des Changements](#déploiement-des-changements)

## Structure des Fichiers

```
src/
├── app/                    # Pages de l'application
│   ├── contact/            # Page de contact
│   ├── privacy/            # Page de confidentialité
│   └── page.tsx            # Page d'accueil
├── components/
│   ├── marketing/         # Composants marketing
│   └── ui/                 # Composants d'interface
└── lib/                    # Utilitaires et configurations
```

## Modification du Contenu

### 1. Page d'Accueil (`app/page.tsx`)

**Section Héro :**
```tsx
// Ligne ~40-50
export default function Home() {
  return (
    <main>
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {/* Modifier le titre ici */}
            Générez des recettes à partir de vos ingrédients
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            {/* Modifier la description ici */}
            Découvrez comment réduire le gaspillage alimentaire...
          </p>
        </div>
      </section>
    </main>
  );
}
```

### 2. Section Statistiques (`components/marketing/impact-stats.tsx`)

**Modifier les statistiques :**
```tsx
const stats = [
  {
    id: 1,
    name: 'Repas sauvés',
    value: 0,  // Valeur initiale
    icon: '🍽️',
    suffix: ''
  },
  // ... autres statistiques
];
```

## Ajout de Nouvelles Sections

1. Créez un nouveau composant dans `components/marketing/`
2. Importez-le dans `app/page.tsx`
3. Ajoutez-le à la structure de la page

## Personnalisation du Style

### Couleurs
Les couleurs sont définies dans `tailwind.config.js` :
```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#10B981', // vert émeraude
        secondary: '#1F2937', // gris foncé
      }
    }
  }
}
```

### Police
La police est configurée dans `app/layout.tsx` :
```tsx
const inter = Inter({ subsets: ['latin'] });

// Utilisation dans le composant
<html lang="fr" className={inter.className}>
```

## Mise à Jour des Images

1. Placez les nouvelles images dans `public/images/`
2. Utilisez le composant `Image` de Next.js :
```tsx
import Image from 'next/image';

<Image 
  src="/images/nouvelle-image.jpg"
  alt="Description de l'image"
  width={500}
  height={300}
  className="rounded-lg"
/>
```

## Déploiement des Changements

1. Vérifiez les modifications en local :
   ```bash
   npm run dev
   ```

2. Poussez les changements sur la branche principale :
   ```bash
   git add .
   git commit -m "Description des modifications"
   git push origin main
   ```

3. Le déploiement se fera automatiquement si configuré avec Vercel/Netlify

## Bonnes Pratiques

1. Toujours tester les changements en local avant de pousser
2. Utiliser des commits atomiques
3. Documenter les changements majeurs
4. Vérifier l'affichage sur mobile et desktop

## Support

Pour toute question, consultez la documentation ou contactez l'équipe de développement.
