---
---

# 📚 Intégrer du style CSS à vos pages

Nous avons vu précédemment comment construire des pages Web à l'aide du langage de balisage HTML.

Cependant, le tout manque un peu de style! 😉

Dans les prochaines semaines, nous verrons comment agrémenter le visuel de vos pages Web à l'aide du langage de style CSS.

En effet, CSS (Cascading Style Sheets) est le langage utilisé pour styliser et mettre en forme les pages web. Si HTML structure le contenu, CSS s'occupe de l'apparence visuelle (couleurs, polices, espacements, mise en page, etc.).

## Exemple de CSS

Sans CSS, vos pages web sont un peu tristounettes ou du moins, manque d'originalité! ☹️

<SandpackPlayground
  template="static"
  showTabs={false}
  files={{
    '/index.html': `<!DOCTYPE html>
<html>
<head>
    <title>Mon site sans CSS</title>
</head>
<body>
    <h1>Bienvenue sur mon site</h1>
    <p>Ceci est un paragraphe d'introduction.</p>
    <ul>
        <li>Premier élément</li>
        <li>Deuxième élément</li>
        <li>Troisième élément</li>
    </ul>
    <button>Bouton</button>
</body>
</html>`
  }}
/>

<br />

Avec le CSS, on peut agrémenter le contenu via des règles qui appliquent un style aux différents éléments HTML de la page. Par exemple:

<SandpackPlayground
  template="static"
  showTabs={false}
  files={{
    '/index.html': `<!DOCTYPE html>
<html>
<head>
    <title>Mon site sans CSS</title>
    <style>
      h1 {
        color: blue;
        font-family: Arial, sans-serif;
        text-align: center;
      }

      p {
        color: red
      }

      button {
        background-color: lightgrey;
        padding: 8px 12px;
      }
    </style>
</head>
<body>
    <h1>Bienvenue sur mon site</h1>
    <p>Ceci est un paragraphe d'introduction.</p>
    <ul>
        <li>Premier élément</li>
        <li>Deuxième élément</li>
        <li>Troisième élément</li>
    </ul>
    <button>Bouton</button>
</body>
</html>`
  }}
/>

<br />

Le titre sera maintenant centré, bleu et avec la police Arial. Le paragraphe sera pour sa part rouge et le bouton gris avec un peu plus d'espacement autour du texte.

Certains pourraient argumenter que ce n'est pas plus beau, mais vous comprenez le principe! ;) 

Observez la balise `<style>` qui contient le code CSS. Vous remarquerez qu'il y un lien avec les éléments `HTML` (ex.: `h1`) et le code CSS.

## Trois façons d'intégrer le style à vos pages

### 1. Le CSS en ligne (inline)

Directement dans l'élément HTML avec l'attribut style. À éviter en général car difficile à maintenir.

```html
<p style="color: blue; font-size: 18px;">Texte en bleu</p>
```

<SandpackPlayground
  template="static"
  showTabs={false}
  files={{
    '/index.html': `
      <p style="color: blue; font-size: 18px;">Texte en bleu</p>
    `
  }}
/>

<br />

:::caution
Évitez le style en ligne, il est difficile à maintenir et n'est pas réutilisable.
:::

### 2. CSS interne (dans l'en-tête)

Dans la balise `<head>` de votre page HTML, entre des balises `<style>`.

<SandpackPlayground
  template="static"
  showTabs={false}
  files={{
    '/index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
    <style>
        body {
          background-color: #f0f0f0;
        }
        h1 {
          color: navy;
        }
    </style>
</head>
<body>
    <h1>Mon titre</h1>
</body>
</html>`
  }}
/>

<br />

:::caution
Saufs cas d'exception, on évite aussi cette formule puisqu'encore une fois, le CSS ne peut pas être réutilisé dans une autre page.
:::

### 3. CSS externe (recommandé)

Dans un fichier séparé .css lié à votre HTML. **C'est la meilleure pratique.**

:::info
Remarquez le lien entre `index.html` et le fichier `styles.css` (accessible via les onglets dans le haut de l'exemple).
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
    <h1>Mon titre</h1>
</body>
</html>`,
'styles.css':`body {
    background-color: #f0f0f0;
}

h1 {
    color: navy;
}`
  }}
