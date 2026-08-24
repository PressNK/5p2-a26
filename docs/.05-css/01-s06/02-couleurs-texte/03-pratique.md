---
---

# 10-B-1 😈 Boss - Boutique de jeux vidéo Rétro Games

Vous travaillez pour la boutique de jeux vidéo Retro Games et on vous demande de faire une page Web simple pour leur site.

## Structure de base

Comme point de départ, utilisez le HTML suivant:

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Boutique Rétro Games</title>
    <!-- Ajoutez la ligne pour lier le CSS ici -->
</head>
<body>
    <h1>Boutique Rétro Games</h1>
    <p>Les meilleurs jeux classiques!</p>
    
    <h2>Nos jeux disponibles</h2>
    
    <div class="jeu">
        <h3>Super Mario Bros</h3>
        <p class="console nintendo">Nintendo</p>
        <p>Le classique des classiques!</p>
        <p class="prix">30$</p>
    </div>
    
    <div class="jeu" id="promo">
        <h3>Sonic</h3>
        <p class="console sega">Sega</p>
        <p>Super rapide!</p>
        <p class="prix">25$</p>
    </div>
    
    <div class="jeu">
        <h3>Pac-Man</h3>
        <p class="console arcade">Arcade</p>
        <p>Mangez tous les points!</p>
        <p class="prix">20$</p>
    </div>

    <div class="jeu limite-qte">
        <h3>Street Fighter</h3>
        <p class="console super-nes">Super Nintendo</p>
        <p>Un classique parmis les jeux de combat!</p>
        <p class="prix">20$</p>
    </div>
    
    <h2>Contact</h2>
    <p class="courriel">Email: info@retrogames.com</p>
    <p class="telephone">Téléphone: 555-RETRO</p>
</body>
</html>
```

## Instructions

1. Ajoutez une feuille de style `app.css` sous un dossier `styles`
2. Faites le lien entre la feuille de style et le HTML
3. Ajoutez une couleur d'arrière-plan (votre choix!)
4. Modifiez la police pour `'Courier New', monospace`
5. Modifiez la couleur du titre h1
6. Modifiez la couleur des titres h2
7. Modifiez la couleur des titres h3 (les jeux)
8. Pour chaque **type de console**, mettez le texte d'une couleur différente:
   1. Nintendo: rouge
   2. Sega: bleu
   3. Arcade: orange
   4. Super Nintendo: bleu (différent de SEGA)
9. Les jeux (classe `jeu`) doivent avoir un style distinctif (bordure, couleur d'arrière-plan, etc.)
10. Le jeu en promo (`id="promo"`) doit avoir un style différent qui le met en évidence.
11. Le jeu avec les classes `jeu limite-qte` doit avoir un style "rouge" (choisissez comment l'appliquer: bordure, arrière-plan, etc.) puisqu'il est en quantité limité.
12. Mettez les prix en gras.

<details>
    <summary>
      Cheat Code (solution) <img style={{height: '20px', 'vertical-align': 'middle'}} src="https://imgur.com/UCEksuH.png" />
    </summary>

    <SandpackPlayground
        template="static"
        editorHeight={900}
        files={{
        '/index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Boutique Rétro Games</title>
    <link rel="stylesheet" href="./styles/app.css">
</head>
<body>
    <h1>Boutique Rétro Games</h1>
    <p>Les meilleurs jeux classiques!</p>
    
    <h2>Nos jeux disponibles</h2>
    
    <div class="jeu">
        <h3>Super Mario Bros</h3>
        <p class="console nintendo">Nintendo</p>
        <p>Le classique des classiques!</p>
        <p class="prix">30$</p>
    </div>
    
    <div class="jeu" id="promo">
        <h3>Sonic</h3>
        <p class="console sega">Sega</p>
        <p>Super rapide!</p>
        <p class="prix">25$</p>
    </div>
    
    <div class="jeu">
        <h3>Pac-Man</h3>
        <p class="console arcade">Arcade</p>
        <p>Mangez tous les points!</p>
        <p class="prix">20$</p>
    </div>

    <div class="jeu limite-qte">
        <h3>Street Fighter</h3>
        <p class="console super-nes">Super Nintendo</p>
        <p>Un classique parmis les jeux de combat!</p>
        <p class="prix">20$</p>
    </div>
    
    <h2>Contact</h2>
    <p class="courriel">Email: info@retrogames.com</p>
    <p class="telephone">Téléphone: 555-RETRO</p>
</body>
</html>`,
'styles/app.css': `body {
    background-color: aliceblue;
    font-family: 'Courier New', monospace;
}

h1 {
    color: navy;
}

h2 {
    color: cornflowerblue;
}

h3 {
    color: midnightblue;
}

.jeu {
    border: 1px solid lightblue;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
}

.jeu.limite-qte {
    border: 1px solid red;
}

.jeu.prix {
    font-weight: bold;
}

#promo {
    border: 3px solid navy;
}

.console.nintendo {
    color: red;
}

.console.sega {
    color: blue;
}

.console.arcade {
    color: orange;
}

.console.super-nes {
    color: darkblue;
}
`
        }}
    />  
</details>