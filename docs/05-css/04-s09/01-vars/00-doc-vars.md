---
---

# 📚 Variables CSS

Les variables CSS permettent de stocker des valeurs réutilisables dans votre code CSS. Elles facilitent la maintenance et la cohérence de votre visuel.

## Syntaxe de base

### Déclarer une variable

Les variables CSS commencent toujours par deux tirets (`--`) et sont déclarées dans un sélecteur.

```css
:root {
    --couleur-principale: #0b3755;
    --espacement-base: 16px;
    --police-titre: 'Arial', sans-serif;
}
```

:::info
`:root` est le sélecteur le plus courant pour déclarer des variables globales. Il cible l'élément racine du document (généralement `<html>`).
:::

### Utiliser une variable

Pour utiliser une variable, on utilise la fonction `var()`.

```css
.titre {
    color: var(--couleur-principale);
    font-family: var(--police-titre);
    margin-bottom: var(--espacement-base);
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
    <h1 class="titre">Titre principal</h1>
    <p class="texte">Ceci est un paragraphe.</p>
    <button class="bouton">Bouton d'action (couleur principale)</button>
</body>
</html>`,
    '/styles.css': `:root {
    --couleur-principale: #0b3755;
    --espacement-base: 16px;
    --police-titre: 'Arial', sans-serif;
}

.titre {
    font-family: var(--police-titre);
    margin-bottom: var(--espacement-base);
}

.texte {
}

.bouton {
    background-color: var(--couleur-principale);
    color: white;
    border: none;
    padding: var(--espacement-base);
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
}`
  }}
/>

## Portée des variables (Scope)

### Variables globales

Les variables déclarées dans `:root` sont accessibles partout dans le document.

```css
:root {
    --couleur-principale: #0b3755;
    --couleur-secondaire: #bfbfbf;
}

/* Accessible partout */
h1 { color: var(--couleur-principale); }
p { color: var(--couleur-secondaire); }
```

### Variables locales

Les variables déclarées dans un sélecteur spécifique ne sont accessibles que dans ce sélecteur et ses enfants.

```css
.carte {
    --couleur-fond: #ecf0f1;
    --espacement-interne: 20px;
    
    background-color: var(--couleur-fond);
    padding: var(--espacement-interne);
}

.carte p {
    /* Accessible car p est enfant de .carte */
    margin: var(--espacement-interne);
}

.autre-element {
    /* NE FONCTIONNE PAS - variable non accessible ici si l'élément n'est pas un enfant de ".carte" */
    padding: var(--espacement-interne);
}
```

## Valeurs par défaut (Fallback)

La fonction `var()` accepte une deuxième valeur comme secours si la variable n'existe pas.

```css
.element {
    /* Si --couleur-principale n'existe pas, utilise #3498db */
    color: var(--couleur-principale, #0b3755);
    
    /* Peut aussi être une autre variable */
    padding: var(--espacement-grand, var(--espacement-base, 16px));
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
    <div class="exemple-1">
        <p>Ce div utilise la variable définie var(--couleur-definie, #e74c3c).</p>
    </div>
    
    <div class="exemple-2">
        <p>Ce div utilise la valeur par défaut car la variable n'existe pas: var(--couleur-non-definie, #e74c3c)</p>
    </div>
</body>
</html>`,
    '/styles.css': `:root {
    --couleur-definie: #2ecc71;
}

.exemple-1 {
    /* Variable existe, donc elle est utilisée */
    background-color: var(--couleur-definie, #e74c3c);
    color: white;
    padding: 20px;
    margin: 10px 0;
}

.exemple-2 {
    /* Variable n'existe pas, donc la valeur par défaut est utilisée */
    background-color: var(--couleur-non-definie, #e74c3c);
    color: white;
    padding: 20px;
    margin: 10px 0;
}`
  }}
/>

## Cas d'usage pratiques

### Palette de couleurs

Les variables CSS sont parfaites pour définir une palette de couleurs cohérente.

```css
:root {
    /* Couleurs principales */
    --couleur-principale: #0b3755;
    --couleur-secondaire: #ebf0f5;
    --couleur-accent: #e74c3c;
    
    /* Couleurs de texte */
    --texte-principal: #2c3e50;
    --texte-secondaire: #7f8c8d;
    --texte-clair: #ecf0f1;
    
    /* Couleurs de fond */
    --fond-page: #ffffff;
    --fond-section: #f8f9fa;
    --fond-carte: #ffffff;
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
    <div class="conteneur">
        <h1>Palette de couleurs cohérente</h1>
        <p class="texte-secondaire">Sous-titre avec texte secondaire</p>
        
        <div class="carte">
            <h3>Carte exemple</h3>
            <p>Contenu de la carte avec texte principal.</p>
            <button class="bouton-primaire">Action principale</button>
            <button class="bouton-secondaire">Action secondaire</button>
        </div>
        
        <div class="alerte">
            <strong>Attention!</strong> Message important.
        </div>
    </div>
</body>
</html>`,
    '/styles.css': `:root {
    --couleur-principale: #0b3755;
    --couleur-secondaire: #ebf0f5;
    --couleur-accent: #d47929;
    --texte-principal: #2c3e50;
    --texte-secondaire: #7f8c8d;
    --texte-clair: #ffffff;
    --fond-page: #f8f9fa;
    --fond-carte: #ffffff;
}

body {
    background-color: var(--fond-page);
    color: var(--texte-principal);
    font-family: Arial, sans-serif;
    padding: 20px;
}

.texte-secondaire {
    color: var(--texte-secondaire);
}

.carte {
    background-color: var(--fond-carte);
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 20px;
    margin: 20px 0;
}

.bouton-primaire {
    background-color: var(--couleur-principale);
    color: var(--texte-clair);
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 10px;
}

.bouton-secondaire {
    background-color: var(--couleur-secondaire);
    color: var(--texte-principal);
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
}

.alerte {
    background-color: var(--couleur-accent);
    color: var(--texte-clair);
    padding: 15px;
    border-radius: 4px;
    margin-top: 20px;
}`
  }}
