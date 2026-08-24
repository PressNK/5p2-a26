---
---

# 🏆 22-Défi Classes utilitaires: Horloge mondiale (suite)

Dans ce défi, améliorez et embelissez la base de l'horloge créée précédemment en utilisant **uniquement des classes utilitaires Bootstrap**. Aucun CSS personnalisé n'est permis pour ce défi!

## Code de départ

Partez du HTML final du défi précédent:

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./styles/bootstrap.min.css">
  <title>Horlonge mondiale</title>
</head>
<body>
  <div class="container">
    <h2 class="mb-4">Horloge mondiale</h2>
    <div class="row g-2">
      <div class="col-6 col-md-4 col-lg-3 col-xl-2">
        <div class="bg-light">Montreal<br>12:00 PM</div>
      </div>
      <div class="col-6 col-md-4 col-lg-3 col-xl-2">
        <div class="bg-light">London<br>5:00 PM</div>
      </div>
      <div class="col-6 col-md-4 col-lg-3 col-xl-2">
        <div class="bg-light">Tokyo<br>2:00 AM</div>
        </div>
      <div class="col-6 col-md-4 col-lg-3 col-xl-2">
        <div class="bg-light">Sydney<br>4:00 AM</div>
      </div>
      <div class="col-6 col-md-4 col-lg-3 col-xl-2">
        <div class="bg-light">New York<br>12:00 PM</div>
      </div>
      <div class="col-6 col-md-4 col-lg-3 col-xl-2">
        <div class="bg-light">Paris<br>6:00 PM</div>
      </div>
      <div class="col-6 col-md-4 col-lg-3 col-xl-2">
        <div class="bg-light">Dubai<br>8:00 PM</div>
      </div>
      <div class="col-6 col-md-4 col-lg-3 col-xl-2">
        <div class="bg-light">Moscow<br>8:00 PM</div>
      </div>
      <div class="col-6 col-md-4 col-lg-3 col-xl-2">
        <div class="bg-light">Singapore<br>1:00 AM</div>
      </div>
      <div class="col-6 col-md-4 col-lg-3 col-xl-2">
        <div class="bg-light">Hong Kong<br>1:00 AM</div>
      </div>
      <div class="col-6 col-md-4 col-lg-3 col-xl-2">
        <div class="bg-light">São Paulo<br>2:00 PM</div>
      </div>
      <div class="col-6 col-md-4 col-lg-3 col-xl-2">
        <div class="bg-light">Johannesburg<br>7:00 PM</div>
      </div>
    </div>
  </div>

  <script src="./js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

## Contraintes et exigences

Vous devez améliorer cette page en utilisant **uniquement des classes utilitaires Bootstrap**. Voici ce qui est obligatoire:

