---
---

# 🏆 23-Défi: Maîtriser les composants Bootstrap

Créez une page HTML complète en utilisant **uniquement la documentation Bootstrap** pour découvrir et intégrer différents composants.

:::tip
L'objectif est d'apprendre à naviguer dans la documentation et à assembler des composants. Prenez votre temps et expérimentez! Ce n'est pas grave si vous n'avez pas le temps de finir dans le temps donné en classe.
:::

## Contexte

Vous développez un jeu en Greenfoot dans votre cours d'initiation à la programmation. Votre professeur vous demande de créer un **tableau de bord** pour suivre l'avancement de votre projet. Cette page lui permettra de visualiser rapidement l'état de votre développement.

:::info
Vous devez trouver **tous les composants dans la documentation officielle**:  
[https://getbootstrap.com/docs/5.3/components/](https://getbootstrap.com/docs/5.3/components/)

Copiez les exemples, adaptez-les à votre contenu, et assemblez le tout!
:::

<BrowserWindow>
    ![img](./img/dashboard-browser.png)
</BrowserWindow>

## Kit de départ

:::caution
Vous pouvez utiliser le HTML de départ suivant qui contient déjà Bootstrap et une base HTML.

<a target="_blank" href={ require("./files/greenfoot_starter_kit.zip").default } download>Télécharger au format zip le projet de départ</a>.
:::

## Objectifs

Votre page doit contenir **tous les éléments suivants**. Vous devez chercher dans la liste de composant le composant approprié et l'intégrer pour remplir l'objectif.

### 1. En-tête de page

![img](./img/badge.png)

- Un **badge** en dessous ou à côté du titre indiquant "En développement"

### 2. Statut actuel

![img](./img/alert.png)

- Une **alert** de type `info`, `success`, `warning` ou `danger` (selon l'état!) pour communiquer l'état du projet au professeur
- L'alert doit contenir un titre (`alert-heading`): "Statut actuel"
- Texte (exemple): "Le jeu est fonctionnel avec les mécaniques de base. Je travaille présentement sur le système de pointage. Prochaine étape: ajouter les niveaux de difficulté."

### 3. Progression du projet

![img](./img/progress.png)

- Trois **barres de progression** (**progress bar**) montrant:
  - Fonctionnalités de base: 100%
  - Niveaux du jeu: 60%
  - Tests et débogage: 25%
- Chaque barre doit avoir une couleur différente (success, warning, danger ou autre)
- Affichez le pourcentage dans chaque barre

:::tip
Le texte au dessus de la barre est simplement un `<p>` (ou autre), il ne fait pas partie du composant directement.
:::

### 4. Liste des fonctionnalités

![img](./img/list.png)

- Une **liste groupée** (list group) de 5 fonctionnalités
- Au moins 2 items doivent avoir un **badge** indiquant le statut
- Un item doit être marqué comme "actif"

**Contenu fourni (utilisez tel quel) :**

| Fonctionnalité            | Badge                    |
| ------------------------- | ------------------------ |
| Déplacement du personnage | Complété (vert)          |
| Système de collision      | Complété (vert)          |
| Gestion des points        | En cours (jaune) - ACTIF |
| Écran de fin de partie    | À faire (rouge)          |
| Sons et effets            | À faire (rouge)          |

### 5. Phases du projet

![img](./img/cards.png

- Trois **cards** côte à côte (utilisez le système de grille Bootstrap)
- Chaque card doit contenir :
  - Un en-tête de card (`card-header`)
  - Un titre
  - Du texte descriptif
  - Un **bouton**

**Contenu fourni (utilisez tel quel) :**

| Card | Header  | Titre         | Texte                                           | Bouton           |
| ---- | ------- | ------------- | ----------------------------------------------- | ---------------- |
| 1    | Phase 1 | Conception    | Mécanique de jeu définie et personnages créés.  | Voir les specs   |
| 2    | Phase 2 | Développement | Implémentation des fonctionnalités principales. | Voir le code     |
| 3    | Phase 3 | Tests         | Validation et correction des bugs.              | Rapporter un bug |

### 6. Navigation (fil d'Ariane)

![img](./img/breadcrumbs.png)

- Un **breadcrumb** en haut de page montrant: `Projets > Mon Jeu Greenfoot > Tableau de bord`

## Conseils

:::tip
- **Utilisez la recherche de bootstrap ou CTRL+F** dans les pages de documentation pour trouver rapidement ce que vous cherchez
- **Trouvez l'exemple qui se rapproche le plus** de votre besoin
- **Copiez d'abord** l'exemple de base, puis personnalisez
:::

# Solution

<details>
    <summary>
      Cheat Code (solution) <img style={{height: '20px', 'vertical-align': 'middle'}} src="https://imgur.com/UCEksuH.png" />
    </summary>

    Votre résultat pourrait être différent, l'important est d'avoir tous les composants demandés.

    <SandpackPlayground
        template="static"
        editorHeight={900}
        files={{
        '/index.html': `<!DOCTYPE html>
<html lang="fr" data-bs-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tableau de bord - Mon Jeu Greenfoot</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-4">
        <!-- Breadcrumb -->
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Projets</a></li>
                <li class="breadcrumb-item"><a href="#">Mon Jeu Greenfoot</a></li>
                <li class="breadcrumb-item active" aria-current="page">Tableau de bord</li>
            </ol>
        </nav>
        
        <!-- En-tête -->
        <h1>Tableau de bord - Mon Jeu Greenfoot</h1>
        <span class="badge bg-warning">En développement</span>
        <p class="lead mt-2">Suivi de l'avancement du projet</p>
        
        <!-- Alert - Statut actuel -->
        <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">Statut actuel</h4>
            <p>Le jeu est fonctionnel avec les mécaniques de base. Je travaille présentement sur le système de pointage. Prochaine étape: ajouter les niveaux de difficulté.</p>
        </div>
        
        <!-- Progression du projet -->
        <h3 class="mt-4">Progression du projet</h3>
        
        <p class="mb-1">Fonctionnalités de base</p>
        <div class="progress mb-3">
            <div class="progress-bar bg-success" style="width: 100%">100%</div>
        </div>
        
        <p class="mb-1">Niveaux du jeu</p>
        <div class="progress mb-3">
            <div class="progress-bar bg-warning" style="width: 60%">60%</div>
        </div>
        
        <p class="mb-1">Tests et débogage</p>
        <div class="progress mb-3">
            <div class="progress-bar bg-danger" style="width: 25%">25%</div>
        </div>
        
        <!-- Liste des fonctionnalités -->
        <h3 class="mt-4">Liste des fonctionnalités</h3>
        <ul class="list-group mb-4">
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Déplacement du personnage
                <span class="badge rounded-pill bg-success">Complété</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Système de collision
                <span class="badge rounded-pill bg-success">Complété</span>
            </li>
            <li class="list-group-item active d-flex justify-content-between align-items-center">
                Gestion des points
                <span class="badge rounded-pill bg-warning">En cours</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Écran de fin de partie
                <span class="badge rounded-pill bg-danger">À faire</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Sons et effets
                <span class="badge rounded-pill bg-danger">À faire</span>
            </li>
        </ul>
        
        <!-- Phases du projet (Cards) -->
        <h3 class="mt-4">Phases du projet</h3>
        <div class="row">
            <div class="col-md-4 mb-3">
                <div class="card">
                    <div class="card-header">Phase 1</div>
                    <div class="card-body">
                        <h5 class="card-title">Conception</h5>
                        <p class="card-text">Mécanique de jeu définie et personnages créés.</p>
                        <a href="#" class="btn btn-primary">Voir les specs</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card">
                    <div class="card-header">Phase 2</div>
                    <div class="card-body">
                        <h5 class="card-title">Développement</h5>
                        <p class="card-text">Implémentation des fonctionnalités principales.</p>
                        <a href="#" class="btn btn-primary">Voir le code</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card">
                    <div class="card-header">Phase 3</div>
                    <div class="card-body">
                        <h5 class="card-title">Tests</h5>
                        <p class="card-text">Validation et correction des bugs.</p>
                        <a href="#" class="btn btn-primary">Rapporter un bug</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`
        }}
    />  
</details>