---
---

# 🏉 La méthodologie SCRUM — Les fondements

## Définition

:::info Selon le Scrum Guide 2020
Scrum est un **cadre de travail léger** qui aide les personnes, les équipes et les organisations à générer de la valeur grâce à des solutions adaptatives pour des problèmes complexes.
:::

- Il est basé sur les [principes Agile](./01-principes-agile.md)
- Il met l'accent sur des **équipes autogérées** afin d'atteindre les objectifs
- 📺 [Vidéo expliquant la méthodologie SCRUM en 10 minutes](https://www.youtube.com/watch?v=anZcEIQlpoY)

## La composition de l'équipe SCRUM (Scrum Team)

| Rôle             | Responsabilité principale                                                     |
| ------------------ | ---------------------------------------------------------------------------------- |
| **Product Owner**     | Représente le client, priorise le *product backlog*, maximise la valeur du produit    |
| **Scrum Master**      | Facilite les événements Scrum, retire les obstacles, s'assure que le cadre est respecté |
| **Développeurs**      | Réalisent le travail nécessaire pour créer un incrément utilisable                     |

:::tip Caractéristiques de l'équipe
- Les membres de l'équipe sont **pluridisciplinaires**
- Ce sont des **généralistes**, et non des spécialistes
- Les équipes doivent rester **petites** — généralement **moins de 10 personnes**
:::

### À qui je m'adresse ?

| N° | Situation                                                                                     |
|----|-----------------------------------------------------------------------------------------------|
| 1  | Je ne comprends pas ce que la story demande exactement.                                       |
| 2  | Mon environnement de développement ne compile plus depuis ce matin.                           |
| 3  | Le Product Owner m'a ajouté une tâche en plein milieu du sprint et je ne sais pas quoi faire. |
| 4  | Je trouve que la mêlée quotidienne ne sert à rien et dure trop longtemps.                     |
| 5  | Je voudrais savoir si je peux prendre congé vendredi.                                         |

<details>
<summary>Voir la réponse</summary>

| N° | Réponse                                                                                                     |
|----|-------------------------------------------------------------------------------------------------------------|
| 1  | **Product Owner**. C'est précisément sa raison d'être.                                                      |
| 2  | **Un collègue développeur**. Après avoir cherché seul 30 à 60 minutes.                                      |
| 3  | **Scrum Master**. Protéger le sprint est exactement son mandat. Et non, vous n'êtes pas obligé de dire oui. |
| 4  | **Scrum Master**, ou mieux : en rétrospective de sprint. C'est la réunion qui existe pour ça.               |
| 5  | **Votre gestionnaire**. Scrum ne remplace pas la structure de l'entreprise.                                 |

Vous venez de vous doter d'un détecteur.

</details>

## Le récit d'utilisateur (User Story)

Le récit d'utilisateur n'est pas un élément propre à Scrum, mais il y est grandement utilisé, notamment dans le *product backlog*. Cette approche permet de décrire un besoin que **tout le monde peut comprendre** — peu importe son expertise, ce qui en fait un excellent outil pour une équipe multidisciplinaire.

### Format

```
En tant que <qui>, je veux <quoi> afin de <pourquoi>
```

:::tip Exemple
« En tant que **responsable des achats**, je veux **identifier les produits qui ont moins de 10 items en inventaire**, afin de **planifier la commande de ces articles**. »
:::

À l'intérieur du récit d'utilisateur, l'équipe ajoute des éléments d'analyse et des tâches à réaliser.

### Critères d'acceptation

Une story sans critères d'acceptation est **ingérable** : personne ne sait quand elle est finie. Le format le plus répandu en entreprise tient en trois mots :

| Mot                            | Ce qu'on écrit                                                                                             |
|--------------------------------|------------------------------------------------------------------------------------------------------------|
| **Étant donné**                | Le contexte de départ. « Étant donné un utilisateur connecté avec le rôle gestionnaire… »                  |
| **Quand**                      | L'action. « …quand il clique sur Exporter… »                                                               |
| **Alors**                      | Le résultat observable. « …alors un fichier .xlsx est téléchargé et contient une ligne par client actif. » |

**Ils sont écrits avant de commencer à coder, pas après.**

## La définition de terminé (Definition of Done)

*Definition of Done* (DoD) en anglais.

- Pour chacun des éléments du *product backlog*, il faut identifier les **conditions** qui déterminent si l'élément est terminé ou non
- Elle peut prendre la forme d'une **liste de contrôle** (checklist) d'éléments à valider
- La définition est établie **avec le Product Owner et l'équipe de développement**

:::caution
Sans une définition de terminé claire, chaque membre de l'équipe pourrait avoir une idée différente de ce que signifie « terminer » une tâche — une source fréquente de malentendus en équipe multidisciplinaire.
:::

## En résumé

1. Scrum est un cadre de travail léger basé sur les principes Agile
2. L'équipe est composée de 3 rôles complémentaires : Product Owner, Scrum Master, Développeurs
3. Le récit d'utilisateur et la définition de terminé sont deux outils qui facilitent la compréhension commune du travail à faire

## Références

1. ScrumGuides.org, *The 2020 Scrum Guide*, [scrumguides.org](https://scrumguides.org/scrum-guide.html), 2021-11-01
2. Wikipédia, *Récit utilisateur*, [fr.wikipedia.org](https://fr.wikipedia.org/wiki/R%C3%A9cit_utilisateur), 2021-11-01

