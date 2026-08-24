---
---

# 📚 Classes utilitaires

<DocCard item={{
  type: 'link',
  href: 'https://getbootstrap.com/docs/5.3/utilities/api/',
  label: 'Documentation officielle classes utilitaires Bootstrap' }} />

<br />

Les **classes utilitaires** sont l'un des outils les plus pratiques de Bootstrap. Ce sont de petites classes CSS responsables d'appliquer un style précus et qui peuvent être combinées pour créer rapidement des interfaces sans écrire de CSS personnalisé.

## Qu'est-ce qu'une classe utilitaire?

Une classe utilitaire applique **un seul style CSS** à un élément. Au lieu d'écrire votre propre CSS, vous ajoutez simplement une classe à votre HTML.

### Sans classes utilitaires

```css
/* app.css */
.ma-boite {
    margin-top: 20px;
    padding: 15px;
    background-color: #f8f9fa;
    border-radius: 5px;
    text-align: center;
}
```

```html
<div class="ma-boite">Contenu</div>
```

### Avec classes utilitaires Bootstrap

```html
<!-- Même résultat, sans CSS personnalisé! -->
<div class="mt-4 p-3 bg-light rounded text-center">Contenu</div>
```

## Le principe de composition

Les classes utilitaires se **combinent** entre elles. C'est comme assembler des blocs LEGO pour créer quelque chose de complexe.

<SandpackPlayground
  template="static"
  showTabs={false}
  files={{
    '/index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h4>Une classe à la fois</h4>
        <div class="bg-primary">Seulement un fond bleu</div>
        
        <h4 class="mt-4">Combinaison de classes</h4>
        <div class="bg-primary text-white p-4 rounded shadow text-center">
            Fond bleu + texte blanc + padding + coins arrondis + ombre + centré
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`
  }}
/>

<br />

## Les grandes catégories

Bootstrap organise ses classes utilitaires en catégories selon le type de style qu'elles appliquent.

### Espacement (margin et padding)

Les classes d'espacement suivent une syntaxe: `{propriété}{côté}-{taille}`

**Propriétés:**
- `m` = margin (espace **extérieur**)
- `p` = padding (espace **intérieur**)

**Côtés:**
- `t` = top (haut)
- `b` = bottom (bas)
- `s` = start (gauche)
- `e` = end (droite)
- `x` = horizontal (gauche + droite)
- `y` = vertical (haut + bas)
- *(rien)* = tous les côtés

**Tailles:** 0, 1, 2, 3, 4, 5 (de petit à grand)

<SandpackPlayground
  template="static"
  showTabs={false}
  files={{
    '/index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <div class="bg-primary text-white p-2 mb-2">p-2 (petit padding)</div>
        <div class="bg-primary text-white p-5 mb-2">p-5 (grand padding)</div>
        
        <div class="bg-success text-white px-4 py-2 mb-2">px-4 py-2 (padding horizontal et vertical différents)</div>
        
        <div class="bg-warning mt-5">mt-5 (grande marge en haut)</div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`
  }}
/>

<br />

:::info Exemples courants
- `mt-3` : marge en haut de taille 3
- `mb-5` : marge en bas de taille 5
- `p-4` : padding de tous les côtés de taille 4
- `px-3` : padding horizontal (gauche + droite) de taille 3
- `my-2` : marge verticale (haut + bas) de taille 2
:::

### Couleurs

Bootstrap fournit des classes pour colorer rapidement le fond et le texte.

**Couleurs de fond:** `bg-{couleur}`
**Couleurs de texte:** `text-{couleur}`

Les couleurs disponibles: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`, `white`

<SandpackPlayground
  template="static"
  showTabs={false}
  files={{
    '/index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h4>Couleurs de fond</h4>
        <div class="bg-primary text-white p-3 mb-2">bg-primary</div>
        <div class="bg-success text-white p-3 mb-2">bg-success</div>
        <div class="bg-warning p-3 mb-2">bg-warning</div>
        <div class="bg-danger text-white p-3 mb-2">bg-danger</div>
        
        <h4 class="mt-4">Couleurs de texte</h4>
        <p class="text-primary">text-primary (bleu)</p>
        <p class="text-success">text-success (vert)</p>
        <p class="text-danger">text-danger (rouge)</p>
        <p class="text-muted">text-muted (gris pâle)</p>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`
  }}
/>

<br />

:::caution Important
Avec les fonds foncés (`bg-primary`, `bg-success`, `bg-danger`, `bg-dark`), pensez à ajouter `text-white` pour que le texte reste lisible!
:::

### Typographie

Les classes typographiques contrôlent l'apparence du texte.

**Alignement:** `text-start`, `text-center`, `text-end`  
**Poids:** `fw-bold`, `fw-normal`, `fw-light`  
**Taille:** `fs-1` à `fs-6` (1 = plus grand, 6 = plus petit)  
**Transformation:** `text-uppercase`, `text-lowercase`, `text-capitalize`  
**Titres display:** `display-1` à `display-6` (très grands titres)

