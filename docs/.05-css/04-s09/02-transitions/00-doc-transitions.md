---
---

# 📚 Transitions CSS

Les transitions CSS permettent d'animer les changements de propriétés CSS de manière fluide plutôt qu'instantanée. Elles rendent l'interface plus agréable (à moins d'avoir trop de transitions!) et plus fluide.

## Syntaxe de base

### Transition simple

La propriété `transition` définit quelle propriété animer et combien de temps dure l'animation.

```css
.bouton {
    background-color: #3498db;
    transition: background-color 0.3s;
}

.bouton:hover {
    background-color: #2980b9;
}
```

:::info
La syntaxe de base est: `transition: propriété durée;`
- **propriété**: La propriété CSS à animer (ex: `background-color`, `transform`)
- **durée**: Le temps de l'animation en secondes (`s`) ou millisecondes (`ms`)
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
    <h2>Passez la souris sur le bouton</h2>
    <button class="bouton">Bouton avec transition</button>
    
    <h3>Comparaison</h3>
    <button class="bouton-sans-transition">Sans transition</button>
</body>
</html>`,
    '/styles.css': `.bouton {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 15px 30px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.bouton:hover {
    background-color: #2980b9;
}

.bouton-sans-transition {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 15px 30px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
}

.bouton-sans-transition:hover {
    background-color: #2980b9;
}`
  }}
/>

## Durée de la transition

La durée détermine la vitesse de l'animation.

```css
.rapide {
    transition: background-color 0.1s;    /* Très rapide */
}

.normale {
    transition: background-color 0.3s;    /* Durée standard */
}

.lente {
    transition: background-color 1s;      /* Lente */
}

.tres-lente {
    transition: background-color 2s;      /* Très lente */
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
    <h2>Différentes durées de transition</h2>
    <div class="boite rapide">0.1s - Très rapide</div>
    <div class="boite normale">0.3s - Normale</div>
    <div class="boite lente">1s - Lente</div>
    <div class="boite tres-lente">2s - Très lente</div>
</body>
</html>`,
    '/styles.css': `body {
    font-family: Arial, sans-serif;
    padding: 20px;
}

.boite {
    background-color: #3498db;
    color: white;
    padding: 20px;
    margin: 10px 0;
    border-radius: 5px;
    cursor: pointer;
}

.boite:hover {
    background-color: #e74c3c;
}

.rapide {
    transition: background-color 0.1s;
}

.normale {
    transition: background-color 0.3s;
}

.lente {
    transition: background-color 1s;
}

.tres-lente {
    transition: background-color 2s;
}`
  }}
/>

## Fonctions de transition (timing functions)

Les fonctions de transition contrôlent **comment** l'animation progresse dans le temps. Elles définissent l'accélération et la décélération.

```css
.element {
    transition: transform 0.5s ease;
}
```

### Fonctions principales

**`ease`** (par défaut)
- Démarre lentement, accélère au milieu, ralentit à la fin
- La plus naturelle et agréable visuellement

**`linear`**
- Vitesse constante du début à la fin
- Peut sembler mécanique

**`ease-in`**
- Démarre lentement, puis accélère
- Bon pour les éléments qui sortent de l'écran

**`ease-out`**
- Démarre rapidement, puis ralentit
- Bon pour les éléments qui entrent dans l'écran

**`ease-in-out`**
- Démarre lentement, vitesse normale au milieu, ralentit à la fin
- Similaire à `ease` mais plus prononcé

```css
.ease {
    transition: transform 0.5s ease;
}

.linear {
    transition: transform 0.5s linear;
}

.ease-in {
    transition: transform 0.5s ease-in;
}

.ease-out {
    transition: transform 0.5s ease-out;
}

.ease-in-out {
    transition: transform 0.5s ease-in-out;
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
    <h2>Fonctions de transition</h2>
    <p>Passez la souris sur les boîtes pour voir la différence</p>
    
    <div class="boite ease">
        <span>ease (défaut)</span>
        <div class="balle"></div>
    </div>
    
    <div class="boite linear">
        <span>linear</span>
        <div class="balle"></div>
    </div>
    
    <div class="boite ease-in">
        <span>ease-in</span>
        <div class="balle"></div>
    </div>
    
    <div class="boite ease-out">
        <span>ease-out</span>
        <div class="balle"></div>
    </div>
    
    <div class="boite ease-in-out">
        <span>ease-in-out</span>
        <div class="balle"></div>
    </div>
</body>
</html>`,
    '/styles.css': `body {
    font-family: Arial, sans-serif;
    padding: 20px;
}

.boite {
    background-color: #f0f0f0;
    padding: 20px;
    margin: 15px 0;
    border-radius: 5px;
    position: relative;
    height: 60px;
    border: 2px solid #ddd;
}

.boite span {
    position: absolute;
    left: 20px;
    top: 20px;
    font-weight: bold;
    color: #2c3e50;
}

.balle {
    width: 30px;
    height: 30px;
    background-color: #3498db;
    border-radius: 50%;
    position: absolute;
    left: 20px;
    top: 50px;
}

.boite:hover .balle {
    left: calc(100% - 50px);
}

.ease .balle {
    transition: left 0.8s ease;
}

.linear .balle {
    transition: left 0.8s linear;
}

.ease-in .balle {
    transition: left 0.8s ease-in;
}

.ease-out .balle {
    transition: left 0.8s ease-out;
}

.ease-in-out .balle {
    transition: left 0.8s ease-in-out;
}`
  }}
/>
<br />
:::tip
**Quelle fonction utiliser?**
- **`ease`** (défaut) - Bon choix pour la plupart des cas
- **`ease-out`** - Parfait pour les éléments qui apparaissent (boutons, modales)
- **`ease-in`** - Bon pour les éléments qui disparaissent
- **`linear`** - Utilisez rarement, sauf pour des animations continues (rotations, défilements)
:::

## Animer plusieurs propriétés

### Méthode 1: Lister les propriétés

Vous pouvez animer plusieurs propriétés en les séparant par des virgules.

```css
.carte {
    background-color: white;
    transform: scale(1);
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    
    //highlight-start
    transition: background-color 0.3s, 
                transform 0.3s, 
                box-shadow 0.3s;
    //highlight-end
}

.carte:hover {
    background-color: #f8f9fa;
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}
```

### Méthode 2: Utiliser `all`

Le mot-clé `all` anime toutes les propriétés qui changent.

```css
.element {
    transition: all 0.3s;
}
```

:::tip
Utilisez `all` pour simplifier, mais soyez conscient que cela anime **toutes** les propriétés qui changent, ce qui peut parfois causer des animations non désirées.
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
    <h2>Passez la souris sur les cartes</h2>
    
    <div class="carte">
        <h3>Carte avec transitions</h3>
        <p>Cette carte s'agrandit et change de couleur au survol.</p>
    </div>
    
    <div class="carte">
        <h3>Une autre carte</h3>
        <p>Même effet sur toutes les cartes.</p>
    </div>
</body>
</html>`,
    '/styles.css': `body {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #f0f0f0;
}

.carte {
    background-color: white;
    padding: 20px;
    margin: 20px 0;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transform: scale(1);
    
    transition: all 0.3s;
}

.carte:hover {
    background-color: #e9edf1;
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}

.carte h3 {
    margin-top: 0;
    color: #2c3e50;
}

.carte p {
    color: #7f8c8d;
    margin-bottom: 0;
}`
  }}
/>

## Propriétés couramment animées

Voici les propriétés les plus souvent utilisées avec les transitions:

### Couleurs

```css
.element {
    transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}
```

### Transformation (`transform`)

```css
/* Agrandissement */
.element {
    transform: scale(1);
    transition: transform 0.3s;
}
.element:hover {
    transform: scale(1.1);
}

/* Rotation */
.element {
    transform: rotate(0deg);
    transition: transform 0.3s;
}
.element:hover {
    transform: rotate(45deg);
}

/* Déplacement */
.element {
    transform: translateY(0);
    transition: transform 0.3s;
}
.element:hover {
    transform: translateY(-10px);
}
```

### Opacité

```css
.element {
    opacity: 0.5;
    transition: opacity 0.3s;
}
.element:hover {
    opacity: 1;
}
```

### Dimensions

```css
.element {
    width: 200px;
    height: 100px;
    transition: width 0.3s, height 0.3s;
}
.element:hover {
    width: 250px;
    height: 120px;
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
    <h2>Propriétés animées courantes</h2>
    
    <div class="grille">
        <div class="boite scale">
            <p>Scale</p>
        </div>
        
        <div class="boite rotate">
            <p>Rotate</p>
        </div>
        
        <div class="boite translate">
            <p>Translate</p>
        </div>
        
        <div class="boite opacity">
            <p>Opacity</p>
        </div>
    </div>
</body>
</html>`,
    '/styles.css': `body {
    font-family: Arial, sans-serif;
    padding: 20px;
}

.grille {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    max-width: 600px;
}

.boite {
    background-color: #3498db;
    color: white;
    padding: 40px;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
}

.scale {
    transform: scale(1);
    transition: transform 0.3s;
}
.scale:hover {
    transform: scale(1.2);
}

.rotate {
    transform: rotate(0deg);
    transition: transform 0.3s;
}
.rotate:hover {
    transform: rotate(15deg);
}

.translate {
    transform: translateY(0);
    transition: transform 0.3s;
}
.translate:hover {
    transform: translateY(-10px);
}

.opacity {
    opacity: 0.5;
    transition: opacity 0.3s;
}
.opacity:hover {
    opacity: 1;
}`
  }}
/>
