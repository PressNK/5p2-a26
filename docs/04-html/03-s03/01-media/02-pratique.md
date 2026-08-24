---
---

# 4-B 😈 Boss - La recette de tarte aux pommes de Ginette améliorée

:::info Objectif
Intégrer des images et du contenu riche à une page Web.
:::

Partez de la recette de tarte aux pommes d'un niveau précédent:

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Recette de la tarte aux prommes de Ginette</title>
</head>
<body>
  <h1>Recette de la tarte aux pommes de Ginette</h1>

  <h2>Présentation</h2> 
  <p>La tarte aux pommes est un <strong>classique</strong> de la pâtisserie, réputée pour son goût <em>délicieux</em> et son parfum fruité.</p>

  <h2>Fournisseur</h2>
  <p>Metro Plus Drummondville<br />
    2070, Bd Lemire<br />
    Drummondville, QC<br />
    J0C 1K0
  </p>

  <h2>Citation</h2>
  <p><em>“La tarte aux pommes est la reine des desserts.” – Paul Bocuse</em></p>
  
  <h2>Ingrédients</h2>
  <ul>
    <li>3 pommes</li>
    <li>200 g de farine</li>
    <li>100 g de beurre</li>
    <li>50 g de sucre</li>
    <li>1 pincée de sel</li>
  </ul>

  <!-- Étapes avec liste ordonnée -->
  <h2>Étapes</h2>
  <ol>
    <li>Préchauffer le four à 180 °C.</li>
    <li>Préparer la pâte : mélanger la farine, le sel et le beurre.</li>
    <li>Garnir le moule et disposer les pommes en rondelles.</li>
    <li>Saupoudrer de sucre et enfourner 35 minutes.</li>
  </ol>
</body>
</html>
```

## À faire

1. **Trouvez une image de tarte aux pommes sur Internet et intégrez la dans la page**. L'image doit être intégrée à un endroit logique, par exemple avant ou juste après le titre de niveau 1.
2. **Trouvez une vidéo YouTube de préparation de tarte aux pommes et intégrez-là à la page**. Vous pourriez ajouter une nouvelle section `Capsule vidéo` spécifiquement pour la vidéo.
3. Remplacez le paragraphe de citation par une image de Paul Bocuse et intégrez plutôt la citation dans une balise `figcaption` de l'image.

<details>
 <summary>
    Cheat Code (solution) <img style={{height: '20px', 'vertical-align': 'middle'}} src="https://imgur.com/UCEksuH.png" />
 </summary>

  ```html
  <!DOCTYPE html>
  <html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recette de la tarte aux prommes de Ginette</title>
  </head>
  <body>
    <h1>Recette de la tarte aux pommes de Ginette</h1>

    <img src="images/tarte-pommes.jpg" alt="tarte aux pommes" height="300"/>

    <h2>Présentation</h2> 
    <p>La tarte aux pommes est un <strong>classique</strong> de la pâtisserie, réputée pour son goût <em>délicieux</em> et son parfum fruité.</p>

    <h2>Fournisseur</h2>
    <p>Metro Plus Drummondville<br />
      2070, Bd Lemire<br />
      Drummondville, QC<br />
      J0C 1K0
    </p>

    <h2>Citation</h2>
    <figure>
      <img src="images/paul-bocuse.jpg" alt="Paul Bocuse" height="300" />
      <figcaption><em>“La tarte aux pommes est la reine des desserts.” – Paul Bocuse</em></figcaption>
    </figure>
    
    <h2>Ingrédients</h2>
    <ul>
      <li>3 pommes</li>
      <li>200 g de farine</li>
      <li>100 g de beurre</li>
      <li>50 g de sucre</li>
      <li>1 pincée de sel</li>
    </ul>

    <!-- Étapes avec liste ordonnée -->
    <h2>Étapes</h2>
    <ol>
      <li>Préchauffer le four à 180 °C.</li>
      <li>Préparer la pâte : mélanger la farine, le sel et le beurre.</li>
      <li>Garnir le moule et disposer les pommes en rondelles.</li>
      <li>Saupoudrer de sucre et enfourner 35 minutes.</li>
    </ol>

    <h2>Capsule vidéo</h2>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/LoFXJB-rwuA?si=aehMDvEkH3CsRTan" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </body>
  </html>
  ```
 </details>