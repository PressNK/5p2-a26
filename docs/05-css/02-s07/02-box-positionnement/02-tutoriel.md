---
---

# 12-1 Construction d'une carte de profil

Lors de cette activité, nous allons construire une carte de profil telle que celle-ci:

<SandpackPlayground
    template="static"
    editorHeight={700}
    files={{
    '/index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carte de profil</title>
    <link rel="stylesheet" href="./styles/app.css">
</head>
<body>
    <div class="profile-card">
        <img class="profile-photo" src="https://i.postimg.cc/Hsv4R5Cq/Frame-1.png" alt="Photo de profil">
        <h2>Grumpy Cat</h2>
        <p class="titre">Chat Célèbre</p>
        <p class="description">Expert en regards désapprobateurs et en jugements silencieux. Spécialisé dans l'art de paraître mécontent en toutes circonstances.</p>
        <div class="badge">LÉGENDE</div>
        <button class="contact-btn">Adopter</button>
    </div>
</body>
</html>`,
'styles/app.css': `body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 20px;
}

.profile-card {
    background-color: white;
    text-align: center;
    max-width: 400px;
    padding: 30px;
    border: 2px solid #dddddd;
    border-radius: 16px;
    margin: 50px auto;
    position: relative;
}

.profile-card img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

.titre {
    color: #333333;
    font-weight: bold;
    margin: 0;
}

.description {
    color: #333333;
    line-height: 1.25;
    margin: 0;
}

.badge {
    background-color: #daa520;
    color: white;
    font-size: 12px;
    font-weight: bold;
    border-radius: 15px;
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 3px 6px;
}

.contact-btn {
    background-color: #2541B2;
    color: white;
    border: none;
    font-size: 14px;
    cursor: pointer;
    border-radius: 6px;
    padding: 8px 12px;
    margin-top: 20px
}
`
    }}
/>



## Fichiers de départ

Utilisez les fichiers de départ suivant pour cette activité.

### index.html
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carte de profil</title>
    <link rel="stylesheet" href="./styles/app.css">
</head>
<body>
    <div class="profile-card">
        <img class="profile-photo" src="https://i.postimg.cc/Hsv4R5Cq/Frame-1.png" alt="Photo de profil">
        <h2>Grumpy Cat</h2>
        <p class="titre">Chat Célèbre</p>
        <p class="description">Expert en regards désapprobateurs et en jugements silencieux. Spécialisé dans l'art de paraître mécontent en toutes circonstances.</p>
        <div class="badge">LÉGENDE</div>
        <button class="contact-btn">Adopter</button>
    </div>
</body>
</html>
```

### styles/app.css (styles de base fournis)
```css title=""styles/app.css
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 20px;
}

.profile-card {
    background-color: white;
    text-align: center;
}

.profile-card img {
  
}

.titre {
    color: #333333;
    font-weight: bold;
    margin: 0;
}

.description {
    color: #333333;
    line-height: 1.25;
    margin: 0;
}

.badge {
    background-color: #daa520;
    color: white;
    font-size: 12px;
    font-weight: bold;
    border-radius: 15px;
}

.contact-btn {
    background-color: #2541B2;
    color: white;
    border: none;
    font-size: 14px;
    cursor: pointer;
    border-radius: 6px;
}
```

## Dimensions de l'image et rayon de bordures

Commençons par jouer avec les dimensions d'une image et sa bordure.

### Dimension de l'image

Ajoutez le code suivant à l'intérieur de `.profile-card img`. Ce sélecteur vise spécifiquement l'image à l'intérieur de l'élément ayant la classe `.profile-card`.

```css
.profile-card img {
  //highlight-start
    width: 100px;
    height: 100px;
  //highlight-end
}
```

Remarquez comment `width` et `height` impactent la taille de l'image de profil.

### Rayon de l'image

Il est possible de jouer sur le rayon d'une bordure, sans avoir de style de bordure.

1. Essayez de jouer sur le rayon de la bordure de l'image de profil.
    ```css
    .profile-card img {
        width: 100px;
        height: 100px;
        //highlight-next-line
        border-radius: 12px;
    }
    ```
2. Essayez avec des pourcentages
    ```css
    .profile-card img {
        width: 100px;
        height: 100px;
        //highlight-next-line
        border-radius: 25%;
    }
    ```

    :::info
    Les pourcentages sur un rayon sont en fonction de la largeur et la longueur du conteneur. Ici, le conteneur est de 100px, donc 25% est l'équivalent de 25px.
    :::
3. Truc: pour faire un cercle, appliquez une bordure de 50% sur un conteneur carré :)
    ```css
    .profile-card img {
        width: 100px;
        height: 100px;
        //highlight-next-line
        border-radius: 50%;
    }
    ```

