module.exports = {
  siteMetadata: {
    title: `nishgt | Tasarım Topluluğu`,
    name: `nishgt`,
    siteUrl: `https://nishgt.vercel.app`,
    description: `Grafik tasarımı öğrencilerinin oluşturduğu muazzam bir topluluk.`,
    hero: {
      heading: `Grafik tasarımı öğrencilerinin oluşturduğu muazzam bir topluluk.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/nishgt`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/nishgt2021`,
      },
      {
        name: `twitter`,
        url: `https://twitter.com/nishgt`,
      },
      {
        name: `behance`,
        url: `https://behance.net/nishgt`,
      },
      {
        name: `youtube`,
        url: `https://www.youtube.com/channel/UCdwXaVSjaVJn7voSY9Ugd5Q`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        fill: '#f7931e',
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
