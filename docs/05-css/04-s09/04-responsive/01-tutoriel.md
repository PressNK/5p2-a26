---
---

# 18-1 Implémenter un design adaptatif

Dans cette activité, nous allons rendre le site **responsive** autant que possible, c'est-à-dire qu'il s'adaptera automatiquement aux différentes tailles d'écran (mobile, tablette, ordinateur).

## Point de départ

:::caution
J'utilise comme point de départ la fin de l'activité précédente. Vous pouvez <a target="_blank" href={ require("./files/niveau_18_start.zip").default } download>télécharger au format zip le projet de départ</a>.
:::

:::tip
Vous pouvez retirer les animations de rotation si cela vous gêne ;)
:::

**Votre fichier `app.css` devrait ressembler à ceci:**

```css
:root {
    --couleur-principale: #9933ff;
    --couleur-accent: #ff6b6b;
    --couleur-texte-pale: #cccccc;
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}

@keyframes briller {
    0% {
        text-shadow: 0 0 10px var(--couleur-accent);
    }
    50% {
        text-shadow: 0 0 20px var(--couleur-accent);
    }
    100% {
        text-shadow: 0 0 10px var(--couleur-accent);
    }
}

@keyframes rotation-espace {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

body {
    background-color: #001a33;
    color: #ffffff;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
}

header {
    text-align: center;
    margin-bottom: 40px;
}

h1 {
    color: #ff6b6b;
    font-size: 48px;
    margin-bottom: 8px;
    animation: briller 3s infinite;
}

header p {
    color: var(--couleur-texte-pale);
    font-size: 16px;
}

.grille-nyan {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    max-width: 800px;
    margin: 0 auto;
}

.carte-nyan {
    background-color: #0a2540;
    border: 2px solid var(--couleur-principale);
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    transition: transform 0.3s, border-color 0.3s;
}

.carte-nyan:hover {
    transform: scale(1.02);
    border-color: var(--couleur-accent);
}

.image-nyan {
    width: 150px;
    height: 150px;
    object-fit: contain;
    margin-bottom: 16px;
    animation: rotation-espace 10s linear infinite;
}

.carte-nyan h3 {
    color: var(--couleur-accent);
    margin: 0 0 8px 0;
    font-size: 20px;
}

.description {
    color: var(--couleur-texte-pale);
    font-size: 14px;
    margin-bottom: 12px;
}

.badge {
    display: inline-block;
    background-color: var(--couleur-principale);
    color: white;
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: bold;
    animation: pulse 2s infinite;
}

footer {
    text-align: center;
    margin-top: 40px;
    color: var(--couleur-accent);
    font-size: 14px;
}
```

## Qu'est-ce qu'une media query?

Une **media query** permet d'appliquer des styles CSS **seulement si certaines conditions sont remplies**, principalement en fonction de la largeur de l'écran.

Par exemple:

```css
@media (max-width: 768px) {
    /* Ces styles s'appliquent seulement 
       sur les écrans de 768px et moins */
}
```

## Problème actuel sur mobile

Si vous réduisez la fenêtre de votre navigateur, vous remarquerez:

- Les 2 colonnes de cartes sont trop serrées  
- Le titre est trop gros  
- Les cartes sont difficiles à lire

## Créer une media query pour mobile

Ajoutez ceci **À LA FIN** de votre fichier CSS:

```css
@media (max-width: 768px) {
    /* Styles pour mobile (768px et moins) */
}
```

:::info
`max-width: 768px` signifie "largeur maximale de 768px", donc tous les écrans de **768px ou moins** (tablettes et mobiles).
:::

## Adapter la grille à 1 colonne

Sur mobile, 2 colonnes c'est trop serré dans notre cas. Passons à 1 colonne.

Ajoutez ceci **dans** la media query:

```css
@media (max-width: 768px) {
  //highlight-start
    .grille-nyan {
        grid-template-columns: 1fr;
    }
  //highlight-end
}
```

