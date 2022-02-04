module.exports = {
  siteMetadata: {
    title: '1042',
    description:
      '일상과 공상 사이',
    url: 'https://damyo.co.kr',
    author: 'damyo',
    image: 'https://damyo.co.kr/og-image.jpg',
    intro: '일상과 공상 사이',
    menuLinks: [
      {
        name: '1042',
        slug: '/',
      },
      {
        name: 'About',
        slug: '/about/',
      },
    ],
    footerLinks: [
      {
        name: '',
        url: '',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-theme-amsterdam',
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Theme Amsterdam`,
        short_name: `Amsterdam`,
        background_color: `#f5f0eb`,
        theme_color: `#f5f0eb`,
        start_url: `/`,
        display: `standalone`,
        icon: require.resolve('./src/images/favicon.png'),
      },
    },
  ],
}
