import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
        __typename
        allMdx {
          nodes {
            excerpt
            frontmatter {
              title
              slug
              author
              image {
                sharp: childImageSharp {
                  fluid(
                    maxWidth: 100
                    maxHeight: 100
                    duotone: { shadow: "#663399", highlight: "#ddbbff" }
                  ) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    `)

    return data.allMdx.nodes.map(post => ({
            title: post.frontmatter.title,
            author: post.frontmatter.author,
            slug: post.frontmatter.slug,
            image: post.frontmatter.image,
            excerpt: post.excerpt
        })); 
};

export default usePosts;