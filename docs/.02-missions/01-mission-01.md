---
---

# (S5) Mission 1 - Site Web HTML
![](https://img.shields.io/badge/À%20compléter%20avant%20le-22%20septembre%202026%2023%3A59-red) ![](https://img.shields.io/badge/-Individuel-orange)

## Votre mission

:::danger
L'utilisation d'une IA comme Claude ou ChatGPT n'est pas autorisée pour ce travail.
:::

:::caution Votre objectif
Pour 5% de la session, développer le site Web du refuge pour animaux de votre choix en utilisant que du HTML, sans CSS ni JavaScript.
:::

Vous travaillez pour un refuge pour animaux (**celui de votre choix, entièrement inventé!**) et compte tenu de la [situation actuelle](../01-mise-en-situation.md), le site qui était planifié ne peut être utilisé. On doit revenir à une version en HTML simple du site prévu.

**Valant pour 5% de la session**, on vous mandate donc de développer, **individuellement,** le site web du refuge en n'utilisant que du HTML!

## Détail

### Structure de dossiers

Créez un dossier nommé `1234567_TP1`, dans lequel vous remplacez `1234567` par votre numéro de DA.

Créez un dossier nommé `images` à l'intérieur du dossier `1234567_TP1`, dans lequel vous placerez toutes vos images. Ne placez que les images utiles à vos pages web.

Votre structure devrait ressembler à celle-ci:

```
1234567_TP1/
├── index.html
├── ... autres pages HTML
└── images/
    ├── image1.png
    ├── image2.jpg
    └── ...
```

### Structure du site

1. Vous devez inclure **une barre de navigation** contenant:
   - Un lien vers votre page principale (la page index). Cette balise `<a>` devrait inclure une image (votre logo)
   - Des liens vers vos autres pages
   - Vous pouvez créer votre barre de navigation dans un des fichiers, et ensuite la copier/coller dans les autres fichiers
2. Vous devez inclure **un pied de page (footer)** à chaque fin de page incluant:
   - Votre **nom**
   - Une façon de **vous contacter via votre adresse courriel** du Cégep
   - Un **copyright ©** de votre festival fictif
   - Un **lien `Retour en haut`** permettant de revenir au haut de la page
3. Vous devez **utiliser une gamme de balises différentes** dans vos pages, et non seulement des `<br>` et des` <p>` par exemple
   - **Organisez votre contenu avec les balises les plus courantes** vues en classe : `h1`, `p`, `strong`, `ul`, `a`, `img`, etc.
   - Vous pouvez également utiliser d'autres balises, même si elles n'ont pas été vues en classe, mais n'utilisez pas de CSS ni de JavaScript
4. Vous devez **utiliser les balises de structure** autant que possible: `header`, `nav`, `section`, `article`, etc.
5. Le texte inclus dans vos pages **ne doit pas être de simples copier-coller** du texte trouvé sur d'autres sites web.
   - Le texte doit être original
   - **L'utilisation d'une intelligence artificielle comme ChatGPT n'est pas considérée comme du texte ou code original**.
6. Chaque page doit contenir un titre principal `h1` et une balise `title` unique

:::caution
Il ne doit pas y avoir de CSS, de Bootstrap ou de JavaScript intégrés au HTML, **seulement du HTML**.
:::

### Détail des pages

Vous devrez développer les pages suivantes:
- 🏠 Page d'accueil et présentation du refuge
- 🐾 Page des animaux disponibles pour adoption
- 💰 Page des tarifs et étapes d'adoption
- 📋 Page du formulaire de demande d'adoption
- ℹ️ Page d'informations pratiques

#### 🏠 Page d'accueil `index.html`
Créez une page `index.html` qui constituera votre page d'accueil.

1. La page doit contenir **un titre principal** avec le nom du refuge
2. **Une image représentant le refuge ou ses animaux** doit être présente avec une légende (`figure`/`figcaption`) reprenant votre slogan
3. Insérez une **description sommaire de la mission du refuge**. Les pages subséquentes contiendront du contenu plus détaillé.
4. Affichez, **sous forme de liste**, au moins 3 **statistiques ou faits marquants** du refuge (ex.: nombre d'animaux placés depuis l'ouverture, nombre de bénévoles, année de fondation, etc. - inventez des chiffres)
5. Affichez **le lieu** (peut être fictif ou un vrai lieu)

#### 🐾 Page des animaux disponibles
Créez un fichier `.html` spécifiquement pour cette page sur laquelle vous affichez les informations sur **au moins 6 animaux disponibles pour adoption**, provenant d'**au moins 3 espèces différentes** (ex.: chien, chat, lapin, oiseau, etc.).

1. Pour chaque animal, vous devez afficher:
   - Le **nom** de l'animal
   - Une **image**
   - Une **description** de son caractère et de son histoire
   - L'**âge** et la **race** (ou espèce)
   - Une mention si l'animal est **compatible avec les enfants et les autres animaux**
2. Vous devez ajouter une **table des matières** au sommet de la page qui utilise les `ancres` (liens `#`) pour naviguer vers chaque animal individuellement

#### 💰 Page des tarifs et étapes d'adoption
Créez un fichier `.html` spécifiquement pour cette page.

1. Affichez **sous forme de tableau** les frais d'adoption selon le type d'animal:
   - Frais d'adoption d'un chien
   - Frais d'adoption d'un chat
   - Frais d'adoption d'un autre animal (petit mammifère, oiseau, etc.)
   - Frais additionnels (ex.: micropuçage, vaccination, stérilisation)
2. Affichez, **sous forme de liste numérotée (`ol`)**, les **étapes du processus d'adoption** (ex.: remplir le formulaire, rencontre avec l'animal, visite pré-adoption, signature du contrat, etc. - au moins 4 étapes)
3. Vous devez ajouter une **table des matières** au sommet de la page qui utilise les `ancres` (liens `#`) pour naviguer entre la section des tarifs et la section des étapes