### Titre principal (h2)
- Centrer le titre (https://getbootstrap.com/docs/5.3/utilities/text/)
- Ajouter une marge en bas (https://getbootstrap.com/docs/5.3/utilities/spacing/)
- Utiliser une classe `display-*` pour l'agrandir (https://getbootstrap.com/docs/5.3/content/typography/#display-headings)

### Cartes d'horloge (les `<div>` à l'intérieur des colonnes ayant `bg-light` déjà comme classe)
- Ajouter du padding de tous les côtés (https://getbootstrap.com/docs/5.3/utilities/spacing/)
- Ajouter une bordure (https://getbootstrap.com/docs/5.3/utilities/borders/)
- Arrondir les coins (https://getbootstrap.com/docs/5.3/utilities/borders/#radius)
- Centrer le texte à l'intérieur de la carte (https://getbootstrap.com/docs/5.3/utilities/text/)
- Ajouter une ombre (https://getbootstrap.com/docs/5.3/utilities/shadows/)
- Mettre le nom de la ville en gras, sans utiliser `<strong>` https://getbootstrap.com/docs/5.3/utilities/text/#font-weight-and-italics
- Changez la couleur d'arrière-plan pour une couleur plus foncée lorsque c'est la nuit (https://getbootstrap.com/docs/5.3/utilities/background/)
- Rendre l'heure légèrement plus grande ou d'une couleur différente

<details>
    <summary>
      Cheat Code (solution) <img style={{height: '20px', 'vertical-align': 'middle'}} src="https://imgur.com/UCEksuH.png" />
    </summary>

    Votre résultat pourrait être différent, j'ai pris quelques libertés sur les couleurs.

    <SandpackPlayground
        template="static"
        editorHeight={900}
        files={{
        '/index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <title>Horloge mondiale</title>
</head>
<body>
  <div class="container">
    <h2 class="text-center mb-4 display-5">Horloge mondiale</h2>
    <div class="row g-3">
      <div class="col-6 col-md-4 col-lg-3 col-xl-2">
        <div class="bg-light p-3 border rounded shadow-sm text-center">
          <div class="fw-bold">Montreal</div>
          <div class="text-primary">12:00 PM</div>
        </div>
      </div>
      <div class="col-6 col-md-4 col-lg-3 col-xl-2">
        <div class="bg-light p-3 border rounded shadow-sm text-center">
          <div class="fw-bold">London</div>
          <div class="text-primary">5:00 PM</div>
        </div>
      </div>
      <div class="col-6 col-md-4 col-lg-3 col-xl-2">
        <div class="bg-dark text-white p-3 border rounded shadow-sm text-center">
          <div class="fw-bold">Tokyo</div>
          <div class="text-info">2:00 AM</div>
        </div>
      </div>
      <div class="col-6 col-md-4 col-lg-3 col-xl-2">
        <div class="bg-dark text-white p-3 border rounded shadow-sm text-center">
          <div class="fw-bold">Sydney</div>
          <div class="text-info">4:00 AM</div>
        </div>
      </div>
      <div class="col-6 col-md-4 col-lg-3 col-xl-2">
        <div class="bg-light p-3 border rounded shadow-sm text-center">
          <div class="fw-bold">New York</div>
          <div class="text-primary">12:00 PM</div>
        </div>
      </div>
      <div class="col-6 col-md-4 col-lg-3 col-xl-2">
        <div class="bg-light p-3 border rounded shadow-sm text-center">
          <div class="fw-bold">Paris</div>
          <div class="text-primary">6:00 PM</div>
        </div>
      </div>
      <div class="col-6 col-md-4 col-lg-3 col-xl-2">
        <div class="bg-light p-3 border rounded shadow-sm text-center">
          <div class="fw-bold">Dubai</div>
          <div class="text-warning">8:00 PM</div>
        </div>
      </div>
      <div class="col-6 col-md-4 col-lg-3 col-xl-2">
        <div class="bg-light p-3 border rounded shadow-sm text-center">
          <div class="fw-bold">Moscow</div>
          <div class="text-warning">8:00 PM</div>
        </div>
      </div>
      <div class="col-6 col-md-4 col-lg-3 col-xl-2">
        <div class="bg-dark text-white p-3 border rounded shadow-sm text-center">
          <div class="fw-bold">Singapore</div>
          <div class="text-info">1:00 AM</div>
        </div>
      </div>
      <div class="col-6 col-md-4 col-lg-3 col-xl-2">
        <div class="bg-dark text-white p-3 border rounded shadow-sm text-center">
          <div class="fw-bold">Hong Kong</div>
          <div class="text-info">1:00 AM</div>
        </div>
      </div>
      <div class="col-6 col-md-4 col-lg-3 col-xl-2">
        <div class="bg-light p-3 border rounded shadow-sm text-center">
          <div class="fw-bold">São Paulo</div>
          <div class="text-primary">2:00 PM</div>
        </div>
      </div>
      <div class="col-6 col-md-4 col-lg-3 col-xl-2">
        <div class="bg-light p-3 border rounded shadow-sm text-center">
          <div class="fw-bold">Johannesburg</div>
          <div class="text-warning">7:00 PM</div>
        </div>
      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`
        }}
    />  
</details>