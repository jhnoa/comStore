module.exports = {
  siteMetadata: {
    title: 'VOSPAY',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-react-native-web`,
    `gatsby-plugin-react-next`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-122934050-1',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**', '/do-not-track/me/too/'],
      },
    },
  ],
};
