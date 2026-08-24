---
---

# 📚 Les propriétés de texte et unités de mesure

Nous avons vu comment contrôller les couleurs, voyons maintenant comment contrôler le style du texte dans les pages. De plus, quelle belle occasion d'en apprendre plus sur les unités de mesure!

## Taille du texte (`font-size`)

La propriété `font-size` détermine la taille du texte. Elle accepte différentes unités de mesure.

```css
h1 {
    font-size: 24px;
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
    <h1>Titre principal</h1>
    <h2>Sous-titre</h2>
    <p>Paragraphe normal</p>
    <p class="petit">Petit texte</p>
    <p class="grand">Grand texte</p>
</body>
</html>`,
    '/styles.css': `h1 {
    font-size: 32px;
}

h2 {
    font-size: 24px;
}

p {
    font-size: 16px;
}

.petit {
    font-size: 12px;
}

.grand {
    font-size: 20px;
}`
  }}
/>

## Unités de mesure

Autant pour la taille du texte que pour préciser la taille des éléments HTML en général, plusieurs unités de mesure existent.

### Unités absolues
- **px** (pixels): Unité fixe, correspond au nombre de pixels sur l'écran
- **pt** (points): Principalement pour l'impression (1pt = 1/72 pouce). Très peu utilisé.

### Unités relatives
- **em**: Relative à la taille de police de l'élément parent
- **rem**: Relative à la taille de police de l'élément racine (`html`)
- **%**: Relative au pourcentage de la taille de l'élément parent
- **vw**: Unité relative à la largeur de la fenêtre d'affichage (la zone visible d'une page web). 1vw correspond à 1 % de la largeur de l'écran. Si la largeur de la fenêtre est de 1000 pixels, 1vw équivaut à 10 pixels. 
- **vh**: Unité relative à la hauteur de la fenêtre d'affichage. 1vh correspond à 1 % de la hauteur de l'écran. Par exemple, 100vh représente la hauteur totale de l'écran.


```css
/* Exemples d'unités */
.pixels { font-size: 16px; }      /* Fixe */
.em { font-size: 1.5em; }         /* 1.5x la taille du parent */
.rem { font-size: 1.2rem; }       /* 1.2x la taille racine (taille `font-size` de l'élément html) */
.pourcentage { font-size: 120%; } /* 120% du parent */
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
    <div class="conteneur">
        <p class="pixels">Texte en pixels (16px)</p>
        <p class="em">Texte en em (1.5em)</p>
        <p class="rem">Texte en rem (1.2rem)</p>
        <p class="pourcentage">Texte en % (120%)</p>
    </div>
</body>
</html>`,
    '/styles.css': `html {
    font-size: 16px; /* Taille racine */
}

.conteneur {
    font-size: 14px; /* Taille du parent */
    border: 1px solid #ccc;
    padding: 10px;
}

.pixels {
    font-size: 16px;
}

.em {
    font-size: 1.5em; /* 1.5 × 14px = 21px */
}

.rem {
    font-size: 1.2rem; /* 1.2 × 16px = 19.2px */
}

.pourcentage {
    font-size: 120%; /* 120% × 14px = 16.8px */
}`
  }}
/>

## Poids de la police (`font-weight`)

La propriété `font-weight` contrôle l'épaisseur du texte.

**Valeurs courantes:**
- `normal` ou `400` : Poids normal
- `bold` ou `700` : Gras
- `lighter` : Plus léger que le parent
- `bolder` : Plus gras que le parent
- Valeurs numériques : 100, 200, 300, 400, 500, 600, 700, 800, 900

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
    <p class="normal">Texte normal (400)</p>
    <p class="leger">Texte léger (300)</p>
    <p class="gras">Texte gras (700)</p>
    <p class="tres-gras">Texte très gras (900)</p>
</body>
</html>`,
    '/styles.css': `.normal {
    font-weight: normal; /* ou 400 */
}

.leger {
    font-weight: 300;
}

.gras {
    font-weight: bold; /* ou 700 */
}

