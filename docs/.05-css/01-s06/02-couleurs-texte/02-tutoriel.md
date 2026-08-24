---
---

# 10-1 Appliquer du style au texte et des couleurs

Pour cet exercice, ajoutons une feuille de style à une page HTML et amusons-nous à ajouter quelques styles pour changer l'apparence de la page, simplement à l'aide de CSS.

## Créer la structure de base

**Créez un nouveau dossier (ex.: `pratique/10_1`) pour le tutoriel et ajoutez un fichier `index.html`** avec le contenu suivant:

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rétro Arcade - Salle de jeux vidéo</title>
</head>
<body>
    <header>
        <h1>🕹️ Rétro Arcade</h1>
        <p>La meilleure salle d'arcade depuis 1985!</p>
    </header>

    <main>
        <section>
            <h2>Nos Jeux Classiques</h2>
            
            <article class="jeu">
                <h3>Pac-Man</h3>
                <p class="description">Le classique absolu! Mangez tous les points en évitant les fantômes.</p>
                <p class="prix">25¢ la partie</p>
            </article>

            <article class="jeu" id="vedette">
                <h3>Space Invaders</h3>
                <p class="description">Défendez la Terre contre l'invasion alien!</p>
                <p class="prix">25¢ la partie</p>
                <p class="highlight">⭐ Jeu de la semaine - 2 parties pour 25¢!</p>
            </article>

            <article class="jeu nouveau">
                <h3>Street Fighter II</h3>
                <p class="description">Le classique des jeux de combat!</p>
                <p class="prix nouveau">50¢ la partie</p>
            </article>

            <article class="jeu nouveau populaire">
                <h3>Mortal Kombat</h3>
                <p class="description">FINISH HIM! Le combat ultime vous attend.</p>
                <p class="prix nouveau">50¢ la partie</p>
                <p class="highlight">🔥 Le plus joué ce mois-ci!</p>
            </article>
        </section>

        <section class="info">
            <h2>Informations</h2>
            <p class="info-horaire">Ouvert tous les jours de 10h à 21h</p>
            <p class="info-adresse">123 rue des Pixels, Arcadia</p>
        </section>
    </main>

    <footer>
        <p>© 2025 Rétro Arcade - Gardons les classiques vivants!</p>
    </footer>
</body>
</html>
```

## Ajouter un fichier CSS
**Ajoutons un fichier `CSS`** à notre structure de fichier pour y contenir les styles du site web.

1. **Créez un dossier `styles`** au même niveau que votre fichier `index.html`
    ![img](./img/styles-folder.png)
2. **Ajoutez un fichier `app.css`** sous le dossier `styles`
    ![img](./img/appcss.png)

    :::info
    Le fichier a été nommé `app.css` comme dans "application", soit le style de l'application.
    :::
3. **Faire un lien entre votre fichier `HTML` et `CSS`**. Pour que `index.html` puisse faire usage de `app.css`, on doit les lier ensemble via la balise `link`. Ajoutez la référence dans la portion `head` de votre fichier `index.html`:
    ```html title="index.html"
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      //highlight-next-line
      <link rel="stylesheet" href="./styles/app.css">  
      <title>Rétro Arcade - Salle de jeux vidéo</title>
    </head>
    ```

## Modifier la couleur d'arrière-plan avec `background-color`

Commençons par **ajouter une couleur d'arrière-plan**. Pour cela, on peut cibler la balise `body` et la règle CSS `background-color`.

1. **Dans le fichier CSS. ajoutez le sélecteur `body`** pour cibler l'élément
    ```css title="styles/app.css"
    body {

    }
    ```
2. **Ajoutez une couleur d'arrière-plan** à l'aide de la règle `background-color`
    ```css title="styles/app.css"
    body {
      background-color: #ffeb8a;
    }
    ```

    :::info
    Ici j'ai choisi un jaune pâle un peu rétro, mais vous pouvez modifier pour une couleur de votre choix. De plus, je choisis de préciser les couleurs au format hexadécimal. Référez-vous à la documentation sur les couleurs pour les explications du format hexadécimal.
    :::

Vous devriez avec un résultat ressemblant à ceci.

<SandpackPlayground
    template="static"
    editorHeight={700}
    files={{
    '/index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rétro Arcade - Salle de jeux vidéo</title>
    <link rel="stylesheet" href="./styles/app.css">
</head>
<body>
    <header>
        <h1>🕹️ Rétro Arcade</h1>
        <p>La meilleure salle d'arcade depuis 1985!</p>
    </header>

    <main>
        <section>
            <h2>Nos Jeux Classiques</h2>
            
            <article class="jeu">
                <h3>Pac-Man</h3>
                <p class="description">Le classique absolu! Mangez tous les points en évitant les fantômes.</p>
                <p class="prix">25¢ la partie</p>
            </article>

            <article class="jeu" id="vedette">
                <h3>Space Invaders</h3>
                <p class="description">Défendez la Terre contre l'invasion alien!</p>
                <p class="prix">25¢ la partie</p>
                <p class="highlight">⭐ Jeu de la semaine - 2 parties pour 25¢!</p>
            </article>

            <article class="jeu nouveau">
                <h3>Street Fighter II</h3>
                <p class="description">Le classique des jeux de combat!</p>
                <p class="prix nouveau">50¢ la partie</p>
            </article>

            <article class="jeu nouveau populaire">
                <h3>Mortal Kombat</h3>
                <p class="description">FINISH HIM! Le combat ultime vous attend.</p>
                <p class="prix nouveau">50¢ la partie</p>
                <p class="highlight">🔥 Le plus joué ce mois-ci!</p>
            </article>
        </section>

        <section class="info">
            <h2>Informations</h2>
            <p class="info-horaire">Ouvert tous les jours de 10h à 21h</p>
            <p class="info-adresse">123 rue des Pixels, Arcadia</p>
        </section>
    </main>

    <footer>
        <p>© 2025 Rétro Arcade - Gardons les classiques vivants!</p>
    </footer>
</body>
</html>`,
'styles/app.css': `body {
  background-color: #ffeb8a;
}
`
    }}
