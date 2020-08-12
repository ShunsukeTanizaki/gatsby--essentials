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
        locale
        fbappid
      }
    }
  }
  `)
  const title = props.pagetitle ? `${props.pagetitle} | ${data.site.siteMetadata.title}` : data.site.siteMetadata.title
  const description = props.pagedesc || data.site.siteMetadata.description

  const url = props.pagepath ? `${data.site.siteMetadata.siteUrl}${props.pagepath}` : data.site.siteMetadata.siteUrl

  const imgurl = props.pageimg ? `${data.site.siteMetadata.siteUrl}${props.pageimg}` : `${data.site.siteMetadata.siteUrl}/thumb.jpg`
  
  const imgw = props.pageimgw || 1280
  const imgh = props.pageimgh || 640


  
  return (
    <Helmet>
      <html lang={data.site.siteMetadata.lang} />
      <title>{ title }</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <mata propety="og:site_name" content={data.site.siteMetadata.title} />
      <mata propety="og:title" content={title} />
      <mata propety="og:description" content={description} />
      <mata propety="og:url" content={url} />
      <mata propety="og:type" content="website" />
      <mata propety="og:locale" content={data.site.siteMetadata.locale} />
      <mata propety="fb:app_id" content={data.site.siteMetadata.fbappid} />
    </Helmet>
  )
}
