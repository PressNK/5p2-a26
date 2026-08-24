---
---

# 📚 Flexbox (Flexible Box Layout)

Flexbox est un modèle de mise en page CSS qui permet de distribuer l'espace et d'aligner les éléments de manière flexible dans un conteneur, même quand leur taille est inconnue ou dynamique (n'est pas fixe).

:::info
Flexbox est idéal pour créer des layouts en rangée ou en colonne (afficher des éléments à l'horizontal ou à la verticale). Pour des layouts en deux dimensions (rangées ET colonnes), Grid est plus approprié.
:::

## Activation de Flexbox

Afin d'utiliser Flexbox, vous devez avoir un conteneur (parent) et des éléments (enfants).

On applique `display: flex` au conteneur parent:

```css
.container {
    display: flex;
}
```

Cela transforme automatiquement **tous les enfants** directs en **éléments flex**.

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
    <h2>Sans Flexbox</h2>
    <div class="normal-container">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>

    <h2>Avec Flexbox</h2>
    <div class="flex-container">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>
</body>
</html>`,
'styles.css': `body {
    font-family: Arial, sans-serif;
    margin: 20px;
}

.normal-container,
.flex-container {
    border: 2px solid #666;
    padding: 10px;
    margin: 20px 0;
    background-color: #f9f9f9;
}

.flex-container {
  display: flex;
}

.item {
    background-color: #4caf50;
    color: white;
    padding: 20px;
    margin: 5px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
}`
}}
/>

## Propriétés du conteneur flex

### `flex-direction`
Définit la direction principale des éléments. Principalement:
- `column`: affiche les éléments le long d'une colonne (donc, verticalement)
- `row`: affiche les éléments le long d'une rangée (donc, horizontalement)

```css
.container {
    display: flex;
    flex-direction: row;             /* Horizontal, de gauche à droite (défaut) */
    flex-direction: row-reverse;     /* Horizontal, de droite à gauche */
    flex-direction: column;          /* Vertical, de haut en bas */
    flex-direction: column-reverse;  /* Vertical, de bas en haut */
}
```

<SandpackPlayground
template="static"
showTabs={true}
editorHeight={700}
files={{
'/index.html': `<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h2>flex-direction: row (défaut)</h2>
    <div class="container row">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>

    <h2>flex-direction: column</h2>
    <div class="container column">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>

    <h2>flex-direction: row-reverse</h2>
    <div class="container row-reverse">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>
</body>
</html>`,
'styles.css': `body {
    font-family: Arial, sans-serif;
    margin: 20px;
}

.container {
    display: flex;
    border: 2px solid #666;
    padding: 10px;
    margin: 20px 0;
    background-color: #f9f9f9;
}

.row {
    flex-direction: row;
}

.column {
    flex-direction: column;
}

.row-reverse {
    flex-direction: row-reverse;
}

.item {
    background-color: #2196f3;
    color: white;
    padding: 20px;
    margin: 5px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
}`
}}
/>

### `justify-content`
Aligne les éléments le long de l'axe principal (horizontal si `row`, vertical si `column`).

```css
.container {
    display: flex;
    justify-content: flex-start;      /* Alignés au début (défaut) */
    justify-content: flex-end;        /* Alignés à la fin */
    justify-content: center;          /* Centrés */
    justify-content: space-between;   /* Espace entre les éléments */
    justify-content: space-around;    /* Espace autour des éléments égal, 1/2 de l'espace au début et avant le conteneur */
    justify-content: space-evenly;    /* Espace égal partout */
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
    <h2>justify-content: flex-start</h2>
    <div class="container flex-start">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>

    <h2>justify-content: center</h2>
    <div class="container center">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>

    <h2>justify-content: space-between</h2>
    <div class="container space-between">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>

    <h2>justify-content: space-around</h2>
    <div class="container space-around">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>
</body>
</html>`,
'styles.css': `body {
    font-family: Arial, sans-serif;
    margin: 20px;
}

.container {
    display: flex;
    border: 2px solid #666;
    padding: 10px;
    margin: 20px 0;
    background-color: #f9f9f9;
    min-height: 80px;
}

.flex-start {
    justify-content: flex-start;
}

.center {
    justify-content: center;
}

.space-between {
    justify-content: space-between;
}

.space-around {
    justify-content: space-around;
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

### `align-items`
Aligne les éléments le long de l'axe secondaire (vertical si `row`, horizontal si `column`).

```css
.container {
    display: flex;
    align-items: stretch;        /* Étire sur toute la hauteur (défaut) */
    align-items: flex-start;     /* Alignés en haut */
    align-items: flex-end;       /* Alignés en bas */
    align-items: center;         /* Centrés verticalement */
    align-items: baseline;       /* Alignés sur la ligne de base du texte */
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
    <h2>align-items: flex-start</h2>
    <div class="container flex-start">
      <div class="item">1</div>
      <div class="item tall">2</div>
      <div class="item">3</div>
    </div>

    <h2>align-items: center</h2>
    <div class="container center">
      <div class="item">1</div>
      <div class="item tall">2</div>
      <div class="item">3</div>
    </div>

    <h2>align-items: stretch</h2>
    <div class="container stretch">
      <div class="item">1</div>
      <div class="item tall">2</div>
      <div class="item">3</div>
    </div>
</body>
</html>`,
'styles.css': `body {
    font-family: Arial, sans-serif;
    margin: 20px;
}

.container {
    display: flex;
    border: 2px solid #666;
    padding: 10px;
    margin: 20px 0;
    background-color: #f9f9f9;
    min-height: 120px;
}

.flex-start {
    align-items: flex-start;
}

.center {
    align-items: center;
}

.stretch {
    align-items: stretch;
}

.item {
    background-color: #ff5722;
    color: white;
    padding: 20px;
    margin: 5px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
}

.tall {
    padding: 40px 20px;
}`
}}
/>

### `flex-wrap`
Contrôle si les éléments doivent passer à la ligne suivante ou non (retour de ligne).

```css
.container {
    display: flex;
    flex-wrap: nowrap;       /* Pas de retour à la ligne (défaut) */
    flex-wrap: wrap;         /* Retour à la ligne si nécessaire */
    flex-wrap: wrap-reverse; /* Retour à la ligne en ordre inverse */
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
    <h2>flex-wrap: nowrap (défaut)</h2>
    <div class="container nowrap">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
    </div>

    <h2>flex-wrap: wrap</h2>
    <div class="container wrap">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
    </div>
</body>
</html>`,
'styles.css': `body {
    font-family: Arial, sans-serif;
    margin: 20px;
}

.container {
    display: flex;
    border: 2px solid #666;
    padding: 10px;
    margin: 20px 0;
    background-color: #f9f9f9;
    width: 400px;
}

.nowrap {
    flex-wrap: nowrap;
}

.wrap {
    flex-wrap: wrap;
}

.item {
    background-color: #009688;
    color: white;
    padding: 20px;
    margin: 5px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    min-width: 100px;
}`
}}
/>

