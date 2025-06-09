# Spécifications Techniques - Site Vitrine KitchenSmart

## 1. Architecture Technique (Approche Légère)

### 1.1 Stack Technique (100% Gratuite)
- **Framework** : Next.js 14+ (avec Pages Router pour plus de simplicité)
- **Langage** : JavaScript (pour un développement plus rapide)
- **Styling** : 
  - Tailwind CSS (sans configuration avancée)
  - Animations CSS natives (pas de bibliothèque supplémentaire)
- **Formulaires** : Formulaire HTML natif avec validation basique
- **Tests** : Tests manuels initiaux (pas de configuration de test automatisé pour le MVP)

### 1.2 Structure des Dossiers Simplifiée
```
landing-page/
├── public/              # Fichiers statiques
│   ├── images/         
│   ├── videos/
│   └── favicon.ico
├── pages/               # Pages du site (Next.js Pages Router)
│   ├── api/           # API Routes (si nécessaire)
│   ├── _app.js        # Configuration de l'application
│   └── index.js       # Page d'accueil
├── components/         # Composants réutilisables
├── styles/             # Fichiers CSS globaux
├── .env.local          # Variables d'environnement
└── package.json        # Dépendances et scripts
```

## 2. Composants Clés

### 2.1 Header
- Logo cliquable (retour à l'accueil)
- Navigation principale
- Bouton CTA "Rejoindre la bêta"
- Menu mobile (hamburger sur mobile)

### 2.2 Hero Section
- Titre accrocheur
- Sous-titre explicatif
- Vidéo de présentation (autoplay, muet, bouclée)
- Formulaire d'inscription simplifié
- Indicateur de défilement

### 2.3 Section Problématique
- Chiffres clés (animés au scroll)
- Infographie interactive
- Témoignage vidéo court

### 2.4 Section Solution
- Présentation en 3 étapes
- Captures d'écran de l'application
- Avantages clés sous forme de cartes

### 2.5 Formulaire d'Inscription
- Champs : Prénom (optionnel), Email (obligatoire)
- Case à cocher RGPD
- Message de confirmation
- Redirection vers une page de remerciement

## 3. Performance

### 3.1 Objectifs
- First Contentful Paint < 1.5s
- Largest Contentful Paint < 2.5s
- Time to Interactive < 3.5s
- Score Lighthouse > 90/100

### 3.2 Optimisations
- Images en WebP avec fallback
- Chargement paresseux des images
- Préchargement des polices
- Code splitting automatique
- Mise en cache côté client

## 4. Sécurité

### 4.1 Mesures
- Protection CSRF pour les formulaires
- Validation côté serveur
- Headers de sécurité HTTP
- Protection contre le spam (honeypot)

### 4.2 Conformité
- RGPD (bannière cookies, mentions légales)
- Accessibilité (WCAG 2.1 AA)

## 5. Déploiement

### 5.1 Environnements
- **Production** : Vercel (kitchensmart.vercel.app)
- **Préproduction** : kitchensmart-staging.vercel.app
- **Développement** : Local avec Hot Reload

### 5.2 CI/CD
- Vérification des types TypeScript
- Exécution des tests
- Build de production
- Déploiement automatique sur Vercel

## 6. Monitoring (Optionnel pour MVP)

### 6.1 Outils Gratuits
- **Analytics** : Google Analytics 4 (gratuit)
- **Suivi des erreurs** : console.log et rapports utilisateurs
- **Formulaire** : Google Forms intégré (gratuit) ou Formspree (gratuit jusqu'à 50 soumissions/mois)

### 6.2 Alertes (Optionnel)
- **Disponibilité** : UptimeRobot (gratuit pour 50 moniteurs)
- **Erreurs** : Email en cas de soumission de formulaire échouée
- **Performance** : Google Search Console (gratuit)

---
*Document créé le 22/05/2025 - Version 1.0*
