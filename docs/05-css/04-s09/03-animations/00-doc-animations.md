---
---

# 📚 Animations CSS

Les animations CSS permettent de créer des mouvements et des effets qui se déclenchent automatiquement, sans interaction de l'utilisateur. Contrairement aux transitions qui nécessitent un déclencheur (comme `:hover`), les animations démarrent toutes seules.

## Syntaxe de base

### Créer une animation avec `@keyframes`

Pour créer une animation, on définit d'abord les **étapes** de l'animation avec `@keyframes`.

Dans sa formule la plus simple, le tout ressemble à ceci:

```css
@keyframes nom-animation {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
```

:::info
`from` défini le point de départ de l'animation.
`to` défini l'état final de l'animation, avant de retourner au début.
:::

Il s'agit en fait d'un alias pour:

```css
@keyframes nom-animation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
```

### Appliquer l'animation

Ensuite, on applique l'animation à un élément avec la propriété `animation`.

```css
.element {
    animation: nom-animation 2s;
}
```

:::info
La syntaxe de base est: `animation: nom durée;`
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
    <h2>Apparition en fondu</h2>
    <p>Utilisez l'icône pour recharger dans le coin inférieur droit afin de voir l'animation du début.</p>
    <div class="boite">Je m'affiche progressivement!</div>
</body>
</html>`,
    '/styles.css': `body {
    font-family: Arial, sans-serif;
    padding: 40px;
}

@keyframes apparition {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.boite {
    background-color: #3498db;
    color: white;
    padding: 30px;
    border-radius: 8px;
    text-align: center;
    font-size: 20px;
    animation: apparition 2s;
}`
  }}
/>

## Étapes avec pourcentages

On peut définir plusieurs étapes avec des pourcentages pour des animations plus complexes.

```css
@keyframes couleur-changeante {
    0% {
        background-color: #3498db;
    }
    50% {
        background-color: #e74c3c;
    }
    100% {
        background-color: #2ecc71;
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
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h2>Animation avec plusieurs étapes</h2>
    <p>Utilisez l'icône pour recharger dans le coin inférieur droit afin de voir l'animation du début.</p>
    <div class="boite-couleur">Ma couleur change!</div>
</body>
</html>`,
    '/styles.css': `body {
    font-family: Arial, sans-serif;
    padding: 40px;
}

@keyframes couleur-changeante {
    0% {
        background-color: #3498db;
    }
    50% {
        background-color: #e74c3c;
    }
    100% {
        background-color: #2ecc71;
    }
}

.boite-couleur {
    color: white;
    background-color: #3498db;
    padding: 40px;
    border-radius: 8px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    animation: couleur-changeante 3s;
}`
  }}
/>

## Répéter l'animation

Pour répéter une animation, ajoutez le nombre de répétitions après la durée.

```css
.element {
    animation: mon-animation 2s 3;        /* 3 fois */
    animation: mon-animation 2s infinite; /* Boucle infinie */
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
    <h2>Répétition des animations</h2>
    
    <div class="conteneur">
        <div class="boite une-fois">1 fois</div>
        <div class="boite infini">Infini ∞</div>
    </div>
</body>
</html>`,
    '/styles.css': `body {
    font-family: Arial, sans-serif;
    padding: 40px;
}

.conteneur {
    display: flex;
    gap: 40px;
    justify-content: center;
}

@keyframes pulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.15);
    }
}

.boite {
    background-color: #3498db;
    color: white;
    padding: 30px;
    border-radius: 8px;
    text-align: center;
    font-weight: bold;
    width: 150px;
}

.une-fois {
    animation: pulse 1s 1;
}

.infini {
    animation: pulse 1s infinite;
}`
  }}
/>

## Exemples d'animations courantes

### Rotation

```css
@keyframes rotation {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.element {
    animation: rotation 2s linear infinite;
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
    <h2>Rotation continue</h2>
    <div class="emoji">🤪</div>
</body>
</html>`,
    '/styles.css': `body {
    font-family: Arial, sans-serif;
    padding: 40px;
    text-align: center;
}

@keyframes rotation {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.emoji {
    font-size: 80px;
    display: inline-block;
    animation: rotation 2s linear infinite;
}`
  }}
/>

### Pulsation

```css
@keyframes pulsation {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
}

.element {
    animation: pulsation 1s ease-in-out infinite;
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
    <h2>Effet de pulsation</h2>
    
    <div class="conteneur">
        <div class="coeur">❤️</div>
    </div>
</body>
</html>`,
    '/styles.css': `body {
    font-family: Arial, sans-serif;
    padding: 40px;
}

.conteneur {
    text-align: center;
    margin-top: 40px;
}

@keyframes pulsation {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.3);
    }
}

.coeur {
    font-size: 100px;
    display: inline-block;
    animation: pulsation 1s ease-in-out infinite;
}`
  }}
/>

### Glissement

```css
@keyframes glisser {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(100px);
    }
}

.element {
    animation: glisser 2s ease-in-out;
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
    <h2>Glissement</h2>
    <div class="boite">Je glisse →</div>
</body>
</html>`,
    '/styles.css': `body {
    font-family: Arial, sans-serif;
    padding: 40px;
}

@keyframes glisser {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(200px);
    }
}

.boite {
    background-color: #3498db;
    color: white;
    padding: 20px;
    border-radius: 8px;
    width: 150px;
    text-align: center;
    font-weight: bold;
    animation: glisser 2s ease-in-out;
}`
  }}
/>