Réduisez la fenêtre de votre navigateur. À partir de 768px, **la grille passe automatiquement à 1 colonne!**

:::info
À l'intérieur de `@media...` on rededéfini les classes CSS et les propriétés à changer pour la condition de taille d'écran.

Comme ces règles sont plus spécifiques ET qu'elles sont déclarées après, elles auront préséance sur les règles définies précédemment.
:::

## Réduire la taille du titre sur mobile

Le titre de 48px est trop gros sur mobile.

Ajoutez ceci dans la media query:

```css
@media (max-width: 768px) {
    .grille-nyan {
        grid-template-columns: 1fr;
    }
    
    //highlight-start
    h1 {
        font-size: 32px;
    }
    //highlight-end
}
```

Sur mobile, le titre est maintenant plus petit et s'adapte mieux à l'écran.

## Réduire les espacements

Sur mobile, on peut réduire un peu les espacements pour maximiser l'espace disponible.

Ajoutez ceci dans la media query:

```css
@media (max-width: 768px) {
    .grille-nyan {
        grid-template-columns: 1fr;
    }
    
    h1 {
        font-size: 32px;
    }
    
    //highlight-start
    body {
        padding: 10px;
    }
    
    .grille-nyan {
        gap: 15px;
    }
    //highlight-end
}
```

Le site utilise mieux l'espace disponible sur petit écran!

## Code CSS final avec media query

```css
:root {
    --couleur-principale: #9933ff;
    --couleur-accent: #ff6b6b;
    --couleur-texte-pale: #cccccc;
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}

@keyframes briller {
    0% {
        text-shadow: 0 0 10px var(--couleur-accent);
    }
    50% {
        text-shadow: 0 0 20px var(--couleur-accent);
    }
    100% {
        text-shadow: 0 0 10px var(--couleur-accent);
    }
}

@keyframes rotation-espace {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

body {
    background-color: #001a33;
    color: #ffffff;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
}

header {
    text-align: center;
    margin-bottom: 40px;
}

h1 {
    color: #ff6b6b;
    font-size: 48px;
    margin-bottom: 8px;
    animation: briller 3s infinite;
}

header p {
    color: var(--couleur-texte-pale);
    font-size: 16px;
}

.grille-nyan {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    max-width: 800px;
    margin: 0 auto;
}

.carte-nyan {
    background-color: #0a2540;
    border: 2px solid var(--couleur-principale);
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    transition: transform 0.3s, border-color 0.3s;
}

.carte-nyan:hover {
    transform: scale(1.02);
    border-color: var(--couleur-accent);
}

.image-nyan {
    width: 150px;
    height: 150px;
    object-fit: contain;
    margin-bottom: 16px;
    animation: rotation-espace 10s linear infinite;
}

.carte-nyan h3 {
    color: var(--couleur-accent);
    margin: 0 0 8px 0;
    font-size: 20px;
}

.description {
    color: var(--couleur-texte-pale);
    font-size: 14px;
    margin-bottom: 12px;
}

.badge {
    display: inline-block;
    background-color: var(--couleur-principale);
    color: white;
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: bold;
    animation: pulse 2s infinite;
}

footer {
    text-align: center;
    margin-top: 40px;
    color: var(--couleur-accent);
    font-size: 14px;
}

@media (max-width: 768px) {
    .grille-nyan {
        grid-template-columns: 1fr;
    }

    h1 {
        font-size: 32px;
    }
    
    body {
        padding: 10px;
    }
    
    .grille-nyan {
        gap: 15px;
    }
}
```

## Comprendre le point de rupture (breakpoint)

**768px** est un point de rupture courant qui sépare:
- **Desktop/Tablette**: 769px et plus (2 colonnes)
- **Mobile**: 768px et moins (1 colonne)

Vous pouvez choisir d'autres valeurs selon vos besoins:
- `480px` : Petits mobiles
- `768px` : Tablettes en portrait
- `1024px` : Tablettes en paysage / petits laptops