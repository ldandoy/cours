// src/pages/index.js

/**
 * Composant responsable de la page d'accueil
 * 
 * @author Loïc DANDOY <ldandoy@overconsulting.net>
 */

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