# Guide d'Installation

## Prérequis
- Node.js 18 ou supérieur
- npm ou yarn
- Compte Formspree (pour les formulaires de contact)

## Installation

1. **Cloner le dépôt**
   ```bash
   git clone [URL_DU_DEPOT]
   cd kitchen-smart-landing
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configuration de l'environnement**
   Créez un fichier `.env.local` à la racine du projet avec les variables suivantes :
   ```
   NEXT_PUBLIC_FORMSPREE_FORM_ID=votre_id_formspree
   ```

4. **Démarrer le serveur de développement**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```
   Le site sera accessible à l'adresse : http://localhost:3000

## Commandes Disponibles

- `dev`: Démarre le serveur de développement
- `build`: Construit l'application pour la production
- `start`: Démarre le serveur de production
- `lint`: Exécute le linter
- `test`: Exécute les tests

## Configuration de Formspree

1. Créez un compte sur [Formspree](https://formspree.io/)
2. Créez un nouveau formulaire
3. Copiez l'ID du formulaire et ajoutez-le à votre fichier `.env.local`
