module.exports = {
  siteMetadata: {
    siteUrl: "https://dare-to-connect.io",
    title: "Dare To Connect",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-197339258-1",
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "wip",
        path: `${__dirname}/wip`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dare to Connect`,
        short_name: `DtC`,
        start_url: `/`,
        background_color: `#e9e7e3`,
        theme_color: `#d25349`,
        display: `standalone`,
        icon: `img/icon.png`
      }
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-remark-images",
    "gatsby-remark-prismjs",
  ],
};
