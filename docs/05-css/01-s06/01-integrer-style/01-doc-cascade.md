---
---

# 📚 Concept de cascade

Le nom CSS est un acronyme pour *Cascading Style Sheets*.

Le terme "Cascading" fait référence au concept de cascade. La cascade est le mécanisme qui détermine quelles règles CSS s'appliquent lorsque plusieurs styles ciblent le même élément. C'est un système de résolution de conflits qui suit des règles précises pour décider quel style "gagne".

Par exemple:

```html
<!-- Cet élément pourrait recevoir des styles de plusieurs sources -->
<p class="important" id="intro" style="color: green;">
    Quel sera ma couleur finale ?
</p>
```

:::info
Dans ce cas, `style` est la déclaration la plus précise et le texte sera `vert`. Voir section suivante pour plus d'explications!
:::

## Ordre d'importance des sélecteurs

La cascade se base sur trois critères principaux, évalués dans cet ordre:
1. Importance (`!important`)
2. Spécificité (quel sélecteur est le plus précis)
   1. `style` est le plus précis
   2. `id` ensuite
   3. `class` ensuite
   4. `element` (exemple `p`) finalement
3. Ordre (dernière règle déclarée)

### La déclaration `!important`

```css
p {
    color: blue !important;  /* Cette règle l'emportera */
}

#special {
    color: red;  /* Même avec un ID, perdra face à !important */
}
```

```html
<p id="special">Je serai bleu, pas rouge !</p>
```

:::danger
Utiliser `!important` est généralement une mauvaise pratique. Cela devrait être utilisé et réservé aux cas d'exception.
:::

### Spécificité

La spécificité détermine quel sélecteur est le plus "précis" ou "spécifique". Voici du plus spécifique au moins spécifique.

| Position | Type de sélecteur                                                              |
| -------- | ------------------------------------------------------------------------------ |
| 1er      | Style inline (`style="..."`)                                                   |
| 2e       | ID (`#mon-id`)                                                                 |
| 3e       | Classes (`.ma-classe`), pseudo-classes (`:hover`), attributs (`[type="text"]`) |
| 4e       | Éléments (`p`, `div`, `h1`) et pseudo-éléments (`::before`)                    |

```css
/* Moins spécifique */
p { color: blue; }

/* + importance (1 classe) */
.important { color: green; }

/* ++ importance (1 classe + 1 élément) */
p.important { color: orange; }

/* +++ importance (1 ID) */
#intro { color: red; }

/* ++++ importance (1 ID + 1 classe + 1 élément) */
p#intro.important { color: purple; }
```

#### Exemple complet de spécificité

```html
<p class="texte important" id="premier">Quelle sera ma couleur ?</p>
```

```css
p { color: black; }                    
.texte { color: blue; }                
.important { color: green; }           
p.texte { color: orange; }             
.texte.important { color: yellow; }    
#premier { color: red; }               
p#premier { color: purple; }   /* <--- Gagne!
```  

:::info
Résultat: Le texte sera `purple` (spécificité la plus élevée, un élément + un id)
:::

### Ordre de déclaration

Quand deux règles ont la même spécificité, la dernière déclarée l'emporte.

```css
/* Même spécificité  */
.message { color: blue; }
.alerte { color: red; }
```

```html
<p class="message alerte">Je serai rouge</p>
<p class="alerte message">Je serai aussi rouge !</p>
<!-- L'ordre des classes dans le HTML n'a PAS d'importance -->
<!-- C'est l'ordre dans le CSS qui compte -->
```