#### 📋 Page du formulaire de demande d'adoption
Créez un fichier `.html` spécifiquement pour cette page sur laquelle vous afficherez un formulaire de "demande d'adoption".

Le formulaire ne fera évidemment pas d'action en tant que telle, mais doit contenir les champs suivants:
- Prénom
- Nom
- Adresse courriel
- Numéro de téléphone
- Une sélection avec **boutons radio** pour choisir le type d'animal recherché (chien, chat, autre)
- Une **liste déroulante (`select`)** pour choisir la ville ou le quartier de résidence (au moins 4 options)
- Une ou plusieurs **cases à cocher** pour indiquer les conditions du domicile (ex.: "J'ai une cour clôturée", "J'ai déjà un autre animal", "Je suis propriétaire de mon logement")
- Un champ **texte multiligne** pour "Pourquoi souhaitez-vous adopter?"
- Un bouton pour soumettre le formulaire, bien qu'aucune action réelle ne soit associée au formulaire

#### ℹ️ Page informations pratiques
Créez un fichier `.html` spécifiquement pour cette page sur laquelle vous afficherez des informations pratiques sur le refuge.

La page doit comprendre:
1. Une description des services offerts par le refuge (adoption, bénévolat, dons, etc.)
2. Le lieu (ex.: un parc ou une adresse fictive)
3. Une carte Google Maps du lieu intégrée à la page (`iframe`)
4. Un **tableau des heures d'ouverture** du refuge pour chaque jour de la semaine
5. Informations de contact des responsables (courriel, téléphone)
6. Une section FAQ (questions fréquentes) utilisant `details`/`summary` comprenant au moins 4 questions/réponses.
   - Vous pouvez inventer des questions / réponses (ex.: peut-on visiter sans rendez-vous, offrez-vous un suivi post-adoption, etc.)


## Modalités de remise

* Remis par Léa
* Remis avant le 22 septembre 2026 23:59
* Faites une archive `Zip` de votre répertoire `1234567_TP1` contenant tous les fichiers et déposez-le sur Léa.

## Grille d'évaluation

| **Critère**                                                        | **Points** |
|--------------------------------------------------------------------| ---------- |
| Page d'accueil                                                     | 15%        |
| Page des animaux disponibles                                       | 15%        |
| Page des tarifs et étapes d'adoption                               | 15%        |
| Page du formulaire de demande d'adoption                           | 15%        |
| Page informations pratiques                                        | 10%        |
| Barre de navigation                                                | 10%        |
| Pied de page (liens `mailto`/`tel`, copyright, retour en haut)     | 5%         |
| Utilisation de balises appropriées et diversifiées (dont `aside`)  | 10%        |
| Entités HTML et lien externe (`target`/`title`)                    | 5%         |

