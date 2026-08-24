---
---
import paragraphe from '!!raw-loader!@site/src/playground/s01/paragraphe.html';
import introBody from '!!raw-loader!@site/src/playground/s01/intro-body.html';
import img from '!!raw-loader!@site/src/playground/s01/img.html';

# 📚 Qu'est-ce qu'une balise HTML?

En HTML, une balise permet de **structurer** et de **donner du sens au contenu** d’une page web.

- Une balise est un **mot-clé entouré de chevrons `< >`**.
- Elle **délimite un élément HTML**, qui peut contenir du texte, d’autres éléments ou être vide.
- Elle indique au navigateur **quel type de contenu afficher (titre, liste, etc.)**

Par exemple:

```html
<p>Ceci est un paragraphe.</p>
```

Ici, `<p>` est la balise d’ouverture, `</p>` la balise de fermeture, et tout ce qui se trouve entre constitue le contenu de l’élément `<p>`.

<SandpackPlayground
  template="static"
  files={{
    '/index.html': paragraphe
  }}
/>

## Syntaxe de base

La syntaxe de base d'une balise HTML suit le format suivant: `<nom-de-balise>...contenu de la balise...</nom-de-la-balise>`.

1. Balise ouvrante:
    ```html
    <nom-de-balise>
    ```
2. Contenu: tout ce qui se trouve entre la balise ouvrante et la balise fermante (texte, autres balises, etc.).
3. Balise fermante: permet de fermer l'élément et est précédée par une barre oblique (`/`)
    ```html
    </nom-de-balise>
    ```

:::caution
le nom de la balise dans la fermeture doit correspondre exactement à celui de l’ouverture.
:::

## Les attributs

Les balises peuvent porter des attributs pour préciser leur comportement ou leur apparence. **Les attributs se placent dans la balise ouvrante sous la forme `attribut="valeur"`**.

Par exemple, bien que nous n'ayons pas vu cette balise encore, il existe une balise bien précise pour afficher une image. Évidemment, il faut dire quelle image afficher! Pour cela, l'attribut `src` permet de préciser la source de l'image à afficher à l'aide de la balise `<img>`.

Par exemple:

```html
<img src="https://upload.wikimedia.org/wikipedia/en/e/ed/Nyan_cat_250px_frame.PNG" />
```

Ici, on précise l'adresse de l'image que la balise doit afficher.

<SandpackPlayground
  template="static"
  files={{
    '/index.html': img
  }}
/>

## Balises autofermantes (vides)

Certaines balises n’ont pas de contenu et ne nécessitent pas de balise de fermeture. On les appelle balises autofermantes. Nous venons d'ailleurs tout juste d'en voir une, soit la balise `img`!

Voici quelques exemples de balises autofermantes. Remarquez que l'ouverture et la fermeture se font à même la balise. Il n'y a pas de balise fermante distincte.

| Balise                     | Description         |
| -------------------------- | ------------------- |
| `<br />`                   | Saut de ligne       |
| `<img src="https:/..." />` | Image               |
| `<input type="text" />`    | Champ de formulaire |

:::info
En HTML5, on peut écrire `<br>` sans barre oblique de fermeture. En XHTML ou pour plus de clarté, on utilisera `<br />`.
:::

## Style implicite

Chaque balise possède un style de base qui lui est appliqué. Dans l'exemple montré à la section précédente, on a un titre et un paragraphe. Le titre est affiché selon un style différent du paragraphe. **Ce style par défaut est géré par votre navigateur**.

Remarquez la différence entre le style associé au titre (`h1`) et le style associé au paragraphe (`p`).

<SandpackPlayground
  template="static"
  files={{
    '/index.html': introBody
  }}
/>
<br/>

Il est évidemment possible de changer ce style et nous aurons l'occasion de le faire.

## Bonnes pratiques

### Sensibilité à la casse (majuscules et minuscules)

En HTML, les noms de balises ne sont pas sensibles à la casse. Il est donc possible d'écrire autant `<P>` que `<p>`. Ceci étant dit, **par convention et pour améliorer la lisibilité, on écrit les balises en minuscule** (ex.: `<p>`).

:::caution
Dans le cadre du cours et donc dans tous les travaux à remettre, **vous devez utiliser les minuscules pour vos balises**!
:::

### Indentation (espacement)

De plus, remarquez que lorsque les balises sont imbriquées l'une dans l'autre, comme l'image `<img>` à l'intérieur de la balise `<body>`...

```html
<body>
  <img src="https://upload.wikimedia.org/wikipedia/en/e/ed/Nyan_cat_250px_frame.PNG" />
</body>
```

... Un espace est ajouté à la gauche pour améliorer la lisibilité du code. Il est ainsi plus facile de lire et de comprendre que la balise `img` est à l'intérieur de `body`. On appelle ce processus d'espacement **l'indentation**.

On ajoute généralement 2 ou 4 espaces avant une ligne pour l'indenter et communiquer l'effet de hiérarchie. Un caractère de tabulation peut aussi être utilisé.

Visual Studio Code devrait faire l'essentiel de l'indentation pour vous. Vous pouvez cependendant utiliser la fonctionnalité de formatage de Visual Studio pour formater adéquatement votre document HTML.

1. Faire un clic droit dans votre document pour faire apparaitre le menu contextuel
2. Sélectionner `Format Document`
    ![img](./img/Screenshot%202025-05-13%20at%207.37.10 AM.png)

:::caution
Dans le cadre du cours, il est attendu que **vos documents HTML remis soient parfaitement indentés**. Utilisez Visual Studio Code pour vous aider!
:::

## En résumé

1. Une balise permet de **structurer** et de **donner du sens au contenu** d’une page web.
2. Une balise est un **mot-clé entouré de chevrons < >**.
3. La balise ouvre et ferme un élément HTML.
4. Les attributs personnalisent son comportement ou son rendu.
5. Certaines balises sont vides et n’ont pas de contenu, comme `<br />`par exemple.
6. Chaque balise indique au navigateur le type de contenu à afficher (paragraphe, liste, etc.).