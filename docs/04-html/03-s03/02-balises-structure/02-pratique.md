---
---

# 5-B 😈 Boss: Balises de structure

:::info Objectif
Restructurer une page en utilisant les balises de structure HTML5: `header`, `nav`, `main`, `section` et `article`, `aside`, `footer` et `details`.
:::

Voici une page HTML pour une série Netflix fictive utilisant des `div` génériques pour structurer le contenu:

```html
<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Code Academy - Série Netflix Originale</title>
</head>

<body>
  <div>
    <h1>🎬 Netflix</h1>
    <p>Votre plateforme de streaming préférée</p>

    <div>
      <h2>Menu</h2>
      <ul>
        <li><a href="#intro">Série</a></li>
        <li><a href="#distribution">Distribution</a></li>
        <li><a href="#critiques">Critiques</a></li>
        <li><a href="#faq">Questions fréquentes</a></li>
      </ul>
    </div>
  </div>

  <div>
    <h2 id="intro">Code Academy</h2>
    <h3>Série Netflix Originale • 2024 • 3 saisons</h3>
    <p>Suivez un groupe d'étudiants en programmation qui découvrent les mystères du développement web tout en naviguant
      dans les défis de la vie étudiante. Entre bugs impossibles à résoudre et révélations sur les technologies
      émergentes, chaque épisode mélange comédie, drame et passion pour le code.</p>

    <div>
      <h3>Synopsis détaillé</h3>
      <p>Dans cette série captivante, Maya, développeuse front-end passionnée, Alex, expert en sécurité informatique, et
        Jordan, spécialiste en intelligence artificielle, forment une équipe improbable lors d'un bootcamp intensif.
        Leur mentor, Sarah Chen, ancienne développeuse de la Silicon Valley, les guide à travers les complexités du
        monde technologique moderne.</p>

      <div>
        <strong>⚠️ ATTENTION SPOILERS</strong>
        <p>La saison 3 révèle que le mystérieux bug qui hante l'école depuis le début était en fait un test créé par le
          fondateur pour identifier les futurs développeurs d'élite. Maya découvre qu'elle a des capacités
          exceptionnelles pour détecter les failles de sécurité, Alex développe un algorithme révolutionnaire, et Jordan
          crée une IA qui change la donne.</p>
      </div>
    </div>

    <div>
      <h3 id="distribution">Distribution Principale</h3>

      <div>
        <h4>Emma Rodriguez - Maya Chen</h4>
        <p>Développeuse front-end déterminée, spécialisée en Ruby on Rails et design. Emma est connue pour ses rôles
          dans "Digital Dreams" et "Silicon Hearts".</p>
      </div>

      <div>
        <h4>Marcus Johnson - Alex Thompson</h4>
        <p>Expert en cybersécurité avec un passé mystérieux. Marcus a joué dans "Cyber Wars" et "The Network".</p>
      </div>

      <div>
        <h4>Zoe Park - Jordan Kim</h4>
        <p>Prodige de l'intelligence artificielle, la plus jeune de l'équipe. Zoe débute sa carrière avec ce rôle
          marquant.</p>
      </div>

      <div>
        <h4>Sandra Mitchell - Sarah Chen</h4>
        <p>Mentor bienveillante et ancienne CTO d'une startup célèbre. Sandra est une actrice vétéran avec 20 ans de
          carrière.</p>
      </div>
    </div>

    <div>
      <h3>Saison 1 - Les Débuts (2024)</h3>

      <div>
        <h4>Épisode 1: "Hello World"</h4>
        <p><strong>Durée:</strong> 45 min</p>
        <p>Maya arrive au bootcamp avec de grandes ambitions mais découvre que programmer en équipe est plus compliqué
          que prévu. Premier contact difficile avec Alex qui remet en question ses méthodes.</p>
      </div>

      <div>
        <h4>Épisode 2: "Merge Conflict"</h4>
        <p><strong>Durée:</strong> 42 min</p>
        <p>L'équipe doit collaborer sur son premier projet mais les conflits de version Git créent des tensions. Jordan
          propose une solution innovante avec l'IA.</p>
      </div>

      <div>
        <h4>Épisode 3: "404 - Friendship Not Found"</h4>
        <p><strong>Durée:</strong> 48 min</p>
        <p>Un bug critique menace le projet final. Maya et Alex doivent mettre leurs différences de côté pour sauver le
          travail de toute l'équipe.</p>
      </div>
    </div>

    <div>
      <h3 id="critiques">Critiques et Avis</h3>

      <div>
        <h4>★★★★☆ - TechReview Magazine</h4>
        <p>"Code Academy réussit brillamment à rendre la programmation accessible et passionnante. Les personnages sont
          attachants et les situations techniques sont réalistes."</p>
        <p><em>Publié le 15 mars 2024</em></p>
      </div>

      <div>
        <h4>★★★★★ - StreamWatch</h4>
        <p>"Une série qui parle enfin aux développeurs! Enfin une représentation juste de notre métier, loin des clichés
          hollywoodiens du hacker en hoodie."</p>
        <p><em>Publié le 22 mars 2024</em></p>
      </div>

      <div>
        <h4>★★★☆☆ - CineDigital</h4>
        <p>"Bonne série pour les passionnés de technologie, mais peut-être un peu trop technique pour le grand public.
          Les relations entre personnages sauvent l'ensemble."</p>
        <p><em>Publié le 28 mars 2024</em></p>
      </div>
    </div>
  </div>

  <div>
    <div>
      <h3>🎬 Anecdotes de tournage</h3>
      <p>Saviez-vous que tous les acteurs ont suivi un mini-bootcamp de programmation de 2 semaines pour préparer leurs
        rôles? Emma Rodriguez peut maintenant coder en Ruby!</p>
    </div>

    <div>
      <h3>📊 Statistiques</h3>
      <ul>
        <li>85% d'avis positifs sur RottenTomatoes</li>
        <li>8.7/10 sur IMDB</li>
        <li>N°1 des séries tech sur StreamFlix</li>
        <li>15 millions de vues en première semaine</li>
      </ul>
    </div>

    <div>
      <h3 id="faq">❓ Questions fréquentes</h3>

      <div>
        <strong>Quand sort la saison 4 ?</strong>
        <p>La production de la saison 4 a été confirmée pour 2025. Le tournage devrait commencer à l'automne 2024.</p>
      </div>

      <div>
        <strong>La série est-elle basée sur une histoire vraie ?</strong>
        <p>Non, mais les créateurs se sont inspirés de leurs propres expériences dans des bootcamps de programmation et
          l'industrie tech.</p>
      </div>

      <div>
        <strong>Peut-on apprendre à programmer en regardant la série ?</strong>
        <p>La série donne un bon aperçu du monde du développement, mais elle reste avant tout du divertissement. Pour
          vraiment apprendre, rien ne vaut la pratique!</p>
      </div>
    </div>
  </div>

  <div>
    <p>La plateforme qui révolutionne votre expérience de streaming depuis 2020.</p>

    <p>&copy; 2025 Votre nom. Tous droits réservés. Cette série est une œuvre de fiction créée à des fins pédagogiques.
    </p>
  </div>
</body>

</html>
```

