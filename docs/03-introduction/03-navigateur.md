---
---
import chatsHtml   from '!!raw-loader!@site/src/playground/s01/chats/index.html';
import chatsStyles from '!!raw-loader!@site/src/playground/s01/chats/styles.css';

# 3 - Le navigateur pour accéder au web

![Site Space Jam de 1996 ouvert dans Firefox avec les outils de développement affichant le code HTML de la page](./img/browser-demo.png)

## Qu'est-ce qu'un navigateur?

Un navigateur web est une application **permettant à un utilisateur d’accéder et d’interagir avec des pages web** et autres ressources hébergées sur Internet.

Vous avez très certainement déjà utilisé un de ces navigateurs: Chrome, Firefox, Safari (iPhone) ou encore Edge.

Le navigateur agit comme un **client HTTP**: il **envoie des requêtes aux serveurs web et récupère les réponses** (ex.: document HTML):

![Capture d'écran de l'onglet Réseau des outils de développement de Firefox montrant la liste des requêtes HTTP et la réponse HTML de la page « Chats célèbres du web »](./img/http-request-dev-tool.png)

Un moteur de rendu (par exemple Blink pour Chrome, Gecko pour Firefox, WebKit pour Safari) est responsable **d'interpréter le code HTML, JavaScript et CSS reçu afin d'afficher la page web**. Plus particulièrement:
* Interpréter le code HTML reçu pour l'afficher visuellement dans le navigateur
* **Lire exécuter du code JavaScript afin de rendre une application Web plus dynamique**. Par exemple, en y ajoutant des animations, validations de formulaires, interactions utilisateurs, etc. **Vous verrez cet aspect dans votre cours de Web II**.
* Le moteur est aussi responsable d'**appliquer le style visuel des pages** (couleurs, polices de caractère, etc.) à l'aide d'un language appelé le **CSS**. Nous aurons l'occasion de voir ce langage dans le cadre du cours.

Sans moteur de rendu, votre navigateur ne pourrait qu'afficher les fichiers textes qui représentent la page.

En résumé, le navigateur vous permet d'interagir de façon conviviale avec le Web: il est reponsable de gérer la communication avec les serveurs, d'interpréter et d'afficher les contenus, en plus de fournir un ensemble d’outils et de mécanismes de sécurité utiles à l'utilisateur et au développement web.

## Les principaux navigateurs

![Graphique StatCounter des parts de marché des navigateurs au Canada d'avril 2024 à avril 2025 : Chrome 50 %, Safari 34 %, Edge 8 %, Firefox 3,6 %, suivis de Samsung Internet, Opera et autres](./img/StatCounter-browser-CA-monthly-202404-202504-bar.png)

Les principaux navigateurs sont:
* Chrome
* Safari
* Firefox
* Edge

Au Canada, Chrome a la plus grosse part de marché, suivi de Safari puisque ce dernier est le navigateur par défaut sur les appareils iPhone.

Au final, il n'existe pas "un meilleur navigateur". Plusieurs navigateurs coexistent parce qu’ils offrent chacun un équilibre différent entre performance, compatibilité, confidentialité et fonctionnalités. Cela permet aux utilisateurs et aux développeurs de choisir l'outil le mieux adapté à leurs besoins.

La concurrence entre navigateurs (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, etc.) encourage l'innovation: chacun optimise son moteur de rendu pour accélérer le chargement des pages ou encore pour renforcer la sécurité et propose des extensions ou des modules spécifiques.

De plus, certains navigateurs adoptent plus ou moins rapidement les nouveaux standards du Web. En tant que développeur, il peut être parfois utile d'utiliser une version de navigateur ayant adopté les derniers standards.

Il est donc important de tester son application web sur plusieurs navigateurs. De cette façon, on s’assure que l'application fonctionne de manière cohérente pour tous les utilisateurs, quel que soit le navigateur utilisé.

## Installation de Firefox

Dans le cadre du cours, vous êtes libre d'utiliser le navigateur qui vous convient, mais je vous propose d'utiliser Firefox.

1. Utilisez un navigateur que vous avez déjà sur votre ordinateur. Par exemple, Edge devrait être installé par défaut sur Windows.
    ![Capture d'écran du menu Démarrer de Windows 11 avec Microsoft Edge encerclé dans la liste des applications](./img/firefox/01-windows-menu.png)
2. Rendez-vous à l'addresse https://www.mozilla.org/fr/firefox/new/ pour télécharger Firefox
    ![Capture d'écran de la page de téléchargement de Firefox sur mozilla.org, ouverte dans le navigateur Edge](./img/firefox/02-firefox.com.png)
3. Appuyez sur le bouton de téléchargement pour débuter
    ![Capture d'écran de la page mozilla.org avec le bouton « Télécharger Firefox » encerclé](./img/firefox/03-download-btn.png)
4. Ouvrez l'installateur. Il devrait être dans votre dossier `Téléchargements` ou `Downloads` en anglais
    ![Capture d'écran de l'Explorateur de fichiers Windows avec le fichier « Firefox Installer » encerclé dans le dossier Downloads](./img/firefox/04-download-folder.png)
5. Choisir `Oui` ou `Yes` à cette question
    ![Boîte de dialogue Contrôle de compte d'utilisateur de Windows demandant d'autoriser l'installateur Firefox, avec le bouton « Yes » encerclé](./img/firefox/05-yes.png)
6. Attendez que le processus d'installation se termine
    ![Fenêtre de l'installateur Firefox affichant une barre de progression et le message « Now installing »](./img/firefox/06-wait.png)
7. Lorsque l'installation sera terminée, Firefox s'ouvrira. L'étape suivante est à votre discrétion, tout dépendant si vous voulez faire de Firefox votre navigateur par défaut ou non.
    ![Capture d'écran de Firefox ouvert après l'installation, proposant notamment de définir Firefox comme navigateur par défaut](./img/firefox/07-done.png)