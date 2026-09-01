---
---

# 📚 Les Composants (sans JavaScript)

<DocCard item={{
  type: 'link',
  href: 'https://getbootstrap.com/docs/5.3/components/',
  label: 'Documentation officielle composants' }} />

  <br />

Bootstrap offre une grande variété de **composants** prêts à l'emploi. Ce guide présente le principe de fonctionnement des composants qui n'ont pas besoin de JavaScript.

## Qu'est-ce qu'un composant Bootstrap ?

Un composant est un élément d'interface préconçu et réutilisable qui combine HTML et CSS pour créer un élément visuel cohérent.

Pensez-y comme des **blocs LEGO**: des pièces standardisées que vous assemblez pour construire votre interface.

:::info
Au lieu d'écrire tout le HTML et CSS vous-même, Bootstrap vous fournit des structures prêtes à utiliser. Vous n'avez qu'à les personnaliser avec votre contenu.
:::

## Principe

Tous les composants Bootstrap suivent le même principe: une **classe principale** sur l'élément parent, et des **classes spécifiques** pour les éléments enfants.

```html
<div class="composant">                    <!-- Classe principale -->
  <div class="composant-partie1">          <!-- Sous-partie 1 -->
    Contenu
  </div>
  <div class="composant-partie2">          <!-- Sous-partie 2 -->
    Contenu
  </div>
</div>
```

### Exemple concret: `Card`

La **card** est un excellent exemple pour comprendre ce principe:

<SandpackPlayground
  template="static"
  showTabs={false}
  files={{
    '/index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-4">
        <div class="card" style="width: 20rem;">
            <!-- card = classe principale -->
            
            <div class="card-header">
                <!-- card-header = sous-partie optionnelle -->
                En-tête de la carte
            </div>
            
            <div class="card-body">
                <!-- card-body = sous-partie principale -->
                <h5 class="card-title">Titre de la carte</h5>
                <p class="card-text">Ceci est le contenu principal de ma carte.</p>
                <a href="#" class="btn btn-primary">Action</a>
            </div>
            
            <div class="card-footer">
                <!-- card-footer = sous-partie optionnelle -->
                Pied de la carte
            </div>
        </div>
    </div>
</body>
</html>`
  }}
/>

<br />

**Observez la structure :**
- `card`: classe principale (le conteneur)
- `card-header`, `card-body`, `card-footer`: sous-parties
- `card-title`, `card-text`: éléments à l'intérieur du body

:::caution Règle importante
Les classes enfants comme `card-title` ou `card-text` ne fonctionnent **que si elles sont à l'intérieur** d'un élément avec la classe parent `card`. Respectez toujours la hiérarchie!
:::

## Variations avec modificateurs

La plupart des composants offrent des **variations** via des classes modificatrices. Le pattern est toujours le même:

```
composant composant-modificateur
```

### Exemple: Les boutons

<SandpackPlayground
  template="static"
  showTabs={false}
  files={{
    '/index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-4">
        <h4>Classe de base : btn</h4>
        <button class="btn">Bouton sans style</button>
        
        <h4 class="mt-4">Modificateurs de couleur : btn-{couleur}</h4>
        <button class="btn btn-primary">btn-primary</button>
        <button class="btn btn-success">btn-success</button>
        <button class="btn btn-danger">btn-danger</button>
        <button class="btn btn-warning">btn-warning</button>
        
        <h4 class="mt-4">Modificateurs de style : btn-outline-{couleur}</h4>
        <button class="btn btn-outline-primary">btn-outline-primary</button>
        <button class="btn btn-outline-danger">btn-outline-danger</button>
        
        <h4 class="mt-4">Modificateurs de taille : btn-{taille}</h4>
        <button class="btn btn-primary btn-sm">btn-sm (petit)</button>
        <button class="btn btn-primary">normal</button>
        <button class="btn btn-primary btn-lg">btn-lg (grand)</button>
    </div>
</body>
</html>`
  }}
/>

<br />

**Pattern récurrent :**
- `btn` = classe de base (obligatoire)
- `btn-primary`, `btn-success`, etc. = couleur
- `btn-outline-*` = style contour
- `btn-sm`, `btn-lg` = taille

:::info Couleurs sémantiques Bootstrap
Les mêmes couleurs se retrouvent partout dans Bootstrap :
- `primary` : Action principale (bleu)
- `secondary` : Secondaire (gris)
- `success` : Réussite (vert)
- `danger` : Erreur/suppression (rouge)
- `warning` : Avertissement (jaune)
- `info` : Information (cyan)
- `light` / `dark` : Contraste
:::

