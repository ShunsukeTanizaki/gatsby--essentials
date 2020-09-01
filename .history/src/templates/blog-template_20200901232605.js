import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

import SEO from "../components/seo"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight, } from "@fortawesome/free-solid-svg-icons"



export default ({ data,location, pageContext }) => (
  <Layout>
    <SEO
      pagetitle="ブログ"
      pagedesc="ESSENTIALSのブログです"
      pagepath={location.pathname}
    />
      <section className="content bloglist">
        <div className="container">
          <h1 className="bar">RECENT POSTS</h1>
          <div className="posts">
            {data.allContentfulBlogPost.edges.map(({ node }) => (
              <article className="post" key={node.id}>
                <Link to={`/blog/post/${node.slug}/`}>
                  <figure>
                    <Img
                      fluid={node.eyecatch.fluid}
                      alt={node.eyecatch.description}
                      style={{ height: "100%" }}
                    />
                  </figure>
                  <h3>{ node.title }</h3>
                </Link>
              </article>
            ))}
          </div>
          <ul className="pagenation">
            {!pageContext.isFirst && (
            <li className="prev">
              <Link
                to={
                  pageContent.currentPage === 2
                    ? `/blog/`
                    : `/blog/${pageContext.currentPage - 1}/`
                }
                rel="prev"
              >
              <FontAwesomeIcon icon={faChevronLeft} />
                <span>前のページ</span>
              </Link>
            </li>
            )}
            
            <li className="next">
              <a href="base-blog.html" rel="next">
                <span>次のページ</span>
              <FontAwesomeIcon icon={faChevronRight} />
              </a>
            </li>
          </ul>
        </div>
      </section>
  </Layout>
)

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulBlogPost(
      sort: {fields: publishDate, order: DESC}
      skip: $skip
      limit: $limit
      ) {
      edges {
        node {
          title
          id
          slug
          eyecatch {
            fluid(maxWidth: 500) {
              ...GatsbyContentfulFluid_withWebp
            }
            description
          }
        }
      }
    }
  }
`