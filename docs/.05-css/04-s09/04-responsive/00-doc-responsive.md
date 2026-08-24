---
---

# 📚 Design adaptatif et media queries

Le design adaptatif permet à votre site web de s'adapter automatiquement à différentes tailles d'écran (mobile, tablette, ordinateur). Les **media queries** sont l'outil principal pour y arriver.

## Viewport

Avant tout, assurez-vous d'avoir cette balise dans le `<head>` de votre HTML:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

:::info
Cette balise indique au navigateur d'adapter la largeur de la page à la largeur de l'écran de l'appareil.
:::

## Syntaxe des media queries

Une media query permet d'appliquer des styles CSS **seulement si certaines conditions sont remplies**, principalement en lien avec la largeur de l'écran.

### Syntaxe de base

Pour cibler une talle d'écran, on utilise `@media()`. Comme argument, on utilise soit `max-width` ou `min-width` pour cibler une taille d'écran plus grande ou égale ou plus petite ou égale.

```css
/* Styles pour tous les écrans */
.texte {
    font-size: 16px;
}

/* Styles seulement pour les écrans de 768px et moins */
@media (max-width: 768px) {
    .texte {
        font-size: 14px;
    }
}
```

:::info
`@media (max-width: 768px)` a pour effet d'appliquer les règles CSS contenues à l'intérieur seulement si la largeur de l'écran est inférieure ou égale à 768px: largeur maximale (`max-width`) de 768px.
:::

<SandpackPlayground
  template="static"
  showTabs={true}
  files={{
    '/index.html': `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="boite">
        <h2>Redimensionnez la fenêtre</h2>
        <p class="texte">La taille et la couleur du texte change selon la largeur de l'écran.</p>
    </div>
</body>
</html>`,
    '/styles.css': `body {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #f0f0f0;
}

.boite {
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    text-align: center;
}

.texte {
    font-size: 20px;
    color: #2c3e50;
}

/* Écrans moyens et petits (768px et moins) */
@media (max-width: 768px) {
    .texte {
        font-size: 16px;
        color: #e74c3c;
    }
}

/* Petits écrans (480px et moins) */
@media (max-width: 480px) {
    .texte {
        font-size: 14px;
        color: #2ecc71;
    }
}`
  }}
/>

## `max-width` vs `min-width`

Il est possible de cibler les règles media queries selon `max-width` ou `min-width`.

On associe généralement à `max-width` des règles que l'on appelle "mobile first" puisqu'elles s'appliquent en priorité aux formats d'écran plus petit.

### `min-width` ("Mofile first")

S'applique quand la largeur est **supérieure ou égale** à la valeur spécifiée. **On cible dont en priorité les petits écrans (styles par défaut) en augmentant graduellement de taille**

```css
/* Syle par défaut, donc écrans plus petit que 768px. */
.texte {
    font-size: 16px;
}

/* S'applique sur les écrans de 768px et plus */
@media (min-width: 768px) {
    .texte {
        font-size: 18px;
    }
}
```

:::tip
**Approche recommandée: Mobile first**

Écrivez d'abord le CSS pour mobile, puis utilisez `min-width` pour les écrans plus grands.
:::

### `max-width` ("Desktop first")

S'applique quand la largeur est **inférieure ou égale** à la valeur spécifiée. **On cible dont en priorité les petits appareils en montant de taille.**

```css
/* Style par défaut, donc écrans plus grands que 768px */
.texte {
    font-size: 18px;
}

/* S'applique sur les écrans de 768px et moins */
@media (max-width: 768px) {
    .texte {
        font-size: 16px;
    }
}
```

## Points de rupture (breakpoins) courants

Voici les tailles d'écran standard et comment les cibler à l'aide de règles `@media` avec une approche **Mobile first**.

