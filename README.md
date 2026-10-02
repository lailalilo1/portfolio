# Portfolio – Laila Ilillou (React + Vite)

## Lancer le site en local
1. Installer Node.js (https://nodejs.org, version LTS).
2. Dans ce dossier : `npm install` puis `npm run dev`
3. Ouvrir l'adresse affichée (http://localhost:5173).

## Modifier le contenu
Tout est dans **src/data.js** : profil, compétences, projets, expériences, formation.
- E-mail, LinkedIn, GitHub : objet `profile`.
- Images de dashboards : copie-les dans **public/images/** puis dans le projet : `imgs: ["images/dashboard1.png"]`
- Démo / vidéo / code : champs `demo`, `video`, `code` du projet.
- CV : copie ton PDF dans **public/cv/Laila_Ilillou_CV.pdf**.
Le design est dans **src/styles.css**, les composants dans **src/App.jsx**.

## Mettre en ligne
`npm run build` crée le dossier `dist/`.
- **Vercel / Netlify** : importer le dépôt GitHub (build: `npm run build`, dossier: `dist`).
- **GitHub Pages** : publier le contenu de `dist/` (le projet utilise des chemins relatifs).
