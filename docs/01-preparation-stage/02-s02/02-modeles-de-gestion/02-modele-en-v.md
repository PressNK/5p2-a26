---
---

# 🔠 Le modèle en V

## Introduction

- Méthodologie commune entre le **client** et la **société de service** réalisant le développement
- Des modèles de cycle de vie ont été mis au point définissant :
    - les étapes du développement;
    - les documents à produire permettant de valider chacune des étapes avant de passer à la suivante;
    - à la fin de chaque phase, des **revues** sont organisées avant de passer à la suivante.
- Le cycle en V est devenu un **standard dans l'industrie logicielle depuis 1980**, pour répondre aux problèmes de réactivité du style cascade

## Fonctionnement

- La **branche descendante** représente les étapes de **conception**
- La **branche montante** représente les étapes de **tests**
- Chaque étape de conception correspond à une **étape de test qui lui est spécifique**

:::tip
On dit souvent que le modèle en V « répond » à chaque étape de conception par une étape de test équivalente : par exemple, la conception détaillée est validée par des tests unitaires, l'architecture par des tests d'intégration, et les besoins globaux par des tests d'acceptation.
:::

## Avantages et inconvénients

Le cycle en V...

- permet une **meilleure anticipation**
- présente des **tests bien structurés**
- assure un **contrôle de qualité** sur chaque phase

Mais...

- le cadre de développement est **rigide**
- la durée est souvent **trop longue**
- le produit **apparaît très tard**

## En résumé

| ✅ Avantages                    | ❌ Inconvénients                  |
| --------------------------------- | ------------------------------------ |
| Meilleure anticipation des risques | Cadre de développement rigide        |
| Tests bien structurés              | Durée souvent trop longue            |
| Contrôle qualité à chaque phase    | Produit livré très tard              |

## Références

1. *Cycle en V*, [conception-informatique.com](http://www.conception-informatique.com/cycle-en-v/4-cycle-en-v), consulté le 2015-05-04
2. Wikipédia, *Cycle en V*, [fr.wikipedia.org](http://fr.wikipedia.org/wiki/Cycle_en_V), consulté le 2015-05-04