### `gap`
Définit l'espace entre les éléments flex (remplace les marges).

```css
.container {
    display: flex;
    gap: 10px;              /* Espace de 10px entre tous les éléments */
    gap: 10px 20px;         /* 10px vertical, 20px horizontal */
    row-gap: 10px;          /* Espace vertical seulement */
    column-gap: 20px;       /* Espace horizontal seulement */
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
    <h2>Sans gap (avec margin)</h2>
    <div class="container no-gap">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>

    <h2>Avec gap: 40px</h2>
    <div class="container with-gap">
      <div class="item-no-margin">1</div>
      <div class="item-no-margin">2</div>
      <div class="item-no-margin">3</div>
    </div>
</body>
</html>`,
'styles.css': `body {
    font-family: Arial, sans-serif;
    margin: 20px;
}

.container {
    display: flex;
    border: 2px solid #666;
    padding: 10px;
    margin: 20px 0;
    background-color: #f9f9f9;
}

.with-gap {
    gap: 40px;
}

.item {
    background-color: #673ab7;
    color: white;
    padding: 20px;
    margin: 5px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
}

.item-no-margin {
    background-color: #673ab7;
    color: white;
    padding: 20px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
}`
}}
/>

## Propriétés des éléments flex (les enfants du conteneur)

### `flex-grow`
Détermine comment un élément grandit pour remplir l'espace disponible.

```css
.item {
    flex-grow: 0;    /* Ne grandit pas (défaut) */
    flex-grow: 1;    /* Grandit pour remplir l'espace */
    flex-grow: 2;    /* Grandit 2x plus que les éléments avec flex-grow: 1 */
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
<h2>flex-grow</h2>
    <div class="container">
      <div class="item grow-0">grow: 0</div>
      <div class="item grow-1">grow: 1</div>
      <div class="item grow-2">grow: 2</div>
    </div>
</body>
</html>`,
'styles.css': `body {
    font-family: Arial, sans-serif;
    margin: 20px;
}

.container {
    display: flex;
    border: 2px solid #666;
    padding: 10px;
    background-color: #f9f9f9;
    gap: 10px;
}

.item {
    background-color: #3f51b5;
    color: white;
    padding: 20px;
    text-align: center;
    font-weight: bold;
}

.grow-0 {
    flex-grow: 0;
}

.grow-1 {
    flex-grow: 1;
}

.grow-2 {
    flex-grow: 2;
}`
}}
/>

### `flex-shrink`
Détermine comment un élément rétrécit si l'espace est insuffisant.

```css
.item {
    flex-shrink: 1;    /* Peut rétrécir (défaut) */
    flex-shrink: 0;    /* Ne rétrécit jamais */
    flex-shrink: 2;    /* Rétrécit 2x plus que les autres */
}
```

### `flex-basis`
Définis la taille de base d'un élément avant distribution de l'espace.

