---
---

# 🔑 Solutions — Cas guidés : Développement logiciel en équipe

:::danger Document réservé à l'enseignant
Ce fichier est caché du site (préfixe « . »), mais il reste visible sur le dépôt GitHub public.
:::

Ces solutions représentent le **niveau attendu** d'un étudiant qui fait cet exercice pour la première fois. Accepter toute réponse où le **livrable est un nom**, la **tâche est un verbe** et le **métier est raisonnable**. L'ordre des lignes dans le tableau n'a pas d'importance. Un **développeur full stack** est toujours une réponse acceptable à la place d'un front-end ou d'un back-end, s'il est justifié.

---

## Cas 1 — L'inscription au tournoi de soccer ⭐

| Livrable | Tâches pour le produire | Métier |
|---|---|---|
| Formulaire d'inscription en ligne | Dessiner la maquette du formulaire; programmer le formulaire; vérifier que les champs sont bien remplis (âge, téléphone); tester le formulaire | Développeur front-end |
| Base de données des inscriptions | Créer la table des inscriptions; programmer l'enregistrement d'une inscription | Développeur back-end (ou DBA) |
| Courriel de confirmation | Rédiger le message; programmer l'envoi du courriel après l'inscription; tester l'envoi | Développeur back-end |

**Question d'ordre :** non. La base de données doit exister pour qu'on puisse enregistrer et vérifier une inscription. Par contre, la **maquette du formulaire** peut être faite **en même temps** que la création de la base de données.

**Ordre :** (maquette du formulaire **et** création de la base de données, en parallèle) → programmer l'enregistrement → programmer le courriel → tester le tout.

**À accepter aussi :** un **analyste d'affaires** qui rencontre le club pour confirmer les informations à demander.

---

## Cas 2 — Le prêt d'ordinateurs à la bibliothèque ⭐

| Livrable | Tâches pour le produire | Métier |
|---|---|---|
| Base de données des portables et des réservations | Créer la table des portables; créer la table des réservations; entrer la liste des portables existants | Développeur back-end (ou DBA) |
| Page des portables disponibles | Programmer la recherche des portables libres pour une journée; programmer l'affichage de la page | Développeur back-end (recherche), développeur front-end (page) |
| Page de réservation | Programmer le formulaire de réservation; empêcher deux réservations du même portable la même journée; tester | Développeur front-end (formulaire), développeur back-end (règle) |
| Page du personnel (réservations du jour) | Programmer la liste des réservations du jour; tester avec quelques réservations | Développeur front-end |

**Réponse à l'indice :** le livrable caché est la **base de données**. Les trois pages en ont besoin pour lire ou enregistrer les informations.

**Ordre :** base de données → page des portables disponibles → page de réservation → page du personnel. Les maquettes des trois pages peuvent être faites en parallèle avec la base de données.

**Piège fréquent :** oublier la règle « un portable ne peut pas être réservé deux fois la même journée ». C'est une **règle d'affaires** (back-end).

---

## Cas 3 — La commande en ligne d'une boulangerie ⭐⭐

| Livrable | Tâches pour le produire | Métier |
|---|---|---|
| Document d'analyse des besoins | Observer les commandes au comptoir; rencontrer Rose; écrire la liste des besoins | Analyste d'affaires |
| Base de données des produits et des commandes | Créer les tables des produits et des commandes | Développeur back-end (ou DBA) |
| Catalogue en ligne | Dessiner la maquette; programmer l'affichage des produits et des prix | Développeur front-end |
| Panier et commande | Programmer le panier; calculer le total; enregistrer la commande | Développeur front-end (panier), développeur back-end (calcul et enregistrement) |
| Paiement en ligne | Choisir un service de paiement (Stripe, PayPal); relier le site au service; tester un paiement | Développeur back-end |
| Page de gestion pour Rose | Programmer la liste des commandes du jour; programmer l'ajout et la modification des produits | Développeur full stack |

**Réponse aux indices :**
- On **n'écrit pas** un système de paiement au complet : c'est complexe et risqué. On utilise un **service de paiement existant**. Le **développeur back-end** fait le lien (intégration) avec ce service.
- La dernière phrase cache le livrable **document d'analyse des besoins**, réalisé par l'**analyste d'affaires**.

**Ordre :** analyse des besoins → base de données → (catalogue **et** page de gestion en parallèle) → panier → paiement → tests de bout en bout.

**À accepter aussi :** un **technicien niveau 2** ou un **analyste technique** pour l'hébergement du site, même si ce n'est pas écrit dans le cas.

---

## Cas 4 — Le tableau de bord des ventes ⭐⭐

