module.exports = {
  siteMetadata: {
    title: `Adriane Spence Portfolio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },{
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "markdown-pages",
      "path": `${__dirname}/projects/`
    },
    __key: "markdown-pages"
  },{
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": `${__dirname}/src/images/`
    },
    __key: "images"
  },`gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,`gatsby-transformer-remark`,`gatsby-plugin-image`,]
};