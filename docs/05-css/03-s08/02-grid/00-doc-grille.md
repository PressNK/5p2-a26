---
---

# 📚 Grille (Grid)

CSS Grid est un système de mise en page bidimensionnel qui permet de créer des layouts plus complexes qu'avec Flexbox. Contrairement à Flexbox qui est unidimensionnel, Grid est excellent pour organiser le contenu en deux dimensions simultanément (sur des colonnes et des rangées).

:::info
Grid est idéal pour créer des layouts en **deux dimensions** (rangées ET colonnes). Pour des layouts simples en une dimension, Flexbox peut être suffisant.
:::

## Activation de Grid

Pour utiliser Grid, on applique `display: grid` au conteneur parent:

```css
.container {
    display: grid;
}
```

Cela transforme le conteneur en grille, mais sans définir de colonnes/rangées, tout reste empilé verticalement.

### Exemple de base

<SandpackPlayground
template="static"
showTabs={true}
editorHeight={600}
files={{
'/index.html': `<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h2>Sans Grid</h2>
    <div class="normal-container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    </div>

    <h2>Avec Grid (3 colonnes)</h2>
    <div class="grid-container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    </div>
</body>
</html>`,
'styles.css': `body {
    font-family: Arial, sans-serif;
    margin: 20px;
}

.normal-container,
.grid-container {
    border: 2px solid #666;
    padding: 10px;
    margin: 20px 0;
    background-color: #f9f9f9;
}

.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
}

.item {
    background-color: #4caf50;
    color: white;
    padding: 20px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
}`
}}
/>

## Propriétés du conteneur Grid

### `grid-template-columns` et `grid-template-rows`
Définissent le nombre et la taille des colonnes et des rangées.

```css
.container {
    display: grid;
    grid-template-columns: 100px 200px 100px;    /* 3 colonnes avec tailles fixes */
    grid-template-rows: 50px 100px;              /* 2 rangées avec tailles fixes */
}
```

#### Unités courantes

**Pixels (px)** - Taille fixe
```css
grid-template-columns: 200px 300px 200px;
```

**Pourcentages (%)** - Relatif au conteneur
```css
grid-template-columns: 25% 50% 25%;
```

**Fractions (fr)** - Distribue l'espace disponible
```css
grid-template-columns: 1fr 2fr 1fr;    /* 2e colonne = 2x les autres */
```

**Auto** - Taille basée sur le contenu
```css
grid-template-columns: auto 1fr auto;
```

<SandpackPlayground
template="static"
showTabs={true}
files={{
'/index.html': `<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h2>Colonnes en pixels</h2>
    <div class="grid-pixels">
    <div class="item">100px</div>
    <div class="item">200px</div>
    <div class="item">100px</div>
    </div>

    <h2>Colonnes en fractions (fr)</h2>
    <div class="grid-fractions">
    <div class="item">1fr</div>
    <div class="item">2fr</div>
    <div class="item">1fr</div>
    </div>

    <h2>Colonnes mixtes</h2>
    <div class="grid-mixed">
    <div class="item">200px</div>
    <div class="item">1fr</div>
    <div class="item">auto</div>
    </div>
</body>
</html>`,
'styles.css': `body {
    font-family: Arial, sans-serif;
    margin: 20px;
}

h2 {
    color: #333;
    margin: 20px 0 10px 0;
}

.grid-pixels,
.grid-fractions,
.grid-mixed {
    display: grid;
    gap: 10px;
    border: 2px solid #666;
    padding: 10px;
    margin: 10px 0 30px 0;
    background-color: #f9f9f9;
}

.grid-pixels {
      grid-template-columns: 100px 200px 100px;
}

.grid-fractions {
    grid-template-columns: 1fr 2fr 1fr;
}

.grid-mixed {
    grid-template-columns: 200px 1fr auto;
}

.item {
    background-color: #2196f3;
    color: white;
    padding: 20px;
    text-align: center;
    font-weight: bold;
}`
}}
/>

### `repeat()`
Répète un patron de colonnes/rangées.

```css
.container {
    grid-template-columns: repeat(3, 1fr);           /* 3 colonnes égales */
    grid-template-columns: repeat(4, 100px);         /* 4 colonnes de 100px */
    grid-template-columns: repeat(2, 1fr 2fr);       /* Patron: 1fr 2fr 1fr 2fr */
}
```