## Dimensions du conteneur de la carte

Ajoutez le code en surbrillance à `.profile-card`:

```css
.profile-card {
    background-color: white;
    text-align: center;
    //highlight-next-line
    width: 400px;
}
```

### Questions de découverte
- Redimensionnez votre navigateur. Que se passe-t-il avec la carte ?
- Changez `width: 400px` pour `max-width: 400px`. Quelle différence voyez-vous ?
- Essayez `width: 100%`. Quel est l'effet ?
- Revenez à `max-width: 400px`.

:::info
Vous découvrez que `max-width` rend la carte adaptative au format de l'écran. Sur un petit écran, comme mobile, la carte prendra toute la largeur, alors que sur un écran plus grand que 600px, la largeur maximale sera de 600px.
:::

## Espacement interne avec `padding`

Découvrons l'utilisation de la propriété `padding` afin d'ajouter de l'espace intérieur à la carte.

### Phase 1

Ajoutez le code en surbrillance à la classe `.profile-card`:

```css
.profile-card {
    background-color: white;
    text-align: center;
    max-width: 400px;
    //highlight-next-line
    padding: 20px;
}
```

- Que remarquez-vous ? Où l'espace a-t-il été ajouté?
- Changez `padding: 20px` pour `padding: 50px`. Quel est l'effet?
- Remettez `padding: 20px`.

### Phase 2

Modifiez la règle de `padding` pour celle-ci:

```css
.profile-card {
    background-color: white;
    text-align: center;
    max-width: 400px;
    //highlight-next-line
    padding: 30px 20px;
}
```

- Que semble faire `padding: 30px 20px` exactement?
- Essayez `padding: 10px 50px`. Où l'espace change-t-il?
- Testez `padding: 20px 30px 40px 10px`. Pouvez-vous deviner l'ordre et l'impact?

:::info
Il est possible de préciser l'espacement intérieur à l'aide de la propriété `padding`. La propriété prend des valeurs sous le format suivant:

```css
padding: 40px;                   /* Tous les côtés */
padding: 20px 40px;              /* Vertical (haut/bas) | Horizontal (gauche/droite) */
padding: 10px 20px 30px 40px;    /* Top | Right | Bottom | Left */
```
:::

### Code final de cette étape

Revenez à un `padding` de 30px.

```css
.profile-card {
    background-color: white;
    text-align: center;
    max-width: 400px;
    //highlight-next-line
    padding: 30px;
}
```

## Bordures pour délimiter

Découvrons maintenant les bordures pour délimiter visuellement du contenu.

### Phase 1

Ajoutez une bordure de la façon suivante sur le conteneur de la carte de profil.

```css
.profile-card {
    background-color: white;
    text-align: center;
    max-width: 400px;
    padding: 30px;
    //highlight-next-line
    border: 2px solid #dddddd;
}
```

- La carte a-t-elle changé de taille? Pourquoi selon vous?
- Changez `2px` pour `10px`, puis `50px`. Que se passe-t-il au niveau de la taille du conteneur?
- Essayez `border: 5px dashed red`. Quel est l'effet?
- Revenez à une bordure un peu plus standard avec `border: 2px solid #dddddd;`

:::info
Ajouter une bordure ajoute à la taille de l'élément! Un élément de 200px de large avec une bordure de 1px sera 202px de large.
:::

### Phase 2

Essayons maintenant la propriété `border-radius`.

```css
.profile-card {
    background-color: white;
    text-align: center;
    max-width: 400px;
    padding: 30px;
    border: 2px solid #dddddd;
    //highlight-next-line
    border-radius: 16px;
}
```

- Que fait `border-radius`?
- Essayez `border-radius: 50px`.
- Revenez à `border-radius: 16px;`

## Espacement externe avec `margin`

### Phase 1

Ajoutez le code en surbrillance suivant:

```css
.profile-card {
    background-color: white;
    text-align: center;
    max-width: 400px;
    padding: 30px;
    border: 2px solid #dddddd;
    border-radius: 16px;
    //highlight-next-line
    margin: 50px;
}
```

- Où l'espace de 50px a-t-il été ajouté? Avant ou après la bordure?
- Quelle est la différence entre cet espace et celui créé par padding?

:::info
`margin` ajoute une marge `extérieure` au conteneur. Elle n'impact pas la taille de l'élément puisqu'elle est ajoutée à l'extérieur.
:::

### Phase 2

Ajoutez `margin: 0 auto` à la carte de profil.

```css
.profile-card {
    background-color: white;
    text-align: center;
    max-width: 300px;
    width: 100%;
    padding: 30px;
    border: 2px solid #dddddd;
    border-radius: 15px;
    //highlight-next-line
    margin: 0 auto;
}
```

