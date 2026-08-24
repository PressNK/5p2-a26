---
---

# 📚 Utiliser les outils de développement du navigateur

Il peut parfois être difficile de comprendre ce qui se produit visuellement dans le navigateur. On a un visuel en tête, on croit avoir écrit le bon CSS, mais visiblement le navigateur a un avis différent! 😉

Pour déboguer le CSS, on peut utiliser les outils de développement web à partir de Firefox, Chrome ou votre navigateur favoris. Peu importe le navigateur, ils se ressemblent tous un peu.

Les outils de développeurs de Firefox sont présentés ici.

## Ouvrir les outils de développement Web

1. Premièrement, assurez-vous d'être sur la page Web que vous voulez déboguer
    ![img](./img/dev-tools/page.png)
2. Ensuite, utilisez le menu `Outils` -> `Outils du navigateur` -> `Outils de développement Web`
    ![img](./img/dev-tools/outils-menu.png)

    :::info
    Vous pouvez aussi faire un clic droit sur un élément dans la page et choisir `Inspecter`

    ![img](./img/dev-tools/inspecter.png)
    :::

## Onglet `Inspecteur`

Plusieurs onglets sont disponibles pour déboguer plusieurs aspects de notre page Web. La portion qui nous intéresse pour ce cours est l'onglet `Inspecteur`.

![img](./img/dev-tools/inspector-open.png)

Le panneau de gauche vous permet de sélectionner un élément HTML et les panneaux de droite vous donnent de l'information sur l'élément sélectionné. Par exemple, dans l'exemple précédent, `body` est sélectionné et on voit bien les règles CSS appliquées à ce dernier, en plus du modèle de boîte:

![img](./img/dev-tools/inspector-highlighted.png)

## Visualiser le principe de cascade

Les outils de développement pourront vous renseigner sur la ou les règles ayant priorité sur un élément et celles qui ont été écrasées selon le principe de cascade.

Par exemple, dans l'exemple ici, deux règles s'appliquent à l'élément, mais seulement la plus spécifique est appliquée. L'autre règle est rayée pour vous montrer qu'elle est ignorée et remplacée par une plus spécifique.

![img](./img/dev-tools/dev-tools-cascade.png)

## Modifier le CSS dans les outils de développement

Si vous voulez tester quelque chose rapidement, vous pouvez faire une modification directement dans les outils de développeur et la modif sera appliquée à la page!

:::caution
Ces modifications sont temporaires, si vous rechargez la page, elles sont perdues. Parfait pour tester quelque chose rapidement, mais vous devrez répliquer dans votre fichier CSS si vous voulez conserver les changements.
:::

![img](./img/dev-tools/modif-style.gif)

## Sélectionner un élément sur la page

Le bouton suivant vous permet de sélectionner un élément dans la page à l'aide de la souris.

![img](./img/dev-tools/select.png)




