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