---
---

# 🗣️ 1. Communication professionnelle

## La difficulté de bien se comprendre

:::info Citation de Bernard Werber
« Entre ce que je pense, ce que je veux dire, ce que je crois dire, ce que je dis, ce que vous voulez entendre, ce que vous entendez, ce que vous croyez en comprendre, ce que vous voulez comprendre, et ce que vous comprenez, il y a au moins **neuf possibilités** de ne pas se comprendre. »
:::

Règle empirique bien connue en communication d'équipe :

| Proportion          | Résultat                                                         |
| ------------------- | ---------------------------------------------------------------- |
| 1 personne sur 3    | Comprend du **premier coup**                                     |
| 1 personne sur 3    | **Pense** avoir compris (mais n'a pas réellement compris)        |
| 1 personne sur 6    | N'a pas compris, mais finit par comprendre après 3 à 5 explications |
| 1 personne sur 6    | Ne comprendra **jamais complètement**                            |

Conclusion : une communication claire n'est **pas un luxe**, c'est une compétence.

## Communication claire et concise

### Le courriel (ou message Teams) professionnel

La règle d'or : **BLUF** — *Bottom Line Up Front* (l'essentiel en premier).

1. **Objet précis** : `[Projet X] Bug connexion – besoin d'accès BD d'ici jeudi` plutôt que `Question`
2. **Salutation** : « Bonjour Marie, » (pas « Yo », pas « Allo! »)
3. **L'essentiel en 1–2 phrases** : ce que vous voulez
4. **Contexte** bref, en puces si nécessaire
5. **Action attendue + échéance**
6. **Formule de politesse + signature**

| ❌ À éviter                                      | ✅ À faire                                                        |
|-------------------------------------------------| ---------------------------------------------------------------- |
| « allo ça marche pas lol »                      | « Bonjour, la page de connexion retourne une erreur 500 depuis ce matin. » |
| Un roman de 4 paragraphes                       | 5 à 10 lignes, des puces                                          |
| Abréviations texto (« stp », « jsp »)           | Un français soigné (relisez! Antidote ou correcteur)             |
| Envoyer un « Salut » seul sur Teams et attendre | Écrire la question **complète** dans le même message              |
| « Répondre à tous » par réflexe                 | Ne mettre que les personnes concernées                           |

:::tip Le piège du « Salut 👋 » sur Teams
Envoyer seulement « Salut » puis attendre une réponse avant de poser sa question fait perdre du temps aux deux personnes. Écrivez : « Salut Marc! Petite question sur le déploiement : est-ce que la branche `release` est gelée cette semaine? »
:::

### Participer à une réunion

- Arrivez à l'heure pour une réunion à distance. Pour une réunion en présentiel, arrivez 3-5 minutes en avance pour vous installer.
- Lisez l'ordre du jour et préparez **une question ou un point**
- Prenez des **notes** (surtout les décisions et les actions qui vous concernent)
- Ne regardez pas votre cellulaire
- Après la réunion : faites ce que vous avez dit que vous feriez

### Expliquer un problème sans jargon

Adaptez votre vocabulaire à votre **auditoire**. Un gestionnaire ou un client n'a pas besoin de savoir que « le *null reference* vient d'un *DTO* mal mappé ».

| Pour un développeur                                           | Pour un gestionnaire                                                               |
|---------------------------------------------------------------|------------------------------------------------------------------------------------|
| « L'*endpoint* `/orders` timeout à cause d'une requête N+1. » | « La page des commandes est lente; j'ai trouvé la cause, correctif prévu demain. » |

Structure simple : **Quoi** (le problème) → **Impact** (pour qui, combien) → **Cause** (si connue) → **Prochaine étape**.

## Écoute active et reformulation

L'écoute active, c'est écouter **pour comprendre**, pas pour répondre.

- Regardez la personne, fermez l'écran, rangez le cellulaire
- Laissez finir la phrase
- Posez des **questions ouvertes** : « Qu'est-ce qui serait un succès pour toi? »
- Ensuite **Reformulez** : « Si je comprends bien, tu veux… c'est bien ça? »

### La technique de l'assurance compréhension

Pour valider une tâche qu'on vous confie :

1. **Réexpliquez** votre compréhension **dans vos propres mots** à la personne
2. **Faire des suivis** réguliers sur l'évolution du travail

:::tip
Simple, mais redoutable : votre interlocuteur peut **corriger un malentendu** avant que vous ayez investi des heures dans la mauvaise direction. Il faut en moyenne **3 à 5 explications** pour qu'une tâche soit bien comprise — ne présumez jamais qu'une seule suffit.
:::

## Assertivité vs agressivité

| Passif                                     | **Assertif** ✅                                                                   | Négatif                                           |
|--------------------------------------------|----------------------------------------------------------------------------------|---------------------------------------------------|
| « Ok… pas de problème » (mais c'en est un) | « Je peux le faire, mais pas d'ici demain. Vendredi, est-ce que ça fonctionne? » | « C'est impossible, c'est ridicule comme délai. » |
| Je m'efface                                | Je respecte mes besoins **et** ceux des autres                                   | J'impose, j'attaque la personne                   |

### La méthode DESC (simple à retenir)

- **D**écrire les faits : « Les trois dernières *pull requests* ont été fusionnées sans revue. »
- **E**xprimer l'impact (au « je ») : « Je trouve ça risqué, j'ai dû corriger deux bogues hier. »
- **S**uggérer une solution : « Est-ce qu'on pourrait exiger une approbation dans GitHub? »
- **C**onséquence positive : « On éviterait des retours en arrière et du stress en fin de sprint. »

### Dire son opinion

- Il peut être difficile de **détecter le bon moment** : rencontre individuelle, rétrospective, période de commentaires
- Les commentaires doivent être **constructifs** et dits avec **diplomatie**
- **Suggérez une solution** — ne vous contentez pas de critiquer
- Ne vous taisez pas par peur de déplaire : **ne rien dire peut aussi être mal perçu**

### Le respect du passé

Vous trouverez du code ou des processus qui semblent « mal faits ». Avant de juger :

- Il est très rare qu'une personne prenne **volontairement** une mauvaise décision
- Les décisions ont été prises dans un **contexte** (ressources, délais, contraintes) qui a **changé** depuis
- À ne pas faire❌: « Qui a codé cette horreur? » → À faire✅: « Je suis curieux, pourquoi on a fait ce choix à l'époque? »



