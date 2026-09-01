---
---

# 📚 Les tableaux

## Introduction

Les tableaux HTML permettent d'organiser des données en lignes et colonnes. Ils sont parfaits pour afficher des informations structurées comme des statistiques, des horaires, des comparaisons de produits ou des résultats financiers.

## Structure de Base d'un tableau

### Éléments fondamentaux

Un tableau HTML utilise plusieurs balises qui s'imbriquent:

```html
<table>
    <tr>        <!-- Table Row = ligne -->
        <td>    <!-- Table Data = cellule de données -->
        </td>
    </tr>
</table>
```

### Exemple simple

<SandpackPlayground
    template="static"
    editorHeight={400}
    files={{
    '/index.html': `<table>
    <tr>
        <td>Nom</td>
        <td>Âge</td>
        <td>Ville</td>
    </tr>
    <tr>
        <td>Alice</td>
        <td>25</td>
        <td>Montréal</td>
    </tr>
    <tr>
        <td>Bob</td>
        <td>30</td>
        <td>Drummondville</td>
    </tr>
</table>`
    }}
/>

## Les Balises de Tableau

### `<table>` - Conteneur principal

La balise `<table>` englobe tout le tableau:

```html
<table>
    <!-- Contenu du tableau -->
</table>
```

### `<tr>` - Ligne du tableau

Chaque ligne du tableau est définie par `<tr>` (table row):

```html
<table>
    <tr><!-- Première ligne --></tr>
    <tr><!-- Deuxième ligne --></tr>
    <tr><!-- Troisième ligne --></tr>
</table>
```

### `<td>` - Cellule de données

Les cellules de données utilisent `<td>` (table data):

```html
<tr>
    <td>Cellule 1</td>
    <td>Cellule 2</td>
    <td>Cellule 3</td>
</tr>
```

### `<th>` - En-tête de colonne

Pour les en-têtes, utilisez `<th>` (table header):

<SandpackPlayground
    template="static"
    editorHeight={400}
    files={{
    '/index.html': `<table>
    <tr>
        <th>Nom</th>
        <th>Âge</th>
        <th>Profession</th>
    </tr>
    <tr>
        <td>Marie</td>
        <td>28</td>
        <td>Développeuse</td>
    </tr>
</table>`
    }}
/>

:::info
Remarquez l'effet de gras appliqué sur le texte des colonnes! C'est l'effet de `th`.
:::

## Structure sémantique avancée

Un peu comme notre document `HTML` et les balises sémantiques `main`, `nav` ou `section`, il est possible de communiquer le rôle de certaines portions du tableau à l'aide balises spécifiques.

### `<thead>`, `<tbody>`, `<tfoot>`

Pour une meilleure organisation du tableau, il est possible d'utiliser les balises suivantes:
- `<thead>`: En-tête du tableau
- `<tbody>`: Corps principal avec les données
- `<tfoot>`: Pied du tableau (totaux, résumés)

Par exemple:

<SandpackPlayground
    template="static"
    editorHeight={400}
    files={{
    '/index.html': `<table>
    <thead>
        <tr>
            <th>Produit</th>
            <th>Prix</th>
            <th>Stock</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ordinateur</td>
            <td>899$</td>
            <td>15</td>
        </tr>
        <tr>
            <td>Souris</td>
            <td>25$</td>
            <td>50</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Total</td>
            <td>924$</td>
            <td>65</td>
        </tr>
    </tfoot>
</table>`
    }}
/>

<p></p>

:::info
Remarquez comment les rangées (`tr`) ont été enveloppées dans des balises d'organisation comme:
- `<thead>`: En-tête du tableau
- `<tbody>`: Corps principal avec les données
- `<tfoot>`: Pied du tableau (totaux, résumés)
:::


## Fusion de Cellules

### `colspan` - Fusion horizontale

L'attribut `colspan` permet de fusionner des cellules horizontalement. Par exemple, ici pour que la première rangée prenne trois colonnes de large:

<SandpackPlayground
    template="static"
    editorHeight={400}
    files={{
    '/index.html': `<table>
    <tr>
        <th colspan="3">Statistiques Mensuelles</th>
    </tr>
    <tr>
        <th>Janvier</th>
        <th>Février</th>
        <th>Mars</th>
    </tr>
    <tr>
        <td>100</td>
        <td>150</td>
        <td>120</td>
    </tr>
</table>`
    }}
/>


### `rowspan` - Fusion verticale

L'attribut `rowspan` permet de fusionner des cellules verticalement:

<SandpackPlayground
    template="static"
    editorHeight={400}
    files={{
    '/index.html': `<table>
  <tr>
    <th>Mois</th>
    <th>Économies</th>
    <th>Économies pour Noël</th>
  </tr>
  <tr>
    <td>Janvier</td>
    <td>$100</td>
    <td rowspan="2">$50</td>
  </tr>
  <tr>
    <td>Février</td>
    <td>$80</td>
  </tr>
</table>`
    }}
