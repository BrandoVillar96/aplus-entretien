# A Plus Entretien — Site web (React)

Site vitrine bilingue (FR/EN) pour A Plus Entretien, entreprise de nettoyage
commercial, industriel et institutionnel basée à Montréal. Inspiré de
[aplusentretien.com](https://www.aplusentretien.com/), reconstruit avec React
et Tailwind CSS.

## Stack technique

- [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/) pour le style
- [lucide-react](https://lucide.dev/) pour les icônes
- Contenu bilingue centralisé (`src/content.js`) avec bouton de bascule FR/EN

## Démarrage

```bash
npm install
npm run dev       # serveur de développement (http://localhost:5173)
npm run build     # build de production dans dist/
npm run preview   # prévisualiser le build de production
```

## Structure du projet

```
src/
  content.js              # tout le texte du site (FR + EN)
  context/
    LanguageContext.jsx    # état global de la langue + bascule
  components/
    Header.jsx              # nav, logo, bascule de langue, CTA
    Hero.jsx                 # section d'accueil
    TrustBar.jsx             # bandeau de confiance (assuré, écologique, etc.)
    About.jsx                 # section "à propos"
    Services.jsx              # grille des 15 services
    WhyUs.jsx                  # section "pourquoi nous choisir"
    CtaBanner.jsx               # bandeau d'appel à l'action
    ContactSection.jsx           # infos de contact + formulaire de soumission
    Footer.jsx                    # pied de page
  App.jsx
  main.jsx
```

## Personnalisation

- **Textes** : tout se modifie dans `src/content.js` (objets `fr` et `en`).
- **Couleurs** : palette définie dans `tailwind.config.js` (`navy`, `teal`, `gold`).
- **Formulaire de contact** : `ContactSection.jsx` contient un formulaire
  statique (aucun backend branché). Pour le rendre fonctionnel, connectez-le à
  un service comme Formspree, EmailJS, ou une route API de votre choix dans
  la fonction `handleSubmit`.
- **Coordonnées réelles** : téléphone et courriel actuels sont ceux affichés
  sur le site original (514-562-9969 / aplusentretien@gmail.com) — à
  confirmer/ajuster si nécessaire.

## Déploiement

Le dossier `dist/` généré par `npm run build` est un site statique
déployable tel quel sur Vercel, Netlify, GitHub Pages, ou tout hébergeur
statique.
