---
---

# 13-2 Barre de navigation simple avec Flexbox

Une utilisation classique de Flexbox est de transformer une liste de type ul/li en barre de navigation.

Explorons **les bases d'une barre de navigation** basée sur une liste de liens sous le format `ul`/`li`. Nous bâtirons une barre très simple, simplement pour en comprendre le principe, **vous devrez évidemment bonifier cette dernière dans le cadre de votre projet de site web**.

<SandpackPlayground
template="static"
showTabs={true}
files={{
'/index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exploration Navbar</title>
    <link rel="stylesheet" href="./styles/app.css">
</head>
<body>
    <h1>Exploration Navbar</h1>
    
    <nav class="navbar">
        <ul class="nav-items">
            <li class="nav-item">
                <a class="nav-link" href="#">Accueil</a>
            </li>
            <li>
                <a class="nav-link" href="#">Contact</a>
            </li>
            <li>
                <a class="nav-link" href="#">À propos</a>
            </li>
        </ul>
    </nav>
</body>
</html>`,
'styles/app.css': `body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    padding: 40px;
}

.navbar {
    border: 1px solid #dadada;
}

.nav-items {
    display: flex;
    padding-left: 0;
    list-style-type: none;
}

.nav-link {
    padding: 5px 10px;
}`
}}
/>

## Fichiers de départ

Utilisez les fichiers de départ suivants pour cette activité.

### index.html

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exploration Navbar</title>
    <link rel="stylesheet" href="./styles/app.css">
</head>
<body>
    <h1>Exploration Navbar</h1>
    
    <nav class="navbar">
        <ul class="nav-items">
            <li class="nav-item">
                <a class="nav-link" href="#">Accueil</a>
            </li>
            <li>
                <a class="nav-link" href="#">Contact</a>
            </li>
            <li>
                <a class="nav-link" href="#">À propos</a>
            </li>
        </ul>
    </nav>
</body>
</html>
```

### styles/app.css (styles de base fournis)

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    padding: 40px;
}

.navbar {
}

.nav-items {
}

.nav-link {
}
```

## Partie 1: Modifier le style de base de la liste

Pour transformer une liste en barre de navigation, il faut retirer les puces de la liste.

```css
.nav-items {
//highlight-next-line
    list-style-type: none;
}
```

Cela devrait avoir pour effet de retirer les puces de la liste.

Ensuite, retirons la `padding` à gauche.

```css
.nav-items {
    padding-left: 0;
    list-style-type: none;
}
```

## Partie 2: Utiliser Flexbox pour positionner les liens

Plutôt que d'afficher les liens verticalement, on peut les afficher de façon horizontale à l'aide de Flexbox!

Ajoutez `display: flex` au ul (`nav-items`):

```css
.nav-items {
  //highlight-next-line
    display: flex;
    padding-left: 0;
    list-style-type: none;
}
```

Les liens devraient maintenant être affichés côte-à-côte!

## Partie 3: Délimiter la barre

Afin de délimiter la barre de navigation (`navbar`), ajoutons lui une bordure.

```css
.navbar {
    border: 1px solid #dadada;
}
```

Vous devriez maintenant avoir une bordure autour de la barre.

## Partie 4: Espacer les liens

Les liens sont collés entre-eux. Vous pouvez les espacer un peu en ajoutant de l'espace intérieur à l'aide de `padding`.

```css
.nav-link {
    padding: 5px 10px;
}
```

🎉 Vous avez maintenant une barre de navigation de base! Elle est très simple et devrait être bonifiée pour être complète, mais cela devrait vous donner une idée du fonctionnement général.