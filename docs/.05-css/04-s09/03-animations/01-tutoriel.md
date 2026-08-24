---
---

# 17-1 Créer des animations CSS

Dans cette activité, nous allons ajouter des **animations CSS** qui se déclenchent automatiquement, sans interaction de l'utilisateur. 

Contrairement aux transitions qui nécessitent un déclencheur, les animations démarrent toutes seules.

## Point de départ

:::caution
J'utilise comme point de départ la fin de l'activité précédente. Vous pouvez <a target="_blank" href={ require("./files/niveau_17_start.zip").default } download>télécharger au format zip le projet de départ</a>.
:::

Vous devriez avoir votre projet Nyan Cat avec le HTML et le CSS des activités précédentes (variables + transitions).

**Votre fichier `app.css` devrait ressembler à ceci :**

```css
:root {
    --couleur-principale: #9933ff;
    --couleur-accent: #ff6b6b;
    --couleur-texte-pale: #cccccc;
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
}

footer {
    text-align: center;
    margin-top: 40px;
    color: var(--couleur-accent);
    font-size: 14px;
}
```

## Différence entre transition et animation

**Transition**
- Nécessite un déclencheur (`:hover`, `:focus`, etc.)
- Passe d'un état A à un état B
- "Joue" une seule fois

**Animation**
- Se déclenche automatiquement
- Peut avoir plusieurs étapes
- Peut se répéter en boucle

## Créer une animation avec `@keyframes`

Une animation se crée en 2 étapes:

1. **Définir l'animation** avec `@keyframes`
2. **Appliquer l'animation** à un élément avec `animation`
    ```css
    @keyframes nom-animation {
        from {
            /* État de départ */
        }
        to {
            /* État d'arrivée */
        }
    }

    .element {
        animation: nom-animation 2s;
    }
    ```

La form `from` et `to` est en fait d'un alias pour:

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

Pour les animations plus complexes, plusieurs pourcentages peuvent être définis:

```css
@keyframes nom-animation {
    0% {
        
    }
    50% {

    }
    100% {

    }
}
```

## Animation 1: Faire pulser les badges (animation de `scale`)

Créons une animation qui fait grossir et rapetisser les badges en boucle.

**Ajoutez cette définition d'animation avant les styles existants (par exemple après `:root`):**

```css
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
```

:::info
Ici, on crée une animation appelée `pulse` qui contient trois états:
- Au début de l'animation (0%), la taille est "1", soit la taille originale (100%).
- À la moitié de l'animation (50%), la taille sera de 1.1 fois la taille originale.
- À la fin de l'animation (100%), on retourne à la taille originale.
:::

**Appliquez l'animation au badge:**

```css
.badge {
    display: inline-block;
    background-color: var(--couleur-principale);
    color: white;
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: bold;
    //highlight-next-line
    animation: pulse 2s infinite;
}
```

Les badges pulsent en continu!

:::info
- `2s` = durée de l'animation (2 secondes)
- `infinite` = répète en boucle infiniment. Vous pouvez aussi définir un nombre de fois que l'animation roulera.
    ```css
    animation: pulse 2s 4; /* exécutera 4 fois l'animation */
    ```
:::

## Animation 2: Faire briller le titre

Créons un effet de brillance qui traverse le titre.

**Ajoutez cette animation:**

```css
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
```

:::info
`text-shadow` ajoute de l'ombre à du texte. La syntaxe est la suivante:
```css
/* offset-x | offset-y | blur-radius | color */
text-shadow: 1px 1px 2px black;

Dans notre cas, on augmente le `blur-radius` dans l'animation, soit l'effet brouillé de l'ombrage. La couleur de l'ombre est la couleur d'accent.
```
:::

**Appliquez l'animation au titre:**

```css
h1 {
    color: #ff6b6b;
    font-size: 48px;
    margin-bottom: 8px;
    //highlight-next-line
    animation: briller 3s infinite;
}
```

Le titre a maintenant un effet de lueur 😊

## Animation 3: Faire tourner les images dans l'espace 

Comme Nyan Cat vole dans l'espace, faisons tourner les images! 😉

**Ajoutez cette animation:**

```css
@keyframes rotation-espace {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
```

**Appliquez l'animation aux images:**

```css
.image-nyan {
    width: 150px;
    height: 150px;
    object-fit: contain;
    margin-bottom: 16px;
    //highlight-next-line
    animation: rotation-espace 10s infinite;
}
```

Les images tournent lentement sur elles-mêmes, comme si les chats flottaient dans l'espace. Par contre, l'animation ralentit vers la fin.

C'est qu'une animation peut avoir ce qu'on appelle une `timing-function`, soit une fonction qui détermine la façon dont l'animation est jouée. Par défaut, cette fonction est `ease` et cela veut dire que l'animation va décélérer dans le temps et terminer lentement.

Vous pouvez en apprendre plus sur les fonctions de timing ici: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function

Afin de préciser quelle fonction utiliser, on peut ajouter le nom de la fonction de timing après la durée de l'animation. Pour une animation animée de façon linéaire, on peut utiliser `linear`:

```css
.image-nyan {
    width: 150px;
    height: 150px;
    object-fit: contain;
    margin-bottom: 16px;
    //highlight-next-line
    animation: rotation-espace 10s linear infinite;
}
```

:::info
- `10s` = une rotation complète prend 10 secondes (lent et doux)
- `linear` = vitesse constante (pas d'accélération/décélération)
- `infinite` = tourne en boucle sans arrêt
:::

## Code CSS final avec toutes les animations

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

## Propriétés d'animation utiles

- `animation-duration`: Durée (ex: `2s`, `500ms`)
- `animation-iteration-count`: Nombre de répétitions (`1`, `3`, `infinite`)
- `animation-delay`: Délai avant de commencer (ex: `0.5s`)
- `animation-timing-function`: Vitesse (`ease`, `linear`, `ease-in-out`, etc.)

## Attention

Trop d'animations peuvent:
- Distraire l'utilisateur
- Ralentir la performance
- Rendre le site difficile à utiliser

Utilisez les animations avec parcimonie pour créer des points d'intérêt, pas pour tout animer!
