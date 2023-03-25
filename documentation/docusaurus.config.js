module.exports = {
  title: 'NestJS-Query',
  tagline: 'Easy CRUD for GraphQL.',
  url: 'https://la-patate-du-coin.github.io', // Your website URL
  baseUrl: '/nestjs-query/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'La-patate-du-coin', // Usually your GitHub org/user name.
  projectName: 'nestjs-query', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'NestJS-Query',
      logo: {
        alt: 'NestJS-Query Logo',
        src: 'img/logo.svg'
      },
      items: [
        { to: 'docs/introduction/getting-started', label: 'Docs', position: 'left' },
        { to: 'docs/faq', label: 'FAQ', position: 'left' },
        { to: 'docs/contributing', label: 'Contributing', position: 'left' },
        {
          href: 'https://github.com/La-patate-du-coin/nestjs-query',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository'
        }
      ]
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/introduction/getting-started'
            },
            {
              label: 'Example',
              to: 'docs/introduction/example'
            }
          ]
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/La-patate-du-coin/nestjs-query'
            }
          ]
        }
      ]
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/La-patate-du-coin/nestjs-query/edit/master/documentation/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