| Livrable | Tâches pour le produire | Métier |
|---|---|---|
| Nouvelle base de données des rapports | Étudier la base de données du système de caisse; concevoir la nouvelle base de données; la créer | Administrateur de base de données (DBA) |
| Copie de nuit des ventes | Programmer la copie des ventes de la veille; planifier la copie chaque nuit; vérifier que les chiffres sont identiques | Développeur back-end (ou DBA) |
| Tableau de bord | Dessiner la maquette avec le directeur; programmer les graphiques (ventes par magasin, top 10) | Développeur front-end |
| Alerte de rupture de stock | Définir avec le directeur ce que veut dire « presque en rupture »; programmer l'alerte; tester | Développeur back-end |

**Réponse aux indices :**
- Le **DBA** est le mieux placé pour concevoir la nouvelle base de données et s'assurer que la copie ne ralentit pas les caisses.
- **Équipe de 3 — exemple de répartition :**
  - **Personne 1 (DBA / back-end)** : nouvelle base de données, puis copie de nuit.
  - **Personne 2 (front-end)** : pendant ce temps, maquette du tableau de bord avec le directeur, puis graphiques avec de **fausses données** en attendant la vraie base.
  - **Personne 3 (back-end)** : pendant ce temps, définition de la règle de rupture de stock avec le directeur, puis programmation de l'alerte.

**Ordre :** nouvelle base de données → copie de nuit → brancher le tableau de bord et l'alerte sur les vraies données → tester avec le directeur.

**Piège fréquent :** brancher le tableau de bord directement sur la base de données des caisses. Le cas le précise : il ne faut pas ralentir les caisses.

**À accepter aussi :** un **analyste d'affaires** pour préciser les besoins du directeur.

---

## Cas 5 — La prise de rendez-vous d'une clinique de physiothérapie ⭐⭐⭐

| Livrable | Tâches pour le produire | Métier |
|---|---|---|
| Document d'analyse des besoins | Rencontrer les réceptionnistes et les physiothérapeutes; décrire comment un patient prend rendez-vous; écrire les règles (durée d'un rendez-vous, annulation) | Analyste d'affaires |
| Plan d'intégration avec le logiciel de la clinique | Vérifier si le logiciel de la clinique peut recevoir des rendez-vous (API); choisir comment relier les deux systèmes | Architecte de solution |
| Application Web de prise de rendez-vous | Dessiner les maquettes; programmer l'affichage des plages libres; programmer la réservation et l'annulation; tester | Développeur front-end (pages), développeur back-end (règles et réservations) |
| Lien avec le logiciel de la clinique | Programmer l'envoi des rendez-vous au logiciel de la clinique; tester qu'un rendez-vous apparaît bien des deux côtés | Développeur back-end |
| Textos de rappel | Choisir un service d'envoi de textos; programmer l'envoi la veille du rendez-vous; tester | Développeur back-end |
| Serveur sécurisé | Concevoir la sécurité du serveur (données de santé); préparer et configurer le serveur; mettre l'application en ligne | Spécialiste en sécurité (niveau 3) pour la conception, administrateur réseau (niveau 2) pour la configuration |
| Réceptionnistes formées | Préparer un guide; former les réceptionnistes à gérer les annulations | Analyste fonctionnel |

*Accepter 6 ou 7 livrables : « plan d'intégration » et « lien avec le logiciel » peuvent être regroupés.*

**Réponse aux indices :**
- La question « comment communiquer avec le logiciel de la clinique » relève de l'**architecte de solution**. C'est le **plus grand risque** du projet : si l'intégration est impossible, la solution doit changer.
- Les données de santé sont sensibles : la sécurité du serveur est confiée à un **spécialiste de niveau 3**.
- Les sprints de deux semaines sont animés par un **Scrum Master**. Ce n'est pas un livrable, mais c'est un métier impliqué dans le projet.
- **Équipe de 3 — exemple de répartition :**
  - **Personne 1 (front-end)** : maquettes et pages de l'application.
  - **Personne 2 (back-end)** : règles de réservation et base de données.
  - **Personne 3 (back-end)** : lien avec le logiciel de la clinique et textos de rappel. Cette personne peut aussi jouer le rôle de **Scrum Master**.

**Ordre :** analyse des besoins **et** plan d'intégration (en parallèle) → (application, lien et serveur en parallèle, sprint par sprint) → textos de rappel → mise en ligne → formation des réceptionnistes.

**Pièges fréquents :**
- Commencer à programmer sans savoir si le logiciel de la clinique accepte de recevoir des rendez-vous.
- Oublier les livrables qui ne sont pas du code : **serveur sécurisé** et **formation**.

**À accepter aussi :** un **gestionnaire de projet** pour coordonner la clinique, l'équipe et le fournisseur du logiciel de gestion.
