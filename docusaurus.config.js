// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const myTheme = require("shiki/themes/one-dark-pro.json")
const {
  remarkCodeHike,
} = require("@code-hike/mdx")



/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'وثقني',
  tagline: 'القالب الرسمي',
  url: 'http://localhost:3000',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  themes: ["mdx-v2",
  [require.resolve("@easyops-cn/docusaurus-search-local"),
  /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
  ({
    hashed: true,
  })]
],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'spices', // Usually your GitHub org/user name.
  projectName: 'وثقني', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          beforeDefaultRemarkPlugins: [
            [remarkCodeHike, {         
              ineNumbers: true,
              showCopyButton: true,
              theme: myTheme,
            }],
          ],
          sidebarPath: require.resolve('./sidebars.js'),
        },

        blog: {
            showReadingTime: true,
          },
        theme: {
          customCss: [
            require.resolve("@code-hike/mdx/styles.css"),
            require.resolve('./src/css/custom.scss')
          ]
        },
      }),
    ],
  ],

  themeConfig:    ({
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */


      navbar: {
        title: 'وثقني',
        logo: {
          alt: 'شعار وثقني',
          src: 'img/wathqny-icon.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'الشرح',
          },
          {to: '/blog', label: 'مقالات', position: 'left'},
          {to: '/api', label: 'api reference ', position: 'left'},
          {
            href: 'https://github.com/wathqny',
            className: 'pseudo-icon github-icon',
            position: 'right',
          },
          {
            href: 'https://discord.gg/7NKDpEpSfV',
            className: 'pseudo-icon discord-icon',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'روابط',
            items: [
              {
                label: 'الشرح',
                to: '/docs',
              },
              {
                label: 'المقالات',
                to: '/blog',
              },
              {
                label: 'api reference',
                to: '/api',
              },
            ],
          },
          {
            title: 'المجتمع',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/7NKDpEpSfV',
              },
            ],
          },
          {
            title: 'المزيد',
            items: [

              {
                label: 'GitHub',
                href: 'https://github.com/wathqny',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} wathqny and spices Built with Docusaurus and Codehike.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api',
        path: 'api',
        routeBasePath: 'api',
      },
    ],
  ],

};

module.exports = config;
