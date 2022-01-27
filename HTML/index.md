# Cours HTML

CEci est un support de cours pour apprendre le HTML. N'hésitez pas à me faire vos retours sur ce [github](http://github.com/ldandoy/cours), ou par mail: [ldandoy@overconsulting.net](mailto:ldandoy@overconsulting.net)

## Sommaire <!-- omit in toc -->

- [Cours HTML](#cours-html)
  - [Introduction](#introduction)
  - [Historique](#historique)
  - [Choisir un éditeur de texte](#choisir-un-éditeur-de-texte)
  - [Votre première page HTML](#votre-première-page-html)
  - [Web browser](#web-browser)
  - [Les métas tags](#les-métas-tags)
  - [Les titres](#les-titres)
  - [Les paragraphes](#les-paragraphes)
  - [Formating the page](#formating-the-page)
  - [abbr](#abbr)
  - [address](#address)
  - [Links](#links)
  - [Nav](#nav)
  - [Images](#images)
  - [Audio et Vidéo](#audio-et-vidéo)
  - [Embed](#embed)
  - [Code](#code)
  - [Details](#details)
  - [Tables](#tables)
  - [Listes](#listes)
    - [Les listes ordonnées](#les-listes-ordonnées)
    - [Les listes désordonnées](#les-listes-désordonnées)
    - [Les listes descriptives](#les-listes-descriptives)
  - [Div et span](#div-et-span)
  - [Formulaires](#formulaires)
    - [Les différents type d'input](#les-différents-type-dinput)
    - [Les selects](#les-selects)
  - [Script et noscript](#script-et-noscript)
  - [Link](#link)

## Introduction

Qu'est ce que le HTML ?

HTML signifie "HyperText Markup Language". C’est un langage qui permet de composer des pages web. On parle de langage de balisage et non de langage de programmation, car le but du HTML est d’encadrer les différents éléments présents dans une page (images, titres, paragraphes ...) par des balises pour leur permettre d’être mis en forme secondairement (via une feuille de style) et pour leur donner du sens.

Les pages web sont composées de texte brut, parfaitement lisible avec le moindre éditeur de texte, dans lequel on retrouvera donc les balises.

Ces balises fonctionnent le plus souvent par paire, car comme nous l’avons dit, elles servent à encadrer un élément. Il existe donc une balise ouvrante pour signifier le début d’un élément et une balise fermante pour en signifier la fin.

## Historique



## Choisir un éditeur de texte

Commençons par définir ce qu'est un éditeur de texte ! Un éditeur de texte vous permet d'être plus efficace et d'écrire du texte. Pour commencer, vous pourriez écrire directement dans le blocnote, ou textedit suivant si vous êtes sous Windows ou MacOS.

Il existe cependant des éditeurs spécialement designer pour écrire du code. Certain vont êter spécialisé uniquement dans un language alors que d'autre vous permettrons d'écrire plusieurs language différent. Voici une petite liste non exaustive.

Pour les gratuits:

- [Sublime Text 3](https://www.sublimetext.com/3)
- [Atom](https://atom.io/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [APTANA](http://www.aptana.com/)
- [Brackets](http://brackets.io/)
- [Nova](https://nova.app/) 

Pour ceux qui sont payants:

- [webstorm](https://www.jetbrains.com/fr-fr/webstorm/)

## Votre première page HTML

Nous allons créer notre première page HTML, et ainsi découvrir comment structurer une page HTML. La première chose va être de créer un dossier dans lequel vous pourrez stoker tous vos fichiers HTML.

```bash
$ touch test.html
```

En suite nous allons modifier le fichier HTML. voici ce que nous allons écrire de dans. Je vous recommande d'écrire toutes les lignes, et ne pas faire un copier coller. C'est comme ça que vous apprendrez et que tout cela deviendra naturel pour vous.

Personnellement, j'ai commencé avec nodepad, et même si aujourd'hui je code avec un éditeur de texte, bien sûr ça m'aide à aller plus vite, je pense que commencer par les bases, et donc d'écrire toutes ces balises au départ.

Voici ce que nous allons ecrire dans notre fichier test.html

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Titre de la page</title>
    </head>
    <body>
        <h1>Hello World</h1>
    </body>
</html>
```

Maintenant parlons de ce que nous venons d'écrire. Il y a une section 'html' qui englobe les deux sections 'head' et 'body'. La section 'head' englobe elle-même la section 'title' et la section 'body' elle englobe la section 'h1'.

C'est le principe des poupées russes du HTML. Chaque section peut englober d'autres sections. Mais il faut respecter l'ordre d'imbrication. Voici deux cas qui ne sont pas bon.

```html
<b><u>Test</b></u>
</u><b>Test<u></b>
```

L'autre règle pour écrire des balises, est qu'il faut toujours qu'il y en est un tag ouvrant et un tag fermant. C'est l'ensemble des ces deux tags qui créé une balise. Pour le tag ouvrant, on écrit le nom entre < et >. Puis on ajoute le symbole / devant le même nom que celui utilier pour le tag ouvrant, afin de faire le tag fermant.

```html
<tag>Contenu du tag</tag>
```

Une autre règle ou convention que nous utiliserons est l'indentation. Cela permet de voir visuellement quel élément est contenu dans quel élément. Voici un petit exemple, d'imbrication de balise

```html
<tag>
    <tag1>Partie du tag</tag1>
    <tag2>
        <tag3>Test</tag3>
        <tag4>Test</tag4>
    </tag2>
</tag>
```

Ici la balise tag contient deux balises tag1 et tag2. tag1 quand à lui contient du text, alors que tag2 contient deux éléments: tag3 et tag4.

## Web browser

Maintenant, nous allons voir ce que nous avons créé. Pour ce faire, il faut ouvrir le fichier HTML que vous venez de créer dans notre navigateur. Vous pouvez utiliser le navigateur que vous voulez pour visualiser votre page. Voici une petite liste non exhaustive.

- [Firefox]()
- [Chrome]()
- [Opera]()
- [Edge]()

## Les métas tags

Les métas tags permettent d'ajouter des informations qui vont servirent au navigateur. Le méta charset est utilisé pour définit l'encodage du fichier. Et le meta description est là pour aider au référencement, afin d'afficher la description dans le moteur de recherche.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='UTF-8' />
        <meta name="description" content="Description du site web" />
        <title>Titre de la page</title>
    </head>
    <body>
        Hello World
    </body>
</html>
```

Revenons un peut sur ce que l'on vient d'écrire. La première question que l'on doit se poser c'est pourquoi il n'y a pas de tag fermant pour les balises meta ? Et bien comme il n'y a pas de contenu dans la balise, on a pas besoin de le fermer. On se contente juste d'ajouter / à la fin de la balise.

La seconde question est: qu'est-ce que c'est que name, content et charset ? Ce sont des attributs. Les tags peuvent avoir des attributs et c'est comme ça qu'on l'ai ajoute.

Pour aller plusi loin, dites vous que ce qui est dans la partie 'head',  n'est pas visible, et que ça sert à la configuration. Pour ce qui est dans la section 'body', c'est justement l'inverse, c'est le contenu, en gros, ce que l'utilisateur va voir.

## Les titres

Pour commencer, nous allons déjà mettre un titre dans notre page. Il y a en HTML 6 niveau de titre. Les balises s'écrivent comme suit:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='UTF-8' />
        <meta name="description" content="Description du site web" />
        <title>Titre de la page</title>
    </head>
    <body>
        <h1>Titre de niveau 1</h1>
        <h2>Titre de niveau 2</h2>
        <h3>Titre de niveau 3</h3>
        <h4>Titre de niveau 4</h4>
        <h5>Titre de niveau 5</h5>
        <h6>Titre de niveau 6</h6>
    </body>
</html>
```

Attention il ne doit y avoir qu'un seul titre de niveau 1 dans une page HTML. Sinon au niveau du référencement, il y aura des soucis. En tant que développeur, vous devez faire attention à ce genre de chose. En suite attention de bien respecter l'ordre, évitez de mettre des h3 sous des h5, respecter l'ordre hiérarchique !!

## Les paragraphes

Le second tag, dont nous allons parler est p pour paragraphe.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='UTF-8' />
        <meta name="description" content="Description du site web" />
        <title>Titre de la page</title>
    </head>
    <body>
        <h1>Titre de niveau 1</h1>
        <p>Texte du paragraphe.</P>
    </body>
</html>
```

Pour la suite, nous allons voir comment mettre en gras et en italique certaines partie de notre paragraphe. On peut aussi souligné une partie du texte.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='UTF-8' />
        <meta name="description" content="Description du site web" />
        <title>Titre de la page</title>
    </head>
    <body>
        
        <p>Texte du <i>premier</i> paragraphe.</P>


        <h1>Titre de niveau 1</h1>
        <p><b>Texte du</b> second <u>paragraphe</u>.</P>



        <p>Test<br />de <small>saut</small> de <big>ligne</big></p>
        <p>H<sub>2</sub>O</p>
        <!-- Commentaire -->
        <p>10<sup>2</sup></p>
        <hr />

        <p>Ma <mark>couleur</mark> préférée est <del>bleu</del> <ins>rouge</ins>!</p>
    </body>
</html>
```

Comme vous le voyez l'ordre des lignes dans le fichier est utilisé pour l'affichage dans le navigateur. Le navigateur ne fait pas non plus attention au saut de ligne que l'on peut faire dans le fichier HTML, lors de l'affichage. Donc si vous voulez sauter une ligne il faut uliser 'br'.

Une autre possibilité avec le tag 'hr' est de créer une ligne de séparation. Vous voyez après que l'on peut jouer sur la grosseur du texte avec 'big' et 'small'.

On peut ajouter des commentaires. Pourquoi faire ? Et bien pour garder des traces, de pourquoi vous avez fait tel ou tel partie du code. Les commenaitres ne sont pas afficher par le navigateur, ils ne servent qu'à vous et aux autres développeurs qui pourraient travailler sur votre site.

## Formating the page

Avec la version 5 de HTML, on a des tags qui permettent de bien organiser son code. Voici la structure que nous devrions toujours suivre. Tous ces tags ne sont pas obligatoire, mais recommandé. 

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='UTF-8' />
        <meta name="description" content="Description du site web" />
        <meta name="author" content="" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, inital-scale=1.0" />
        <title>Titre de la page</title>
    </head>
    <body>
        <header>
            <nav></nav>
        </header>
        <main>
            <section>
                <article></article>
                <article></article>
                <article></article>
            </section>
            <section>
                <article></article>
                <article></article>
                <article></article>
            </section>
            <aside></aside>
        </main>
        <footer></footer>
    </body>
</html>
```

## abbr

Vous pouvez utiliser des abréviation et donner leur signification au survol de la souris.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='UTF-8' />
        <meta name="description" content="Description du site web" />
        <meta name="author" content="" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, inital-scale=1.0" />
        <title>Titre de la page</title>
    </head>
    <body>
        l'abrviation <abbr title="World Wide Web">WWW</abbr> a été créé en 1989.
    </body>
</html>
```

## address

Si vous avez besoin de formater l'affichage d'une adresse, vous pouvez utiliser le tag address.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='UTF-8' />
        <meta name="description" content="Description du site web" />
        <meta name="author" content="" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, inital-scale=1.0" />
        <title>Titre de la page</title>
    </head>
    <body>
        <address>
        Nous rencontrer:<br>
        Overconsulting.net<br>
        Route Léon LARREGAIN<br>
        64240 HASPARREN
        </address>
    </body>
</html>
```

## Links

Maintenant que serait un site si on ne pouvait pas aller de page en page et de site en site ? On ne parlerait plus de toile. Voici les trois exemple de lien que l'on retrouver

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='UTF-8' />
        <meta name="description" content="Description du site web" />
        <meta name="author" content="" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, inital-scale=1.0" />
        <title>Titre de la page</title>
    </head>
    <body>
        <a href="#pied">Lien vers le pied de page</a>
        
        <ul id="pied">
            <li><a href="exemple.html" target="_blank">Lien vers une page du site</a></li>
            <li><a href="http://google.fr" target="_blank">Liver vers une page d'un autre site externe</a></li>
        </ul>
    </body>
</html>
```

Pour différencier les liens, tout ce jour au niveau de l'attribut href. Si vous commencer par un # alors automatiquement, lorsque vous cliquerez dessus, le navigateur va chercher un élement qui aura pour id, ce que vous avez ecrit après le # dans notre exemple pied.

Pour le second lien, il ne commence par rien, et doit pointer vers un fichier qui existe, sinon bien sur le navigateur vous renverra la fameuse erreur Not Found 404. Il ne trouvera pas le lien vu que le fichier que vous demander n'existe pas.

Pour le troisième, les liens qui renvoir vers d'aute site itnernet, ils doivent commencer par http:// ou https://, sinon ils resteront dans le site actuel et risque de ne pas trouver le fichier.

## Nav

Si vous voulez affichier un menu sur votre site web, il faudra regrouper les liens créer par les bases a dans un élément nav

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='UTF-8' />
        <meta name="description" content="Description du site web" />
        <meta name="author" content="" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, inital-scale=1.0" />
        <title>Titre de la page</title>
    </head>
    <body>
         <nav>
            <a href="#html">HTML</a> |
            <a href="#css">CSS</a> |
            <a href="#js">JavaScript</a> |
            <a href="#python">Python</a>
        </nav> 
    </body>
</html>
```

## Images

Pour continuer a quoi ressemblerait un site internet sans image ? A rien, on est bien d'accord. Alors comment est-ce que l'on peut faire pour afficher une image sur un site

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='UTF-8' />
        <meta name="description" content="Description du site web" />
        <meta name="author" content="" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, inital-scale=1.0" />
        <title>Titre de la page</title>
    </head>
    <body>
        <figure>
            <img src="img.jpg" alt="text alternatif" width="150" height="150" />
            <figcaption>Fig.1 - Infos sur la photo.</figcaption>
        </figure>
    </body>
</html>
```

Voilà comment ajouter une image. l'attribut src, va vous servire pour préciser quelle image vous voulez afficher. l'attrivut alt est le texte afficher lorsque l'on ne peut pas trouver l'image, où si vous utilisez un navigateur configurer pour l'aide à la navigation.

figcaption permet quand a lui d'afficher une légende en dessous l'image. le tout doit être contenue dans un tag figure, pour être bien aligné.

Pour finir nous avons deux attributs width et height, qui permettent de spécifer la largeur et la hauteur de l'image en pixels évidement.

## Audio et Vidéo

Commençons par le tag audio, voici comment ajouter une chanson et donner la possibilité de le lire directement dans le navigateur.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='UTF-8' />
        <meta name="description" content="Description du site web" />
        <meta name="author" content="" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, inital-scale=1.0" />
        <title>Titre de la page</title>
    </head>
    <body>
        <audio controls>
            <source src="horse.ogg" type="audio/ogg">
            <source src="horse.mp3" type="audio/mpeg">
            Votre navigateur ne supporte pas de lecteur audio.
        </audio>
    </body>
</html>
```

Attention, il n'y a que trois type de formats audios que l'on peut utilsier: MP3, WAV et OGG.

Vous pouvez ajouter la possibilité de passer à la chanson suivante, de modifier le son en ajoutant l'attribut controls.

Le tab video est très semblable, mais lui, il ne peut lire que les formats suivant: MP4, WebM et OGG.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='UTF-8' />
        <meta name="description" content="Description du site web" />
        <meta name="author" content="" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, inital-scale=1.0" />
        <title>Titre de la page</title>
    </head>
    <body>
        <video width="320" height="240" controls>
            <source src="movie.mp4" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
            Votre navigateur ne supporte pas de lecteur video.
        </video>
    </body>
</html>
```

Bien sur vous pouvez toujours utiliser les attributs width et height pour gérer la largeur et la hauteur du lecteur vidéo.

## Embed

Il peut parfois arriver que vous vouliez ajouter une partie d'un site web dans votre site web. Par exemple une vidéo Youtube.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='UTF-8' />
        <meta name="description" content="Description du site web" />
        <meta name="author" content="" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, inital-scale=1.0" />
        <title>Titre de la page</title>
    </head>
    <body>
        <embed type="text/html" src="snippet.html" width="500" height="200"> 
    </body>
</html>
```

Il faut préciser le type de ressource que vous aller récupérer, et l'endroit ou elle se trouve dans l'attribut src. Bien sûr whidth et height, servent toujours à spécifier la taille de la zone ou s'affiche l'élément.

## Code

Si vous voulez afficher des bouts de code, vous devez utiliser le tag code

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='UTF-8' />
        <meta name="description" content="Description du site web" />
        <meta name="author" content="" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, inital-scale=1.0" />
        <title>Titre de la page</title>
    </head>
    <body>
        <p>Pour définir un <code>button</code> en HTML.</p>
    </body>
</html>
```

## Details

Comment ajouter un mot et lorsque l'on clique dessus on affiche une définition

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='UTF-8' />
        <meta name="description" content="Description du site web" />
        <meta name="author" content="" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, inital-scale=1.0" />
        <title>Titre de la page</title>
    </head>
    <body>
        <details>
            <summary>Pays basque</summary>
            <p>Le Pays basque (en basque: Euskal Herria; en espagnol : País Vasco), soit le pays de la langue basque (l'euskara), est un territoire de traditions (anciennes, renouvelées, ou nouvelles), de cultures et d'histoire basque, terre traditionnelle du peuple autochtone des Basques1 dont la langue basque est actuellement parlée par 28,4 % de la population et comprise par 44,8 %2,3. Appelé au Moyen Âge Vasconie et très probablement Cantabrie à l’époque romaine, il s'étend de l'Èbre à l'Adour, sur deux pays, l'Espagne principalement et la France, à cheval sur l'extrémité occidentale de la chaîne des Pyrénées, et est baigné par le golfe de Gascogne.</p>
    </details>
</body>
</html>
```

## Tables

A présent passons au tableau. Voici un exemple qui vous permettra de voir toutes les possibilités de création d'un tableau:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='UTF-8' />
        <meta name="description" content="Description du site web" />
        <meta name="author" content="" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, inital-scale=1.0" />
        <title>Titre de la page</title>
    </head>
    <body>
        <table>
            <caption>Texte d'info sur le tableau</caption>
            <thead>
                <tr>
                    <th>Header 1</th>
                    <th>Header 2</th>
                    <th>Header 3</th>
                    <th>Header 4</th>
                    <th>Header 5</th>
                </tr>
            </thead>
            <body>
                <tr>
                    <td>A1</td>
                    <td>A2</td>
                    <td>A3</td>
                    <td>A4</td>
                    <td>A5</td>
                </tr>
                <tr>
                    <td>B1</td>
                    <td rowspan="2">B2</td>
                    <td>B4</td>
                    <td colspan="2">B5</td>
                </tr>
                <tr>
                    <td>C1</td>
                    <td>C2</td>
                    <td>C3</td>
                    <td>C4</td>
                </tr>
            </tbody>
        </table>
    </body>
</html>
```

## Listes

Il ya trois types de listes.

### Les listes ordonnées

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='UTF-8' />
        <meta name="description" content="Description du site web" />
        <meta name="author" content="" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, inital-scale=1.0" />
        <title>Titre de la page</title>
    </head>
    <body>
        <ol>
            <li>Line 1</li>
            <li>Line 2</li>
            <li>Line 3</li>
            <li>Line 4</li>
        </ol>
    </body>
</html>
```

### Les listes désordonnées

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='UTF-8' />
        <meta name="description" content="Description du site web" />
        <meta name="author" content="" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, inital-scale=1.0" />
        <title>Titre de la page</title>
    </head>
    <body>
        <ul>
            <li>Line 1</li>
            <li>Line 2</li>
            <li>Line 3</li>
            <li>Line 4</li>
        </ul>
    </body>
</html>
```

### Les listes descriptives

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='UTF-8' />
        <meta name="description" content="Description du site web" />
        <meta name="author" content="" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, inital-scale=1.0" />
        <title>Titre de la page</title>
    </head>
    <body>
        <dl>
            <dt>Coffee</dt>
            <dd>Black hot drink</dd>
            <dt>Milk</dt>
            <dd>White cold drink</dd>
        </dl> 
    </body>
</html>
```

## Div et span

Avant de parler des formulaires, il faut que nous parlions de deux éléments HTML. Commençons par div. A quoi sert une div, ça nous permet de créer des blocks dans la page HTML. Lorsque l'on fait la mise en page d'un site, elles sont utilisées pour placer et styler les éléments de la page.

La balise span, elle permet de mettre du style sur du texte dans un paragraphe ou une div

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='UTF-8' />
        <meta name="description" content="Description du site web" />
        <meta name="author" content="" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, inital-scale=1.0" />
        <title>Titre de la page</title>
    </head>
    <body>
        <div>
            Ceci est un texte de test. Pour tester les div et les <span>span</span>
        </div>
    </body>
</html>
```

## Formulaires

Mais qu'en ai-t-il de vos utilisateurs. Jusqu'à présent vous n'avez fait que donner de l'information à vos visiteur, mais il est temps de leur demander leur avis et d'avoir un retour de leur part !

Pour ce faire, le HTML propose d'utiliser des formulaires qui contiennent un certain nombre de champs. Mais pour commencer vous dever tout entourer d'une balise form. voici un premier exemple

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='UTF-8' />
        <meta name="description" content="Description du site web" />
        <meta name="author" content="" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, inital-scale=1.0" />
        <title>Titre de la page</title>
    </head>
    <body>
        <form action="" method="">
            ...
        </form>
    </body>
</html>
```

Dans ce formulaire, on voit qu'il y a deux attributs, action qui permet de dire sur quel page on va être redirigé une fois le formulaire envoyer, et method qui permet de définir la forme de la requête qui sera envoyer au serveur.

Il n'y a que deux requètes possible en HTML: GET et POST. Pourtant le protocole HTTP, en propose beaucoup plus. Si vous voulez en savoir plus je vous propose de vous rendre sur le lien suivant: [https://developer.mozilla.org/fr/docs/Web/HTTP/Methods](https://developer.mozilla.org/fr/docs/Web/HTTP/Methods) qui est la document officiel de la fondation Mozilla. bien sûr les autres navigateur ont leur interpréation, mais sur ce point, elle est sensiblement la même.

### Les inputs

Maintenant voyont pas exemple comment faire un formulaire authentification, où l'on demanderait un email et un mot de passe

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='UTF-8' />
        <meta name="description" content="Description du site web" />
        <meta name="author" content="" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, inital-scale=1.0" />
        <title>Titre de la page</title>
    </head>
    <body>
        <form action="" method="">
            <label for="email">Entrez votre adresse email</label>
            <input 
                type="email"
                id="email"
                name="email"
                required="required"
                placeholder="Text lorsque rien est écrit dans le champs"
            />

            <label for="pwd">Entrez votre mot de passe</label>
            <input 
                type="password"
                id="pwd"
                name="pass"
                required="required"
                placeholder="Text lorsque rien est écrit dans le champs"
            />

            <input type="submit" value="Envoyer" name="send" />
        </form>
    </body>
</html>
```

### Les différents type d'input

| Types     |      Description      |
|-----------|:-------------------------:|
| text      | Permet la saisie de text |
| email     | Permet de valider que l'entrée est bien une adresse mail |
| number    | Permet de valider que l'entrée un nombre, et affiche deux flêches pour augmenter ou diminuer la valeur |
| radio     | Permet d'autoriser un choix entre plusieurs possibilité |
| checkbox  | Permet d'autoriser plusieurs choix entre plusieurs possibilité |
| submit    | Permet d'envoyer le formulaire |

### Les selects

Si vous avez plusieurs valeurs à proposer vous pouver utiliser des menus déroulant ou select. Voici deux exemples, un à simple selection, et le second à multiple selection

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='UTF-8' />
        <meta name="description" content="Description du site web" />
        <meta name="author" content="" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, inital-scale=1.0" />
        <title>Titre de la page</title>
    </head>
    <body>
        <form action="" method="">
            <label for="email">Entrez votre adresse email</label>
            <select name="choix1">
                <option value="1">Choix 1</option>
                <option value="2">Choix 2</option>
                <option value="3">Choix 3</option>
            </select>

            <label for="pwd">Entrez votre mot de passe</label>
            <select name="choix2" multiple >
                <option value="1">Lion</option>
                <option value="2">Tigre</option>
                <option value="3">Marmotte</option>
            </select>

            <input type="submit" value="Envoyer" name="send" />
        </form>
    </body>
</html>
```

### Les textareas

Si vous avez besoin d'une zone de texte plus grande vous pouvez utiliser un textarea comme l'exemple qui suit.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='UTF-8' />
        <meta name="description" content="Description du site web" />
        <meta name="author" content="" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, inital-scale=1.0" />
        <title>Titre de la page</title>
    </head>
    <body>
        <form action="" method="">
            <label for="email">Entrez votre adresse email</label>
            <textarea
                name=""
                id=""
                rows="10"
                cols="10"
                placeholder="Text lorsque rien est écrit dans le champs"
            >
                
            </textarea>

            <input type="submit" value="Envoyer" name="send" />
        </form>
    </body>
</html>
```

## Script et noscript

si vous devez ou voulez ajouter du code Javascript ou autre dans vos pages, vous pouvez utiliser la balise script. Il est bien pour gérer les navigateur qui ne gère pas la balise ou si celui-ci est désactivé de le dire à celui qui navigue sur voter site.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='UTF-8' />
        <meta name="description" content="Description du site web" />
        <meta name="author" content="" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, inital-scale=1.0" />
        <title>Titre de la page</title>
    </head>
    <body>
        <script>
            document.write("Hello World!")
        </script>
        <noscript>Votre navigateur de supporte pas le JavaScript!</noscript> 
    </body>
</html>
```

## Link

Maintenant que nous avons vu les balises HTML, il en reste bien sûr, mais elles sont annecdotique, et très peut utilisées. Avant de passer à la partie CSS, nous devons voir la balise link qui justement va vous permettre d'afficher du style dans votre page.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='UTF-8' />
        <meta name="description" content="Description du site web" />
        <meta name="author" content="" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, inital-scale=1.0" />
        <title>Titre de la page</title>
         <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <div>
            Ceci est un texte de test. Pour tester les div et les <span>span</span>
        </div>
    </body>
</html>
```

Dans cet exemple, nous appelons et appliquerons les styles contenus dans le fichier styles.css