/>

### Titre du tableau avec `<caption>`

L'élément `<caption>` fournit un titre descriptif au tableau:

<SandpackPlayground
    template="static"
    editorHeight={400}
    files={{
    '/index.html': `<table>
    <caption>Résultats des ventes par trimestre 2024</caption>
    <thead>
        <tr>
            <th>Trimestre</th>
            <th>Ventes</th>
            <th>Objectif</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Q1</td>
            <td>250k$</td>
            <td>200k$</td>
        </tr>
        <tr>
            <td>Q2</td>
            <td>300k$</td>
            <td>280k$</td>
        </tr>
    </tbody>
</table>`
    }}
/>

## Style et bordures

Il est possible d'ajouter des bordures aux tableaux et d'ajouter de l'espacement entre les cellules.

### `border` - Bordures

L'attribut `border` permet de spécifier une taille de bordure pour la table.

```html
<table border="1">
</table>
```

<SandpackPlayground
    template="static"
    editorHeight={400}
    files={{
    '/index.html': `<table border="1">
    <thead>
        <tr>
            <th>Produit</th>
            <th>Prix</th>
            <th>Stock</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ordinateur</td>
            <td>899$</td>
            <td>15</td>
        </tr>
        <tr>
            <td>Souris</td>
            <td>25$</td>
            <td>50</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Total</td>
            <td>924$</td>
            <td>65</td>
        </tr>
    </tfoot>
</table>`
    }}
/>

### `cellspacing` - Espace entre les cellules

L'attribut `cellspacing` permet de spécifier l'espace entre les cellules.

```html
<table border="1" cellspacing="10">
</table>
```

<SandpackPlayground
    template="static"
    editorHeight={400}
    files={{
    '/index.html': `<table border="1" cellspacing="10">
    <thead>
        <tr>
            <th>Produit</th>
            <th>Prix</th>
            <th>Stock</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ordinateur</td>
            <td>899$</td>
            <td>15</td>
        </tr>
        <tr>
            <td>Souris</td>
            <td>25$</td>
            <td>50</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Total</td>
            <td>924$</td>
            <td>65</td>
        </tr>
    </tfoot>
</table>`
    }}
/>

### `cellpadding` - Marge intérieur des cellules

L'attribut `cellpadding` permet de spécifier une marge intérieure pour les cellules.

```html
<table border="1" cellpadding="10">
</table>
```

<SandpackPlayground
    template="static"
    editorHeight={400}
    files={{
    '/index.html': `<table border="1" cellpadding="10">
    <thead>
        <tr>
            <th>Produit</th>
            <th>Prix</th>
            <th>Stock</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ordinateur</td>
            <td>899$</td>
            <td>15</td>
        </tr>
        <tr>
            <td>Souris</td>
            <td>25$</td>
            <td>50</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Total</td>
            <td>924$</td>
            <td>65</td>
        </tr>
    </tfoot>
</table>`
    }}
/>

## Bonnes Pratiques

### Structure logique

1. **Utilisez toujours `<th>` pour les en-têtes**
2. **Organisez avec `<thead>`, `<tbody>`, `<tfoot>`** quand approprié
3. **Ajoutez `<caption>`** pour décrire le contenu
4. **Utilisez les bordures et ajouter de l'espacement** pour faire respirer le contenu

### Accessibilité

1. **En-têtes clairs** - Descriptions précises dans `<th>`
2. **Pas de tableaux pour la mise en page** - Uniquement pour des données
3. **Navigation logique** - Structure qui suit l'ordre de lecture

### Lisibilité

```html
<!-- BIEN : Structure claire -->
<table>
    <caption>Données claires et organisées</caption>
    <thead>
        <tr>
            <th>Nom</th>
            <th>Valeur</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Élément 1</th>
            <td>100</td>
        </tr>
    </tbody>
</table>

<!-- ÉVITER : Structure confuse -->
<table>
    <tr>
        <td><strong>Nom</strong></td>
        <td><strong>Valeur</strong></td>
    </tr>
    <tr>
        <td>Élément 1</td>
        <td>100</td>
    </tr>
</table>
```

## Quand utiliser les tableaux

### ✅ Utilisez les tableaux pour :
- Données tabulaires (ex.: Excel)
- Comparaisons de produits/services
- Résultats financiers ou statistiques
- Horaires et planifications
- Classements et résultats

### ❌ N'utilisez PAS les tableaux pour :
- Mise en page de la page
- Alignement d'éléments
- Grilles d'images ou de produits
- Navigation ou menus