# Cours Gatsby

Voici mon support de cours pour Gatsby. N'hésitez pas à me faire vos retours sur ce [lien github](http://github.com/ldandoy/cours). Ou par mail: [ldandoy@overconsulting.net](mailto:ldandoy@overconsulting.net)

Ce support est en cours d'écriture et évolue.

## Sommaire <!-- omit in toc -->

- [Cours Gatsby](#cours-gatsby)
  - [Installation de Gatsby-cli](#installation-de-gatsby-cli)
  - [Démarrage du projet.](#démarrage-du-projet)
  - [Et graphQL dans tout ça ?](#et-graphql-dans-tout-ça-)

## Installation de Gatsby-cli

```bash
$ npm install -g gatsby-cli
```

## Démarrage du projet.

On va commencer par créer un dossier, puis initialiser un projet node. Si vous n'avez pas node et npm d'installer sur votr machine, vous pouvez vous rendre sur le cours de NodeJS, afin de savoir comment les installer.

```bash
$ mkdir my-blog
$ cd my-blog
$ npm init -y
```
A présent nous allons installer les modules nécessaires pour le fonctionnement de gastby.

```bash
$ npm i gatsby react react-dom react-helmet
```

En suite nous allons créer le répertoire src et à l'interieur un dossier pages qui contiendra toutes les pages. Et pour finir créons notre premier page.

```bash
$ mkdir src/pages
$ touch src/pages/index.js
```

```JavaScript
// src/pages/index.js

import React from 'react'

const Home = () => {
    return (
        <div>
            <h1>Hello World !</h1>
        </div>
    )
}

export default Home
```

Pour notre blog, nous voulons utiliser des fichiers markdown pour écrire nos articles. Il va falloir installer quelques plugins avant de commencer.

```bash
$ npm install gatsby-plugin-mdx @mdx-js/mdx @mdx-js/react gatsby-source-filesystem
```

Maintenant pour configurer notre application gatsby, nous allons créer un fichier de configuration gatsby-config.js.

```bash
$ touch gatsby-config.js
```

```JavaScript
module.exports = {
    siteMetadata: {
        title: `gatsby crash course`,
        author: {
            name: "Loïc DANDOY",
            summary: ""
        },
        description: '',
        siteUrl: 'http://localhost:8000',
        social: {
            twitter: ``,
        }
    },
    plugins: [
        `gatsby-plugin-mdx`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/blog`,
                name: `blog`
            }
        }
    ]
}
```

Nous allons créer un dossier blog, puis 2021 de dans. En suite nous créerons un blog, qui vous faudra dupliquer pour avoir quelques articles.

## Et graphQL dans tout ça ?

```JavaScript
import React from 'react'
import { graphql } from 'gatsby'

const Home = ({data}) => {
    console.log(data)

    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.desccription
    const posts = data.allMdx.nodes

    return (
        <div>
            <h1>Blog Posts</h1>
            {posts.map(post => {
                const title = post.frontmatter.title || post.fields.slug
                return(
                    <div>
                        <h1>{title}</h1>
                        <p>{post.frontmatter.date}</p>
                        <p>{post.frontmatter.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Home

export const pageQuery = graphql`
    {
        site {
            siteMetadata {
                description
                title
            }
        }
        allMdx(sort: { fields: [frontmatter___date], order: DESC}){
            nodes {
                excerpt
                slug
                frontmatter {
                    date(formatString: "Do MMMM YYYY")
                    title
                    description
                }
            }
        }
    }
`
```