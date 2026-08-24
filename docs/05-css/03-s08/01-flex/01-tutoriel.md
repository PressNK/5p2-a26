---
---

# 13-1 Découverte de Flexbox

Lors de cette activité, nous allons explorer Flexbox de façon progressive avec des boîtes colorées.

## Fichiers de départ

Utilisez les fichiers de départ suivants pour cette activité.

### index.html
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Découverte Flexbox</title>
    <link rel="stylesheet" href="./styles/app.css">
</head>
<body>
    <h1>Découverte Flexbox</h1>
    
    <div class="container">
        <div class="box box-1">1</div>
        <div class="box box-2">2</div>
        <div class="box box-3">3</div>
        <div class="box box-4">4</div>
        <div class="box box-5">5</div>
    </div>
</body>
</html>
```

### styles/app.css (styles de base fournis)
```css
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    padding: 40px;
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
}

.container {
    background-color: #e3f2fd;
    border: 3px dashed #1976d2;
    padding: 20px;
    min-height: 400px;
}

.box {
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    font-size: 32px;
    font-weight: bold;
    color: white;
    border-radius: 8px;
}

.box-1 {
    background-color: #e91e63;
}

.box-2 {
    background-color: #9c27b0;
}

.box-3 {
    background-color: #2196f3;
}

.box-4 {
    background-color: #4caf50;
}

