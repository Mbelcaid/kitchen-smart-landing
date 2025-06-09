# Fonctionnalités

## Fonctionnalités Principales

### 1. Gestion des Stocks
- Suivi des dates de péremption
- Alertes de péremption proche
- Catégorisation des aliments

### 2. Statistiques d'Impact
- Affichage en temps réel
- Calcul automatique des économies
- Visualisation de l'impact environnemental

### 3. Formulaire de Contact
- Validation côté client
- Envoi sécurisé via Formspree
- Messages de confirmation/erreur

## Fonctionnalités Techniques

### 1. Interface Utilisateur
- Design responsive avec Tailwind CSS
- Mode sombre/clair
- Animations fluides
- Navigation fluide

### 2. Performance
- Chargement optimisé des images
- Code splitting automatique avec Next.js
- Pré-rendu statique pour de meilleures performances

## Documentation des API

### Mise à jour des Statistiques
Pour mettre à jour les statistiques d'impact :

```javascript
// Mettre à jour le nombre d'utilisateurs
// Les autres statistiques sont calculées automatiquement
window.updateKitchenSmartStats(4, 1250); // ID 4 = Utilisateurs
```

### Référence des IDs
1. Repas sauvés
2. CO2 économisé (kg)
3. Économies réalisées (K€)
4. Utilisateurs actifs

## Prochaines Fonctionnalités

1. **Tableau de Bord**
   - Vue d'ensemble des statistiques
   - Historique des actions
   - Objectifs personnalisés

2. **Système de Notifications**
   - Alertes de péremption
   - Conseils personnalisés
   - Mises à jour hebdomadaires

3. **Mobile App**
   - Application iOS/Android
   - Synchronisation en temps réel
   - Notifications push