/>

<br />

:::info
La balise `<link>` permet de faire un lien vers une ressource externe et de l'inclure dans la page comme si elle en faisait partie intégrale.

L'attribut `rel` indique quelle est la relation entre le document HTML et la ressource liée, c'est-à-dire que le type de contenu à charger est une feuille de style.

L'attribut `href` spécifie où trouver le fichier CSS. Il est possible de préciser des chemins autant relatifs que absolus.
:::

## Syntaxe CSS

Vous avez probablement remarqué la syntaxe CSS:

```css
h1 {
  color: navy
}
```

Cette syntaxe semble cibler les éléments `h1` et leur donner un style en particulier et c'est exactement ce qui se produit.

Une règle CSS se compose d'un sélecteur et d'un bloc de déclarations:

```css
sélecteur {
    propriété: valeur;
    propriété: valeur;
}
```

La première portion, `sélecteur`, fait référence à un élément `HTML`. Il est possible de cibler un élément par:

`Élément (balise)`: `h1`, `p`, `div`
`Classe`: `.ma-classe`
`ID`: `#mon-id`

Ensuite, `propriété` fait référence à une propriété `CSS` valide. Une propriété `CSS` change l'attribut d'un élément, comme sa couleur par exemple. Exemple de propriétés:

`color`: change la couleur du texte
`background-color`: change la couleur d'arrière plan
`margin`: ajoute une marge sur l'élément.

Finalement, `valeur` est la valeur à associer à la propriété. Par exemple, dans `color: red`, `red` est la valeur.

C'est ce qui nous donne un bloc CSS valide comme le suivant permant de changer la couleur des titres `h1`:

```css
h1 {
  color: navy
}
```

## Les sélecteurs CSS pour cibler les éléments

### 1. Sélecteur de type (élément)

Ce type de sélecteur cible tous les éléments HTML du même type. Par exemple, voici deux règles qui s'appliqueront à tous les paragraphes (`p`) et tous les titres de niveau 1 (`h1`) dans la page.

```css
p { color: black; }        /* Tous les paragraphes */
h1 { font-size: 32px; }    /* Tous les h1 */
``` 

### 2. Sélecteur d'ID

Nous avons utilisé les `id` dans le cadre des liens internes avec ancres (`#`). Ces derniers peuvent aussi être utilisés pour cibler des éléments HTML!

```css
#header { background: gray; }  /* Élément avec id="header" */
```

```html
<div id="header">En-tête</div>
```

### 3. Sélecteur de classe

Une classe CSS est un identifiant que vous appliquez à un ou plusieurs éléments HTML pour leur associer des styles CSS communs. Ce type de sélecteur fait usage d'un attribut que nous n'avons pas utilisé jusqu'à maintenant, soit l'attribut `class`.

```css
.important { color: red; }  /* Éléments avec class="important" */
```

```html
<p class="important">Texte important</p>
```

## L'attribut `class`

Une classe CSS est un identifiant que vous appliquez à un ou plusieurs éléments HTML pour leur associer des styles CSS communs.

```HTML
<p class="introduction">Voici un paragraphe d'introduction.</p>
```

### Utilisation des classes

Tel que montré précédemment, il est possible d'ajouter une classe à un élément:

```html
<p class="introduction">Voici un paragraphe d'introduction.</p>
```

L'utilisation de classes présente plusieurs avantages.

#### Réutilisabilité

Une même class peut être utilisée sur plusieurs éléments, permettant de partager les mêmes styles.

```html
<p class="important">Premier paragraphe important</p>
<div class="important">Une section importante</div>
<span class="important">Un texte important</span>
```

