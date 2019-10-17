module.exports = {
  base: '/vue-handyga/',
  title: 'Vue Handy GA',
  description: ' Official docs of Handy GA vue plugin',

  themeConfig: {
    search: true,
    searchMaxSuggestions: 5,
    searchPlaceholder: 'Search...',
    lastUpdated: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/quick-start/' },
      { text: 'GitHub', link: 'https://github.com/pedraal/vue-handyga' }
    ],
    sidebar: [
      '/quick-start/',
      '/advanced/'
    ]
  }
}
