---
---

### Gras (`<strong>` et `<b>`)

- **`<strong>`**: indique une importance sémantique. Les lecteurs d’écran insistent sur ce contenu.  
- **`<b>`**: applique simplement un style gras sans implication sémantique (à éviter pour le contenu crucial).

<SandpackPlayground
  template="static"
  showTabs={false}
  files={{
    '/index.html': `<p><strong>Grumpy Cat</strong> ne sourit jamais… et c’est son charme !</p>
<p><b>Nyan Cat</b> est coloré et divertissant.</p>`
  }}
/>