<SandpackPlayground
template="static"
showTabs={true}
files={{
'/index.html': `<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h2>repeat(4, 1fr) - 4 colonnes égales</h2>
    <div class="grid-repeat">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
    <div class="item">7</div>
    <div class="item">8</div>
    </div>
</body>
</html>`,
'styles.css': `body {
    font-family: Arial, sans-serif;
    margin: 20px;
}

h2 {
    color: #333;
    margin-bottom: 10px;
}

.grid-repeat {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    border: 2px solid #666;
    padding: 10px;
    background-color: #f9f9f9;
}

.item {
    background-color: #9c27b0;
    color: white;
    padding: 20px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
}`
}}
/>

### `minmax()`
Définit une taille minimum et maximum.

```css
.container {
    grid-template-columns: minmax(100px, 1fr) minmax(200px, 2fr);
    /* Colonne 1: min 100px, max 1fr */
    /* Colonne 2: min 200px, max 2fr */
}
```

### `gap` (ou `grid-gap`)
Définis l'espace entre les cellules de la grille.

```css
.container {
    display: grid;
    gap: 20px;                  /* Espace de 20px partout */
    gap: 20px 10px;             /* 20px vertical, 10px horizontal */
    row-gap: 20px;              /* Espace vertical seulement */
    column-gap: 10px;           /* Espace horizontal seulement */
}
```

### `justify-items` et `align-items`
Alignent les items à l'intérieur de leurs cellules.

```css
.container {
    display: grid;
    justify-items: start;       /* start | end | center | stretch (défaut) */
    align-items: start;         /* Alignement vertical */
}
```

### `justify-content` et `align-content`
Alignent la grille entière à l'intérieur du conteneur (si la grille est plus petite que le conteneur).

```css
.container {
    display: grid;
    justify-content: center;    /* start | end | center | space-between | space-around | space-evenly */
    align-content: center;      /* Alignement vertical de la grille */
}
```

## Propriétés des items Grid

### `grid-column` et `grid-row`
Positionnent un item sur des colonnes/rangées spécifiques.

```css
.item {
    grid-column: 1 / 3;         /* De la ligne 1 à la ligne 3 (occupe 2 colonnes) */
    grid-row: 1 / 2;            /* De la ligne 1 à la ligne 2 (occupe 1 rangée) */
    
    /* Syntaxe alternative */
    grid-column-start: 1;
    grid-column-end: 3;
}
```

**Raccourci avec span:**
```css
.item {
    grid-column: span 2;        /* Occupe 2 colonnes */
    grid-row: span 3;           /* Occupe 3 rangées */
}
```

<SandpackPlayground
template="static"
showTabs={true}
files={{
'/index.html': `<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h2>Placement des items avec grid-column et grid-row</h2>

    <div class="grid-container">
    <div class="item item-1">1<br>(2 colonnes)</div>
    <div class="item item-2">2</div>
    <div class="item item-3">3<br>(2 rangées)</div>
    <div class="item item-4">4</div>
    <div class="item item-5">5</div>
    <div class="item item-6">6<br>(2x2)</div>
    </div>
</body>
</html>`,
'styles.css': `body {
    font-family: Arial, sans-serif;
    margin: 20px;
}

h2 {
    color: #333;
    margin-bottom: 10px;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 100px);
    gap: 10px;
    border: 2px solid #666;
    padding: 10px;
    background-color: #f9f9f9;
}

.item {
    background-color: #3f51b5;
    color: white;
    padding: 20px;
    text-align: center;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
}

.item-1 {
    grid-column: span 2;
    background-color: #f44336;
}

.item-3 {
    grid-row: span 2;
    background-color: #4caf50;
}

.item-6 {
    grid-column: span 2;
    grid-row: span 2;
    background-color: #ff9800;
}`
}}
/>

### `grid-area`
Raccourci pour définir row-start, column-start, row-end, column-end.

```css
.item {
    grid-area: 1 / 2 / 3 / 4;
    /* row-start / column-start / row-end / column-end */
}
```

**Avec des noms (grid-template-areas):**
```css
.container {
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

<SandpackPlayground
template="static"
showTabs={true}
files={{
'/index.html': `<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="grid-container">
    <div class="header">Header</div>
    <div class="sidebar">Sidebar</div>
    <div class="main">Main Content</div>
    <div class="footer">Footer</div>
    </div>
