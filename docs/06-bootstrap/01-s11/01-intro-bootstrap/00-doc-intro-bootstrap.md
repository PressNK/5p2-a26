---
---

# 📚 Introduction à Bootstrap

Maintenant que vous maîtrisez les bases du CSS, découvrons **Bootstrap**, un cadriciel (framework) CSS permettant d'accélérer le développement de nos pages Web.

## Qu'est-ce que Bootstrap?

Bootstrap est un **framework CSS** (ou bibliothèque) créé à l'origine par Twitter, fournissant une collection de styles CSS et de composants prêts à l'emploi. Au lieu de réinventer la roue à chaque projet, Bootstrap offre:

- Un système de grille adaptative pour organiser le contenu des les pages
- Des composants déjà stylisés (boutons, cartes, formulaires, navigation, etc.)
- Des classes utilitaires pour espacer, colorer et positionner vos éléments
- Une base de style (titres, paragraphes, etc.)

:::info
Bootstrap est un peu comme une boîte à outils CSS: au lieu d'écrire tout le CSS vous-même, vous utilisez des classes déjà créées.
:::

### Sans Bootstrap

Créer un site, même relativement simple, nécessite beaucoup de CSS personnalisé pour des éléments communs (barre de navigation, cartes de contenu, etc.):

<SandpackPlayground
  template="static"
  showTabs={true}
  files={{
    '/index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <nav>
        <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">À propos</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
    
    <div class="container">
        <div class="card">
            <h3>Carte 1</h3>
            <p>Contenu de la carte</p>
        </div>
        <div class="card">
            <h3>Carte 2</h3>
            <p>Contenu de la carte</p>
        </div>
    </div>
</body>
</html>`,
    'styles.css': `/* Beaucoup de CSS à écrire ! */
nav {
    background-color: #333;
    padding: 1rem;
}

nav ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
}

nav li {
    margin-right: 20px;
}

nav a {
    color: white;
    text-decoration: none;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    gap: 20px;
}

.card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    flex: 1;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Et encore plus pour le responsive... */
@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }
}`
  }}
/>

<br />

### Avec Bootstrap

Résultat similaire, en utilisant des classes Bootstrap, sans-même avoir écrit de CSS personnalisé! Remarquez même la belle navigation optimisée pour appareils mobiles en prime! 😊

<SandpackPlayground
  template="static"
  showTabs={false}
  files={{
    '/index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Mon site</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Accueil</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">À propos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    <div class="container mt-4">
        <div class="row">
            <div class="col-md-6 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">Carte 1</h3>
                        <p class="card-text">Contenu de la carte</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">Carte 2</h3>
                        <p class="card-text">Contenu de la carte</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
</body>
</html>`
  }}
/>

<br />

:::info
Avec Bootstrap, on utilise simplement des **classes CSS prédéfinies** au lieu d'écrire tout le CSS nous-mêmes. C'est plus rapide et le résultat est déjà adaptatif!

Vous pouvez toujours écrire votre propre CSS, mais vous devriez avoir à en écrire moins!
:::

## Comment intégrer Bootstrap à votre projet

### Étape 1: Télécharger Bootstrap