/>

## Modifier la police de caractères avec `font-family`

Modifions la police de caractère pour tout le document!

**La règle CSS pour la police de caractère est `font-family`**, suivie du nom d'une police.

```css title="styles/app.css"
body {
  background-color: #ffeb8a;
  //highlight-next-line
  font-family: Arial, sans-serif;
}
```

Vous remarquerez que la police de caractère est maintenant Arial, pour tout le document! 😊

:::info
On défini toujours une police de "secours", c'est-à-dire une police par défaut qui sera choisie sur l'ordinateur de l'utilisateur et qui correspond à un style en particulier: `serif`, `sans-serif`, etc.
:::

## Modifier la couleur des titres avec `color`

### Modifier la couleur du `h1`

Commençons par modifier la couleur du titre de la page, soit le `h1`. On ciblera l'élément via le sélecteur `h1` et **la règle CSS pour changer la couleur du texte est `color`**.

```css title="styles/app.css"
body {
  background-color: #ffeb8a;
  font-family: Arial, sans-serif;
}

//highlight-start
h1 {
  color: #ff6d1f;
}
//highlight-end
```

Cela aura pour effet de changer la couleur du `h1`! La couleur devrait être dans les tons de rouge/orange.

À noter que cette règle changerait TOUS les `h1` sur la page s'il y en avait plusieurs. Il n'y en a seulement qu'un, et c'est normal, mais le type de sélecteur par élément cible TOUS les éléments ayant la balise ciblée.

### Modifier la couleur des `h2` et `h3`

La page contient des `h2` et des `h3`. Assignons-leur la même couleur.

Pour cela, on pourrait être tenté de faire:

```css title="styles/app.css"
body {
  background-color: #ffeb8a;
  font-family: Arial, sans-serif;
}

h1 {
  color: #ff6d1f;
}

//highlight-start
h2 {
  color: #E8631C;
}

h3 {
  color: #E8631C;
}
//highlight-end
```

... mais c'est de la répétition! Il est possible en CSS d'assigner le même style à plusieurs éléments en visant plusieurs sélecteurs, séparés par une virgule:

```css title="styles/app.css"
body {
  background-color: #ffeb8a;
  font-family: Arial, sans-serif;
}

h1 {
  color: #ff6d1f
}

//highlight-start
h2, h3 {
  color: #E8631C;
}
//highlight-end
```

