# Strapi avec Docker - Guide de Démarrage

Ce projet configure une application Strapi pour qu'elle s'exécute à l'intérieur d'un conteneur Docker. Cette approche garantit un environnement de développement stable, portable et cohérent, évitant les problèmes de compatibilité entre les différentes versions de Node.js ou les systèmes d'exploitation.

## 🤔 Quel est le rôle de Docker ici ?

Docker est une plateforme qui permet d'"emballer" une application et toutes ses dépendances dans une boîte virtuelle standardisée appelée **conteneur**.

Dans ce projet, Docker nous sert à :

1.  **Éviter les conflits de version :** Strapi nécessite une version spécifique de Node.js (v18). Plutôt que de l'installer sur votre machine (ce qui pourrait perturber vos autres projets), nous disons à Docker d'utiliser une image qui contient déjà Node.js v18.
2.  **Garantir la cohérence :** Le conteneur se comportera de la même manière sur n'importe quel ordinateur (Windows, macOS, Linux). Fini le fameux "ça marche sur ma machine !".
3.  **Isoler les dépendances :** Les `node_modules` sont installés *à l'intérieur* du conteneur. Ils sont ainsi parfaitement adaptés au système d'exploitation du conteneur et n'interfèrent pas avec votre machine locale (et vice-versa).
4.  **Simplifier le démarrage :** Une seule commande (`docker-compose up`) suffit pour lancer l'application avec sa configuration correcte.

---

## 🛠️ Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants sur votre machine :

-   [Docker](https://www.docker.com/get-started)
-   [Docker Compose](https://docs.docker.com/compose/install/) (généralement inclus avec Docker Desktop)

---

## 📂 Structure du projet

Voici les fichiers clés qui font fonctionner la magie de Docker :

-   `Dockerfile` : C'est la "recette" pour construire l'image de notre application Strapi. Il décrit les étapes : partir d'une image Node.js, copier les fichiers, installer les dépendances, etc.
-   `docker-compose.yml` : C'est le "chef d'orchestre". Il définit les services qui composent notre application (ici, juste un service : `strapi`), comment les construire, quels ports ouvrir, et comment gérer les volumes de données.
-   `.dockerignore` : C'est le garde-fou. Il indique à Docker quels fichiers ignorer lors de la construction de l'image. Sa règle la plus importante ici est d'ignorer `node_modules` pour forcer une installation propre à l'intérieur du conteneur.

---

## 🚀 Guide d'installation de A à Z

Suivez ces étapes pour lancer le projet :

1.  **Cloner le projet** (si ce n'est pas déjà fait) :
    ```bash
    git clone <URL_DU_PROJET>
    cd <NOM_DU_DOSSIER>
    ```

2.  **Construire l'image et démarrer le conteneur :**
    La première fois, cette commande va construire l'image Docker en suivant les instructions du `Dockerfile`, puis démarrer le service.
    ```bash
    docker-compose up --build
    ```
    Les fois suivantes, vous pourrez simplement utiliser `docker-compose up` pour démarrer.

3.  **Accéder à Strapi :**
    Une fois le conteneur démarré, Strapi est accessible à l'adresse suivante :
    -   **Panneau d'administration :** [http://localhost:1337/admin](http://localhost:1337/admin)

    Lors de votre première visite, Strapi vous demandera de créer le premier compte administrateur.

---

## 💡 Workflow de développement

### Modifier le code

Le dossier `./app` de votre machine est synchronisé avec le dossier `/srv/app` à l'intérieur du conteneur (grâce à la magie des volumes Docker).

➡️ **Vous pouvez modifier les fichiers de votre projet Strapi dans votre éditeur de code habituel, et les changements seront immédiatement pris en compte par Strapi dans le conteneur.**

### Ajouter une nouvelle dépendance

Si vous ajoutez une dépendance (ex: `npm install un-plugin-strapi`), la nouvelle dépendance sera installée dans les `node_modules` *à l'intérieur du conteneur*. Cependant, votre `package.json` et `package-lock.json` locaux seront mis à jour. Pour que tout soit correctement reconstruit, il est recommandé de :

1.  Arrêter les conteneurs : `docker-compose down`
2.  Reconstruire l'image avec la nouvelle dépendance : `docker-compose up --build`

### Erreurs courantes évitées par cette configuration

-   **Problème :** Incompatibilité des `node_modules` entre la machine hôte et le conteneur.
-   **Solution :** Le fichier `.dockerignore` empêche les `node_modules` locaux d'être copiés, et le `docker-compose.yml` utilise un volume nommé pour isoler les `node_modules` du conteneur.

---

## 🐳 Commandes Docker utiles

-   **Démarrer les services :**
    ```bash
    docker-compose up
    ```
-   **Démarrer en arrière-plan :**
    ```bash
    docker-compose up -d
    ```
-   **Arrêter les services :**
    ```bash
    docker-compose down
    ```
-   **Arrêter et supprimer les volumes (pour une réinitialisation complète) :**
    ```bash
    docker-compose down -v
    ```
-   **Voir les logs :**
    ```bash
    docker-compose logs -f strapi
    ```
