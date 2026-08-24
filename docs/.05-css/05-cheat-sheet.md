# 💡 Cheat Sheet CSS

## Sélecteurs de base

```css
p { color: blue; } /* Élément */

.ma-classe { color: red; } /* Classe */

#mon-id { color: green; } /* ID */

h1, h2, h3 { font-weight: bold; } /* Plusieurs sélecteurs */

div p { color: blue; } /* Descendant */

/* Pseudo-classes */
a:hover { color: orange; }
a:active { color: red; }
```

## Box Model (Modèle de boîte)

```css
.box {
  /* Contenu */
  width: 300px;
  height: 200px;
  
  /* Espacement intérieur */
  padding: 20px; /* Tous les côtés */
  padding-top: 10px;
  padding-right: 15px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding: 10px 15px; /* haut/bas gauche/droite */
  
  /* Bordure */
  border: 2px solid black;
  border-radius: 10px;
  
  /* Espacement extérieur */
  margin: 20px;
  margin: 0 auto; /* centrer horizontalement */
}
```

## Couleurs

```css
.element {
  color: red; /* Nom de couleur */
  
  background-color: #ff6b00; /* Hexadécimal */
  
  color: rgb(255, 107, 0); /* RGB */
  
  background-color: rgba(255, 107, 0, 0.5); /* RGBA (avec transparence) */
}
```

## Texte et Police

```css
.texte {
  /* Police */
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  font-style: italic;
  
  /* Alignement */
  text-align: center; /* left, right, justify */
  
  /* Décoration */
  text-decoration: underline;
  text-decoration: line-through; /* rayé */
  text-decoration: none; /* enlever */
  
  /* Transformation */
  text-transform: uppercase; /* lowercase, capitalize */
  
  /* Espacement */
  line-height: 1.5;
  letter-spacing: 2px;
}
```

## Affichage et Positionnement

```css
/* Display */
.element {
  display: block; /* prend toute la largeur */
  display: inline; /* sur la même ligne */
  display: inline-block; /* hybride */
  display: none; /* caché */
  display: flex; /* voir Flexbox */
}

/* Position */
.element {
  position: static; /* par défaut */
  position: relative; /* relatif à sa position normale */
  position: absolute; /* relatif au premier parent 'relative' */
  position: fixed; /* fixe dans la fenêtre */
  position: sticky /* Colle au premier parent 'relative' */
  
  /* Avec position absolute/relative/fixed */
  top: 10px;
  right: 20px;
  bottom: 10px;
  left: 20px;
}
```

## Flexbox

```css
/* Conteneur parent */
.container {
  display: flex;
  
  /* Direction */
  flex-direction: row; /* horizontal (défaut) */
  flex-direction: column; /* vertical */
  
  /* Alignement horizontal (row) */
  justify-content: flex-start; /* début */
  justify-content: center; /* centré */
  justify-content: space-between; /* espacement entre */
  justify-content: space-around; /* espacement autour */
  
  /* Alignement vertical (row) */
  align-items: flex-start; /* haut */
  align-items: center; /* centré */
  align-items: flex-end; /* bas */
  
  /* Espacement entre éléments */
  gap: 20px;
}

/* Enfants */
.item {
  flex: 1; /* prend l'espace disponible également */
  flex: 2; /* prend 2x plus d'espace */
}
```

## Variables CSS

```css
/* Définir */
:root {
  --couleur-principale: #ff6b00;
}

/* Utiliser */
.element {
  color: var(--couleur-principale);
}
```

## Grid

```css
/* Conteneur parent */
.container {
  display: grid;
  
  /* Définir les colonnes */
  grid-template-columns: 200px 200px 200px; /* 3 colonnes fixes */
  grid-template-columns: 1fr 1fr 1fr; /* 3 colonnes égales (1 fraction de l'espace chaque) */
  grid-template-columns: 1fr 2fr 1fr; /* colonne du milieu 2x plus large */
  grid-template-columns: repeat(3, 1fr); /* 3 colonnes égales */
  
  /* Définir les rangées */
  grid-template-rows: 100px 200px;
  grid-template-rows: auto auto; /* hauteur automatique */
  
  /* Espacement entre cellules */
  gap: 20px; /* espacement horizontal et vertical */
  row-gap: 20px; /* espacement vertical seulement */
  column-gap: 30px; /* espacement horizontal seulement */
}

/* Enfants */
.item {
  grid-column: span 2; /* occuper 2 colonnes */
  grid-row: span 2; /* occuper 2 rangées */
}
```

## Transitions et Animations

```css
.element {
  /* Transition simple */
  transition: all 0.3s;
  transition: color 0.3s ease;
  transition: transform 0.3s, background 0.2s;
}

.element:hover {
  transform: translateY(-5px); /* déplace vers le haut */
  transform: scale(1.1); /* agrandit */
  background: blue;
}
```

## Largeur et Hauteur

```css
.element {
  width: 300px;
  width: 50%; /* relatif au parent */
  width: 100vw; /* 100% de la largeur de l'écran */
  
  max-width: 1200px; /* largeur maximale */
  min-width: 300px; /* largeur minimale */
  
  height: 200px;
  height: 100vh; /* 100% de la hauteur de l'écran */
}
```

## Arrière-plan

```css
.element {
  background-color: #f5f5f5;
  
  /* Image */
  background-image: url('image.jpg');
  background-size: cover; /* couvre tout */
  background-position: center;
  background-repeat: no-repeat;

}
```

## Listes

```css
ul {
  list-style: none; /* enlever les puces */
  list-style: disc; /* puces rondes */
  list-style: square; /* puces carrées */
}

ol {
  list-style: decimal; /* numéros */
}
```