```css
/* Les trois éléments seront en rouge et en gras */
.important {
    color: red;
    font-weight: bold;
}
```

#### Sémantique (sens)

Les classes donnent du sens à vos éléments, rendant le code plus lisible. Ici, juste en regardant les classes, nous avons une idée du type de contenu.

```html
<!-- Plus clair que des éléments sans classes -->
<article class="article-principal">
    <h2 class="titre-article">Mon titre</h2>
    <p class="resume">Résumé de l'article...</p>
    <p class="contenu">Contenu principal...</p>
</article>
```

### Syntaxe et convention de nommage

La syntaxe de base pour assigner une classe à un élémen `html` est la suivante:

```html
<element class="nom-de-classe">Contenu</element>
```

À noter que vos classes doivent être:
* Descriptives et clairs
* Pas d'espaces (utilisez `-` pour remplacer les espaces)
* Commencent par une lettre
* Toujours en minuscule
* Éviter les accents et caractères spéciaux

```html
<!-- Bon : descriptif et clair -->
<div class="carte-produit">...</div>
<p class="message-erreur">...</p>
<button class="bouton-principal">...</button>

<!-- À éviter : manque de clarté -->
<div class="div1">...</div>
<p class="rouge">...</p>  <!-- Évitez les noms basés sur l'apparence -->
<span class="x">...</span>
```

:::info
Évitez les noms de classe nommés en fonction de l'apparence (ex.: `rouge`, `ligne`, `style-bordure`, etc.). Utilisez des noms basés sur le rôle (`btn`, `carte-produit`, `titre-principal`, etc.)
:::

### Classes multiples

Un élément peut avoir plusieurs classes, séparées par des espaces.

```html
<div class="carte importante grande">
    Contenu de la carte
</div>
```

```css
/* L'élément aura les trois styles appliqués */
.carte {
    border: 1px solid gray;
    padding: 10px;
}

.importante {
    background-color: yellow;
}

.grande {
    font-size: 20px;
}
```

:::info
Lorsque vous définissez plusieurs classes sur un élément, tous les styles seront appliqués à l'élément.
:::

## Combiner les sélecteurs

Il est possible de combiner des sélecteurs (ex.: type et classe) pour cibler des éléments spécifiques.

### Élément + classe

Par exemple pour sélectionner et appliquer un style aux paragraphes ayant la classe `introduction`:

```css
p.introduction {
    /* Sélectionne seulement les <p> avec class="introduction" */
    font-style: italic;
}
```

### Combinaison de classes multiples

Pour sélectionner des éléments ayant **À LA FOIS** plusieurs classes, on peut utiliser la formule suivante:

```css
.importante.urgente {
    /* Sélectionne les éléments ayant À LA FOIS les classes "importante" ET "urgente" */
    background-color: red;
    color: white;
}
```

```html
<p class="importante urgente">Sera en rouge avec texte blanc</p>
<p class="importante">Ne sera PAS affecté (manque "urgente")</p>
```

## Classe vs id pour cibler les éléments

| Aspect            | `class`                                  | `id`                               |
| ----------------- | ---------------------------------------- | ---------------------------------- |
| **Réutilisation** | Peut être utilisé sur plusieurs éléments | Doit être unique dans la page      |
| **Syntaxe CSS**   | Point (`.ma-classe`)                     | Dièse (`#mon-id`)                  |
| **Priorité CSS**  | Moins prioritaire                        | Plus prioritaire                   |
| **Usage typique** | Styles réutilisables                     | Élément unique, ancres, JavaScript |

```html
<!-- Exemple montrant la différence -->
<header id="entete-principal" class="bg-primary">
    <!-- id unique pour cet en-tête spécifique -->
    <!-- class pour un style réutilisable -->
</header>

<footer class="bg-primary">
    <!-- Réutilise la même classe -->
</footer>
```