import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby";

export default props => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
        description
        lang
        siteUrl
      }
    }
  }
  `)
  const title = props.pagetitle ? `${props.pagetitle} | ${data.site.siteMetadata.title}` : data.site.siteMetadata.title
  const description = props.pagedesc || data.site.siteMetadata.description
  
  return (
    <Helmet>
      <html lang={data.site.siteMetadata.lang} />
      <title>{ title }</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={data.site.siteMetadata.siteUrl}
    </Helmet>
  )
}
