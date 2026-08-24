---
---

# 14-1 Découverte de Grid

Lors de cette activité, nous allons explorer CSS Grid de façon progressive avec des boîtes. Voici le résultat final que nous allons construire ensemble:

<SandpackPlayground
    template="static"
    editorHeight={700}
    files={{
    '/index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Découverte Grid</title>
    <link rel="stylesheet" href="./styles/app.css">
</head>
<body>
    <h1>Découverte Grid</h1>
    
    <div class="container">
        <div class="box box-1">1</div>
        <div class="box box-2">2</div>
        <div class="box box-3">3</div>
        <div class="box box-4">4</div>
        <div class="box box-5">5</div>
        <div class="box box-6">6</div>
    </div>
</body>
</html>`,
'styles/app.css': `body {
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
    background-color: #e8f5e9;
    border: 3px dashed #4caf50;
    padding: 20px;
    min-height: 400px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 150px 150px;
    gap: 15px;
}

.box {
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    color: white;
    border-radius: 8px;
    padding: 20px;
}

.box-1 {
    background-color: #e91e63;
    grid-column: span 2;
}

.box-2 {
    background-color: #9c27b0;
    grid-row: span 2;
}

.box-3 {
    background-color: #2196f3;
}

.box-4 {
    background-color: #4caf50;
}

.box-5 {
    background-color: #ff9800;
    grid-column: span 2;
}

.box-6 {
    background-color: #00bcd4;
}`
    }}
/>

## Fichiers de départ

Utilisez les fichiers de départ suivants pour cette activité.

### index.html
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Découverte Grid</title>
    <link rel="stylesheet" href="./styles/app.css">
</head>
<body>
    <h1>Découverte Grid</h1>
    
    <div class="container">
        <div class="box box-1">1</div>
        <div class="box box-2">2</div>
        <div class="box box-3">3</div>
        <div class="box box-4">4</div>
        <div class="box box-5">5</div>
        <div class="box box-6">6</div>
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
    background-color: #e8f5e9;
    border: 3px dashed #4caf50;
    padding: 20px;
    min-height: 400px;
}

.box {
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    color: white;
    border-radius: 8px;
    padding: 20px;
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

.box-6 {
    background-color: #00bcd4;
}
```

## Partie 1: Activer Grid

Sans Grid, les boîtes s'empilent verticalement car les `<div>` sont des éléments `block` par défaut.

### Activer `display: grid`

Ajoutez `display: grid` au conteneur:

```css
.container {
    background-color: #e8f5e9;
    border: 3px dashed #4caf50;
    padding: 20px;
    min-height: 400px;
    //highlight-next-line
    display: grid;
}
```

### Questions de découverte
- Que s'est-il passé avec les boîtes?
- Sont-elles organisées différemment?

:::info
`display: grid` transforme le conteneur en **conteneur grid**. Sans définir de colonnes, Grid crée automatiquement une seule colonne et les éléments s'empilent.

Bref, il n'y a pas vraiment de différence pour l'instant.
:::

## Partie 2: Définir les colonnes avec `grid-template-columns`

Créons maintenant plusieurs colonnes dans notre grille.

### Phase 1: Deux colonnes égales

Ajoutez `grid-template-columns: 1fr 1fr`:

```css
.container {
    background-color: #e8f5e9;
    border: 3px dashed #4caf50;
    padding: 20px;
    min-height: 400px;
    display: grid;
    //highlight-next-line
    grid-template-columns: 1fr 1fr;
}
```

- Combien de colonnes voyez-vous maintenant?
- Comment les boîtes sont-elles réparties?
- Que signifie `1fr` selon vous?

:::info
`fr` signifie `fraction`. Nous venons d'écrire que chaque colonne prendra une fraction de l'espace.
:::

### Phase 2: Trois colonnes égales

Changez pour `grid-template-columns: 1fr 1fr 1fr`:

```css
.container {
    background-color: #e8f5e9;
    border: 3px dashed #4caf50;
    padding: 20px;
    min-height: 400px;
    display: grid;
    //highlight-next-line
    grid-template-columns: 1fr 1fr 1fr;
}
```

- Combien de colonnes maintenant?
- Combien de rangées se sont créées automatiquement?

### Phase 3: Colonnes de tailles différentes

Essayez `grid-template-columns: 2fr 1fr 1fr`:

```css
.container {
    background-color: #e8f5e9;
    border: 3px dashed #4caf50;
    padding: 20px;
    min-height: 400px;
    display: grid;
    //highlight-next-line
    grid-template-columns: 2fr 1fr 1fr;
}
```

- Quelle colonne est plus large?
- Comment l'espace est-il distribué entre les colonnes?

:::info
Ici, c'est comme si on avait divisé l'espace en 4 (2 + 1 + 1), mais que la première colonne prenait 2 fractions de large.

2/4 = la moitié de l'espace. Normalement, la première colonne devrait prendre la moitié de l'espace disponible.
:::

### Phase 4: Utiliser `repeat()`

Au lieu de répéter `1fr 1fr 1fr`, on peut utiliser `repeat()`:

```css
.container {
    background-color: #e8f5e9;
    border: 3px dashed #4caf50;
    padding: 20px;
    min-height: 400px;
    display: grid;
    //highlight-next-line
    grid-template-columns: repeat(3, 1fr);
}
```

- Le résultat est-il le même qu'avec `1fr 1fr 1fr`?
- Essayez `repeat(4, 1fr)`. Que se passe-t-il?
- Revenez à `repeat(3, 1fr)`.

:::info
`grid-template-columns` définit le nombre et la taille des colonnes:
- `1fr`: Une fraction de l'espace disponible
- `2fr`: Deux fois plus d'espace qu'un `1fr`
- `repeat(3, 1fr)`: Répète `1fr` trois fois (3 colonnes égales)
- Vous pouvez aussi utiliser `px`, `%`, `auto` plutôt que `fr` pour les tailles des colonnes.
:::

## Partie 3: Définir les rangées avec `grid-template-rows`

Jusqu'à maintenant, les rangées se créaient automatiquement.

Donnons-leur une hauteur spécifique.

### Définir la hauteur des rangées

Ajoutez `grid-template-rows: 150px 150px`:

```css
.container {
    background-color: #e8f5e9;
    border: 3px dashed #4caf50;
    padding: 20px;
    min-height: 400px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    //highlight-next-line
    grid-template-rows: 150px 150px;
}
```

- Que s'est-il passé avec les boîtes?
- Quelle est maintenant la hauteur des boîtes?
- Essayez `grid-template-rows: 100px 200px`. Quelle différence voyez-vous?

Gardez `grid-template-rows: 150px 150px` pour la suite.

:::info
`grid-template-rows` définit le nombre et la hauteur des rangées:
- `150px`: Hauteur fixe de 150px
- `150px 150px`: Deux rangées de 150px
- `auto` : Hauteur basée sur le contenu
- Vous pouvez mélanger: `150px auto 100px`
:::

## Partie 4: Espacement avec `gap`

Créons de l'espace entre les cellules de la grille.

### Ajouter de l'espace

Ajoutez `gap: 15px`:

```css
.container {
    background-color: #e8f5e9;
    border: 3px dashed #4caf50;
    padding: 20px;
    min-height: 400px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 150px 150px;
    //highlight-next-line
    gap: 15px;
}
```

- Un espace apparaît-il entre les boîtes?
- Essayez `gap: 30px` pour voir la différence.
- Essayez `gap: 30px 15px`. Quelle différence observez-vous?

Revenez à `gap: 15px`.

:::info
`gap` crée de l'espace entre les cellules de la grille:
- `gap: 15px` : 15px d'espace horizontal et vertical
- `gap: 30px 15px` : 30px vertical, 15px horizontal
- `row-gap` et `column-gap`: Contrôle séparé
:::

## Partie 5: Faire occuper plusieurs cellules avec `grid-column`

Faisons en sorte qu'une boîte occupe plusieurs colonnes.

### Phase 1: Boîte 1 occupe 2 colonnes

Ajoutez `grid-column: span 2` à `.box-1`:

```css
.box-1 {
    background-color: #e91e63;
    //highlight-next-line
    grid-column: span 2;
}
```

- Que s'est-il passé avec la boîte 1?
- Combien de colonnes occupe-t-elle?
- Comment les autres boîtes se sont-elles réorganisées?

### Phase 2: Boîte 5 occupe aussi 2 colonnes

Ajoutez `grid-column: span 2` à `.box-5`:

```css
.box-5 {
    background-color: #ff9800;
    //highlight-next-line
    grid-column: span 2;
}
```

- Comment la grille s'est-elle réorganisée?
- Où est maintenant la boîte 6?

:::info
`grid-column: span X` fait occuper X colonnes à un élément:
- `span 2`: Occupe 2 colonnes
- `span 3`: Occupe 3 colonnes
:::

## Partie 6: Faire occuper plusieurs rangées avec `grid-row`

De la même façon, on peut faire occuper plusieurs rangées à un élément.

### Boîte 2 occupe 2 rangées

Ajoutez `grid-row: span 2` à `.box-2`:

```css
.box-2 {
    background-color: #9c27b0;
    //highlight-next-line
    grid-row: span 2;
}
```

- Que s'est-il passé avec la boîte 2?
- Est-elle plus haute maintenant?
- Comment les autres boîtes sont-elles positionnées?

:::info
`grid-row: span X` fait occuper X rangées à un élément:
- `span 2`: Occupe 2 rangées
- Vous pouvez combiner avec `grid-column`: une boîte peut occuper 2 colonnes ET 2 rangées!
:::

## Partie 7: Alignement des items dans leurs cellules

Explorons comment aligner les boîtes à l'intérieur de leurs cellules.

### Phase 1: Alignement horizontal avec `justify-items`

Ajoutez `justify-items: start` au conteneur:

```css
.container {
    background-color: #e8f5e9;
    border: 3px dashed #4caf50;
    padding: 20px;
    min-height: 400px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 150px 150px;
    gap: 15px;
    //highlight-next-line
    justify-items: start;
}
```

- Où sont les boîtes horizontalement?
- Prennent-elles toute la largeur de leur cellule?

Essayez aussi:
- `justify-items: center`
- `justify-items: end`

Enlevez `justify-items` pour revenir à `stretch` (défaut):

```css
.container {
    background-color: #e8f5e9;
    border: 3px dashed #4caf50;
    padding: 20px;
    min-height: 400px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 150px 150px;
    gap: 15px;
}
```

### Phase 2: Alignement vertical avec `align-items`

Ajoutez `align-items: start` au conteneur:

```css
.container {
    background-color: #e8f5e9;
    border: 3px dashed #4caf50;
    padding: 20px;
    min-height: 400px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 150px 150px;
    gap: 15px;
    //highlight-next-line
    align-items: start;
}
```

- Où sont les boîtes verticalement?

Essayez aussi:
- `align-items: center`
- `align-items: end`

Enlevez `align-items` pour revenir au comportement par défaut.

:::info
`justify-items` et `align-items` alignent TOUS les items dans leurs cellules:
- `justify-items`: Alignement horizontal (start, center, end, stretch)
- `align-items`: Alignement vertical (start, center, end, stretch)
- `stretch` est la valeur par défaut: les items remplissent leur cellule
:::

## Partie 8: Alignement individuel

On peut aussi aligner un seul élément différemment des autres.

### Aligner la boîte 3 différemment

Ajoutez `justify-self: end` à `.box-3`:

```css
.box-3 {
    background-color: #2196f3;
    //highlight-next-line
    justify-self: end;
}
```

- Où est la boîte 3 maintenant?
- Les autres boîtes ont-elles bougé?

Essayez aussi `align-self: start` sur la même boîte:

```css
.box-3 {
    background-color: #2196f3;
    justify-self: end;
    //highlight-next-line
    align-self: start;
}
```

Enlevez ces propriétés pour revenir à la normale:

```css
.box-3 {
    background-color: #2196f3;
}
```

:::info
`justify-self` et `align-self` permettent d'aligner un élément individuellement:
- `justify-self`: Alignement horizontal de cet élément seulement
- `align-self`: Alignement vertical de cet élément seulement
- Valeurs: start, center, end, stretch
:::

Bravo! Vous maîtrisez maintenant les bases de CSS Grid! 🎉
