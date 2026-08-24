---
---

# 11-B 😈 Mini-Boss - Liens

Utilisez les pseudo-classes :link, :visited, :hover et :active pour styliser les liens du document HTML fourni.

## Instructions

1. Utilisez le fichier HTML de départ ci-dessous
2. Ajoutez les styles CSS pour les 4 états des liens
3. Testez votre page dans le navigateur (cliquez, survolez les liens)

## Fichier HTML de départ

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Activité sur l'état des liens</title>
  <link rel="stylesheet" href="./styles/app.css">
</head>
<body>
  <h1>Ressources d'apprentissage</h1>
    
  <p>Voici quelques liens utiles pour apprendre le développement web:</p>
  
  <ul>
      <li><a href="https://developer.mozilla.org">Documentation MDN</a></li>
      <li><a href="https://www.w3schools.com">W3Schools</a></li>
      <li><a href="https://css-tricks.com">CSS-Tricks</a></li>
      <li><a href="https://stackoverflow.com">Stack Overflow</a></li>
  </ul>

  <p>Cliquez sur les liens et observez les changements de couleur.</p>
</body>
</html>
```

## Spécifications

Ajoutez les styles suivants pour vos liens:

- Lien non visité: couleur `#004612` (vert)
- Lien visité: couleur `#a800a8` (mauve)
- Lien survolé: couleur `#743a00` (brun)
- Lien actif/cliqué: couleur `#b84a00` (orange)

## Validation

Pour vérifier que votre code fonctionne:

1. **Lien non visité**: Devrait être vert
2. **Lien visité**: Cliquez sur un lien, revenez en arrière → devrait être mauve
3. **Survol**: Passez la souris sur un lien → devrait devenir brun
4. **Clic actif**: Maintenez le clic sur un lien → devrait devenir orange brièvement

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
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Activité sur l'état des liens</title>
  <link rel="stylesheet" href="./styles/app.css">
</head>
<body>
  <h1>Ressources d'apprentissage</h1>
    
  <p>Voici quelques liens utiles pour apprendre le développement web:</p>
  
  <ul>
      <li><a href="https://developer.mozilla.org">Documentation MDN</a></li>
      <li><a href="https://www.w3schools.com">W3Schools</a></li>
      <li><a href="https://css-tricks.com">CSS-Tricks</a></li>
      <li><a href="https://stackoverflow.com">Stack Overflow</a></li>
  </ul>

  <p>Cliquez sur les liens et observez les changements de couleur.</p>
</body>
</html>`,
'styles/app.css': `a:link {
  color: #004612;
}

a:visited {
  color: #a800a8;
}

a:hover {
  color: #743a00;
}

a:active {
  color: #b84a00;
}
`
        }}
    />  
</details>