---
---
import introBody from '!!raw-loader!@site/src/playground/s01/intro-body.html';

# 📚 Principes et structure d'un document HTML

## Les fichiers `HTML`

Un fichier HTML est un fichier texte qui contient du code en **HyperText Markup Language (HTML)**, c’est-à-dire un ensemble de balises permettant de structurer et de présenter du contenu (titres, paragraphes, images, liens, formulaires, etc.) dans un navigateur web.
- Un fichier HTML porte l'extension `.html`
- L’extension de fichier `.html` indique au système d’exploitation et aux serveurs web qu’il s’agit d’une page web codée en HTML.
- Lorsque vous double-cliquez sur un fichier `.html` sur votre ordinateur, votre navigateur l’ouvre et interprète les balises pour afficher une page interactive.

### Le fichier `index.html`

Les serveurs Web sont configurés pour rechercher par défaut un fichier `index.html` à la racine du site demandé. C'est pourquoi on utilise comme convention de nommage `index.html` pour le fichier à la racine du site. De plus, `index` communique bien ce qu'on désire afficher: l'accueil du site.

Il est aussi possible d'utiliser plusieurs fichiers `index.html` à dans des sous-dossiers, mais nous y reviendrons plus loin. Pour l'instant, retenez que:

- L’extension .html identifie un document HTML à interpréter par le navigateur.
- Le fichier index.html joue le rôle de point d’entrée de votre site.

### Créer un fichier `HTML`

Pour créer un fichier `HTML` dans VS Code:
1. `File` -> `New File`
2. Tapez le nom du fichier: `index.html`
3. Cliquez sur `Create New File`
4. Sauvegardez le fichier à l'endroit désiré sur votre système de fichiers.

## Structure d'un document HTML

Comme décrit précédemment, **un document HTML décrit une page web**, permettant de la structurer et de présenter du contenu. Dans sa forme la plus minime, un document HTML ressemble à ceci:

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ma première page web!</title>
</head>
<body>
  
</body>
</html>
```

Analysons les différents éléments et la structure du document!

### Déclaration `<!DOCTYPE>`

La première ligne d’un document HTML est la déclaration de type:

```html
<!DOCTYPE html>
```

Cette déclaration **indique qu navigateur qu'il s'agit d'un document HTML5**. Les versions précédentes de HTML utilisaient une déclaration plus complexe de cette déclaration. Elle est extrêmement importante puisque l'omettre pourrait mener au navigateur à penser que le document doit être affiché dans une version antérieure à HTML5 et ainsi mener à ne pas reconnaitre certaines balises modernes.

### Structure de base

Un document HTML se compose de deux grandes parties à l'intérieur d'un élément racine `<html>`.

```html
<html lang="fr">
  <head>
    ... méta-données ...
  </head>
  <body>
    ... contenu visible ...
  </body>
</html>
```

:::info
- `html` est **l'élément racine qui englobe tout le document**. L'attribut `lang="fr"` informe le navigateur et les moteurs de recherche de la langue principale de la page.
- `<head>` Contiens des métadonnées (informations sur la page): **ces informations ne sont pas affichées directement**, mais sont utiles au navigateur. Par exemple: titre de la page, encodage, liens vers des feuilles de style (pour le visuel), etc.
- `<body>` Renferme tout le contenu visible et affiché dans la page: textes, images, formulaires, etc.
:::

### Section `head` (métadonnées)

Comme mentionné précédemment, **`head` contiens des informations sur la page**. Ces dernières ne sont pas affichées, mais sont très utiles au navigateur pour afficher correctement la page.

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ma première page web!</title>
</head>
```

| Balise                                 | Description                                                                                                                                                                                                   |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<meta charset="UTF-8">`               | Indique au navigateur comment traiter les caractères. UTF-8 est l'encodage le plus fréquemment utilisé et il est préférable de conserver cette valeur.                                                        |
| `<title>Ma première page Web!</title>` | Le titre de la page. Ce titre est entre autres utilisé par le navigateur pour le titre de l'onglet. Les moteurs de recherche l'utilisent aussi pour le titre de page affiché dans les résultats de recherche. |
| `<meta name="viewport" content="…">`   | Permets un comportement optimal sur appareil mobile                                                                                                                                                            |

### Section `body` (contenu visible)

La section **`body` contient le contenu visible de la page**. Pour afficher du contenu dans la page, on utilise des balises HTML ayant des noms bien précis associés à des types de contenu (paragraphe, titre, liste ordonnée, etc.).

**Les balises sont traitées en détail dans la section suivante**.

Par exemple, pour afficher un titre de niveau 1, on utiliserait la balise `<h1>` et pour un paragraphe, la balise `p`.

<SandpackPlayground
  template="static"
  files={{
    '/index.html': introBody
  }}
/>