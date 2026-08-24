---
---

# 🎯 Jira et le suivi de projet Agile

**Jira** (développé par Atlassian) est l'un des outils les **plus utilisés dans l'industrie du développement logiciel** pour planifier, suivre et gérer le travail d'une équipe Agile. Si vous faites un stage en développement, il y a de fortes chances que vous y soyez exposé.

## Le vocabulaire de Jira (et de Scrum)

| Terme               | Définition                                                                     |
| --------------------- | ----------------------------------------------------------------------------------- |
| **Backlog**             | Liste complète et priorisée de tout le travail à faire sur le produit                  |
| **Epic**                | Grande fonctionnalité regroupant plusieurs tâches plus petites                          |
| **User story**          | Besoin exprimé du point de vue de l'utilisateur (« En tant que... je veux... afin de... ») |
| **Tâche (task)**        | Unité de travail technique, pas nécessairement liée à une user story                     |
| **Bug**                 | Anomalie à corriger                                                                     |
| **Sprint**              | Période fixe (souvent 1 à 4 semaines) pendant laquelle l'équipe réalise un ensemble de tâches |
| **Story points**        | Unité relative d'estimation de l'effort (souvent suite de Fibonacci : 1, 2, 3, 5, 8, 13...)   |
| **Story de test / Definition of Done** | Critères à respecter pour qu'une tâche soit considérée réellement terminée   |

:::tip Exemple de user story
« En tant qu'**utilisateur du site**, je veux **réinitialiser mon mot de passe par courriel** afin de **récupérer l'accès à mon compte si je l'oublie**. »
:::

## Les tableaux dans Jira

Jira propose deux types de tableaux, correspondant aux deux approches vues à la page précédente :

- **Tableau Scrum** : organisé par sprint, avec une planification en cycles fixes
- **Tableau Kanban** : flux continu, sans notion de sprint

## Le cycle de vie d'un ticket

Un ticket (tâche) Jira suit généralement un flux de statuts semblable à :

```
À faire → En cours → En révision (code review) → Test (QA) → Terminé
```

Chaque changement de statut doit être fait par la personne responsable, ce qui permet à **toute l'équipe multidisciplinaire** (développeurs, testeurs, chef de produit) de voir l'avancement réel du projet en tout temps, sans avoir à demander à chaque personne individuellement.

:::caution
Un ticket qui n'est jamais mis à jour est **pire qu'inutile** : il donne une fausse impression de l'état du projet à toute l'équipe, y compris au chef de produit et au client. Mettez vos tickets à jour quotidiennement!
:::

## Le burndown chart (graphique d'avancement)

Un graphique très utilisé en Scrum qui montre la quantité de travail **restant** à faire au fil du sprint, comparée à une ligne idéale.

- Si la ligne réelle est **au-dessus** de la ligne idéale : l'équipe prend du retard
- Si elle est **en dessous** : l'équipe est en avance

Ce graphique permet de repérer rapidement les problèmes de planification pendant un sprint, plutôt qu'à la toute fin.

## La rétrospective de sprint

À la fin de chaque sprint, l'équipe se réunit pour une **rétrospective** — un concept que vous avez déjà vu à la semaine 2 avec la [rétrospection en phase de clôture](../../../02-s02/01-cycle-de-vie-projet/02-phases-du-cycle-de-vie.md). En Agile, cette pratique est répétée à **chaque sprint** plutôt qu'une seule fois à la fin du projet, ce qui permet une amélioration continue beaucoup plus rapide.

## Bonnes pratiques pour un stagiaire dans Jira

1. **Assignez-vous** les tickets sur lesquels vous travaillez réellement
2. **Commentez** vos tickets pour expliquer les décisions prises ou les blocages rencontrés
3. **Liez** vos commits ou vos demandes de fusion (*pull requests*) au ticket correspondant, si l'intégration avec votre outil de code source le permet
4. Ne laissez jamais un ticket « En cours » pendant des semaines sans mise à jour

## Alternatives à Jira

| Outil                   | Contexte typique d'utilisation                                     |
| ------------------------- | -------------------------------------------------------------------- |
| **Azure DevOps Boards**     | Écosystème Microsoft, souvent combiné avec Azure Repos / Pipelines     |
| **GitHub Projects**         | Équipes qui utilisent GitHub comme dépôt de code (voir page suivante)   |
| **Linear**                  | Startup technologiques, interface très rapide et épurée                |
| **Asana / ClickUp / Monday.com** | Équipes moins techniques, gestion de projet plus généraliste       |

## En résumé

1. Jira est l'outil de référence pour suivre le travail Agile en développement logiciel
2. Le vocabulaire (backlog, epic, user story, sprint, story points) est à connaître, car il est utilisé même dans d'autres outils similaires
3. Garder ses tickets à jour est une responsabilité individuelle essentielle au bon fonctionnement de toute l'équipe multidisciplinaire


