const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const blogresult = await graphql(`
  query {
    allContentfulBlogPost(sort: {fields: publishDate, order: DESC}) {
      edges {
        node {
          id
          slug
        }
      }
    }
  }
  `)
  if (blogresult.errors) {
    reporter.panicOnBuild(`GlaphQLのクエリでエラーが発生しました`)
    return
  }
}