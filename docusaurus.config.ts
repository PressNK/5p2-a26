import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import path from 'path';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Préparation au stage',
  tagline: 'Quartier général',
  favicon: 'img/logonyancat.png',

  // Set the production url of your site here
  url: 'https://pressnk.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/5p2-a26/',

  trailingSlash: true,
  noIndex: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'PressNK', // Usually your GitHub org/user name.
  projectName: '5p2-a26', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    algolia: {
      // The application ID provided by Algolia
      appId: '84SX0HF54Y',

      // Public API key: it is safe to commit it
      apiKey: '5366d8f4020267f776f51a652a62b87b',

      indexName: 'prod_docs',
    },
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Préparation au Stage',
      logo: {
        alt: 'Préparation au Stage',
        src: 'img/logonyancat.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Quartier Général',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Benoit Tremblay / Cégep de Drummondville / Développement d'applications Web I (${new Date().getFullYear()})`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['csharp', 'cshtml'],
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {start: 'highlight-start', end: 'highlight-end'},
        },
        {
          className: 'code-block-error-line',
          line: 'highlight-error',
          block: {start: 'highlight-error-start', end: 'highlight-error-end'},
        },
      ],
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    function htmlCssRawLoaderPlugin() {
      return {
        name: 'html-css-raw-loader',
        // Instead of mutating, just return the rules you need,
        // Docusaurus will merge them in for you.
        configureWebpack: () => ({
          module: {
            rules: [
              {
                test: /\.html$/i,
                include: path.resolve(__dirname, 'src/playground'),
                type: 'asset/source',
              },
              {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src/playground'),
                type: 'asset/source',
              },
            ],
          },
        }),
      };
    },
  ],
};

export default config;
