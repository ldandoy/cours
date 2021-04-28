# Cours Angular

Voici mon support de cours pour Angular. N'hésitez pas à me faire vos retours sur ce [lien github](http://github.com/ldandoy/cours). Ou par mail: [ldandoy@overconsulting.net](mailto:ldandoy@overconsulting.net)

Ce support est en cours d'écriture et évolue.
## Sommaire <!-- omit in toc -->

- [Cours Angular](#cours-angular)
  - [Qu'est qu'Angular ?](#quest-quangular-)
  - [Introduction aux concepts d'Angular](#introduction-aux-concepts-dangular)
    - [Modules](#modules)
    - [components](#components)
    - [Templates, directives et data binding](#templates-directives-et-data-binding)
    - [Services et injection de dépendences](#services-et-injection-de-dépendences)
    - [Routing](#routing)
  - [Installation et configuration d'angular cli](#installation-et-configuration-dangular-cli)
  - [Création de l'application](#création-de-lapplication)
  - [Première component](#première-component)
    - [Exploration des fichiers](#exploration-des-fichiers)
    - [Composition du composant root](#composition-du-composant-root)
    - [Modification du titre de notre composant](#modification-du-titre-de-notre-composant)
  - [Votre premier composant](#votre-premier-composant)
  - [Second component](#second-component)
  - [Routing et lien entre les pages](#routing-et-lien-entre-les-pages)
  - [Premier service](#premier-service)
  - [Lien avec le back end (en NodeJS)](#lien-avec-le-back-end-en-nodejs)

## Qu'est qu'Angular ?

Vous pouvez vous rendre sur Angular.io pour en savoir plus.

## Introduction aux concepts d'Angular

Angular est une plateform et un framework permettant de créer des sites web en single-page. Il est écrit en HTML, CSS et TypeScript.

Basiquement, une application est faite de composant, eux-mêmes regroupés en module. Une application est donc une collection de modules composés de composants. Il y a au moins un module dans une application Angular.

Les composants définissent les vues. Et utilisent des services pour avoir accès aux données. Les services peuvent être injecté dans un composant comme dépendence de celui-ci, ce qui permet de rendre le code modulaire et réutilisable.

Les modules, composants et services sont tous des classes, qui utilisent des décorateurs. Ces décorateurs définissent le type et donnent des métas données sur les classes.

Par exemple les métas données d'un composant, définissent quel est les fichiers html et CSS correspondant. Pour un service, les métas données servent à définir les informations nécessaire pour l'injection de dépendence.

### Modules

Les modules Angular sont différents des modules Javascript (ES2015). Un NgModule (angular module) décrit un context de compilation et un ensemble de composant qui sont dédiés à un domaine de l'application ou du workflow.

Un module peut associé ses composants à un service ou un formulaire.

Chaque Module à un composant 'root' et peut importer des fonctionnalités d'autre Modules.

### components

Chaque application à au moins un composant. C'est ce composant qui organise la hierarchie du document DOM. Chaque composant implemente logic et data en associant un fichier HTML. le @component, identifie une class de composant.

### Templates, directives et data binding

Un template HTML, combine HTML et les markup d'angular. Le binding entre les données et le HTML, se fait avant le rendu du template.

Les templates ont des pipes pour permettre la mise à jour du HTML en fonction des actions de l'utilisateur.

### Services et injection de dépendences

L'injection de dépendence permet de laisser les classes propore et plus lisible. Mais aussi de mieux structurer le code.

### Routing

## Installation et configuration d'angular cli

Cli signifie: command-line interface, souvent cela signifie que l'on va avoir accès à de nouveaux programme dans le terminal.

Pour ajouter les commandes ng qui vont nous permettre de créer l'application et de générer les différents composant et service, il faut installer angular cli, pour pouvoir avoir accès au programme ng.

```bash
ldandoy@host ~
$ npm install -g @angular/cli
```

## Création de l'application

Pour générer une application angular, il faut utiliser la commande ng.

```bash
ldandoy@host ~
$ ng new client
```

Puis pour lancer cette application, il faut déjà entrer dans le répertoire client, puis lancer la commande ng serve --open. Votre navigateur va s'ouvrir, avec le site.

```bash
ldandoy@host ~
$ cd client
$ ng serve --open
```

Vous devriez voir s'afficher ça dans votre navigateur.

![page par défault](https://angular.io/generated/images/guide/setup-local/app-works.png)

## Première component

### Exploration des fichiers

### Composition du composant root

1. app.component.ts — Le code de la classe du component, en TypeScript
2. app.component.html — Le template de la vue, en HTML
3. app.component.css — CSS du composant.

### Modification du titre de notre composant

On commence par le fichier app.component.ts:

```Typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Premier fichier test';
}
```

Modification du fichier app.component.html:

```html
<h1>{{title}}</h1>
```

Et pour finir le CSS, dans app.component.css:

```css
h1 {
    font-size: 30px;
    color: #A93226;
}
```

## Votre premier composant

Dans un premier temps, on va créer le premier composant, qui récupérera la liste des todos.

```bash
ldandoy@host ~
$ ng generate component todos
```

Pour commencer on va crée un model de données. Créez le fichier todo.ts, à la racine de votre projet.

```bash
ldandoy@host ~
$ touch todo.ts
```

Et voici à quoi il ressemble.

```typeScript
export interface Todo {
  id: number;
  title: string;
  content: string;
}
```

Pour finir on intégre le model de données aux données.

```Typescript
import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class TodosComponent implements OnInit {

    todos: Todo = [{
        id: 1,
        title: 'todo 1',
        content: 'Contenu du todo 1'
    },{
        id: 2,
        title: 'todo 2',
        content: 'Contenu du todo 2'
    }]

    constructor() { }

    ngOnInit() {
    }

}
```

Modification de la partie HTML

```html
<h1>TODOS</h1>

<ul>
    <li *ngFor='let todo of todos'>
        <a routerLink="/todos/{{todo.id}}">
            {{todo.title}}
        </a>
    </li>
</ul>
```

## Second component

```bash
ldandoy@host ~
$ ng generate component todo
```

## Routing et lien entre les pages

```bash
ldandoy@host ~
$ ng generate module app-routing --flat --module=app
```

Cette commande va vous générer le fichier src/app/app-routing.module.ts, si vous n'avez pas cocher la case routing lors de la création de votre application.

Voici à present comment le modifier pour faire la liaison entre vos deux composants.

```Typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: 'todos', component: TodosComponent }
  { path: 'todos/:id', component: TodoComponent },
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

## Premier service

## Lien avec le back end (en NodeJS)
