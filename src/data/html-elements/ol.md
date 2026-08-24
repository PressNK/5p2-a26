---
---

### Listes numérotées (ordered-list `<ol>`)

La balise **`<ol>`** permet de créer une liste numérotée, c'est-à-dire lorsque l’ordre compte (ex.: étapes, classement, chronologie).

Pour créer la liste, on utilise la balise `<ol>` et sous cette balise, chaque élément doit être contenu dans une balise `<li>` (list item).

<SandpackPlayground
  template="static"
  showTabs={false}
  files={{
    '/index.html': `<p>Liste de mes chats préférés du Web, en ordre d'importance</p>
  <ol>
    <li>Nyan Cat</li>
    <li>Grumpy Cat</li>
    <li>Lil Bub</li>
  </ol>
`
  }}
/>