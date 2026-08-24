---
---

# 📚 Les composants (avec JavaScript)

Certains composants Bootstrap nécessitent du **JavaScript** pour fonctionner  fenêtres modales, menus déroulants, carrousels, etc.

Il existe **deux types** de composants JavaScript:
1. Ceux qui fonctionnent automatiquement (juste inclure le fichier JS)
2. Ceux qui nécessitent une initialisation manuelle

## Type 1 - Composants automatiques (la majorité)

La plupart des composants interactifs fonctionnent **automatiquement** si vous incluez le fichier JavaScript Bootstrap.

### Prérequis - Inclure bootstrap.bundle.min.js

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ma page</title>
    <link rel="stylesheet" href="styles/bootstrap.min.css">
</head>
<body>
    <!-- Votre contenu -->
    
    <!-- JavaScript Bootstrap À LA FIN du body -->
    <script src="js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

:::caution Important
Placez toujours le script JavaScript **juste avant** la fermeture de `</body>`. Cela accélère le chargement de la page et on s'assure que le contenu soit chargé avant d'appliquer le JavaScript.
:::

### Principe - Les attributs `data-bs-*`

Ces composants utilisent des **attributs HTML spéciaux** qui commencent par `data-bs-`:

```html
<button data-bs-toggle="composant" data-bs-target="#id-cible">
    Déclencher l'action
</button>

<div id="id-cible" class="composant">
    Contenu qui réagit
</div>
```

- `data-bs-toggle` : indique le type de composant
- `data-bs-target` : indique quel élément est ciblé (via son ID)

### Exemple - Modal (fenêtre modale)

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
        <!-- Bouton déclencheur -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#monModal">
            Ouvrir la fenêtre
        </button>

        <!-- La fenêtre modale -->
        <div class="modal fade" id="monModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Titre</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <p>Contenu de la fenêtre modale.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`
  }}
/>

<br />

**Fonctionnement**
1. Bouton avec `data-bs-toggle="modal"` et `data-bs-target="#monModal"`
2. Modal avec `id="monModal"` qui correspond au target
3. Le JavaScript Bootstrap détecte automatiquement ces attributs et fait fonctionner le tout

**Composants qui fonctionnent automatiquement**
- Modal, Dropdown, Collapse, Carousel, Offcanvas, Toast, etc.

## Type 2 - Composants nécessitant une initialisation

Certains composants (ex.: tooltip, popover) nécessitent du **code JavaScript supplémentaire**.

### Exemple - Tooltip (info-bulle au survol)

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
        <button type="button" class="btn btn-secondary" 
                data-bs-toggle="tooltip" 
                data-bs-title="Ceci est une info-bulle !">
            Survolez-moi
        </button>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    
    <!-- Code d'initialisation OBLIGATOIRE pour les tooltips -->
    <script>
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    </script>
</body>
</html>`
  }}
/>

<br />

**Comment ça fonctionne :**
1. Bouton avec `data-bs-toggle="tooltip"` et `data-bs-title` (le texte à afficher)
2. **Code JavaScript obligatoire** pour activer tous les tooltips
3. Ce code doit être copié tel quel après le script Bootstrap, dans une balise `<script>`

:::info Code à copier pour les tooltips
```html
<script>
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
</script>
```
Ce code active **tous** les tooltips de la page. Copiez-le une seule fois, juste après `bootstrap.bundle.min.js`.
:::

## Comment savoir si un composant nécessite une initialisation?

Consultez la documentation Bootstrap pour chaque composant. Si vous voyez une section **"Enable tooltips"** avec du code JavaScript, c'est qu'il faut l'initialiser.

**La plupart des composants n'en ont PAS besoin!** Modal, dropdown, carousel, collapse, etc. fonctionnent automatiquement.

## Ressources

<DocCard item={{
  type: 'link',
  href: 'https://getbootstrap.com/docs/5.3/components/',
  label: 'Documentation officielle composants' }} />