## Consignes

Modifiez la page en remplaçant les `div` génériques lorsque pertinent par les bonnes balises structurantes:

- `<header>` pour l'en-tête
- `<nav>` pour la navigation à l'intérieur de l'en-tête
- `<main>` pour le contenu principal
- `<section>` pour regrouper par thématiques les contenus pertinents
- `<article>` pour les contenus autonomes (épisodes, critiques)
- `<aside>` pour les informations complémentaires (statistiques, anecdotes)
- `<footer>` pour le pied de page
- `<details>`/`<summary>` pour la section Questions fréquentes

## Résultat attendu

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
  <title>Code Academy - Série Netflix Originale</title>
</head>

<body>
  <header>
    <h1>🎬 Netflix</h1>
    <p>Votre plateforme de streaming préférée</p>

    <nav>
      <h2>Menu</h2>
      <ul>
        <li><a href="#intro">Série</a></li>
        <li><a href="#distribution">Distribution</a></li>
        <li><a href="#critiques">Critiques</a></li>
        <li><a href="#faq">Questions fréquentes</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <h2 id="intro">Code Academy</h2>
    <h3>Série Netflix Originale • 2024 • 3 saisons</h3>
    <p>Suivez un groupe d'étudiants en programmation qui découvrent les mystères du développement web tout en naviguant
      dans les défis de la vie étudiante. Entre bugs impossibles à résoudre et révélations sur les technologies
      émergentes, chaque épisode mélange comédie, drame et passion pour le code.</p>

    <section>
      <h3>Synopsis détaillé</h3>
      <p>Dans cette série captivante, Maya, développeuse front-end passionnée, Alex, expert en sécurité informatique, et
        Jordan, spécialiste en intelligence artificielle, forment une équipe improbable lors d'un bootcamp intensif.
        Leur mentor, Sarah Chen, ancienne développeuse de la Silicon Valley, les guide à travers les complexités du
        monde technologique moderne.</p>

      <div>
        <strong>⚠️ ATTENTION SPOILERS</strong>
        <p>La saison 3 révèle que le mystérieux bug qui hante l'école depuis le début était en fait un test créé par le
          fondateur pour identifier les futurs développeurs d'élite. Maya découvre qu'elle a des capacités
          exceptionnelles pour détecter les failles de sécurité, Alex développe un algorithme révolutionnaire, et Jordan
          crée une IA qui change la donne.</p>
      </div>
    </section>

    <section>
      <h3 id="distribution">Distribution Principale</h3>

      <article>
        <h4>Emma Rodriguez - Maya Chen</h4>
        <p>Développeuse front-end déterminée, spécialisée en Ruby on Rails et design. Emma est connue pour ses rôles
          dans "Digital Dreams" et "Silicon Hearts".</p>
      </article>

      <article>
        <h4>Marcus Johnson - Alex Thompson</h4>
        <p>Expert en cybersécurité avec un passé mystérieux. Marcus a joué dans "Cyber Wars" et "The Network".</p>
      </article>

      <article>
        <h4>Zoe Park - Jordan Kim</h4>
        <p>Prodige de l'intelligence artificielle, la plus jeune de l'équipe. Zoe débute sa carrière avec ce rôle
          marquant.</p>
      </article>

      <article>
        <h4>Sandra Mitchell - Sarah Chen</h4>
        <p>Mentor bienveillante et ancienne CTO d'une startup célèbre. Sandra est une actrice vétéran avec 20 ans de
          carrière.</p>
      </article>
    </section>

    <section>
      <h3>Saison 1 - Les Débuts (2024)</h3>

      <article>
        <h4>Épisode 1: "Hello World"</h4>
        <p><strong>Durée:</strong> 45 min</p>
        <p>Maya arrive au bootcamp avec de grandes ambitions mais découvre que programmer en équipe est plus compliqué
          que prévu. Premier contact difficile avec Alex qui remet en question ses méthodes.</p>
      </article>

      <article>
        <h4>Épisode 2: "Merge Conflict"</h4>
        <p><strong>Durée:</strong> 42 min</p>
        <p>L'équipe doit collaborer sur son premier projet mais les conflits de version Git créent des tensions. Jordan
          propose une solution innovante avec l'IA.</p>
      </article>

      <article>
        <h4>Épisode 3: "404 - Friendship Not Found"</h4>
        <p><strong>Durée:</strong> 48 min</p>
        <p>Un bug critique menace le projet final. Maya et Alex doivent mettre leurs différences de côté pour sauver le
          travail de toute l'équipe.</p>
      </article>
    </section>

    <section>
      <h3 id="critiques">Critiques et Avis</h3>

      <article>
        <h4>★★★★☆ - TechReview Magazine</h4>
        <p>"Code Academy réussit brillamment à rendre la programmation accessible et passionnante. Les personnages sont
          attachants et les situations techniques sont réalistes."</p>
        <p><em>Publié le 15 mars 2024</em></p>
      </article>

      <article>
        <h4>★★★★★ - StreamWatch</h4>
        <p>"Une série qui parle enfin aux développeurs! Enfin une représentation juste de notre métier, loin des clichés
          hollywoodiens du hacker en hoodie."</p>
        <p><em>Publié le 22 mars 2024</em></p>
      </article>

      <article>
        <h4>★★★☆☆ - CineDigital</h4>
        <p>"Bonne série pour les passionnés de technologie, mais peut-être un peu trop technique pour le grand public.
          Les relations entre personnages sauvent l'ensemble."</p>
        <p><em>Publié le 28 mars 2024</em></p>
      </article>
    </section>
  </main>

  <aside>
    <section>
      <h3>🎬 Anecdotes de tournage</h3>
      <p>Saviez-vous que tous les acteurs ont suivi un mini-bootcamp de programmation de 2 semaines pour préparer leurs
        rôles? Emma Rodriguez peut maintenant coder en Ruby!</p>
    </section>

    <section>
      <h3>📊 Statistiques</h3>
      <ul>
        <li>85% d'avis positifs sur RottenTomatoes</li>
        <li>8.7/10 sur IMDB</li>
        <li>N°1 des séries tech sur StreamFlix</li>
        <li>15 millions de vues en première semaine</li>
      </ul>
    </section>

    <section>
      <h3 id="faq">❓ Questions fréquentes</h3>

      <details>
        <summary>Quand sort la saison 4 ?</summary>
        <p>La production de la saison 4 a été confirmée pour 2025. Le tournage devrait commencer à l'automne 2024.</p>
      </details>

      <details>
        <summary>La série est-elle basée sur une histoire vraie ?</summary>
        <p>Non, mais les créateurs se sont inspirés de leurs propres expériences dans des bootcamps de programmation et
          l'industrie tech.</p>
      </details>

      <details>
        <summary>Peut-on apprendre à programmer en regardant la série ?</summary>
        <p>La série donne un bon aperçu du monde du développement, mais elle reste avant tout du divertissement. Pour
          vraiment apprendre, rien ne vaut la pratique!</p>
      </details>
    </section>
  </aside>

  <footer>
    <p>La plateforme qui révolutionne votre expérience de streaming depuis 2020.</p>

    <p>&copy; 2025 Votre nom. Tous droits réservés. Cette série est une œuvre de fiction créée à des fins pédagogiques.
    </p>
  </footer>
</body>

</html>`
      }}
  />  
 </details>