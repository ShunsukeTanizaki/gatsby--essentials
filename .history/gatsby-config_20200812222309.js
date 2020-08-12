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
    siteUrl: `https://shun21-gatsby-test-site1.netlify.app/`,
    locale: `ja_JP`,
    fbappid: `XXXXXXXXXXXXXXXXXXXXXXXXXXXXX`,
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
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      potions: {
        name: `ESSENTIALS エッセンシャルズ`,
        short_name: `ESSENTIALS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `477294`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
