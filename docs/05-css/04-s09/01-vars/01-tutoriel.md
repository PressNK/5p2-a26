---
---

# 15-1 Utiliser les variables CSS

Dans cette activité, nous allons apprendre à utiliser les **variables CSS** pour gérer les couleurs de façon cohérente et maintenable.

:::caution
Utilisez le [projet de départ](../00-intro.md) pour cette activité.
:::

## Observer les couleurs répétées

**Regardez attentivement le CSS et trouvez les couleurs qui se répètent :**

- `#0099ff` est utilisé **2 fois**: bordure des cartes + badges
- `#ffa500` est utilisé **2 fois**: titres des cartes (h3) + footer
- `#cccccc` est utilisé **2 fois**: paragraphe du header + descriptions

:::caution Problème!
Si vous voulez changer le bleu `#0099ff` pour une autre couleur, vous devez le changer à 2 endroits. Et si vous avez 10 endroits? C'est long et risqué d'oublier un endroit!
:::

## Définir des variables CSS

Les **variables CSS** permettent de définir une valeur **UNE SEULE FOIS** et de la **réutiliser** partout.

Créons des variables pour ces trois couleurs répétitives:
- couleur principale (le bleu)
- couleur d'accent (le orange)
- couleur pour le texte pâle

1. Ajoutez le sélecteur `root` au début de votre fichier CSS.
    ```css
    :root {

    }
    ```
2. Définissez les variables selon le format suivant:
    ```css
    :root {
        --couleur-principale: #0099ff;
        --couleur-accent: #ffa500;
        --couleur-texte-pale: #cccccc;
    }
    ```

:::info
Les variables CSS commencent toujours par deux tirets (`--`) et sont déclarées dans un sélecteur.

`:root` est le sélecteur le plus courant pour déclarer des variables globales. Il cible l'élément racine du document (généralement `<html>`).
:::

## Utiliser les variables

Maintenant, **remplacez les couleurs répétées par les variables** avec `var()`:

```css
.carte-nyan {
    background-color: #0a2540;
    //highlight-next-line
    border: 2px solid var(--couleur-principale);
    border-radius: 8px;
    padding: 20px;
    text-align: center;
}

header p {
    //highlight-next-line
    color: var(--couleur-texte-pale);
    font-size: 16px;
}

.carte-nyan h3 {
  //highlight-next-line
    color: var(--couleur-accent);
    margin: 0 0 8px 0;
    font-size: 20px;
}

.description {
  //highlight-next-line
    color: var(--couleur-texte-pale);
    font-size: 14px;
    margin-bottom: 12px;
}

.badge {
    display: inline-block;
    //highlight-next-line
    background-color: var(--couleur-principale);
    color: white;
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: bold;
}

footer {
    text-align: center;
    margin-top: 40px;
    //highlight-next-line
    color: var(--couleur-accent);
    font-size: 14px;
}
```

## Tester la puissance des variables

**Maintenant, amusez-vous à changer seulement les valeurs dans `:root` :**

```css
:root {
    --couleur-principale: #9933ff;   /* Violet au lieu de bleu */
    --couleur-accent: #ff6b6b;       /* Rouge/rose au lieu d'orange */
    --couleur-texte-pale: #cccccc;
}
```

Les bordures, les badges, les titres et le footer changent automatiquement! 🎉

## Code CSS final avec variables

```css
:root {
    --couleur-principale: #0099ff;
    --couleur-accent: #ffa500;
    --couleur-texte-pale: #cccccc;
}

body {
    background-color: #001a33;
    color: #ffffff;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
}

header {
    text-align: center;
    margin-bottom: 40px;
}

h1 {
    color: #ff6b6b;
    font-size: 48px;
    margin-bottom: 8px;
}

header p {
    color: var(--couleur-texte-pale);
    font-size: 16px;
}

.grille-nyan {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    max-width: 800px;
    margin: 0 auto;
}

.carte-nyan {
    background-color: #0a2540;
    border: 2px solid var(--couleur-principale);
    border-radius: 8px;
    padding: 20px;
    text-align: center;
}

.image-nyan {
    width: 150px;
    height: 150px;
    object-fit: contain;
    margin-bottom: 16px;
}

.carte-nyan h3 {
    color: var(--couleur-accent);
    margin: 0 0 8px 0;
    font-size: 20px;
}

.description {
    color: var(--couleur-texte-pale);
    font-size: 14px;
    margin-bottom: 12px;
}

.badge {
    display: inline-block;
    background-color: var(--couleur-principale);
    color: white;
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: bold;
}

footer {
    text-align: center;
    margin-top: 40px;
    color: var(--couleur-accent);
    font-size: 14px;
}
```