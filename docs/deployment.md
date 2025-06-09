# Guide de Déploiement

## Options de Déploiement

### 1. Vercel (Recommandé)

1. **Prérequis**
   - Compte Vercel
   - Compte GitHub/GitLab/Bitbucket

2. **Étapes**
   ```bash
   # Installation de l'interface Vercel
   npm install -g vercel
   
   # Connexion
   vercel login
   
   # Déploiement
   vercel
   ```

3. **Configuration**
   - Variables d'environnement :
     ```
     NEXT_PUBLIC_FORMSPREE_FORM_ID=votre_id_formspree
     ```

### 2. Netlify

1. **Configuration**
   - Nouveau site depuis Git
   - Paramètres de build :
     - Commande de build : `npm run build`
     - Dossier de publication : `out`

2. **Variables d'environnement**
   - Ajoutez les mêmes variables que pour Vercel

## Configuration du Domaine

1. **Acheter un nom de domaine**
   - Sur Namecheap, OVH, ou autre registraire

2. **Configurer les DNS**
   - Pour Vercel :
     ```
     CNAME www.votredomaine.com cname.vercel-dns.com.
     A votre-domaine.com 76.76.21.21
     ```

## Mise en Production

1. **Optimisation des performances**
   ```bash
   # Générer une version optimisée
   npm run build
   
   # Vérifier le bundle
   npx next bundle-analyzer
   ```

2. **Sécurité**
   - Activer HTTPS
   - Configurer CSP (Content Security Policy)
   - Mettre à jour régulièrement les dépendances

3. **Monitoring**
   - Configurer Vercel Analytics
   - Ajouter Google Analytics ou autre outil de suivi

## Mises à Jour

Pour mettre à jour le site :

1. Pousser les changements sur la branche principale
2. Vercel/Netlify détectera les changements et redéploiera automatiquement

## Rollback

En cas de problème :

1. **Vercel** : Allez dans l'onglet "Deployments"
2. Trouvez la version stable précédente
3. Cliquez sur "Redeploy"