- Que semble faire `margin: 0 auto`?
- Pourquoi la carte se centre-t-elle horizontalement?

:::info
`auto` force le navigateur à calculer une marge. Le navigateur utilise alors l'espace restant, le divise en deux et applique cette marge de façon égale à gauche et à droite.

Vous pourriez changer la marge supérieure et inférieure sans problème et avoir `margin: 50px auto`, par exemple.
:::

## Positionnement du badge avec `position: absolute`

Ajoutez `position: relative` à la carte de profil.

```css
.profile-card {
    background-color: white;
    text-align: center;
    max-width: 400px;
    padding: 30px;
    border: 2px solid #dddddd;
    border-radius: 16px;
    margin: 50px auto;
    //highlight-next-line
    position: relative;
}
```

- Visuellement, quelque chose a-t-il changé avec `position: relative`?
- À quoi sert cette propriété si rien ne change?

:::info
`position: relative` permet de positionner l'élément de façon relative à sa position normale. C'est-à-dire qu'avec des propriétés comme `top`, on pourrait décaler l'objet par rapport à sa position normale.

De plus, `position: relative` permet de créer un contexte de positionnement pour les enfants avec `position: absolute`. Les éléments enfants positionnés de façon absolue seront positionnés par rapport au premier parent relatif.
:::

### Positionner la badge

Ajouter le code en surbrillance à `.badge`:
```css
.badge {
    background-color: #daa520;
    color: white;
    font-size: 12px;
    font-weight: bold;
    border-radius: 15px;
    //highlight-start
    position: absolute;
    top: 10px;
    right: 10px;
    //highlight-end
}
```

- Où le badge est-il apparu? Pourquoi à cet endroit?
- Que se passe-t-il si vous enlevez `position: relative` du `.profile-card` ?
- Changez `top: 10px` pour `top: 50px`. Quel mouvement observez-vous?
- Changez `right: 10px` pour `left: 10px`. Quel mouvement observez-vous?

Ajoutez un peu de padding maintenant à l'élément pour qu'il s'affiche de façon visuellement plus agréable.

```css
.badge {
    background-color: #daa520;
    color: white;
    font-size: 12px;
    font-weight: bold;
    border-radius: 15px;
    position: absolute;
    top: 10px;
    right: 10px;
    //highlight-next-line
    padding: 3px 6px;
}
```

## Style de bouton

Si vous remarquez, le bouton est un peu coincé ;)

Ajoutez une marge et un du padding:

```css
.contact-btn {
    background-color: #2541B2;
    color: white;
    border: none;
    font-size: 14px;
    cursor: pointer;
    border-radius: 6px;
    //highlight-start
    padding: 8px 12px;
    margin-top: 20px
    //highlight-end
}
```

:::info
Il est commun pour les éléments boutons de mettre plus de padding à l'horizontale qu'à la verticale. Cela donne l'effet rectangulaire d'un bouton.

Une règle de pouce pratique: padding vertical * 150% = padding horizontal.
8px * 1.5 = 12px, par exemple.
:::

## Résultat final

Au final, vous devriez avoir quelque chose comme ceci!

<SandpackPlayground
    template="static"
    editorHeight={700}
    files={{
    '/index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carte de profil</title>
    <link rel="stylesheet" href="./styles/app.css">
</head>
<body>
    <div class="profile-card">
        <img class="profile-photo" src="https://i.postimg.cc/Hsv4R5Cq/Frame-1.png" alt="Photo de profil">
        <h2>Grumpy Cat</h2>
        <p class="titre">Chat Célèbre</p>
        <p class="description">Expert en regards désapprobateurs et en jugements silencieux. Spécialisé dans l'art de paraître mécontent en toutes circonstances.</p>
        <div class="badge">LÉGENDE</div>
        <button class="contact-btn">Adopter</button>
    </div>
</body>
</html>`,
'styles/app.css': `body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 20px;
}

.profile-card {
    background-color: white;
    text-align: center;
    max-width: 400px;
    padding: 30px;
    border: 2px solid #dddddd;
    border-radius: 16px;
    margin: 50px auto;
    position: relative;
}

.profile-card img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

.titre {
    color: #333333;
    font-weight: bold;
    margin: 0;
}

.description {
    color: #333333;
    line-height: 1.25;
    margin: 0;
}

.badge {
    background-color: #daa520;
    color: white;
    font-size: 12px;
    font-weight: bold;
    border-radius: 15px;
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 3px 6px;
}

.contact-btn {
    background-color: #2541B2;
    color: white;
    border: none;
    font-size: 14px;
    cursor: pointer;
    border-radius: 6px;
    padding: 8px 12px;
    margin-top: 20px
}
`
    }}
/>

