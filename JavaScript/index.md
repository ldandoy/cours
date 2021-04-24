# Cours JavaScript

Voici mon support de cours pour JavaScript. N'hésitez pas à me faire vos retours sur ce [lien github](http://github.com/ldandoy/cours). Ou par mail: [ldandoy@overconsulting.net](mailto:ldandoy@overconsulting.net)

Ce support est en cours d'écriture et évolue.

## Sommaire <!-- omit in toc -->

- [Cours JavaScript](#cours-javascript)
	- [Qu'est ce que la JavaScript et à quoi ça sert ?](#quest-ce-que-la-javascript-et-à-quoi-ça-sert-)
	- [Différence entre JS dans le navigateur ou coté server (NodeJS)](#différence-entre-js-dans-le-navigateur-ou-coté-server-nodejs)
	- [LE DOM](#le-dom)
	- [Notre projet: TIC TAC TOE](#notre-projet-tic-tac-toe)
		- [Mise en place du projet (fichiers HTML / CSS / JS)](#mise-en-place-du-projet-fichiers-html--css--js)
		- [Première ligne de JavaScript](#première-ligne-de-javascript)
		- [Les variables](#les-variables)
		- [Les selectors](#les-selectors)
		- [Les évenements](#les-évenements)
			- [Onmousehover](#onmousehover)
			- [Onclick](#onclick)
		- [Structure de code](#structure-de-code)
			- [If - else](#if---else)
			- [Foreach](#foreach)
		- [Fonctions](#fonctions)
		- [LocalStorage](#localstorage)

## Qu'est ce que la JavaScript et à quoi ça sert ?

## Différence entre JS dans le navigateur ou coté server (NodeJS)

Qu'elles sont les grosses différences entre le Js dans le navigateur et dans nodeJS ? Je dirais surtout et avant tout, elles sont visuel. Avec nodeJs, on aura rien de très visuel, si ce n'est un retour HTML. Mais il n'y aura pas d'évenements comme le clique de la sourit, ou la récupération d'information venant d'un formulaire. Ca sera essentiellement de la génération de données.

Alors que dans un navigateur, on aura surtout de la gestion d'évenement, de la reaction par rapport à ce que fait l'utilisateur sur le site. A contrario, on aura très peu de génération de données.

Mais par contre, on pourrai tout à faite avoir du JavaScript dans le navigateur, qui fait appel à un JavaScript qui se trouver côté serveur (NodeJS).

## LE DOM

## Notre projet: TIC TAC TOE

Pour apprendre le JavaScript, nous allons créer un jeu le TIC TAC TOE aussi appelé morpion. Nous explorerons le JavaScript grâce à cette exemple.

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
    margin: 50px auto;
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

.win {
	border: 1px solid rgb(11, 105, 66);
	background: #c7ffbc!important;
	color: rgb(11, 105, 66);
}

#msg {
	text-align: center;
	margin: 50px auto 0px;
	font-weight: bold;
	border: 1px solid rgb(11, 105, 66);
	display: none;
	width: 50%;
	padding: 20px;
	background: #c7ffbc;
	color: rgb(11, 105, 66);
	border-radius: 10px;
}

#scores {
	display: flex;
	width: 50%;
	margin: auto;
}

.score {
	width: 50%;
	text-align: center;
	font-size: 20px;
}

a {
	color: red;
	text-decoration: none;
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

### Les selectors

Alors comme vous l'avez vu, dans notre TIC TAC TOE, il va nous falloir accéder au différents éléments (Nom du joueur, marquer la case ou le joueur joue). On donc reprendre un peu notre HTML.

On va aussi ajouter un élément HTML, avec un id msg, afin d'afficher tous les messages.

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
				<span class="player1_play">X</span>: <span class="player1_name">Joueur 1</span>
			</div>
			<div class="player2 player">
				<span class="player2_play">O</span>: <span class="player2_name">Joueur 2</span>
			</div>
		</div>

		<!-- message div -->
		<div id="msg"></div>
		
		<!-- Grid de jeu -->
		<table id="table_game">
			<tr>
				<td class="col a1"></td>
				<td class="col a2"></td>
				<td class="col a3"></td>
			</tr>
			<tr>
				<td class="col b1"></td>
				<td class="col b2"></td>
				<td class="col b3"></td>
			</tr>
			<tr>
				<td class="col c1"></td>
				<td class="col c2"></td>
				<td class="col c3"></td>
			</tr>
		</table>
		
		<script type="text/javascript" src="js/app.js"></script>
	</body>
</html>
```

A présent passons à la partie JS. Nous allons nous servire de tous ce qu'on a vu jusque là. Création de variable et bien sûr utilisation des selecteurs. Alors nous allons pincipalement en voir 3 (getElementById, querySelector et querySelectorAll).

Pour le selecteur getElementById, il s'utilise de la façon suivante: document.getElementById(), c'est le plus ancien des trois. Il va donc servir à cibler un élément particulier du DOM. Normalement chaque element de la page, a un nom de base (h1, a, img...) dessus, on peut ajouter deux types d'identificateur (class et id).

La différence entre les deux, est que id doit être unique, et class peut être réutiliser. Dans notre exemple on voit bien que l'id msg n'est utilisé qu'une fois car il ne sera pas à plusieurs endroit, alors que col, est utilisé sur chaque colonne, c'est pour ça qu'on a utiliser une class pour col et non pas un id.

Si on va plus loin, on aurait pu mettre des id pour a1, a2 a3... Très c'est ce qu'on va faire alors !

```html
<!-- Grid de jeu -->
<table id="table_game">
	<tr>
		<td id="a1" class="col"></td>
		<td id="a2" class="col"></td>
		<td id="a3" class="col"></td>
	</tr>
	<tr>
		<td id="b1" class="col"></td>
		<td id="b2" class="col"></td>
		<td id="b3" class="col"></td>
	</tr>
	<tr>
		<td id="c1" class="col"></td>
		<td id="c2" class="col"></td>
		<td id="c3" class="col"></td>
	</tr>
</table>
```

Voilà qui est mieux ! A présent, on voit bien que ne peut pas utiliser document.getElementById() pour adresser des classes, c'est pour cela que document.querySelectorAll() a été créé. Vous pouvez ainsi cibler tous les éléments qui ont la même classe. Et si jamais vous voulez cibler un seul élément, qui n'aurait qu'un classe il est possible avec document.querySelector(). ces deux dernières fonctions utilisent la même chose que le CSS à savoir un "." avant le nom des classes et un '#' devant le nom de id.

A présent il va falloir utliser ces fonctions dans notre code. Dans un premier temps, nous allons vider le fichier app.js. Et ajouter le code suivant.

```JavaScript
// js/app.js

let cols = document.querySelectorAll(".col");
let a1 = document.querySelector('.a1');
let a2 = document.querySelector('.a2');
let a3 = document.querySelector('.a3');
let b1 = document.querySelector('.b1');
let b2 = document.querySelector('.b2');
let b3 = document.querySelector('.b3');
let c1 = document.querySelector('.c1');
let c2 = document.querySelector('.c2');
let c3 = document.querySelector('.c3');
```

Nous avons donc créer 10 variables, 9 pour chaques cases de la grille de jeu, et 1 qui sera un tableau contenant toutes les cases. Nous avons besoin des deux, car on va ajouter des évènements sur les cases, pour gérer lorsque l'on passe al souris sur une case ou lorsque l'on clique dessus. Et d'un autre côté on aura besoin de savoir ce qu'il y a dans chaques cases, c'est pour cela qu'on besoin des toutes ces variables.

### Les évenements

Effectivement, comme je vous l'ai dis, le JavaScript permet de dynamiser votre page web. D'aller chercher des informations, puis de mettre à jour le site web, en réagissant aux actions de l'utilisateur.

Nous allons voir quelques actions dans un premier temps: lorsque l'on passe la souris au dessus d'un element HTML, puis lorsque l'on clique dessus.

#### Onmousehover

Effectivement, nous aimerions bien que le fond de couleur des cases de la grille change de couleur lorsque l'on passe la souris dessus. Bien sûr il y a une solution simple en CSS, mais il nous voulons faire du JS.

```JavaScript
// js/app.js

cols.forEach((col) => {
	col.onmouseover = (e) => {
		e.target.style.background = 'silver';
	}

	col.onmouseleave = (e) => {
		console.log('out')
		e.target.style.background = 'none';
	}
})
```

#### Onclick

Maintenant ajouter la gestion du clique pour cliquer quand on veut jouer dans une case. On va ajouter une variable current_player afin pouvoir switcher par la suite de joueur.

```JavaScript
// js/app.js

let current_player = 1;

cols.forEach((col) => {
	col.onmouseover = (e) => {
		e.target.style.background = 'black';
	}

	col.onmouseleave = (e) => {
		console.log('out')
		e.target.style.background = 'none';
	}

	col.onclick = (e) => {
        e.target.innerHTML = document.querySelector('.player'+current_player+'_play').innerHTML;
    }
})
```

A présetn quand on clique on voit aparaitre une croix dans chaque case. Il va falloir changer de joueur entre chaque clique.

### Structure de code

Dans cette nouvelle section, nous allons voir les structures de code. Les boucles (For, while, Foreach...), puis les strcutures de condifiton (If et Switch)

#### If - else

On va donc utiliser la scruture if - else, afin de pouvoir switcher d'utilisateur. Modifions la partie onclique.

```JavaScript
col.onclick = (e) => {
	e.target.innerHTML = document.querySelector('.player'+current_player+'_play').innerHTML;

	// Switch the current_player after playing
	if (current_player == 1) {
		current_player = 2;
	} else {
		current_player = 1;
	}
}
```

Mais comme vous le voyez à présent on peux cliquer sur une case déjà cocher, certe on change d'utilisateur, mais on ne doit pas pouvoir recliquer dans une case déjà joué. On va rajouter un teste, pour savoir si la case est vide ou non. Pour ce faire un continue à modifier la partie onclique sans toucher au reste.

```JavaScript
col.onclick = (e) => {
	if (e.target.innerHTML == "") {
		e.target.innerHTML = document.querySelector('.player'+current_player+'_play').innerHTML;

		// Switch the current_player after playing
		if (current_player == 1) {
			current_player = 2;
		} else {
			current_player = 1;
		}
	}
}
```

Maintenant, on voudrait bien pouvoir changer visuellement le joueur qui doit jouer. Si vous regarder bien le HTML, vous voyez que nous avons utilisé une class active pour désigner qui était le joueur actif. Il n'y a qu'a retirer cette classe à lancer joueur et l'ajouter au nouveau. Bien sûr on continue à modifier la partie onclique, tout ce fait au clique de la case.

```JavaScript
col.onclick = (e) => {
	if (e.target.innerHTML == "") {
		e.target.innerHTML = document.querySelector('.player'+current_player+'_play').innerHTML;

		// remove the active class from the current_player
		document.querySelector(".player"+current_player).classList.remove("active");

		// Switch the current_player after playing
		if (current_player == 1) {
			current_player = 2;
		} else {
			current_player = 1;
		}

		// Add the active class to current_player
		document.querySelector(".player"+current_player).classList.add("active");
	}
}
```

#### Foreach

Revenons un instant à ce que nous avons fait. Je vous ai dis que dans la variables "cols", il y avait l'ensemble des elements, c'est donc un tableau. Et j'ai utilisé foreach pour le parcourir.

```JavaScript
cols.forEach((col) => {
	console.log(col)
})
```

Si vous ajouter la ligne console.log et que vous regarder dans la console, vous verrez bien tous les éléments. ForEach, est un boucle qui va refaire le code contenue entre les paranthèses, pour chaque élément de cols. A chaque fois col, va prendre la valeur du nouvel élément.

### Fonctions

A présent il nous reste à finir les choses. On va créer un nouveau fichier helpers.js

```JavaScript
function showMsg(message) {
	let msg =  document.querySelector('#msg');
	msg.innerHTML = message;
    msg.style.display = "block";
}

function clearMsg() {
    let msg =  document.querySelector('#msg');
	msg.innerHTML = "";
    msg.style.display = "none";
}
```


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
				<span class="player1_play">X</span>: <span class="player1_name">Joueur 1</span>
			</div>
			<div class="player2 player">
				<span class="player2_play">O</span>: <span class="player2_name">Joueur 2</span>
			</div>
		</div>

		<!-- message div -->
		<div id="msg"></div>
		
		<!-- Grid de jeu -->
		<table id="table_game">
			<tr>
				<td class="col a1"></td>
				<td class="col a2"></td>
				<td class="col a3"></td>
			</tr>
			<tr>
				<td class="col b1"></td>
				<td class="col b2"></td>
				<td class="col b3"></td>
			</tr>
			<tr>
				<td class="col c1"></td>
				<td class="col c2"></td>
				<td class="col c3"></td>
			</tr>
		</table>
		
		<script type="text/javascript" src="js/helpers.js"></script>
		<script type="text/javascript" src="js/app.js"></script>
	</body>
</html>
```

Grace à ces fonctions, nous allons pouvoir afficher un message lorsque l'a personne ne clique pas au bon endroit.

```JavaScript
col.onclick = (e) => {
	if (e.target.innerHTML == "") {
		e.target.innerHTML = document.querySelector('.player'+current_player+'_play').innerHTML;

		// remove the active class from the current_player
		document.querySelector(".player"+current_player).classList.remove("active");

		// Switch the current_player after playing
		if (current_player == 1) {
			current_player = 2;
		} else {
			current_player = 1;
		}

		// Add the active class to current_player
		document.querySelector(".player"+current_player).classList.add("active");
	} else {
		// When a player play in a not empty cell
		showMsg('Vous ne pouvez pas jouer ici. La case a déjà été joué. !');
	}
}
```

On peut aussi effacer les messages lorsque l'on clique.

```JavaScript
col.onclick = (e) => {
	// on efface les messages
	clearMsg();

	if (e.target.innerHTML == "") {
		e.target.innerHTML = document.querySelector('.player'+current_player+'_play').innerHTML;

		// remove the active class from the current_player
		document.querySelector(".player"+current_player).classList.remove("active");

		// Switch the current_player after playing
		if (current_player == 1) {
			current_player = 2;
		} else {
			current_player = 1;
		}

		// Add the active class to current_player
		document.querySelector(".player"+current_player).classList.add("active");
	} else {
		// When a player play in a not empty cell
		showMsg('Vous ne pouvez pas jouer ici. La case a déjà été joué. !');
	}
}
```

Avant de passer au score, nous devons stopper la partie lorsque l'un des deux joueurs gagne. Voilà à quoi va ressembler notre programme. Effectivement il faudra créer la fonction checkGame(). Nous la mettrons dans le fichier helpers.
J'en ai profité pour supprimer le petit console.log('ou') qui trainait dans le onmouseleave.

```JavaScript
// js/app.js

let cols = document.querySelectorAll(".col");
let a1 = document.querySelector('.a1');
let a2 = document.querySelector('.a2');
let a3 = document.querySelector('.a3');
let b1 = document.querySelector('.b1');
let b2 = document.querySelector('.b2');
let b3 = document.querySelector('.b3');
let c1 = document.querySelector('.c1');
let c2 = document.querySelector('.c2');
let c3 = document.querySelector('.c3');

let current_player = 1;
let game_win = false;

cols.forEach((col) => {
	col.onmouseover = (e) => {
		e.target.style.background = 'silver';
	}

	col.onmouseleave = (e) => {
		e.target.style.background = 'none';
	}

    col.onclick = (e) => {
        // on efface les messages
	    clearMsg();

        // Checked if the player can click on the cell
		if (!game_win) {
            if (e.target.innerHTML == "") {
                e.target.innerHTML = document.querySelector('.player'+current_player+'_play').innerHTML;

				game_win = checkGame();

				if (game_win) {
					showMsg(document.querySelector(
						'.player'+current_player+'_name').innerHTML + " win the game !<br />" +
						'Do you want to play again ? <a href="">Clique here !</a>'
					);
				} else {
					// remove the active class from the current_player
					document.querySelector(".player"+current_player).classList.remove("active");
			
					// Switch the current_player after playing
					if (current_player == 1) {
						current_player = 2;
					} else {
						current_player = 1;
					}
			
					// Add the active class to current_player
					document.querySelector(".player"+current_player).classList.add("active");
				}
            } else {
                // When a player play in a not empty cell
                showMsg('Vous ne pouvez pas jouer ici. La case a déjà été joué. !');
            }
        } else {
			// When the game is ended
			showMsg('La partie est terminée !');
		}
    }
})
```

Et voici la fonction checkGame()

```JavaScript
function checkGame() {
    game_win = false;

    // check the end of the game
    if (a1.innerHTML != "" && a1.innerHTML == a2.innerHTML && a1.innerHTML == a3.innerHTML) {
        a1.classList.add('win');
        a2.classList.add('win');
        a3.classList.add('win');
        game_win = true;
    }

    if (b1.innerHTML != "" && b1.innerHTML == b2.innerHTML && b1.innerHTML == b3.innerHTML) {
        b1.classList.add('win');
        b2.classList.add('win');
        b3.classList.add('win');
        game_win = true;
    }

    if (c1.innerHTML != "" && c1.innerHTML == c2.innerHTML && c1.innerHTML == c3.innerHTML) {
        c1.classList.add('win');
        c2.classList.add('win');
        c3.classList.add('win');
        game_win = true;
    }

    if (a1.innerHTML != "" && a1.innerHTML == b1.innerHTML && a1.innerHTML == c1.innerHTML) {
        a1.classList.add('win');
        b1.classList.add('win');
        c1.classList.add('win');
        game_win = true;
    }

    if (a2.innerHTML != "" && a2.innerHTML == b2.innerHTML && a2.innerHTML == c2.innerHTML) {
        a2.classList.add('win');
        b2.classList.add('win');
        c2.classList.add('win');
        game_win = true;
    }

    if (a3.innerHTML != "" && a3.innerHTML == b3.innerHTML && a3.innerHTML == c3.innerHTML) {
        a3.classList.add('win');
        b3.classList.add('win');
        c3.classList.add('win');
        game_win = true;
    }

    if (a1.innerHTML != "" && a1.innerHTML == b2.innerHTML && a1.innerHTML == c3.innerHTML) {
        a1.classList.add('win');
        b2.classList.add('win');
        c3.classList.add('win');
        game_win = true;
    }

    if (a3.innerHTML != "" && a3.innerHTML == b2.innerHTML && a3.innerHTML == c1.innerHTML) {
        a3.classList.add('win');
        b2.classList.add('win');
        c1.classList.add('win');
        game_win = true;
    }
    
    return game_win;
}
```

Pour finir modifier quelque peu la fonction onmouseleave.

```JavaScript
col.onmouseleave = (e) => {
	col.onmouseleave = (e) => {
        if(e.target.classList.value.includes('win')) {
            e.target.style.background = '#c7ffbc';
        } else {
            e.target.style.background = 'none';
        }
	}
}
```

### LocalStorage

Dans un premier temps ajoutons la partie HTML au niveau des scores.

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
				<span class="player1_play">X</span>: <span class="player1_name">Joueur 1</span>
			</div>
			<div class="player2 player">
				<span class="player2_play">O</span>: <span class="player2_name">Joueur 2</span>
			</div>
		</div>

		<!-- Scores for the players -->
		<div id="scores">
			<div class="score">
				<span class="player1_score">0</span>
			</div>
			<div class="score">
				<span class="player2_score">0</span>
			</div>
		</div>

		<!-- message div -->
		<div id="msg"></div>
		
		<!-- Grid de jeu -->
		<table id="table_game">
			<tr>
				<td class="col a1"></td>
				<td class="col a2"></td>
				<td class="col a3"></td>
			</tr>
			<tr>
				<td class="col b1"></td>
				<td class="col b2"></td>
				<td class="col b3"></td>
			</tr>
			<tr>
				<td class="col c1"></td>
				<td class="col c2"></td>
				<td class="col c3"></td>
			</tr>
		</table>
		
		<script type="text/javascript" src="js/helpers.js"></script>
		<script type="text/javascript" src="js/app.js"></script>
	</body>
</html>
```

Puis modifions notre app.js afin de prendre en compte les scores. Pour le localstorage, il ya deux fonctions qui vont nous être utile.
localStorage.getItem(<nom de l'item>) et localStorage.setItem(<nom de l'item>, <valeur de l'item>). Voyons comment on va s'en servire. La première chose étant de mettre en place le score du début. Donc on regarde si on a un score en base de donnée, et sinon on le créé à 0.

```JavaScript
// js/app.js

let cols = document.querySelectorAll(".col");
let a1 = document.querySelector('.a1');
let a2 = document.querySelector('.a2');
let a3 = document.querySelector('.a3');
let b1 = document.querySelector('.b1');
let b2 = document.querySelector('.b2');
let b3 = document.querySelector('.b3');
let c1 = document.querySelector('.c1');
let c2 = document.querySelector('.c2');
let c3 = document.querySelector('.c3');

// Set the scrore from localstorage
if (localStorage.getItem('scrore_1') == null) {
	document.querySelector('.player1_score').innerHTML = 0;
	localStorage.setItem('scrore_1', 0);
	
}
if (localStorage.getItem('scrore_2') == null) {
	document.querySelector('.player2_score').innerHTML = 0;
	localStorage.setItem('scrore_2', 0);
}

document.querySelector('.player1_score').innerHTML = localStorage.getItem('scrore_1');
document.querySelector('.player2_score').innerHTML = localStorage.getItem('scrore_2');

let current_player = 1;
let game_win = false;
```

Puis on va mettre à jour le score lorsque le joueur gagne. On calcule le nouveau score, et ensuite on l'affiche.

```JavaScript
if (game_win) {
	showMsg(document.querySelector(
		'.player'+current_player+'_name').innerHTML + " win the game !<br />" +
		'Do you want to play again ? <a href="">Clique here !</a>'
	);

	// Here we manage the scrore with localstorage
	localStorage.setItem('scrore_'+current_player, parseInt(localStorage.getItem('scrore_'+current_player)) + 1);
	document.querySelector('.player'+current_player+'_score').innerHTML = localStorage.getItem('scrore_'+current_player);
}
```