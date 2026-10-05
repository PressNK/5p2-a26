---
---

# 🧩 Cas pratiques — Développement logiciel en équipe

Cette page propose des cas **courts et progressifs** pour appliquer la [méthode d'analyse](./01-methode-danalyse-dun-cas.md) à des projets de **développement logiciel**. Le premier cas est très guidé, les suivants vous laissent plus de liberté. Les derniers cas vous demandent aussi de **répartir le travail dans une équipe de 3 personnes**.

## Avant de commencer : c'est quoi, le développement logiciel en équipe?

:::info Définition
Le **développement logiciel**, c'est la **création** ou la **modification d'une application** (Web, mobile ou de bureau) pour répondre à un besoin : un formulaire, un site de commande, un tableau de bord, un lien entre deux systèmes, etc.

**En équipe**, le travail est **découpé** entre plusieurs personnes qui ont des forces différentes (interface, logique, base de données, analyse, tests). Il faut donc savoir **qui fait quoi** et **ce qui peut être fait en même temps**.
:::

La plupart des applications sont construites avec les mêmes **grands blocs**. Les repérer vous aide à trouver rapidement les livrables :

| Bloc | La question à se poser | Exemples de livrables |
|---|---|---|
| **Saisie** | Comment l'information entre-t-elle dans le système? | Un formulaire d'inscription, une page de commande |
| **Stockage** | Où l'information est-elle conservée? | Une base de données |
| **Logique** | Quelles règles s'appliquent? | Le calcul du prix, la vérification des places disponibles, une API |
| **Présentation** | Comment l'information est-elle affichée? | Une page de liste, un rapport, un tableau de bord |
| **Notification** | Qui doit être averti, et comment? | Un courriel de confirmation, un texto de rappel |

:::tip
Un projet logiciel ne se limite pas au code. Il faut souvent **comprendre le besoin** avant de commencer, **mettre l'application en ligne** sur un serveur et **former les utilisateurs** à la fin. Ces livrables impliquent d'autres métiers que les développeurs.
:::

## Les métiers utiles pour ces cas

Avant de commencer, relisez l'[aide-mémoire](./01-methode-danalyse-dun-cas.md#aide-memoire) (livrable, tâche, métier, ordre), les erreurs fréquentes et le modèle de réponse.

Voici les métiers dont vous aurez besoin pour les cas de cette page, et le type de tâche qu'on leur confie **habituellement**. **Ils ne seront pas tous nécessaires dans chaque cas** : c'est une boîte à outils dans laquelle vous choisissez.

### Les développeurs

| Si la tâche consiste à...                                                          | ...on la confie généralement à     |
|------------------------------------------------------------------------------------|------------------------------------|
| Développer l'interface visuelle (pages, formulaires, boutons) et l'expérience utilisateur | **Développeur front-end**          |
| Développer les règles d'affaires, une API ou un lien entre deux systèmes           | **Développeur back-end**           |
| Faire à la fois l'interface et la logique                                          | **Développeur full stack**         |
| Concevoir l'architecture d'une solution et son intégration avec les autres systèmes | **Architecte de solution / logiciel** |
| Concevoir, optimiser ou migrer une base de données                                  | **Administrateur de base de données (DBA)** |
| Animer les activités Agile de l'équipe (sprints, mêlées) et retirer les obstacles   | **Scrum Master / coach Agile**     |

### Les analystes et la gestion

| Si la tâche consiste à...                                                          | ...on la confie généralement à     |
|------------------------------------------------------------------------------------|------------------------------------|
| Comprendre les besoins du client et des utilisateurs, rédiger l'analyse             | **Analyste d'affaires**            |
| Choisir la bonne solution technique (hébergement, serveur)                          | **Analyste technique**            |
| Bien connaître une application précise et former les utilisateurs                  | **Analyste fonctionnel**           |
| Planifier le projet, coordonner les intervenants, suivre l'échéancier et le budget | **Gestionnaire de projet**         |

### Serveur, réseau et technique

| Si la tâche consiste à...                                                          | ...on la confie généralement à     |
|------------------------------------------------------------------------------------|------------------------------------|
| Préparer et configurer le serveur qui héberge l'application, mettre l'application en ligne | **Administrateur réseau / technicien en réseautique (niveau 2)** |
| Concevoir la sécurité d'un serveur qui contient des données sensibles             | **Spécialiste technique ou consultant (niveau 3)** |

:::caution
Ces tableaux sont un **guide**, pas une règle absolue. Dans une petite équipe, une seule personne peut faire plusieurs métiers (un développeur full stack peut aussi concevoir la base de données). L'important est de **justifier** votre choix.
:::

---

## Cas 1 — L'inscription au tournoi de soccer ⭐

> Le **Club de soccer Les Faucons** organise un tournoi chaque été. Les inscriptions se font présentement sur papier. Le club veut un **formulaire d'inscription en ligne** où les parents entrent le nom de l'enfant, son âge et un numéro de téléphone. Les inscriptions doivent être conservées dans une **base de données**. Après l'inscription, le parent reçoit un **courriel de confirmation**.

:::tip Cas guidé
Les **livrables** sont déjà trouvés pour vous. Trouvez les **tâches** et les **métiers**.
:::

| Livrable | Tâches pour le produire | Métier |
|---|---|---|
| Formulaire d'inscription en ligne | ? | ? |
| Base de données des inscriptions | ? | ? |
| Courriel de confirmation | ? | ? |

**Question d'ordre :** est-ce qu'on peut tester l'enregistrement d'une inscription avant que la base de données soit créée? Pourquoi?

## Cas 2 — Le prêt d'ordinateurs à la bibliothèque ⭐

> La bibliothèque d'un cégep prête des ordinateurs portables aux étudiants. Présentement, tout est noté dans un cahier. La bibliothèque veut une petite application Web avec une **page qui affiche les portables disponibles**, une **page pour réserver un portable** pour une journée et une **page pour le personnel** qui affiche la liste des réservations du jour.

:::tip Indice
Ce cas contient **4 livrables**. Trois sont écrits en gras. Le quatrième n'est pas écrit, mais toutes les pages en ont besoin pour fonctionner. Lequel?
:::

## Cas 3 — La commande en ligne d'une boulangerie ⭐⭐

> La **Boulangerie Chez Rose** veut permettre à ses clients de **commander en ligne** et de venir chercher leur commande en magasin. Le client consulte un **catalogue** des produits avec leurs prix, ajoute des produits à son **panier** et **paie en ligne**. Rose veut aussi une **page de gestion** pour voir les commandes du jour et modifier les produits du catalogue. Avant de commencer, Rose aimerait que quelqu'un vienne **observer comment se passent les commandes** au comptoir pour bien comprendre ses besoins.

:::tip Indices
- Le paiement en ligne : faut-il le **programmer au complet**, ou utiliser un **service de paiement existant** (comme Stripe ou PayPal)? Quel métier fait le lien avec ce service?
- La dernière phrase du cas cache un livrable. Lequel, et quel métier s'en occupe?
:::

## Cas 4 — Le tableau de bord des ventes ⭐⭐

> Les **Quincailleries Gagnon** (3 magasins) utilisent déjà un système de caisse. Toutes les ventes sont enregistrées dans la **base de données du système de caisse**, mais personne ne les consulte. Le directeur veut un **tableau de bord** qui affiche chaque matin les ventes de la veille par magasin, les 10 produits les plus vendus et une alerte quand un produit est presque en rupture de stock. Pour ne pas ralentir les caisses, les données doivent être **copiées chaque nuit** dans une **nouvelle base de données** réservée aux rapports.

:::tip Indices
- Ce cas contient **4 livrables**.
- Qui est le mieux placé pour concevoir la nouvelle base de données et la copie de nuit?
- **Vous êtes une équipe de 3.** Pendant que la copie de nuit est programmée, que peuvent faire les deux autres personnes?
:::

## Cas 5 — La prise de rendez-vous d'une clinique de physiothérapie ⭐⭐⭐

> La **Clinique Physio Active** reçoit plus de 100 appels par jour pour des rendez-vous. Elle veut une **application Web de prise de rendez-vous** où les patients voient les plages libres et réservent eux-mêmes. Les rendez-vous doivent apparaître automatiquement dans le **logiciel de gestion de la clinique**, qui est déjà en place. Les patients reçoivent un **texto de rappel** la veille de leur rendez-vous. L'application doit être **hébergée sur un serveur sécurisé**, car elle contient des renseignements personnels de santé. Les **réceptionnistes** doivent être **formées** pour gérer les annulations dans la nouvelle application. Votre équipe de 3 développeurs travaillera en **sprints de deux semaines**.

:::tip Indices
- Ce cas contient **au moins 6 livrables**, dont certains ne sont pas du code.
- Avant de programmer, il faut savoir **comment** l'application pourra communiquer avec le logiciel de la clinique. Quel métier s'occupe de ce genre de question?
- « Renseignements personnels de santé » : quel niveau de technicien doit s'occuper de la sécurité du serveur?
- Les sprints de deux semaines : quel rôle aide l'équipe à bien les faire fonctionner?
- **Vous êtes une équipe de 3** : comment répartiriez-vous les livrables de programmation entre vous?
:::

---

## Synthèse — Ce qu'il faut retenir

1. **Livrable = un nom.** C'est ce qui existe à la fin du projet. Pensez aux grands blocs : **saisie, stockage, logique, présentation, notification**.
2. **Tâche = un verbe.** C'est une action pour produire un livrable : analyser, concevoir, programmer, tester, mettre en ligne, former.
3. **Métier = qui est le mieux placé** pour faire la tâche. Un projet logiciel n'implique pas seulement des développeurs : analystes, DBA, architecte, techniciens et Scrum Master peuvent aussi être nécessaires.
4. **Ordre = ce qui doit être fait avant**, et **ce qui peut être fait en même temps** par les autres membres de l'équipe.
