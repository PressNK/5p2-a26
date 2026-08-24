---
---

# 📚 Style des liens

Bien que les liens soient des éléments HTML assez standards, ils viennent avec leur particularité au niveau du style. En effet, un lien a plusieurs états: en survol, visité, etc.

Ces différents états peuvent être clibés via des pseudo-classes (ex.: `a:visited` pour l'état d'un lien visité).

## Les états des liens

Les liens HTML (`<a>`) possèdent différents états que l'on peut styliser avec des pseudo-classes CSS.

### Les 5 états principaux

#### :link
- Lien **non visité** (par défaut)
- S'applique aux liens avec un attribut `href`

```css
a:link {
    color: blue;
    text-decoration: underline;
}
```

#### :visited
- Lien **déjà visité** par l'utilisateur
- Le navigateur garde l'historique des liens visités

```css
a:visited {
    color: purple;
}
```

#### :hover
- Lien **survolé** par la souris
- État temporaire pendant le survol

```css
a:hover {
    color: red;
    text-decoration: none;
}
```

#### :active
- Lien **cliqué** (maintenu enfoncé)
- État très bref au moment du clic

```css
a:active {
    color: orange;
}
```

#### :focus
- Lien **sélectionné** par le clavier (touche Tab)
- Important pour l'accessibilité

```css
a:focus {
    outline: 2px solid blue;
}
```

## L'ordre LVHFA

Les pseudo-classes doivent être dans cet ordre précis pour fonctionner correctement:

1. **L**ink
2. **V**isited
3. **H**over
4. **F**ocus
5. **A**ctive

```css
/* Bon ordre */
a:link { color: blue; }
a:visited { color: purple; }
a:hover { color: red; }
a:focus { outline: 2px solid blue; }
a:active { color: orange; }

/* Mauvais ordre - ne fonctionnera pas correctement */
a:hover { color: red; }
a:link { color: blue; }  /* ERREUR : hover sera écrasé */
```

Les règles CSS suivent la **spécificité** et l'**ordre de cascade**. Si `:hover` vient avant `:link`, le `:link` écrasera le `:hover` car il a la même spécificité et vient après.

## Exemple

<SandpackPlayground
template="static"
showTabs={true}
editorHeight={600}
files={{
'/index.html': `<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h2>États des liens</h2>

    <p><a href="#non-visite">Lien non visité</a></p>
    <p><a href="#">Lien à survoler</a></p>

    <div class="instructions">
      <p>Essayez:</p>
      <ul>
        <li>Cliquer sur le premier lien (il deviendra visité)</li>
        <li>Survoler les liens avec la souris</li>
        <li>Maintenir le clic sur un lien</li>
      </ul>
    </div>
</body>
</html>`,
'styles.css': `body {
  font-family: Arial, sans-serif;
  margin: 20px;
  line-height: 1.8;
}

/* Ordre LVHFA */
a:link {
  color: #0066cc;
  text-decoration: underline;
}

a:visited {
  color: #800080;
}

a:hover {
  color: #cc0000;
  text-decoration: none;
}

a:active {
  color: #ff6600;
}

.instructions {
  background-color: #f0f0f0;
  padding: 15px;
  margin-top: 30px;
  border-left: 4px solid #0066cc;
}`
}}
/>

## Propriétés communes pour les liens

### Text-decoration
Contrôle le soulignement du lien

```css
a {
    text-decoration: none;           /* Pas de soulignement */
    text-decoration: underline;      /* Souligné (défaut) */
    text-decoration: line-through;   /* Barré */
}
```

### Color
Change la couleur du texte

```css
a {
    color: #0066cc;     /* Bleu personnalisé */
    color: red;         /* Couleur nommée */
    color: rgb(0, 102, 204);  /* RGB */
}
```

### Background-color
Ajoute une couleur de fond

```css
a:hover {
    background-color: #ffeb3b;
    padding: 2px 5px;
}
```

### Border
Ajoute une bordure

```css
a {
    border-bottom: 2px solid blue;
    text-decoration: none;
}
```