1. Allez sur le site officiel  [https://getbootstrap.com](https://getbootstrap.com)
2. Cliquez sur le bouton **Download**
    ![img](./img/download-bootstrap.png)
3. Téléchargez la version **Compiled CSS and JS**
    ![img](./img/compiled.png)
4. Décompressez le fichier ZIP téléchargé

### Étape 2: Organiser vos fichiers

:::info Fichiers importants
Après avoir décompressé Bootstrap, copiez ces fichiers dans votre projet:
- `bootstrap.min.css` → dans un dossier `styles/`
- `bootstrap.bundle.min.js` → dans un dossier `js/`
:::

Voici la structure cible et recommandée:

```
mon-projet/
├── index.html
├── styles/
│   └── bootstrap.min.css
└── js/
    └── bootstrap.bundle.min.js
```

### Étape 3: Lier Bootstrap dans votre HTML

Dans votre fichier `index.html`, ajoutez les liens vers les fichiers Bootstrap:

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon site Bootstrap</title>
    
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="styles/bootstrap.min.css">
</head>
<body>
    <!-- Votre contenu ici -->
    
    <!-- Bootstrap JavaScript (à la fin du body) -->
    <script src="js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

:::info Pourquoi le JavaScript à la fin?
Le fichier JavaScript Bootstrap est placé juste avant la fermeture de `</body>` pour que la page charge plus rapidement. Certains composants Bootstrap (comme les fenêtres modales et les carousels) ont besoin de ce fichier JavaScript pour fonctionner.
:::

## Structure de base d'une page Bootstrap

Voici un squelette HTML minimal pour commencer avec Bootstrap:

<SandpackPlayground
  template="static"
  showTabs={false}
  files={{
    '/index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ma première page Bootstrap</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body>
    <div class="container">
        <h1 class="mt-5">Bienvenue !</h1>
        <p class="lead">Ceci est ma première page avec Bootstrap.</p>
        <button class="btn btn-primary">Un beau bouton</button>
    </div>
    
    <script src="js/bootstrap.bundle.min.js"></script>
</body>
</html>`
  }}
/>

<br />

:::info Notez les classes Bootstrap utilisées :
- `container`: centre le contenu et limite sa largeur maximale
- `mt-5`: ajoute une marge en haut (margin-top)
- `lead`: agrandit légèrement le texte pour le rendre plus visible
- `btn btn-primary`: crée un bouton primaire (stylisé en bleu, la couleur primaire par défaut de Bootstrap).
:::

## Principe de fonctionnement de Bootstrap

Bootstrap fonctionne entièrement avec des **classes CSS**. Au lieu d'écrire votre propre CSS, vous ajoutez des classes à vos éléments HTML.

### Classes de base

```html
<!-- Boutons -->
<button class="btn btn-primary">Bouton primaire</button>
<button class="btn btn-success">Bouton succès</button>
<button class="btn btn-danger">Bouton danger</button>

<!-- Texte coloré -->
<p class="text-primary">Texte en bleu</p>
<p class="text-success">Texte en vert</p>
<p class="text-danger">Texte en rouge</p>

<!-- Arrière-plans -->
<div class="bg-primary text-white p-3">Fond bleu</div>
<div class="bg-warning p-3">Fond jaune</div>
```

<SandpackPlayground
  template="static"
  showTabs={false}
  files={{
    '/index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
    <link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body>
    <div class="container mt-4">
        <h3>Boutons</h3>
        <button class="btn btn-primary">Primaire</button>
        <button class="btn btn-success">Succès</button>
        <button class="btn btn-danger">Danger</button>
        <button class="btn btn-warning">Avertissement</button>
        
        <h3 class="mt-4">Textes colorés</h3>
        <p class="text-primary">Texte en bleu</p>
        <p class="text-success">Texte en vert</p>
        <p class="text-danger">Texte en rouge</p>
        
        <h3 class="mt-4">Arrière-plans</h3>
        <div class="bg-primary text-white p-3 mb-2">Fond bleu avec texte blanc</div>
        <div class="bg-warning p-3 mb-2">Fond jaune</div>
        <div class="bg-success text-white p-3">Fond vert avec texte blanc</div>
    </div>
    
    <script src="js/bootstrap.bundle.min.js"></script>
</body>
</html>`
  }}
/>

<br />

## Classes utilitaires courantes

Bootstrap offre des **classes utilitaires** pour gérer rapidement l'espacement, l'alignement et l'affichage.

### Espacement (margin et padding)

Les classes d'espacement suivent ce format : `{propriété}{côté}-{taille}`

- **Propriété** : `m` (margin) ou `p` (padding)
- **Côté** : `t` (top), `b` (bottom), `s` (start/left), `e` (end/right), `x` (horizontal), `y` (vertical), ou rien (tous les côtés)
- **Taille** : `0` à `5` (0 = aucun, 5 = très grand)

```html
<div class="mt-3">Marge en haut (margin-top: taille 3)</div>
<div class="mb-5">Marge en bas (margin-bottom: taille 5)</div>
<div class="p-4">Padding de tous les côtés (taille 4)</div>
<div class="px-3">Padding horizontal (gauche et droite)</div>
<div class="my-2">Marge verticale (haut et bas)</div>
```

<SandpackPlayground
  template="static"
  showTabs={false}
  files={{
    '/index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
    <link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body>
    <div class="container mt-4">
        <div class="bg-primary text-white p-3 mb-3">
            Padding de 3 sur tous les côtés (p-3)
        </div>
        
        <div class="bg-success text-white px-5 py-2 mb-3">
            Padding horizontal de 5 (px-5) et vertical de 2 (py-2)
        </div>
        
        <div class="bg-warning mt-5">
            Marge en haut de 5 (mt-5)
        </div>
    </div>
    
    <script src="js/bootstrap.bundle.min.js"></script>
</body>
</html>`
  }}
/>

<br />

### Alignement du texte

```html
<p class="text-start">Texte aligné à gauche</p>
<p class="text-center">Texte centré</p>
<p class="text-end">Texte aligné à droite</p>
```

### Transformation du texte

```html
<p class="text-lowercase">TEXTE EN MINUSCULES</p>
<p class="text-uppercase">texte en majuscules</p>
<p class="text-capitalize">première lettre en majuscule</p>
```

## Personnaliser Bootstrap avec votre propre CSS

Vous pouvez toujours ajouter votre propre CSS pour personnaliser ou complémenter Bootstrap!

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <!-- Bootstrap en premier -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    
    <!-- Votre CSS ensuite -->
    <link rel="stylesheet" href="styles/app.css">
</head>
<body>
    <div class="container">
        <h1 class="titre-personnalise">Mon titre personnalisé</h1>
        <button class="btn btn-primary">Bouton Bootstrap</button>
    </div>
    
    <script src="js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

```css
/* app.css */
.titre-personnalise {
    color: purple;
    font-family: 'Comic Sans MS', cursive;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

/* Modifier un bouton Bootstrap */
.btn-primary {
    background-color: darkgreen;
    border: none;
}
```

:::caution Ordre d'importance
Mettez toujours votre fichier CSS **après** celui de Bootstrap pour pouvoir modifier ses styles si nécessaire.
:::

## Structure finale du projet

Voici à quoi devrait ressembler votre projet une fois Bootstrap intégré:

```
mon-projet/
├── index.html
├── contact.html
├── styles/
│   ├── bootstrap.min.css
│   └── app.css (votre CSS personnalisé)
├── js/
│   └── bootstrap.bundle.min.js
└── images/
    └── (vos images)
```

## Consulter la documentation Bootstrap

Bootstrap offre des **centaines de composants et classes**. Il est impossible de tout mémoriser, ni de tout présenter dans ces notes de cours!

La documentation officielle est votre meilleure amie: [https://getbootstrap.com/docs/5.3/getting-started/introduction/](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

:::tip
Gardez la documentation Bootstrap ouverte dans un onglet pendant que vous développez. Vous l'utiliserez constamment pour trouver les bonnes classes!
:::