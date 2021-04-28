# Cours HTML

Voici mon support de cours pour HTML. N'hésitez pas à me faire vos retours sur ce [lien github](http://github.com/ldandoy/cours). Ou par mail: [ldandoy@overconsulting.net](mailto:ldandoy@overconsulting.net)

Ce support est en cours d'écriture et évolue.

## Sommaire <!-- omit in toc -->

- [Cours HTML](#cours-html)
  - [Introduction](#introduction)
  - [Choisir un éditeur de texte](#choisir-un-éditeur-de-texte)
  - [Votre première page HTML](#votre-première-page-html)
  - [Web browser](#web-browser)
  - [Les métas tags](#les-métas-tags)
  - [Les titres](#les-titres)
  - [Les paragraphes](#les-paragraphes)
  - [Formating the page](#formating-the-page)
  - [Links](#links)
  - [Images](#images)
  - [Tables](#tables)
  - [Listes](#listes)
  - [Div et span](#div-et-span)
  - [Formulaires](#formulaires)

## Introduction

Qu'est ce que le HTML ? C'est un markup language ou langage de balisage. C'est à dire une classe spécialisés dans l'enrichissement d'information textuelle. Il est utilisé pour créer des page web.

Le langage HTML est un essemble de balise que l'on va mettre autours des éléments du texte, afin de pouvoir mettre en valeur certain élément, d'ajouter un lien, ou une image.

## Choisir un éditeur de texte

Déjà qu'est-ce qu'un éditeur de texte ? C'est un éditeur, qui vous permettra d'être plus efficace. Dans un premier temps, vous pourriez écrire directement dans notepad, ou textedit suivant si vous êtes sous MacOS ou Windows.

Il existe cependant des éditeurs spécialement designer pour ça. Voici une petite liste non exaustive.

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

Personnellement, j'ai commencé avec nodepad, et même si aujourd'hui je code avec un éditeur de texte, bien sûr ça m'aide à aller plus vite, je pense que commencer par la base, c'est important, pour bien apprendre les bases et les assimilés.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Titre de la page</title>
    </head>
    <body>
        Hello World
    </body>
</html>
```

Maintenant parlons de ce que nous venons d'écrire. Il y a une section 'html' qui englobe les deux sections 'head' et 'body'. La section 'head' englobe elle-même la section 'title' et la section 'body' elle englobe la section 'h1'.

C'est le principe des poupées russes du HTML. Chaque section peut englober d'autres sections. Mais il faut respecter l'ordre d'imbrication. Voici deux cas qui ne sont pas bon.

```html
<b><u>Test</b></u>
</u><b>Test<u></b>
```

L'autre règles pour écrire des balises, est qu'il faut toujours qu'il y en est un tag ouvrant et un tag fermant. C'est l'ensemble des ces deux tags qui créé une balise. On utilise le symbole / devant le même nom que celui utilier pour le tag ouvrant.

```html
<tag>Partie du tag</tag>
```

Une autre règle ou convention que nosu utiliserons est l'indentation. Cela permet de voir visuellement quel élément est dans quel élément. Voici un petit exemple, d'imbrication de balise

```html
<tag>
    <tag1>Partie du tag</tag1>
    <tag2>
        <tag3>Test</tag3>
        <tag4>Test</tag4>
    </tag2>
</tag>
```

## Web browser

Maintenant, nous allons voir ce que nous avons créé. Pour ce faire, il faut ouvrir le fichier HTML que vous venez de créer dans notre navigateur. Vous pouvez utiliser le navigateur que vous voulez pour visualiser votre page. Voici une petite liste non exhaustive.

- [Firefox]()
- [Chrome]()
- [Opera]()
- [Edge]()

## Les métas tags

Les métas tags permettent d'ajouter des informations qui vont servirent au navigateur. Le méta charset est pour définit l'encodage du fichier. Et le meta description est là pour aider au référencement, afin d'afficher la description dans le navigateur.

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

La seconde question est qu'est-ce que c'est que name, content et charset ? Ce sont des attributs. Les tags peuvent avoir des attributs et c'est comme ça qu'on l'est ajouter.

Pour vous aider, dites vous que ce qui est dans la partie 'head', on y mets ce qui n'est pas visible, qui sert à la configuration. Ce qui est dans la section 'body' c'est justement l'inverse, c'est à dire le contenu et ce que l'utilisateur va voir.

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

Attention il ne doitt y avoir qu'un seul titre de niveau 1 dans une page HTML. Sinon au niveau du référencement, il y aura des soucis. En tant que développeur, vous devez faire attention à ce genre de chose.

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
    </body>
</html>
```

Comme vous le voyez l'ordre des lignes dans le fichier est utilisé pour l'affichage dans le navigateur. Le navigateur ne fait pas non plus attention au saut de ligne que l'on peut faire dans le fichier HTML, lors de l'affichage. Donc si vous voulez sauter une ligne il faut uliser 'br'.

Une autre possibilité avec le tag 'hr' est de créer une ligne de séparation. Vous voyez après que l'on peut jouter sur la grosseur du texte avec 'big' et 'small'.

On peut ajouter des commentaires. Pourquoi faire ? Et bien pour garder des traces, de pourquoi vous avez fait tel ou tel partie. Les commenaitres ne sont pas afficher par le navigateur, ils ne servent qu'à vous et aux autres développeurs qui pourraient travailler sur votre site.

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

## Links

## Images

## Tables

## Listes

## Div et span

## Formulaires