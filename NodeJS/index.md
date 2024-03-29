# Cours NodeJS

Voici mon support de cours pour NodeJS. N'hésitez pas à me faire vos retours sur ce [lien github](http://github.com/ldandoy/cours). Ou par mail: [ldandoy@overconsulting.net](mailto:ldandoy@overconsulting.net)

Ce support est en cours d'écriture et évolue, il est écrit pour la version 15 de nodeJS. Mais il devrait être valable pour les versions plus ancienne (8 minimum).

## Sommaire <!-- omit in toc -->

- [Cours NodeJS](#cours-nodejs)
  - [Introduction](#introduction)
  - [Navigateur vs Server](#navigateur-vs-server)
  - [Installation](#installation)
  - [Premiers pas](#premiers-pas)
    - [Hello World](#hello-world)
    - [Les variables](#les-variables)
    - [Les structures de tests](#les-structures-de-tests)
      - [Switch structure](#switch-structure)
      - [if-else structure](#if-else-structure)
    - [Les boucles](#les-boucles)
      - [Boucle For](#boucle-for)
      - [Boucle While](#boucle-while)
      - [Boucle map](#boucle-map)
  - [Event Loop](#event-loop)
  - [NPM: le gestionnaire de packets](#npm-le-gestionnaire-de-packets)
  - [Packet Nodemon](#packet-nodemon)
    - [Installation de nodemon](#installation-de-nodemon)
    - [Utilisation de nodemon](#utilisation-de-nodemon)
  - [Express: Infrastructure Web minimaliste, souple et rapide pour Node.js](#express-infrastructure-web-minimaliste-souple-et-rapide-pour-nodejs)
    - [Qu'est-ce qu'une API REST](#quest-ce-quune-api-rest)
    - [Premier projet nodeJS et lancement du projet](#premier-projet-nodejs-et-lancement-du-projet)
      - [Morgan: le logger](#morgan-le-logger)
      - [PostMan](#postman)
      - [GET request](#get-request)
      - [POST request](#post-request)
      - [PUT request](#put-request)
      - [DELETE request](#delete-request)
    - [Les modules Cors et Helmet](#les-modules-cors-et-helmet)
    - [Organiser son code en plusieurs fichiers](#organiser-son-code-en-plusieurs-fichiers)
    - [Middleware](#middleware)
      - [Définition et rôle](#définition-et-rôle)
      - [Mise en place de deux middlewares](#mise-en-place-de-deux-middlewares)
    - [Connexion avec la BDD](#connexion-avec-la-bdd)
      - [.env](#env)
      - [MongoDB](#mongodb)
      - [Mysql](#mysql)
  - [Passons à un cas réel](#passons-à-un-cas-réel)
  - [Mettre en place une authentification (JWT)](#mettre-en-place-une-authentification-jwt)
    - [Qu'est ce que les Json Web Token ?](#quest-ce-que-les-json-web-token-)
    - [Mise en place](#mise-en-place)

## Introduction

Qu'est-ce que nodeJS ? C'est un runtime JavaScript, utilisant le moteur v8 de chrome. Mais qu'est ce que tout ça veut dire un runtime JavaScript ?

un runtime est un logiciel responsable de l'exécution des programmes informatiques écrits dans un language donné. [En savoir plus](https://fr.wikipedia.org/wiki/Environnement_d%27ex%C3%A9cution)

Mais pour expliquer les choses de façon plus simple, en gros, vous allez écrire un programme en JavaScript par exemple, il faudra un programme capable de lire le Javacript, et d'executer les commandes que vous aurez écrit dedans. NodeJS est donc ce programme. C'est le même que celui utilisé par le navigateur chrome.

## Navigateur vs Server

Mais alors si on a chrome qui fait déjà le travail, pourquoi NodeJS ? Et bien c'est assez simple, parfois, vous voulez écrire un programme qui n'a pas besoin de renvoyer du HTML ou du CSSS. Vous pouvez l'écrire en PHP, en ruby ou ecnore en JavaScript. et l'excuter hors d'un navigateur (si c'était dans le navigateur, on parlerait de Javascript côté client), comme sur le serveur par exemple, ou en ligne de commande sur votre ordinateur. On parlera alors de Javascript executer côté serveur.

On reviendra sur cette notion de client serveur, mais pour faire court, une personne qui veut accêter à une ressource sur internet, sera appeler cliente, et elle deva utiliser un client HTTP, pour demander une page d'un site ou une autre. Et cette demande est faite à un serveur qui lui sera chargé de lui répondre, par la page demander, on parle alors de server HTTP.

La particularité du JS (JavaScript) est qu'il peut s'éxecuter côté client et côté serveur. Contrairement à d'autre language comme le PHP, le ruby ou le python. Dans ce cours, nous ne verrons que le JS côté Serveur.

## Installation

Pour faire l'installation, vous pouvez le télécharger l'installateur à l'adresse suivante [http://nodejs.org](http://nodejs.org), il vous suffit de double cliquer sur l'installateur (en sélectionnant celui correspondant à voter système d'exploitation).

## Premiers pas

### Hello World

Comme dans tout bon cours de programmation, il faut commencer par le Hello world. Allez commençons notre premier programme en Javascript.

Dans un premier temps, il faudra ouvrir votre éditeur de texte préféré ([VScode](https://code.visualstudio.com/), [SublimText](https://www.sublimetext.com/), etc...). Une fois installé, créer un dossier dans votre répertoire personnel nommé cours-nodejs. Ajouter ce répertoire à votre éditeur de texte (IDE). Si vous êtes sous linux, ou si vous utilisez le terminal, ce que je vous recommande grandement:

```bash
ldandoy@host ~
$ mkdir cours-nodejs
$ cd cours-nodejs
$ code .
```

Une fois Visual Studio Code ouvert, créez le fichier helloworld.js. Copiez le code suivant dedans.

```Javascript
// ~/cours-nodejs/helloworld.js

console.log('Hello World !')
```

Une fois créé, vous pouvez ouvrir votre terminal, et vous rendre dans le dossier que vous venez de créer. Puis, il va falloir executer le programme javascript helloworld.js.

```bash
ldandoy@host ~/cours-nodejs 
$ node helloworkd.js # Hello World !
```

Vous devriez voir Hello World ! s'afficher dans votre terminal. On dit que le fichier helloworld, a été interprété par nodejs, ou qu'il a été executé par le runtime nodejs.

### Les variables

Ddans tout programme, on a besoin de pouvoir stocker et garder des informations tout au long de son programme. Voici les différents type de variable qui existent, avec un exemple. Je vous invite a créer un nouveau fichier, pour en garder trace.

Pour créer une variable, il y a deux ou trois possibilité (let, const et var). var est l'ancienne notation, qui existe encore, mais qui est de moins en moins utilisé. attention, const permet de créer une constante qui bien sûr ne peut pas être modifié une fois créé.

```Javascript
// ~/cours-nodejs/typevariable.js

let num     = 12 // Variable numerique qui vaut 12
let text    = "Ceci est une chaine de caractères" // Variable 
let bool    = true // Variable boolean qui prend true ou false comme valeur possible.
let tableau = [12, 45, "test", "toto"] // Variable de type tableau
let object  = { id: 12, nom: "DANDOY", prenom: "Loïc" } // Variable de type objet, qui a trois attributs (id, nom et prenom)
```

Il existe aussi des constantes prédéfinit, tel que __direname
__filename. Pour voir à quoi elle correspondent, vous pouvez ajouter les lignes suivantes à votre fichier typevariable.js

```Javascript
// ~/cours-nodejs/typevariable.js

console.log("Path du dossier du fichier encours d'execution: ", __direname)
console.log("Path complète du fichier encours d'execution: ", __filename)
```

Vous vous demandez peut-être ce que signigie Path d'un fichier ou d'un dossier (appelé aussi répertoire). C'est une variable qui contient le l'endroit où se trouve le fichier ou le dossier dans votre ordinateur.

### Les structures de tests

En JavaScript, il y a deux structures de test: if et switch case. Nous allons voir un exemple de chaque. Mais pour être plus précis, il faut savoir que l'on utilise la structure switch case, lorsque l'on a une même variable qui prend plusieurs valeurs. Alors qu'on utilise la structure if, est pour tester deux valeurs.

#### Switch structure

```Javascript
// ~/cours-nodejs/switch.js

let test = 4

switch (test) {
  case 1:
    console.log("Cas lorsque test = 1.")
    break
  case 2:
    console.log("Cas lorsque test = 2.")
    break
  case 3:
    console.log("Cas lorsque test = 3.")
    break
  case 4:
    console.log("Cas lorsque test = 4.")
    break
  default:
    console.log("Cas lorsque test n'est pas égale au valeur des cas précédents")
}
```

#### if-else structure

```Javascript
// ~/cours-nodejs/if.js

let age = 19

if (age <= 13) {
  console.log("Vous ne pouvez pas entrée, vous avez moins de 13 ans.")
elseif (age > 13 && age < 18) {
  console.log("Vous pouvez entrer, vous devez être accompagné !")
} else {
  console.log("Vous pouvez entrer, vous êtes majeur.")
}
```

### Les boucles

Il existe 3 boucles en Javascript: For, While et Foreach.

#### Boucle For

Boucle qui affiche les chiffres de 0 à 9.

```Javascript
// ~/cours-nodejs/for.js

for (let i = 0; i> 10; i++) {
  console.log(i)
}
```

#### Boucle While

Bouche qui affiche les nombres de 0 à 9

```Javascript
// ~/cours-nodejs/while.js

let compteur = 0

while (compteur < 10) {
  console.log(compteur)
  compteur ++
}
```

#### Boucle map

```Javascript
// ~/cours-nodejs/foreach.js

let tab = ['Chat', 'Chien', 'Merle']

tab.map (item => {
  console.log(item)
})
```

## Event Loop

## NPM: le gestionnaire de packets

npm est le gestionnaire de paquets officiel de Node.js. Depuis la version 0.6.3 de Node.js, npm fait partie de l'environnement et est donc automatiquement installé par défaut. npm fonctionne avec un terminal et gère les dépendances pour une application. Il permet également d'installer des applications Node.js disponibles sur le dépôt npm.

npm va donc vous permettre d'ajouter des fonctionnalites dans votre application nodejs. Le premier sera Nodemon, puis nous installerons le package express qui permettra de créer une API REST. Nous reviendons sur ce qu'est une API REST par la suite.

## Packet Nodemon

Nodemon permet de relancer le code, dès qu'il y a une modification au niveau des fichiers sources javascrpits.

### Installation de nodemon

Pour installer nodemon, il utilise npm avec l'option -g afin d'installer globalement dans l'ordinateur. Et grâce à l'option -D, on l'installe uniquement dans l'environnement de dev, et non en production.

```bash
ldandoy@host ~/cours-nodejs 
$ npm i -g nodemon -D
```

### Utilisation de nodemon

En suite, on peut executer le programme, cette fois avec nodemon.

```bash
ldandoy@host ~/cours-nodejs 
$ nodemon foreach.js
[nodemon] 2.0.6
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node foreach.js`
Chat
Chien
Merle
[nodemon] clean exit - waiting for changes before restart
```

Comme vous pouvez le voir, une fois executer nodemon attend, et si vous changer votre fichier, il sera tout de suite relancer et réexcuter, pour développer, c'est partique cela évite de redemarrer à chaque fois. contrairement à node, qui lui ne réexecute votre code que si vous le relancez.

## Express: Infrastructure Web minimaliste, souple et rapide pour Node.js

### Qu'est-ce qu'une API REST

Une API REST (également appelée API RESTfull) est une interface de programmation d'application qui respecte les contraintes de l'architecture REST (pour « Representational State Transfer »).

Une API, ou interface de programmation d'application, est un ensemble de définitions et de protocoles qui facilite la création et l'intégration de logiciels d'applications. Elle est parfois considérée comme un contrat entre un fournisseur d'informations et un utilisateur d'informations, qui permet de définir le contenu demandé au consommateur (l'appel) et le contenu demandé au producteur (la réponse). Par exemple, l'API d'un service de météo peut demander à l'utilisateur de fournir un code postal et au producteur de renvoyer une réponse en deux parties : la première concernant la température maximale et la seconde la température minimale. [Pour en savoir plus](https://www.redhat.com/fr/topics/api/what-is-a-rest-api).

### Premier projet nodeJS et lancement du projet

A présent nous allons mettre en place un serveur, afin de mettre en place cette API REST. Dans un premier temps on va créer un dossier serveur, dans lequel on va initialiser notre projet, puis le configurer avec nodemon, et enfin créer notre premier serveur express et le lancer.

```bash
ldandoy@host ~/cours-nodejs 
$ mkdir server # Création du dossier
$ cd server # On entre dans le dossier server
$ npm init -y # Initialisation du projet

Wrote to ~\cours-nodejs\NodeJS\code\server\package.json:

{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

A présent on va configurer le projet, pour intégrer nodemon à notre serveur. Pour ça, il faut modifier le fichier package.json

```Javascript
// ~/cours-nodejs/server/package.json

{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

Il faut installer à présent le module express à notre projet.

```bash
ldandoy@host ~/cours-nodejs 
$ npm i express
```

```Javascript
// ~/cours-nodejs/server/index.js

const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```

Maintenant on peut lancer le serveur pour tester.

```bash
ldandoy@host ~/cours-nodejs/server
$ npm run dev

> server@1.0.0 dev ~\cours\NodeJS\code\server
> nodemon index.js

[nodemon] 2.0.6
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
Example app listening at http://localhost:3000
```

#### Morgan: le logger

Pour ajouter morgan au server, afin de logger plus facile les requètes reçut par le server.

```bash
ldandoy@host ~/cours-nodejs/server
npm i morgan
```

En suite, il faut modifier le fichier server.js, afin de démarrer morgan.

```Javascript
// ~/cours-nodejs/server/index.js

const express = require('express')
const morgan  = require('morgan')

const app = express()
const port = 3000

app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```

#### PostMan

Les navigateurs normaux (chrome, firefox...) ne permettent de faire que des requètes GET et POST. Il nous faut donc un outils qui va nous permettre de créer des requètes PUT, DELETE... Et ainsi de suite. Pour l'installer, il faut vous connecter à [https://www.postman.com/](https://www.postman.com/)

#### Thunderclient

Mais si vous ne voulez pas installer de logiciel en plus, alors vous pouvez tout simplement installer l'extention Visual Studio Code: thunderClient. Qui vous permettra de faire vos requetes directement dans VSCode. 

#### GET request

On a vu la requète la plus simple, GET /, à présent, on va complexifier les choses et créer un GET avec l'url /todos, qui va renvoyer la liste des todos.

```Javascript
// ~/cours-nodejs/server/index.js

const express = require('express')
const morgan  = require('morgan')

const app = express()
const port = 3000

app.use(morgan('dev'))

const todos = [{
  id: 1,
  nom: "Todo 1",
  content: "Contenu de la todo 1"
},{
  id: 2,
  nom: "Todo 2",
  content: "Contenu de la todo 2"
},{
  id: 3,
  nom: "Todo 3",
  content: "Contenu de la todo 3"
}]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/todos', (req, res) => {
  res.status(200).json(todos)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```

![test](https://github.com/ldandoy/cours/blob/main/NodeJS/img/todos.jpg)

En suite, nous allons nous occuper de la route /todos/1, qui va nous renvoyer la todo correspondant à l'id que l'on a demander, ici l'id sera égale à 1.

```Javascript
// ~/cours-nodejs/server/index.js

const express = require('express')
const morgan  = require('morgan')

const app = express()
const port = 3000

app.use(morgan('dev'))

const todos = [{
  id: 1,
  nom: "Todo 1",
  content: "Contenu de la todo 1"
},{
  id: 2,
  nom: "Todo 2",
  content: "Contenu de la todo 2"
},{
  id: 3,
  nom: "Todo 3",
  content: "Contenu de la todo 3"
}]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/todos', (req, res) => {
  res.status(200).json(todos)
})

app.get('/todos/:id', (req, res) => {
  id = req.params.id
  res.status(200).json(todos[id])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```

![test](https://github.com/ldandoy/cours/blob/main/NodeJS/img/todo1.jpg)

#### POST request

Les requètes POST servent dans une architechture REST pour ajouter des éléments.

```Javascript
// ~/cours-nodejs/server/index.js

const express = require('express')
const morgan  = require('morgan')

const app = express()
const port = 3000

app.use(morgan('dev'))

app.use(express.json());

let todos = [{
  id: 1,
  nom: "Todo 1",
  content: "Contenu de la todo 1"
},{
  id: 2,
  nom: "Todo 2",
  content: "Contenu de la todo 2"
},{
  id: 3,
  nom: "Todo 3",
  content: "Contenu de la todo 3"
}]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/todos', (req, res) => {
  res.status(200).json(todos)
})

app.get('/todos/:id', (req, res) => {
  id = req.params.id
  res.status(200).json(todos[id])
})

app.post('/todos', (req, res) => {
  todo = req.body

  todos.push(todo)

  res.status(200).json(todos)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```

![test](https://github.com/ldandoy/cours/blob/main/NodeJS/img/post_todo.jpg?raw=true)

#### PUT request

Les requètes PUT servent dans une architechture REST à mettre à jour un document ou une ligne complète.

```Javascript
// ~/cours-nodejs/server/index.js

const express = require('express')
const morgan  = require('morgan')

const app = express()
const port = 3000

app.use(morgan('dev'))

app.use(express.json());

let todos = [{
  id: 1,
  nom: "Todo 1",
  content: "Contenu de la todo 1"
},{
  id: 2,
  nom: "Todo 2",
  content: "Contenu de la todo 2"
},{
  id: 3,
  nom: "Todo 3",
  content: "Contenu de la todo 3"
}]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/todos', (req, res) => {
  res.status(200).json(todos)
})

app.get('/todos/:id', (req, res) => {
  id = req.params.id
  res.status(200).json(todos[id])
})

app.post('/todos', (req, res) => {
  todo = req.body

  todos.push(todo)

  res.status(200).json(todos)
})

app.put('/todos/:id', (req, res) => {
  id = req.params.id
  newTodo = req.body

  todos.forEach((todo, key) => {
    if (todo.id == id) {
      todos[key] = newTodo
    }
  })

  res.status(200).json(todos)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```

![test](https://github.com/ldandoy/cours/blob/main/NodeJS/img/put_todo.jpg?raw=true)

#### DELETE request

Les requètes DELETE servent dans une architechture REST à supprimer un document ou une ligne complète.

```Javascript
// ~/cours-nodejs/server/index.js

const express = require('express')
const morgan  = require('morgan')

const app = express()
const port = 3000

app.use(morgan('dev'))

app.use(express.json());

let todos = [{
  id: 1,
  nom: "Todo 1",
  content: "Contenu de la todo 1"
},{
  id: 2,
  nom: "Todo 2",
  content: "Contenu de la todo 2"
},{
  id: 3,
  nom: "Todo 3",
  content: "Contenu de la todo 3"
}]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/todos', (req, res) => {
  res.status(200).json(todos)
})

app.get('/todos/:id', (req, res) => {
  id = req.params.id
  res.status(200).json(todos[id])
})

app.post('/todos', (req, res) => {
  todo = req.body

  todos.push(todo)

  res.status(200).json(todos)
})

app.put('/todos/:id', (req, res) => {
  id = req.params.id
  newTodo = req.body

  todos.forEach((todo, key) => {
    if (todo.id == id) {
      todos[key] = newTodo
    }
  })

  res.status(200).json(todos)
})

app.delete('/todos/:id', (req, res) => {
  id = req.params.id
  todos = todos.filter(todo => todo.id != id)
  res.status(200).json(todos)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```

![test](https://github.com/ldandoy/cours/blob/main/NodeJS/img/delete_todo.jpg?raw=true)

### Les modules Cors et Helmet

Pour la suite nous allons installer plusieurs modules en même temps. Le modules cors, qui va nous permettre de pouvoir appeler l'api à partir d'une application web installer sur notre ordianteur (En ReactJS ou Angular par exemple). en suite nous installerons helmet, qui rajoute de la sécurité, en cachant la version de NodeJs qu'on utilise par exemple. En gros cette librairie modifie les headers des requètes pour cachre les informations sur notre serveur.

```bash
ldandoy@host ~/cours-nodejs/server
npm i cors helmet
```

Maintent modifions notre serveur pour qu'il utilise ces deux modules.

```Javascript
// ~/cours-nodejs/server/index.js

const express = require('express')
const morgan  = require('morgan')
const helmet  = require('helmet')
const cors    = require('cors')

const app = express()
const port = 3000

app.use(morgan('dev'))
app.use(helmet())
app.use(cors())

app.use(express.json());

```

### Organiser son code en plusieurs fichiers

Vous l'avez compris, on ne veut pas tout mettre dans le même fichier. Alors pour organsier son code, le mieux est de mettre les routes d'un côté, pour ne pas tout avoir dans le même fichier. Par exemple si vous avez une api pour des todos, et une pour des catégory, il faudra créer un dossier routes et créer deux fichiers dedans l'un todoRoutes.js et l'autre catRoutes.js.

Maintenant appliquons ce que l'on vient de dire ici.

```bash
ldandoy@host ~
$ mkdir routes
$ cd routes
$ touch todosRoute.js
```

Normalement votre dossier devrait être comme suit:

```
.gitignore
index.js
package-lock.json
package.json
node_modules
routes
 |- todosRoute.js
```

A présent vous pouvez déplacer le code des routes du fichier index.js vers todosRoute.js

```JavaScript
// ~/cours-nodejs/server/routes/todosRoute.js

const express = require('express');
const Router = express.Router();

let todos = [{
    id: 1,
    nom: "Todo 1",
    content: "Contenu de la todo 1"
},{
    id: 2,
    nom: "Todo 2",
    content: "Contenu de la todo 2"
},{
    id: 3,
    nom: "Todo 3",
    content: "Contenu de la todo 3"
}]

Router.get('/todos', (req, res) => {
    res.status(200).json(todos)
})
  
Router.get('/todos/:id', (req, res) => {
    id = req.params.id
    res.status(200).json(todos[id])
})
  
Router.post('/todos', (req, res) => {
    todo = req.body
  
    todos.push(todo)
  
    res.status(200).json(todos)
})
  
Router.put('/todos/:id', (req, res) => {
    id = req.params.id
    newTodo = req.body
  
    todos.forEach((todo, key) => {
        if (todo.id == id) {
            todos[key] = newTodo
        }
    })
  
    res.status(200).json(todos)
})
  
Router.delete('/todos/:id', (req, res) => {
    id = req.params.id
    todos = todos.filter(todo => todo.id != id)
    res.status(200).json(todos)
})

// Export du module pour pouvoir l'intégrer dans le require
module.exports = Router;
```

```JavaScript
// ~/cours-nodejs/server/index.js

const express = require('express')
const morgan  = require('morgan')
const helmet  = require('helmet')
const cors    = require('cors')

const todosRoute = require('./routes/todosRoute');

const app = express()
const port = 3000

app.use(morgan('dev'))
app.use(helmet())
app.use(cors())

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/', todosRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```

### Middlewares

#### Définition et rôle

Un middleware est une fonction que l'on va appeler dans notre chaine de traitement. Par exemple, on va avoir la fonction qui va gérer les routes, puis une autre fonction pourrait s'occuper des erreurs, et encore une autre s'executer s'il n'y aucune route de trouvé.

#### Mise en place de deux middlewares

Nous allons créer nous même deux middlewares, l'un pour checker si la route a été trouver, et l'autre pour savoir s'il y a une erreur qui c'est produite pour la renvoyer à l'utilisateur.

Créer le dossier middlewares, puis créez deux fichiers notFound.js et errorHandler.js.

```JavaScript
// ~/cours-nodejs/server/errorHandler.js

const errorHandler = (req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? "Erreur" : error.stack
    })
}

module.exports = errorHandler
```

```JavaScript
// ~/cours-nodejs/server/notFound.js

const notFound = (req, res, next) => {
    const error = new Error (`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
}

module.exports = notFound
```

```JavaScript
// ~/cours-nodejs/server/index.js

const express = require('express')
const morgan  = require('morgan')
const helmet  = require('helmet')
const cors    = require('cors')

const todosRoute = require('./routes/todosRoute');
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');

const app = express()
const port = 3000

app.use(morgan('dev'))
app.use(helmet())
app.use(cors())

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/', todosRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```

### Connexion avec la BDD

Comme vous l'avez vu, à chaque fois que vous redémarrer votre server, tout revient au début, avec les trois todos du tableau. Donc il faut utiliser une base de donnée pour stocker les données.

#### .env

Dans un premier temps, on va créer un fichier .env, afin de stocker les informations de connection à la base de données, par la suite.

```bash
MONGO_URL = 
```

#### MongoDB

La première étape est de vous rendre sur [https://cloud.mongodb.com/](https://cloud.mongodb.com/)



Une fois tout configurer, il ne reste plus qu'a vous connecter.

Copier  l'url de connection, dans le .env, puis modifier le mot de passe et le nom de la base de données.

Maintenant, il faut ajouter un module qui va permettre de prendre en compte ce .env. c'est dotenv qu'il faut installer.

```bash
ldandoy@host ~/cours-nodejs 
$ npm i dotenv
```

Une fois la gestion du .env gérer, il faut ajouter le module Mongoose qui est celui que nous allons utiliser pour les requètes et la connection à la base de données que vous venez de créer.

```bash
ldandoy@host ~/cours-nodejs 
$ npm i mongoose
```

Créez un nouveau fichier dans le dossier middlewares, pour gérer la connexion.

```JavaScript
// ~/cours-nodejs/server/middleswares/conenctDB.js

require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('Connected to DB');
    });
}

module.exports = connectDB;
```

Puis il faut initialiser la connection, dans le fichier index.js.

```JavaScript
// ~/cours-nodejs/server/index.js

const express = require('express')
const morgan  = require('morgan')
const helmet  = require('helmet')
const cors    = require('cors')

const todosRoute = require('./routes/todosRoute');
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');
const connectDB = require('./middlewares/connectDB');

connectDB()

const app = express()
const port = 3000

app.use(morgan('dev'))
app.use(helmet())
app.use(cors())

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/', todosRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```

Maintenant, on va s'occuper de lier notre application à la base de données. Pour le moment on est conencté, mais il faut encore ajouter, lister, modifier et supprimer les données.

Pour commencer il va falloir créer un model pour représenter nos données. Restons sur notre exemple de la todo liste. Créer un dossier models, puis un fichier todoModel.js.

```bash
ldandoy@host ~/cours-nodejs/server
$ mkdir models
$ cd models
$ touch todoModel.js
```

```JavaScript
// ~/cours-nodejs/server/models/todoModel.js

const mongoose = require("mongoose");

const todoModel = new mongoose.Schema({
    nom: {
        type: String,
        require: true,
    },
    content: {
        type: String,
        require: true,
    },
},{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

module.exports = mongoose.model('todos', todoModel)
```

Maintenant on doit créé un nouveau fichier de routes.

```JavaScript
// ~/cours-nodejs/server/routes/todosMongoRoute.js

const express = require('express');
const todoModel = require('../models/todoModel');

const Router = express.Router();

// GET: /api/todos
Router.get('/todos', (req, res, next) => {
    todoModel.find()
    .then(todos => res.status(200).send(todos))
    .catch(error => next(error));
});

// GET: /api/todos/:todoId
Router.get('/todos/:todoId', (req, res, next) => {
    const id = req.params.todoId;

    todoModel.findOne({_id: id})
    .then(todo => {
        if (todo === null)
            res.status(200).send("La todo n'a pas été trouvé.")
        res.status(200).send(todo)
    })
    .catch(error => next(error));
});

// POST: /api/todos
Router.post('/todos', (req, res, next) => {
    const todo = new todoModel({
        body: req.body.body,
        user: req.body.userId,
    });

    todo.save()
    .then(todo => {res.status(200).send(todo)})
    .catch(error => {next(error)});
});

// PUT /api/todos/:todoId
Router.put('/todos/:todoId', (req, res, next) => {
    const id = req.params.todoId;

    todoModel.updateOne({_id: id}, {$set: {body: req.body.body}})
    .then(tw => {res.status(200).send("Todo bien modifié.")})
    .catch(error => {next(error)});
});

// DELETE /api/todos/:todoId
Router.delete('/todos/:todoId', (req, res, next) => {
    const id = req.params.todoId;

    todoModel.deleteOne({_id: id})
    .exec()
    .then(result => {res.status(202).send('Todo bien supprimé.')})
    .catch(error => {next(error)});
})

module.exports = Router;
```

Et pour finir, il faut dire au serveur de l'utiliser.

```JavaScript
// ~/cours-nodejs/server/index.js

const express = require('express')
const morgan  = require('morgan')
const helmet  = require('helmet')
const cors    = require('cors')

const todosRoute = require('./routes/todosRoute');
const todosMongoRoute = require('./routes/todosMongoRoute');
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');
const connectDB = require('./middlewares/connectDB');

connectDB()

const app = express()
const port = 3000

app.use(morgan('dev'))
app.use(helmet())
app.use(cors())

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/',    todosRoute);
app.use('/api', todosMongoRoute)

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```

Exemple de requète GET

![test](https://github.com/ldandoy/cours/blob/main/NodeJS/img/api_todo1.jpg?raw=true)

Exemple de requète POST

![test](https://github.com/ldandoy/cours/blob/main/NodeJS/img/api_todo2.jpg?raw=true)

Exemple de requète PUT

![test](https://github.com/ldandoy/cours/blob/main/NodeJS/img/api_todo3.jpg?raw=true)

Exemple de requète GET

![test](https://github.com/ldandoy/cours/blob/main/NodeJS/img/api_todo4.jpg?raw=true)

Exemple de requète DELETE

![test](https://github.com/ldandoy/cours/blob/main/NodeJS/img/api_todo5.jpg?raw=true)

Pour en savoir plus [Voir: mongoose](https://mongoosejs.com/)

#### Mysql

A venir: [Voir: sequelize](https://sequelize.org/)

## Ajoutons une nouvelle API

Dans ce cas nous allons créer une API pour les produits. Voici la scruture d'un produit

```Json
{
  "_id":          "ID du produit",
  "name":         "Nom du produit",
  "price":        "prix du produit",
  "description":  "Description du produit",
  "created_at":   "Date de création",
  "updated_at":   "Date de dernière mise à jour"
}
```

Commençons par la mise en place du models

```Javascript
// ~/cours-nodejs/server/models/productModel.js

const mongoose = require("mongoose");

const productModel = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
},{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

module.exports = mongoose.model('products', productModel)
```

Puis par mettre en place la route

```Javascript
// ~/cours-nodejs/server/routes/productsRoute.js

const express = require('express');
const productModel = require('../models/productModel');

const Router = express.Router();

// GET: /api/products
Router.get('/products', (req, res, next) => {
    productModel.find()
    .then(products => res.status(200).send(products))
    .catch(error => next(error));
});

// GET: /api/products/:productId
Router.get('/products/:productId', (req, res, next) => {
    const productId = req.params.productId;

    productModel.findOne({_id: productId})
    .then(product => {
        if (product === null)
            res.status(200).send("Le produit n'a pas été trouvé.")
        res.status(200).send(product)
    })
    .catch(error => next(error));
});

// POST: /api/products
Router.post('/products', (req, res, next) => {
    const product = new productModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    });

    product.save()
    .then(product => {res.status(200).send(product)})
    .catch(error => {next(error)});
});

// PUT /api/products/:productId
Router.put('/products/:productId', (req, res, next) => {
    const productId = req.params.productId;

    productModel.updateOne({_id: productId}, {$set: {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    }})
    .then(tw => {res.status(200).send("Produit bien modifié.")})
    .catch(error => {next(error)});
});

// DELETE /api/products/:productId
Router.delete('/products/:productId', (req, res, next) => {
    const id = req.params.productId;

    productModel.deleteOne({_id: id})
    .exec()
    .then(result => {res.status(202).send('Produit bien supprimé.')})
    .catch(error => {next(error)});
})

module.exports = Router;
```

Et pour finir on a plus qu'à ajouter la route à notre serveur

```Javascript
// ~/cours-nodejs/server/index.js

const express = require('express')
const morgan  = require('morgan')
const helmet  = require('helmet')
const cors    = require('cors')

const todosRoute = require('./routes/todosRoute')
const todosMongoRoute = require('./routes/todosMongoRoute')
const productsRoute = require('./routes/productsRoute')
const notFound = require('./middlewares/notFound')
const errorHandler = require('./middlewares/errorHandler')
const connectDB = require('./middlewares/connectDB')

connectDB()

const app = express()
const port = 3000

app.use(morgan('dev'))
app.use(helmet())
app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/',    todosRoute)
app.use('/api', todosMongoRoute)
app.use('/api', productsRoute)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```

## Mettre en place une authentification (JWT)

### Qu'est ce que les Json Web Token ?

Un JSON Web Token est un access token (jeton d’accès) aux normes [RFC 7519](https://tools.ietf.org/html/rfc7519) qui permet un échange sécurisé de donnée entre deux parties. Il contient toutes les informations importantes sur une entité, ce qui rend la consultation d’une base de données superflue et la session n’a pas besoin d’être stockée sur le serveur (stateless session).

Les JSON Web Token sont particulièrement appréciés pour les opérations d’identification. Les messages courts peuvent être chiffrés et fournissent alors des informations sûres sur l’identité de l’expéditeur et si celui-ci dispose des droits d’accès requis. Les utilisateurs eux-mêmes ne sont qu’indirectement en contact avec les token, par exemple lorsqu’ils entrent un nom d’utilisateur et un mot de passe dans un masque. La véritable communication se fait entre les différentes applications du côté serveur et client.

### Mise en place

Pour mettre en place une authentification, on va créer 2 routes, une pour s'enregister et une seconde pour s'authentifier. En suite un ajouter un middleware, pour être sur que la personne est authentifié.

Dans un premier temps, on ajoute un fichier de model pour le User.

```JavaScript
// ~/cours-nodejs/server/models/userModel.js

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: { type: String, required: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);
```

Dans un premier temps, on va installer le module jsonwebtoken et bcrypt afin de crypter les mots de passe en base de données. Puis on va ajouter un fichier pour gérer les routes pour l'authentification

```bash
ldandoy@host ~/cours-nodejs 
$ npm i jsonwebtoken bcrypt
```

```JavaScript
// ~/cours-nodejs/server/routes/authRoute.js

onst express = require("express");
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

const router = express.Router();

router.post("/register", (req, res) => {
    if (JSON.stringify(req.body) !== '{}' && (req.body.email !== undefined && req.body.email != "" && req.body.email == req.body.email2) && (req.body.password !== undefined && req.body.password != "" && req.body.password == req.body.password2)) {
        User.find({ email: req.body.email })
            .exec()
            .then(user => {
                if (user.length >= 1) {
                    return res.status(409).json({
                        message: 'A user with this email alreay exists'
                    })
                } else {
                    bcrypt.hash(req.body.password, 10, (err, hash) => {
                        if (err) {
                            console.log(err);
                            return res.status(500).json({ 'message': err });
                        } else {
                            const user = new User({
                                _id: new mongoose.Types.ObjectId(),
                                email: req.body.email,
                                password: hash
                            });
                            user.save()
                                .then(user => {
                                    user.password=null;
                                    res.status(200).json(user);
                                })
                                .catch(err => {
                                    res.status(500).json({ 'message': err });
                                });
                        }
                    })
                }
            })
            .catch(err => {
                res.status(500).json({ 'message': err });
            });
    } else {
        res.status(500).json({ 'message': "Vous n'avez pas rempli tous les champs, ou ils sont mal confirmés" });
    }
});

router.post("/login", (req, res) => {
    if (req.body.email != "" && req.body.password != "") {
        User.find({ email: req.body.email })
            .exec()
            .then(user => {
                if (user.length < 1) {
                    return res.status(404).json({ 'message': 'User Not found !' });
                }

                bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                    if (err) {
                        return res.status(500).json({ 'message': err });
                    }

                    if (result) {
                        const token = jwt.sign({
                            id: user[0]._id,
                            email: user[0].email,
                        }, process.env.JWT_KEY, {
                            expiresIn: "1h"
                        })

                        return res.status(200).json({
                            message: "Auth successfull",
                            token: token
                        });
                    }

                    res.status(500).json({ 'message': 'Auth failed !' });
                })
            })
            .catch(err => {
                res.status(500).json({ 'message': err });
            });
    } else {
        res.status(500).json({ 'message': "Vous n'avez pas rempli tous les champs" });
    }
});

module.exports = router;
```

A présent, le middleware, celui qui va vérifier si le token est bon, et mettre les informations venant du token dans la variable userData.

```JavaScript
// ~/cours-nodejs/server/middlewares/check_auth.js

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decode = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decode;
        next();
    } catch (error) {
        return res.status(401).json({ 'error': 'Auth failed !' });
    }
};
```

Pour finir, on va pour finir voir comment on utilise ce middleware pour laisser accéder uniquement les bonnes personnes à la ressources. Nous allons créer une nouvelle route pour accéder au information de mon compte.

```JavaScript
// ~/cours-nodejs/server/routes/userRoute.js

const express = require("express");

const checkAuth = require('../middlewares/check_auth');

const User = require('../models/User');

const router = express.Router();

router.get("/me", checkAuth, (req, res) => {
    console.log(req.userData);
    email = req.userData.email

    User.find({ email: email })
        .select({'_id': 0, 'email': 1})
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(404).json({ 'message': 'User Not found !' });
            }

            return res.status(200).json(user);
        })
        .catch(err => {
            res.status(500).json({ 'message': err });
        });
});

module.exports = router;
```
