// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "10101 - Decentralised finance. For real.",
  tagline: "Decentralised finance. For real.",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "get10101", // Usually your GitHub org/user name.
  projectName: "10101", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/get10101/10101.github.io",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-ZNPPSDPC4H",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "10101.finance",
        logo: {
          alt: "10101 logo",
          src: "img/logo/logo.svg",
          srcDark: "img/logo/logo_dark-theme.svg",
        },
        items: [
          { to: "/blog", label: "Blog", position: "left" },
          {
            html: "Twitter",
            href: "https://twitter.com/get10101",
            position: "right",
          },
          {
            html: "Telegram",
            href: "https://t.me/get10101",
            position: "right",
          },
          {
            html: "GitHub",
            href: "https://github.com/get10101/10101",
            position: "right",
          },
          {
            html: "Sign up for the beta!",
            href: "https://9hxmx82rnq8.typeform.com/to/UiZyrhSC",
            position: "left",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            items: [
              {
                label: "Back to top ⬆️",
                to: "/blog",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/get10101",
              },
              {
                label: "Telegram",
                href: "https://t.me/get10101",
              },
              {
                label: "GitHub",
                href: "https://github.com/get10101/10101",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 10101, Built with ♥️ by CoBloX`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
