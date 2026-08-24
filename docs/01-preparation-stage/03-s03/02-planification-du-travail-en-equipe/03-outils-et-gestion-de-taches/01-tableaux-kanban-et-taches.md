---
---

# 📋 Les tableaux Kanban et la gestion visuelle des tâches

Avant de voir des outils spécifiques comme Jira, il faut comprendre le concept qui les sous-tend presque tous : le **tableau Kanban**.

## Qu'est-ce que Kanban?

**Kanban** (« étiquette visuelle » en japonais) est une méthode de gestion du travail popularisée par Toyota, adaptée ensuite au développement logiciel. Le principe central est de **visualiser le flux de travail** à l'aide d'un tableau divisé en colonnes.

### Le tableau Kanban de base

| À faire (To Do)     | En cours (In Progress)   | En révision (Review)    | Terminé (Done)       |
| ---------------------- | --------------------------- | --------------------------- | ------------------------ |
| Tâche A                 | Tâche C                       | Tâche E                       | Tâche G                    |
| Tâche B                 | Tâche D                       | Tâche F                       | Tâche H                    |

Chaque **tâche** (souvent appelée *carte* ou *ticket*) se déplace de gauche à droite au fur et à mesure de son avancement.

## Les limites de travail en cours (WIP limits)

Un principe clé de Kanban est de **limiter le nombre de tâches** qui peuvent être « en cours » en même temps.

:::tip Pourquoi limiter le travail en cours?
Faire 5 choses en même temps est presque toujours moins efficace que d'en terminer une avant de commencer la suivante (changement de contexte, perte de concentration). Une limite de « 3 tâches en cours max » force l'équipe à **terminer** avant de **commencer** autre chose.
:::

## D'où viennent les tâches d'un tableau?

- Le **backlog** est la liste de toutes les tâches à faire, non encore planifiées
- Une tâche est déplacée du backlog vers « À faire » quand l'équipe décide de s'y attaquer bientôt
- Chaque tâche devrait être **suffisamment petite** pour être complétée en quelques heures ou quelques jours

## Les principaux outils Kanban du marché

| Outil                  | Particularité                                                         |
| ------------------------ | -------------------------------------------------------------------------- |
| **Trello**                 | Très simple, visuel, idéal pour petites équipes ou projets personnels        |
| **Microsoft Planner**      | Intégré à Teams (voir section précédente)                                     |
| **Jira**                    | Très complet, pensé pour le développement logiciel et Scrum (voir page suivante) |
| **GitHub Projects**        | Intégré directement aux dépôts de code (voir page suivante)                    |
| **Notion**                  | Tableaux Kanban combinés à de la documentation et des bases de données          |

## Kanban vs Scrum

Vous avez vu le **cycle itératif** à la semaine 2 — Kanban et Scrum sont deux façons différentes d'organiser ce travail itératif :

| Aspect                | Kanban                                    | Scrum                                             |
| ----------------------- | -------------------------------------------- | ------------------------------------------------------ |
| Rythme                    | Flux continu, sans durée fixe                  | Découpé en **sprints** de durée fixe (souvent 2 semaines) |
| Planification             | Les tâches arrivent au fil de l'eau            | Toutes les tâches d'un sprint sont planifiées à l'avance   |
| Limite de travail          | Limites WIP par colonne                        | Limite naturelle = capacité de l'équipe pour le sprint      |
| Idéal pour                 | Support, maintenance, flux irrégulier de demandes | Développement de nouvelles fonctionnalités par cycles       |

:::info
En pratique, beaucoup d'équipes utilisent une **approche hybride** (parfois appelée *Scrumban*), combinant les sprints de Scrum avec la visualisation et les limites WIP de Kanban.
:::

## En résumé

1. Kanban visualise le travail en colonnes représentant son état d'avancement
2. Les limites de travail en cours (WIP) favorisent la complétion des tâches plutôt que le multitâche
3. Plusieurs outils (Trello, Planner, Jira, GitHub Projects) implémentent ce concept, avec plus ou moins de fonctionnalités avancées

