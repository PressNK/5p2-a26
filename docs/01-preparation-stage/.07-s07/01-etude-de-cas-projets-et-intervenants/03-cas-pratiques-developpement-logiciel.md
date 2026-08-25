---
---

# 💻 Cas pratiques — Développement logiciel en équipe

Ces cas sont davantage orientés vers le **développement logiciel** et se prêtent bien à un exercice d'équipe : imaginez que vous formez une **équipe de 3 personnes** et que vous devez identifier les livrables, les découper en tâches, puis les **ordonner dans le temps** *(voir le [séquencement des tâches et le diagramme de Gantt](../../03-s03/01-planification-de-projet/01-comment-planifier-un-projet.md) vus à la semaine 3)*.

## Cas 1 — Système de ventes en ligne

> Il s'agit d'un système classique de ventes en ligne pour des biens de consommation. Le client peut acheter un produit et consulter ses anciennes commandes. Le fournisseur doit gérer son inventaire de produits, avoir des rapports sur ses ventes et ses profits, et planifier des promotions pour des produits spécifiques.

:::tip Pistes de réflexion
- Quels sont les **livrables principaux** (ex. : module client, module inventaire, module rapports, module promotions)?
- Quelles tâches ont des **dépendances**? (ex. : peut-on développer les rapports de ventes avant que le module d'achat existe?)
- Si vous êtes seulement 3 dans l'équipe, comment **répartiriez-vous** ces livrables entre vous?
:::

## Cas 2 — Agent de monitoring

> Il faut développer un agent qui surveille l'utilisation des ressources des serveurs. L'agent doit être un **service Windows**. Il faut collecter le nom du serveur, la version de Windows, la date de la dernière mise à jour, les adresses IP, et surveiller :
> - l'espace disque;
> - l'utilisation du CPU;
> - l'utilisation de la RAM;
> - l'utilisation du réseau;
> - l'augmentation trop rapide de la base de données et des fichiers journaux (logs).
>
> Il faut générer des alertes par courriel et conserver les données collectées dans une base de données.

:::info Ce cas implique...
- Une bonne compréhension **système** (ce qu'est un service Windows, comment lire les compteurs de performance)
- Une composante **base de données** (stockage des données collectées)
- Une composante de **notification** (génération d'alertes par courriel)

Un tel projet pourrait facilement impliquer un **développeur back-end**, un **administrateur de base de données**, et un **technicien réseau/système** selon la répartition des tâches.
:::

## Cas 3 — Collecte de données dans une usine

> *(Ce cas fait référence à un exercice pratique antérieur du cours — le cas de collecte de données industrielles.)*

Ce type de cas touche généralement à la collecte de données provenant de capteurs ou d'équipements industriels, un domaine en forte croissance avec l'essor de l'**Internet des objets (IoT)** dans le secteur manufacturier — un des [secteurs en croissance](../../06-s06/01-metiers-et-entreprises-en-ti/02-les-entreprises-et-linformatique.md) mentionnés à la semaine 6.

## Synthèse — Ce que ces cas ont en commun

Peu importe le domaine (vente en ligne, monitoring de serveurs, ou collecte de données industrielles), remarquez que chaque projet nécessite généralement :

1. Une composante de **collecte ou saisie de données**
2. Une composante de **stockage** (base de données)
3. Une composante de **présentation** (interface, rapport, tableau de bord)
4. Parfois, une composante de **notification ou d'automatisation**

:::tip
Reconnaître ces grands blocs récurrents dans un projet vous aide à rapidement identifier les livrables possibles, même face à un projet totalement nouveau — une compétence précieuse dès votre premier jour de stage.
:::