.box-5 {
    background-color: #ff9800;
}
```

## Partie 1: Activer Flexbox

Sans Flexbox, les boîtes s'empilent verticalement, car les `<div>` sont des éléments `block` par défaut.

### Activer `display: flex`

Ajoutez `display: flex` au conteneur:

```css
.container {
    background-color: #e3f2fd;
    border: 3px dashed #1976d2;
    padding: 20px;
    min-height: 400px;
    //highlight-next-line
    display: flex;
}
```

### Questions de découverte
- Que s'est-il passé avec les boîtes?
- Dans quelle direction sont-elles maintenant?

:::info
`display: flex` transforme le conteneur en **conteneur flex** et ses enfants directs deviennent des **éléments flex**. Par défaut, ils s'alignent horizontalement (en rangée (`row`)).
:::

## Partie 2: Direction avec `flex-direction`

Explorons maintenant comment changer la direction des éléments.

### Phase 1: Direction en colonne

Ajoutez `flex-direction: column`:

```css
.container {
    background-color: #e3f2fd;
    border: 3px dashed #1976d2;
    padding: 20px;
    min-height: 400px;
    display: flex;
    //highlight-next-line
    flex-direction: column;
}
```

- Comment les boîtes sont-elles disposées maintenant?

### Phase 2: Direction inversée

Changez pour `flex-direction: row-reverse`:

```css
.container {
    background-color: #e3f2fd;
    border: 3px dashed #1976d2;
    padding: 20px;
    min-height: 400px;
    display: flex;
    //highlight-next-line
    flex-direction: row-reverse;
}
```

- Quel changement observez-vous?
- L'ordre des boîtes a-t-il changé dans le HTML?


Changez pour `flex-direction: column-reverse`:

```css
.container {
    background-color: #e3f2fd;
    border: 3px dashed #1976d2;
    padding: 20px;
    min-height: 400px;
    display: flex;
    //highlight-next-line
    flex-direction: column-reverse;
}
```

- Quel changement observez-vous?

### Phase 3: Retour en rangée

Revenez à la direction par défaut:

```css
.container {
    background-color: #e3f2fd;
    border: 3px dashed #1976d2;
    padding: 20px;
    min-height: 400px;
    display: flex;
    //highlight-next-line
    flex-direction: row;
}
```

:::info
`flex-direction` contrôle la direction principale du conteneur:
- `row` : Horizontal, de gauche à droite (défaut)
- `row-reverse` : Horizontal, de droite à gauche
- `column` : Vertical, de haut en bas
- `column-reverse` : Vertical, de bas en haut
:::

## Partie 3: Alignement horizontal avec `justify-content`

`justify-content` aligne les éléments le long de l'axe principal (horizontal si `row`, vertical si `column`).

### Phase 1: Centrer les boîtes horizontalement

Ajoutez `justify-content: center`:

```css
.container {
    background-color: #e3f2fd;
    border: 3px dashed #1976d2;
    padding: 20px;
    min-height: 400px;
    display: flex;
    flex-direction: row;
    //highlight-next-line
    justify-content: center;
}
```

- Comment cela a-t-il changé la disposition des boîtes?

### Phase 2: Espacer les boîtes

Essayez `justify-content: space-between`:

```css
.container {
    background-color: #e3f2fd;
    border: 3px dashed #1976d2;
    padding: 20px;
    min-height: 400px;
    display: flex;
    flex-direction: row;
    //highlight-next-line
    justify-content: space-between;
}
```

- Comment l'espace est-il distribué?
- Y a-t-il de l'espace avant la première boîte? Et après la dernière?

:::info
`space-between` distribue l'espace équitablement entre les éléments, mais n'ajoute pas d'espace au début, ni à la fin du conteneur.
:::

### Phase 3: Espace autour

Essayez `justify-content: space-around`:

```css
.container {
    background-color: #e3f2fd;
    border: 3px dashed #1976d2;
    padding: 20px;
    min-height: 400px;
    display: flex;
    flex-direction: row;
    //highlight-next-line
    justify-content: space-around;
}
```

- Quelle est la différence avec `space-between`?
- L'espace entre les boîtes est-il le même qu'à gauche de la première?

:::info
`space-around` distribue l'espace équitablement entre les éléments et ajoute un espace correspondant à la moitié de l'espace entre les éléments, au début et à la fin du conteneur.
:::

### Phase 4: Espace égal partout

Essayez `justify-content: space-evenly`:

```css
.container {
    background-color: #e3f2fd;
    border: 3px dashed #1976d2;
    padding: 20px;
    min-height: 400px;
    display: flex;
    flex-direction: row;
    //highlight-next-line
    justify-content: space-evenly;
}
```

- Comment est l'espacement maintenant?
- Quelle est la différence avec `space-around`?

:::info
`space-evenly` distribue l'espace équitablement entre les éléments et ajoute le même espace au début et à la fin du conteneur.
:::

### Phase 5: Garder `justify-content: center`

Retournez à `justify-content: center;`:

```css
.container {
    background-color: #e3f2fd;
    border: 3px dashed #1976d2;
    padding: 20px;
    min-height: 400px;
    display: flex;
    flex-direction: row;
    //highlight-next-line
    justify-content: center;
}
```

:::info
`justify-content` distribue l'espace le long de l'axe principal (horizontal si `row`, vertical si `column`):
- `flex-start`: Au début (défaut)
- `flex-end`: À la fin
- `center`: Au centre
- `space-between`: Espace entre les éléments (pas aux extrémités)
- `space-around`: Espace autour de chaque élément
- `space-evenly`: Espace égal partout
:::

## Partie 4: Alignement vertical avec `align-items`

`align-items` aligne les éléments le long de l'axe secondaire (vertical si `row`, horizontal si `column`).

### Phase 1: Centrer verticalement

Ajoutez `align-items: center`:

```css
.container {
    background-color: #e3f2fd;
    border: 3px dashed #1976d2;
    padding: 20px;
    min-height: 400px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    //highlight-next-line
    align-items: center;
}
```

- Où sont les boîtes verticalement?

### Phase 2: Aligner en haut

Changez pour `align-items: flex-start`:

```css
.container {
    background-color: #e3f2fd;
    border: 3px dashed #1976d2;
    padding: 20px;
    min-height: 400px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    //highlight-next-line
    align-items: flex-start;
}
```

- Les boîtes sont-elles alignées en haut?

### Phase 3: Aligner en bas

Essayez `align-items: flex-end`:

```css
.container {
    background-color: #e3f2fd;
    border: 3px dashed #1976d2;
    padding: 20px;
    min-height: 400px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    //highlight-next-line
    align-items: flex-end;
}
```

- Les boîtes sont-elles alignées en bas?

### Phase 4: Retour au centre

Revenez à `align-items: center` pour la suite:

```css
.container {
    background-color: #e3f2fd;
    border: 3px dashed #1976d2;
    padding: 20px;
    min-height: 400px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    //highlight-next-line
    align-items: center;
}
```

:::info
`align-items` aligne les éléments sur l'axe secondaire:
- `stretch`: Étire pour remplir le conteneur (défaut)
- `flex-start`: Au début
- `flex-end`: À la fin
- `center`: Au centre
- `baseline`: Alignés sur la ligne de base du texte
:::

## Partie 5: Retour à la ligne avec `flex-wrap`

Par défaut, les éléments flex restent sur une seule ligne. Explorons le comportement avec plusieurs éléments.

### Phase 1: Ajouter plus de boîtes (dans le HTML)

Ajoutez une sixième boîte dans votre HTML après la boîte 5:

```html
<!-- ... -->
<body>
    <h1>Découverte Flexbox</h1>
    
    <div class="container">
        <div class="box box-1">1</div>
        <div class="box box-2">2</div>
        <div class="box box-3">3</div>
        <div class="box box-4">4</div>
        <div class="box box-5">5</div>
        <div class="box box-6">6</div>
    </div>
