---
---

# 📚 Symboles et caractères spéciaux

Dans le dernier niveau, vous avez remarqué que nous avons utilisé un caractère spécial pour afficher le symbole de "copyright".

En HTML, certains caractères ont une signification particulière et ne peuvent pas être affichés directement. Pour les afficher, on utilise des entités HTML - des codes spéciaux qui représentent ces caractères.

## Pourquoi avons-nous besoin de caractères spéciaux?
Certains caractères sont réservés par HTML:
- `<` et `>` délimitent les balises
- `&` introduit les entités
- ` délimite les attributs

D'autres caractères sont difficiles à taper ou invisibles:
- Espaces insécables
- Symboles spéciaux

## Syntaxe des entités HTML

Les entités HTML commencent par `&` et se terminent par `;`:

## Caractères fréquents à connaître

### Caractères réservés HTML

| Caractère | Entité | Code numérique | Usage |
|-----------|---------|----------------|--------|
| `<` | `&lt;` | `&#60;` | Inférieur à |
| `>` | `&gt;` | `&#62;` | Supérieur à |
| `&` | `&amp;` | `&#38;` | Esperluette |
| `"` | `&quot;` | `&#34;` | Guillemets |
| `'` | `&apos;` | `&#39;` | Apostrophe |

### Espaces spéciaux

| Caractère | Entité | Description |
|-----------|---------|-------------|
| Espace insécable | `&nbsp;` | Espace qui ne se casse pas |

### Caractères typographiques

| Caractère | Entité | Description |
|-----------|---------|-------------|
| © | `&copy;` | Copyright |
| ® | `&reg;` | Marque déposée |
| ™ | `&trade;` | Trademark |
| € | `&euro;` | Euro |

[Liste exhaustive des symboles](https://www.w3schools.com/html/html_symbols.asp)

## Exemples pratiques

### Afficher du code HTML dans une page

```html
<!-- INCORRECT - ne s'affichera pas -->
<p>Utilisez la balise <h1> pour les titres</p>

<!-- CORRECT -->
<p>Utilisez la balise &lt;h1&gt; pour les titres</p>
```

### Texte avec symboles

```html
<p>Prix : 29&euro; &copy; 2024 MonSite&trade;</p>
<p>Espacement&nbsp;insécable entre&nbsp;ces&nbsp;mots</p>
```