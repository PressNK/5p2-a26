---
---

# 🛠️ Comment planifier un projet

## Le triangle d'or

La planification d'un projet est toujours contrainte par **trois éléments interreliés** : la **portée** (ce qui doit être livré), le **temps** (l'échéancier) et le **coût** (le budget) — souvent accompagnés d'un quatrième élément central, la **qualité**.

:::tip
Modifier un des sommets du triangle a un impact direct sur les autres. Par exemple, réduire le temps disponible sans augmenter les ressources (coût) risque de réduire la qualité ou la portée du projet.
:::

## L'organigramme des tâches (WBS)

**WBS** est l'acronyme de *Work Breakdown Structure* en anglais.

- Le WBS consiste à **décomposer les biens livrables** en composantes ou tâches de moindre envergure, appelées **« lots de travail »**
- La décomposition s'effectue jusqu'à un **niveau de détail** qui facilite l'estimation et le suivi de chacune des tâches
- Il est nécessaire d'**impliquer les experts du domaine** et les gens qui seront appelés à réaliser ces tâches

### Exemple de WBS en liste

```
1 Document d'analyse
2 Conception
  2.1 BD
  2.2 Modèle objet
3 Programmation
  3.1 Module inventaire
    3.1.1 UI
    3.1.2 Backend
  3.2 Module ventes
4 Serveur
  4.1 OS
  4.2 IIS
5 Test
```

### La règle du 100%

- Pour faciliter l'estimation, le découpage en WBS est **très important**
- Il faut descendre à un niveau de **tâches très granulaires**
- Il est important que **tous les éléments soient listés** à chacun des niveaux et des sous-niveaux
- **L'organigramme doit représenter 100% de l'étendue du projet**

## L'assignation des tâches

- Pour toutes les tâches et tous les livrables identifiés, il est important de **désigner un responsable**
- Cette personne est responsable de s'assurer que les tâches et les livrables seront réalisés
- Le responsable d'une tâche peut être une **équipe** également
- Le **superviseur** de cette équipe devient le responsable *de facto*, et doit s'assurer de **déléguer** la tâche à un membre de son équipe

## Le séquencement des tâches

Le séquencement des tâches implique de **définir l'ordre d'exécution**.

- Pour chacune des tâches, il peut y avoir des **dépendances**
- Une **dépendance** implique que d'autres tâches doivent être exécutées avant de pouvoir la réaliser — les tâches sont alors exécutées **séquentiellement**
- Une tâche **sans dépendance** par rapport à une autre peut être exécutée **en parallèle**
- Un **jalon** (*milestone* en anglais) consiste en une étape à terminer dans la planification du projet — avant d'aller à l'étape suivante, il faut que tous les livrables de ce jalon soient terminés

:::tip Exemple de séquencement
Pour une nouvelle application Web, il faut configurer un serveur et le programmer.

- La **programmation** et la **configuration du serveur de production** peuvent se faire **en parallèle**.
- Pour débuter la programmation, il faut que la **base de données soit créée** — la création de la base de données est une **dépendance** pour la programmation.
- La **mise en service** de l'application sur le serveur de production a comme dépendances la configuration du serveur et la fin de la programmation.
- Si la programmation est estimée à **12 semaines** et la configuration du serveur à **2 semaines**, la configuration peut se faire entre la semaine 1 et 10 pour être dans les temps pour la mise en service.
:::

## Le diagramme de Gantt

- Le diagramme de Gantt est une **représentation graphique** du séquencement des tâches dans un projet
- Pour chacune des tâches, il faut indiquer les **dépendances** et la **durée estimée**
- En intégrant les dépendances et la durée estimée de chacune des étapes, il est possible d'**évaluer rapidement la durée du projet**

:::info Outils en ligne
- [gantt.com](https://www.gantt.com/fr/)
- [Smartsheet – Online Gantt Chart Software](https://www.smartsheet.com/online-gantt-chart-software)
- [Microsoft Project](https://www.microsoft.com/fr-ca/microsoft-365/project/project-management-software)
:::

:::caution
La plupart des outils efficaces sont **payants**. L'avantage d'un tel outil est que si on déplace une date, le reste du projet suit automatiquement — mais ces outils sont généralement **complexes à utiliser**.
:::

## En résumé

1. Définir le triangle d'or (portée, temps, coût, qualité)
2. Décomposer le projet en tâches avec un **WBS** (règle du 100%)
3. **Assigner** un responsable à chaque tâche et livrable
4. **Séquencer** les tâches selon leurs dépendances et identifier les jalons
5. Représenter le tout dans un **diagramme de Gantt**

## Références

1. Wikipédia, *Organigramme des tâches du projet*, [fr.wikipedia.org](https://fr.wikipedia.org/wiki/Organigramme_des_t%C3%A2ches_du_projet), 2021-09-20
2. Wikipédia, *Diagramme de Gantt*, [fr.wikipedia.org](https://fr.wikipedia.org/wiki/Diagramme_de_Gantt), 2021-09-20

