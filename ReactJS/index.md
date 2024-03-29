# Cours ReactJS

Voici mon support de cours pour JavaScript. N'hésitez pas à me faire vos retours sur ce [lien github](http://github.com/ldandoy/cours). Ou par mail: [ldandoy@overconsulting.net](mailto:ldandoy@overconsulting.net)

Ce support est en cours d'écriture et évolue.

## Sommaire <!-- omit in toc -->

- [Cours ReactJS](#cours-reactjs)
  - [Qu'est ce que React JS ?](#quest-ce-que-react-js-)
  - [Installer ReactJS](#installer-reactjs)
  - [Structure d'une application ReactJS](#structure-dune-application-reactjs)
  - [Nettoyage de l'application qui vient d'être créer](#nettoyage-de-lapplication-qui-vient-dêtre-créer)
  - [Premier élément (classes VS arrow functions)](#premier-élément-classes-vs-arrow-functions)
  - [JSX (Text et exemple repris de fr.reactjs.org)](#jsx-text-et-exemple-repris-de-frreactjsorg)
    - [Introduction](#introduction)
    - [Pourquoi le JSX ?](#pourquoi-le-jsx-)
    - [JSX n’est rien d’autre qu’une expression](#jsx-nest-rien-dautre-quune-expression)
  - [Organisation du code](#organisation-du-code)
    - [Dossiers et sous-dossiers](#dossiers-et-sous-dossiers)
    - [Import de fichiers](#import-de-fichiers)
    - [Les styles avec les composants](#les-styles-avec-les-composants)
    - [Destructuration des variables](#destructuration-des-variables)
  - [Props](#props)
  - [Cycle de vie d'un composant](#cycle-de-vie-dun-composant)
    - [States](#states)
  - [Les hooks](#les-hooks)
    - [useState](#usestate)
    - [useEffect](#useeffect)
  - [Les formulaires dans React](#les-formulaires-dans-react)
  - [Authentification](#authentification)
    - [JWT (Json Web Token)](#jwt-json-web-token)
    - [Localstorage et cookie problème](#localstorage-et-cookie-problème)
    - [HTTP-only cookie](#http-only-cookie)
  - [Redux](#redux)
    - [Qu'est-ce que Redux](#quest-ce-que-redux)
    - [Installation](#installation)
    - [Mise en place d'un store](#mise-en-place-dun-store)

## Qu'est ce que React JS ?

React JS est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page (ou portion) HTML à chaque changement d'état.

Afin de créer des pages ou des portions de page HTML, React utilise des composants. Lorsque l'on parle React, on parle de la librairie core (ou coeur de React), mais lorsque l'on parle de React JS, on parle bien de la librairie supplémentair react.js, qui s'ajoute à React, afin de gérer la partie HTML. Mais vous pouvez aussi utiliser React pour faire des application Modile, dans ce cas, on utilise React Narive, qui elle aussi est une libriaire supplémentaire, basée sur React.

Dans ce cours nous ne verrons que React JS, mais si vous vous voulez en savoir plus, aller voir le cours sur React Native.

## Installer ReactJS

Pour installer ReactJs, il vous faut la commande npx, qui vient avec npm et node (attention il faut node >= 8.10). Si vous n'avez pas installer node, vous pouvez le faire en suivant le tutauriel sur NodeJS.

Il suffit alors de taper les commande suivante:

```bash
ldandoy@host ~
$ npx create-react-app mon-app
$ cd mon-app
$ npm start
```

## Structure d'une application ReactJS



## Nettoyage de l'application qui vient d'être créer

## Premier élément (classes VS arrow functions)

Nous allons commencer par voir la façon originel (historique) de créer des composants React (celle avec les classes), puis nous verrons la nouvelle façon de les créer (celle avec les arrow fonctions).

Dans ce premier exemple nous allons créer un composant qui affiche une liste.

```JavaScript
import React from 'react'

class List extends React.component {
    render () {
        return (<ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>)
    }
}

export default List
```

React utilise la syntax JSX pour créer le HTML final. Nous reviendrons dessus un peu plus tard. Maintenant passons aux arrow fonctions.

```JavaScript
import React from 'react'

const List = () => (
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
)

export default List
```

Si vous executez ses deux codes, ils sont identique en terme de rendu final. Mais les arrow functions permettent d'écrire plus facilement les choses, et on un return implicite (il n'y a pas besoin de l'écrire l'interpreteur sait ce qu'il doit retounner). Dans la suite de ce cours j'utiliserais plutot les arrow functions.

## JSX ([Text et exemple repris de fr.reactjs.org](https://fr.reactjs.org/docs/introducing-jsx.html))

### Introduction

```JavaScript
const element = <h1>Bonjour, monde !</h1>;
```

Cette drôle de syntaxe n’est ni une chaîne de caractères ni du HTML.

Ça s’appelle du JSX, et c’est une extension syntaxique de JavaScript. Nous recommandons de l’utiliser avec React afin de décrire à quoi devrait ressembler l’interface utilisateur (UI). JSX vous fait sûrement penser à un langage de balisage, mais il recèle toute la puissance de JavaScript.

JSX produit des « éléments » React. Nous verrons comment les retranscrire dans le DOM dans la prochaine section. Dans la suite de ce document, nous verrons les bases de JSX dont vous aurez besoin pour bien démarrer.

### Pourquoi le JSX ?

Le fonctionnement d’une UI conditionnera toujours les logiques de rendu, de la gestion des événements à la préparation des données pour l’affichage, en passant par l’évolution de l’état au fil du temps. React a choisi d’assumer pleinement cet état de fait.

Au lieu de séparer artificiellement les technologies en mettant le balisage et la logique dans des fichiers séparés, React sépare les préoccupations via des unités faiblement couplées appelées « composants », qui contiennent les deux. Nous reviendrons sur les composants dans une prochaine section, mais si l’idée d’injecter des balises dans du JS vous met mal à l’aise, cette présentation vous fera peut-être changer d’avis.

React ne vous oblige pas à utiliser JSX, mais la plupart des gens y trouvent une aide visuelle quand ils manipulent l’interface utilisateur dans le code JavaScript. Ça permet aussi à React de produire des messages d’erreurs et d’avertissements plus utiles.

Ceci étant posé, commençons !

### JSX n’est rien d’autre qu’une expression

```JavaScript
const getGreeting = (user) => {
  if (user) {
    return <h1>Bonjour, {formatName(user)} !</h1>;
  }
  return <h1>Bonjour, le monde.</h1>;
}

getGreeting('Mikael')
getGreeting()
```

## Organisation du code

### Dossiers et sous-dossiers

### Import de fichiers

### Les styles avec les composants

### Destructuration des variables

```JavaScript
import React from 'react'

const List = ({items}) => (
    <ul>
        {items.map(item => (
            <li key={item}>{item}</li>
        ))}
    </ul>
)

const ListContainer = () => (
    <List items={['item 1', 'item 2', 'item 3', 'item 4']} />
)

export default ListContainer
```

## Props

Les props sont des variables que l'on peut passer aux composants, lorsqu'ils sont appelés.

```JavaScript
const List = (props) => (
    <ul>
        {props.items.map(item => (
            <li key={item}>{item}</li>
        ))}
    </ul>
)

const ListContainer = () => (
    <List items={['item 1', 'item 2', 'item 3', 'item 4']} />
)

export default ListContainer
```

## Cycle de vie d'un composant

### States

Nous allons commencer par un exemple avec les classes.

```JavaScript
import React from 'react';

class List extends React.component {
    constructor (props) {
        super(props);

        this.state = {
            filteredItems: this.props.items;
        }

        this.fiterItems = this.filterItems.bind(this);
    }

    filterItems(e) {
        const searchValue = e.target.value;
        const currentItems = [...this.props.items];
        const matchingItems = currentItems.filter((items) => item.statsWith(searchValue));

        this.setState({
            filteredItems: matchingItems;
        })
    }

    render () {
        return <>
            <input onChange={this.filterItems}>
            <ul>
                {this.state.filteredItems.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </>
    }
}

const ListContainer = () => (
    <List items={['item 1', 'item 2', 'item 3', 'item 4']} />
)

export default ListContainer
```

Avant de passer à la version des arrow fonctions, nous allons explorer plus en avant le cycle de vie d'un composant.



## Les hooks


### useState

Version avec les arrow fonctions

```JavaScript
import React, { useState } from 'react'

const List = ({items}) => {
    [filteredItems, setFilteredItems] = React.useState(items)
    
    const filterItems = (e) => {
        const searchValue = e.target.value
        const currentItems = [...items]
        const matchingItems = currentItems.filter((items) => item.statsWith(searchValue))

        setFilteredItems(matchingItems)
    }

    render () {
        return <>
            <input onChange={filterItems}>
            <ul>
                {filteredItems.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </>
    }
}

const ListContainer = () => (
    <List items={['item 1', 'item 2', 'item 3', 'item 4']} />
)

export default ListContainer
```

### useEffect

## Les formulaires dans React

## Authentification

### JWT (Json Web Token)

Sous PHP, la méthode principale pour gérer des sessions utilisateurs est l’utilisation de cookies de sessions appelés par défaut « PHPSESSID ». Lorsqu’un utilisateur se connecte sur une application, celle-ci demande la génération d’un identifiant de session au programme PHP présent sur le serveur Web. Celui-ci s’exécute et créé un code unique qu’il va stocker dans sa mémoire vive puis renvoyer au client grâce au header « Set-Cookie ». Les cookies étant conçus pour être automatiquement renvoyés dans chaque requête du navigateur vers le serveur, l’identifiant de session sera transmis systématiquement. Cette solution permet de gérer les cas classiques de connexion/déconnexion d’un utilisateur.

Cependant, ce type de fonctionnement ne permet pas de partager facilement un même compte pour s’authentifier sur plusieurs plateformes distinctes et le serveur a l’obligation de stocker l’état et les informations des sessions dans sa mémoire vive.

Les jetons JWT quant à eux sont “stateless”, cela signifie que les informations des sessions ouvertes ne sont pas stockées côté serveur. Outre le gain de mémoire que cela procure, les jetons JWT peuvent être utiles si vous souhaitez utiliser les mêmes comptes utilisateurs pour plusieurs applications. Il suffira que les applications utilisent la même clé privée pour signer et vérifier les jetons JWT. Les utilisateurs pourront ainsi s’authentifier une fois sur l’application hébergeant les comptes utilisateurs, puis ils pourront se connecter aux autres applications, celles-ci n’ayant qu’à vérifier la validité des jetons. 

Mais en vrai comment ça marche ?

Les « JSON Web Token » ou JWT sont des jetons générés par un serveur lors de l’authentification d’un utilisateur sur une application Web, et qui sont ensuite transmis au client.

Ils seront renvoyés avec chaque requête HTTP au serveur, ce qui lui permettra d’identifier l’utilisateur.

Pour ce faire, les informations contenues dans le jeton sont signées à l’aide d’une clé privée détenue par le serveur. Quand il recevra à nouveau le jeton, le serveur n’aura qu’à comparer la signature envoyée par le client et celle qu’il aura générée avec sa propre clé privée et à comparer les résultats. Si les signatures sont identiques, le jeton est valide. [En savoir plus](https://www.vaadata.com/blog/fr/jetons-jwt-et-securite-principes-et-cas-dutilisation/)

### Localstorage et cookie problème 

### HTTP-only cookie

Mais qu'est ce que c'est un HTTP-only Cookie ? C'est un cookie, qui n'est accessible qu'en HTTP, et donc il ne peut jamais être lu en JavaScript, ce qui le protège des failles XSS.

## Redux

### Qu'est-ce que Redux

### Installation

### Mise en place d'un store