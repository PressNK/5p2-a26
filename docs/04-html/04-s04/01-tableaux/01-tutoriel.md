---
---

# 7-1 Créer un tableau

Nous allons créer un tableau comparatif de forfaits téléphoniques.

## Créer la base du tableau
1. Créez une page HTML de base
2. Ajoutez une balise `<table>`
    ```html
    <table>
    
    </table> 
    ```

## Construire l'en-tête (`thead`)
1. Ajoutez une balise `thead` pour l'en-tête du tableau.
    ```html
    <table>
      <thead></thead>
    </table> 
    ```
2. Ajouter les différentes colonnes d'en-tête avec `th`, soit: caractéristiques, Forfait de base, forfait Pro et forfait Premium.
    ```html
    <table>
      <thead>
        <th>Caractéristique</th>
        <th>Forfait Basic</th>
        <th>Forfait Pro</th>
        <th>Forfait Premium</th>
      </thead>
    </table> 
    ```

Cela constitue l'en-tête du tableau et vous devriez obtenir quelque chose comme ceci:

<SandpackPlayground
    template="static"
    editorHeight={400}
    files={{
    '/index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Comparaison de forfaits cellulaires</title>
</head>
<body>
  <h1>Comparaison de forfaits cellulaires</h1>

 <table>
  <thead>
    <th>Caractéristique</th>
    <th>Forfait Basic</th>
    <th>Forfait Pro</th>
    <th>Forfait Premium</th>
  </thead>
 </table> 
</body>
</html>`
    }}
/>

<p></p>

## Construire le corps du tableau (`tbody`)

Maintenant, pour le corps du tableau, on voudra ajouter plusieurs rangées avec un nombre de colonnes correspondant à l'en-tête.

Nous vondrons ajouter une rangée pour chacune des caractéristiques suivantes:
- Données mensuelles
- Appels
- SMS

1. Ajoutez `tbody` au tableau pour définir le corps de ce dernier
    ```html
    <table>
      <thead>
        <th>Caractéristique</th>
        <th>Forfait de base</th>
        <th>Forfait Pro</th>
        <th>Forfait Premium</th>
      </thead>
      //highlight-start
      <tbody>
        
      </tbody>
    //highlight-end
    </table> 
    ```
2. Ajoutez une première rangée
    ```html
    <table>
      <thead>
        <th>Caractéristique</th>
        <th>Forfait de base</th>
        <th>Forfait Pro</th>
        <th>Forfait Premium</th>
      </thead>
      <tbody>
        //highlight-next-line
        <tr></tr>
      </tbody>
    </table> 
    ```
3. Ajoutez une donnée pour chacune des 4 colonnes.
    ```html
    <table>
      <thead>
        <th>Caractéristique</th>
        <th>Forfait de base</th>
        <th>Forfait Pro</th>
        <th>Forfait Premium</th>
      </thead>
      <tbody>
        <tr>
          //highlight-start
          <th>Données mensuelles</th>
          <td>5 GB</td>
          <td>20 GB</td>
          <td>100 GB</td>
          //highlight-end
        </tr>
      </tbody>
    </table> 
    ```

    :::info
    Remarquez l'utilisation de `th` pour mettre l'emphase sur la première colonne!
    :::

Vous devriez maintenant avoir ceci:

<SandpackPlayground
    template="static"
    editorHeight={400}
    files={{
    '/index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Comparaison de forfaits cellulaires</title>
</head>
<body>
  <h1>Comparaison de forfaits cellulaires</h1>

 <table>
  <thead>
    <th>Caractéristique</th>
    <th>Forfait de base</th>
    <th>Forfait Pro</th>
    <th>Forfait Premium</th>
  </thead>
  <tbody>
    <tr>
      <th>Données mensuelles</th>
      <td>5 GB</td>
      <td>20 GB</td>
      <td>100 GB</td>
    </tr>
  </tbody>
 </table> 
</body>
</html>`
    }}
/>

<p></p>

Il ne nous reste plus qu'à compléter avec les données supplémentaires.

```html
<table>
  <thead>
    <th>Caractéristique</th>
    <th>Forfait de base</th>
    <th>Forfait Pro</th>
    <th>Forfait Premium</th>
  </thead>
  <tbody>
    <tr>
      <th>Données mensuelles</th>
      <td>5 GB</td>
      <td>20 GB</td>
      <td>100 GB</td>
    </tr>
    //highlight-start
    <tr>
      <th>Appels</th>
      <td>100 min</td>
      <td>Illimités</td>
      <td>Illimités</td>
    </tr>
    <tr>
      <th>SMS</th>
      <td>100</td>
      <td>Illimités</td>
      <td>Illimités</td>
    </tr>
    <tr>
      <th>Prix mensuel</th>
      <td>20$</td>
      <td>40$</td>
      <td>60$</td>
    </tr>
    //highlight-end
  </tbody>
</table>
```

## Ajouter une bordure et de l'espacement

1. Pour rendre le tout visuellement plus agréable, ajoutez une bordure au tableau.
    ```html
    <table border="1">
    ```
2. Ensuite, ajoutez une marge intérieure de "4"
    ```html
    <table border="1" cellpadding="4">
    ```

Et voici le résultat final!

<SandpackPlayground
    template="static"
    editorHeight={400}
    files={{
    '/index.html': `<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Comparaison de forfaits cellulaires</title>
</head>

<body>
  <h1>Comparaison de forfaits cellulaires</h1>

  <table border="1" cellpadding="4">
    <thead>
      <th>Caractéristique</th>
      <th>Forfait de base</th>
      <th>Forfait Pro</th>
      <th>Forfait Premium</th>
    </thead>
    <tbody>
      <tr>
        <th>Données mensuelles</th>
        <td>5 GB</td>
        <td>20 GB</td>
        <td>100 GB</td>
      </tr>
      <tr>
        <th>Appels</th>
        <td>100 min</td>
        <td>Illimités</td>
        <td>Illimités</td>
      </tr>
      <tr>
        <th>SMS</th>
        <td>100</td>
        <td>Illimités</td>
        <td>Illimités</td>
      </tr>
      <tr>
        <th scope="row">Prix mensuel</th>
        <td>20$</td>
        <td>40$</td>
        <td>60$</td>
      </tr>
    </tbody>
  </table>
</body>

</html>`
    }}
/>