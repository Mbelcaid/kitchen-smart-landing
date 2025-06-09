# Structure du Projet

```
kitchen-smart-landing/
├── public/                 # Fichiers statiques
├── src/
│   ├── app/               # Pages de l'application
│   │   ├── contact/        # Page de contact
│   │   ├── privacy/        # Page de politique de confidentialité
│   │   ├── layout.tsx      # Layout principal
│   │   └── page.tsx        # Page d'accueil
│   │
│   ├── components/       # Composants réutilisables
│   │   ├── marketing/      # Composants marketing
│   │   │   ├── header.tsx  # En-tête du site
│   │   │   ├── footer.tsx  # Pied de page
│   │   │   └── ...
│   │   └── ui/           # Composants d'interface utilisateur
│   │
│   ├── lib/             # Utilitaires et configurations
│   └── styles/            # Fichiers de style globaux
│
├── docs/                # Documentation du projet
├── .env.local           # Variables d'environnement (à créer)
├── next.config.js       # Configuration Next.js
├── package.json         # Dépendances et scripts
└── README.md           # Fichier README principal
```

## Fichiers Clés

### `src/app/page.tsx`
Page d'accueil principale avec les sections :
- Hero
- Fonctionnalités
- Comment ça marche
- Témoignages
- Newsletter
- Contact

### `src/components/marketing/header.tsx`
Composant d'en-tête avec :
- Navigation principale
- Bouton d'inscription
- Mode sombre/clair

### `src/components/marketing/footer.tsx`
Pied de page avec :
- Liens utiles
- Liens vers les réseaux sociaux
- Mentions légales

### `src/app/contact/page.tsx`
Page de contact avec formulaire utilisant Formspree.

## Organisation du Code

- **Composants** : Tous les composants sont organisés par fonctionnalité
- **Styles** : Utilisation de Tailwind CSS avec des classes utilitaires
- **Types** : Les types TypeScript sont définis près de leurs composants respectifs
- **Hooks personnalisés** : Placés dans le dossier `src/hooks/` (à créer si nécessaire)

## Bonnes Pratiques

1. **Nommage des composants** : Utilisez la convention PascalCase (ex: `UserProfile.tsx`)
2. **Props** : Typage strict avec TypeScript
3. **Hooks** : Préfixez les hooks personnalisés avec `use` (ex: `useUserData`)
4. **Tests** : Placez les fichiers de test à côté des composants avec l'extension `.test.tsx`
5. **Documentation** : Documentez les props et les fonctions complexes avec des commentaires JSDoc