## Modifier la taille des titres `h1` avec `font-size`

Modifions la taille du titre principal (`h1`). Pour cela, on utilise la propriété `font-size`.

```css title="styles/app.css"
h1 {
  color: #ff6d1f;
  //highlight-next-line
  font-size: 48px;
}
```

:::info
Il existe plusieurs unités de mesure en CSS:

**Unités absolues**
- **px** (pixels): Unité fixe, corresponds au nombre de pixels sur l'écran
- **pt** (points): Principalement pour l'impression (1pt = 1/72 pouce). Très pru utilisé.

**Unités relatives**
- **em**: Relative à la taille de police de l'élément parent
- **rem**: Relative à la taille de police de l'élément racine (`html`)
- **%**: Relative au pourcentage de la taille de l'élément parent

Pour plus de détail sur les unités de mesure, consultez la [référence sur les propriétés de texte et unités de mesure](./01-doc-style-texte.md).
:::

## Centrer le texte dans l'en-tête avec `text-align`

Pour modifier l'alignement du texte, on utilise `text-align`. Pour centrer, la valeur est `center`.

```css title="styles/app.css"
header {
  text-align: center;
}
```

:::info
La propriété `text-align` définit l'alignement horizontal du texte.

**Valeurs**
- `left`: Aligné à gauche (par défaut)
- `right`: Aligné à droite
- `center`: Centré
- `justify`: Justifié (espacement uniforme)
:::

## Appliquer une bordure sur les jeux avec `border`

Remarquez que les jeux ont un attribut `class="jeu"` et que les différentes propriétés du jeu ont aussi des classes. L'avantage est que nous pourrons cibler la classe `jeu` et ainsi modifier le style de tous les jeux à la fois!

1. Pour cibler une classe CSS, on précède le nom de la classe à d'un `.`:
    ```css title="styles/app.css"
    body {
        background-color: #ffeb8a;
        font-family: Arial, sans-serif;
    }

    h1 {
        color: #ff6d1f;
    }

    h2, h3 {
        color: #E8631C;
    }

    //highlight-start
    .jeu {
    
    }
    //highlight-end
    ```
2. Ensuite, on peut appliquer les règles CSS voulus. Commençons par une bordure de 2px de large, continue et de couleur légèrement orangée.
    ```css title="styles/app.css"
    body {
        background-color: #ffeb8a;
        font-family: Arial, sans-serif;
    }

    h1 {
        color: #ff6d1f
    }

    h2, h3 {
        color: #E8631C;
    }

    .jeu {
        //highlight-next-line
        border: 2px solid #FFD26C;
    }
    ```
3. Pas en lien avec les couleurs, mais pour faire respirer un peu le contenu, ajoutons une marge en haut et en bas de chaque jeu et un peu d'espacement à l'intérieur.
    ```css title="styles/app.css"
    .jeu {
        border: 2px solid #FFD26C;
        //highlight-start
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 10px;
        //highlight-end
    }
    ```

    :::caution
    Nous verrons les espacements (marge et padding) lors du prochain cours, mais déjà je crois que vous pouvez observer l'impact sur le contenu.
    :::


## Mettre les prix en gras avec `font-weight`

Les prix ont tous une classe `prix`, cela est idéal pour appliquer un style à ces derniers! Pour cela, on peut utiliser `font-weight`.

```css title="styles/app.css"
.prix {
  font-weight: bold;
}
```

:::info
La propriété `font-weight` contrôle l'épaisseur du texte.

**Valeurs courantes:**
- `normal` ou `400` : Poids normal
- `bold` ou `700` : Gras
- `lighter` : Plus léger que le parent
- `bolder` : Plus gras que le parent
- Valeurs numériques : 100, 200, 300, 400, 500, 600, 700, 800, 900
:::

## Modifier le style des éléments en surbrillance avec

Remarquez que certains éléments ont la classe `highlight` avec comme objectif de les faire ressortir.

Utilisons les propriétés `font-style`, `text-transform` et `text-decoration` avec de mettre le texte en italique, majuscule et souligné.

```html
<p class="highlight">⭐ Jeu de la semaine - 2 parties pour 25¢!</p>
```