<SandpackPlayground
  template="static"
  showTabs={false}
  files={{
    '/index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <p class="text-start">Texte aligné à gauche (text-start)</p>
        <p class="text-center">Texte centré (text-center)</p>
        <p class="text-end">Texte aligné à droite (text-end)</p>
        
        <p class="fw-light">Texte léger (fw-light)</p>
        <p class="fw-normal">Texte normal (fw-normal)</p>
        <p class="fw-bold">Texte gras (fw-bold)</p>
        
        <p class="fs-1">Grande taille (fs-1)</p>
        <p class="fs-4">Taille moyenne (fs-4)</p>
        <p class="fs-6">Petite taille (fs-6)</p>
        
        <h1 class="display-4">Titre display (display-4)</h1>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`
  }}
/>

<br />

### Bordures et coins arrondis

**Bordures:** `border`, `border-top`, `border-bottom`, `border-start`, `border-end`, `border-0`  
**Coins arrondis:** `rounded`, `rounded-0`, `rounded-circle`, `rounded-pill`, `rounded-top`, etc.

<SandpackPlayground
  template="static"
  showTabs={false}
  files={{
    '/index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <div class="row g-3">
            <div class="col-6 col-md-3">
                <div class="bg-light p-4 border">border</div>
            </div>
            <div class="col-6 col-md-3">
                <div class="bg-light p-4 border rounded">border + rounded</div>
            </div>
            <div class="col-6 col-md-3">
                <div class="bg-light p-4 border rounded-circle text-center">rounded-circle</div>
            </div>
            <div class="col-6 col-md-3">
                <div class="bg-light p-4 border rounded-pill text-center">rounded-pill</div>
            </div>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`
  }}
/>

<br />

### Ombres et visibilité

**Ombres:** `shadow`, `shadow-sm`, `shadow-lg`, `shadow-none`  
**Visibilité:** `visible`, `invisible`  
**Opacité:** `opacity-0`, `opacity-25`, `opacity-50`, `opacity-75`, `opacity-100`

<SandpackPlayground
  template="static"
  showTabs={false}
  files={{
    '/index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <div class="row g-3">
            <div class="col-md-4">
                <div class="bg-light p-4 shadow-sm">shadow-sm (petite ombre)</div>
            </div>
            <div class="col-md-4">
                <div class="bg-light p-4 shadow">shadow (ombre normale)</div>
            </div>
            <div class="col-md-4">
                <div class="bg-light p-4 shadow-lg">shadow-lg (grande ombre)</div>
            </div>
        </div>
        
        <div class="mt-5">
            <div class="bg-primary text-white p-3 mb-2 opacity-100">Opacité 100%</div>
            <div class="bg-primary text-white p-3 mb-2 opacity-75">Opacité 75%</div>
            <div class="bg-primary text-white p-3 mb-2 opacity-50">Opacité 50%</div>
            <div class="bg-primary text-white p-3 opacity-25">Opacité 25%</div>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`
  }}
/>

<br />

## Classes utilitaires vs CSS personnalisé

### Quand utiliser les classes utilitaires?

- Espacement rapide (marges, padding)
- Couleurs de fond et de texte
- Alignement du texte
- Bordures et coins arrondis
- Prototypage rapide
- Petits ajustements

### Quand écrire du CSS personnalisé?

- Styles très spécifiques à votre design
- Animations complexes
- Styles qui se répètent exactement partout (créer votre propre classe)
- Besoins qui dépassent les classes Bootstrap

:::tip Approche hybride
La meilleure approche est souvent de **combiner** les deux: utilisez les classes utilitaires Bootstrap pour l'essentiel, puis ajoutez votre CSS personnalisé pour les besoins spécifiques!
:::

## Résumé des principes

| Principe | Explication |
|----------|-------------|
| **Une classe = un style** | Chaque classe fait une seule chose précise |
| **Composition** | Combinez plusieurs classes pour créer des designs complexes |
| **Nommage cohérent** | Les classes suivent des conventions (`{propriété}{côté}-{taille}`) |
| **Responsive** | Ajoutez des breakpoints pour adapter aux différentes tailles d'écran |
| **Réutilisable** | Utilisez les mêmes classes partout dans votre projet |


## Pour aller plus loin

Bootstrap offre bien d'autres catégories de classes utilitaires:
- **Display** (`d-block`, `d-flex`, `d-none`, etc.)
- **Position** (`position-relative`, `position-absolute`, etc.)
- **Sizing** (`w-50`, `h-100`, etc.)
- **Flex** (`justify-content-*`, `align-items-*`, etc.)
- Et bien plus!

L'important est de comprendre le **principe de composition**: en combinant ces petites classes, vous pouvez créer presque n'importe quelle interface sans écrire de CSS personnalisé!

Pour la liste complète de toutes les classes disponibles, consultez la documentation officielle:

<DocCard item={{
  type: 'link',
  href: 'https://getbootstrap.com/docs/5.3/utilities/api/',
  label: 'Documentation officielle classes utilitaires Bootstrap' }} />