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
      - [if structure](#if-structure)
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

## Introduction

Qu'est-ce que nodeJS ? C'est un runtime JavaScript, utilisant le moteur v8 de chrome. Mais qu'est ce que tout ça veut dire un runtime JavaScript ?

un runtime est un logiciel responsable de l'exécution des programmes informatiques écrits dans un language donné. [En savoir plus](https://fr.wikipedia.org/wiki/Environnement_d%27ex%C3%A9cution)

Mais pour expliquer les choses de façon plus simple, en gros, vous allez écrire un programme en JavaScript par exemple, il faudra donc un programme capable de lire le Javacript, et d'executer les commandes que vous aurez écrit dedans. NodeJS est donc se programme, et il utilise le même moteur pour executez les commandes que le navigateur chrome.

## Navigateur vs Server

Mais alors si on a chrome qui fait déjà le travail, pourquoi NodeJS ? Et bien c'est assez simple, parfois, vous voulez écrire du code JavaScript, et l'excuter hors d'un navigateur (on parlera de côté client), comme serveur par exemple.

On reviendra sur cette notion de client serveur, mais pour faire court, une personne qui veut accêter à une ressource sur internet, sera appeler cliente, et elle deva utiliser un client HTTP, pour demander une page d'un site ou une autre. Et cette demande est faite à un serveur qui lui sera chargé de lui répondre, par la page demander, on parle alors de server HTTP.

La particularité du JS (JavaScript) est qu'il peut s'éxecuter côté client et côté serveur. Contrairement à d'autre language comme le PHP, le ruby ou le python. Dans ce cours, nous ne verrons que le JS côté Serveur.

## Installation

Pour faire l'installation, vous pouvez le télécharger à l'adresse suivante [http://nodejs.org](http://nodejs.org), il vous suffit de double cliquer sur l'installateur.

## Premiers pas

### Hello World

Comme dans tout bon cours de programmation, il faut commencer par le Hello world. Allez partont pour notre premier programme.

Dans un premier temps, il faudra ouvrir votre éditeur de texte préféré ([VScode](https://code.visualstudio.com/), [SublimText](https://www.sublimetext.com/), etc...). Une fois installé, créer un dossier dans votre répertoire personnel nommé cours-nodejs. Ajouter ce répertoire à votre éditeur de texte (IDE).

```bash
ldandoy@host ~
$ mkdir cours-nodejs
$ cd cours-nodejs
$ code .
```

 puis créez le fichier helloworld.js. Copiez le code suivant dedans.

```Javascript
// ~/cours-nodejs/helloworld.js

console.log('Hello World !')
```

Une fois créé, vous pouvez lancer votre terminal, et vous rendre dans le dossier que vous venez de créer. Puis, il va falloir executer le programme javascript helloworld.js.

```bash
ldandoy@host ~/cours-nodejs 
$ node helloworkd.js # Hello World !
```

Vous devriez voir Hello World ! s'afficher dans votre terminal. On dit que le fichier helloworld, a été interprété par nodejs, ou qu'il a été executé par le runtime nodejs.

### Les variables

Comme dans tout programme, on a besoin de pouvoir stocker et garder des informations tout au long de son programme. Voici les différents type qui existent, avec un exemple. Je vous invite a créer un nouveau fichier, pour en garder trace.

Pour créer une variable, il y a deux ou trois possibilité (let, const et var). var est l'ancienne notation, qui existe encore, mais qui est de moins en moins utilisé. attention, const permet de créer une constante qui bien sûr ne peut pas être modifié une fois créé.

```Javascript
// ~/cours-nodejs/typevariable.js

let num     = 12 // Variable numerique qui vaut 12
let text    = "Ceci est une chaine de caractères" // Variable 
let bool    = true // Variable boolean qui prend true ou false comme valeur possible.
let tableau = [12, 45, "test", "toto"] // Variable de type tableau
let object  = { id: 12, nom: "DANDOY", prenom: "Loïc" } // Variable de type objet, qui a trois attributs (id, nom et prenom)
```

Il existe aussi des variables prédéfinit, tel que __direname
__filename. Pour voir à quoi elle correspondent, vous pouvez ajouter les lignes suivantes à votre fichier typevariable.js

```Javascript
// ~/cours-nodejs/typevariable.js

console.log("Path du dossier du fichier encours d'execution: ", __direname)
console.log("Path complète du fichier encours d'execution: ", __filename)
```

Vous vous demandez peut-être ce que signigie Path d'un fichier ou d'un dossier (appelé aussi répertoire). C'est une variable qui contient le l'endroit où se trouve le fichier ou le dossier dans l'ordinateur. Cela permet de retrouver le fichier, ou le dossier pour par exemple écrire un fichier dedans.

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

#### if structure

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

## Express: Infrastructure Web minimaliste, souple et rapide pour Node.js

### Qu'est-ce qu'une API REST

Une API REST (également appelée API RESTful) est une interface de programmation d'application qui respecte les contraintes de l'architecture REST (pour « Representational State Transfer »).

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

### Les modules Cors et Helmet

Pour la suite nous allons installer plusieurs modules en même temps. Le modules cors, qui va nous permettre de pouvoir appeler l'api à partir d'une application web installer sur notre ordianteur (En ReactJS ou Angular par exemple). en suite nous installerons helmet, qui rajoute de la sécurité, en cachant la version de NodeJs qu'on utilise par exemple. En gros cette librairie modifie les headers des requètes pour cache les informations sur notre serveur.

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

Pour organsier son code, le mieux est de mettre les routes d'un côté, pour ne pas tout avoir dans le même fichier. Par exemple si vous avez une api pour des todos, et une pour des catégory, il faudra créer un dossier routes et créer deux fichiers dedans l'un todoRoutes.js et l'autre catRoutes.js.

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

### Middleware

#### Définition et rôle

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

[]()

Pour en savoir plus [Voir: mongoose](https://mongoosejs.com/)

#### Mysql

A venir: [Voir: sequelize](https://sequelize.org/)