.tres-gras {
    font-weight: 900;
}`
  }}
/>

## Style de la police (`font-style`)

La propriété `font-style` définit le style de la police.

**Valeurs:**
- `normal`: Style normal (par défaut)
- `italic`: Italique
- `oblique`: Oblique (similaire à l'italique)

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
    <p class="normal">Texte normal</p>
    <p class="italique">Texte en italique</p>
    <p class="oblique">Texte oblique</p>
</body>
</html>`,
    '/styles.css': `.normal {
    font-style: normal;
}

.italique {
    font-style: italic;
}

.oblique {
    font-style: oblique;
}`
  }}
/>

## Décoration du texte (`text-decoration`)

La propriété `text-decoration` ajoute des lignes décoratives au texte.

**Valeurs courantes**
- `none`: Aucune décoration
- `underline`: Soulignement
- `overline`: Ligne au-dessus
- `line-through`: Ligne barrée
- `underline overline`: Combinaison possible

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
    <p class="normal">Texte sans décoration</p>
    <p class="souligne">Texte souligné</p>
    <p class="surligne">Texte surligné</p>
    <p class="barre">Texte barré</p>
    <p class="combine">Texte avec décorations combinées</p>
</body>
</html>`,
    '/styles.css': `.normal {
    text-decoration: none;
}

.souligne {
    text-decoration: underline;
}

.surligne {
    text-decoration: overline;
}

.barre {
    text-decoration: line-through;
}

.combine {
    text-decoration: underline overline;
}`
  }}
/>

## Alignement du texte (`text-align`)

La propriété `text-align` définit l'alignement horizontal du texte.

**Valeurs**
- `left`: Aligné à gauche (par défaut)
- `right`: Aligné à droite
- `center`: Centré
- `justify`: Justifié (espacement uniforme)

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
    <p class="gauche">Ce texte est aligné à gauche. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p class="droite">Ce texte est aligné à droite. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p class="centre">Ce texte est centré. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p class="justifie">Ce texte est justifié. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</body>
</html>`,
    '/styles.css': `.gauche {
    text-align: left;
}

.droite {
    text-align: right;
}

.centre {
    text-align: center;
}

.justifie {
    text-align: justify;
}`
  }}
/>

## Famille de polices (`font-family`)

La propriété `font-family` définit la police de caractères.

:::caution
Il est important de spécifier plusieurs polices de secours, car toutes les polices ne sont pas disponibles sur tous les systèmes. Par exemple:

```css
font-family: Arial, Helvetica, sans-serif;
```
:::

### Polices "web-safe" (généralement disponibles sur tous les ordinateurs)

#### Polices serif (avec empattement)
- `"Times New Roman"` - Windows, macOS, Linux
- `Times` - macOS, Unix
- `Georgia` - Windows, macOS
- `"Book Antiqua"` - Windows

#### Polices sans-serif (sans empattement)
- `Arial` - Windows, macOS
- `Helvetica` - macOS, Unix
- `"Helvetica Neue"` - macOS moderne
- `Verdana` - Windows, macOS
- `Tahoma` - Windows, macOS
- `"Trebuchet MS"` - Windows, macOS

#### Polices monospace (espacement fixe pour tous les caractères)
- `"Courier New"` - Windows, macOS
- `Courier` - macOS, Unix
- `Monaco` - macOS
- `"Lucida Console"` - Windows
- `Consolas` - Windows moderne

### Familles génériques (toujours disponibles)

Les familles génériques utilisent la police par défaut de l'ordinateur pour la catégorie demandée.

- `serif` : Police avec empattements
- `sans-serif` : Police sans empattements  
- `monospace` : Police à largeur fixe
- `cursive` : Police cursive/manuscrite
- `fantasy` : Police décorative

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
    <p class="times">Times New Roman (web-safe serif)</p>
    <p class="georgia">Georgia (web-safe serif)</p>
    <p class="arial">Arial (web-safe sans-serif)</p>
    <p class="verdana">Verdana (web-safe sans-serif)</p>
    <p class="courier">Courier New (web-safe monospace)</p>
    <p class="consolas">Consolas (Windows monospace)</p>
    <p class="systeme">Stack système moderne</p>
    <p class="fallback">Avec fallbacks multiples</p>