</body>
<!-- ... -->
```

Et dans votre CSS, ajoutez le style pour cette nouvelle boîte:

```css
.box-6 {
    background-color: #00bcd4;
}
```

- Que se passe-t-il? Les boîtes ont-elles rétréci?

### Phase 2: Activer le retour à la ligne

Ajoutez `flex-wrap: wrap`:

```css
.container {
    background-color: #e3f2fd;
    border: 3px dashed #1976d2;
    padding: 20px;
    min-height: 400px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    //highlight-next-line
    flex-wrap: wrap;
}
```

- Les boîtes passent-elles maintenant à la ligne?
- Rétrécissez la largeur de votre navigateur. Que se passe-t-il?

### Phase 3: Retirer la 6e boîte

Enlevez la boîte 6 du HTML pour revenir à 5 boîtes. Gardez `flex-wrap: wrap` dans le CSS.

:::info
`flex-wrap` contrôle si les éléments doivent passer à la ligne:
- `nowrap`: Pas de retour à la ligne (défaut)
- `wrap`: Retour à la ligne si nécessaire
- `wrap-reverse` : Retour à la ligne en ordre inverse
:::

## Partie 6: Espacement avec `gap`

Au lieu d'utiliser des marges sur chaque boîte, `gap` crée de l'espace entre les éléments flex.

### Ajouter de l'espace entre les boîtes

Ajoutez `gap: 15px`:

```css
.container {
    background-color: #e3f2fd;
    border: 3px dashed #1976d2;
    padding: 20px;
    min-height: 400px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    //highlight-next-line
    gap: 15px;
}
```

- Un espace apparaît-il entre les boîtes?
- Essayez `gap: 30px` pour voir la différence.

Revenez à `gap: 15px`:

```css
.container {
    background-color: #e3f2fd;
    border: 3px dashed #1976d2;
    padding: 20px;
    min-height: 400px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    //highlight-next-line
    gap: 15px;
}
```

:::info
`gap` définit l'espace entre les éléments flex. C'est plus simple que d'utiliser des marges! Vous pouvez aussi utiliser:
- `gap: 20px` : Même espacement horizontal et vertical
- `gap: 20px 10px` : 20px vertical, 10px horizontal
- `row-gap` et `column-gap`: Contrôle séparé
:::

## Partie 7: Faire grandir un élément avec `flex-grow`

`flex-grow` permet à un élément de prendre plus d'espace disponible.

### Faire grandir la boîte 2

Ajoutez `flex-grow: 1` à `.box-2`:

```css
.box-2 {
    background-color: #9c27b0;
    //highlight-next-line
    flex-grow: 1;
}
```

- Que se passe-t-il avec la boîte 2?
- Prend-elle plus d'espace que les autres?
- Essayez de rétrécir et agrandir la largeur du navigateur. Comment la boîte 2 réagit-elle?

:::info
`flex-grow` détermine comment un élément grandit pour remplir l'espace disponible:
- `0` : Ne grandit pas (défaut)
- `1` : Prend l'espace disponible
- `2` : Prend 2× plus d'espace qu'un élément avec `flex-grow: 1`

Si plusieurs éléments ont `flex-grow`, l'espace est distribué proportionnellement.
:::

## Partie 8: Réorganiser avec `order`

`order` permet de changer l'ordre visuel des éléments sans modifier le HTML.

### Déplacer la boîte 5 au début

Ajoutez `order: -1` à `.box-5`:

```css
.box-5 {
    background-color: #ff9800;
    //highlight-next-line
    order: -1;
}
```

- Où est la boîte 5 maintenant?
- L'ordre a-t-il changé dans le HTML? (Vérifiez le code source)

### Expérimenter avec order

Essayez d'ajouter différentes valeurs d'`order` aux autres boîtes entre `0` et `4`.

- Comment les boîtes sont-elles ordonnées?
- Que se passe-t-il si deux boîtes ont le même `order`?

### Retirer les propriétés order

Enlevez toutes les propriétés `order` que vous avez ajoutées pour revenir à l'ordre normal.

:::info
`order` change l'ordre d'affichage des éléments:
- Valeur par défaut: `0`
- Les valeurs négatives placent les éléments au début
- Les valeurs positives placent les éléments à la fin
- En cas d'égalité, l'ordre du HTML est respecté
:::

## Partie 9: Alignement individuel avec `align-self`

`align-self` permet à un élément de s'aligner différemment des autres.

### Aligner la boîte 3 différemment

Ajoutez `align-self: flex-start` à `.box-3`:

```css
.box-3 {
    background-color: #2196f3;
    //highlight-next-line
    align-self: flex-start;
}
```

- Où est la boîte 3 maintenant?
- Les autres boîtes ont-elles bougé?

Essayez `align-self: flex-end`:

```css
.box-3 {
    background-color: #2196f3;
    //highlight-next-line
    align-self: flex-end;
}
```

Enlevez `align-self` de `.box-3` pour terminer.

:::info
`align-self` permet à un élément individuel d'avoir un alignement différent:
- `auto`: Utilise la valeur du conteneur (défaut)
- `flex-start`, `flex-end`, `center`, `stretch` : Même valeurs qu'`align-items`

C'est utile quand un seul élément doit être aligné différemment!
:::

Bravo! Vous maîtrisez maintenant les bases de Flexbox! 🎉