1. Modifions le style pour mettre le texte en italique et en majuscules.
    ```css title="styles/app.css"
    .highlight {
        font-style: italic;
        text-transform: uppercase;
    }
    ```

    :::info
    La propriété `font-style` définit le style de la police.

    **Valeurs:**
    - `normal`: Style normal (par défaut)
    - `italic`: Italique
    - `oblique`: Oblique (similaire à l'italique)

    La propriété `text-transform` modifie la casse du texte (uppercase, lowercase, capitalize ou none).
    :::
2. Appliquons `text-decoration` pour souligner le texte
    ```css title="styles/app.css"
    .highlight {
        font-style: italic;
        text-transform: uppercase;
        text-decoration: underline;
    }
    ```

    :::info
    La propriété `text-decoration` ajoute des lignes décoratives au texte.

    **Valeurs courantes**
    - `none`: Aucune décoration
    - `underline`: Soulignement
    - `overline`: Ligne au-dessus
    - `line-through`: Ligne barrée
    - `underline overline`: Combinaison possible
    :::

## Utiliser de la transparence à une couleur avec `rgba`

Pour appliquer de la transparence à une couleur, on utilise `rgba`, qui permet de spécifier un code RGB, en plus d'un pourcentage d'opacité (alpha).

Par exemple, sur les jeux, on pourrait appliquer un arrière-plan orange, mais avec une forte transparence (opacité à 5%):

```css
.jeu {
  //highlight-next-line
  background-color: rgba(255, 109, 31, 0.05);
  border: 2px solid #FFD26C;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
}
```

:::info
L'opacité est définit en pourcentage, représenté par un nombre à virgule comme `0.05`. Il est possible d'omettre le premier zéro (ex.: `.05`)
:::

## Résultat final

Au final, vous devriez avoir quelque chose comme ceci!

<SandpackPlayground
    template="static"
    editorHeight={700}
    files={{
    '/index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rétro Arcade - Salle de jeux vidéo</title>
    <link rel="stylesheet" href="./styles/app.css">
</head>
<body>
    <header>
        <h1>🕹️ Rétro Arcade</h1>
        <p>La meilleure salle d'arcade depuis 1985!</p>
    </header>

    <main>
        <section>
            <h2>Nos Jeux Classiques</h2>
            
            <article class="jeu">
                <h3>Pac-Man</h3>
                <p class="description">Le classique absolu! Mangez tous les points en évitant les fantômes.</p>
                <p class="prix">25¢ la partie</p>
            </article>

            <article class="jeu" id="vedette">
                <h3>Space Invaders</h3>
                <p class="description">Défendez la Terre contre l'invasion alien!</p>
                <p class="prix">25¢ la partie</p>
                <p class="highlight">⭐ Jeu de la semaine - 2 parties pour 25¢!</p>
            </article>

            <article class="jeu nouveau">
                <h3>Street Fighter II</h3>
                <p class="description">Le classique des jeux de combat!</p>
                <p class="prix nouveau">50¢ la partie</p>
            </article>

            <article class="jeu nouveau populaire">
                <h3>Mortal Kombat</h3>
                <p class="description">FINISH HIM! Le combat ultime vous attend.</p>
                <p class="prix nouveau">50¢ la partie</p>
                <p class="highlight">🔥 Le plus joué ce mois-ci!</p>
            </article>
        </section>

        <section class="info">
            <h2>Informations</h2>
            <p class="info-horaire">Ouvert tous les jours de 10h à 21h</p>
            <p class="info-adresse">123 rue des Pixels, Arcadia</p>
        </section>
    </main>

    <footer>
        <p>© 2025 Rétro Arcade - Gardons les classiques vivants!</p>
    </footer>
</body>
</html>`,
'styles/app.css': `body {
  background-color: #ffeb8a;
  font-family: Arial, sans-serif;
}

header {
  text-align: center;
}

h1 {
  color: #ff6d1f;
  font-size: 48px;
}

h2, h3 {
  color: #E8631C;
}

.jeu {
  background-color: rgba(255, 109, 31, 0.05);
  border: 2px solid #FFD26C;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
}

.prix {
  font-weight: bold;
}

.highlight {
  font-style: italic;
  text-transform: uppercase;
  text-decoration: underline;
}
`
    }}
/>


