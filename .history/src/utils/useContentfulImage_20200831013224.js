import { useStaticQuery, graphql } from "gatsby"

export default assetUrl => {
    const { allContentfulAsset } = useStaticQuery(graphql`
    query MyQuery {
        allContentfulAsset {
          nodes {
          file {
              url
            }
            fluid(maxWidth: 785) {
              ...GatsbyContentfulFuild_withWebp
            }
          }
        }
      }
    `)
  return allContentfulAsset.nodes.find(n => n.file.url === assetUrl).fluid
}