```css
/* Styles de base (mobile par défaut) */
/* Pas besoin de media query pour mobile */

/* Petits appareils et plus (480px et plus) */
@media (min-width: 480px) {
    /* Styles pour petits mobiles et plus */
}

/* Tablettes et plus (768px et plus) */
@media (min-width: 768px) {
    /* Styles pour tablettes et plus */
}

/* Desktop et plus (1024px et plus) */
@media (min-width: 1024px) {
    /* Styles pour desktop */
}

/* Grands écrans (1200px et plus) */
@media (min-width: 1200px) {
    /* Styles pour très grands écrans */
}
```

:::tip
**Avec Mobile first**, vous écrivez d'abord vos styles pour mobile (sans media query), puis vous ajoutez progressivement des styles pour les écrans plus grands avec `min-width`.
:::

<SandpackPlayground
  template="static"
  showTabs={true}
  files={{
    '/index.html': `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="info">
        <h2>Taille de l'écran détectée</h2>
        <p class="message"></p>
    </div>
</body>
</html>`,
    '/styles.css': `body {
    font-family: Arial, sans-serif;
    padding: 20px;
}

/* Styles de base - Mobile */
.info {
    background-color: #2ecc71;
    color: white;
    padding: 40px;
    border-radius: 8px;
    text-align: center;
}

.message::before {
    content: "📱 Petit mobile (moins de 480px)";
}

/* Petits appareils et plus */
@media (min-width: 480px) {
    .info {
        background-color: #e74c3c;
    }
    .message::before {
        content: "📱 Mobile (480px et plus)";
    }
}

/* Tablettes et plus */
@media (min-width: 768px) {
    .info {
        background-color: #9b59b6;
    }
    .message::before {
        content: "📱 Tablette (768px et plus)";
    }
}

/* Desktop et plus */
@media (min-width: 1024px) {
    .info {
        background-color: #3498db;
    }
    .message::before {
        content: "🖥️ Desktop (1024px et plus)";
    }
}

/* Grands écrans */
@media (min-width: 1200px) {
    .info {
        background-color: #1abc9c;
    }
    .message::before {
        content: "🖥️ Grand écran (1200px et plus)";
    }
}`
  }}
/>

## Exemples pratiques

### Navigation responsive

Dans cet exemple, les liens de navigation s'empilent verticalement sur mobile.

```css
/* Navigation horizontale sur desktop */
.nav {
    display: flex;
    gap: 20px;
}

/* Navigation verticale sur mobile */
@media (max-width: 768px) {
    .nav {
        flex-direction: column;
        gap: 10px;
    }
}
```

<SandpackPlayground
  template="static"
  showTabs={true}
  files={{
    '/index.html': `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <nav class="nav">
        <a href="#">Accueil</a>
        <a href="#">À propos</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
    </nav>
    
    <div class="info">
        <p>Redimensionnez la fenêtre pour voir la navigation s'adapter</p>
    </div>
</body>
</html>`,
    '/styles.css': `body {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #f0f0f0;
}

.nav {
    background-color: #2c3e50;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    gap: 20px;
}

.nav a {
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    background-color: #34495e;
    border-radius: 4px;
}

.nav a:hover {
    background-color: #3498db;
}

.info {
    margin-top: 30px;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    text-align: center;
    color: #7f8c8d;
}

/* Mobile */
@media (max-width: 768px) {
    .nav {
        flex-direction: column;
        gap: 10px;
    }
    
    .nav a {
        text-align: center;
    }
}`
  }}
/>

### Grille responsive

Dans cet exemple, la grille a 2 colonnes sur tablette et 1 colonne sur mobile.

```css
/* 3 colonnes sur desktop */
.grille {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

/* 2 colonnes sur tablette */
@media (max-width: 768px) {
    .grille {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* 1 colonne sur mobile */
@media (max-width: 480px) {
    .grille {
        grid-template-columns: 1fr;
    }
}
```

