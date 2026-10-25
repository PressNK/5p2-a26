---
---

# (S11) Mission 4 — Étude de cas : projets et intervenants
![](https://img.shields.io/badge/À%20compléter%20avant%20le-10%20novembre%202026%2023%3A59-red) ![](https://img.shields.io/badge/-En%20équipe%20de%20trois-orange)

## Votre mission

:::caution Votre objectif
Pour **10 % de la session**, démontrer que vous êtes capable d'analyser un projet d'entreprise en appliquant la [méthode d'analyse d'un cas](../01-preparation-stage/07-s07/01-etude-de-cas-projets-et-intervenants/01-methode-danalyse-dun-cas.md) vue à la semaine 7 : identifier les **livrables**, les **tâches**, les **métiers** et l'**ordre chronologique** des livrables, puis **justifier** vos choix.
:::

:::danger
L'utilisation d'une IA comme Claude, ChatGPT ou Copilot n'est **pas autorisée** pour rédiger ce travail. Vos justifications doivent refléter **votre** raisonnement. L'enseignant peut vous demander d'expliquer oralement n'importe quelle réponse.
:::

Les cas de cette mission sont **plus complets** que ceux pratiqués en classe : ils contiennent des **livrables cachés**, des **contraintes de temps**, des enjeux de **sécurité** et de **confidentialité**, ainsi que des **pièges** semblables à ceux présentés dans les [erreurs fréquentes](../01-preparation-stage/07-s07/01-etude-de-cas-projets-et-intervenants/01-methode-danalyse-dun-cas.md#les-erreurs-fréquentes).

## Consignes

- Le travail doit être fait en **équipe de trois**.
- Chaque équipe analyse **6 cas** : **3 cas « Services et infrastructure numériques »** (section A) et **3 cas « Développement logiciel »** (section B), selon la [répartition des cas](#répartition-des-cas).
- Le rapport doit être remis par la plateforme **Léa** en format **DOCX et PDF**.
- Le travail doit être remis au plus tard le **10 novembre 2026 à 23 h 59**.
- **-10 % par jour de retard.**

## Répartition des cas

Analysez les cas correspondant à votre numéro d'équipe.

| Numéro d'équipe | Cas services et infrastructure (A) | Cas développement logiciel (B) |
|:---------------:|:----------------------------------:|:------------------------------:|
|   1, 3, 5, 7    |            A1, A3 et A4            |          B1, B2 et B5          |
|   2, 4, 44, 9   |            A2, A4 et A5            |          B2, B4 et B6          |
|      7, 9       |            A3, A5 et A6            |          B1, B3 et B4          |

## Ce que vous devez produire pour chaque cas

Pour **chacun de vos 6 cas**, votre rapport doit contenir les sections suivantes :

### 1. Tableau d'analyse

Remplissez le tableau du [modèle de réponse](../01-preparation-stage/07-s07/01-etude-de-cas-projets-et-intervenants/01-methode-danalyse-dun-cas.md#le-modèle-de-réponse) :

| Livrable             | Tâches pour le produire     | Métier                                                   |
|----------------------|-----------------------------|----------------------------------------------------------|
| *Une chose (un nom)* | *Des actions (verbe + objet)* | *Qui le fait? (métier précis et niveau, s'il y a lieu)*  |

- Chaque **livrable** est un **nom** (incluant les livrables **non techniques** : analyse, recommandation, guide, formation, etc.).
- Chaque **tâche** commence par un **verbe** et est au **bon niveau de détail** (une personne, quelques heures à quelques jours, on sait quand elle est terminée).
- Chaque **métier** est **précis** (ex. « technicien réseau (niveau 2) » et non « l'informaticien »).
- Les livrables sont placés en **ordre chronologique** dans le tableau : la première ligne est le livrable réalisé en premier, la dernière celui réalisé en dernier.

### 2. Justification des métiers

Pour **au moins 4 métiers** de votre tableau, expliquez en 2 ou 3 phrases **pourquoi** ce métier est le mieux placé. Pour les techniciens, justifiez le **niveau** choisi (1, 2 ou 3) en parlant de la **complexité** ou du **risque** de la tâche.

### 3. Réponses aux questions du cas

Chaque cas contient **2 questions** liées à la méthode d'analyse (livrables, tâches, métiers, ordre). Répondez-y de façon complète et **justifiée** en vous appuyant sur l'[aide-mémoire](../01-preparation-stage/07-s07/01-etude-de-cas-projets-et-intervenants/01-methode-danalyse-dun-cas.md#aide-memoire).

## Format du rapport

- Page de titre : nom du cours, titre de la mission, noms et numéros de DA des trois coéquipiers, **numéro d'équipe**, date de remise.
- Une section par cas, identifiée par son numéro et son titre (ex. « Cas A3 — La clinique dentaire multisite »).
- Police sobre (Arial, Calibri), taille 11 ou 12, tableaux lisibles.
- Nom des fichiers : `Mission4_Equipe##_NomFamille1_NomFamille2_NomFamille3.docx` et `.pdf`.

---

## Section A — Services et infrastructure numériques

Utilisez les métiers présentés dans les [cas pratiques — services et infrastructure](../01-preparation-stage/07-s07/01-etude-de-cas-projets-et-intervenants/02-cas-pratiques-services-et-infrastructure.md#les-métiers-utiles-pour-ces-cas).

### Cas A1 — L'ouverture d'une deuxième succursale ⭐⭐⭐

> La **Pharmacie Bélanger** ouvre une **deuxième succursale** à Lévis dans **10 semaines**. Les nouveaux locaux ne sont **pas encore câblés** et l'entrepreneur en construction termine les murs dans **4 semaines**. La succursale aura **6 postes de travail**, **2 caisses** reliées au **terminal de paiement** et **1 imprimante d'étiquettes** de médicaments. Les employés de la nouvelle succursale doivent consulter les **dossiers des patients** conservés sur le serveur de la première succursale, au moyen d'une **connexion sécurisée** entre les deux succursales. Ce serveur a **9 ans** et ralentit déjà quand les 8 employés de la première succursale l'utilisent. Le fournisseur Internet demande un délai de **8 semaines**. Le propriétaire veut aussi un **Wi-Fi pour les employés** et un **Wi-Fi séparé pour les clients**. Le logiciel de pharmacie est fourni par une entreprise externe qui exige que **ses techniciens** installent le logiciel sur chaque poste, sur **rendez-vous** pris 3 semaines à l'avance. Si Internet tombe, la pharmacie doit **continuer à servir les patients** (prescriptions urgentes). Le propriétaire ne connaît rien à l'informatique et veut qu'on lui **recommande le matériel** avant tout achat. Le budget est **fixe** et ne peut pas être dépassé.

**Questions du cas :**
1. Trois délais sont imposés par des **intervenants externes** (Internet : 8 semaines, murs : 4 semaines, rendez-vous du fournisseur du logiciel : 3 semaines d'avance). Quelle tâche doit être réalisée **en tout premier**, et quelles tâches peuvent être faites **en parallèle** pendant l'attente d'Internet?
2. La **recommandation du matériel** et la **configuration des postes** sont confiées à deux métiers différents. Lesquels, et pourquoi n'est-ce pas la même personne?


### Cas A2 — Une cyberattaque chez un transporteur ⭐⭐⭐

> L'entreprise de transport **Trans-Nord** (40 employés) a été victime d'un **rançongiciel** un vendredi soir. Les **fichiers du serveur sont chiffrés** et plusieurs ordinateurs sont infectés. Heureusement, une **copie de sauvegarde** de la semaine précédente existe sur un disque externe. La direction veut : que les employés puissent **travailler à nouveau lundi matin**, savoir **comment l'attaque est entrée** (on soupçonne un courriel d'hameçonnage), qu'un **nouveau système de sauvegarde automatique** hors site soit mis en place, et que **tous les employés soient sensibilisés** à l'hameçonnage. Comme des **renseignements personnels** de clients étaient sur le serveur, la direction doit aussi savoir si elle a des **obligations de déclaration** (Loi 25).

**Questions du cas :**
1. Pourquoi **« Restaurer la sauvegarde »** ne peut-il pas être la première tâche du projet? Nommez les tâches qui doivent **obligatoirement** la précéder.
2. Identifiez **deux livrables** de ce cas qui ne sont **ni du matériel, ni du code**. Montrez, à l'aide du **test du livrable**, qu'il s'agit bien de livrables et non de tâches.


### Cas A3 — La clinique dentaire multisite ⭐⭐

> Le **Groupe Dentaire Sourire** possède **3 cliniques**. Chaque clinique a son propre petit serveur, ses propres comptes utilisateurs et son propre mot de passe partagé pour la réception. La direction veut **centraliser les comptes** pour que chaque employé ait **un seul compte personnel** qui fonctionne dans les 3 cliniques, avec l'**authentification multifacteur** (MFA). Les hygiénistes qui se déplacent entre les cliniques doivent avoir un **ordinateur portable** configuré de la même façon partout. Les **réceptionnistes** ont peur du changement : la direction exige un **guide** simple et une **formation** avant la mise en service.

**Questions du cas :**
1. Le livrable « **Réceptionnistes formées** » doit-il être réalisé **avant** ou **après** l'activation de la MFA? Justifiez par une **dépendance** entre les tâches.
2. Justifiez le **niveau de technicien** choisi pour la **centralisation des comptes** et celui choisi pour la **configuration des portables**. Pourquoi ne sont-ils pas identiques?


### Cas A4 — La salle de classe hybride ⭐⭐

> Le **Cégep de la Vallée** veut transformer **4 salles de classe** en **salles hybrides** : des étudiants sont en classe et d'autres suivent le cours à distance sur Teams. Chaque salle doit avoir une **caméra qui suit l'enseignant**, des **micros au plafond** pour entendre les questions des étudiants en classe et un **écran** où l'enseignant voit les étudiants à distance. Le **Wi-Fi** des salles est déjà saturé quand 40 étudiants s'y connectent. Avant de commander pour les 4 salles, le service informatique veut **tester une salle pilote** pendant 3 semaines avec 2 enseignants. Les enseignants doivent recevoir une **fiche aide-mémoire** et un **soutien technique** les premières semaines.

**Questions du cas :**
1. Le « **soutien technique les premières semaines** » est-il un **livrable** ou une **tâche**? Appliquez le **test du livrable** pour justifier votre réponse.
2. Quels livrables **dépendent** du résultat de la salle pilote? Qu'est-ce qui peut être réalisé **en parallèle** pendant les 3 semaines du pilote?


### Cas A5 — Le remplacement de 60 ordinateurs ⭐⭐

> Le bureau d'ingénieurs **Tremblay Génie-Conseil** doit remplacer **60 ordinateurs** qui ne sont plus supportés par Windows 10. Les ingénieurs utilisent des **logiciels de dessin** (AutoCAD) qui demandent des ordinateurs puissants, alors que le personnel administratif a des besoins simples. Les **fichiers personnels** de chaque employé doivent être transférés. Le remplacement doit se faire **sans arrêter le travail** : au maximum **10 employés** sans ordinateur en même temps. Les **anciens ordinateurs** contiennent des plans confidentiels de clients et doivent être **effacés de façon sécuritaire** avant d'être donnés à un organisme.

**Questions du cas :**
1. Les tâches suivantes sont-elles au **bon niveau de détail**? « *Remplacer les ordinateurs* », « *Brancher la souris de l'ordinateur no 23* », « *Installer et configurer les ordinateurs de la vague 1* ». Reformulez celles qui ne le sont pas.
2. Pourquoi l'**effacement sécuritaire** d'un ancien ordinateur doit-il obligatoirement venir **après** une autre tâche? Laquelle?


### Cas A6 — L'entrepôt connecté ⭐⭐⭐

> L'entreprise **Distribution Côté** veut moderniser son entrepôt de **12 000 m²**. Les caristes recevront des **terminaux portatifs** avec lecteur de code-barres pour scanner les boîtes. Les terminaux doivent fonctionner **partout dans l'entrepôt**, y compris dans la **chambre froide** (−20 °C). Des **caméras de surveillance** reliées au réseau seront installées aux quais de chargement. La direction veut que les caméras et les terminaux soient sur des **réseaux séparés** des ordinateurs des bureaux, pour des raisons de sécurité. L'entrepôt fonctionne **24 h sur 24**, il est donc impossible d'arrêter les opérations pour faire les travaux.

**Questions du cas :**
1. Quelle tâche doit être réalisée **avant** d'installer les points d'accès Wi-Fi dans un entrepôt de 12 000 m² avec une chambre froide? Quel métier (et quel niveau) la réalise?
2. Pour la **séparation des réseaux**, expliquez pourquoi la **conception** et la **configuration** ne sont pas confiées au même niveau de technicien.


---

## Section B — Développement logiciel

Utilisez les métiers présentés dans les [cas pratiques — développement logiciel](../01-preparation-stage/07-s07/01-etude-de-cas-projets-et-intervenants/03-cas-pratiques-developpement-logiciel.md#les-métiers-utiles-pour-ces-cas). Pensez aux grands blocs : **saisie, stockage, logique, présentation, notification**.

### Cas B1 — La billetterie d'un festival ⭐⭐

> Le **Festival Musique en Fleuve** vend présentement ses billets par téléphone. Il veut une **billetterie en ligne** où le public choisit un spectacle, une **catégorie de billet** (général, VIP, étudiant avec preuve) et **paie en ligne**. Chaque acheteur reçoit un **billet électronique avec un code QR**. À l'entrée du site, les bénévoles doivent **scanner les codes QR avec leur cellulaire** pour vérifier que le billet est valide et qu'il n'a **pas déjà été utilisé**. L'an dernier, le site d'un festival concurrent est **tombé en panne** lors de l'ouverture de la vente : le festival veut éviter cette situation.

**Questions du cas :**
1. La dernière phrase du cas cache un **livrable**. Lequel, et quel métier en est responsable?
2. Une fois la **base de données** prête, quels livrables peuvent être réalisés **en parallèle** par des développeurs différents? Lesquels doivent attendre, et pourquoi?


### Cas B2 — L'application de suivi des devoirs ⭐⭐

> L'école secondaire **Des Sommets** veut une **application Web et mobile** où les enseignants publient les **devoirs** et les **dates de remise**, où les élèves voient leurs devoirs de la semaine et où les **parents** peuvent consulter ceux de leur enfant. Les élèves et les enseignants doivent se connecter avec leur **compte scolaire Microsoft** existant. Les parents reçoivent un **courriel chaque dimanche** avec les devoirs de la semaine. Les élèves sont **mineurs** : la direction exige que leurs **données personnelles** soient protégées et que les parents ne voient **que les données de leur propre enfant**.

**Questions du cas :**
1. Le cas comporte **trois types d'utilisateurs** (enseignants, élèves, parents) qui n'ont pas les mêmes droits. Quel livrable doit être produit **avant** de programmer les pages, et quel métier le réalise?
2. « Se connecter avec le **compte scolaire Microsoft** existant » : faut-il **programmer** un système de connexion complet ou l'**intégrer**? Quel métier s'en charge, et quel problème cela pose-t-il pour les **parents**?


### Cas B3 — La migration d'une vieille application ⭐⭐⭐

> La **Coopérative agricole Terre-Riche** utilise depuis **2004** une application de bureau développée en **Visual Basic 6** par un employé aujourd'hui retraité. L'application gère les **livraisons de grains** des 300 producteurs membres et calcule leurs **paiements**. Il n'existe **aucune documentation**. La coopérative veut une **nouvelle application Web**. Les **20 années de données** de la vieille base de données Access doivent être **transférées** sans erreur, car elles servent aux calculs d'impôt des producteurs. Pendant la transition, les **deux applications** devront fonctionner en même temps durant **un mois** pour comparer les paiements calculés.

**Questions du cas :**
1. Il n'existe **aucune documentation**. Quel livrable doit être produit **en premier**, et quels métiers y participent?
2. La période d'**un mois en parallèle** produit un livrable. Lequel, et où se place-t-il dans l'**ordre chronologique** de votre tableau?


### Cas B4 — Le portail des employés d'une municipalité ⭐⭐

> La **Ville de Saint-Damase** veut un **portail Web interne** pour ses 150 employés. Les employés doivent pouvoir **consulter leurs talons de paie**, **demander des vacances** et voir le **solde de leurs congés**. Les demandes de vacances doivent être **approuvées par le supérieur**, qui reçoit une **notification**. Les talons de paie et les soldes viennent du **logiciel de paie** existant, fourni par une entreprise externe, qui offre une **API**. Les **cols bleus** n'ont pas d'ordinateur au travail : ils consulteront le portail sur leur cellulaire personnel.

**Questions du cas :**
1. Classez vos livrables selon les **5 grands blocs** vus en classe (saisie, stockage, logique, présentation, notification).
2. Que faut-il **vérifier auprès du fournisseur** du logiciel de paie **avant** de programmer? Quel métier s'en charge?


### Cas B5 — La plateforme de bénévolat ⭐⭐⭐

> L'organisme **Entraide Rive-Sud** gère **400 bénévoles** avec un fichier Excel et des dizaines d'appels. Il veut une **plateforme** où les bénévoles **s'inscrivent**, indiquent leurs **disponibilités** et leurs **compétences** (permis de conduire, langues parlées, vérification d'antécédents judiciaires), puis **choisissent des quarts de travail**. Le système doit **empêcher** qu'un bénévole sans vérification d'antécédents s'inscrive à un quart auprès d'**enfants**. Un **texto de rappel** est envoyé 24 h avant chaque quart. La coordonnatrice veut un **rapport mensuel** des heures de bénévolat pour ses demandes de subventions. Le **fichier Excel actuel** contient des doublons et des erreurs. L'organisme a un **budget très limité** et une équipe de 3 développeurs **à temps partiel**.

**Questions du cas :**
1. « Le **fichier Excel actuel** contient des doublons et des erreurs » : quel **livrable caché** cette phrase révèle-t-elle, et quel métier s'en charge?
2. La règle « **pas de quart auprès d'enfants sans vérification d'antécédents** » doit-elle être programmée par le développeur **front-end** ou **back-end**? Justifiez.


### Cas B6 — L'intégration d'une boutique en ligne avec un entrepôt ⭐⭐⭐

> La boutique de vêtements **Mode Boréale** vend en ligne avec **Shopify** et possède un entrepôt géré par un **logiciel d'inventaire** installé sur un serveur local. Présentement, une employée **recopie à la main** chaque commande Shopify dans le logiciel d'inventaire, ce qui cause des erreurs et des **ventes de produits en rupture de stock**. L'entreprise veut que les **commandes** soient **envoyées automatiquement** à l'entrepôt et que les **quantités en stock** soient **mises à jour sur Shopify** toutes les 15 minutes. Si le lien entre les deux systèmes **tombe en panne**, le gestionnaire doit être **averti immédiatement**. Le serveur local n'est **pas accessible depuis Internet** pour le moment.

**Questions du cas :**
1. Quel métier doit concevoir **la façon dont les deux systèmes communiquent**? Pourquoi ce livrable doit-il se trouver **au début** de votre tableau?
2. « Le serveur local n'est **pas accessible depuis Internet** » : quel livrable cette phrase crée-t-elle, et quels **niveaux** de technicien interviennent?


---

## Critères d'évaluation

Le travail pratique vaut pour **10 % de la note finale** du cours. Il est évalué sur **100 points** : chaque cas ⭐⭐ vaut **15 points** et chaque cas ⭐⭐⭐ vaut **20 points**. Chaque équipe a **2 cas ⭐⭐⭐ et 4 cas ⭐⭐**, ce qui donne le même total pour toutes les équipes.

### Grille par cas

| **Critère**                                                                                                                 |  **Cas ⭐⭐ (sur 15)** | **Cas ⭐⭐⭐ (sur 20)** |
|-----------------------------------------------------------------------------------------------------------------------------|----------------------:|---------------------:|
| **Livrables** : complets (incluant les livrables cachés et non techniques), formulés comme des **noms** | 3 | 4 |
| **Tâches** : formulées avec un **verbe**, au bon niveau de détail, associées au bon livrable | 3 | 4 |
| **Métiers** : précis, pertinents, niveaux de technicien justes | 2,25 | 3 |
| **Justification des métiers** : raisonnement clair (complexité, risque, rôle) | 2,25 | 3 |
| **Ordre chronologique des livrables** dans le tableau, cohérent avec les contraintes du cas | 2,25 | 3 |
| **Questions du cas** : réponses complètes et justifiées | 2,25 | 3 |
| **Total par cas** | **15** | **20** |

### Grille globale

| **Évaluation**                                                                                |   **Pondération** |
|-----------------------------------------------------------------------------------------------|------------------:|
| 4 cas ⭐⭐ (4 × 15)                                                                           |              60   |
| 2 cas ⭐⭐⭐ (2 × 20)                                                                         |                40 |
| **Total**                                                                                     |           **100** |
| **Respect des modalités** (page de titre, nom des fichiers, format DOCX + PDF, cas attribués) | jusqu'à -2 points |
| **Français** : 0,2 point par faute                                                            | jusqu'à -3 points |

:::warning Cas non attribués
Un cas qui ne correspond **pas** à votre numéro d'équipe ne sera **pas corrigé** et vaudra 0.
:::

## Modalités de remise

- Remis par **Léa**, avant le **10 novembre 2026 à 23 h 59**.
- Un seul membre de l'équipe dépose le travail. Indiquez le **nom des coéquipiers** et le **numéro d'équipe** dans la zone de commentaire.
- Déposez les deux fichiers : `Mission4_Equipe##_NomFamille1_NomFamille2_NomFamille3.docx` et `Mission4_Equipe##_NomFamille1_NomFamille2_NomFamille3.pdf`.
- -10 % par jour de retard.

:::tip Avant de remettre — liste de vérification
- [ ] Chaque livrable est un **nom**, chaque tâche commence par un **verbe**.
- [ ] J'ai cherché les **livrables cachés** (analyse, recommandation, sécurité, migration, formation, guide).
- [ ] Mes métiers sont **précis** et les **niveaux** de technicien sont justifiés.
- [ ] Les livrables de mon tableau sont en **ordre chronologique**.
- [ ] J'ai répondu aux **2 questions** de chaque cas, avec une justification.
:::

