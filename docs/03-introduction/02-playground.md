---
---
import chatsHtml   from '!!raw-loader!@site/src/playground/s01/chats/index.html';
import chatsStyles from '!!raw-loader!@site/src/playground/s01/chats/styles.css';

# 2 - Expérimenter avec une page HTML

Amusez-vous avec la page web plus bas pour explorer et découvrir par vous-même les bases. N'ayez craintes, les modifications que vous faites ici seront réinitialisées si vous rechargez la page!

Quelques questions:
1. Quels liens faites-vous entre ce qui est à gauche (le HTML) et ce qui est à droite (l'affichage de la page Web)?
2. Êtes-vous en mesure de dire précisément quel élément HTML (ex.: `<h1>`) est responsable de l'affichage à droite?
3. Essayez:
   1. De modifier le titre affiché dans le haut de la page
   2. De modifier le nom affiché dans le pied de page, remplacez-le par votre nom
   3. De modifier la description d'un des chat
   4. D'ajouter un nouveau chat!
4. Amusez-vous!

<SandpackPlayground
  template="static"
  files={{
    '/index.html': chatsHtml,
    '/styles.css': chatsStyles
  }}
  editorHeight={692}
/>