module.exports = {
  siteMetadata: {
    title: 'Computer Store',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-react-native-web`,
    `gatsby-plugin-react-next`,
    {
      resolve: 'gatsby-plugin-resolve-src',
      options: {
        addSassLoader: false,
      },
    },
  ],
};
