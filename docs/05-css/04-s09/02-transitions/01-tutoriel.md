---
---

# 16-1 Utiliser les transitions CSS

Dans cette activité, nous allons ajouter des **transitions CSS** pour rendre le site Nyan Cat plus vivant et interactif. Les transitions permettent d'animer les changements de propriétés CSS de manière fluide.

## Point de départ

:::caution
J'utilise comme point de départ la fin de l'activité précédente. Vous pouvez <a target="_blank" href={ require("./files/niveau_16_start.zip").default } download>télécharger au format zip le projet de départ</a>.
:::

Vous devriez avoir votre projet Nyan Cat avec le HTML et le CSS de l'activité précédente (avec les variables CSS).

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

## Qu'est-ce qu'une transition ?

Une **transition CSS** permet d'animer le passage d'une valeur à une autre de manière fluide, plutôt qu'instantanément.

**Syntaxe de base :**
```css
transition: propriété durée;
```

**Exemple :**
```css
.element {
    background-color: blue;
    transition: background-color 0.3s;
}

.element:hover {
    background-color: red;
}
```

Quand vous survolez l'élément, la couleur passe de bleu à rouge en 0.3 seconde (au lieu de changer instantanément).

## Transition 1: Agrandir les cartes au survol

Commençons par faire légèrement grossir les cartes quand on passe la souris dessus.

1. Ajoutez l'effet au survol avec `:hover`:
    ```css
    //highlight-start
    .carte-nyan:hover {
        transform: scale(1.02);
    }
    //highlight-end
    ```

    :::info
    Passez votre souris par dessus la carte, vous remarquerez qu'elle change de taille, mais que le tout est très "sec".
    :::

    :::tip
    `transform: scale(1.02)` agrandit l'élément de 2%. La valeur `1` = taille normale, `1.02` = 102% de la taille.
    :::
2. Ajoutez la propriété `transition` à `.carte-nyan`:
    ```css
    .carte-nyan {
        background-color: #0a2540;
        border: 2px solid var(--couleur-principale);
        border-radius: 8px;
        padding: 20px;
        text-align: center;
        //highlight-next-line
        transition: transform 0.3s;
    }
    ```

    :::info
    Ici, on indique d'appliquer une transition sur tout changement à la propriété `transform`. La durée de la transition est de 0.3s.
    :::


Passez votre souris sur les cartes. Elles s'agrandissent maintenant de façon plus fluide!

:::tip Amusez-vous
- Essayez de changer `0.3s` par un autre délai pour voir la différence.
:::

## Transition 2: Changer la couleur de bordure au survol

Ajoutons un changement de couleur sur la bordure en plus de l'agrandissement.

**Modifiez `.carte-nyan` pour ajouter `border-color` à la transition:**

```css
.carte-nyan {
    background-color: #0a2540;
    border: 2px solid var(--couleur-principale);
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    //highlight-next-line
    transition: transform 0.3s, border-color 0.3s;
}
```

**Ajoutez le changement de couleur dans `:hover` :**

```css
.carte-nyan:hover {
    transform: scale(1.05);
    //highlight-next-line
    border-color: var(--couleur-accent);
}
```

Au survol, la carte s'agrandit et la bordure change de couleur!

:::tip
Vous pouvez animer **plusieurs propriétés** en les séparant par des virgules dans `transition`.

Il est aussi possible d'utiliser `all` after d'appliquer la même transition à toutes les propriétés de l'élément. Par exemple:

```css
.carte-nyan {
    background-color: #0a2540;
    border: 2px solid var(--couleur-principale);
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    //highlight-next-line
    transition: all 0.3s;
}
```
:::

## Code CSS final

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

## Propriétés de transition courantes

- **transform**: Pour les transformations (scale, rotate, translate)
- **background-color**: Pour les changements de couleur de fond
- **color**: Pour les changements de couleur de texte
- **border-color**: Pour les changements de couleur de bordure
- **opacity**: Pour les changements de transparence