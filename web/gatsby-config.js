module.exports = {
  siteMetadata: {
    title: `Space Ocean`,
    description: `Space Ocean website to illustrate our talents`,
    author: `@karadumanb`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/static/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/assets/images/background-home.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Roboto`,
                variants: [`300`, `400`, `500`, `700`],
              },
              {
                family: `Montserrat`,
                variants: [`300`, `400`, `500`, `700`],
              },
              {
                family: `Bungee Shade`,
              },
            ],
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "src": "src",
          "components": "src/components",
        },
        extensions: []
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
