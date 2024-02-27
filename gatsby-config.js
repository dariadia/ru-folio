const config = require('./src/config');

module.exports = {
  siteMetadata: {
    title: 'Дьячкова Даша - старший фронтенд разработчик, ментор.',
    description:
      'Я специализируюсь на UX и инклюзивности веб-приложений и сайтов. Старший фронтенд разработчик и руководитель небольшой фронтенд команды (менее 6 человек) с более чем 5-летним опытом работы в React, Node.js и TypeScript.',
    siteUrl: 'https://dariadia-portfolio-ru.vercel.app/',
    image: '/og.png',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    'gatsby-plugin-remove-console',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/favicon/icon.png',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 700,
              linkImagesToOriginal: true,
              quality: 90,
              tracedSVG: { color: config.colors.accent },
            },
          },
        ],
      },
    },
  ],
};
