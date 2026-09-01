---
---

# 🗂️ Cas pratiques — Services et infrastructure informatique

Voici une série de cas inspirés de projets réels, où l'informatique doit répondre à un besoin d'affaires touchant à la fois le **développement logiciel** et l'**infrastructure technique**. Pour chacun, tentez d'identifier les **livrables**, les **tâches** et les **métiers** impliqués, en suivant la [méthode d'analyse](./01-methode-danalyse-dun-cas.md) présentée précédemment.

## Cas — Logiciel GPS

> Tous les camions de livraison de la compagnie sont équipés d'un module GPS pour recueillir plusieurs données sur leur utilisation : itinéraire, consommation d'essence, kilométrage, temps d'utilisation du moteur, temps d'arrêt. Le module GPS a une carte SIM pour envoyer les données au serveur du fournisseur.

**Options à considérer :**
- Créer une API Web publique pour consulter les données GPS, **ou** utiliser directement l'API du fournisseur
- Créer une base de données interne, **ou** utiliser la base de données du fournisseur
- Créer un tableau de bord pour la consultation des données
- Mettre à jour les modules GPS (port série, clé USB, ou réseau sans-fil)

:::tip Questions à vous poser
Quels métiers seraient impliqués si l'entreprise décide de **construire sa propre infrastructure** (API, base de données, tableau de bord) plutôt que d'utiliser directement les outils du fournisseur? Quel est l'impact sur le temps et le coût du projet?
:::

## Cas — Création d'une nouvelle division

> La compagnie vient de créer une nouvelle division, avec son propre nom de domaine. Il faudra créer un site Web informatif en WordPress. Les employés de cette division auront une adresse courriel de la maison mère et une de la nouvelle division. Cette division aura également sa propre ligne téléphonique.

**Options à considérer :**
- Créer le nouveau site Web par une **agence externe**, par l'**équipe marketing interne**, ou par l'**équipe informatique**
- Créer un nouveau serveur courriel : **serveur interne** ou **solution infonuagique**
- Ajouter la nouvelle ligne téléphonique

## Cas — Automatisation du classement

> La compagnie veut automatiser le classement des dossiers problématiques. Un dossier doit répondre à plusieurs critères pour être classé « problématique ». Les dossiers doivent être facilement identifiés et assignés au bon vérificateur, avoir un statut d'analyse, et un formulaire pour identifier les actions à entreprendre.

**Éléments à réaliser :**
- Notifier l'analyste des nouveaux dossiers (courriel quotidien avec la liste des dossiers à analyser)
- Créer un tableau de bord avec le statut d'analyse
- Créer le formulaire d'actions à entreprendre
- Créer les outils de configuration

## Cas — Mise à niveau des serveurs

> La compagnie utilise des serveurs Windows 2012 R2 dont le support prend fin le 23 octobre 2023. Elle désire migrer vers Windows 2019 avec une nouvelle infrastructure de serveurs virtualisés et une nouvelle solution de sauvegarde. Le lien internet actuel n'est pas assez performant pour la sauvegarde hors site.

**Éléments à réaliser :**
- Concevoir la nouvelle infrastructure serveur
- Installer le matériel, les systèmes d'exploitation et configurer les serveurs
- Migrer le lien internet (augmenter la capacité actuelle, ou installer un nouveau lien avec ou sans changement d'adresses IP)
- Déménager un serveur existant dans un centre de données

:::caution
Ce cas implique principalement des rôles **techniques et d'infrastructure** (niveau 2-3), contrairement aux cas précédents davantage orientés développement logiciel. Remarquez comment les métiers impliqués varient énormément selon la nature du projet!
:::

## Cas — Élimination des doubles entrées

> La compagnie utilise 3 systèmes indépendants qui ne communiquent pas entre eux. Par exemple, l'information des clients doit être saisie dans les 3 systèmes séparément.

**Options à considérer :**
- Utiliser un **système maître** avec copie automatisée des données (directement en base de données, ou via une API)
- Créer un **nouveau formulaire unifié** indépendant
- **Uniformiser** les données existantes (manuellement, ou avec un outil de conversion de données)

## Cas — Version 2 du logiciel

> La compagnie utilise un vieux logiciel en Visual Basic 6, devenu très complexe à modifier. Elle désire le refaire en Web avec une architecture moderne. Certains modules devront être repensés, d'autres seront une copie identique. Les données de l'ancien système devront être migrées vers le nouveau.

:::tip
Ce type de projet est très fréquent en entreprise — on l'appelle souvent un projet de **modernisation** ou de **réécriture** (*rewrite*). Quels risques particuliers pensez-vous que ce type de projet comporte, par rapport à un projet entièrement nouveau?
:::

## Cas — Automatisation de la facturation

> La compagnie veut automatiser la facturation à l'aide d'une solution de **reconnaissance optique de caractères (OCR)** pour convertir les factures PDF en métadonnées. Le logiciel OCR récupère les factures dans une boîte courriel, et un logiciel de validation manuelle traite les exceptions. Les factures et métadonnées sont envoyées dans un système de gestion documentaire infonuagique, qui gère les approbations. Finalement, les métadonnées sont envoyées au logiciel comptable — mais l'envoi direct du système documentaire au logiciel comptable n'est pas possible techniquement.

:::info
Ce cas comporte une **contrainte technique explicite** (l'intégration directe est impossible). Cela illustre bien qu'un projet informatique doit souvent composer avec des **limitations réelles des systèmes existants**, et pas seulement avec les besoins idéaux du client.
:::

