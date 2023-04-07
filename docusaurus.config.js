// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const organizationName = "JustNaaby";
const projectName = "vlife-rp-website";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://justnaaby.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/vlife-rp-website/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'JustNaaby', // Usually your GitHub org/user name.
  projectName: 'vlife-rp-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'VLife Serious RP',
        logo: {
          alt: 'Logo VLife',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Règlement/Documentation',
          },
          {
            href: 'https://discord.gg/B9Vh4Tjsfh',
            label: 'Rejoindre le Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Accès rapide',
            items: [
              {
                label: 'Règlement/Documentation',
                to: '/docs/presentation',
              },
              {
                label: 'Boutique',
                to: 'https://boutique.vlite.games/',
              },
            ],
          },
          {
            title: 'Nous rejoindre !',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/B9Vh4Tjsfh',
              },
              {
                label: 'Lien direct vers le serveur',
                href: '#',
              },
            ],
          },
        ],
        copyright: `©VLife ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
