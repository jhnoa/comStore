require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: process.env.pageTitle,
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
