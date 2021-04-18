# Cours JavaScript

Voici mon support de cours pour JavaScript. N'hésitez pas à me faire vos retours sur ce [lien github](http://github.com/ldandoy/cours). Ou par mail: [ldandoy@overconsulting.net](mailto:ldandoy@overconsulting.net)

Ce support est en cours d'écriture et évolue.

## Sommaire <!-- omit in toc -->

- [Cours JavaScript](#cours-javascript)
  - [Qu'est ce que la JavaScript et à quoi ça sert ?](#quest-ce-que-la-javascript-et-à-quoi-ça-sert-)
  - [Différence entre JS dans le navigateur ou coté server (NodeJS)](#différence-entre-js-dans-le-navigateur-ou-coté-server-nodejs)
  - [Notre projet: TIC TAC TOE](#notre-projet-tic-tac-toe)
    - [Mise en place du projet (fichiers HTML / CSS / JS)](#mise-en-place-du-projet-fichiers-html--css--js)
    - [Première ligne de JavaScript](#première-ligne-de-javascript)
    - [Les variables](#les-variables)
    - [Les évenements](#les-évenements)
      - [Onmousehover](#onmousehover)
      - [Onclick](#onclick)
    - [Structure de code](#structure-de-code)
      - [Foreach](#foreach)
      - [If - else](#if---else)
    - [](#)

## Qu'est ce que la JavaScript et à quoi ça sert ?

## Différence entre JS dans le navigateur ou coté server (NodeJS)

## Notre projet: TIC TAC TOE

### Mise en place du projet (fichiers HTML / CSS / JS)

Pour mettre en place notre projet on va commencer par créer un fichier HTML, nommé index.html

```html
<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="utf-8" />
		<title>TIC TAC TOE</title>
		<link rel="stylesheet" type="text/css" href="css/styles.css" />
	</head>
	<body>
		<!-- Titre -->
		<h1>TIC TAC TOE</h1>

		<!-- Affichage des Joueurs -->
		<div id="players">
			<div class="player1 player active">
				<span class="player1_play">X</span>: <span>Joueur 1</span>
			</div>
			<div class="player2 player">
				<span class="player2_play">O</span>: <span>Joueur 2</span>
			</div>
		</div>
		
		<!-- Grid de jeu -->
		<table id="table_game">
			<tr>
				<td class="col"></td>
				<td class="col"></td>
				<td class="col"></td>
			</tr>
			<tr>
				<td class="col"></td>
				<td class="col"></td>
				<td class="col"></td>
			</tr>
			<tr>
				<td class="col"></td>
				<td class="col"></td>
				<td class="col"></td>
			</tr>
		</table>

		<script type="text/javascript" src="js/app.js"></script>
	</body>
</html>
```

Une fois ce fichier créé, nous allons ajouter le style, qui va être dans le fichier styles.css dans un dossier nommé css.

```css
body {
	background: white;
}

#players {
	display: flex;
	width: 50%;
	margin: auto;
}

.player {
	width: 50%;
	text-align: center;
	font-size: 30px;
}

.player.active {
	font-weight: bold;
	color: red;
}

#table_game {
	border-collapse: collapse;
    margin: 100px auto;
}

.col {
	border: 1px solid black;
	width: 150px;
	height: 150px;
	text-align: center;
}

.col:hover {
	background: #E3DCCC;
	cursor: pointer;
}
```

Et pour finir, nous allons bien sur créer un fichier JavaScript app.js dans un dossier js.

```JavaScript
console.log("Hello World !")
```

Voilà notre projet JavaScript est créé, vous voyez, c'est assez simple ! Pour la suite, nous allons ajouter notre code dans les différents fichier que nous avons déjà créé.

Pour le moment votre structure de projet (vos dossiers et fichiers) doit ressembler à ça:

```
index.html
css
 |-- styles.css
js
 |-- app.js
```

### Première ligne de JavaScript

A présent, il va falloir ouvrir le fichier HTML dans votre navigateur pour voir le résultat.

Une fois ouvert, vous voyez la partie HTML en place. A présent pour voir la partie JavaScript, il faudra faire un clique droit et cliquer sur inspecter. Alors un volet de votre navigateur va s'ouvrir, et vous pourrez cliquer sur l'onglet console. Et la vous verrez le text Hello World ! s'afficher.

### Les variables

Parlons variables ! Déja qu'est-ce qu'une variable ? Voici la définition Wikipédia

```
En informatique, les variables sont des symboles qui associent un nom (l'identifiant) à une valeur. Dans la plupart des langages et notamment les plus courants, les variables peuvent changer de valeur au cours du temps (dynamique). Dans les langages de certains paradigmes, notamment la programmation fonctionnelle, leur valeur est au contraire figée dans le temps (statique).

Contrairement à une variable, une constante est un identificateur associé à une valeur fixe. Syntaxiquement, cet identificateur a tous les aspects d'une variable. Cependant, il lui est affecté une valeur définitive, c'est-à-dire constante, comme la taille d'un plateau d'échecs (8x8). Une constante contient une valeur qui peut avoir des valeurs différentes suivant les exécutions, à la manière du jeu démineur dont le joueur peut choisir la taille du plateau.

Dans un langage de programmation, une variable est un espace de stockage pour une information.
```

Alors c'est beaucoup de chose pour dire une simple chose. En gros, c'est un endroit en mémoire dans votre ordinateur où vous stocker une information en lui donnant une étiquette pour la rétrouver. Dans l'exemple suivant, je vais créer une variable qui aura pour identifiant "name", et pour valeur "Loïc".

```JavaScript
let name = "Loïc"
```

A présent si je veux rertouver ce que j'ai stocké dans name et bien je n'ai qu'à appeler name. Je vais dire Hello Loïc dans le prochain exemple, en modifiant mon fichier app.js

```JavaScript
let name = "Loïc"

console.log("Hello", name) // Affiche Hello Loïc
```

Je peux modifier la valeur de name, par exemple si je veux dire Hello Cindy après avoir dit Hello Loïc, je peux écrire le code suivant:

```JavaScript
let name = "Loïc"

console.log("Hello", name) // Affiche Hello Loïc

name = "Cindy"

console.log("Hello", name) // Affiche Hello Cindy
```

Bien sûr il y a beaucoup plus de type de variable que simplement des chaines de caractères. Dans ce cours nous verrons les principales.

```JavaScript
let num = 2 // Variable de type entier (integer en anglais)
let num = 4.5 // Variable de type décimal (float en anglais)
let name = "Wentao" // Variable de type chaine de caractères (String en anglais)
let vrai = true // Variable de type vrai ou faux (Boolean en anglais)
let tab = [12, 45, 90, 8] // Variable de type tableau (Array en anglais)
let obj = { id: 1, name: "Pauline" } // Variable de type objets (Object en anglais)
```

### Les évenements

Vous devez vous dire, bon c'est bien gentil tout ça, mais à quoi ça sert ! Personne ne va voir ce qu'il se passe dans la console. Effectivement, comme je vous l'ai dis, le JavaScript permet de dynamiser votre page web. D'aller chercher des informations, puis de mettre à jour le site web, en réagissant aux actions de l'utilisateur.

Nous allons voir quelques action dans un premier temps: lorsque l'on passe la souris au dessus d'un element HTML, puis lorsque l'on clique dessus.

#### Onmousehover

#### Onclick

### Structure de code

#### Foreach

#### If - else

### 