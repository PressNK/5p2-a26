---
---

# 🔑 Solutions — Cas guidés : Services et infrastructure numériques

:::danger Document réservé à l'enseignant
Ce fichier est caché du site (préfixe « . »), mais il reste visible sur le dépôt GitHub public.
:::

Ces solutions représentent le **niveau attendu** d'un étudiant qui fait cet exercice pour la première fois. Accepter toute réponse où le **livrable est un nom**, la **tâche est un verbe** et le **métier est raisonnable**. L'ordre des lignes dans le tableau n'a pas d'importance.

---

## Cas 1 — L'arrivée d'une nouvelle employée ⭐

| Livrable | Tâches pour le produire | Métier |
|---|---|---|
| Ordinateur prêt à utiliser | Préparer l'ordinateur; installer les logiciels; tester l'ordinateur | Technicien informatique (niveau 1) |
| Compte et adresse courriel | Créer le compte de Sophie; créer son adresse courriel | Administrateur réseau (niveau 2) |
| Accès au dossier partagé | Donner à Sophie l'accès au dossier de la comptabilité; tester l'accès | Administrateur réseau (niveau 2) |

**Question d'ordre :** non. Il faut d'abord **créer le compte**, puisque Sophie (ou le technicien) doit se connecter avec ce compte pour tester l'ordinateur et l'accès au dossier.

**Ordre :** créer le compte → donner l'accès au dossier → préparer et tester l'ordinateur.

**À accepter aussi :** le technicien (niveau 1) qui crée le compte. Dans une petite entreprise, c'est fréquent.

---

## Cas 2 — Une salle de réunion pour Teams ⭐

| Livrable | Tâches pour le produire | Métier |
|---|---|---|
| Liste des besoins | Rencontrer la direction et quelques employés; noter le nombre de personnes et les types de réunions | Analyste d'affaires |
| Écran, caméra et micro installés | Choisir l'équipement selon la liste des besoins; commander l'équipement; installer l'équipement; tester un appel Teams | Analyste technique (choisir), technicien informatique (niveau 1) (installer et tester) |
| Salle réservable dans Outlook | Créer la salle dans Outlook; tester une réservation | Administrateur réseau (niveau 2) |
| Affiche « Comment démarrer une réunion » | Écrire les étapes; imprimer et installer l'affiche | Technicien informatique (niveau 1) |

**Ordre :** faire la liste des besoins → choisir → commander → (pendant la livraison : créer la salle dans Outlook) → installer → tester → installer l'affiche.

**Lien à faire ressortir :** l'analyste d'affaires trouve **ce dont les gens ont besoin**; l'analyste technique trouve **quel matériel répond à ce besoin**. Le choix de l'équipement dépend donc de la liste des besoins.

**Piège fréquent :** écrire « réserver la salle » comme livrable. Le livrable est **la salle réservable dans Outlook**. Réserver est une action.

---

## Cas 3 — Le Wi-Fi pour les clients d'une clinique ⭐⭐

| Livrable | Tâches pour le produire | Métier |
|---|---|---|
| Wi-Fi qui couvre la salle d'attente | Choisir un point d'accès; l'acheter; l'installer; tester le signal dans la salle d'attente | Analyste technique (choisir), technicien réseau (niveau 2) (installer) |
| Réseau Wi-Fi séparé pour les clients | Créer un réseau Wi-Fi « invités » séparé; tester qu'un client ne peut pas accéder aux ordinateurs de la clinique | Technicien réseau (niveau 2) |
| Affiche du mot de passe à l'accueil | Écrire l'affiche; l'installer à l'accueil | Technicien informatique (niveau 1) |

**Réponse à l'indice :** le livrable caché est le **réseau Wi-Fi séparé pour les clients** (réseau invité). C'est lui qui protège les dossiers de la clinique.

**Ordre :** choisir et acheter le point d'accès → l'installer → créer le réseau invité → tester → installer l'affiche.

**Piège fréquent :** se limiter à « installer un point d'accès » et oublier la sécurité.

**À accepter aussi :** un **spécialiste niveau 3** (concepteur réseau) pour concevoir la séparation entre le réseau des clients et celui de la clinique, puisqu'il s'agit d'un enjeu de sécurité. Le technicien réseau (niveau 2) fait ensuite la configuration.

---

## Cas 4 — Le déménagement d'un petit bureau ⭐⭐

| Livrable | Tâches pour le produire | Métier |
|---|---|---|
| Internet fonctionnel dans les nouveaux locaux | Commander Internet auprès du fournisseur; tester la connexion après l'installation | Administrateur réseau (niveau 2) |
| Wi-Fi fonctionnel | Installer le routeur et le point d'accès; configurer le Wi-Fi; tester | Technicien réseau (niveau 2) |
| Ordinateurs et imprimante fonctionnels | Emballer et déménager le matériel; rebrancher les ordinateurs et l'imprimante; tester chaque poste | Technicien informatique (niveau 1) |

**Réponse à l'indice :** il faut **commander Internet en premier**, car le délai est de 6 semaines sur les 8 semaines disponibles. Si on attend, Internet ne sera pas prêt le jour du déménagement.

**Ordre :**
1. Commander Internet (semaine 1).
2. Installer et configurer le Wi-Fi quand Internet est installé (avant le déménagement).
3. Déménager et rebrancher les ordinateurs et l'imprimante (jour du déménagement).
4. Tester chaque poste.

**À accepter aussi :** un **gestionnaire de projet** pour coordonner le déménagement. C'est une bonne réponse, mais elle n'est pas obligatoire pour un projet de cette taille.

---

## Cas 5 — Du vieux serveur vers l'infonuagique ⭐⭐⭐

| Livrable | Tâches pour le produire | Métier |
|---|---|---|
| Liste des droits d'accès (qui peut voir quoi) | Rencontrer chaque service; noter quels employés doivent voir quels documents | Analyste d'affaires |
| Plan de migration | Faire l'inventaire des documents; choisir l'outil de migration; planifier la migration service par service | Spécialiste en migration (niveau 3) |
| Documents déplacés dans SharePoint avec les bons accès | Créer un espace par service; donner les accès selon la liste; déplacer les documents; faire vérifier par un employé de chaque service | Spécialiste (niveau 3) pour la migration, administrateur réseau (niveau 2) pour les accès |
| Employés formés à SharePoint | Préparer un petit guide; donner la formation à chaque service; répondre aux questions les premières semaines | Analyste fonctionnel (formation), technicien informatique (niveau 1) (soutien) |
| Vieux serveur retiré de façon sécuritaire | Vérifier qu'aucun document n'a été oublié; effacer ou détruire les disques; retirer le serveur | Administrateur réseau (niveau 2) |

**Réponse aux indices :**
- C'est l'**analyste d'affaires** qui va chercher auprès des services l'information sur « qui a le droit de voir quoi ».
- Les migrations importantes sont confiées à un **spécialiste de niveau 3**.

**Ordre :** liste des droits → plan de migration → créer les espaces et donner les accès → former les employés → déplacer les documents → faire vérifier par chaque service → retirer le vieux serveur, **seulement après la vérification**.

**Pièges fréquents :**
- Retirer le vieux serveur avant que les services aient vérifié leurs documents.
- Penser que « supprimer les fichiers » suffit. Pour des données confidentielles, il faut **effacer complètement ou détruire les disques**.

**À accepter aussi :** un **gestionnaire de projet** pour coordonner les services et l'échéancier. Pour un projet de cette taille (30 employés, plusieurs services), c'est même une très bonne réponse.
