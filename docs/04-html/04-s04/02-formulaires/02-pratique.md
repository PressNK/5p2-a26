---
---

# 8-B 😈 Boss - formulaire d'inscription à une infolettre

Développez un formulaire d'inscription à une infolettre pour développeurs Web.

:::tip
Référez-vous au [guide sur les formulaires](./00-doc-formulaires.md) pour les différentes balises et leurs options!
:::

Les champs demandés sont les suivants:
- Nom (requis)
- Courriel (requis)
- Thématiques (choix multiples)
  - HTML
  - CSS
  - JavaScript
  - Design
  - Ruby on Rails
  - Vue
- Fréquence (un seul choix)
  - Quotidien
  - Hebdomadaire
  - Mensuel


<details>
    <summary>
      Cheat Code (solution) <img style={{height: '20px', 'vertical-align': 'middle'}} src="https://imgur.com/UCEksuH.png" />
    </summary>

    <SandpackPlayground
        template="static"
        editorHeight={900}
        files={{
        '/index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>S'inscrire à l'infolettre</title>
</head>
<body>
  <h1>S'inscrire à l'infolettre</h1>

  <form>
    <div>
      <label for="nom">Nom</label><br />
      <input type="text" id="nom" placeholder="Votre nom" required>
    </div>
    <div>
      <label for="courriel">Courriel</label><br />
      <input type="email" id="courriel" placeholder="grumpy@cat.com" required>
    </div>
   
    <h4>Thématiques</h4>
    <div>
      <label for="html">HTML</label>&nbsp;
      <input type="checkbox" id="html" value="html">

      <label for="css">CSS</label>&nbsp;
      <input type="checkbox" id="css" value="css">

      <label for="js">JavaScript</label>&nbsp;
      <input type="checkbox" id="js" value="js">

      <label for="design">Design</label>&nbsp;
      <input type="checkbox" id="design" value="design">

      <label for="ruby-on-rails">Ruby on Rails</label>&nbsp;
      <input type="checkbox" id="ruby-on-rails" value="ruby-on-rails">

      <label for="vue">Vue</label>&nbsp;
      <input type="checkbox" id="vue" value="vue">
    </div>

    <h4>Fréquence</h4>
    <div>
      <input type="radio" id="quotidien" value="quotidien">
      <label for="quotidien">Quotidien</label>

      <input type="radio" id="hebdomadaire" value="hebdomadaire">
      <label for="hebdomadaire">Hebdomadaire</label>

      <input type="radio" id="mensuel" value="mensuel">
      <label for="mensuel">Mensuel</label>
    </div>

    <button>Soumettre</button>
  </form>
</body>
</html>`
        }}
    />  
</details>