<SandpackPlayground
  template="static"
  showTabs={true}
  files={{
    '/index.html': `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h2>Grille responsive</h2>
    <p class="info">Redimensionnez pour voir le nombre de colonnes changer</p>
    
    <div class="grille">
        <div class="carte">Carte 1</div>
        <div class="carte">Carte 2</div>
        <div class="carte">Carte 3</div>
        <div class="carte">Carte 4</div>
        <div class="carte">Carte 5</div>
        <div class="carte">Carte 6</div>
    </div>
</body>
</html>`,
    '/styles.css': `body {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #f0f0f0;
}

h2 {
    color: #2c3e50;
    margin-bottom: 10px;
}

.info {
    color: #7f8c8d;
    margin-bottom: 20px;
}

.grille {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.carte {
    background-color: #3498db;
    color: white;
    padding: 40px;
    border-radius: 8px;
    text-align: center;
    font-weight: bold;
}

/* Tablette */
@media (max-width: 768px) {
    .grille {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Mobile */
@media (max-width: 480px) {
    .grille {
        grid-template-columns: 1fr;
    }
}`
  }}
/>

### Texte et images responsive

Dans cet exemple, sur ordinateur, l'image est à côté du texte. Sur mobile, l'image passe au-dessus du texte.

Le conteneur passe essentiellement de `flex-direction: row` à `flex-direction: column`.

```css
/* Desktop */
.conteneur {
    display: flex;
    gap: 20px;
}

.image {
    width: 300px;
}

/* Mobile */
@media (max-width: 768px) {
    .conteneur {
        flex-direction: column;
    }
    
    .image {
        width: 100%;
    }
}
```

<SandpackPlayground
  template="static"
  showTabs={true}
  files={{
    '/index.html': `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="conteneur">
        <div class="image">🖼️</div>
        <div class="texte">
            <h2>Article responsive</h2>
            <p>Sur desktop, l'image est à côté du texte.</p>
            <p>Sur mobile, l'image passe au-dessus du texte.</p>
        </div>
    </div>
</body>
</html>`,
    '/styles.css': `body {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #f0f0f0;
}

.conteneur {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    gap: 20px;
    align-items: flex-start;
}

.image {
    width: 200px;
    height: 200px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 80px;
    flex-shrink: 0;
}

.texte h2 {
    color: #2c3e50;
    margin-top: 0;
}

.texte p {
    color: #7f8c8d;
    line-height: 1.6;
}

/* Mobile */
@media (max-width: 768px) {
    .conteneur {
        flex-direction: column;
    }
    
    .image {
        width: 100%;
    }
}`
  }}
/>

### Cacher/afficher des éléments

Dans cet exemple, le block `desktop-seulement` est caché sur mobile (`display: none`).

```css
/* Afficher sur desktop, cacher sur mobile */
.desktop-seulement {
    display: block;
}

@media (max-width: 768px) {
    .desktop-seulement {
        display: none;
    }
}

/* Cacher sur desktop, afficher sur mobile */
.mobile-seulement {
    display: none;
}

@media (max-width: 768px) {
    .mobile-seulement {
        display: block;
    }
}
```

<SandpackPlayground
  template="static"
  showTabs={true}
  files={{
    '/index.html': `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="conteneur">
        <div class="message desktop-seulement">
            🖥️ Vous êtes sur un grand écran
        </div>
        
        <div class="message mobile-seulement">
            📱 Vous êtes sur mobile
        </div>
    </div>
</body>
</html>`,
    '/styles.css': `body {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #f0f0f0;
}

.conteneur {
    text-align: center;
}

.message {
    background-color: #3498db;
    color: white;
    padding: 30px;
    border-radius: 8px;
    font-size: 20px;
    font-weight: bold;
}

.desktop-seulement {
    display: block;
}

.mobile-seulement {
    display: none;
}

@media (max-width: 768px) {
    .desktop-seulement {
        display: none;
    }
    
    .mobile-seulement {
        display: block;
        background-color: #e74c3c;
    }
}`
  }}
/>
