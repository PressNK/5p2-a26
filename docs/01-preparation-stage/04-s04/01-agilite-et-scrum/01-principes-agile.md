---
---

# 🌱 Les principes Agile

## Activité - Ca va changer ou pas ?

Voici quatre projets. Levez la main si vous pensez que les besoins du client vont changer de façon importante pendant le projet.</summary>

| Projet                                                                                        |
|-----------------------------------------------------------------------------------------------|
| **Construire un pont routier**                                                                | 
| **Migrer une base de données de la version 12 à la version 14**                               | 
| **Refaire le site web d'un restaurantt**                                                      | 
| **Une application mobile pour une entreprise qui ne sait pas encore qui seront ses clients**  |

<details>
<summary>Voir la réponse</summary>

| Projet                                                                                        | Réponse attendue                                            |
|-----------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| **Construire un pont routier**                                                                | Non, besoins connus, les normes sont écrites                |
| **Migrer une base de données de la version 12 à la version 14**                               | Non, on sait ce qu'on veut à la fin                         |
| **Refaire le site web d'un restaurantt**                                                      | Oui, surtout au niveau visuel                               |
| **Une application mobile pour une entreprise qui ne sait pas encore qui seront ses clients**  | Oui, car personne ne connais la réponse, même pas le client |

Vous les avez classés selon le **degré d'incertitude** sur ce qu'il faut construire.

</details>

## Pourquoi une méthodologie Agile?

Le cycle de développement en cascade ([Waterfall](../../02-s02/02-modeles-de-gestion/01-waterfall.md), vu à la semaine 2) n'est pas adapté à la majorité des projets de développement logiciel.

- Au tout début, le développement logiciel s'est inspiré des techniques de gestion de projet du **génie civil**
- Le délai entre l'analyse et la livraison est très grand
- Le produit répond **rarement** au besoin réel du client
- Le taux d'échec est donc très élevé

C'est dans ce contexte qu'est né en 2001 le **Manifeste Agile**, écrit par un groupe de développeurs cherchant une meilleure approche.

## Le manifeste Agile — 4 valeurs fondamentales

| On valorise davantage...                 | ...plutôt que                |
|------------------------------------------|------------------------------|
| **Les individus et leurs interactions**  | Les processus et les outils  |
| **Les logiciels opérationnels**          | Une documentation exhaustive |
| **La collaboration avec le client**      | La négociation contractuelle |
| **L'adaptation au changement**           | Le suivi d'un plan           |

:::info
« Nous reconnaissons la valeur des seconds éléments, mais privilégions les premiers. » — Cette nuance est essentielle : le manifeste **ne rejette pas** les processus, la documentation ou la planification, il indique simplement où mettre la priorité en cas de conflit.
:::

### Activité - Agile ou pas ?

| N° | Situation                                                                                                                         |
|----|-----------------------------------------------------------------------------------------------------------------------------------|
| 1  | « On fait un daily de 45 minutes, où chacun fait son rapport au gestionnaire. »                                                   |
| 2  | « On a renommé nos phases "sprint 1, sprint 2, sprint 3", mais on livre tout au client à la fin. »                                |
| 3  | « Le Product Owner a retiré une story du sprint, après discussion avec l'équipe, parce qu'on n'y arrivait pas. »                  |
| 4  | « On ne documente plus rien depuis qu'on est agile. »                                                                             |
| 5  | « On a arrêté les rétrospectives, on n'avait pas le temps. »                                                                      |
| 6  | « Le client a vu la démo, il a changé d'idée, on a mis sa nouvelle demande dans le backlog et on en reparle au prochain sprint. » |

<details>
<summary>Voir la réponse</summary>

| N° | Réponse                                                                                                                                                                          |
|----|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1  | **Pas agile**. Le daily sert à ce que l'équipe se synchronise entre elle. Dès que ça devient un rapport vers le haut, le but est perdu — et 45 minutes, c'est trois fois trop.   |
| 2  | **Pas agile**. C'est de la cascade avec un nouveau vocabulaire. Sans livraison ni rétroaction entre les sprints, il n'y a pas de boucle d'apprentissage.                         |
| 3  | **Agile**. Et c'est même exemplaire : on ajuste la portée plutôt que la qualité ou les heures. Notez le mot « discussion ».                                                      |
| 4  | **Pas agile**. Le classique. On confond « documentation exhaustive » et « documentation ».                                                                                       |
| 5  | **Pas agile — et le plus grave des six**. La rétrospective est le seul mécanisme par lequel une équipe se corrige. L'abandonner, c'est garantir que rien ne s'améliorera jamais. |
| 6  | **Agile**. C'est littéralement la quatrième valeur du manifeste en action. Et notez qu'on ne l'a pas ajoutée au sprint en cours — ça aussi, c'est la règle.                      |

Vous venez de vous doter d'un détecteur.

</details>

## Les 12 principes du manifeste Agile

1. Notre plus haute priorité est de **satisfaire le client** en livrant rapidement et régulièrement des fonctionnalités à grande valeur ajoutée.
2. **Accueillez positivement les changements** de besoins, même tard dans le projet.
3. **Livrez fréquemment** un logiciel opérationnel, avec une préférence pour les cycles les plus courts possibles.
4. Les utilisateurs et les développeurs doivent **travailler ensemble quotidiennement**.
5. Réalisez les projets avec des **personnes motivées**, en leur faisant confiance.
6. Le **dialogue en face à face** est la méthode la plus efficace pour transmettre l'information.
7. Un **logiciel opérationnel** est la principale mesure d'avancement.
8. Les processus Agiles encouragent un **rythme de développement soutenable**.
9. Une attention continue à l'**excellence technique** renforce l'agilité.
10. La **simplicité** — minimiser le travail inutile — est essentielle.
11. Les meilleures architectures émergent d'équipes **auto-organisées**.
12. À intervalles réguliers, l'équipe réfléchit à devenir **plus efficace** et ajuste son comportement en conséquence *(voir la rétrospective, plus loin)*.

