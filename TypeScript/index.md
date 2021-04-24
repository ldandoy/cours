# Cours ReactJS

Voici mon support de cours pour TypeScript. N'hésitez pas à me faire vos retours sur ce [lien github](http://github.com/ldandoy/cours). Ou par mail: [ldandoy@overconsulting.net](mailto:ldandoy@overconsulting.net)

Ce support est en cours d'écriture et évolue.

## Sommaire <!-- omit in toc -->

- [Cours ReactJS](#cours-reactjs)
  - [Installation](#installation)
  - [Premier fichier et fonctionnement](#premier-fichier-et-fonctionnement)
  - [Variables](#variables)
    - [Variables de type simple](#variables-de-type-simple)
    - [Variables de type composé: Tuple et Enum](#variables-de-type-composé-tuple-et-enum)
      - [Les tuples](#les-tuples)
      - [Enums](#enums)
  - [Objects](#objects)
  - [Classes](#classes)
  - [Fonctions](#fonctions)

## Installation

Pour installer TypeScript (TS), il vous faudra installer NodeJS et le packet manager NPM. Vous pouvez vous référer au cours de [NodeJs](http://github.com/ldandoy/cours/NodeJs/index.md)

```bash
ldandoy@host ~
$ npm i -g typescript
```

En suite si vous travaillez avec Visual Studio Code, vous devrier installer le package: TypeScript Extension Pack.

## Premier fichier et fonctionnement

TypeScript est du JavaScript mais qui ne sera pas comprit pas le navigateur, il faudra donc le compiler à chaque fois que vous faîtes des modifiations pour que le navigateur puisse l'executer.

On va commencer par créer un fichier HTML tout à fait basique.

```html
<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Cours TypeScript</title>
    </head>
    <body>
        <script src="index.js"></script>
    </body>
</html>
```

Vu que l'on fait du TypeScript, il va falloirt créer un premier fichier idnex.ts, car les fichiers TypeScript doivent avoir une extention .ts.

```TypeScript
console.log("Hello world !")
```

Comme vous le voyez, vous avez appeler un fichier index.js dans le dossier index.html, alors que l'on a créé un fichier index.ts, il va donc falloir comme je vous le disait le traduire en JavaScript.

```bash
ldandoy@host ~
$ tsc index.ts
```

Si vous regardez à présent dans votre dossier, un fichier index.js a été créé. Vous pouvez l'ouvrir et voir le JavaScript qui a été généré. Ouvrez le fichier html dans votre navigateur, vous pouvez faire inspecter l'élément, et vous verrez Hello World ! afficher dans l'onglet console.

Bien sûr on va pouvoir automatiser, nous verrons tout ça dans la suite.

## Variables

### Variables de type simple

Comme en JavaScript on va utiliser le mot clé let ou const. Par contre, vous ne pourrez pas faire le code suivant:

```TypeScript
let nb = 12

nb = "Text"
```

Le typeScript est un language où l'on peut pas changer le type des variables en cours d'execution du programme. Mais comment ça se passe, si on ne connait pas le type au départ du programme ? J'en profite pour vous montrer les autres types.

```TypeScript
let nb:number = 2
let text:string = "Amine"
let numOrString: number|string = "Todo"
let vrai:boolean = true
let tableau:string[] = []
let tableau2:(number | boolean)[] = []

tableau.push('test')
```

### Variables de type composé: Tuple et Enum

#### Les tuples

Définition: un tuple est un tableau avec quelques règles spéciale.
- Nombre d'élément fixe
- Le type des éléments sont connus
- Les types des éléments non pas besoin d'être les mêmes.

```TypeScript
let tab: [string, boolean] 

tab = ["uppercase", true] // Bonne façon de faire

tab = [true, "uppercase"] // Mauvaise façon de faire
```

#### Enums

Permet de créer des listes d'options.

```TypeScript
enum Option {ADMIN, USER, MANAGER}

console.log(Option.USER) // Affiche 1
```

On peut utiliser ces enum dans une interface, par exemple

```TypeScript
enum Role {GOAL, ATTAQUANT, PIVOT, DEMI_CENTRE}

interface Player {
    id: number,
    name: string,
    numero?: number
    role: Role
}

let NicolasK:Player = {
    id: 0,
    name: "Kentin Mahé",
    numero: 13
    role: Role.DEMI_CENTRE
}

console.log(NicolasK.role) // Affiche 3
```

Voilà pour l'essemble des variables. A présent, on va automatiser la compilation, histoire de ne par relancer la commande à chaque fois. L'étape va se passer en deux étapes. En premier, on va créer un fichier tsconfig.json pour gérer la transcription de TypeScript vers JavaScript. En second, on va lancer le watcheur (regardeur) afin que tsc retraduise le fichier dès qu'on fait des modifications dans le fichier.

```bash
ldandoy@host ~
$ tsc --init
message TS6071: Successfully created a tsconfig.json file.
$ tsc -w
```

## Objects

Passons aux variables complexes: les objets. On va déja régarder à quoi ça ressemble en JavaScript, puis nous verrons en TypeScript

```JavaScript
let player = {
    id: 0,
    name: "Kentin Mahé"
}

player.nickname = "Kentinou"

console.log(player)

player = 34

console.log(player )
```

On voit qu'on peut faire beaucoup de chose, pas très jolie en JavaScript. L'interet du TypeScript, sera donc d'avoir un code plus propre et plus sécurisé. On pourrait par exemple créer une interface pour contraindre tout le monde a bien respecter les attributs de player .

```TypeScript
interface Player {
    id: number,
    name: string
}

let KentinM:Player = {
    id: 0,
    name: "Kentin Mahé"
}
```

Si vous voulez gérer les variables qui pourraient ne pas exister, il faut ajouter un ? à la suite du nom.

```TypeScript
interface Player {
    id: number,
    name: string,
    numero?: number
}

let KentinM:Player = {
    id: 0,
    name: "Kentin Mahé"
}

let NicolasK:Player = {
    id: 0,
    name: "Kentin Mahé",
    numero: 13
}
```

## Classes

Maintenant, comme ça marche au niveau des classes. On a donc des attribues et des constructeurs, comme dans les autres languages de programmation. Par contre attention, si vous n'êtes pas sur d'avoir tout les attributs, il faudra bien les déclacrer optionnels au niveau de la création et du constructeur.

```TypeScript
class Produit {
    id: number;
    name: string;
    price?: number;

    constructor(id: number, name: string, price?: number) {
        this.id = id
        this.name = name
        this.price = price
    }
}

const voiture = new Product(0, '306", 15000)
```

## Fonctions

Et voici comment on peut créer une fonction en TypeScript. Dance cas, on en reverra rien, d'où le void, en type de retour.

```TypeScript
const sayHelloToMe = (name: string):void => {
    console.log(`Bonjour ${name}`)
}
```
