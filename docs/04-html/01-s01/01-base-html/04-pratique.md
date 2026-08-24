---
---

# 1-B 😈 Boss - Page Web simple

:::info Objectif
Créer une page Web simple en créant un document HTML de base.
:::

Reproduisez la page Web suivante pour votre chaine fictive YouTube, Twitch ou autre (inventez, on s'amuse!)

<BrowserWindow>
  <h1>Bienvenue sur la chaine de Ben!</h1>
  <p>Streams de Sim Racing les samedi soirs de 19:00 - 22:00</p>
  <p>Abonnez-vous!</p>
</BrowserWindow>

:::tip
Retournez au tutoriel pour vous aider. Vous devrez:
1. Créer un nouveau fichier `html` pour la page
2. Utiliser les balises adéquates pour le titre principal et pour les blocs de texte.
:::

<details>
 <summary>
    Cheat Code (solution) <img style={{height: '20px', 'vertical-align': 'middle'}} src="https://imgur.com/UCEksuH.png" />
 </summary>

  <SandpackPlayground
      template="static"
      editorHeight={400}
      files={{
      '/index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chaine Twitch de Ben</title>
</head>
<body>
  <h1>Bienvenue sur la chaine de Ben!</h1>
  <p>Streams de Sim Racing les samedi soirs de 19:00 - 22:00</p>
  <p>Abonnez-vous!</p>
</body>
</html>`
      }}
  />  
 </details>