```css
.item {
    flex-basis: auto;     /* Taille basée sur le contenu (défaut) */
    flex-basis: 200px;    /* Taille de base de 200px */
    flex-basis: 50%;      /* 50% du conteneur */
}
```

### `flex` (propriété raccourcie)
Combine `flex-grow`, `flex-shrink` et `flex-basis`.

```css
.item {
    flex: 1;              /* flex-grow: 1, flex-shrink: 1, flex-basis: 0 */
    flex: 0 0 200px;      /* grow: 0, shrink: 0, basis: 200px */
    flex: 2 1 auto;       /* grow: 2, shrink: 1, basis: auto */
}
```

:::info
**Valeurs courante:**
- `flex: 1` : L'élément prend tout l'espace disponible équitablement
- `flex: 0 0 auto` : L'élément garde sa taille naturelle
:::

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
    <h2>Propriété flex</h2>
    <div class="container">
      <div class="item fixed">flex: 0 0 100px</div>
      <div class="item flexible">flex: 1</div>
      <div class="item flexible-double">flex: 2</div>
    </div>
</body>
</html>`,
'styles.css': `body {
    font-family: Arial, sans-serif;
    margin: 20px;
}

.container {
    display: flex;
    border: 2px solid #666;
    padding: 10px;
    background-color: #f9f9f9;
    gap: 10px;
}

.item {
    background-color: #00bcd4;
    color: white;
    padding: 20px;
    text-align: center;
    font-weight: bold;
}

.fixed {
    flex: 0 0 100px;
}

.flexible {
    flex: 1;
}

.flexible-double {
    flex: 2;
}`
}}
/>

### `align-self`
Permets à un élément individuel de s'aligner différemment des autres.

```css
.item {
    align-self: auto;         /* Utilise align-items du parent (défaut) */
    align-self: flex-start;   /* Aligné en haut */
    align-self: flex-end;     /* Aligné en bas */
    align-self: center;       /* Centré */
    align-self: stretch;      /* Étiré */
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
    <h2>align-self</h2>
    <div class="container">
      <div class="item">Normal</div>
      <div class="item self-start">align-self: flex-start</div>
      <div class="item self-center">align-self: center</div>
      <div class="item self-end">align-self: flex-end</div>
    </div>
</body>
</html>`,
'styles.css': `body {
    font-family: Arial, sans-serif;
    margin: 20px;
}

.container {
    display: flex;
    align-items: stretch;
    border: 2px solid #666;
    padding: 10px;
    background-color: #f9f9f9;
    gap: 10px;
    min-height: 150px;
}

.item {
    background-color: #e91e63;
    color: white;
    padding: 20px;
    text-align: center;
    font-weight: bold;
}

.self-start {
    align-self: flex-start;
}

.self-center {
    align-self: center;
}

.self-end {
    align-self: flex-end;
}`
}}
/>

### `order`
Change l'ordre d'affichage des éléments (sans modifier le HTML).

```css
.item {
    order: 0;     /* Ordre par défaut */
    order: 1;     /* Apparaît après les éléments avec order: 0 */
    order: -1;    /* Apparaît avant les éléments avec order: 0 */
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
    <h2>Propriété order</h2>
    <div class="container">
      <div class="item order-3">1 (order: 3)</div>
      <div class="item order-1">2 (order: 1)</div>
      <div class="item order-2">3 (order: 2)</div>
      <div class="item order-0">4 (order: 0)</div>
    </div>
</body>
</html>`,
'styles.css': `body {
    font-family: Arial, sans-serif;
    margin: 20px;
}

.container {
    display: flex;
    border: 2px solid #666;
    padding: 10px;
    background-color: #f9f9f9;
    gap: 10px;
}

.item {
    background-color: #ff9800;
    color: white;
    padding: 20px;
    text-align: center;
    font-weight: bold;
    flex: 1;
}

.order-0 {
    order: 0;
}

.order-1 {
    order: 1;
}

.order-2 {
    order: 2;
}

.order-3 {
    order: 3;
}`
}}
/>

## Cas d'usage courant

### Centrer un élément parfaitement

```css
.container {
    display: flex;
    justify-content: center;    /* Centre horizontalement */
    align-items: center;        /* Centre verticalement */
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
    <div class="container">
      <div class="box">
        <h2>Parfaitement centré!</h2>
        <p>Horizontalement et verticalement</p>
      </div>
    </div>
</body>
</html>`,
'styles.css': `body {
    margin: 0;
    font-family: Arial, sans-serif;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #e3f2fd;
}

.box {
    background-color: white;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.box h2 {
    margin: 0 0 10px 0;
    color: #1976d2;
}

.box p {
    margin: 0;
    color: #666;
}`
}}
/>

### Barre de navigation

Il est fréquent d'utiliser Flexbox pour le contenu d'une barre de navigation. C'est justement la base de l'exercice que nous ferons.

### Aligner des éléments

Flexbox est en général largement utilisé pour aligner des éléments de gauche à droite ou de bas en haut.