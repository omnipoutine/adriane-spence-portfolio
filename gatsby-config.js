module.exports = {
  siteMetadata: {
    title: `Adriane Spence`,
    titleTemplate: `%s · Industrial Designer`,
    siteUrl: `https://dazzling-pika-20e680.netlify.app/`,
    description: `Industrial Designer based in Toronto, Canada.`,
    icon: `/icon.png`,
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
  `gatsby-transformer-sharp`,`gatsby-plugin-image`,{
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 800,
          },
        },
      ],
    },
      },`gatsby-plugin-react-helmet`
    ]
};