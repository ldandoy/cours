# Cours Web 3.0 Blockchain App

Voici mon support de cours pour Web 3.0 Blockchain App. N'hésitez pas à me faire vos retours sur ce [lien github](http://github.com/ldandoy/cours). Ou par mail: [ldandoy@overconsulting.net](mailto:ldandoy@overconsulting.net)

Ce support est en cours d'écriture et évolue.

## Sommaire <!-- omit in toc -->

- [Cours Web 3.0](#introduction)
    - [Introduction](#introduction)



## Introduction

### Qu'est-ce que le web 3.0

C'est un mot bien en vogue de nos jours, mais qu'est-ce que ça veut dire ? Et bien c'est tout simplement un web décentralizé. Un peu comme si vous vous passiez d'intermédaire. Par exemple vous voulez échanger de l'argent un dimanche après-midi, pas la peine d'attendre le mardi matin que votre transction soit approuvé par votre banque. Le réseau ou plus exactement les personne ratacher à votre blockchain vont la valider à n'importe quel moment.

### Qu'est ce que la blockchain

C'est le noeud centrale du web 3.0 ! C'est l'idée d'avoir une liste de block, qui sont non modifiable

## Mise en pratique.

### Description du projet

Je vous propose de mettre en place un site web, pour découvrir les fonctionnalités suivante:
 - Site web réalisé avec ReactJS
 - Connection via Metamask
 - Création de smart contract basé sur la blockchain Ethéreum

### Première étape: Mise en place de ReactJS

Installation et configuration de React JS. Pour se faire il vous faudra installer sur votre poste [NodeJS](https://nodejs.org), nous utiliserons deux logicielles qui viennent avec nodejs, qui sont npm et npx.  Pour en savoir plus sur npm, je vous conseil de vous reporter sur le cours lié à NodeJS. Sinon sachez seulement que c'est un gestionnaire de package, qui nous permettra d'installer des fonctionnalités facilement par la suite.

Quand npx, c'est un logiciel qui permet de créer des projets. Et nous allons commencer par créer notre projet qui aura pour nom mon-projet-web3.
Pour ce projet nous allons utiliser vite pour l'installation.

```bash
$ npm i yarn -g
$ mkdir mon-projet-web3
$ cd mon-projet-web3
$ mkdir client
$ cd client
$ npm init vite@latest
```

Pour vérifier si tout fonctionne bien, il faut démarrer un petit serveur web qui est intégré à react.

```bash
$ npm install
$ npm run dev
```

Maintenant, on va utiliser tailWind pour ce projet, et rendre le site plus joli.

```bash
$ npm install -D tailwindcss postcss autoprefixer
$ npx tailwindcss init -p
```
Maintenant vous pouvez ouvrir vote editeur de texte.

```bash
$ code .
```

et copier le code suivant dans le fichier postcss.config.js

```javascript
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
```

Maintenant remplacez le code du fichier src/index.css par les trois lignes suivantes:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Vous pouvez remplacer App.jsx par les lignes suivantes

```javascript
import './App.css'

const App = () => {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world !</h1>
    </div>
  )
}

export default App
```

Pour continer nous allons mettre en place notre architechture d'application en créant plusieurs dossiers

```bash
$ mkdir components
```

A l'intérieur de ce dossier créer un fichier Navbar.jsx qui nous permettra de gérer la barre de navigation. Il devrait ressembler à ça.

```javascript
import React from 'react'

const Navbar = () => {
    return (
        <div>
            Navbar
        </div>
    )
}

export default Navbar
```

On fera la même chose avec les fichiers Footer.jsx, Loader.jsx, Services.jsx, Transactions.jsx et Welcome.jsx

Pour finir on créera un fichier index.js, qui permettra l'import en une seule ligne.

```javascript
export { default as Loader } from './Loader'
export { default as Navbar } from './Navbar'
export { default as Welcome } from './Welcome'
export { default as Services } from './Services'
export { default as Transactions } from './Transactions'
export { default as Footer } from './Footer'
```

A présent on va ajouter nos composants à notre application, grâce au fichier App.jsx.

```javascript
import './App.css'
import { Navbar, Welcome, Footer, Services, Transactions } from './components'

const App = () => {
  return (
    <div className="min-h-screen">
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default App
```

Pour être sur que tout va bien, relancer votre serveur.

```bash
$ npm run dev
```

Si on ajoutait un peut de style !

```css
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap");

* html {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.gradient-bg-welcome {
  background-color:#0f0e13;
  background-image: 
    radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), 
    radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), 
    radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%);
}

.gradient-bg-services {
  background-color:#0f0e13;
  background-image: 
    radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), 
    radial-gradient(at 50% 100%, hsla(225,39%,25%,1) 0, transparent 50%);
}

.gradient-bg-transactions {
  background-color: #0f0e13;
  background-image: 
    radial-gradient(at 0% 100%, hsla(253,16%,7%,1) 0, transparent 50%), 
    radial-gradient(at 50% 0%, hsla(225,39%,25%,1) 0, transparent 50%);
}

.gradient-bg-footer {
  background-color: #0f0e13;
  background-image: 
    radial-gradient(at 0% 100%, hsla(253,16%,7%,1) 0, transparent 53%), 
    radial-gradient(at 50% 150%, hsla(339,49%,30%,1) 0, transparent 50%);
}

.blue-glassmorphism {
  background: rgb(39, 51, 89, 0.4);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 0, 0, 0.3);
}

/* white glassmorphism */
.white-glassmorphism {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.eth-card {
  background-color:#a099ff;
  background-image: 
    radial-gradient(at 83% 67%, rgb(152, 231, 156) 0, transparent 58%), 
    radial-gradient(at 67% 20%, hsla(357,94%,71%,1) 0, transparent 59%), 
    radial-gradient(at 88% 35%, hsla(222,81%,65%,1) 0, transparent 50%), 
    radial-gradient(at 31% 91%, hsla(9,61%,61%,1) 0, transparent 52%), 
    radial-gradient(at 27% 71%, hsla(336,91%,65%,1) 0, transparent 49%), 
    radial-gradient(at 74% 89%, hsla(30,98%,65%,1) 0, transparent 51%), 
    radial-gradient(at 53% 75%, hsla(174,94%,68%,1) 0, transparent 45%);
}

.text-gradient {
  background-color: #fff;
  background-image: radial-gradient(at 4% 36%, hsla(0,0%,100%,1) 0, transparent 53%), radial-gradient(at 100% 60%, rgb(0, 0, 0) 0, transparent 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@tailwind base;
@tailwind components;
@tailwind utilities;
```

A présent tout est mise en place. On a plus qu'à coder !

Il n'y a plus qu'a relancer notre application

```bash
$ npm run dev
```

Nous en avons fini avec la configuration de notre application nous y reviendront après avoir mise en place le smart contract.

### Deuxième étape: Création du smart contract

Nous allons créer un répertoire afin de stoker nos contracts. Le mieux serait de créer un répertoire au même niveau de notre client react, dans le dossier mon-projet-web3.

```bash
$ cd ..
$ mkdir contract
$ cd contract
```
Nous allons initialiser notre répertoire avec npm. Dans ce cas, nous prendrons les paramètres par défault. Nous pourrons ainsi par la suite installer des packages npm, et créer notre contrat.

```bash
$ npm init -y
```