## Les objectifs du modèle Agile

- Améliorer la **satisfaction du client**
- S'adapter et accepter le **changement** en cours de projet
- Améliorer la **coopération** au sein des équipes de développement
- Créer efficacement des logiciels fonctionnels
- **Simplifier** les processus de développement
- Livrer **plus rapidement** les produits et les mises à jour

:::tip But ultime
Fournir rapidement au client un **livrable utilisable de qualité** qui lui apporte de la valeur ajoutée.
:::

**Ce que l'agilité ne règle pas:**
- Ne rend pas une équipe plus rapide. 
- Ne règle pas un manque de compétence technique
- Ne répare pas une mauvaise ambiance
- Ne compense pas un client absent.

**L'agilité rend les problèmes visibles plus tôt. Elle ne les résout pas.**

## Gestion itérative et incrémentale

| Stratégie   | Définition                                                                                            |
|-------------|-------------------------------------------------------------------------------------------------------|
| Incrémental | On construit par morceaux complets. Chaque morceau est terminé avant de passer au suivant. On ajoute. |
| Itératif    | On fait une version grossière du tout, puis on repasse dessus pour l'améliorer. On raffine.           |

**Agile fait les deux en même temps**. Un sprint ajoute une fonctionnalité entière (incrémental) et/ou améliore des fonctionnalités livrées aux sprints précédents en fonction des commentaires reçus (itératif).

:::info
Vous avez déjà vu ce concept à la semaine 2 avec le [cycle itératif](../../02-s02/02-modeles-de-gestion/03-cycle-iteratif.md). Agile pousse ce principe encore plus loin en le combinant avec les valeurs du manifeste.
:::

## Le produit minimum viable (MVP)

- La technique consiste à concevoir un **produit utilisable rapidement**
- Le but est d'obtenir des **commentaires des utilisateurs** et d'y apporter des améliorations lors des prochaines itérations
- Il ne faut **pas mettre de côté la qualité** du produit
- Le MVP sert à **valider des hypothèses de conception**
- Ce concept ne s'applique **pas uniquement** au développement logiciel

### Deux exemples

- Le contre-exemple utile : construire une roue, puis un châssis, puis une carrosserie, puis enfin une voiture. À aucune étape avant la dernière l'utilisateur ne peut se déplacer — donc à aucune étape on n'apprend quoi que ce soit. 
- Le bon exemple : Construire plutôt une planche à roulettes, puis une trottinette, puis un vélo, puis une moto : à chaque étape la personne se déplace, et à chaque étape on apprend quelque chose sur ce dont elle a réellement besoin.

### Activité - Le MVP de la cafétéria

**Mise en situation :** « La cafétéria du Cégep veut une application pour que les étudiants commandent leur dîner à l'avance et évitent la file. Vous avez deux semaines et une seule personne. »
**Consigne :** « En trois minutes, écrivez deux choses. Un : les trois fonctionnalités de votre MVP. Deux : quelle hypothèse essayez-vous de valider?

<details>
<summary>Retour sur l'exercice</summary>

L'hypothèse à valider, ce n'est pas "est-ce qu'on peut construire l'app". C'est **est-ce que des étudiants vont réellement commander leur dîner à l'avance ?** Et pour répondre à ça, pendant deux semaines, **un formulaire en ligne, une adresse courriel et un tableau Excel des commandes** à la cafétéria suffisent. Zéro ligne de code. Si personne ne commande, vous venez d'économiser six mois de développement. Si trente personnes commandent chaque jour, vous savez quoi construire — et vous le savez pour vrai.

</details>

## Les méthodologies Agile

Le manifeste Agile est une **philosophie**, pas une méthode concrète. Plusieurs méthodologies ont été développées pour la mettre en application :

- **SCRUM** *(voir les pages suivantes)*
- **Kanban** *(voir la [section sur les outils Agile](../../03-s03/02-planification-du-travail-en-equipe/03-outils-et-gestion-de-taches/01-tableaux-kanban-et-taches.md))*
- **Scaled Agile Framework (SAFe)** (Voir [ici pour plus d'info](https://framework.scaledagile.com/#big-picture))
- **Rapid Application Development (RAD)**
- **eXtreme Programming (XP)**

## Références

1. Agile Manifesto, *Manifeste pour le développement Agile de logiciels*, [agilemanifesto.org](http://agilemanifesto.org/iso/fr/manifesto.html), 2021-11-01
2. Agile Manifesto, *Principes sous-jacents au manifeste*, [agilemanifesto.org](http://agilemanifesto.org/iso/fr/principles.html), 2021-11-01
3. Randstad Canada, *La « méthode agile » : les raisons de sa popularité en TI*, [randstad.ca](https://www.randstad.ca/fr/employeurs/tendances-employeur/innovation-en-milieu-de-travail/quest-ce-que-la-methode-agile-et-pourquoi-est-elle-si-repandue-dans-le-monde-des-ti/), 2021-11-01