</body>
</html>`,
    '/styles.css': `.times {
    font-family: "Times New Roman", Times, serif;
}

.georgia {
    font-family: Georgia, "Book Antiqua", serif;
}

.arial {
    font-family: Arial, Helvetica, sans-serif;
}

.verdana {
    font-family: Verdana, Tahoma, sans-serif;
}

.courier {
    font-family: "Courier New", Courier, monospace;
}

.consolas {
    font-family: Consolas, "Lucida Console", Monaco, monospace;
}

.fallback {
    font-family: "Helvetica Neue", Helvetica, Arial, "Liberation Sans", sans-serif;
}`
  }}
/>

## Styles pour les liens

Les liens ont des états particuliers qui peuvent être stylisés avec des pseudo-classes.

:::info
Une pseudo-classe commence par `:` et est ajoutée à un sélecteur CSS. Par exemple:

```css
a:hover {
  color: red;
}
```

Ce style sera appliqué à tous les liens lorsque survolés.
:::

**États des liens**
- `:link`: Lien non visité
- `:visited`: Lien visité
- `:hover`: Lien survolé
- `:active`: Lien actif (pendant le clic)
- `:focus`: Lien qui a le focus

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
    <p>Voici un <a href="#" class="lien-simple">lien simple</a> dans un paragraphe avec les effets visited et hover.</p>
</body>
</html>`,
    '/styles.css': `/* Styles de base pour tous les liens */
a {
    text-decoration: none;
}

/* Lien simple */
.lien-simple:link {
    color: blue;
}

.lien-simple:visited {
    color: purple;
}

.lien-simple:hover {
    text-decoration: underline;
}`
  }}
/>

## Styles pour les listes

Les listes peuvent être stylisées avec plusieurs propriétés spécifiques.

**Propriétés principales**
- `list-style-type`: Type de puce ou numérotation
- `list-style-position`: Position de la puce (inside/outside)
- `list-style-image`: Image personnalisée pour les puces
- `list-style`: Propriété raccourcie

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
    <h3>Liste à puces classique</h3>
    <ul class="puces-classiques">
        <li>Premier élément</li>
        <li>Deuxième élément</li>
        <li>Troisième élément</li>
    </ul>

    <h3>Liste numérotée personnalisée</h3>
    <ol class="numerotee-personnalisee">
        <li>Premier élément</li>
        <li>Deuxième élément</li>
        <li>Troisième élément</li>
    </ol>

    <h3>Liste sans puces</h3>
    <ul class="sans-puces">
        <li>Premier élément</li>
        <li>Deuxième élément</li>
        <li>Troisième élément</li>
    </ul>

    <h3>Liste avec puces à l'intérieur</h3>
    <ul class="puces-interieur">
        <li>Élément avec une longue description qui s'étend sur plusieurs lignes</li>
        <li>Autre élément</li>
    </ul>
</body>
</html>`,
    '/styles.css': `/* Liste à puces classique */
.puces-classiques {
    list-style-type: disc;
}

/* Liste numérotée avec chiffres romains */
.numerotee-personnalisee {
    list-style-type: upper-roman;
}

/* Liste sans puces */
.sans-puces {
    list-style-type: none;
    padding-left: 0;
}

.sans-puces li {
    padding: 5px 0;
}

