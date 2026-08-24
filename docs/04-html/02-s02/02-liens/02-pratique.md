---
---

# 3-B 😈 Boss - Les liens

:::info Objectif
Intégrer les différents types de lien à une page HTML.
:::

## 3-B-1 Liens externes et attributs de liens

Créez une page "Mes sites préférés" avec le contenu suivant:
- Créez une **liste** (ul ou li) de 5 sites web que vous aimez avec les liens vers ces derniers
- Chaque lien doit s'ouvrir dans un nouvel onglet
- Ajoutez un attribut `title` descriptif à chaque lien
- Ajoutez après la liste un lien vers votre adresse courriel avec `mailto` afin de vous contacter.

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
		<title>Mes sites préférés</title>
	</head>
	<body>
		<h1>Mes sites préférés</h1>

		<p>Voici mes 5 sites préférés</p>
		<ul>
			<li><a href="https://www.formula1.com" title="Site officiel de la Formule 1">Formule 1</a></li>
			<li><a href="https://stackoverflow.com/questions" title="Trouvez des réponses à vos questions de programmation">Stack Overflow</a></li>
			<li><a href="https://www.reddit.com" title="Communautés et discussions sur tous les sujets">Reddit</a></li>
			<li><a href="https://www.lapresse.ca" title="Actualités et nouvelles">La Presse</a></li>
			<li><a href="https://github.com" title="Hébergement et collaboration pour projets de code">GitHub</a></li>
		</ul>

		<a href="mailto:benoit.tremblay@cegepdrummond.ca">Me contacter</a>
	</body>
	</html>`
		}}
	/>  
 </details>

## 3-B-2 Navigation interne avec ancres

Créez une page HTML avec comme base le HTML qui suit et complétez la page:
- Ajoutez des IDs appropriées aux titres h2
- Créez une liste de navigation où indiqué par un commentaire avec des liens internes
- Ajoutez un lien "Retour en haut" à la fin de chaque section

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Mon CV</title>
</head>
<body>
  <h1>Mon CV</h1>
  
  <!-- TODO: Créer une liste de navigation ici -->
  
  <h2>Formation</h2>
  <p>Mes études et diplômes...</p>
  
  <h2>Expérience professionnelle</h2>
  <p>Mes emplois précédents...</p>
  
  <h2>Compétences</h2>
  <p>Mes compétences techniques...</p>
  
  <h2>Contact</h2>
  <p>Mes coordonnées...</p>
</body>
</html>
```

:::tip
Vous pouvez rapetisser la hauteur de votre fenêtre pour forcer le navigateur à défiler vers le base lorsque vous cliquez sur un lien.

En effet, comme la page n'a pas beaucoup de contenu, l'effet est qu'elle rentre en entier dans votre écran et donc il n'y a pas de défilement. Rapetisser la hauteur de façon à ce que la fenêtre soit plus petite que le contenu forcera un défilement.
:::

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
    <title>Mon CV</title>
  </head>
  <body>
    <h1 id="top">Mon CV</h1>
    
    <ul>
      <li><a href="#formation">Formation</a></li>
      <li><a href="#experience">Expérience professionnelle</a></li>
      <li><a href="#competences">Compétences</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    
    <h2 id="formation">Formation</h2>
    <p>Mes études et diplômes...</p>
    <p><a href="#top">Retour en haut</a></p>
    
    <h2 id="experience">Expérience professionnelle</h2>
    <p>Mes emplois précédents...</p>
    <p><a href="#top">Retour en haut</a></p>
    
    <h2 id="competences">Compétences</h2>
    <p>Mes compétences techniques...</p>
    <p><a href="#top">Retour en haut</a></p>
    
    <h2 id="contact">Contact</h2>
    <p>Mes coordonnées...</p>
    <p><a href="#top">Retour en haut</a></p>
  </body>
  </html>`
        }}
    />  
 </details>

## 3-B-3 Liens internes

Créez un site simple pour un portfolio personnel.

**Structure requise**:
* Page d'accueil (`index.html`)
* Page "À propos" (`a-propos.html`)
* Page "Projets" (`projets.html`)
* Page "Contact" (`contact.html`)

**À faire**:
- À partir de la page d'accueil, créez des liens vers les différentes pages.
- À partir de chaque page individuelle, ajoutez un lien pour revenir à l'accueil

:::tip
L'idée ici est de faire des liens vers des pages internes, le contenu n'est pas tellement important, ne perdez pas trop de temps sur cet aspect.
:::

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
    <title>Mon portfolio</title>
  </head>
  <body>
    <h1>Portfolio</h1>
    <h2>Sections</h2>
    <ul>
      <li>
        <a href="./a-propos.html">À propos</a>
      </li>
      <li>
        <a href="./projets.html">Projets</a>
      </li>
      <li>
        <a href="./contact.html">Contact</a>
      </li>
    </ul>
  </body>
  </html>`,
  'a-propos.html': `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>À propos</title>
  </head>
  <body>
    <a href="./index.html">Retour à l'accueil</a>
    <h1>À propos</h1>
  </body>
  </html>`,
  'contact.html': `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact</title>
  </head>
  <body>
    <a href="./index.html">Retour à l'accueil</a>
    <h1>Contact</h1>
  </body>
  </html>`,
  'projets.html': `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projets</title>
  </head>
  <body>
    <a href="./index.html">Retour à l'accueil</a>
    <h1>Projets</h1>
  </body>
  </html>`
        }}
    />  
 </details>

 ## 3-B-4 Débogage de liens

 Le code suivant contient plusieurs erreurs. Trouvez et corrigez-les:

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Page avec erreurs</title>
</head>
<body>
  <h1>Ma page</h1>
  
  <nav>
    <ul>
      <li><a href="#section1">Section 1</a></li>
      <li><a href="#section2">Section 2</a></li>
      <li><a href="#section3">Section 3</a></li>
    </ul>
  </nav>
  
  <h2 id="section-1">Section 1</h2>
  <p>Visitez <a href="www.google.com" target="blank">Google</a></p>
  
  <h2 id="section2">Section 2</h2>
  <p>Contactez-moi: <a href="mailto test@email.com" target="_blank">Email</a></p>
  
  <h2>Section 3</h2>
  <p>Appelez-moi: <a href="tel:+1234567890" title=>Téléphone</a></p>
  
  <a href="#top" title="Retour en haut de la page">↑ Haut de page</a>
</body>
</html>
 ```


