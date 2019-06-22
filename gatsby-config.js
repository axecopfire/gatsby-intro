module.exports = {
    siteMetadata: {
        title: 'Frontend Masters Gatsby Workshop',
        description: "A site we built togetther during a full-day Frontend Masters Gatsby Workshop!",
    },
    plugins: [
        'gatsby-plugin-emotion', 'gatsby-plugin-react-helmet',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-mdx',
            options: {
                defaultLayouts: {
                    default: require.resolve('./src/components/layout.js'),
                },
                gatsbyRemarkPlugins: [
                    { resolve: 'gatsby-remark-images'}
                ]
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: './posts',
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './images',
            }
        },
    ],
};