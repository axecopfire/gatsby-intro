import { graphql, useStaticQuery } from 'gatsby';

const useInstagram = () => {
    const data = useStaticQuery(graphql`
    query {
        allInstaNode(limit: 12) {
          nodes {
            localFile {
              childImageSharp {
                fluid(maxHeight: 120, maxWidth: 120) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            id
            caption
            username
          }
        }
      }
      
    `)
    return data.allInstaNode.nodes.map(node => ({
        ...node.localFile.childImageSharp,
        id: node.id,
        caption: node.caption,
        username: node.username,
    }));
};

export default useInstagram;