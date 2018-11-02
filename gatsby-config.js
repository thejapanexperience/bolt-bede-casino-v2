const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Bede Casino',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Bede Casino',
        short_name: 'bedecasino',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/bede-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        'bolt-bede-casino-v2': path.join(__dirname, 'src'),
        'bolt-bede-casino-v2-config': path.join(__dirname, 'src/config'),

        // Turn on local dev for library
        // '@bedegaming/bolt-v2': path.join(__dirname, '../bolt-v2/lib'),
      },
    },
  ],
};
