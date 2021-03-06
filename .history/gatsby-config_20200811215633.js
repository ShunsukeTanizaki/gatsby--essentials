/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
/* Your site config here */
  siteMetadata: {
    title: `ESSENTIALS`,
    description: `美味しい食材と食事を追求するサイト`,
    lang: `ja`,
    siteUrl: `https://shun21-gatsby-test-site1.netlify.app/`
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-react-helmet`
  ],
}