/* Liste avec puces à l'intérieur */
.puces-interieur {
    list-style-position: inside;
}`
  }}
/>

## Autres propriétés utiles

### Espacement des lettres (`letter-spacing`)

Contrôle l'espacement entre les caractères.
```css
.espacement-normal { letter-spacing: normal; }    /* Valeur par défaut */
.espacement-serre { letter-spacing: -1px; }       /* Resserre les lettres */
.espacement-large { letter-spacing: 2px; }        /* Élargit l'espacement */
.espacement-em { letter-spacing: 0.1em; }         /* Espacement relatif */
```

### Espacement des mots (`word-spacing`)

Contrôle l'espacement entre les mots.

```css
.mots-normal { word-spacing: normal; }       /* Valeur par défaut */
.mots-serres { word-spacing: -2px; }         /* Mots plus rapprochés */
.mots-espaces { word-spacing: 5px; }         /* Mots plus espacés */
.mots-relatif { word-spacing: 0.2em; }       /* Espacement relatif */
```

### Hauteur de ligne (`line-height`)

Détermine la hauteur d'une ligne de texte.

```css
.ligne-normale { line-height: normal; }      /* Valeur par défaut */
.ligne-serree { line-height: 1.2; }          /* Lignes rapprochées */
.ligne-aerea { line-height: 1.8; }           /* Lignes espacées */
.ligne-pixels { line-height: 24px; }         /* Hauteur fixe */
.ligne-pourcentage { line-height: 150%; }    /* Hauteur en pourcentage */
```

### Transformation du texte (`text-transform`)

Change la casse du texte.

```css
.texte-normal { text-transform: none; }        /* Aucune transformation */
.texte-majuscule { text-transform: uppercase; } /* TOUT EN MAJUSCULES */
.texte-minuscule { text-transform: lowercase; } /* tout en minuscules */
.texte-capitale { text-transform: capitalize; } /* Première Lettre En Majuscule */
```

### Indentation (`text-indent`)

Indente la première ligne d'un paragraphe.

### Exemple interactif

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
    <p class="espacement-lettres">Texte avec espacement des lettres modifié</p>
    <p class="espacement-mots">Texte avec espacement des mots modifié</p>
    <p class="hauteur-ligne">Ce paragraphe a une hauteur de ligne augmentée. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p class="majuscules">texte transformé en majuscules</p>
    <p class="capitales">texte avec première lettre en capitale</p>
    <p class="indentation">Ce paragraphe a une indentation sur la première ligne. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</body>
</html>`,
    '/styles.css': `.espacement-lettres {
    letter-spacing: 2px;
}

.espacement-mots {
    word-spacing: 5px;
}

.hauteur-ligne {
    line-height: 1.8;
    background: #f0f0f0;
    padding: 10px;
}

.majuscules {
    text-transform: uppercase;
}

.capitales {
    text-transform: capitalize;
}

.indentation {
    text-indent: 30px;
    max-width: 400px;
}`
  }}
/>

## Propriété raccourcie `font`

La propriété `font` permet de définir plusieurs propriétés de police en une seule déclaration:

```css
font: [font-style] [font-weight] font-size[/line-height] font-family;
```

**Exemple :**
```css
p {
    font: italic bold 16px/1.5 Arial, sans-serif;
}
```

Ceci équivaut à :
```css
p {
    font-style: italic;
    font-weight: bold;
    font-size: 16px;
    line-height: 1.5;
    font-family: Arial, sans-serif;
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
    <p class="raccourci">Ce texte utilise la propriété raccourcie font</p>
    <p class="separe">Ce texte utilise les propriétés séparées</p>
</body>
</html>`,
    '/styles.css': `/* Avec propriété raccourcie */
.raccourci {
    font: italic bold 18px/1.6 Georgia, serif;
}

/* Avec propriétés séparées (équivalent) */
.separe {
    font-style: italic;
    font-weight: bold;
    font-size: 18px;
    line-height: 1.6;
    font-family: Georgia, serif;
}`
  }}
/>

:::tip
1. **Utilisez des unités relatives** (em, rem, %) pour une meilleure adaptabilité
2. **Définissez toujours des polices de secours** dans font-family
3. **Testez la lisibilité** avec différentes tailles d'écran
4. **Respectez les conventions** d'accessibilité (contraste, taille minimale)
5. **Groupez les propriétés liées** pour une meilleure organisation
:::