## Combiner les composants

La vraie puissance vient de la **combinaison** de composants entre eux!

<SandpackPlayground
  template="static"
  showTabs={false}
  files={{
    '/index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-4">
        <!-- Card + Badge + Button + Alert combinés -->
        <div class="card" style="width: 22rem;">
            <div class="card-body">
                <h5 class="card-title">
                    Produit vedette
                    <span class="badge bg-success">Nouveau</span>
                </h5>
                <p class="card-text">Un produit exceptionnel à ne pas manquer.</p>
                
                <!-- Alert à l'intérieur de la card -->
                <div class="alert alert-warning" role="alert">
                    Plus que 3 en stock !
                </div>
                
                <!-- Boutons -->
                <button class="btn btn-primary">Acheter</button>
                <button class="btn btn-outline-secondary">Détails</button>
            </div>
        </div>
    </div>
</body>
</html>`
  }}
/>

<br />

Ici on combine :
- Une **card** (conteneur principal)
- Un **badge** (indicateur "Nouveau")
- Une **alert** (message d'avertissement)
- Des **buttons** (actions)

## Composants sans JavaScript vs avec JavaScript

### Sans JavaScript

Ces composants fonctionnent immédiatement, juste avec le CSS:
- Buttons, Cards, Alerts, Badges
- Breadcrumb, List groups, Pagination
- Progress bars, Spinners
- Et d'autres...

**Caractéristiques :**
- Affichage statique
- Pas d'interactivité complexe
- Prêts à l'emploi

### Avec JavaScript (à venir)

Ces composants nécessitent le fichier `bootstrap.bundle.min.js` et doivent parfois être initialisés:
- Modals (fenêtres modales)
- Dropdowns (menus déroulants)
- Carousel (carrousel d'images)
- Collapse/Accordion
- Tooltips, Popovers
- Et d'autres...

**Caractéristiques :**
- Interactifs (s'ouvrent, se ferment, défilent)
- Réagissent aux clics/survols
- Nécessitent une initialisation

## Comment utiliser un composant

### Étape 1: Identifier le besoin

"J'ai besoin d'afficher un message d'erreur" → **Alert**

### Étape 2: Consulter la documentation

Allez sur [https://getbootstrap.com/docs/5.3/components/](https://getbootstrap.com/docs/5.3/components/) et trouvez le composant.

### Étape 3: Copier la structure de base

```html
<div class="alert alert-danger" role="alert">
  Message d'erreur ici
</div>
```

### Étape 4: Personnaliser

Remplacez le contenu placeholder par le vôtre et ajoutez des modificateurs si nécessaire.

### Étape 5: Combiner avec d'autres composants

Ajoutez d'autres éléments Bootstrap à l'intérieur si nécessaire.

<SandpackPlayground
  template="static"
  showTabs={false}
  files={{
    '/index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-4">
        <!-- Étape 3-4-5 : Structure copiée, personnalisée et enrichie -->
        <div class="alert alert-danger" role="alert">
            <h4 class="alert-heading">Erreur de connexion</h4>
            <p>Votre mot de passe est incorrect. Veuillez réessayer.</p>
            <hr>
            <p class="mb-0">
                <a href="#" class="alert-link">Mot de passe oublié ?</a>
            </p>
        </div>
    </div>
</body>
</html>`
  }}
/>

<br />

## Composants + classes utilitaires

Les composants s'enrichissent avec les classes utilitaires:

```html
<div class="card mt-4 shadow">           <!-- Marge + ombre -->
  <div class="card-body text-center">    <!-- Texte centré -->
    <h5 class="card-title text-primary"> <!-- Titre coloré -->
      Mon titre
    </h5>
  </div>
</div>
```

## Trouver les composants dans la documentation

<DocCard item={{
  type: 'link',
  href: 'https://getbootstrap.com/docs/5.3/components/',
  label: 'Documentation officielle composants' }} />

Dans le menu de gauche, vous trouverez **tous les composants** disponibles. Cliquez sur celui qui vous intéresse pour voir:
- Des exemples visuels
- Le code HTML à copier
- Les variations disponibles
- Les options de personnalisation

:::info Conseil
Gardez cette page ouverte pendant vos développements. Vous y retournerez constamment pour copier des structures et découvrir des options!
:::