/>

### Système d'espacement

Définir un système d'espacement cohérent facilite la mise en page.

```css
:root {
    --espace-xs: 4px;
    --espace-sm: 8px;
    --espace-md: 16px;
    --espace-lg: 24px;
    --espace-xl: 32px;
    --espace-xxl: 48px;
}

.section {
    padding: var(--espace-lg);
    margin-bottom: var(--espace-xl);
}

.bouton {
    padding: var(--espace-sm) var(--espace-md);
    margin: var(--espace-xs);
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
    <div class="section">
        <h2>Section avec espacement cohérent</h2>
        <p class="paragraphe">Paragraphe avec marges standardisées.</p>
        <p class="paragraphe">Un autre paragraphe.</p>
        
        <div class="boutons">
            <button class="bouton">Petit</button>
            <button class="bouton-large">Moyen</button>
            <button class="bouton-xlarge">Grand</button>
        </div>
    </div>
</body>
</html>`,
    '/styles.css': `:root {
    --espace-xs: 4px;
    --espace-sm: 8px;
    --espace-md: 16px;
    --espace-lg: 24px;
    --espace-xl: 32px;
}

body {
    font-family: Arial, sans-serif;
    padding: var(--espace-md);
}

.section {
    background-color: #f8f9fa;
    padding: var(--espace-lg);
    border-radius: 8px;
}

.paragraphe {
    margin-bottom: var(--espace-md);
}

.boutons {
    margin-top: var(--espace-lg);
}

.bouton {
    padding: var(--espace-sm) var(--espace-md);
    margin-right: var(--espace-xs);
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.bouton-large {
    padding: var(--espace-md) var(--espace-lg);
    margin-right: var(--espace-xs);
    background-color: #2ecc71;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.bouton-xlarge {
    padding: var(--espace-lg) var(--espace-xl);
    margin-right: var(--espace-xs);
    background-color: #e74c3c;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}`
  }}
/>

### Tailles de police

Un système de tailles de police cohérent améliore la hiérarchie typographique.

```css
:root {
    --taille-xs: 12px;
    --taille-sm: 14px;
    --taille-base: 16px;
    --taille-lg: 18px;
    --taille-xl: 24px;
    --taille-2xl: 32px;
    --taille-3xl: 48px;
}

h1 { font-size: var(--taille-3xl); }
h2 { font-size: var(--taille-2xl); }
h3 { font-size: var(--taille-xl); }
p { font-size: var(--taille-base); }
small { font-size: var(--taille-sm); }
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
    <h1>Titre principal (48px)</h1>
    <h2>Sous-titre (32px)</h2>
    <h3>Titre de section (24px)</h3>
    <p>Paragraphe normal (16px). Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p class="texte-petit">Texte petit (14px). Information secondaire.</p>
    <p class="texte-tres-petit">Texte très petit (12px). Note de bas de page.</p>
</body>
</html>`,
    '/styles.css': `:root {
    --taille-xs: 12px;
    --taille-sm: 14px;
    --taille-base: 16px;
    --taille-lg: 18px;
    --taille-xl: 24px;
    --taille-2xl: 32px;
    --taille-3xl: 48px;
}

body {
    font-family: Arial, sans-serif;
    padding: 20px;
}

h1 {
    font-size: var(--taille-3xl);
    margin-bottom: 16px;
}

h2 {
    font-size: var(--taille-2xl);
    margin-bottom: 12px;
}

h3 {
    font-size: var(--taille-xl);
    margin-bottom: 8px;
}

p {
    font-size: var(--taille-base);
    line-height: 1.6;
    margin-bottom: 12px;
}

.texte-petit {
    font-size: var(--taille-sm);
    color: #666;
}

.texte-tres-petit {
    font-size: var(--taille-xs);
    color: #999;
}`
  }}
/>

## Bonnes pratiques

### Nommage cohérent

Utilisez une convention de nommage claire et cohérente.

```css
:root {
    /* Bon: noms descriptifs et cohérents */
    --couleur-principale: #0b3755;
    --couleur-secondaire: #ebf0f5;
    --espacement-petit: 8px;
    --espacement-moyen: 16px;
    
    /* À éviter: noms vagues ou incohérents */
    --bleu: #3498db;
    --color2: #2ecc71;
    --space1: 8px;
    --padding-md: 16px;
}
```

:::caution
Ne nommez jamais vos variables en fonction de noms de couleur! (ex.: `--rouge`). Utilisez plutôt le rôle de la couleur (`--texte-principal`, `--couleur-principale`). Comme cela, vous n'êtes pas attachés à une couleur et le nom de votre variable demeurre pertinent même si vous changez le thème de couleurs!
:::

### Organisation par catégories

Groupez vos variables par catégories logiques.

```css
:root {
    /* Couleurs */
    --couleur-primaire: #3498db;
    --couleur-secondaire: #2ecc71;
    --couleur-erreur: #e74c3c;
    
    /* Espacements */
    --espace-xs: 4px;
    --espace-sm: 8px;
    --espace-md: 16px;
    
    /* Typographie */
    --taille-texte-base: 16px;
    --taille-titre: 32px;
    --police-principale: 'Arial', sans-serif;
    
    /* Bordures */
    --rayon-bordure: 4px;
    --rayon-bordure-large: 8px;
}
```