</body>
</html>`,
'styles.css': `body {
    margin: 0;
    font-family: Arial, sans-serif;
}

.grid-container {
    display: grid;
    grid-template-columns: 200px 1fr 1fr;
    grid-template-rows: 80px 1fr 60px;
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
    gap: 10px;
    height: 100vh;
    padding: 10px;
    background-color: #f0f0f0;
}

.header {
    grid-area: header;
    background-color: #2196f3;
    color: white;
    padding: 20px;
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
}

.sidebar {
    grid-area: sidebar;
    background-color: #4caf50;
    color: white;
    padding: 20px;
    font-weight: bold;
}

.main {
    grid-area: main;
    background-color: white;
    padding: 20px;
    border: 2px solid #ddd;
}

.footer {
    grid-area: footer;
    background-color: #333;
    color: white;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
}`
}}
/>

### `justify-self` et `align-self`
Alignent un item individuel dans sa cellule.

```css
.item {
    justify-self: start;        /* start | end | center | stretch */
    align-self: center;         /* Alignement vertical */
}
```

<SandpackPlayground
template="static"
showTabs={true}
files={{
'/index.html': `<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h2>justify-self et align-self</h2>

    <div class="grid-container">
    <div class="item">Normal</div>
    <div class="item self-start">justify-self: start</div>
    <div class="item self-center">justify-self: center</div>
    <div class="item self-end">justify-self: end</div>
    <div class="item align-center">align-self: center</div>
    <div class="item align-end">align-self: end</div>
    </div>
</body>
</html>`,
'styles.css': `body {
    font-family: Arial, sans-serif;
    margin: 20px;
}

h2 {
    color: #333;
    margin-bottom: 10px;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 120px);
    gap: 10px;
    border: 2px solid #666;
    padding: 10px;
    background-color: #f9f9f9;
}

.item {
    background-color: #e91e63;
    color: white;
    padding: 15px;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
}

.self-start {
    justify-self: start;
    width: 140px;
}

.self-center {
    justify-self: center;
    width: 140px;
}

.self-end {
    justify-self: end;
    width: 140px;
}

.align-center {
    align-self: center;
    height: 50px;
}

.align-end {
    align-self: end;
    height: 50px;
}`
}}
/>

## Cas d'usage courants

### Layout de page classique

```css
.page {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
    min-height: 100vh;
}
```

### Grille d'éléments de tailles variées

```css
.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.card-large {
    grid-column: span 2;
    grid-row: span 2;
}
```

<SandpackPlayground
template="static"
showTabs={true}
files={{
'/index.html': `<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h2>Grille de cartes avec tailles variées</h2>

    <div class="cards">
    <div class="card">Carte 1</div>
    <div class="card">Carte 2</div>
    <div class="card card-large">Carte Large<br>(2x2)</div>
    <div class="card">Carte 4</div>
    <div class="card">Carte 5</div>
    <div class="card">Carte 6</div>
    <div class="card">Carte 7</div>
    </div>
</body>
</html>`,
'styles.css': `body {
    font-family: Arial, sans-serif;
    margin: 20px;
}

h2 {
    color: #333;
    margin-bottom: 20px;
}

.cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: 150px;
    gap: 15px;
}

.card {
    background-color: #00bcd4;
    color: white;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 18px;
}

.card-large {
    grid-column: span 2;
    grid-row: span 2;
    background-color: #ff9800;
    font-size: 24px;
}`
}}
/>

## Grid vs Flexbox: Quand utiliser quoi?

### Utilisez **Grid** quand:
- Vous avez besoin d'un layout en 2 dimensions (lignes ET colonnes)
- Vous voulez un contrôle précis sur le placement des éléments
- Vous créez une structure de page complexe

### Utilisez **Flexbox** quand:
- Vous avez besoin d'un layout en 1 dimension (une rangée OU une colonne)
- Vous voulez que les items contrôlent leur propre taille
- Vous alignez des éléments ou distribuez de l'espace
- Vous créez des composants simples (barres de navigation, cartes)

:::info
**Grid et Flexbox se complètent!** Il est tout à fait normal d'utiliser Grid pour la structure principale d'une page, puis Flexbox pour les composants à l'intérieur.
:::
