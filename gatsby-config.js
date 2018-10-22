const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        'tlob-theme': path.join(__dirname, 'src'),
        'tlob-theme-config': path.join(__dirname, 'src/config'),
        '@bedegaming/tlob-library': path.join(__dirname, '../tlob-library/lib'),
      },
    },
  ],
}
